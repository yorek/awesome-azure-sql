using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using YamlDotNet.RepresentationModel;
using DotLiquid;

namespace AwesomeList;

public class Program
{
    static string yamlFile = "../items.yml";

    static string liquidTemplate = "../readme.liquid";

    static string outputFile = "../README.md";

    static Dictionary<string, List<AwesomeItem>> tagList = new();

    static void Main(string[] args)
    {
        Console.WriteLine($"Processing YAML file ({yamlFile})...");

        var al = LoadFromYAML(yamlFile);

        Console.WriteLine($"Processing Liquid template ({liquidTemplate})...");

        var liquid = File.ReadAllText(liquidTemplate);
        Template template = Template.Parse(liquid);

        var liquidTagList = new Dictionary<string, object>();
        foreach (var t in tagList.OrderBy(i => i.Key))
        {
            var ail = new List<Object>();

            foreach (var ai in t.Value)
            {
                var liquidItem = new
                {
                    Title = ai.Title,
                    Description = ai.Description,
                    Url = ai.Url,
                    Icon = ai.Icon
                };

                ail.Add(liquidItem);
            }

            liquidTagList.Add(t.Key, ail);
        }

        //var result = template.Render(Hash.FromAnonymousObject(new { Tags = liquidTagList }));
        var result = template.Render(Hash.FromAnonymousObject( new { AwesomeList = al } ));

        File.WriteAllText(outputFile, result);

        Console.WriteLine("Done");
    }

    private static AwesomeList LoadFromYAML(string yamlFile)
    {
        var al = new AwesomeList();

        using (StreamReader reader = File.OpenText(yamlFile))
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

                    foreach(var st in stringTag)
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
    
        return al;
    }
}

[LiquidType("*")]
public abstract class AwesomeBase
{
    public List<AwesomeTag> Tags { get; init; } = new ();

    public List<AwesomeItem> Items { get; init; } = new ();
}

[LiquidType("*")]
public class AwesomeList: AwesomeBase { }

[LiquidType("*")]
public class AwesomeTag: AwesomeBase {
    public string Tag { get; init; } = string.Empty;
    
    public AwesomeTag(string tag) {
        this.Tag = tag;
    }

    public override string ToString() {
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

    public static bool operator == (AwesomeTag t1, AwesomeTag t2)
    {
        if (((object)t1) == null || ((object)t2) == null)
         return Object.Equals(t1, t2);

        return t1.Equals(t2);
    }
    
    public static bool operator != (AwesomeTag t1, AwesomeTag t2)
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

