# 🚀 Aluna Boosted Finance 🚀

Aluna Boosted Finance is a fork of [Boosted Finance](https://github.com/Boosted-Finance/smart-contracts)'s
Smart Contracts.

## Development

### Building and Tests
This project uses [buidler](https://buidler.dev/).

Make sure to install required dependencies:
```
$ npm install
```

To compile the contracts:
```
$ npm run compile
```

To run the tests:
```
$ npm run test
```

To run a single test:
```
$ npx buidler test test/<file>
```

## Testing

This project uses [buidler](https://buidler.dev/) and [solidity-coverage](https://blog.colony.io/code-coverage-for-solidity-eecfa88668c2/) to test.

```
$ npx buidler coverage --network coverage
```


## Deploying

This project uses [buidler](https://buidler.dev/) scripts to deploy. 

In order to run the deploy scripts you need to create an `.env` file, please refer to our `.env.example`

Tests were done on the KOVAN network in order to interact with uniswap contracts.

1. deploy mock tokens

```
$ npx buidler deploy:mock-tokens --network --kovan
```

2. In order to deploy Aluna Governance, you need to setup `gov` settings on ./scripts/_settings.js.

```
$ npx buidler deploy:governance --network --{kovan or mainnet}
```

3. In order to deploy Pools you need to define the pool on ./scripts/_settings.js 

```
$ npx buidler deploy:pool --pool {your pool name} --network --{kovan or mainnet}
```
