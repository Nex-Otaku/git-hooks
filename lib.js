const exec = require('child-process-promise').exec;

const _ = require('lodash');

module.exports = {
    shellRun: async (command) => {
        return exec(command)
            .then(function (result) {
                var stderr = result.stderr;

                if (stderr.length > 0) {
                    throw new Error(stderr);
                }

                return result.stdout;
            })
            .catch(function (err) {
                console.error('ERROR: ', err);
            });
    },
};