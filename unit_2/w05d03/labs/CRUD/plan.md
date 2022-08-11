create directory
create models and views
create server.js
install packages > npm init> npm install express, ejs, mongoose, method-override

models directory >

     create model(should include data)
     create Schema(for model existing)

Make sure everything is connected properly

        1) run nodemon in directory
            a) should listen to port
            B)should display connected to mongoDB...

        2) run mongod --dbpath (path)
        3) run mongo in directory

moving to database

    1) Make sure the database has value
        a) in mongo run [ show dbs ] to check if db was created successfully
        b) make sure the seed file has the proper structure
    2) Creating Schema for the database
        a) should match the database
        b) declare proper name for schema and export to server 

creating ejs files 
    1) Index.ejs 
        a) should include the loop through the array of objects
        b) should have proper links
        c) link the app.get to the server 
        d) post the index to server
        e) link the show page path 
    2) show.ejs 
        a) should have path declare in server
        b) get the id name using :id value to create a unique page for the specific id 
        c) should have the database importing to show ejs 
    3) creating new.ejs 
        a) should have path declare in server
        b) add path in the index.ejs 
        c) declare proper form with schema value 
        e) use .create function to create item to database 
        f) use method POST and declare it in server
    4) creating edit ejs file
            a) add the button on the index.ejs
            b) should have the values from the current id and render unique page for the edit
            c) add go back button to revert changes 
            e) use method POST to create
    5) creating the delete button 
        a) add button to each object using existing loop in index.ejs
        b) delete button does not work with method delete 
                a) method-override needs to be installed
                b) use the path with value ?=(whatever name was given to method)
                c)use the ?=()=DELETE to delete item
        c) connect everything to server with .delete function 


       