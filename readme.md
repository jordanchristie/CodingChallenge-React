## Coding Challenge
###### React
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/adac75195f2a465c92137cea62a924af)](https://www.codacy.com/app/0plus1/CodingChallenge-React?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=0plus1/CodingChallenge-React&amp;utm_campaign=Badge_Grade)

This coding challenge has been created to evaluate the skills of a frontend, React developer.
Given the complete freedom on how to solve the challenge, an understanding of best practices and patterns will emerge.

### Challenge

Fork this repository and create a pull request when the challenge is complete.

The test is tiered with an increasingly difficult set of requirements. **Only the first tier is required** but solving all the tiers is encouraged.

Sourcecode must fully adhere to the [AirBnB](https://github.com/airbnb/javascript) style guide, no overridden rules.

#### Tier one.

You are given a [URL](https://my-json-server.typicode.com/0plus1/CodingChallenge-react/books) which returns the JSON defined in the db.json file at the root of this project.
Perform a GET to retrieve the data and render the result on the page however you see fit.

Bonus points are awarded for (in order of importance):

* [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
* Using a HOC as the main page layout
* Unit testing
* CSS in js
* Using [axios](https://github.com/axios/axios) for the API call

#### Tier two.

Perform the same task as above using Redux.


#### Tier three.

Using Redux and React router, create a new url (_/book/{id}_) which will render a single book view.
Link to this view in the list of books.


### Required Knowledge

* Javascript ES6
* React
* Webpack

Recommended
* Redux
* [React router](https://reacttraining.com/react-router/) 
* [Styled Components](https://github.com/styled-components/styled-components)

### Software requirements
* [YARN](https://yarnpkg.com/en/)
* [NPM](https://www.npmjs.com/get-npm)

#### Install

Clone and run:

```bash 
yarn install
yarn watch
```

Make sure everything is working, a browser window should open at the address _http://localhost:3000/_ displaying "_Welcome!_".
Double check by running the provided unit tests.

```bash
yarn test
```

## License

[MIT license](http://opensource.org/licenses/MIT).
Feel free to remix, use and contribute to this coding challenge. Just make sure to let me know in the pull request this is not from a candidate.
