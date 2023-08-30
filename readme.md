https://www.tabnews.com.br/tiagoCali/back-end-com-typescript-para-iniciantes

install mongo on mac :

    https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

check is install sucessfully with

    - $mongod
    
and then for run 

    - $brew services run mongodb-community

<hr>

step by step:

start npm
    
    -   $npm init -y

for run a file 

    -   $node yourfile.js

install express framework node.js and install lib mongo ODM

    - $npm i mongoose
<hr>
install nodemon

    - $npm i body-parser config express nodemon    
<hr>
in package-lock.json file, insert in "scripts":

        "start": "nodemon index.js"

<hr>

install dotenv 

    -   $npm i dotenv || npm i dotenv bcryptjs jsonwebtoken


<hr>
install cors

    -   $npm i cors


<hr>

install jest for unity tests

    -   $npm i --dev jest
<hr>
in package-lock.json file, insert in "scripts":
        
        "test": "jest --testEnvironment=node --watchAll --verbose --coverage",
