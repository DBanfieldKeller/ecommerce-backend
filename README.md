# ECommerce Backend

## Description
This project demonstrates a backend SQL database for a hypothetical ecommerce application. The ecommerce_db database is created with the provided schema and populated with seed index. The application makes use of sequelize to manage the SQL queries with javascript. The app is intended to be able to create, read, update, and delete data from the "category", "product", and "tag" tables.  It attempts to make use of associations between each of these tables. The app also makes use of dotenv, mysql2, and express npms.

This project is currently a work in progress and will be updated in the future. Currently, the many-to-many relationship between product and tag is not working correctly and prohibits the user from updating or creating products.

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Tests](#tests)
 - [Questions](#questions)
 ## Installation
Run db/schema.sql in mysql. You will need to provide your own .env file for the db, username, and password.  Change the database to ecommerce_db. Run the following:

npm run seed
 
 ## Usage
Once the server is running, you can use Insomnia to try the GET, PUT, POST, and DELETE http methods to alter the database.

## License
This application is not under any license.

## Contributing
Feel free to submit a pull request.

## Tests
N/A

## Questions
If you have any questions please feel free to reach out to me via email at DPAJBK@gmail.com