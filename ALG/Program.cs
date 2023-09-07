using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using YamlDotNet.RepresentationModel;
using DotLiquid;

namespace AwesomeList;

public class Program
{
    static readonly string yamlItemsPath = "items";
    
    static readonly string yamlSortingFile = "sorting.yml";

    static readonly string liquidTemplate = "readme.liquid";

    static readonly string outputFile = "README.md";

    static readonly Dictionary<string, List<AwesomeItem>> tagList = new();

    static void Main(string[] args)
    {
        Console.WriteLine($"Processing YAML desired order file ({yamlSortingFile})...");

        var awesomeOrderedList = LoadDesiredOrderYAML(yamlSortingFile);
        Console.WriteLine("Desired order:");
        DisplayAwesomeListTree(awesomeOrderedList);
        Console.WriteLine();

        Console.WriteLine($"Processing YAML items in folder ({yamlItemsPath})...");

        var awesomeUnorderedList = LoadItemsYAML(yamlItemsPath);
        Console.WriteLine("Loaded items:");
        DisplayAwesomeListTree(awesomeUnorderedList);
        Console.WriteLine();

        Console.WriteLine($"Merging lists...");
        MergetIntoOrderedList(awesomeOrderedList, awesomeUnorderedList);
        Console.WriteLine("Final ordered list:");
        DisplayAwesomeListTree(awesomeOrderedList);
        Console.WriteLine();

        Console.WriteLine($"Processing Liquid template ({liquidTemplate})...");

        GenerateFile(awesomeOrderedList, liquidTemplate, outputFile);

        var fi = new FileInfo(outputFile);
        Console.WriteLine($"Output: {fi.FullName}");

        Console.WriteLine("Done");
    }

    private static void DisplayAwesomeListTree(AwesomeList awesomeList)
    {
        awesomeList.Tags.ForEach(t =>
        {
            Console.WriteLine($"  {t.Tag}: {t.Items.Count()} items");
            if (t.Tags.Count() != 0)
            {
                t.Tags.ForEach(t =>
                {
                    Console.WriteLine($"    {t.Tag}: {t.Items.Count()} items");
                });
            }
        });
    }

    private static void MergetIntoOrderedList(AwesomeBase orderedList, AwesomeBase unorderedList)
    {
        orderedList.Items.AddRange(unorderedList.Items.OrderBy(i => i.Title));

        foreach (var unorderedItem in unorderedList.Tags.OrderBy(t => t.Tag))
        {
            var i = orderedList.Tags.IndexOf(unorderedItem);
            if (i >= 0)
            {
                var orderedItem = orderedList.Tags[i];
                MergetIntoOrderedList(orderedItem, unorderedItem);
            }
            else
            {
                var newItem = new AwesomeTag(unorderedItem.Tag);
                newItem.Items.AddRange(unorderedItem.Items.OrderBy(i => i.Title));
                newItem.Tags.AddRange(unorderedItem.Tags.OrderBy(t => t.Tag));

                orderedList.Tags.Add(newItem);
            }
        }
    }

    private static AwesomeList LoadDesiredOrderYAML(string yamlSortingFile)
    {
        var al = new AwesomeList();

        // Get the desired sorting from sorting file
        using (StreamReader reader = File.OpenText(yamlSortingFile))
        {
            var yaml = new YamlStream();
            yaml.Load(reader);

            var mapping = (YamlMappingNode)yaml.Documents[0].RootNode;
            var items = ((YamlSequenceNode)mapping["Sorting"]).Children;
            foreach (var item in items)
            {
                if (item is YamlScalarNode) al.Tags.Add(new AwesomeTag(((YamlScalarNode)item).Value));
                if (item is YamlMappingNode)
                {
                    var node = ((YamlMappingNode)item).Children;

                    var tag = ((YamlScalarNode)node[0].Key).Value;
                    var at = new AwesomeTag(tag);

                    foreach (var c in ((YamlSequenceNode)node[0].Value).Children)
                    {
                        var subTag = ((YamlScalarNode)c).Value;
                        at.Tags.Add(new AwesomeTag(subTag));
                    }

                    al.Tags.Add(at);
                }
            }
        }

        return al;
    }

    private static AwesomeList LoadItemsYAML(string yamlItemsPath)
    {
        var al = new AwesomeList();

        // Read the items file
        foreach (var yamlItemsFile in Directory.EnumerateFiles(yamlItemsPath, "*.yml", SearchOption.TopDirectoryOnly))
        {
            Console.WriteLine($"  Processing: {yamlItemsFile}");
            using (StreamReader reader = File.OpenText(yamlItemsFile))
            {
                var yaml = new YamlStream();
                yaml.Load(reader);

                var mapping = (YamlMappingNode)yaml.Documents[0].RootNode;

                foreach (var entry in mapping.Children)
                {
                    var node = ((YamlMappingNode)entry.Value).Children;

                    // Get data from yaml element
                    var title = ((YamlScalarNode)entry.Key).Value ?? string.Empty;
                    var description = ((YamlScalarNode)node["description"]).Value ?? string.Empty;
                    var url = ((YamlScalarNode)node["url"]).Value ?? string.Empty;
                    var icon = node.ContainsKey("icon") ? ((YamlScalarNode)node["icon"]).Value ?? string.Empty : string.Empty;
                    var yamlTags = ((YamlSequenceNode)node["tags"]).Children;

                    // Create the item
                    var item = new AwesomeItem() { Title = title, Description = description, Url = url, Icon = icon };

                    // Add the item to all related tags
                    foreach (var yt in yamlTags)
                    {
                        string tagString = ((YamlScalarNode)yt).Value ?? string.Empty;

                        AwesomeBase aw = al;
                        var stringTag = tagString.Split("/");

                        foreach (var st in stringTag)
                        {
                            var tag = st.Trim();

                            if (!aw.Tags.Contains(tag))
                                aw.Tags.Add(tag);

                            aw = aw.Tags.Find(i => i.Tag == tag);
                        }

                        aw.Items.Add(item);
                    }
                }
            }
        }

        return al;
    }

    private static void GenerateFile(AwesomeList awesomeList, string liquidTemplate, string outputFile)
    {
        var liquid = File.ReadAllText(liquidTemplate);
        Template template = Template.Parse(liquid);

        var result = template.Render(Hash.FromAnonymousObject(new { AwesomeList = awesomeList }));

        File.WriteAllText(outputFile, result);
    }
}

[LiquidType("*")]
public abstract class AwesomeBase
{
    public List<AwesomeTag> Tags { get; init; } = new();

    public List<AwesomeItem> Items { get; init; } = new();
}

[LiquidType("*")]
public class AwesomeList : AwesomeBase { }

[LiquidType("*")]
public class AwesomeTag : AwesomeBase
{
    public string Tag { get; init; } = string.Empty;

    public AwesomeTag(string tag)
    {
        this.Tag = tag;
    }

    public override string ToString()
    {
        return this.Tag;
    }

    public override bool Equals(object obj)
    {
        if (obj == null || GetType() != obj.GetType())
        {
            return false;
        }

        return this.Tag == ((AwesomeTag)obj).Tag;
    }

    public static bool operator ==(AwesomeTag t1, AwesomeTag t2)
    {
        if (((object)t1) == null || ((object)t2) == null)
            return Object.Equals(t1, t2);

        return t1.Equals(t2);
    }

    public static bool operator !=(AwesomeTag t1, AwesomeTag t2)
    {
        if (((object)t1) == null || ((object)t2) == null)
            return !(Object.Equals(t1, t2));

        return !(t1.Equals(t2));
    }

    public static implicit operator AwesomeTag(string tag)
    {
        return new AwesomeTag(tag);
    }

    // override object.GetHashCode
    public override int GetHashCode()
    {
        return this.Tag.GetHashCode();
    }
};

[LiquidType("*")]
public class AwesomeItem
{
    public string Title { get; init; } = string.Empty;
    public string Description { get; init; } = string.Empty;
    public string Url { get; init; } = string.Empty;
    public string Icon { get; init; } = string.Empty;
}

