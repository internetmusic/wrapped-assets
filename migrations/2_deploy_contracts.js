const nativeAssets = artifacts.require("nativeAssets");
const arc20 = artifacts.require("arc20");

let name = "ScoobyCoin";
let symbol = "SCBY";
let decimals = 9;
let assetID = "0x4313fc0a2dd37d7ef40bbd1842d3489c810b5280210a1e9f74f0724c70a58703";

module.exports = function (deployer) {
  deployer.deploy(nativeAssets);
  deployer.link(nativeAssets, arc20);
  deployer.deploy(arc20, name, symbol, decimals, assetID);
};
