# Test frontend
Melp is a business focussed on showing information about the best restaurants in the
city. They have a pretty successful mobile application and are planning to expand
their market through a web platform.
 
You are the ninja frontend developer of the company and you are asked to make a proposal for the web application.
 
You are provided with a data set with the following characteristics to complete the prototype:

 Name   | Type         | Description 
--------|--------------|------------------
Id      | alphanumeric | Unique Id of restaurant
name    | string       | Name of restaurant
contact | Object       | Contact info. Contains a website, email and phone
        | site         | string | Website of the restaurant
        | email        | string | Email
        | phone        | string | Phone number
Address | Object       | Restaurant location info
        | Street       | string | Street
        | City         | string | City
        | State        | string | State
        | Location     | Object | {lat: <number>,lng: <number>}  Latitude and longitude
rating  | number       | A number between 0 and 4
 
You can get the information from
https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json with a GET request.
Once you’ve finished, upload your project to https://pages.github.com and send us the
link to review it.
 
### Bonus 1:
Share and like buttons to facebook with the details of certain restaurant.
 
### Bonus 2:
This task consists on implementing a feature in which given a certain point in a map (You could drop a pin in a map) and a radius in meters:
 * Count of all the restaurants within the radius provided.
 * Show the average rating of restaurants inside the circle.
 * Standard deviation of rating of restaurants inside the circle
 
### Bonus 3:
Show recommendations about the nearest restaurants in the zone given a point in a map, a radius in meters and a range of rating.
 
### Bonus Points:
 * Git history
 * Visual appeal of the application
 * Responsiveness
 * Social buttons to facebook
 * Statistical data about restaurants in the area
 * Recommendations given a coordinate
 * Use of external libraries that provide a value to your development
 * Good programming practices

## Implementation
* ZURB framework 
* PUG
* Gulp.js
