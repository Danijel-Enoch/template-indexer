const { utils } =require("ethers") 


function convert(value, unit = "ether") {
    if (value instanceof ethers.BigNumber) {
        return utils.formatUnits(value.toString(), unit);
    } else {
        return ethers.BigNumber.from(value);
    }
}


module.export={
    convert
}