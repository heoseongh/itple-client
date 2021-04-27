const { 
    addDecoratorsLegacy, // 데코레이터 사용할 수 있도록 해주는 설정
    disableEsLint,
    override,
  } = require("customize-cra");
  
  module.exports = {
    webpack: override(
        disableEsLint(),
        addDecoratorsLegacy()
    ),
  };