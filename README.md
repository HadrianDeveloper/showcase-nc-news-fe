# NC News by Hadrian

This is the front end project for **NC News by Hadrian** - a social news aggregation, content rating and discussion web application. Anyone can get access to the articles and interactive tools, but users must be logged in to either like or comment on an article, or to remove one of their own existing comments.

## Technical overview
### Frontend

This application is bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and deployed on Netlify. 

### Backend

The backend project is located in my [GitHub account](https://github.com/HadrianDeveloper/NC-News), and has a PSQL database hosted on [ElephantSQL](https://www.elephantsql.com/) with APIs on [Render](www.render.com). 

The project implements the MVC framework with asynchronous code handled by Promises.  [Jest](https://jestjs.io/) used throughout the TDD as the testing framework.