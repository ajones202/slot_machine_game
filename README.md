# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

|  Day | Deliverable | 
|---|---| 
|Day 1: Tue| Wireframes and Priority Matrix|
|Day 2: Wed| Project Approval /  Pseudocode / actual code|
|Day 3: Thur| Basic Clickable Model |
|Day 4: Fri| Working Prototype |
|Day 5: Sat| Final Working Project |
|Day 6: Sun| Bugs / Stylying / PostMVP |
|Day 7: Mon| Project Presentations |


## Project Description

I will have a slot machine game. On click, a lever will be pulled and the images in three columns will appear to scroll. The lever will release and the images will slowly cease scrolling. The user wins if three like images appear in a row. Depending on the value of each image, a number is added to the user's bank which will appear in the upper righthand corner of the screen

## Wireframes

http://res.cloudinary.com/dm6ofsjtd/image/upload/v1522249877/CB6C8BB0-07EB-4854-B446-ADA6E445BD58.jpg

## Priority Matrix

http://res.cloudinary.com/dm6ofsjtd/image/upload/v1522253007/D7D15B9A-E736-464D-BA57-E2A9D23AD08B.jpg

## Game Components

### Landing Page

When a player begins the game, they will see an imput field which allows them to add their name. They will also be given the option to 'insert' one of three dollar amounts ($1, $5, and $10). Depending on how much they select, they will begin with the corresponding amount of $ in their bank.

### Game Initialization
When the game is initialized, the player will be taken to a screen containing the image of the slot machine and the lever. His/her name will appear in the upper righthand corner along with their bank balance.

### Playing The Game

The user will be expected to pull the lever(click), and the images will scroll. After a certain time of scrolling, each column will stop scrolling and land on a single image along the center. Each column will stop scrolling a different time. 

### Winning The Game

Each round (spin) is one play. The play is over when the scrolling stops. If there are three images in a row, the user wins. If the three images are not alike, the user loses. 

The entire game ends when the user has exhausted his/her bank balance.

### Game Reset

A play again button will appear upon the game finishing.

## MVP 

- a successful transition to the game start
- user's name displayed next to the bank
- a clickable lever
- scrolling and stopping images
- a bank that accurately keeps the user's balance
- an input field on the landing page
- detection of a win


## POST MVP


- animated handle pull
- scroll/stop at different speeds
- a burst of icons when the user wins

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Defining variables & adding click events | A | 8hrs| 0hrs | 0hrs |
| Making the images scroll and stop | B | 5hrs| 0hrs | 0hrs |
| Setting the winning logic and the bank function | C | 7 hrs| 0hrs | 0hrs |
| Refractoring code to be more DRY | D | 5hrs| 0hrs | 0hrs |
| Creating a landing page and input field| E| 3hrs| 0hrs | 0hrs |
| Creating a winning animation, CSS and HTML | F | 8hrs| 0hrs | 0hrs |
| Total |  | 36hrs| 0hrs | 0hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
