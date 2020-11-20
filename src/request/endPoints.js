module.exports = {
    base_url: 'https://api.github.com',

    self_user: '/user',
    self_user_repos: '/user/repos',

    self_user_followers: (per_page, page) => `/user/followers?per_page=${per_page}?page=${page}`,
    self_user_following: (per_page, page) => `/user/following?per_page=${per_page}?page=${page}`,
    self_user_follows: (username) => `/user/following/${username}`,

}