# Review.io [Start-Credits : Angular Quickstart Repo]

[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![Join the chat at https://gitter.im/Review-io/Lobby](https://badges.gitter.im/Review-io/Lobby.svg)](https://gitter.im/Review-io/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/SpawnTree/Review.io.svg?branch=master)](https://travis-ci.org/SpawnTree/Review.io)
[![devDependencies Status](https://david-dm.org/SpawnTree/Review.io/dev-status.svg)](https://david-dm.org/SpawnTree/Review.io?type=dev)
[![dependencies Status](https://david-dm.org/SpawnTree/Review.io.svg)](https://david-dm.org/SpawnTree/Review.io)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Code Climate](https://codeclimate.com/github/SpawnTree/Review.io/badges/gpa.svg)](https://codeclimate.com/github/SpawnTree/Review.io)
[![Test Coverage](https://codeclimate.com/github/SpawnTree/Review.io/badges/coverage.svg)](https://codeclimate.com/github/codeclimate/SpawnTree/Review.io)
[![Issue Count](https://codeclimate.com/github/SpawnTree/Review.io/badges/issue_count.svg)](https://codeclimate.com/github/SpawnTree/Review.io)

This repository holds the source code of the Review.io review site,
the foundation for most of the documentation samples and potentially a good starting point for the application.

It's been extended with testing support so you can start writing tests immediately.
It is not made to match production needs and will later be added with DOCKER ```Dockerfile``` & Build Intergration support.

```
** Please note this is experimental setup. Not recommended for production use. **
** Web3 Package install via bower. Truffle, Zeppelin, Solidity-Lint & Solidity compilation only on node. **
** Unit Testing for smart-contracts & Blockchain based logic to be tested ** 
```
## Prerequisites

Node.js and npm are essential to React & Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

We recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

### Delete _non-essential_ files (optional)

You can quickly delete the _non-essential_ files that concern testing and QuickStart repository maintenance
(***including all git-related artifacts*** such as the `.git` folder and `.gitignore`!)
by entering the following commands while in the project folder:

##### OS/X (bash)
```shell
xargs rm -rf < non-essential-files.osx.txt
rm src/app/*.spec*.ts
rm non-essential-files.osx.txt
```

##### Windows
```shell
for /f %i in (non-essential-files.txt) do del %i /F /S /Q
rd .git /s /q
rd e2e /s /q
```

### Create a new git repo
You could [start writing code](#start-development) now and throw it all away when you're done.
If you'd rather preserve your work under source control, consider taking the following steps.

Initialize this project as a *local git repo* and make the first commit:
```shell
git init
git add .
git commit -m "Initial commit"
```

>Recover the deleted `.gitignore` from the QuickStart repository 
if you lost it in the _Delete non-essential files_ step.

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```shell
git remote add origin <repo-address>
git push -u origin master
```

## Install bower packages

```shell
bower install
bower install <package.name> --save
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm install <package.name> --save
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

You're ready to write your application.

### Solidity Smart Contract
```
* Truffle & Zeppelin support.
* Compilation & Build to be intergrated. 
* It be later be integrated with webpack & npm script for automated builds (if possible!!).
```

### Yarn & Webpack

``` 
Yet to add Yarn Support & Webpack scripts
```

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build` - runs the TypeScript compiler once.
* `npm run build:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)

## Testing

This repo adds both karma/jasmine unit test and protractor end-to-end testing support.

These tools are configured for specific conventions described below.

*It is unwise and rarely possible to run the application, the unit tests, and the e2e tests at the same time.
We recommend that you shut down one before starting another.*

### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Look for the example `src/app/app.component.spec.ts`.
Add more `.spec.ts` files as you wish; we configured karma to find them.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Look for the example `e2e/app.e2e-spec.ts`.
Add more `.e2e-spec.js` files as you wish (although one usually suffices for small projects);
we configured Protractor to find them.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.

[travis-badge]: https://travis-ci.org/SpawnTree/Review.io.svg?branch=master

