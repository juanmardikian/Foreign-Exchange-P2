# Project Overview


## Project Name

A Website where it will show you the different markets and where you can chose and specific market and see a specific stock

## API Snippet
```

{
    "symbols_requested": 3,
    "symbols_returned": 3,
    "data": [
        {
            "symbol": "SNAP",
            "name": "Snap Inc.",
            "currency": "USD",
            "price": "19.26",
            "price_open": "19.18",
            "day_high": "19.43",
            "day_low": "18.91",
            "52_week_high": "19.53",
            "52_week_low": "5.91",
            "day_change": "0.16",
            "change_pct": "0.84",
            "close_yesterday": "19.10",
            "market_cap": "26963423232",
            "volume": "18041595",
            "volume_avg": "27529528",
            "shares": "1138349952",
            "stock_exchange_long": "New York Stock Exchange",
            "stock_exchange_short": "NYSE",
            "timezone": "EST",
            "timezone_name": "America/New_York",
            "gmt_offset": "-18000",
            "last_trade_time": "2020-01-23 15:59:59",
            "pe": "N/A",
            "eps": "-0.72"
        },
        {
            "symbol": "TWTR",
            "name": "Twitter, Inc.",
            "currency": "USD",
            "price": "33.88",
            "price_open": "33.99",
            "day_high": "34.36",
            "day_low": "33.72",
            "52_week_high": "45.86",
            "52_week_low": "28.63",
            "day_change": "-0.14",
            "change_pct": "-0.41",
            "close_yesterday": "34.02",
            "market_cap": "26302976000",
            "volume": "12284666",
            "volume_avg": "14457242",
            "shares": "776356992",
            "stock_exchange_long": "New York Stock Exchange",
            "stock_exchange_short": "NYSE",
            "timezone": "EST",
            "timezone_name": "America/New_York",
            "gmt_offset": "-18000",
            "last_trade_time": "2020-01-23 15:59:59",
            "pe": "16.51",
            "eps": "2.05"
        },
        {
            "symbol": "VOD.L",
            "name": "Vodafone Group plc",
            "currency": "GBX",
            "price": "154.20",
            "price_open": "153.16",
            "day_high": "155.02",
            "day_low": "152.08",
            "52_week_high": "169.46",
            "52_week_low": "122.22",
            "day_change": "1.50",
            "change_pct": "0.98",
            "close_yesterday": "152.70",
            "market_cap": "543183208709",
            "volume": "46118281",
            "volume_avg": "71030855",
            "shares": "26770980867",
            "stock_exchange_long": "London Stock Exchange",
            "stock_exchange_short": "LSE",
            "timezone": "GMT",
            "timezone_name": "Europe/London",
            "gmt_offset": "0",
            "last_trade_time": "2020-01-23 16:37:00",
            "pe": "N/A",
            "eps": "-0.06"
        }
    ]
}
```
## Wireframes
It will be based in my last proyect, but mos

https://pages.git.generalassemb.ly/juanmardikian/MardikianInvestments/

### MVP

Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE:
- Find and use external api 
- Render data on page 
- Allow user to choose favorites 


### Post-MVP

I will try to add a favorite bar or searched. I will try to make it look the most professional I can 

#### PostMVP EXAMPLE:
- Add user auth

## React Component Hierarchy

Hierarchy and architectural design of my app


## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component | Description |Type |
| --- | --- | --- |
| Header | The Header with a ticker of the prices of some stocks and a navigator for diferent markets and stocks
| Main | Multiple grafics were the customer can choose the different markets 
## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

Timeframes are key in the development cycle. You have limited time to code and so much to accomplish!  Look at all of your planned files and components, and all of the areas of development you are planning and give an estimate of how long each one will take to complete. It's always best to pad the time to account for the unknown, so be sure to add an additional hour or two to play it safe. As you progress, you can update the "Time Invested" column to keep track of your hours, but that number should turn into "Actual Time" by the presentation day. Also, put a winter-themed gif at the top of your readme before you pitch to show you read the instructions thoroughly.


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 1hrs| 1hrs | 1hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| Initial Clickable Model  | Incomplete
|Jan 30th| MVP | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries

Axios
React Router Dom

## Issues and Resolutions

How to render the api, how to get the data, how to code witout gettin most of the help

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
