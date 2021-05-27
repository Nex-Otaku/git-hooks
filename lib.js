const util = require('util');
const exec = util.promisify(require('child_process').exec);
module.exports = {
    shellRun: async (command) => {
        try {
         const {stdout,stderr} = await exec(command);
            if (stderr.length > 0) {
                console.error('Execution error: ',stderr);
            }
            return stdout;
        }catch(e) {
            console.error('Error:', e);
        }
    },
};
