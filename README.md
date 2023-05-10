# Micro Frontend Architecture for Demo

This project is a demo for micro frontend architecture with multi-framework. (Vue, React, Angular) The Applications is movie app using TMDB Movie API.

## Overview

There are 5 applications.

- `host` is a Vue application and host container consuming remote modules from other applications.
- `app-list` is a Vue application rendering and exposing list of movies.
- `react-app-detail` is a React application redering and exposing details of each movies using movie id.
- `angular-app-about` is a Angular application rendering and exposing about info of the web site.
- `common-components` is a Vue application exposing UI components like card, navigation bar.

## Requirements

- Node.js and npm

## Getting Started

You need to install npm packages.

```sh
cd <APP_NAME>
npm install
```

You can run the dev server of each application by running this command.

```sh
cd <APP_NAME>
npm run start
```

## Deploy

**Demo** https://d3curj6vico5ws.cloudfront.net

Each application was built using Jenkins' Multibranch Pipeline and deployed using aws' S3 and CloudFront.
