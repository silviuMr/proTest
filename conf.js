exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login-and-click.js'],
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
}