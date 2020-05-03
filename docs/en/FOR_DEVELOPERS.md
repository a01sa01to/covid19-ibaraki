# For Developers

## The work we need your help with
 - To change the site according to the information provided by Ibaraki pref.
 - Translation (Details: [here](../../TRANSLATION.md))
 - Problems in the Issue Tab

Please see [the Projects tab](https://github.com/a01sa01to/covid19-ibaraki/projects/2) for progress.

## 1. How to Set Up Environments

Install the following application to the environment for development.

| Application name | Application version(Fill in only if specified) | Installation conditions |
| ------- | ------- | ------- |
|[Node.js](https://nodejs.org/en/)|10.19.0 or higher|Required|
|[Visual Studio Code](https://code.visualstudio.com/)| |If you use Visual Studio Code|
|[yarn](https://classic.yarnpkg.com/en/)| |When executing this program with `yarn`|
|[docker compose](https://docs.docker.com/compose/install/)| |When executing this program with `docker compose`|
|[Vagrant](https://www.vagrantup.com/)| |When executing this program with `Vagrant`|

### 1-1. Extensions for Visual Studio Code

To use Visual Studio Code, install the following extension.

| Extensions | Installation conditions |
| ------- | ------- |
|[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)|Any|
|[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)|Any|
|[TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)|Any|
|[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)|Any|
|[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)|When developing with Visual Studio Code and Remote Containers|

---

## 2. Run this program

The command is executed in the working copy root directory.

### 2-1. Using `yarn`

#### 2-1-1. Install dependencies

```bash
# install dependencies
$ yarn install
```

#### 2-1-2. Run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

##### 2-1-2-1. Normal

```bash
# serve with hot reload at localhost:3000
$ yarn dev
```

##### 2-1-2-2. Faster

You can disable accessibility auditing, which would make your local server faster.

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```

### 2-1-3. Troubleshoot

#### 2-1-3-1. How to resolve `Cannot find module ****` error

Build the dependency again and run the program.

### 2-2. Using `docker compose`

#### 2-2-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### 2-2-2. Troubleshoot

#### 2-2-2-1. How to resolve `Cannot find module ****` error

Stop the program and execute the following command.
```bash
$ docker-compose run --rm app yarn install
```

### 2-3. Using `Vagrant`

#### 2-3-1. Install dependencies and run this program

After executing the following command, you can check the program under development by accessing http://localhost:3000 .

```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### 2-4. When developing with Visual Studio Code and Remote Containers

#### 2-4-1. Install dependencies and run this program

If you select the “Open Folder in Container” root of this repository (as seen in the lower left [Quick start: Try a dev container (external site)](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)), the environment construction will start.

You can check the program under development by accessing http://localhost:3000 after building the environment.

#### 2-4-2. Notes

- If you want to change the settings, modify `.devcontainer/devcontainer.json`. Please refer to [devcontainer.json reference](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference) for more details.
- The extension "ESLint" is only valid when executing Remote Container. Please add it to the `extensions` of `.devcontainer/devcontainer.json` if necessary.
- A detailed procedure can be found [Managing extensions (external site)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions).
- When rebuilding the development environment, please execute “Rebuild Container” which can be found at the lower left.

---

## 3. Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.
Please use the variable to detect which enviroinment is used at the runtime.

---

## 4. Deployment to Staging & Production Environments

When the branch listed in the left column of the table below is updated, the branch and website will be updated automatically.

| branch | A branch where HTML is built and updated | Website updated |
| ---- | ---- | ---- |
|`master`|`production`|The production site https://ibaraki.stopcovid19.jp/|
|`development`|`dev-pages`|The development site https://covid19-ibk-dev.netlify.app/|

---

## 5. Branch rules

Pull Request is allowed only for `development`.
Please use the following naming rules for the branch when sending a Pull Request.

| Types of changes | Naming rules for the branch |
| ---- | ---- |
|Feature implementation|`feature/#{ISSUE_ID}-#{branch_title_name}`|
|Hotfix commit|`hotfix/#{ISSUE_ID}-#{branch_title_name}`|

### 5-1. Basic branch

| Purpose | Branch | Confirmation URL | People who can make pull requests | Remarks |
| ---- | ---- | ---- | ---- | ---- |
| Development | development | https://covid19-ibk-dev.netlify.app/ | All developers | base branch. Basically send a Pull Request here |
| Production | master | https://ibaraki.stopcovid19.jp/ | Only administrators | Pull Requests other than Administrators are prohibited |

### 5-2. Branch used by the system

| Purpose | Branch | Confirmation URL | Remarks |
| ---- | -------- | ---- | ---- |
| Production site HTML | production | https://ibaraki.stopcovid19.jp | Location where statically built HTML is located |
| Development site HTML | dev-deploy | https://covid19-ibk-dev.netlify.app/ | Where to find statically built HTML |

## About the badge on the top of README .md
 - ![](https://github.com/a01sa01to/covid19-ibaraki/workflows/production%20deploy/badge.svg) Deploy
 - [![CircleCI](https://circleci.com/gh/a01sa01to/covid19-ibaraki.svg?style=svg)](https://circleci.com/gh/a01sa01to/covid19-ibaraki) Build by CircleCI
 - ![](https://flat.badgen.net/dependabot/a01sa01to/covid19-ibaraki?icon=dependabot) Dependabot
 - [![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/a01sa01to/covid19-ibaraki&style=flat)](https://mergify.io) Mergify