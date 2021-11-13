using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using YamlDotNet.RepresentationModel;
using DotLiquid;

namespace AwesomeList
{

    public class AwesomeItem
    {
        public string Title { get; init; } = string.Empty;
        public string Description { get; init; } = string.Empty;
        public string Url { get; init; } = string.Empty;
        public string Icon { get; init; } = string.Empty;
    }

    public class Program
    {
        static string yamlFile = "../items.yml";

        static string liquidTemplate = "../readme.liquid";

        static string outputFile = "../README.md";

        static Dictionary<string, List<AwesomeItem>> tagList = new();

        static void Main(string[] args)
        {
            Console.WriteLine($"Processing YAML file ({yamlFile})...");

            using (StreamReader reader = File.OpenText(yamlFile))
            {
                var yaml = new YamlStream();
                yaml.Load(reader);

                var mapping = (YamlMappingNode)yaml.Documents[0].RootNode;

                foreach (var entry in mapping.Children)
                {
                    var node = ((YamlMappingNode)entry.Value).Children;

                    var title = ((YamlScalarNode)entry.Key).Value ?? string.Empty;
                    var description = ((YamlScalarNode)node["description"]).Value ?? string.Empty;
                    var url = ((YamlScalarNode)node["url"]).Value ?? string.Empty;
                    var icon = node.ContainsKey("icon") ? ((YamlScalarNode)node["icon"]).Value ?? string.Empty : string.Empty;

                    var item = new AwesomeItem() { Title = title, Description = description, Url = url, Icon = icon };

                    var tags = ((YamlSequenceNode)node["tags"]).Children;
                    foreach (var t in tags)
                    {
                        string tag = ((YamlScalarNode)t).Value ?? string.Empty;
                        if (!tagList.ContainsKey(tag))
                            tagList.Add(tag, new List<AwesomeItem>());

                        tagList[tag].Add(item);
                    }
                }
            }

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

            var result = template.Render(Hash.FromAnonymousObject(new { Tags = liquidTagList }));

            File.WriteAllText(outputFile, result);

            Console.WriteLine("Done");
        }
    }
}
