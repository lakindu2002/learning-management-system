# Learning Management System

`/backend`

The backend contains an SST (Serverless Stack) project which bootstraps the required serverless infrastructure needed to run the backend.

`/frontend`

The frontend contains a React application that will bootstrap the UI needed to host the app.

## Getting Started with the Frontend

- cd into `/frontend`
- Recommended node version `v19.6.0`. (nvm use v19.6.0)
- Install dependencies: `npm install`
- Start the project: `npm start`

### Frontend Deployment 

The frontend application is deployed on Vercel.

The frontend creates rewrites to an AWS Serverless API. 

Rewrites are defined in the `vercel.json` file.
