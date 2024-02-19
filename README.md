# hackthechurch-midhub

## Problem to solve
This repository contains our proof of concept on a possible way of solving problems with score synchronization. The "Schola" conductor frequently plays an instruments so he cannot use his hands to communicate with the rest of the choir. 

## Our solution
We designed an proof of concept device, which displays text of songs scrolled to desired position. This allows the conductor to show the rest of choir/ all people in the church, which part of the song is currently played using MIDI pedal (Currently emulated by I2C device witch buttons "UP", "DOWN")
The displaying of text is using an Node.js server using a Next.js 14 and Tailwind to which everyone can connect and view the scores at correct position

To start
program CommunicationManager.py has to be started beforehand

to start the server
```sh
yarn # install dependencies
yarn build
yarn start
```
