# Tesla Battery Range Calculator with React

This project is a React version of Todd Motto's [Building Tesla's battery range calculator with Angular 2 reactive forms](https://toddmotto.com/building-tesla-range-calculator-angular-2-reactive-forms).

The project has been bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

I reused some materials like data, images, css styles but also added my own funcionalities like SI units buttons and changed some css styles and animations to make it look a bit different. Then I rebuilt it in **React way**.

After constructing the project through the above app, I implemented each component by subdiving the UI. I managed the state and event using local state and props, and completed the entire app.

## Technologies used

* ReactJS
* JavaScript (ES6 standard)
* CSS
* Bootstrap
* JSON

## Demo

[![Demo TeslaCalc alpha](https://gifs.com/gif/tesla-battery-range-calc-rRp6Nk)]

## Functionality

With [this app](http://react-tesla-battery-range.surge.sh) you can check a battery range in **Tesla Car Model 3** according to a few variables:
- type of battery
- speed
	- in miles per hour
	- in kilometres per hour
- outside temperature:
	- in Celsius degrees
	- in Fahrenheit degrees
- air conditioning on / off
- heating on / off
- size of wheels:
	- 19'' (gives longer distance, that's why electric cars tend to have smaller wheels sizes)
	- 21''

## Warning

Please make sure you refreshed the browser to check the loading animation I created :blush:

## Comments

I plan to use Flex instead of floats in this app to make it responsive.

[PREVIEW MY APP](http://react-tesla-battery-range.surge.sh)
