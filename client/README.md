# go-check-wep

---

## Prerequisites

- Basic React.js knowledge
- Basic Mobx knowledge

---

## Getting started

1. clone the repo
2. navigate to `client/`
3. run command `yarn && yarn start`
4. runs at `localhost:3000`

---

### Deployment

#### development

- navigate to project `root folder`

- run command `yarn client:build:dev`

#### production

- navigate to project `root folder`

- run command `yarn client:build`

---

### Project structure

#### assets

- static files such as images, fonts, addresses data etc.

#### common

- common components used throughout the apps

#### components

- components of each main page categorized by its folder name

#### config

- contains project configs (unrelated to webpack configs) such as i18n config, mobx config

#### layout

- layout related components such as `navbar`, `footer`

#### stores

- stores

#### utils

- etc

---

### Environment variables

#### .env.development

- for local development

#### .env.test

- for staging
- uses `/config/webpack.config.dev.js`

#### .env.production

- for production
- uses `/config/webpack.config.prod.js`

---

### Bundle report

- bundle report generate when build production
- stores report as a `.html` in `/bundle-report`

---

### To test service-worker & static files size (after gzipped)

- run `yarn serve`
- open browser with port `8888`

---
