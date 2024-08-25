# Build and Deploy Docker Images

This repository uses GitHub Actions to build and deploy Docker images to Docker Hub, and then deploy an application to Azure Web App. The workflow is triggered on each push to the `main` branch.

## Workflow

The workflow consists of two main jobs:

1. **build-and-push**: Builds and pushes Docker images to Docker Hub.
2. **deploy-soap-nutrition-service**: Deploys the Docker image to Azure Web App.

### build-and-push

This job performs the following actions:

1. **Checkout code**: Retrieves the source code from the repository.
2. **Install Docker Compose**: Downloads and installs Docker Compose.
3. **Sign in to Docker Hub**: Authenticates to Docker Hub using credentials stored in secrets.
4. **Build and upload Docker images**:
   - Checks for changes in the directories of the specified services (`soap-nutrition-service` in this case).
   - Builds and pushes the Docker image for each service with detected changes.
5. **Fix routes in `docker-compose.yml`**: Adjusts paths in the `docker-compose.yml` file for correct configuration.
6. **Execute Docker Compose**: Brings up the containers defined in the `docker-compose.yml` file.

### deploy-soap-nutrition-service

This job performs the following actions:

1. **Checkout code**: Retrieves the source code from the repository.
2. **Deploy to Azure Web App**:
   - Uses the publish profile stored in secrets to deploy the Docker image to Azure Web App.

## Requirements

- Docker
- Docker Compose
- Azure Web App
- Docker Hub

## Secrets Configuration

Make sure to configure the following secrets in your GitHub repository:

- `DOCKERHUB_USERNAME`: Your Docker Hub username.
- `DOCKERHUB_TOKEN`: Your Docker Hub access token.
- `AZURE_WEBAPP_PUBLISH_PROFILE_1`: The publish profile for your Azure Web App.

## Project Structure

- **`docker-compose.yml`**: Configuration file for Docker Compose. Defines how the Docker containers should be built and run.

```yaml
version: "3.9"
services:
  soap-nutrition-service:
    build: ../soap-nutrition-service
    ports:
      - 3004
