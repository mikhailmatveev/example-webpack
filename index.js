let Process = require('./src/js/process.js').Process;

(new Process())
    .run()
    .then(() => {
        console.log('OK')
    }).catch(() => {
        console.log('FAILED')
    });
