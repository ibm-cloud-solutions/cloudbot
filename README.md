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

## Setup <a id="setup"></a>

Setting up your bot is simple. Install the dependencies:

```
npm install
```

## Usage <a id="usage"></a>

With the dependencies installed, starting cloudbot requires the environment variables `HUBOT_NAME` and `ADAPTER` be set. The booting sequence will begin with

```
npm start
```

Certain scripts may require other environment variables to be set. Check out the documentation for each of these scripts, as it will provide the proper information.

## Enhancing <a id="enhancing"></a>

More functionality can be added to cloudbot; it knows no limits. Add the script to the dependency list in `package.json`, and reference that script in the array of `external-scripts.json`.

## License <a id="license"></a>

See [LICENSE.txt](./LICENSE.txt) for license information.

## Contribute <a id="contribute"></a>

Please check out our [Contributing Guidelines](./CONTRIBUTING.md) for detailed information on how you can lend a hand.
