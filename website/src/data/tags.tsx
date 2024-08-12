/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export type Tag = {
  label: string;
  description: string;
  azureIcon?: string;
  darkModeAzureIcon?: string;
  url?: string;
  type?: string;
};

export type User = {
  title: string;
  description: string;
  website: string;
  author: string;
  source: string | null;
  tags: TagType[];
};

// Tag definition. Add new tags here and then add more details in the Tags object below
export type TagType =
  | "official"
  | "community"
  | "new"
  | "popular"
  | "typescript"
  | "aspire"
  | "csharp"
  | "python"
  | "react-js"
  | "nodejs"
  | "app-service"
  | "functions"
  | "blob-storage"
  | "azure-sql"
  | "swa"
  | "openai"
  | "azure-ai"
  | "ai"
  | "graphql"
  | "getting-started"
  | "code-samples"
  | "blogs"
  | "articles"
  | "videos"
  | "documentation"
  | "workshops"
  | "scripts"
  | "social-media"
  | "conferences"
  | "books"
  | "libraries"
  | "tools"
  | "devops"
  | "full-stack"
  | "rag"
  | "vectors"
  ;

// LIST OF AVAILABLE TAGS
// Each tag in lit about must have a defined object here
// One or more tags can be associated per card
// Tag Metadata:
//   - label = short name seen in tag
//   - description = explainer for usage
//   - type = type of tag
//   - azureIcon = svg path for azure service icon
//   - url = url for azure service
//   - darkModeAzureIcon = svg path for azure service icon in dark mode
export const Tags: { [type in TagType]: Tag } = {
  // =============     FOR ADMIN USE ONLY:

  // Special Tag
  official: {
    label: "Microsoft",
    description: "This tag is used for Microsoft resources.",
  },
  new: {
    label: "New",
    description: "This tag is used for new resources.",
  },
  popular: {
    label: "Popular",
    description: "This tag is used for popular resources.",
  },

  //============  FOR REGULAR USE

  // Content Type
  "getting-started": {
    label: "Getting Started",
    description: "Resources related to getting started",
    type: "Type",
  },
  "code-samples": {
    label: "Code Samples",
    description: "Resources related to code samples",
    type: "Type",
  },
  blogs: {
    label: "Blog",
    description: "Resources related to blog posts",
    type: "Type",
  },
  articles: {
    label: "Article",
    description: "Resources related to articles",
    type: "Type",
  },
  videos: {
    label: "Video",
    description: "Resources related to videos",
    type: "Type",
  },
  documentation: {
    label: "Documentation",
    description: "Resources related to documentation",
    type: "Type",
  },
  workshops: {
    label: "Workshops",
    description: "Resources related to Workshops",
    type: "Type",
  },
  scripts: {
    label: "Script",
    description: "Resources related to scripts",
    type: "Type",
  },
  "social-media": {
    label: "Social Media",
    description: "Resources related to social media",
    type: "Type",
  },
  "conferences": {
    label: "Conference",
    description: "Resources related to conferences",
    type: "Type",
  },
  "books": {
    label: "Book",
    description: "Resources related to documentation",
    type: "Type",
  },
  "libraries": {
    label: "Library",
    description: "Resources related to libraries",
    type: "Type",
  },
  "tools": {
    label: "Tool",
    description: "Resources related to tools",
    type: "Type",
  },
  community: {
    label: "Community",
    description: "This tag is used for community resources.",
    type: "Type",
  },

  // Language Tags
  graphql: {
    label: "GraphQL",
    description: "Resource contains GraphQL app code",
    type: "Language",
  },
  typescript: {
    label: "TypeScript",
    description: "Resource contains TypeScript app code",
    type: "Language",
  },
  csharp: {
    label: ".NET/C#",
    description: "Resource contains .NET and/or C# app code",
    type: "Language",
  },
  python: {
    label: "Python",
    description: "Resource contains Python app code",
    type: "Language",
  },
  nodejs: {
    label: "Node.js",
    description: "Resource architecture uses Node.js",
    type: "Language",
  },

  // ---- Framework
  "aspire": {
    label: ".NET Aspire",
    description: "Links and resources related to .NET Aspire",
    type: "Framework",
  },
  "react-js": {
    label: "React.js",
    description: "Resource architecture uses React.js",
    type: "Framework",
  },

  // ---- Azure Services
  "app-service": {
    label: "Azure App Service",
    description: "Resource architecture uses Azure App Service",
    azureIcon: "./img/Azure-App-Service.svg",
    url: "https://azure.microsoft.com/products/app-service",
    type: "Service",
  },
  // cosmosdb: {
  //   label: "Azure CosmosDB",
  //   description: "Resource architecture uses Azure CosmosDB",
  //   azureIcon: "./img/Azure-Cosmos-DB.svg",
  //   url: "https://azure.microsoft.com/products/cosmos-db/",
  //   type: "Service",
  // },
  functions: {
    label: "Azure Functions",
    description: "Resource architecture uses Azure Functions",
    azureIcon: "./img/Azure-Function.svg",
    url: "https://azure.microsoft.com/products/functions",
    type: "Service",
  },
  "blob-storage": {
    label: "Azure Blob Storage",
    description: "Resource architecture uses Azure Blob Storage",
    azureIcon: "./img/Azure-Storage.svg",
    url: "https://azure.microsoft.com/products/storage/blobs",
    type: "Service",
  },
  "azure-sql": {
    label: "Azure SQL",
    description: "Resource architecture uses Azure SQL",
    azureIcon: "./img/Azure-SQL.svg",
    url: "https://azure.microsoft.com/products/azure-sql/database",
    type: "Service",
  },
  swa: {
    label: "Azure Static Web Apps",
    description: "Resource architecture uses Azure Static Web Apps",
    azureIcon: "./img/Azure-Static-Web-Apps.svg",
    url: "https://azure.microsoft.com/products/app-service/static",
    type: "Service",
  },
  openai: {
    label: "Azure OpenAI Service",
    description: "Resource architecture uses Azure OpenAI Service",
    azureIcon: "./img/Azure-OpenAI-Service.svg",
    darkModeAzureIcon: "./img/Azure-OpenAI-Service-white.svg",
    url: "https://azure.microsoft.com/products/ai-services/openai-service",
    type: "Service",
  },
  "azure-ai": {
    label: "Azure AI Service",
    description: "Resource architecture uses Azure AI Service",
    azureIcon: "./img/Azure-AI-Service.svg",
    url: "https://azure.microsoft.com/solutions/ai",
    type: "Service",
  },

  // For Topics
  ai: {
    label: "Artificial Intelligence",
    description: "Resource architecture involves Artificial Intelligence",
    type: "Topic",
  },
  "devops": {
    label: "DevOps",
    description: "Resources related to devops",
    type: "Topic",
  },
  "full-stack": {
    label: "Full Stack",
    description: "Resources related to fullstack development",
    type: "Topic",
  },
  "rag": {
    label: "RAG",
    description: "Link and resources related to Retrieval Augmented Generation pattern",
    type: "Topic",
  },
  "vectors": {
    label: "Vectors",
    description: "Link and resources related to vectors",
    type: "Topic",
  },
};
