# "git-git" - A simple to use github wrapper. 

## Install
`npm i git-git`

## Example
```js
const gitGit = require("git-git");
const client = new gitGit.authedClient("github_token");
let example = async () => {
    let fetched = await client.getSelf()
    console.log(fetched)
}
example();
```
