const express = require('express');
const { Agent } = require('http');
const app = express();

var fs = require('fs');
var myCss = {
    style : fs.readFileSync('./views/css/style.css','utf8')
};


app.set('view engine', 'ejs')

app.listen(3000, ()=>{
    console.log('server listening...');
});

// for sending style sheet when called for by the html page 
// "app.render()" will only work for ejs files, not for css files 
// app.get('/css/style.css', function(req, res) {
//     res.sendFile('./views/css/style.css', {root : __dirname});
//   });

app.get('/', (req, res) => {
    res.redirect('home.html');
})

// app.get('/home.html', (req, res) => {
//     res.render('home');
// })

app.get('/home.html', function(req, res){

    let text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptatem laboriosam temporibus error distinctio in voluptatum impedit itaque similique eius nostrum quam fuga recusandae totam beatae cum ducimus earum, eligendi esse vel doloremque molestias. Hic tempore voluptates sapiente repellat laudantium minus dolorum quisquam, quidem accusantium!';

    let blogs = [
        {title : 'title 1', snippet: text},
        {title : 'title 2', snippet: text},
        {title : 'title 3', snippet: text}
    ]
    res.render('home', {
    myCss: myCss,
    blogs: blogs
   });
});


// app.get('/home.html', (req, res) => {
//     res.render('home', {
//     myCss: myCss
//    });
// });

app.get('/about.html', (req, res) => {
    res.render('about', {
    myCss: myCss
   });
});

app.get('/newBlog.html', (req, res) => {
    res.render('newBlog', {
    myCss: myCss
   });
});




// app.get('/student/Amit', (req, res) => {
//     res.render('home', {
//     myCss: myCss,
//     age: students.Amit
//    });
// });

