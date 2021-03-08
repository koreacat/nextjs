const path = require('path');

module.exports = {
    basePath: '/nextjs',
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://koreacat.github.io/nextjs/' : '',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        USER: process.env.USER,
        PASS: process.env.PASS
    }
};
