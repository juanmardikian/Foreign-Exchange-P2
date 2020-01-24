# Project Overview

## Foreign Exchange

A Website based in the dollar currency, to compare ratios with another currencies 
## API Snippet
```
[ExchageRatesApi](https://exchangeratesapi.io/)
{
    "rates": {
        "CAD": 1.3131853194,
        "HKD": 7.7725419121,
        "ISK": 124.5129134572,
        "PHP": 50.8309922972,
        "DKK": 6.7720888083,
        "HUF": 304.4947893068,
        "CZK": 22.8001812415,
        "GBP": 0.7640507476,
        "RON": 4.3315813321,
        "SEK": 9.548074309,
        "IDR": 13595.7498867241,
        "INR": 71.2913457182,
        "BRL": 4.1761667422,
        "RUB": 61.7754417762,
        "HRK": 6.7435432714,
        "JPY": 109.6148618034,
        "THB": 30.5600362483,
        "CHF": 0.9707294971,
        "EUR": 0.9062075215,
        "MYR": 4.0649750793,
        "BGN": 1.7723606706,
        "TRY": 5.9391934753,
        "CNY": 6.9333031264,
        "NOK": 9.0054372451,
        "NZD": 1.5119166289,
        "ZAR": 14.3710919801,
        "USD": 1.0,
        "MXN": 18.7739012234,
        "SGD": 1.3511554146,
        "AUD": 1.46144087,
        "ILS": 3.452650657,
        "KRW": 1168.210240145,
        "PLN": 3.8572723154
    },
    "base": "USD",
    "date": "2020-01-24"
}
```
## Wireframes
<img src="https://git.generalassemb.ly/juanmardikian/project-2/blob/master/wireframes.jpg">


### MVP

- In the right section, the 6 main pair of currencies. 

- In the main section, a bunch of paired currencies to choose

- By choosing one pair of currencies, the main section will display the ratio between them.

- The whole purpose will be to see different ratios of currencies compare agaist the mighty US dollar

- Find and use external api that works and five real data time

- Display the comparation against other currencies





### Post-MVP

- Favorites bar
- Search history
- Charts and graphics
- Ticker that display pair of currencies


## React Component Hierarchy

Hierarchy and architectural design of my app
<img src="https://git.generalassemb.ly/juanmardikian/project-2/blob/master/app.jpg"
     style="float: left; margin-right: 10px;" />

## Components



| Component | Description |Type |
| --- | --- | --- |
| APP | Control state for all house components |Hooks
| Header | The Header with a ticker of the prices of some stocks and a navigator for diferent currencies|Functional
|Nav Bar| Where the user can see diferent kind of markets | Functional
|Single Graphic| A graphic showing the development of one currency agaist another | Functional
|Search Bar| Where the user can search for the specific currency he wants| Functional
| Main | Multiple grafics were the customer can choose the different pairs | Functional
| Specific chart| A component that show an specific chart | Functional
| Ticker| A simple ticker to display pair of currencies | Functional
|Footer| Where we will have another marquee and social media icons| Functional

## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)
<img src="https://git.generalassemb.ly/juanmardikian/project-2/blob/master/time%20priority.jpeg"
     style="float: left; margin-right: 10px;" />


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Graphics| L | 8hrs| 0hrs | 0hrs |
| Working with API | H | 5hrs| 0hrs | 0hrs |
| Components and Logic | H | 20hrs| 0hrs | 0hrs |
| Searching Bar | H | 5hrs| 0hrs | 0hrs |
| Total | H | 38hrs| 0hrs | 0hrs |

## Project Schedule

 
|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Finish the roject worksheet / Start creating the app and components | Incomplete
|Jan 27th| Get the data and start displaying it  | Incomplete
|Jan 28th| Actual Code | Incomplete
|Jan 29th| HTML, CSS, etc. Reach MVP  | Incomplete
|Jan 30th| Post-MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

Axios

React Router Dom




## Issues and Resolutions

Figuring out state, and and where to send the data (props)
Solution: research and working with TA and class repos

## Code Snippet

Not yet, but probably axios

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
