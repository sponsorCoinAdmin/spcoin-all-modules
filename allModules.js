const { SpCoinAccessModules } = require("../spcoin-access-modules//spcoinModules/SpCoinAccessModules");
const { 
  WethMethods,
  ETHEREUM,
  POLYGON,
  HARDHAT,
  BURN_ADDRESS 
}  = require("@sponsorcoin/weth-module/wethMethods")

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
