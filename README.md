# :star: Stack file of users management - Technical test PHP Hardis Group - Main

> Status: Finished :heavy_check_mark:

> Reviewer: <https://github.com/PierreMjn>

> Assigned engineer: Pierre MIJON - Zian LI - Lindrit HISENI - Gregory :clipboard:

## :mortar_board: Summary


---



## :evergreen_tree: Tree structure

```
.backend/app
|---config/
|   |---auth.config.js
|   |---db.config.js
|
|---controller/
|   |---auth.controller.js
|   |---user.controller.js
|
|---middleware/
|   |---authJwt.js
|   |---index.js
|   |---verifySignUp.js
|
|---models/
|   |---index.js
|   |---role.model.js
|   |---user.model.js
|
|---routes/
|   |---auth.routes.js
|   |---user.routes.js
|
```

---

## :scroll: Project context

As part of the *Architecture and Software Quality* course, we have to design a fullstack school management application.

## :dart: Assigned task

In such a way, our team will focus on the user management system.

## :construction_worker: Installation

## :beginner: To begin

## :pick: Made with

* [IntelliJ](https://www.jetbrains.com/fr-fr/idea/) - code editor

# :sunglasses: Author

* **Pierre Mijon** | [@Pierre Mijon](mailto:pierre.mijon@edu.ece.fr)

* **Zian LI** | [@Zian LI](mailto:zian.li@edu.ece.fr)

* **Lindrit HISENI** | [@Lindrit HISENI](mailto:lindrit.hiseni@edu.ece.fr)

* **Gregory** | [@Gregory](mailto:pierre.mijon@edu.ece.fr)

Students at [ECE Paris](https://www.ece.fr/).

Students (In industry engineering | informatics) at [ECAM](https://www.ecam.be/).

Read the list of [contributors](https://github.com/PierreMjn/School-management/graphs/contributors) to see who helped with the project !




# config

configure MySQL database & Sequelize
configure Auth Key

# routes

auth.routes.js: POST signup & signin
user.routes.js: GET public & protected resources

# middlewares

verifySignUp.js: check duplicate Username or Email
authJwt.js: verify Token, check User roles in database

# controllers

auth.controller.js: handle signup & signin actions
user.controller.js: return public & protected content

# models for Sequelize Models

user.model.js
role.model.js

# server.js: import and initialize neccesary modules and routes, listen for connections.