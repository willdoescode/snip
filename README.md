<a href="https://snip.ml">
  <img src="https://snip.ml/img/icons/logo.png" width="80px" align="right" />
</a>

# Snip

[![Netlify Status](https://api.netlify.com/api/v1/badges/394af265-a105-4fe8-afb9-ef0a68718780/deploy-status)](https://app.netlify.com/sites/snip-client/deploys)
[![Dependencies](https://img.shields.io/david/aidenybai/snip.svg?style=flat-square)](https://img.shields.io/david/aidenybai/snip.svg?style=flat-square)
[![Code Size](https://img.shields.io/github/languages/code-size/aidenybai/snip?style=flat-square)](https://img.shields.io/github/languages/code-size/aidenybai/snip?style=flat-square)
[![License](https://img.shields.io/github/license/aidenybai/snip?style=flat-square)](https://img.shields.io/github/license/aidenybai/snip?style=flat-square)

> The simple, no-bs link shortener.

## Goals

- **Speed**: Snip has low performance overhead and is compressed with deflate and gzip.
- **Security**: Snip is secured with 128-bit SSL and no user data is stored (privacy baby)
- **Sustainability**: Snip relies on a 7 day TTL to keep the service going in good health.
- **Simplicity**: Snip provides a high-level interface that’s easy to use, understand, and debug.

## Getting Started

### Installation

```bash
git clone https://github.com/aidenybai/snip.git
cd snip
```

Note: You will need at least NodeJS 10.18.1+, VSCode 1.44+, Yarn 1.17.3+ and MongoDB 3+. You will also need to configure .env variables before launching.

### Configuring Environment Variables

```bash
# Environment Config
# Store your secrets and config variables in here
# reference these in code with process.env.ENV_VARIABLE

PORT=3000
MONGO_URL=mongodb://mongodb.example.com:27017
SECRET=google_recaptcha_client_secret_key

# Note: MongoDB URI must be in the mongodb:// protocol, the mongodb+srv:// protocol is not supported
```

Create a file named `.env` to be able to interact with `process.env` in NodeJS.

### Usage

Snip follows the latest maintenance LTS version of Node.

```bash
yarn
yarn start:dev
# build: yarn build
# production: yarn start
```

Visit [localhost:3000](http://localhost:3000) to view the application.

＼＿ﾍ(◕‿◕ ✰)
