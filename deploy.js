const ethers = require("ethers"); // const == let, anyway we cant change const
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:8545"
  );
  const wallet = new ethers.Wallet(
    "0x76c5f94dad9b44453cc5c5ccf2b29a3c4889221780528cdecfc8aa41c5d16e40",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying pls wait...");
  const contract = await contractFactory.deploy(); // STOP here , wait for contract to deploy!
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
