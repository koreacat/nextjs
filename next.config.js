const path = require('path');

module.exports = {
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://koreacat.github.io/nextjs' : '',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
