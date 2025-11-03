const express = require('express');
const userRouter = require ('./routes/users');
const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');
app.use('/users', userRouter);


//MAKE YOUR OWN ROUTER FOR A FILE CALLED POSTS

app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index", {user: "Anthony"});
}); //This function will run when someone when someone goes to the root folder


app.listen(3030);

