# E-commerce Back End

## Description

This program will help you keep track of your online store, with categories, products, and tags.

## Install and Run

Follow this video:

[video]()

### Before you begin:

1. Make sure you have MySQL Server installed.
2. Make sure you have Insomnia installed.

### One-time Setup:

1. Clone the repository
2. From the command line, navigate to the repository directory
3. Initialize the database with:
        mysql -u root -p
4. Run:
        source db/schema.sql
5. To quit MySQL Server, Run:
        quit
6. You can seed the database with data by modifying the files in the folder `seeds`. When you're ready, run:
        node seeds
7. To use your password for MySQL Server, follow these steps:
    1. In the top level, Run: 
	        touch .env
	2. Type into the file:
	
	    `DB_NAME='ecommerce_db'`		
        `DB_USER='<USERNAME>'`		
        `DB_PW='<PASSWORD>'`
	
8. Run:
        npm init

### Running the server:

1. From the repository directory, Run:
        node server

### Using the server

The api routes are as follows:

        http://localhost:3001/api/categories
        http://localhost:3001/api/products
        http://localhost:3001/api/tags

## Credits

### Created by:
* [Ian Moses](https://github.com/Moses-Ian)

### Technologies Used:
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [console.table](https://www.npmjs.com/package/console.table)
* [mySQL2](https://www.npmjs.com/package/mysql2)

## License

Please do not copy any of my code.