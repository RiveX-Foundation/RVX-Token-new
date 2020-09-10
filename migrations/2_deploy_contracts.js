
var RVXToken = artifacts.require("RVXToken");


module.exports = function(deployer) {
  var rvxowner = "0xeE4f37c7f4523Db8f64d611E15962703d78CCF27";
 
 deployer.deploy(RVXToken,rvxowner);


 
};
