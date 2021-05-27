const fs = require('fs');
const lib = require('./lib');
const getCommitMessageFilename = () => {
    return process.argv.slice(2)[0];
};

const readFile = async (path) => {
    return new Promise((resolve) => {
        fs.readFile(path, function (err, data) {
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
    return String(dumpOutput).trim();
};

const main = async () => {
    const branch = await getCurrentBranch();
    const commitMessageFilename = getCommitMessageFilename();
    const commitMessage = await readFile(commitMessageFilename);

    const commitMessageAfterReplace = String(commitMessage).replace('[branch]', branch);

    fs.writeFile(commitMessageFilename, commitMessageAfterReplace, function (err) {
        if (err) throw err;
    });
};

main();
