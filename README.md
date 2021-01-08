# Luma Developer Assessment
Welcome to the Luma Developer Assessment. Congrats on getting this far! We are looking forward to seeing and talking through your submission.

## Assignment
Create a Rest API that allows authorized requesters to perform CRUD operations on the users in the provided database. You must create endpoints with the following functionality:
- List users
- Retrieve user by id
- Create user
- Update user
- Delete user

Each endpoint has been stubbed out in [app.js](./app.js). Your objective is to finish building each of the endpoints according to the criteria in the comments. There are [26 unit tests](./app.spec.js) that will assess whether or not they are built to specification. You can receive partial credit, so please make sure you submit even if it is incomplete! If you are submitting incomplete work, comments describing your thought process are encouraged.

While developing, please use any tools that you would normally use to test your API (i.e. [Postman](https://www.postman.com/)). Before [submitting](#Submitting-The-Assessment), please look at the [criteria](#criteria) to make sure your assessment is in the best possible shape. If you have any questions or find any issues, please email [eli@lumateams.com](mailto:eli@lumateams.com).

## Getting Started
To get started, clone the repository:
```
git clone https://github.com/dovetail-ha/luma-dev-assessment.git
```
**Note: Please do not fork this repository**

To start the express server, simply install the node modules, and run `npm start`.

```
npm i
npm start
```

To run the unit tests:
```
npm test
```

## Submitting The Assessment
To submit the assessment, run the `npm run create-submission` command. You will be prompted to enter your name. After executing the command a `<YourName>-assessment.zip` file will be generated in the root directory. Upload the zipped assessment [here](https://forms.gle/JFVhQG7VYxSvSkku6).


## Criteria
You will be evaluated on the following criteria:
- **Unit Tests** - There are 26 unit tests in [app.spec.js](./app.spec.js). You will be evaluated on the percentaged of passing unit tests, and you can receive partial credit.
- **Linting** - Please make sure you follow the linting rules for the project. You can run the `npm run lint` command to check for warnings and errors.
- **Code Quality** - The quality of the code, including complexity, duplication, and maintainability will be taken into consideration.
