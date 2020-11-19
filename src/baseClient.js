const requestHandler = require("./request/requestHandler/base");
module.exports = class{
    constructor(){
        this.requestHandler = new requestHandler();
    }
}