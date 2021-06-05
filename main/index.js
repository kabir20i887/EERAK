const ex = require('express')
const path = require('path')
const app = ex()
let http = require('http')

const fs = require('fs')
const hbs = require('hbs')
const pathName = path.join(__dirname, '../dist')
const otherPath = path.join(__dirname, '../dist/views')
const parcialPath = path.join(__dirname, '../dist/views/parcials')
app.use(ex.static(pathName))

app.set('view engine', 'hbs')
app.set('views', otherPath)
hbs.registerPartials(parcialPath)
const parsed_data = require('body-parser')
let data = parsed_data.urlencoded({ extended: false })
let socket = require('socket.io')
let server = http.createServer(app)
const io = socket(server)
let pathTem = path.join(__dirname, '../dist/views/mail.hbs')
let bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');

var randomize = require('randomatic');

app.get('/about', (req, res) => {
    res.render('about')
})
let number1 = randomize('0', 6)

app.get('/Login', (req, res) => {
    res.render('login')

    console.log(req.query)
       if(req.query.pn){
        var token = jwt.sign({ user:req.query,num:number1 }, 'shhhhh');
        jwt.verify(req.query, 'shhhhh', function(err, decoded) {
            console.log(req.query)
        })
        res.redirect(`/login?forgotpass=${token}`)


    }

})

app.get('/verify', (req, res) => {
    res.render('verif')
})
app.get('/', (req, res) => {
    res.render('home')

})
app.get('/mail', (req, res) => {
    res.render('mail')
})

let number = randomize('0', 6)

let all_midellare = {
    checkAuth: function (req, res, next) {
        if(Object.keys(req.query).length !== 0){
        jwt.verify(req.query.authUser, 'shhhhh', function(err, decoded) {
            console.log(decoded.user.service)

        if (decoded.user.service=== 'for_whatsapp') {
            console.log(number)
          

        } else if (decoded.user.service === 'for_email') {

        }
    
    })
}
        next()

    },
    data: data

}

app.post('/signup', [all_midellare.checkAuth, all_midellare.data], (req, res) => {
    var token = jwt.sign({ user:req.body,id:number }, 'shhhhh');

    res.redirect(`/signup?authUser=${token}`)
    console.log(Object.keys(req.query).length === 0)
    bcrypt.hash(number, 4, function (err, hash) {
        console.log(number, 'hello')
        const {name_user,last_user,verfy,password,continue_verify,service} =req.query
        var salt = bcrypt.genSaltSync(5);

        
            res.render('signup')



    });

  
})
app.get('/signup', [all_midellare.checkAuth, all_midellare.data], (req, res) => {
    let tok={
        
com:"fortune",
fdInside:null,
group:"veg",
img:"../img/methiEv.jpg",
name:"Everest kasuri Methi 25g",
offer:null,
price:"89",
stock:"14",
unit:null,
unitInside:[{
selectedPrice:"89",
selectedUnit:"25g"},{
selectedPrice:"168",
selectedUnit:"50g"}]
    }
    let token1={
        cook:"../img/mCur.jpg",
        fdInside:[
        
        "spices ",
        
        "ginger and garlic paste",
        
        "marinated meat",
        
        "1 user manual"],
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpdGVtIjp7ImNvb2siOiIuLi9pbWcvYnV0dGVyQ2hpY2tlbi5qcGciLCJ0eXBlIjoibm9uLXZlZyIsInRpbWUiOiI0NSBtaW4iLCJpbWciOiIuLi9pbWcvbXV0dGVyUGFubmVyLmpwZyIsIm5hbWUiOiJNdXR0ZXIgUGFubmVyIiwib2ZmZXIiOjEyLCJpZCI6ImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUprWVhSaElqcDdJbWx0WnlJNklpNHVMMmx0Wnk5aWFYSjVZVzVwWDJsdFp5NXdibWNpTENKdVlXMWxJam9pUVd4dmJ5QlFZWEpoZEdoaE1pSXNJbkpoZEdVaU9qUXVOQ3dpY0hKcFkyVWlPaUkzT1NJc0ltTnZiMnNpT2lJdUxpOXBiV2N2WW1seWVXRnVhVjlwYldjdWNHNW5JaXdpZEhsd1pTSTZJblpsWnlJc0ltOW1abVZ5SWpvaU1UUWlMQ0ptWkVsdWMybGtaU0k2V3lKdFlYSnBibUYwWldRZ1kyaHBhMlZ1SWl3aVozSmhkbmtpTENKMWMyVnlJRzFoYm5WaGJDSmRMQ0p5WlhacFpYY2lPbHRkTENKeVlYUnBibWR6SWpwYmV5SnpkR0Z5SWpvMUxDSnlZWFJwYm1keklqb3hPWDBzZXlKemRHRnlJam8wTENKeVlYUnBibWR6SWpveE4zMHNleUp6ZEdGeUlqb3pMQ0p5WVhScGJtZHpJam80ZlN4N0luTjBZWElpT2pJc0luSmhkR2x1WjNNaU9qVjlMSHNpYzNSaGNpSTZOQ3dpY21GMGFXNW5jeUk2TTMxZGZTd2lhV0YwSWpveE5qRTNOekk0TWpFemZRLnZCb2YzdkpIblktYTlLaUQ3Sng1aUF5dTFxR0xPTDlkWVFCYUFZQmxHQ28iLCJyYXRpbmdzIjpbeyJzdGFyIjo1LCJyYXRpbmdzIjoxMH0seyJzdGFyIjo0LCJyYXRpbmdzIjo1fSx7InN0YXIiOjMsInJhdGluZ3MiOjJ9LHsic3RhciI6MiwicmF0aW5ncyI6MX0seyJzdGFyIjoxLCJyYXRpbmdzIjowfV0sInJldmlldyI6W10sInByaWNlIjoiMTY1Iiwic3RvY2siOiI4IiwiZmRJbnNpZGUiOm51bGwsInVuaXQiOm51bGx9LCJpYXQiOjE2MjAzOTYyOTV9.gubycjVXd-VUS_dx2qDEerOyro8scABFBYqNp62zEvY",
        img:"../img/mCur.jpg",
        name:"Mutter Panner",
        offer:16,
        price:"₹ 165",
        
        ratings:[
            {ratings:22,
                star:5},
            {ratings:10,
                star:4},
            {
        ratings:4,
        star:3
        },{
        ratings:1,
        star:2
        
        },{
        ratings:0,
        star:1}],
        requiredGroc:[{
        callName:"ghee",
        catId:"3",
        com:null,
        name:"ghee",
        
        },{callName:"AmulFreshCream",
        catId:"1",
        com:null,
        name:"Amul Fresh Cream"}],
        review:[],
        stock:1,
        time:"45 min",
        type:"non-veg"
        }
        
    var token2 = jwt.sign({ item:tok }, 'shhhhh');
console.log(token2)
 
    bcrypt.hash(number, 4, function (err, hash) {

        if (req.query.providedOTP) {
            console.log(req.query.providedOTP)
            bcrypt.compare(req.query.providedOTP, hash, function (err, result) {
                if (result === true) {
                    console.log(result)
                    res.redirect(`/login?name_user=&last_user=&gmail_user=sss&password=msdhoni7&continue_verify=continue&service=for_whatsapp`)
                } else if (result === false) {
                    res.render('signup', { err: 'provided OTP is  incorrect please make sure that you used the correct otp number' })

                }
            })
        } else {
            res.render('signup')

        }


    });

  

})



app.get('/mycart', (req, res) => {
    res.render('ekcart')
    let fdnamesArr = []
    let fdlst = req.query.fdlsct
    let suggestions =req.query.sgmsg
    console.log(req.query.fdlsct)
    if (fdlst !==undefined && suggestions !==undefined ) {
        console.log(fdlst.fdlsct)
        let fd =  JSON.parse(fdlst)
        fd.forEach(cur => {
        
            fdnamesArr.push(cur.fdName)
            console.log('yesss')
            let fdStr = fdnamesArr.join(',')

          
        })

    }else if(fdlst & suggestions ===undefined){
        fdnamesArr.push(cur.fdName)
        let fdStr = fdnamesArr.join(',')
  
    }

})
app.get('/events', (req, res) => {

    res.render('index')

})
app.get('/foods', (req, res) => {
    
  let obj=  {cook:"../img/biryani_img.png",
fdInside:["marinated chiken","gravy","user manual"],
img:"../img/mCur.jpg",
name:"Tajdare Royal Mutton Curry",
offer:"14",
Iup:'140',
unitInit:[{unit:'1kg',price:140},{unit:'2kg',price:269},{unit:'no chiken curry',price:null}],
price:"₹ 449",
ratings:[{ratings:19,star:5},{ratings:17,star:4},{ratings:8,star:3},{ratings:5,star:2},
{ratings:3,star:4}],
requiredGroc:[{
    callName:"madhursugar",
com:"Madhur",
img:"../img/Sugar.jpg",
name:"Sugar",
offer:"10",
price:"86",
stock:"9",
type:"veg",
untInside:[{unit:'1kg',cost:"50"},{unit:'2kg',cost:'100'}],

}],
review:[],
type:'veg'}

var token = jwt.sign({ item:obj}, 'item');
console.log(token)

 


    res.render('packed_food_list')
})
app.get('/admin', (req, res) => {
    
    res.render('admin')
})
app.get('/product', (req, res) => {
    console.log(Object.values(req.query))

     if(Object.keys(req.query).length !==0){
    res.render('items')

     } 
})
app.get('/grocery_plan', (req, res) => {
    let plan = req.query.planconsole.log(plan)
    res.render('plans', { plan: plan })
})
app.get('/essentials', (req, res) => {

    res.render('grocery')
})
let number11 = randomize('0', 6)

app.get('/account', (req, res) => {
    if(Object.keys(req.query).length !== 0){
        console.log(req.query)
        if(req.query.user!==undefined){
            jwt.verify(req.query.user, 'shhhhh', function(err, decoded) {
                if(err){
                    res.redirect('/signup')
                    return
                }
                if(req.query.n!==undefined){
                    let user={
                    address_user: req.query.address,
                    continue_verify: "",
                    last_user: "",
                    lastname: req.query.ln,
                    name_user:req.query.n,
                    password_login: req.query.pass,
                    phonenum_user_acc: (2) [req.query.mail,req.query.address.ph],
                    pin: req.query.pin,
                    }
                    // var token2 = jwt.sign({ user:user,id:number11 }, 'shhhhh');
                    var token = jwt.sign({user:user,updated:req.query,id:number11 }, 'shhhhh');
                    console.log(req.query,';opa')

                    res.redirect(`/account/editAccount?user=${token}`)
                    return
                }
         
                res.render('myaccount')

            })

        }else{
            var token = jwt.sign({ a:req.query,id:number11 }, 'shhhhh');

            res.redirect(`/account/editAccount?authuser=${token}`)
        }
                  
    }else{
        res.redirect('/signup')

    }
})
app.get('/account/editAccount', (req, res) => {
    
    res.render('myaccount')
})
app.get('/delivery', (req, res) => {
    
    res.render('deliv')
})
app.get('/account/editAccount', (req, res) => {
    
        res.render('myaccount')
})
io.on('connection', (sock) => {
    console.log('connected')
    var a = 1
    
    sock.on('setId',()=>{
        const { v4: uuidv4 } = require('uuid');

        io.emit('getId',uuidv4())
        
    })
    sock.on('newOrder',()=>{
        io.emit('msgOrder')
    })
    sock.on('cancelOrder',()=>{
        io.emit('oDcancel')
    })
    
})
const port =process.env.PORT || 3000
server.listen(port, () => {
    console.log('starting')
})
