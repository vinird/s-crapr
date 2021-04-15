const rp = require('request-promise');

export const execute = (url) => {
    return rp(url)
}