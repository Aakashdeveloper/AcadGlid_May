var http = require('http');
var express = require('express');
var chalk = require('chalk');
var ejs = require('ejs');
const bodyParser = require('body-parser');
const debug = require('debug')('app')

var app = express();
var port= 5600;

var nav = [
    {link:'/',title:'Home'},
    {link:'/products',title:'Products'},
    {link:'/admin',title:'Admin'}
];

require('./src/config/passport.js')(app)

var productsRouter = require('./src/routes/ProductsRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));
app.set('views', './src/views')
app.set('view engine', 'ejs')



app.use('/products',productsRouter);
app.use('/admin', adminRouter);
app.use('/auth', authRouter)

app.get('/', function(req,res){
    res.render('index',
        {
            nav:nav,
            title:'Home Page'}
        )
})

app.listen(5600,function(err){
    console.log("server running on port "+chalk.green(port))
});


