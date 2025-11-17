const express = require('express');
const userRouter = require ('./routes/users');
const postRouter = require('./routes/posts');
const app = express(); //Calling this function sets up a server
app.set('view engine', 'ejs');
// app.use(logger);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res)=>{
    console.log('Here');
    res.render("index", 
        {user: "Anthony",});
}); //This function will run when someone when someone goes to the root folder

app.get('/new', (req, res) =>{
    res.render('users/new', {firstName: "Please enter your name"});
});


app.listen(3030);

function logger(req, res, next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}
