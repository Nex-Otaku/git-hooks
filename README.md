# Git Hooks

Git Hook to insert branch name to commit message. 

## Usage

When you commit to Git, hook automatically replaces "[branch]" with name of current branch.

Suppose you are working on branch "555-fix":

`[branch] Fixed a typo`

You commit this, and see in Git log:

`555-fix Fixed a typo`

## Installation

### Prerequisites

To use this hook, you need

```
Windows (not tested on Linux)
NodeJS
Git
```

### 1. Clone Repo

Clone this repo.

Instal Node.js dependecies with

`npm install`

### 2. Installing Commit Hook

Copy hook to target project directory.

```copy C:\path-to-git-hook\commit-msg.sample C:\path-to-target-project\.git\hooks\commit-msg```

Edit file `commit-msg` -- change path to git-hook folder.

Make this file executable

```attrib +x commit-msg```

### 3. Installing SmartGit Template (optional)

Copy `commit-template.sample` file to `commit-template`.

Edit `commit-template` as you like.

Plug in the template:

Change directory to target project folder.

Run

```git config commit.template C:\path-to-git-hook\commit-template```

You will get this template when create new commit with SmartGit.


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © Nex Otaku.
