# SV Web

SV.Web is the user interface part of the SV Portal project.

## Prerequisites

Before setting up SV.Web, ensure you have the following tools installed:

1. [Node.js](https://nodejs.org/en/)

## Installation

To install the necessary node modules, use the following command:

```bash
$ npm ci
```

## Running Locally

To run the app in a local development server, follow these steps:

1. Run the development server:

```bash
$ npm start
```

2. Open your browser and navigate to `http://localhost:4200/`. The app will automatically reload if you modify any source files.

## Running in Production (SSR)

For production with Server-Side Rendering (SSR), follow these steps:

1. Build the app:

```bash
$ npm run build:ssr
```

2. Run the built app:

```bash
$ npm run serve:ssr
```

## Running Unit Tests

To execute unit tests, use the following command:

```bash
$ npm test
```

This will run the test suite and provide information about the test results.
