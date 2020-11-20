module.exports = {
    base_url: 'https://api.github.com',
    self_user: '/user',
    self_user_followers: (per_page, page) => `/user/followers?per_page=${per_page}?page=${page}`
}