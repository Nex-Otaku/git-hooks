const fs = require('fs');

const _ = require('lodash');
const lib = require('./lib');

const getCommitMessageFilename = () => {
    return process.argv.slice(2)[0];
};

const readFile = async (path) => {
    return new Promise((resolve) => {
        fs.readFile(path, function(err, data) {
            if (err) {
                throw err;
            }

            resolve(data);
        });
    })
};

const getCurrentBranch = async () => {
    const command = 'git branch --show-current';
    let dumpOutput = await lib.shellRun(command);

    return _.trim(dumpOutput);
};

const main = async () => {
    const branch = await getCurrentBranch();

    const commitMessageFilename = getCommitMessageFilename();

    const commitMessage = await readFile(commitMessageFilename);

    const commitMessageAfterReplace = _.replace(commitMessage, '[branch]', branch);

    fs.writeFile(commitMessageFilename, commitMessageAfterReplace, function (err) {
        if (err) throw err;
    });
};

main();
