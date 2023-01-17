const colors = require('colors');

module.exports = {
    log: {
        warn: (msg) => {
            console.log(colors.yellow(msg));
        },
        error: (msg) => {
            console.log(colors.red(msg));
        },
        info: (msg) => {
            console.log(colors.green(msg));
        },
        debug: (msg) => {
            console.log(colors.blue(msg));
        },
        verbose: (msg) => {
            console.log(colors.cyan(msg));
        },
        silly: (msg) => {
            console.log(colors.magenta(msg));
        },
        trace: (msg) => {
            console.log(colors.white(msg));
        },
        custom: (msg, color) => {
            console.log(colors[color](msg));
        }
    }
}