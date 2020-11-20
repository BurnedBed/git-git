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
     * @param {String|Boolean} bio 
     */
    async updateBio(bio){
        if(!bio) return await this.requestHandler.sendRequest(endPoints.self_user, `{"bio":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"bio":"${bio}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} username 
     */
    async updateTwitterUsername(username){
        if(!username) return await this.requestHandler.sendRequest(endPoints.self_user, `{"twitter_username":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"twitter_username":"${username}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} name 
     */
    async updateName(name){
        if(!name) return await this.requestHandler.sendRequest(endPoints.self_user, `{"name":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"name":"${name}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} email 
     */
    async updatePublicEmail(email){
        if(!email) return await this.requestHandler.sendRequest(endPoints.self_user, `{"email":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"email":"${email}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} url  
     */
    async updateBlogUrl(url){
        if(!url) return await this.requestHandler.sendRequest(endPoints.self_user, `{"blog":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"blog":"${url}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} company 
     */
    async updateCompany(company){
        if(!company) return await this.requestHandler.sendRequest(endPoints.self_user, `{"company":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"company":"${company}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} location 
     */
    async updateLocation(location){
        if(!location) return await this.requestHandler.sendRequest(endPoints.self_user, `{"location":null}`, "PATCH", "application/vnd.github.v3+json");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"location":"${location}"}`, "PATCH", "application/vnd.github.v3+json");
    }
}