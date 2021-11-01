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

#### iot

- navigate to project `root folder`

- run command `yarn client:build-deploy:iot`

#### production

- tell P'oat

---

### Project structure

#### assets

- static files such as images, fonts, addresses data etc.

#### common

- common components used throughout the apps

#### components

- components does not falls in neither category, often used only once

#### config

- contains project configs (unrelated to webpack configs) such as i18n config, mobx config

#### features

- components of each main features categorized by its folder name

#### layout

- layout related components such as `navbar`, `footer`

#### service

- api are being fetch by axios here, seperated for ease of mocking

#### stores

- mobx stores

#### utils

- etc

---

### Environment variables

#### .env.development

- for local development

#### .env.test

- for staging/iot
- uses `/config/webpack.config.iot.js`

#### .env.production

- for production
- uses `/config/webpack.config.prod.js`

---

### Mobx strict-mode

Mobx strict-mode is enabled in this project. It means that every changes you make to the mobx state, must be wrap in `@action` annotation or `runInAction` utility function. This make updating mobx state more efficient.

---

### api caching strategy

The plugin `axios-extensions` is used to implement caching (5 minutes) in `GET` : `api/package` as it unnecessary makes request to the server every time the `/`and `/addon` page shows.

---

### Bundle report

- bundle report generate when build production
- stores report as a `.html` in `/bundle-report`

---

### To update i18n keys

navigate to `public/locales/th/translations.json` AND `public/locales/en/translations.json`

---

### To update FAQ

navigate to `src/assets/data/FAQ-th.js` AND `src/assets/data/FAQ-en.js`

---

### To test service-worker & static files size (after gzipped)

- run `yarn serve`
- open browser with port `8888`

---

## Noticeable TODOS

- extract `Address` and reuse shipping & billing components
- replace `Province.js`, `SubDistrict.js`, ... with smaller `*.json`
- replace states in `Input` with Mobx observables
- rewrite regex input validation in `Input`
- use intersection observer to lazy load off-screen images in landing page
- find ways to reduce large files loaded by ask-aunjai chatbot eg. `bootstrap-iso.css`, `sockjs.js`
