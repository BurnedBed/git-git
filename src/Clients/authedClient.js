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
        if(typeof bio != "string") throw new TypeError("Bio must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"bio":"${bio}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} username 
     */
    async updateTwitterUsername(username){
        if(!username) return await this.requestHandler.sendRequest(endPoints.self_user, `{"twitter_username":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof username != "string") throw new TypeError("Username must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"twitter_username":"${username}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} name 
     */
    async updateName(name){
        if(!name) return await this.requestHandler.sendRequest(endPoints.self_user, `{"name":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof name != "string") throw new TypeError("Name must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"name":"${name}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} email 
     */
    async updatePublicEmail(email){
        if(!email) return await this.requestHandler.sendRequest(endPoints.self_user, `{"email":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof email != "string") throw new TypeError("Email must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"email":"${email}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} url  
     */
    async updateBlogUrl(url){
        if(!url) return await this.requestHandler.sendRequest(endPoints.self_user, `{"blog":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof url != "string") throw new TypeError("Url must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"blog":"${url}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} company 
     */
    async updateCompany(company){
        if(!company) return await this.requestHandler.sendRequest(endPoints.self_user, `{"company":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof company != "string") throw new TypeError("Company must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"company":"${company}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {String|Boolean} location 
     */
    async updateLocation(location){
        if(!location) return await this.requestHandler.sendRequest(endPoints.self_user, `{"location":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof location != "string") throw new TypeError("Location must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"location":"${location}"}`, "PATCH", "application/vnd.github.v3+json");
    }

    /**
     * 
     * @param {Boolean} hireable 
     */
    async updateHireable(hireable){
        if(!hireable) return await this.requestHandler.sendRequest(endPoints.self_user, `{"hireable":null}`, "PATCH", "application/vnd.github.v3+json");
        if(typeof hireable != "boolean") throw new TypeError("Hireable must be boolean");
        return await this.requestHandler.sendRequest(endPoints.self_user, `{"hireable":"${hireable}"}`, "PATCH", "application/vnd.github.v3+json");
    }   
   


    /**
     * 
     * @param {Number} amoutOnPage 
     * @param {Number} page 
     */
    async getFollowers(amoutOnPage, page){
        if(!amoutOnPage || !page) throw new TypeError("AmoutOnPage and page is required");
        if(typeof amoutOnPage != "number" || typeof page != "number") throw new TypeError("AmoutOnPage and page must be a number");
        if(amoutOnPage > 100) amoutOnPage = 100;
        return await this.requestHandler.sendRequest(endPoints.self_user_followers(amoutOnPage, page));
    }

    /**
     * 
     * @param {Number} amoutOnPage 
     * @param {Number} page 
     */
    async getFollowing(amoutOnPage, page){
        if(!amoutOnPage || !page) throw new TypeError("AmoutOnPage and page is required");
        if(typeof amoutOnPage != "number" || typeof page != "number") throw new TypeError("AmoutOnPage and page must be a number");
        if(amoutOnPage > 100) amoutOnPage = 100;
        return await this.requestHandler.sendRequest(endPoints.self_user_following(amoutOnPage, page));
    }

    /**
     * 
     * @param {String} username 
     */
    async followUser(username){
        if(!username || typeof username != "string") throw new TypeError("Username is required and must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user_follows(username), null, "PUT");
    }

    /**
     * 
     * @param {String} username 
     */
    async unfollowUser(username){
        if(!username || typeof username != "string") throw new TypeError("Username is required and must be a string");
        return await this.requestHandler.sendRequest(endPoints.self_user_follows(username), null, "DELETE");
    }




    async getSelfRepos(){
        return await this.requestHandler.sendRequest(endPoints.self_user_repos);
    }

    /**
     * 
     * @param {String} name 
     * @param {Object} options 
     * @property {String} [options.description] A short description of the repository, Default: null
     * @property {String} [options.homepage] A URL with more information about the repository, Default: null
     * @property {Boolean} [options.private] Whether the repository is private or public, Default: false
     * @property {Boolean} [options.has_issues] Whether issues are enabled, Defualt: true
     * @property {Boolean} [options.has_projects] Whether projects are enabled, Default: true
     * @property {Boolean} [options.has_wiki] Whether the wiki is enabled, Deault: true
     * @property {Boolean} [options.auto_init] Whether the repository is initialized with a minimal README, Default: true
     * @property {String} [options.gitignore_template] The desired language or platform to apply to the .gitignore, Default: Node
     * @property {String} [options.license_template] The license keyword of the open source license for this repository, Default: null
     * @property {Boolean} [options.allow_squash_merge] Whether to allow squash merges for pull requests, Default: true
     * @property {Boolean} [options.allow_merge_commit] Whether to allow merge commits for pull requests, Default: true
     * @property {Boolean} [options.allow_rebase_merge] Whether to allow rebase merges for pull requests, Default: true
     * @property {Boolean} [options.delete_branch_on_merge] Whether to delete head branches when pull requests are merged, Default: false
     * @property {Boolean} [options.has_downloads] Whether downloads are enabled, Default: true
     * @property {Boolean} [options.is_template] Whether this repository acts as a template that can be used to generate new repositories, Default false
     */
    async createRepo(name, options){   
        if(!name || typeof name != "string") throw new TypeError("Name is required and must be a string");
        if(!options && typeof options != "object") throw new TypeError("Options is required and must be a object");
        
       

    }
}