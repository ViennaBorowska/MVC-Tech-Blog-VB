# MVC TECH BLOG

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

A tech blog website made for sharing thoughts and commenting on other posts. Users can create and delete posts, and comment on posts from others. Users can view posts without signing up/logging in, but this is required to interact with the posts.

## LANGUAGE : Javascript

## TOOLS : Express, Node, Sequelize & MySQL, Multer, Handlebars, Bcrypt

You can visit the deployed application here - https://instagrub2022.herokuapp.com/

![](/public/assets/images/instagrub-feed.png)

## FILES

- config > connection.js = Sequelize/MySql configuration.
- controllers > API routes
- db > schema.sql = file to initialise & use database.
- models > 4 x .js files = models for each table + index.js for table associations
- public - assets file containing ReadMe images. Folders for CSS & Javascript.
- seeds - 3 x seeds files + 1 index.js to seed database.
- utils - auth.js file for user validation.
- views - handlebars files for UI views
- package-lock.json - node modules tree visiblity
- package.json - node.js metadata
- README.md - project information
- server.js > starting server using Express & Sequelize

## Table of Contents

- [Installation](#installation)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Installation

To install this project, simple follow the below steps:

- Firstly, start off by cloning the repo locally.

- Next, run the below command to install all dependencies.

```
npm i
```

- Navigate to the db folder, access the MySQL CLI and run the below command to create the database

```
source schema.sql
```

- Then, back in the normal terminal, run the below command to start the app and create the tables

```
npm run start
```

- Finally, run the below command to seed the database if required (or you can start coding from scratch!)

```
npm run seed
```

## Usage

When first accessed, the homepage displays the most recent blog posts with a navigation bar with options for 'Home', 'Dashboard', 'Login' and 'Sign-Up'. Users can sign-up and log-in to create new posts and comment on posts on the homepage.

## License

https://opensource.org/licenses/MIT
This project is under the license of MIT

## Contributing

Contributions and improvements welcome. Please create a branch and push changes for review - author will handle merges. Please do not push changes directly to the main branch.

## Questions

If you have any questions about this projects, please contact me directly at viennabdev@gmail.com. You can view more of my projects at https://github.com/ViennaBorowska.

This README was compiled using my own [README generator](https://github.com/ViennaBorowska/ReadMe-Generator)
