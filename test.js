const { log } = require('./index.js');

log.warn('This is a warning');
log.error('This is an error');
log.info('This is an info');
log.debug('This is a debug');
log.verbose('This is a verbose');
log.silly('This is a silly');
log.trace('This is a trace');
log.custom('This is a custom color', 'rainbow');