usePlugin('@nomiclabs/buidler-ethers');

const fs = require('fs');
const path = require('path');
const BN = require('ethers').BigNumber;
const pressToContinue = require('./pressToContinue');

task('deploy:mock-tokens', 'Deploy mock tokens to test net')
.setAction(async () => {
  network = await ethers.provider.getNetwork();
  
  const BoostToken = await ethers.getContractFactory('BoostToken')
  const MossToken = await ethers.getContractFactory('Token')
  const Stable = await ethers.getContractFactory('Token')

  // compile contracts
  //await bre.run("compile");

  //Deploy Boost
  console.log('Deploying BoostToken');
  const boostToken = await BoostToken.deploy()
  await boostToken.deployed()

  console.log(`Boost address: ${boostToken.address}`);
  await pressToContinue();

  //Deploy Moss
  console.log('Deploying MossToken');
  const mossToken = await MossToken.deploy('MOSS TOKEN', 'MCO2', 18)
  await mossToken.deployed()

  console.log(`Moss address: ${mossToken.address}`);
  await pressToContinue();

  //Deploy Stable
  console.log('Deploying Stable');
  const stable = await Stable.deploy('STABLE TOKEN', 'STB', 18)
  await stable.deployed()

  console.log(`Stable address: ${stable.address}`);
  await pressToContinue();
})