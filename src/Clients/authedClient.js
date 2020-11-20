const baseClient = require("../baseClient");
const requestHandler = require("../request/requestHandler/authed");
const endPoints = require("../request/endPoints")
module.exports = class authedClient extends baseClient{
    /**
     * 
     * @param {String} Token 
     */
    constructor(Token){
        super();

        this.token = Token;
        if(!this.token || typeof this.token != "string") throw new TypeError("Token is required and must be a string.");

        this.requestHandler = new requestHandler(this.token)
    }

    async getSelf(){
        return await this.requestHandler.sendRequest(endPoints.self_user)
    }

    /**
     * 
     * @param {String} bio 
     */
    async updateBio(bio){
        if(!bio) throw new TypeError("Bio is required")
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"bio":"${bio}"}`, "PATCH", "application/vnd.github.v3+json")
    }
}