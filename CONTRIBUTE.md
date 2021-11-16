# How to contributed

## Option 1 - Ask 

Just open an issue mentioning the link you would like to add, a title and a short description

## Option 2 - Do

Create a PR by changing the file `items.yaml`. Follow the provided schema:

```yaml
"Link Title":
  description: "link description"
  url: "link url"
  icon: ""
  tags: 
    - "Tag 1"
    - "Tag 2"
```

### Tags
At least one tag is mandatory. You can add as many as you want. (I suggest not to add to many. Make sure the tags used a really helpful to identify the content. Try to limit the number of tags to 2 at maximum).
If you want to add a nested tag, just separate the content using a slash. For example: "Code Samples / REST" will put the link in the `REST` tag under the `Code Samples` tag. Only one level of nesting is supported. 

### Icons
The icon is an emojy. The supported emojis are defined here: https://github.com/markdown-templates/markdown-emojis.

