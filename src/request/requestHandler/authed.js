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
            "Content-Type": contentType || "application/json",
        }
        
        let final = {
            method: method || "GET",
            headers: Headers,
        }
        if(body) final.body = body;
        let fetched = await fetch(endPoints.base_url + endPoint, final);
        try{
            fetched = await fetched.json();
        }catch(err){
            return fetched
        }
        
        if(fetched.message) return new Error(fetched.message);
        return fetched;
        
    }
}