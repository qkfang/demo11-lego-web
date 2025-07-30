// main.bicep
// Bicep template to deploy an Azure Static Web App

param location string = resourceGroup().location
param sku string = 'Standard'
param repositoryUrl string
param branch string = 'main'
param environmentName string = 'prod'

var resourceToken = uniqueString(subscription().id, resourceGroup().id, location, environmentName)

resource userAssignedIdentity 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'az-swa-${resourceToken}'
  location: location
}

resource staticWebApp 'Microsoft.Web/staticSites@2024-04-01' = {
  name: 'az-swa-${resourceToken}'
  location: location
  sku: {
    name: sku
  }
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${userAssignedIdentity.id}': {}
    }
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    buildProperties: {
      apiLocation: ''
      appLocation: 'src'
      outputLocation: 'build'
    }
  }
}

output staticWebAppEndpoint string = staticWebApp.properties.defaultHostname
output RESOURCE_GROUP_ID string = resourceGroup().id
