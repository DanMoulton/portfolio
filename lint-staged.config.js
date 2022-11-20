module.exports = {
    'src/**/*.ts': (filesPath) => {
        return [`npx eslint -c .eslintrc.js ${filesPath.join(' ')}`];
    }
};
