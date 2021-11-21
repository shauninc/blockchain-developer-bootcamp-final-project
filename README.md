# Blockchain Bootcamp 2021 Final Project 

## Project Description

Final project for the Consensys Blockchain bootcamp 2021. The aim was to create a decentralized file storage dapp that allows a user to upload, download and store files on IPFS
	
## Frontend

The frontend has been deployed on netlify, and can be interacted with by connecting a Metamask wallet with either a Ganache or Ropsten testnet. 

View it live here: [MyFiles Drive](https://hopeful-torvalds-dade87.netlify.app/)

## Project Directory Structure

- `client`: Project's React frontend.
- `contracts`: Smart contracts that are deployed on the Ropsten testnet.
- `migrations`: Migration files for deploying contracts
- `test`: Tests for smart contracts.

## How to run this project locally with Ganache:

### Prerequisites

- Node.js v14.17.6
- Truffle v5.4.11 
- Ganache
- NPM
- `git checkout main`

### Contracts

- Run `NPM install` in project root to install Truffle build and smart contract dependencies
- Run local testnet in port `7545` with an Ethereum client, e.g. Ganache
- `truffle compile`
- `truffle migrate --reset`
- Run tests with in Truffle `truffle test` in terminal in project root directory

### Frontend

- `cd client`
- `NPM install`
- `NPM Run start`
- Open `http://localhost:3000`


## How to run the dapp on Ropsten Testnet 

### Setup your wallet 

Connect your development metamask wallet to Ropsten and obtain some funds at 
https://faucet.ropsten.be/

### Environment variables needed for running project on Ropsten Testnet 

Create a ```.env``` file and add the following details from your infura account and ropsten affiliated wallet to it: 

```
MNEMONIC=""
INFURA_API_KEY= 
```
Remember to include the ```.env``` to your ```.gitignore```

## How to interact with the Dapp

Once you are running locally with your metamask on the ganache or ropsten test net you can load a non sensitive file from your local machine and upload it to IPFS. 

## Screen Cast 
View a walk through [here](https://www.loom.com/share/ec58fbddad014039884de2b4eb386e9f)


## Simple Workflow
- add file and description input 
- upload a file to IPFS 
- list user uploaded files with option to view file 
- create UI for interaction 

## Extra project features to add

- Integrate the option to use the filecoin network 
- Add option to store files forever with Arweave

## Public Address for Certificate 
0x41cE9D87f777f5eE43507759055e932b3074e3E2

