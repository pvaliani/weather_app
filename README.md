# Weatherly - A weather app using the Weatherbit.io API

Weatherly is a full-stack MERN app which was made in 2 days and provides current and forecasted weather information from the Weatherbit API based on searches by city, postcode or latitude and longitude.
Recent searches are saved to a MongoDB database and returned on the front end to the user. The API key is from a free account and has been included here for ease of use if cloning and running the project.

# Tools used
  - ReactJS 
  - Semantic UI
  - Node
  - MongoDB
  - Express
  - LogoMakr: https://logomakr.com/

# How to run the app
- Install dependencies in client and server folders separately with ```npm install```
- ```npm run server:dev``` within server
- ```npm run start``` within client
- ```npm run seeds``` can be used to clear the DB or run custom seeds of location data

# Main page

![image](https://user-images.githubusercontent.com/72317734/117377129-7127e980-aeca-11eb-9561-0049063e5619.png)

# Search Results

![image](https://user-images.githubusercontent.com/72317734/117377162-869d1380-aeca-11eb-89d4-165e57eb85d2.png)

![image](https://user-images.githubusercontent.com/72317734/117377183-94529900-aeca-11eb-8416-c7ec37207bf9.png)


# Areas for further development
  - Refactor all forms into a single form
  - Add further form handling to deal with city name presented without a country code
  - Add further form handling for the lat/long input
  - Include unit tests
  - Additional UX features - perhaps loading an image of the location via unsplash once that location has been searched
  - Perhaps provide the forecasting info for all searches in a dropdown menu

# Known Issues
  - Currently when a lat/lon of invalid format (i.e !! or -- ) is input, the fetch will fail and require the user to clear the DB collection with 
  ```npm run seeds``` before re-running the client 
