const { ethers } = require("hardhat");

async function main() {
  const nftcontract = await ethers.getContractFactory("mynft")

  const deployedNFTContract = await nftcontract.deploy();

  await deployedNFTContract.deployed();

  console.log("NFT Contract Address:", deployedNFTContract.address);
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
   console.error(error);
   process.exit(1);
 });