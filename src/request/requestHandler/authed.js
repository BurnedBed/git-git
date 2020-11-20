const base = require("./base");
const endPoints = require("../endPoints");
const fetch = require("node-fetch")
module.exports = class authedRequestHandler extends base{
    constructor(Token){
        super();

        this.auth = `token ${Token}`
        
    }

    async sendRequest(endPoint, body, method, contentType){



        let Headers = {
            Authorization: this.auth,
            "Content-Type": contentType || "application/json"
        }
        
        let final = {
            method: method || "GET",
            headers: Headers,
        }
        if(body) final.body = body
        console.log(final)
        let fetched = await fetch(endPoints.base_url + endPoint, final)
        fetched = await fetched.json();
        return fetched
        
    }
}