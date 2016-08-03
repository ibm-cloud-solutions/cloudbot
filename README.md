[![Build Status](https://travis-ci.org/ibm-cloud-solutions/cloudbot.svg?branch=master)](https://travis-ci.org/ibm-cloud-solutions/cloudbot)
[![Dependency Status](https://dependencyci.com/github/ibm-cloud-solutions/cloudbot/badge)](https://dependencyci.com/github/ibm-cloud-solutions/cloudbot)
[![npm](https://img.shields.io/npm/v/cloudbot.svg?maxAge=2592000)](https://www.npmjs.com/package/cloudbot)

# cloudbot

- A robot may not injure a human being or, through inaction, allow a human being to come to harm.
- A robot must obey orders given it by human beings except where such orders would conflict with the First Law.
- A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.

## Getting Started

  * [Setup](#setup)
  * [Usage](#usage)
  * [Enhancing](#enhancing)
  * [License](#license)
  * [Contribute](#contribute)

## Setup

Setting up your bot is simple. Install the dependencies:

```
npm install
```

## Usage

With the dependencies installed, starting cloudbot requires the environment variables `HUBOT_NAME` and `ADAPTER` be set. The booting sequence will begin with

```
npm start
```

Certain scripts may require other environment variables to be set. Check out the documentation for each of these scripts, as it will provide the proper information.

## Enhancing

More functionality can be added to cloudbot; it knows no limits. Add the script to the dependency list in `package.json`, and reference that script in the array of `external-scripts.json`.

## License

See [LICENSE.txt](https://github.com/ibm-cloud-solutions/cloudbot/blob/master/LICENSE.txt) for license information.

## Contribute

Please check out our [Contributing Guidelines](https://github.com/ibm-cloud-solutions/cloudbot/blob/master/CONTRIBUTING.md) for detailed information on how you can lend a hand.
