const ex = require('express')
const path = require('path')
const app = ex()
let http = require('http')
var atob = require('atob');
// let commpress = require('compr')
const { dirname } = path
var compression = require('compression')
app.use(compression())

const appDir = dirname(require.main.filename);
console.log(appDir)
require('dotenv').config()
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
let bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
var otpGenerator = require('otp-generator')
var cookie = require('cookie')
var Cookies = require('cookies')

function secret(token) {
    var base64Url = token.split('.')[1];
    if (base64Url !== undefined) {
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);

    } else {
        return null
    }
};
var fast2sms = require('fast2sms');
var options = { API_KEY: 'hRjIFun3b4KAMciGS1e086yOD5afQEXrNxd7lqVmzokwLCvJYUWAOacku9ITfDv280so4BFSVPqMnJG3' };
let authfst='hRjIFun3b4KAMciGS1e086yOD5afQEXrNxd7lqVmzokwLCvJYUWAOacku9ITfDv280so4BFSVPqMnJG3'
fast2sms.init(options)
var unirest = require("unirest");
var fst = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");
let number1 = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/Login', (req, res) => {
    res.render('under_construction')

//  let phone = parseFloat(req.query.sv)
//  let numberUn = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
//  console.log(Object.keys(req.query).length !== 0,(req.query.forgotpass===undefined),(req.query.updated===undefined),req.query.forgotpass,'hellloooo')
//  console.log(req.query)
//
//  if (req.query.rd === 'true') {
//      jwt.verify(req.query.forgotpass, 'shhhhh', function (err, decoded) {
//          console.log(decoded.user)
//          phone = parseFloat(decoded.user.pn)
//      })
//      var token2 = jwt.sign({ n: numberUn }, 'shhhhh');
//
//      fst.query({
//          authorization: authfst,
//          route: 'dlt',
//          sender_id: 'krickG',
//          message: 145384,
//          variables_values: numberUn,
//          numbers: phone,
//          flash: "0",
//      });
//
//      fst.headers({
//          "cache-control": "no-cache"
//      });
//
//      fst.end(function (res) {
//          if (res.error) console.log(res.error);
//
//          console.log(res.body);
//      });
//      res.redirect(`/login?forgotpass=${req.query.forgotpass}&rdM=${token2}`)
//
//
//
//
//  }else if (Object.keys(req.query).length !== 0&&(req.query.forgotpass===undefined)&&(req.query.updated===undefined)) {
//      var token = jwt.sign({ n: numberUn,user:req.query }, 'shhhhh');
//      phone = parseFloat(req.query.pn)
//      fst.query({
//          authorization: authfst,
//          route: 'dlt',
//          sender_id: 'krickG',
//          message: 145384,
//          variables_values: numberUn,
//          numbers: phone,
//          flash: "0",
//      });
//
//      fst.headers({
//          "cache-control": "no-cache"
//      });
//
//      fst.end(function (res) {
//          if (res.error) console.log(res.error);
//
//          console.log(res.body);
//      });
//      res.redirect(`/login?forgotpass=${token}`)
//      
//
//  }else{
//      res.render('login')
//
//  }

})

app.get('/verify', (req, res) => {
    res.render('verif')
})
app.get('/', (req, res) => {
   //res.render('packed_food_list')
   res.render('under_construction')

})
app.get('/mail', (req, res) => {
    res.render('mail')
})

let number = number1

let all_midellare = {

    data: data

}

app.get('/signup', [all_midellare.data], (req, res) => {
    res.render('under_construction')

//    var cookies2 = new Cookies(req, res)
//    let inavlid = false
//    var cookies = cookie.parse('user');
//    console.log(cookies)
//    if (Object.keys(req.query).length !== 0) {
//
//        if (req.query.authUser) {
//
//
//            let decoded = secret(req.query.authUser)
//
//            let phone = decoded.user.phone
//            let name = `${decoded.user.name_user} ${decoded.user.lastname}`
//            let offer = decoded.offer
//            console.log(decoded, offer)
//
//            let ph1 = parseFloat(phone.split('')[0])
//            if (ph1 === 0) {
//                phone = phone.split('')
//                phone.splice(0, 1)
//                phone = phone.join('')
//            }
//            console.log(req.query)
//            if (req.query.checked !== undefined) {
//                let pass = req.query.checked
//                if (decoded.id.trim() === pass.trim()) {
//                    fst.query({
//                        authorization: authfst,
//                        route: 'dlt',
//                        sender_id: 'krickG',
//                        message: 145385,
//                        variables_values: `${name}`,
//                        numbers: phone,
//                        flash: "0",
//                    });
//
//                    fst.headers({
//                        "cache-control": "no-cache"
//                    });
//
//
//                    fst.end(function (res) {
//                        if (res.error) console.log(res.error);
//
//                        console.log(res.body);
//                    });
//                    res.redirect('/login')
//                }
//            }
//            var cookies2 = new Cookies(req, res)
//
//            var checkSign = cookies2.get('checkSign');
//            var processSign = cookies2.get('processSign');
//
//            //checkSign:  not send otp again if loaded the page , checkSign view if loaded
//            console.log(checkSign, '#########12###################22####')
//            if(checkSign===undefined){
//                var sign = cookies2.get('processSign');
//                console.log(sign)
//                if(sign===undefined){
//                    fst.query({
//                        authorization: authfst,
//                        route: 'dlt',
//                        sender_id: 'krickG',
//                        message: 145384,
//                        variables_values: decoded.id,
//                        numbers: phone,
//                        flash: "0",
//                    });
//
//                    fst.headers({
//                        "cache-control": "no-cache"
//                    });
//
//
//                    fst.end(function (resp) {
//                        if (resp.error) console.log(resp.error);
//                        console.log(resp.body);
//                if(resp.body.return){
//                }
//                    });
//                }
//            }
//            var token2 = jwt.sign({ n: number }, 'shhhhh');
//
//
//            if (req.query.rd !== undefined) {
//                var token2 = jwt.sign({ n: number }, 'shhhhh');
//                fst.query({
//                    authorization: authfst,
//                    route: 'dlt',
//                    sender_id: 'krickG',
//                    message: 145384,
//                    variables_values: decoded.id,
//                    numbers: phone,
//                    flash: "0",
//                });
//
//                fst.headers({
//                    "cache-control": "no-cache"
//                });
//
//
//                fst.end(function (res) {
//                    if (res.error) console.log(res.error);
//
//                });
//                res.redirect(`/signup?authUser=${req.query.authUser}&rdN=${token2}`)
//                return
//            }
//
//
//
//        }
//    }
//    let tok = {
//
//        com: "fortune",
//        fdInside: null,
//        group: "veg",
//        img: "../img/methiEv.jpg",
//        name: "Everest kasuri Methi 25g",
//        offer: null,
//        price: "89",
//        stock: "14",
//        unit: null,
//        unitInside: [{
//            selectedPrice: "89",
//            selectedUnit: "25g"
//        }, {
//            selectedPrice: "168",
//            selectedUnit: "50g"
//        }]
//    }
//
//
//
//    bcrypt.hash(number, 4, function (err, hash) {
//
//        if (req.query.providedOTP) {
//
//            bcrypt.compare(req.query.providedOTP, hash, function (err, result) {
//                if (result === true) {
//                    console.log(result)
//                    res.redirect(`/login?name_user=&last_user=&gmail_user=sss&password=msdhoni7&continue_verify=continue&service=for_whatsapp`)
//                } else if (result === false) {
//                    res.render('signup')
//
//                }
//            })
//        } else {
//            if (!inavlid) {
//                res.render('signup')
//
//            }
//
//        }
//
//
//    });
//
//

})


app.get('/mycart', (req, res) => {

   // res.render('ekcart')
   res.render('under_construction')




})
app.get('/events', (req, res) => {

    res.render('index')

})
app.get('/admin/:id', (req, res) => {
console.log(req.params)
    if (req.params.id === 'msdhooni7') {
        res.render('admin')

    }else{
        res.redirect('/')

    }
})
app.get('/admin', (req, res) => {

    res.redirect('/')
})
app.get('/recipes/:id', (req, res) => {
    console.log(req.params)
res.render('under_construction')
    if (req.params !== undefined) {
      //  res.render('items')

    }
})
app.get('/grocery_plan', (req, res) => {
    let plan = req.query.planconsole.log(plan)
    res.render('plans', { plan: plan })
})

let number11 = number1
app.get('/construction', (req, res) => {
    res.render('under_construction')

})
app.get('/your-account', (req, res) => {

                if (req.query.n !== undefined) {            
                    var token = jwt.sign({ a: req.query, id: number11 }, 'shhhhh');

                    res.redirect(`/your-account/editAccount?authuser=${token}`)
                    return

                    // let user = {
                    //     address_user: req.query.address,
                    //     continue_verify: "",
                    //     last_user: "",
                    //     lastname: req.query.ln,
                    //     name_user: req.query.n,
                    //     password_login: req.query.pass,
                    //     phonenum_user_acc: (2)[req.query.mail, req.query.ph[0]],
                    //     pin: req.query.pin,
                    // }
                    // let numberUn = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });

                    // var token = jwt.sign({ user: user, m: authfst, updated: req.query, id: numberUn }, 'shhhhh');
                    // console.log(req.query, ';opa')

                    // res.redirect(`/your-account/editAccount?user=${token}`)
                    // return
                }

                res.render('myaccount')
})
app.get('/your-account/editAccount', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        if (req.query.rd !== undefined) {
            if (req.query.rd === 'true') {
                console.log(req.query.user, 'kaioosssssssssssssssss')
                let numberUn = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
                var token = jwt.sign({ n: numberUn }, 'shhhhh');

                jwt.verify(req.query.user, 'shhhhh', function (err, decoded) {
                    let phone = parseFloat(decoded.updated.ph[1])
                    var cookies2 = new Cookies(req, res)

                    var processOTp = cookies2.get('processOTp2');

                    if (processOTp === undefined) {
                        fst.query({
                            authorization: authfst,
                            route: 'dlt',
                            sender_id: 'krickG',
                            message: 145384,
                            variables_values: numberUn,
                            numbers: phone,
                            flash: "0",
                        });

                        fst.headers({
                            "cache-control": "no-cache"
                        });


                        fst.end(function (res) {
                            if (res.error) console.log(res.error);

                            console.log(res.body);
                        });
                        res.setHeader('Set-Cookie', cookie.serialize('processOTp2', true, {
                            httpOnly: false,
                            maxAge: 60 * 60 * 24 * 1 // 1 week
                        }));
                    }
                })
                res.redirect(`/account/editAccount?user=${req.query.user}&rdN=${token}`)

            }
        }
    }
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
    sock.on('getCode', () => {

        io.emit('sendCode', number,authfst)
    })
    sock.on('setId', () => {
        const { v4: uuidv4 } = require('uuid');

        io.emit('getId', uuidv4())

    })
    sock.on('acceptedOr4', () => {
        io.emit('acceptedOrC')
    })
    sock.on('send_msg_adm', () => {
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145390,
            variables_values: `Hey priyangshou |(somebody is )|in the signup page|they maybe signing up|`,
            numbers: 9233054806,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('send_msg_adm2', () => {
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145390,
            variables_values: `Hey priyangshou |(somebody clicked )|the video|they maybe exploring |`,
            numbers: 9233054806,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('send_msg_adm3', () => {
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145390,
            variables_values: `Hey priyangshou |(somebody is in the cart )|lets see what happens |.........|`,
            numbers: 9233054806,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('delivered1', () => {
        io.emit('delivered')
    })
    sock.on('delivered2', () => {
        io.emit('delivered22')
    })
    sock.on('acceptedOrAdm1C', () => {
        io.emit('acceptedOrAdmC')
    })

    sock.on('test', () => {
        io.emit('testing')
    })
    sock.on('acceptedOrAdm1', () => {
        io.emit('acceptedOrAdm')
    })
    // sock.on('newOrder', () => {
    //     io.emit('msgOrder')
    // })
    sock.on('signedUp', (name,phone) => {
            fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145385,
            variables_values: name,
            numbers: phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });

    })
    sock.on('resndCart', (phone) => {
        let unique = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145384,
            variables_values: unique,
            numbers: phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });


    })
    sock.on('newOrderClient', (phone, namefull, amount, address) => {
        console.log(phone, amount, namefull)
        let unique = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145386,
            variables_values: `${namefull}|${amount}|${unique}|`,
            numbers: phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });

        io.emit('newOrderClient2', unique)
    })
    sock.on('resendOtp', (phone) => {
        let numberOtp = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true, alphabets: false });
        io.emit('#ot1200w',numberOtp)
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145384,
            variables_values: `${number11}|`,
            numbers:phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('giveNumber',()=>{
        sock.emit('send_number',number1,authfst)

    })
    sock.on('otpACC', (phone) => {
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145384,
            variables_values: `${number11}|`,
            numbers:phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('canceled_delivery', (name, phone, amount) => {
            fst.query({
                authorization: authfst,
                route: 'dlt',
                sender_id: 'krickG',
                message: 145390,
                variables_values: `${name}|(canceled by customer)|${phone}|${amount}|`,
                numbers: 9233054806,
                flash: "0",
            });
    
            fst.headers({
                "cache-control": "no-cache"
            });
    
    
            fst.end(function (res) {
                if (res.error) console.log(res.error);
    
                console.log(res.body);
            });
        })
    sock.on('sendAdmmessage', (name, phone, amount) => {
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145390,
            variables_values: `${name}|(in website)|${phone}|${amount}|`,
            numbers: 9233054806,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('deliveryOnwaySms', (name, phone, amount) => {
        //delivery in way
        console.log(name, phone, amount)
        fst.query({
            authorization: authfst,
            route: 'dlt',
            sender_id: 'krickG',
            message: 145388,
            variables_values: `${name}|${amount}|`,
            numbers: phone,
            flash: "0",
        });

        fst.headers({
            "cache-control": "no-cache"
        });


        fst.end(function (res) {
            if (res.error) console.log(res.error);

            console.log(res.body);
        });
    })
    sock.on('dTimeChanged', (data) => {
        io.emit('timeChanged',data)
    })
    sock.on('cancelOrder', () => {
        io.emit('oDcancel')
    })

})

const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log('starting on port '+port)
})

