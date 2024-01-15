"use strict";
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tags = void 0;
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
exports.Tags = {
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
    podcast: {
        label: "Podcast",
        description: "Resources related to podcasts",
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
    javascript: {
        label: "JavaScript",
        description: "Resource contains JavaScript app code",
        type: "Language",
    },
    typescript: {
        label: "TypeScript",
        description: "Resource contains TypeScript app code",
        type: "Language",
    },
    dotnetCsharp: {
        label: ".NET/C#",
        description: "Resource contains .NET and/or C# app code",
        type: "Language",
    },
    java: {
        label: "Java",
        description: "Resource contains Java app code",
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
    php: {
        label: "PHP",
        description: "Resource architecture uses PHP",
        type: "Language",
    },
    // ---- Tools
    sap: {
        label: "SAP",
        description: "Resource architecture uses Systems Applications and Products in data processing (SAP)",
        type: "Tools",
    },
    "sap-cloud-sdk": {
        label: "SAP Cloud SDK",
        description: "Resource architecture uses SAP Cloud SDK",
        type: "Tools",
    },
    thymeleaf: {
        label: "Thymeleaf",
        description: "Resource architecture uses Thymeleaf template engine",
        type: "Tools",
    },
    chatgpt: {
        label: "ChatGPT",
        description: "Resource architecture uses ChatGPT model",
        type: "Tools",
    },
    jupyter: {
        label: "Jupyter Notebooks",
        description: "Resource architecture uses Jupyter Notebooks",
        type: "Tools",
    },
    keda: {
        label: "KEDA",
        description: "Resource architecture uses Kubernetes Event Driven Autoscaling (KEDA)",
        type: "Tools",
    },
    dapr: {
        label: "Dapr",
        description: "Resource architecture uses Distributed Application Runtime (dapr)",
        type: "Tools",
    },
    "web-components": {
        label: "Web Components",
        description: "Resource architecture uses Web Components",
        type: "Tools",
    },
    // ---- Infrastructure as Code
    bicep: {
        label: "Bicep",
        description: "Resource uses Bicep for Infra as Code",
        type: "Infrastructure as Code",
    },
    terraform: {
        label: "Terraform",
        description: "Resource uses Terraform for Infra as Code",
        type: "Infrastructure as Code",
    },
    // ---- Database
    mongodb: {
        label: "MongoDB",
        description: "Resource architecture uses MongoDB",
        type: "Database",
    },
    prometheus: {
        label: "Prometheus",
        description: "Resource architecture uses Prometheus",
        type: "Database",
    },
    // ---- Framework
    "react-js": {
        label: "React.js",
        description: "Resource architecture uses React.js",
        type: "Framework",
    },
    "fast-api": {
        label: "FastAPI",
        description: "Resource architecture uses FastAPI web framework",
        type: "Framework",
    },
    flask: {
        label: "Flask",
        description: "Resource architecture uses Flask web framework",
        type: "Framework",
    },
    django: {
        label: "Django",
        description: "Resource architecture uses Django web framework",
        type: "Framework",
    },
    "nest-js": {
        label: "NestJS",
        description: "Resource architecture uses NestJS framework",
        type: "Framework",
    },
    spring: {
        label: "Spring",
        description: "Resource architecture uses Spring framework",
        type: "Framework",
    },
    "stream-lit": {
        label: "Streamlit",
        description: "Resource architecture uses Streamlit library",
        type: "Framework",
    },
    "semantic-kernel": {
        label: "Semantic Kernel",
        description: "Resource architecture uses Semantic Kernel",
        type: "Framework",
    },
    "micro-frontend": {
        label: "Micro Frontend",
        description: "Resource architecture uses Micro Frontend",
        type: "Framework",
    },
    blazor: {
        label: "Blazor",
        description: "Resource architecture uses Blazor",
        type: "Framework",
    },
    // ---- Platform
    kubernetes: {
        label: "Kubernetes",
        description: "Resource architecture uses Kubernetes",
        type: "Platform",
    },
    // ---- Service
    fhir: {
        label: "FHIR Service",
        description: "Resource architecture uses Fast Healthcare Interoperability Resources (FHIR) service",
        type: "Service",
    },
    dataverse: {
        label: "Dataverse",
        description: "Resource architecture uses Microsoft Dataverse",
        type: "Service",
    },
    "web-apps": {
        label: "Web Apps",
        description: "Resource architecture uses Web Apps",
        type: "Service",
    },
    // ---- Azure Services
    ahds: {
        label: "Azure Health Data Service",
        description: "Resource architecture uses Azure Health Data Services workspace",
        azureIcon: "./img/Azure-Health-Data-Service.svg",
        url: "https://azure.microsoft.com/products/health-data-services/",
        type: "Service",
    },
    "app-insights": {
        label: "Azure Application Insights",
        description: "Resource architecture uses Azure Application Insights",
        azureIcon: "./img/Azure-Application-Insights.svg",
        url: "https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview",
        type: "Service",
    },
    "log-analytics": {
        label: "Azure Log Analytics",
        description: "Resource architecture uses Azure Log Analytics",
        azureIcon: "./img/Azure-Log-Analytics.svg",
        url: "https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview",
        type: "Service",
    },
    "app-service": {
        label: "Azure App Service",
        description: "Resource architecture uses Azure App Service",
        azureIcon: "./img/Azure-App-Service.svg",
        url: "https://azure.microsoft.com/products/app-service",
        type: "Service",
    },
    monitor: {
        label: "Azure Monitor",
        description: "Resource architecture uses Azure Monitor Service",
        azureIcon: "./img/Azure-Monitor.svg",
        url: "https://azure.microsoft.com/products/monitor",
        type: "Service",
    },
    "key-vault": {
        label: "Azure Key Vault",
        description: "Resource architecture uses Azure Key Vault",
        azureIcon: "./img/Azure-Key-Vault.svg",
        url: "https://azure.microsoft.com/products/key-vault",
        type: "Service",
    },
    aca: {
        label: "Azure Container Apps",
        description: "Resource architecture uses Azure Container Apps",
        azureIcon: "./img/Azure-Container-Apps.svg",
        url: "https://azure.microsoft.com/products/container-apps",
        type: "Service",
    },
    cosmosdb: {
        label: "Azure CosmosDB",
        description: "Resource architecture uses Azure CosmosDB",
        azureIcon: "./img/Azure-Cosmos-DB.svg",
        url: "https://azure.microsoft.com/products/cosmos-db/",
        type: "Service",
    },
    signalR: {
        label: "Azure SignalR",
        description: "Resource architecture uses Azure SignalR",
        azureIcon: "./img/Azure-SignalR.svg",
        url: "https://azure.microsoft.com/products/signalr-service",
        type: "Service",
    },
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
        type: "Database",
    },
    "azuredb-postgreSQL": {
        label: "Azure PostgreSQL",
        description: "Resource architecture uses Azure Database for PostgreSQL",
        azureIcon: "./img/Azure-PostgreSQL.svg",
        url: "https://azure.microsoft.com/products/postgresql",
        type: "Database",
    },
    swa: {
        label: "Azure Static Web Apps",
        description: "Resource architecture uses Azure Static Web Apps",
        azureIcon: "./img/Azure-Static-Web-Apps.svg",
        url: "https://azure.microsoft.com/products/app-service/static",
        type: "Service",
    },
    "service-bus": {
        label: "Azure Service Bus",
        description: "Resource architecture uses Azure Service Bus",
        azureIcon: "./img/Azure-Service-Bus.svg",
        url: "https://azure.microsoft.com/products/service-bus",
        type: "Service",
    },
    "v-nets": {
        label: "Azure Virtual Networks (VNET)",
        description: "Resource architecture uses Azure Virtual Networks",
        azureIcon: "./img/Azure-Virtual-Networks.svg",
        url: "https://azure.microsoft.com/products/virtual-network",
        type: "Service",
    },
    "cognitive-search": {
        label: "Azure Cognitive Search",
        description: "Resource architecture uses Azure Cognitive Search",
        azureIcon: "./img/Azure-Cognitive-Search.svg",
        url: "https://azure.microsoft.com/products/ai-services/cognitive-search",
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
    apim: {
        label: "Azure API Management",
        description: "Resource architecture uses Azure API Management",
        azureIcon: "./img/Azure-API-Management.svg",
        url: "https://azure.microsoft.com/products/api-management",
        type: "Service",
    },
    aks: {
        label: "Azure Kubernetes Service",
        description: "Resource architecture uses Azure Kubernetes Service",
        azureIcon: "./img/Azure-Kubernetes-Service.svg",
        url: "https://azure.microsoft.com/products/kubernetes-service",
        type: "Service",
    },
    "azure-cdn": {
        label: "Azure Content Delivery Network",
        description: "Resource architecture uses Azure Content Delivery Network",
        azureIcon: "./img/Azure-Front-Door-And-CDN.svg",
        url: "https://azure.microsoft.com/products/cdn",
        type: "Service",
    },
    "front-door": {
        label: "Azure Front Door",
        description: "Resource architecture uses Azure Front Door",
        azureIcon: "./img/Azure-Front-Door-And-CDN.svg",
        url: "https://azure.microsoft.com/products/frontdoor",
        type: "Service",
    },
    grafana: {
        label: "Azure Managed Grafana",
        description: "Resource architecture uses Azure Managed Grafana",
        azureIcon: "./img/Azure-Managed-Grafana.svg",
        url: "https://azure.microsoft.com/products/managed-grafana",
        type: "Service",
    },
    "azure-spring-apps": {
        label: "Azure Spring Apps",
        description: "Resource architecture uses Azure Spring Apps",
        azureIcon: "./img/Azure-Spring-Apps.svg",
        url: "https://azure.microsoft.com/products/spring-apps",
        type: "Service",
    },
    "redis-cache": {
        label: "Azure Cache for Redis",
        description: "Resource architecture uses Azure Cache for Redis",
        azureIcon: "./img/Azure-Cache-for-Redis.svg",
        url: "https://azure.microsoft.com/products/cache",
        type: "Service",
    },
    agw: {
        label: "Azure Application Gateway",
        description: "Resource architecture uses Azure Application Gateway",
        azureIcon: "./img/Azure-Application-Gateway.svg",
        url: "https://azure.microsoft.com/products/application-gateway",
        type: "Service",
    },
    "azure-bot": {
        label: "Azure AI Bot Service",
        description: "Resource architecture uses Azure AI Bot Service",
        azureIcon: "./img/Azure-AI-Bot-Services.svg",
        url: "https://azure.microsoft.com/products/ai-services/ai-bot-service",
        type: "Service",
    },
    ade: {
        label: "Azure Deployment Environments",
        description: "Resource architecture uses Azure Deployment Environments",
        azureIcon: "./img/Azure-Deployment-Environments.svg",
        url: "https://azure.microsoft.com/products/deployment-environments",
        type: "Service",
    },
    // For Topics
    "data-science": {
        label: "Data Science",
        description: "Resource architecture involves Data Science",
        type: "Topic",
    },
    "enterprise-patterns": {
        label: "Enterprise App Patterns",
        description: "Resource architecture involves Enterprise Application Patterns",
        type: "Topic",
    },
    ai: {
        label: "Artificial Intelligence",
        description: "Resource architecture involves Artificial Intelligence",
        type: "Topic",
    },
    "platform-engineering": {
        label: "Platform Engineering",
        description: "Resource architecture involves Platform Engineering",
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
};
