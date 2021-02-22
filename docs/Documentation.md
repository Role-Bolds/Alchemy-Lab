# Bot Documentation

This file exists as you might expect. For the purposes of adding some information on what I have going on at this moment. -Rowen Stipe

## Basics

Currently the bot is written in TypeScript then compiled into commonjs to be run from `node`. `yarn` is used for dependency maintenance while `package.json` has several custom `npm run` scripts for the purposes of CI and coverage testing. The folder `./src` contains all the files to be compiled into `./build` based on settings in the `./tsconfig.json` file. The folder `./test` contains various `./**/*.test.ts` files mimicking `./src` for `mocha` testing purposes. More coverage testing is needed but not a critical issue.
