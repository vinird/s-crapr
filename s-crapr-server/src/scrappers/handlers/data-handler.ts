const $ = require('cheerio');

/**
 *
 *
 * @param {String} html
 * @returns {Object} processed data
 */
export const processData = (html, selector, outputFormat) => {
    switch (outputFormat) {
        case 'raw':
            return $(selector, html).html();

        case 'text':
            return $(selector, html).text();

        case 'json':
            return $(selector, html).json();

        default:
            return $(selector, html).text();
    }
}