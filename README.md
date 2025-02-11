# xml-checker-barb Modules

## Overview

This is a [One Host](https://wiki.indeed.com/display/SMBPlatform/One+Host) **remote module** project- an independently deployable collection of serverless micro-frontend components assigned a unique **scope**.

An individual remote module is a React component responsible for rendering part of an Indeed web application. The area of responsibility is flexible to the needs of business verticals in any given domain and may range from a single form field all the way up to an entire page. Remote modules may nest modules from another **scope** at runtime by rendering them as child components in the form of `<RemoteModule scope="foo" module="./Bar" />` using the `@indeed/one-host-remote-module` npm package.

Page routing is client side, and top-level routes are defined according to their Runtime Context. More information on runtimes and routes can be found in the [wiki](https://wiki.indeed.com/display/SMBPlatform/One+Host+Runtime+Context).

```
.
├── .browserslistrc
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .gitlab-ci.yml          // CI/CD pipeline definition
├── .prettierignore
├── .prettierrc.js
├── README.md
├── __mocks__               // automated test mocks for dependencies found in `node_modules`
├── babel.config.js
├── i18n.config.js          // localizations configuration
├── jest.config.js
├── jest.setup.js
├── package.json
├── repo.cfg
├── src
│   ├── components          // React components-  the compositional building blocks of remote modules
│   ├── hooks               // custom React hooks
│   ├── i18n                // translation artifacts
│   ├── testing             // automated test utilities and helpers
│   └── types               // custom Typescript definitions
├── testcafe
|   ├── tests               // testcafe tests go in here
├── tsconfig.json           // typescript compiler settings for the project
├── tsconfig.testcafe.json  // typescript compiler settings for testcafe
└── webpack.config.js       // includes definition for what components from this project are exported as One Host remote modules
```

## Local Development

Local development can be done several ways, the most standard way is described in this [wiki](https://wiki.indeed.com/display/SMBPlatform/Local+Development+of+a+Module).

## Available NPM commands

| Command           | Purpose                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| build             | Builds deployable script bundles to the `/dist` directory.                                                   |
| start             | Starts local development using webpack dev server.                                                           |
| test              | Runs Jest automated tests and generates coverage report in `/coverage`.                                      |
| test:watch        | Runs Jest automated tests in `watch` mode.                                                                   |
| lint              | Analyzes code quality using `eslint`.                                                                        |
| lint:fix          | Analyzes code quality and fixes all automatically fixable formatting problems using `eslint` and `prettier`. |
| storybook         | Runs a storybook server locally.                                                                             |
| integration:local | Runs integration tests locally. Run while running start.                                                     |

## Integration Test

This is a set of standard integration tests. Integration tests can be run locally using the command `integration:local` while running `start`. These integration tests can be tested against qa using the command `integration:qa`. The script that runs on a pipeline build is `integration:ci`. When running specific tests for different modules, fixtures with the module name should be created under testcafe/tests folder. See https://code.corp.indeed.com/smb-automated-testing/smb-testcafe-common-page-objects/-/blob/master/src/util/OneHostTestcafeRunner.ts for more detail.

| CLI Options        | Purpose                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| concurrency        | Sets number of processors to use. Defaults to 4.                                                |
| testName           | Specific test to run. By default runs all tests.                                                |
| testFilePath       | Source files to include for the testcafe tests. Defaults to run everything in the tests folder. |
| video              | Whether to create videos of the testcafe tests. Defaults to false.                              |
| browsers           | Comma-delimited browsers to test. Defaults to chrome.                                           |
| headless           | If browsers should be in headless mode. Generally intended for ci runs. Defaults to false.      |
| debugMode          | Debugs after actions taken by testcafe. Intended for use locally. Defaults to false.            |
| debugOnFail        | Debugs after errors while testing. Intended for use locally. Defaults to false.                 |
| disableScreenshots | Disable taking screenshots on errors. Defaults to false.                                        |
| retryCount         | Number of times to retry the tests. Defaults to 3.                                              |
