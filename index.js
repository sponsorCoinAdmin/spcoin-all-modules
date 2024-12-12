
// The following 2 lines determine if this is to be run from a local deployment or an NPM Directory deployment.
// Use one line or the other depending on your source requirements.
// const { SpCoinAccessModules } = require("../spcoin-access-modules/index");
const { SpCoinAccessModules } = require("@sponsorcoin/spcoin-access-modules/index");


// const {  WethMethods, ETHEREUM, POLYGON, HARDHAT, BURN_ADDRESS }  = require("../spcoin-weth-module/index")

const {  WethMethods, ETHEREUM, POLYGON, HARDHAT, BURN_ADDRESS }  = require("@sponsorcoin/spcoin-weth-module/index")

// const {
//   WethMethods,
//   ETHEREUM,
//   POLYGON,
//   HARDHAT,
//   BURN_ADDRESS
// } = require("./spcoin-weth-module/wethMethods");
  
class AccessModules {
    constructor( _signer, _spCoinABI, _spCoinAddress, _dump = true) {
    this.pCoinClassModules = new SpCoinAccessModules(_spCoinAddress, _spCoinABI, _signer);
    this.wethMethods = new WethMethods( _weth9Address, _weth9ABI, _signer, _dump )
  }
}

module.exports =  {
  AccessModules,
  SpCoinAccessModules,
  WethMethods,
  BURN_ADDRESS,
  ETHEREUM,
  POLYGON,
  HARDHAT
}
