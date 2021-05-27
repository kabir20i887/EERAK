
let val = 0
let numenator2 = 0
let a = 0
let locItm = []
let locItm2 = []
let denomenator2 = 0
let addedGroc = []
let bothHave = []
let addedGrocHalf = []
let addedGrocFull = []
let allReadyAdded = []
let sFGr = 1
let sFGr1 = 1
let addedFdEk = []
let addedFdEk1 = []
let numLen1 = 0
let denomen = 0
let numen = 0
let group = 1
let a1 = 0
let allFd3 = 0
let addedRecItm = []
let onGolen = 1
let a2 = 0
if (document.querySelector('.authInp') !== null) {
    let user = getCookie('user')
    user = JSON.parse(user)
    console.log(user)
    document.querySelector('.authInp').value = user.authUser
}
if(document.querySelector('.ct_bx_locate_bill')!==null){
    document.querySelector('.ct_bx_locate_bill').addEventListener('click',()=>{
   let y4= document.querySelector('.list_food_cart').getBoundingClientRect().height

 scrollTo(0,(y4+200))
 document.querySelector('.ct_bx_locate_bill').style.position='relative'
    })
}
if(document.querySelector('.body_cart')!==null){
    if(window.innerWidth<400){
        document.querySelector('.to_pay_cahge span c').style.fontSize='16px'
        
        document.querySelector('.ct_suggested_bx h4, .block_2_charge, .block_1_charge span').style.fontSize='12px'
       
        document.querySelector('.list_itm_sub_cart span').style.fontSize='12px'
        document.querySelectorAll('.ct_bx_all_groc_required .main_img_groc_itm').forEach(cur => {
            cur.style.minHeight='120px'
            cur.style.width='120px'
    
        })
    }
}

if (localStorage.length === 0) {
    localStorage.setItem('foodsAdded', "[]")
    localStorage.setItem('grocFoodListCart', "[]")
}
const addReccom = async (locItm1, bx, typeRecom, cId) => {
    let rG = 1
    let docLen = 0
    let html

    // if(typeRecom==='fd' &&firstRow){
    //      a2 = 1

    // }
    let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
    let lenGroup = await db.collection(`foods`).doc('sYNT0aiTqEnZ0I7IVmd7').get()
    let fdLen = lenGroup.data().name.length + 1
    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${group}`)
    let res = await dbCollection.get()

    res.docs.forEach(cur => {
        onGolen = res.docs.length
        console.log(onGolen)
        if (onGolen === 8) { onGolen = 7 }
        let itmDb = cur.data().item
        const simpleHtml = async (items, bx) => {
            if (a1 < 12) {
                let html1
                if (itmDb.id !== undefined) {
                    if (itmDb.ratings !== null) {
                        itmDb.ratings.forEach(cur => {
                            numenator1 += cur.star * cur.ratings
                            denomenator1 += cur.ratings
                        })
                        let ratedFront = parseFloat((numenator1 / denomenator1).toFixed(2).split('.')[0])

                        let ratedBack = parseFloat((numenator1 / denomenator1).toFixed(2).split('.')[1].split('')[0])
                        console.log(ratedFront, ratedBack)
                        if (ratedFront === 5) {

                            html1 = `       <span>
                                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                </span>
                        
                                <span>
                                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                </span>
                        
                                <span>
                                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                </span>
                        
                        
                                <span>
                                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                </span>
                        
                                <span>
                                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                </span>`

                        } else {
                            if (ratedFront === 4) {

                                if (ratedBack > 1) {
                                    html1 = `       <span>
                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        <span>
                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        <span>
                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        
                        <span>
                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        <span>
                        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                        </span>`
                                } else {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`

                                }
                            } else if (ratedFront === 3) {
                                if (ratedBack > 1) {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                } else {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                }
                            } else if (ratedFront === 2) {
                                if (ratedBack > 1) {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                } else {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                }
                            } else if (ratedFront === 1) {
                                if (ratedBack > 1) {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                } else {
                                    html1 = `       <span>
                                        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                                        </span>
                                        
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>
                                        
                                        <span>
                                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                                        </span>`
                                }
                            }
                        }
                    } else {
                        html1 = `      
                        <span>
                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                      
                        <span>
                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        
                        <span>
                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        
                        
                        <span>
                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                        </span>
                        
                        <span>
                        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                        </span>`
                    }
                    if (itmDb.offer !== null) {


                        if (itmDb.group === 'veg') {
                            html = `  <div class="ct_col">
                                <div class="carousel-cell fd_ek_cell_car_recom">
            
                                <div class="itm_food_list_ek added_itm_ek_fd">
                                <a href="/product?item=${itmDb.id}&qt=1&sk=${itmDb.stock}&cid=${group}">
                                <div class="ct_offer_box_cook2">
                               <span>${itmDb.offer}%</span>
                               <p> off</p>
                           </div>
                                    <div class="ct_img_res_main">
                                        <img src='${itmDb.img}'>

                                    </div>

                                    <div class="ct_dt_tm_food_res">
                                        <h4>${itmDb.name}</h4>


                                    </div>
                                    <div class="ct_bx_ratings">
                                    ${html1}
                                    </div>
                                    <div class="ct_bx_hw_cook">
                                        <a href="#">How to cook?</a>
                                    </div>
                                    <p class="price_food for_oly_ekfd_price"><span>₹ 99</span></p>
<div class='bx_flex_time_type'>
                                    <div class="ct_type_bx_item_food">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                    viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#099f49">
                                            <path
                                                d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                            </path>
                                            <path
                                                d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                        <p>veg</p>

                                    </div>
                                    <p class="sk_itm">10</p>
                                    <p class="bx_cat_item">1</p>
                                    <div class="ct_time_it_takes">
                                        <ion-icon name="alarm-outline"></ion-icon>
                                        <p>${itmDb.time}                                                </p>
                                    </div>
                                    </div>
                                </a>



                            </div>
                                </div>
                            </div>`

                        } else {
                            html = `  <div class="ct_col">
                                <div class="carousel-cell fd_ek_cell_car_recom">
            
                                <div class="itm_food_list_ek added_itm_ek_fd">
                                <a href="/product?item=${itmDb.id}&qt=1&sk=${itmDb.stock}&cid=${group}">
                                <div class="ct_offer_box_cook2">
                               <span>${itmDb.offer}%</span>
                               <p> off</p>
                           </div>
                                    <div class="ct_img_res_main">
                                        <img src='${itmDb.img}'>

                                    </div>

                                    <div class="ct_dt_tm_food_res">
                                        <h4>${itmDb.name}</h4>


                                    </div>
                                    <div class="ct_bx_ratings">
                                    ${html1}
                                    </div>
                                    <div class="ct_bx_hw_cook">
                                        <a href="#">How to cook?</a>
                                    </div>
                                    <p class="price_food for_oly_ekfd_price"><span>₹ 99</span></p>
                                    <div class='bx_flex_time_type'>

                                    <div class="ct_type_bx_item_food">
                                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />


                                        <p>non-veg</p>

                                    </div>
                                    <p class="sk_itm">10</p>
                                    <p class="bx_cat_item">1</p>
                                    <div class="ct_time_it_takes">
                                        <ion-icon name="alarm-outline"></ion-icon>
                                        <p>${itmDb.time}                                                </p>
                                    </div>
</div>
                                </a>



                            </div>
                                </div>
                            </div>`

                        }
                    } else {
                        if (itmDb.group === 'veg') {

                            html = `  <div class="ct_col">
                                <div class="carousel-cell fd_ek_cell_car_recom">
            
                                <div class="itm_food_list_ek added_itm_ek_fd">
                                <a href="/product?item=${itmDb.id}&qt=1&sk=${itmDb.stock}&cid=${group}">
                               
                                    <div class="ct_img_res_main">
                                        <img src='${itmDb.img}'>

                                    </div>

                                    <div class="ct_dt_tm_food_res">
                                        <h4>${itmDb.name}</h4>


                                    </div>
                                    <div class="ct_bx_ratings">
                                    ${html1}
                                    </div>
                                    <div class="ct_bx_hw_cook">
                                        <a href="#">How to cook?</a>
                                    </div>
                                    <p class="price_food for_oly_ekfd_price"><span>₹ 99</span></p>
                                    <div class='bx_flex_time_type'>

                                    <div class="ct_type_bx_item_food">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15"
                                    viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                        stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                        stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                        font-weight="none" font-size="none" text-anchor="none"
                                        style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#099f49">
                                            <path
                                                d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                            </path>
                                            <path
                                                d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>

                                        <p>veg</p>

                                    </div>
                                    <p class="sk_itm">10</p>
                                    <p class="bx_cat_item">1</p>
                                    <div class="ct_time_it_takes">
                                        <ion-icon name="alarm-outline"></ion-icon>
                                        <p>${itmDb.time}                                                </p>
                                    </div>
                                    </div>

                                </a>



                            </div>
                                </div>
                            </div>`
                        } else {
                            html = `  <div class="ct_col">
                                <div class="carousel-cell fd_ek_cell_car_recom">
            
                                <div class="itm_food_list_ek added_itm_ek_fd">
                                <a href="/product?item=${itmDb.id}&qt=1&sk=${itmDb.stock}&cid=${group}">
                               
                                    <div class="ct_img_res_main">
                                        <img src='${itmDb.img}'>

                                    </div>

                                    <div class="ct_dt_tm_food_res">
                                        <h4>${itmDb.name}</h4>


                                    </div>
                                    <div class="ct_bx_ratings">
                                    ${html1}
                                    </div>
                                    <div class="ct_bx_hw_cook">
                                        <a href="#">How to cook?</a>
                                    </div>
                                    <p class="price_food for_oly_ekfd_price"><span>₹ 99</span></p>
                                    <div class='bx_flex_time_type'>

                                    <div class="ct_type_bx_item_food">
                                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />


                                        <p>non-veg</p>

                                    </div>
                                    <p class="sk_itm">10</p>
                                    <p class="bx_cat_item">1</p>
                                    <div class="ct_time_it_takes">
                                        <ion-icon name="alarm-outline"></ion-icon>
                                        <p>${itmDb.time}                                                </p>
                                    </div>
</div>
                                </a>



                            </div>
                                </div>
                            </div>`
                        }
                    }
                    allFd3++
                    let row = document.querySelector(bx)

                    if (a1 === 6) {
                        if (document.querySelector('.ct_bx_recc_cart_load_full') !== null) {
                            document.querySelector('.ct_bx_recc_cart_load_full').style.display = 'none'
                        }
                    }
                    console.log(onGolen, (a2), 'jki', items)
                    if (items !== null) {
                        if (items.length === 0) {
                            a1++
                            a2++
                            row.insertAdjacentHTML('beforeend', html)
                         
                            
                            console.log(onGolen, (a2), 'jki')

                            if (onGolen === (a2)) {
                                rG++
                                a2 = 1
                                group++
                                addReccom(locItm1, bx, typeRecom, cId)
                            }
                        } else {
                            console.log(itmDb.name, fdLen, (a2 + 1))
                            if (!items.includes(itmDb.name.split(' ').join('').toLowerCase().trim())) {
                                a1++
                                a2++

                                row.insertAdjacentHTML('beforeend', html)
                                console.log(onGolen, (a2), 'jki')

                                if (onGolen === (a2)) {
                                    rG++
                                    a2 = 1
                                    group++
                                    addReccom(locItm1, bx, typeRecom, cId)
                                }
                            }
                        }

                    } else {
                        a1++
                        a2++
                        console.log(onGolen, (a2), 'jki')

                        row.insertAdjacentHTML('beforeend', html)
                        if (onGolen === (a2)) {
                            rG++
                            a2 = 1
                            group++
                            addReccom(locItm1, bx, typeRecom, cId)
                        }

                    }
                }


            }
        }
        if (allfd !== null && typeRecom === 'cart' || typeRecom === 'fd') {
            if (typeRecom === 'cart') {

                let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
                let allFoods = []
                allfd.forEach(cur => {
                    allFoods.push(cur.data.item.name.split(' ').join('').toLowerCase())
                })

                simpleHtml(allFoods, '.inner_slide')
            } else {
                document.querySelector('.ct_remcombx_pf_ct .loader_cart').style.display = 'none'
                if (document.querySelector('.erak_fd_body') !== null) {
                    let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
                    let jwt = parseJwt(token)
                    let name = jwt.item.name.split(' ').join('').toLowerCase()
                    simpleHtml([name], '.inner_slide')
                } else {
                    simpleHtml([], '.inner_slide')
                }


            }

        } else {


            simpleHtml(null, '.inner_slide')
        }



    })



}
if (window.location.pathname === '/') {
    addReccom([], '.ct_slider_inner', 'fd', 1)

}
if (document.querySelector('.for_seravh_in_nav input') !== null) {
    document.querySelectorAll('.for_seravh_in_nav input').forEach(cur => {
        cur.addEventListener('input', () => {
            if (cur.value === '') {
                document.querySelectorAll('.xclose_icon').forEach(cur => {
                    cur.style.display = 'none'
                })
            } else {
                document.querySelectorAll('.xclose_icon').forEach(cur => {
                    cur.style.display = 'flex'
                })
            }
        })
    })
}

if (document.querySelector('.erak_fd_body')) {
    if (window.location.search !== '') {
        let search = window.location.search.split('?')[1].split('=')
        if (search[0] === 'logout') {
            let jwt = parseJwt(search[1])
            if (jwt !== null) {
                if (jwt.user !== undefined) {
                    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
                        window.location.replace('/foods')

                    }
                    document.querySelector('.ct_bx_messgae').style.display = 'block'
                    setTimeout(() => {
                        document.querySelector('.ct_bx_messgae').style.display = 'none'

                    }, 5000);
                }
            }
        }
    }
}
let parsedData = false

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
let search = window.location.search
if (window.innerWidth <= 600 && window.innerWidth > 500) {

    document.querySelectorAll('.ct_itm_food_cart h4').forEach(cur => {
        cur.style.fontSize = '16px'
    })
    if (document.querySelector('.ct_bx_ratings_info a span .not_filed_rating_itm, .ct_bx_ratings span .not_filed_rating_itm') !== null) {
        document.querySelectorAll('.ct_bx_ratings_info a span .not_filed_rating_itm, .ct_bx_ratings span .not_filed_rating_itm').forEach(cur => {
            cur.style.fontSize = '17px'
        })
    }
    document.querySelectorAll('.flex_bx_cart_itm ').forEach(cur => {
        cur.style.marginLeft = '60px'
    })
    document.querySelectorAll('.ct_bx_ratings_info a span .filed_rating_itm, .ct_bx_ratings span .filed_rating_itm').forEach(cur => { cur.style.fontSize = '17px' })
    //gr

    document.querySelectorAll('.ct_filed_selct_qt_un').forEach(cur => { cur.style.width = '330px' })

}

let aOrders = JSON.parse(localStorage.getItem('orders'))
if (document.querySelector('.body_cart')) {

    if (aOrders !== null) {

        document.querySelector('.check_bx_if_view').style.display = 'none'

        // document.querySelector('.ct_verif_bx').style.display = 'none'
    }
    if (window.innerWidth <= 600) {

        document.querySelectorAll('.ct_loading_bx2 .ct_for_img_load, .ct_loading_bx .ct_for_img_load').forEach(cur => {
            cur.style.width = '445px'
        })

    }
}






let elemRem = document.querySelector('.ct_bx_show_out_of_stk.for_stock_err button')
let elemPop = document.querySelector('.ct_bx_remove_popup_itm')

if (elemRem !== null) {
    elemRem.addEventListener('click', () => {

        document.querySelectorAll('.ct_bx_show_out_of_stk').forEach(cur => {
            cur.style.display = 'none'
        })
    })
}
if (elemPop !== null) {
    elemPop.addEventListener('click', () => {

        document.querySelectorAll('.ct_bx_show_out_of_stk').forEach(cur => {
            cur.style.display = 'none'
        })
    })
}
if (window.innerWidth < 470) {
    if (document.querySelector('.hiden_update2') !== null) {
        document.querySelector('.hiden_update2').style.paddingLeft = '10vw'

    }
    if (document.querySelector('.ct_recipe_download') !== null) {
        document.querySelector('.ct_recipe_download').style.margin = '30px 0 0 -310px'

    }
}
if (document.querySelector('.ct_remove_err2') !== null) {
    document.querySelector('.ct_remove_err2').addEventListener('click', () => {
        if (window.innerWidth <= 1200) {
            let floatX = -(window.innerWidth + 100)

            $('.ct_error_stock.for_items').animate({ left: floatX })

        } else {
            $('.ct_error_stock.for_items').css('display', 'none')

        }
    })

}

if (window.innerWidth < 470) {
    if (document.querySelector('.body_cart') !== null) {

    }




    if (document.querySelector('.for_acc_dt') !== null) {

        document.querySelector('.groc_btn_order').style.width = '160px'

        document.querySelector('.groc_btn_order').style.transform = 'translate(174px,30px)'

        document.querySelector('.ct_bx_no_order_yet').style.transform = 'translate(-10px)'

        document.querySelector('.fd_btn_order').style.width = '140px'
    }

}

if (window.innerWidth < 500) {

  
    if (document.querySelector('.body_cart') !== null) {


        document.querySelectorAll('.for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '180%'
        })
        document.querySelectorAll('.ct_bx_grocery_required  .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '100%'
        })
        // document.querySelectorAll('.for_nav_main ul .nav_main_ek_li').forEach(cur => {
        //     cur.style.margin = '2px 20px 0 -34px'
        // })
    }
    if (document.querySelector('.for_main_nav_login') !== null) {
        document.querySelector('.for_main_nav_login').style.marginTop = '5px'

    }


    if (document.querySelector('.body_cart') !== null) {
        if (document.querySelector('.for_ek_cartNav .for_main_nav_login') !== null) {
            document.querySelector('.for_ek_cartNav .for_main_nav_login').style.marginTop = '25px'
        }


        document.querySelector('.ct_bx_buttons_actions button').style.width = '16%'


    }
    if (document.querySelector('.pincode label') !== null) {

    }



}
if (window.innerWidth < 450) {


    document.querySelectorAll('.for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
        cur.style.width = '240%'
    })

    document.querySelectorAll('.itm_food_list_ek .ct_img_res_main .main_img_groc_itm').forEach(cur => {
        cur.style.width = '50%'
    })

    document.querySelectorAll('.for_groc_itm .relative_width1').forEach(cur => {
        cur.style.width = '33%'
    })


}
if (window.innerWidth <= 360) {
    document.querySelectorAll('.ct_for_price_load').forEach(cur => {
        cur.style.width = '70px'
    })

    document.querySelectorAll('.ct_loading_bx2').forEach(cur => {
        cur.style.width = '80%'
        cur.style.height = '161px'

    })
    document.querySelectorAll('.cart_nav p').forEach(cur => {
        cur.style.display = 'none'
    })
    document.querySelectorAll('.for_nav_main ul .nav_main_ek_li').forEach(cur => {
        cur.style.right = '-40px'
    })
    document.querySelectorAll('.ct_for_time_load').forEach(cur => {
        cur.style.width = '100px'
        cur.style.height = '19px'

    })
    document.querySelectorAll('.ct_loading_bx .ct_for_p_load').forEach(cur => {
        cur.style.width = '120px'
        cur.style.height = '19px'

    })
}
if (window.innerWidth <= 450) {
    if (document.querySelectorAll('.for_load_bx_grid_inner') !== null) {
        if (document.querySelectorAll('.for_ek_foods_load') !== null) {
            document.querySelectorAll('.for_ek_foods_load').forEach(cur => {
                cur.style.margin = '-80px 0  100px -100px'

            })
        }





    }
    if (document.querySelector('.ct_bx_select_qt_final .relative_width1') !== null) {
        document.querySelector('.ct_bx_select_qt_final .relative_width1').style.width = '24%'


  

        document.querySelector('.forward_acc').style.width = 'translate(250px,-80px)'

        document.querySelector('.ct_bx_buttons_actions').style.width = '90%'

        document.querySelector('.ct_bx_serached_itm').style.width = '90%'
        document.querySelector('.ct_bx_serached_itm').style.transform = 'translate(20px,-17px)'
    
        document.querySelector('.for_nav_main .acc_set_main_nav').style.transform = 'translate(-60px,0px)'

    }
    if (document.querySelector('.for_login_only_cart') !== null) {
        document.querySelector('.for_login_only_cart').style.width = '36%'

        document.querySelector('.btn_sign_up_cart').style.width = '36%'
        document.querySelector('.for_login_only_cart').style.padding = '5px 6px 5px 23px'

        document.querySelector('.to_pay_cahge1').classList.add('to_pay_cahge2')
        document.querySelector('.to_pay_cahge1').classList.remove('to_pay_cahge1')
        document.querySelector('.btn_sign_up_cart').style.padding = '5px 6px 5px 23px'

        document.querySelectorAll('.ct_loading_bx').forEach(cur => {
            cur.style.marginLeft = '34px'
        })
    }

}
if (window.innerWidth < 400&&window.innerWidth>360) {
    document.querySelectorAll('.for_load_bx_grid_inner').forEach(cur => {
        cur.style.margin = '-20px 0 0 56px'

        document.querySelector('.for_ek_foods_load').style.width = 'transform: translate(-140px)'

    })
    if (document.querySelector('.body_cart') !== null) {
        document.querySelectorAll('.ct_bx_grocery_required .for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '91%'
        })

        document.querySelectorAll('.list_itm_sub_cart span').forEach(cur => {
            cur.style.margin = '0px 0 0 200px'
        })
        document.querySelector('.for_signup_only_cart').style.width = '40%'

        document.querySelector('.ct_ct_text_about_acc a').style.width = '45%'

        document.querySelectorAll('.only_for_grocery_item li .ct_bx_quant_itm_cart').forEach(cur => {
            cur.style.width = '24%'
        })


    }

}
if (window.innerWidth < 360) {
    if (document.querySelector('.ct_img_res_main img') !== null) {
        document.querySelectorAll('.ct_img_res_main img').forEach(cur => {
            cur.style.width = '180%'
        })



  
        if(document.querySelector('.ct_bx_side_rt_revies')!==null){
        document.querySelector('.ct_bx_side_rt_revies').style.transform = 'translate(-20px,0px)'


        document.querySelector('.back_acc').style.transform = 'translate(10px,-105px)'

        document.querySelector('.inner_slide').style.transform = 'translate(-10px,80px)'

        document.querySelector('.forward_acc').style.transform = 'translate(250px,-0px)'


        document.querySelectorAll('.ct_for_img_load').forEach(cur => {
            cur.style.marginLeft = '10px'
        })
    }
    }
}
$(document).ready(() => {
    if (document.querySelector('.ct_bx_acct_cart') !== null) {
        document.querySelector('.ct_bx_acct_cart').addEventListener('click', () => {
            if (JSON.parse(localStorage.getItem('orders')) !== null) {
                $('.for_active_order').animate({ right: "20px" })
            }
        })
    }
    if (document.querySelector('.ct_reome_pop_up') !== null) {
        document.querySelectorAll('.ct_reome_pop_up').forEach(cur=>{
cur.addEventListener('click', () => {

    $('.ct_bx_show_out_of_stk.for_stock_err').animate({ right: '-530px' })
})
        })
    }
    $(".check-icon").hide();
    setTimeout(function () {
        $(".check-icon").show();
    }, 1000);
    //   });

    $('html').click((e) => {
        let bx2 = e.target.closest('.ct_slide_menu_acc')
        let bx = e.target.closest('.ct_field_small_size')
        if (bx2 !== null) {
            if ($('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').hasClass('nottog')) {
                $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').addClass('tog')
                $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').removeClass('nottog')
                $('.ct_list_all_side_nav_acc').animate({ left: 0 }, 600)

            } else {
                $('.ct_list_all_side_nav_acc').animate({ left: '-260px' }, 600)

                $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').removeClass('tog')
                $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').addClass('nottog')
            }


        } else {
            $('.ct_list_all_side_nav_acc').animate({ left: '-260px' }, 600)
            $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').removeClass('tog')
            $('.ct_list_all_side_nav_acc .ct_bx_side_adm_user').addClass('nottog')
        }
        if (bx !== null) {
            $('.ct_bx_slide_bx').animate({ left: 0 }, 600)
            $('.ct_bx_slide_bx .for_ain_home_logo').css('transform', 'translate(60px)')
            $('.ct_bx_ov_lay').css('display', 'block')
        } else {
            let scale = (window.innerWidth / 2)
            $('.ct_bx_slide_bx').animate({ left: -(scale + 100) }, 600)
            $('.ct_bx_ov_lay').css('display', 'none')

            $('.ct_bx_slide_bx .for_ain_home_logo').css('transform', 'translate(-160px)')
        }
    })
    let ListCookies = {};

    const cb = document.getElementsByName('service');
    const bx_inp = document.querySelectorAll('.ct_itm_service')
    cb.forEach(cur => {
        bx_inp.forEach(elem => {
            elem.addEventListener('click', (e) => {
                console.log(e.target.closest('.ct_itm_service').childNodes[1].checked)
                if (e.target.closest('.ct_itm_service').childNodes[1].checked) {
                    $('.cont_btn_acc').css('background-image', 'linear-gradient(to right,rgb(49, 172, 243),rgba(23, 183, 246, 0.856))')
                    $('.cont_btn_acc').css('pointer-events', 'auto')
                    ListCookies.service = e.target.closest('.ct_itm_service').childNodes[1].value
                    $('.other_way_of_acc').css('display', 'none')
                } else {
                    $('.cont_btn_acc').css('background-image', 'linear-gradient(to right, rgb(152, 243, 255) 20%,rgb(160, 231, 253))')
                    $('.cont_btn_acc').css('pointer-events', 'none')
                    $('.other_way_of_acc').css('display', 'block')

                }
            })

        })
    })



    $('.ct_bx_show_password ').click((e) => {
        $('.ct_bx_show_password').css('display', 'none')
        $('.ct_nhide_pass').css('display', 'block')
        console.log(e.target.closest('.ct_bx_show_password').parentElement.childNodes[3].tagName)
        if (e.target.closest('.ct_bx_show_password').parentElement.childNodes[1].tagName === 'INPUT') {
            e.target.closest('.ct_bx_show_password').parentElement.childNodes[1].type = 'password'

        } else {
            e.target.closest('.ct_bx_show_password').parentElement.childNodes[3].type = 'password'

        }
        // $('.gt_first_nam_second_name input[type=password]').type='text'
    })
    $('.ct_nhide_pass').click((e) => {
        $('.ct_bx_show_password').css('display', 'block ')
        $('.ct_nhide_pass').css('display', 'none')
        if (e.target.closest('.ct_nhide_pass').parentElement.childNodes[1].tagName === 'INPUT') {
            e.target.closest('.ct_nhide_pass').parentElement.childNodes[1].type = 'text'

        } else {
            e.target.closest('.ct_nhide_pass').parentElement.childNodes[3].type = 'text'

        }
        // $('.gt_first_nam_second_name input[type=password]').type='text'
    })
    document.querySelectorAll('.itm_cart_cat').forEach(cur => {
        cur.addEventListener('click', (e => {
            let ifHasnotAc = cur.classList.value.split(' ')[1]
            if (ifHasnotAc === 'not_active_cart_cat') {
                document.querySelector('.active_cart_cat').classList.add('not_active_cart_cat')
                document.querySelector('.active_cart_cat').classList.remove('active_cart_cat')
                cur.classList.add('active_cart_cat')
                cur.classList.remove('not_active_cart_cat')
                let html;
                let allfd = JSON.parse(localStorage.getItem('foodListCart'))
                if (allfd !== null) {
                    if (e.target.innerText === "Erak's food") {
                        allfd.forEach(cur => {
                            const { fdName, cost, offPercent, qtfd, fd_typ, number_of_itm, group, qtCt } = cur
                            if (group === 'erakFood') {
                                if (fd_typ === 'svg') {

                                    html = `
           <li>
               <input type="checkbox">
                
               <div class="ct_itm_food_cart">
                   <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23"
                       viewBox="0 0 172 172" style=" fill:#000000;">
                       <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                           stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                           stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                           text-anchor="none" style="mix-blend-mode: normal">
                           <path d="M0,172v-172h172v172z" fill="none"></path>
                           <g fill="#099f49">
                               <path
                                   d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                               </path>
                               <path
                                   d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                               </path>
                           </g>
                       </g>
                   </svg>


                   <img class="main_cart_img" src="../img/im24.jpg" alt="">
                   <h4>${fdName}</h4>
                   <div class="if_has_other_qt_itm">
                       <span>
                       ${qtCt}
                       </span>
                   </div>

               </div>

               <div class="ct_inp_qt">
                   <ion-icon name="remove-outline"></ion-icon>
                   <input type="text" class="str_to_num" value=${qtfd}>
                   <ion-icon name="add-outline"></ion-icon>

               </div>

               <p class="price_am_cart_fd"> del${cost}</p>

           </li>`
                                }
                                else if (fd_typ === 'IMG') {

                                    html = `
                       <li>
                           <input type="checkbox">
                        
                           <div class="ct_itm_food_cart">
                         
                       <img class='img_icon_non_veg'
                       src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
       
                               <img class="main_cart_img" src="../img/im24.jpg" alt="">
                               <h4>${fdName}</h4>
                               <div class="if_has_other_qt_itm">
                                   <span>
                                   ${qtCt}
                                   </span>
                               </div>
       
                           </div>
       
                           <div class="ct_inp_qt">
                               <ion-icon name="remove-outline"></ion-icon>
                               <input type="text" class="str_to_num" value=${qtfd}>
                               <ion-icon name="add-outline"></ion-icon>
       
                           </div>
       
                           <p class="price_am_cart_fd"> ${cost}</p>
       
                       </li>`
                                }


                                $('.bx_evt_cart_item').addClass('animate_left_cartUl')
                                setTimeout(() => {
                                    $('.bx_evt_cart_item').css('display', 'none')
                                    $('.erakFd').css('display', 'block')
                                    $('.erakFd').addClass('animate_right_cartUl')
                                    $('.erakFd').removeClass('animate_left_cartUl')
                                }, 1000)
                                document.querySelector('.erakFd').insertAdjacentHTML('afterbegin', html)
                            }
                        })

                    } else if (e.target.innerText === 'Events') {
                        let allfd = JSON.parse(localStorage.getItem('foodListCart'))
                        allfd.forEach(cur => {
                            const { fdName, cost, offPercent, qtfd, fd_typ, number_of_itm, group, qtCt } = cur
                            if (group === 'eventFd') {

                                if (fd_typ === 'svg') {

                                    html = `
               <li>
                   <input type="checkbox">
                 
                   <div class="ct_itm_food_cart">
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23"
                           viewBox="0 0 172 172" style=" fill:#000000;">
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                               stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray=""
                               stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none"
                               text-anchor="none" style="mix-blend-mode: normal">
                               <path d="M0,172v-172h172v172z" fill="none"></path>
                               <g fill="#099f49">
                                   <path
                                       d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                   </path>
                                   <path
                                       d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                   </path>
                               </g>
                           </g>
                       </svg>


                       <img class="main_cart_img" src="../img/im24.jpg" alt="">
                       <h4>${fdName}</h4>
                       <div class="if_has_other_qt_itm">
                           <span>
                           ${qtCt}
                           </span>
                       </div>

                   </div>

                   <div class="ct_inp_qt">
                       <ion-icon name="remove-outline"></ion-icon>
                       <input type="text" class="str_to_num" value=${qtfd}>
                       <ion-icon name="add-outline"></ion-icon>

                   </div>

                   <p class="price_am_cart_fd"> ${cost}</p>

               </li>`
                                }
                                else if (fd_typ === 'IMG') {

                                    html = `
                           <li>
                               <input type="checkbox">
                             
                               <div class="ct_itm_food_cart">
                             
                           <img class='img_icon_non_veg'
                           src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
           
                                   <img class="main_cart_img" src="../img/im24.jpg" alt="">
                                   <h4>${fdName}</h4>
                                   <div class="if_has_other_qt_itm">
                                       <span>
                                       ${qtCt}
                                       </span>
                                   </div>
           
                               </div>
           
                               <div class="ct_inp_qt">
                                   <ion-icon name="remove-outline"></ion-icon>
                                   <input type="text" class="str_to_num" value=${qtfd}>
                                   <ion-icon name="add-outline"></ion-icon>
           
                               </div>
           
                               <p class="price_am_cart_fd"> ${cost}</p>
           
                           </li>`
                                }

                                $('.erakFd').addClass('animate_left_cartUl')
                                $('.erakFd').removeClass('animate_right_cartUl')


                                setTimeout(() => {
                                    $('.erakFd').css('display', 'none')
                                    $('.bx_evt_cart_item').css('display', 'block')
                                    $('.bx_evt_cart_item').removeClass('animate_left_cartUl')

                                    $('.bx_evt_cart_item').addClass('animate_right_cartUl')
                                }, 1000)
                                document.querySelector('.bx_evt_cart_item').insertAdjacentHTML('afterbegin', html)
                            }

                        })
                        console.log(document.querySelectorAll('.bx_evt_cart_item li').length)

                        if (document.querySelectorAll('.bx_evt_cart_item li').length === 0) {

                        }
                    }
                }
            }
        }))
    })
    $('.ek_cart').waypoint(function (direction) {

        if (direction === 'down') {
            if (window.innerWidth <= 500) {

                $('.ct_bx_locate_bill').css('position', 'fixed')
            }
        } else if (direction === 'up') {
            if (window.innerWidth <= 500) {

                $('.ct_bx_locate_bill').css('position', 'relative')

            }
        }
    }, {
        offset: '20%'
    })
    $('.ct_subotatal').waypoint(function (direction) {

        if (direction === 'down') {
            if (window.innerWidth < 500) {

                $('.ct_bx_locate_bill').css('position', 'relative')
            }
        } else if (direction === 'up') {
            if (window.innerWidth < 500) {

                $('.ct_bx_locate_bill').css('position', 'fixed')

            }
        }
    }, {
        offset: '80%'
    })
    $('.recomended_cart').waypoint(function (direction) {

        if (direction === 'down') {
            if (window.innerWidth > 1000 && window.innerWidth !== 1000) {

                $('.ct_bx_img_itm').css('position', 'absolute')
            }
        } else if (direction === 'up') {
            if (window.innerWidth > 1000 && window.innerWidth !== 1000) {

                $('.ct_bx_img_itm').css('position', 'fixed')

            }
        }
    }, {
        offset: '80%'
    })

    if (window.innerWidth > 800) {
        $('#ek_res_ev').waypoint(function (direction) {

            if (direction === 'down') {
                $('.ct_ct_cate_lis_ev').css('position', 'fixed')
                $('.ct_ct_cate_lis_ev').css('top', '86px')

                $('.ct_nav_erak  .mai_ul').css('position', 'fixed')
                $('.ct_nav_erak  .mai_ul').css('top', '0')
                $('.for_mobile_search').css('position', 'fixed')

            } else if (direction === 'up') {
                $('.ct_ct_cate_lis_ev').css('position', 'absolute')
                function myFunction(x) {
                    if (x.matches) {
                        $('.ct_ct_cate_lis_ev').css('top', '346px')



                    } else {
                        $('.ct_ct_cate_lis_ev').css('top', ' 439px')

                    }
                }

                var x = window.matchMedia("(max-width: 768px)")
                myFunction(x)
                x.addEventListener('change', myFunction)
                $('.ct_nav_erak  .mai_ul').css('position', 'absolute')
                $('.ct_nav_erak  .mai_ul').css('top', '0')
                $('.for_mobile_search').css('position', 'absolute')

            }
        }, {
            offset: '20%'
        })
    }



    let val = 0
    const addGroc = (name, priceDel, price, com, type) => {
        if (priceDel !== null) {
            if (com === null) {

                if (type === 'veg') {
                    html = `   <li>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>
    
            <div class="dt_itm_res_cart">
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span><del>${priceDel}</del>${price}</span>
        </div>
        </li>`
                } else {
                    html = `   <li>

         <img src="https://img.icons8.com/color/15/000000/non-vegetarian-food-symbol.png" />

            <div class="dt_itm_res_cart">
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span><del>${priceDel}</del>${price}</span>
        </div>
        </li>`
                }
            } else {
                if (type === 'veg') {
                    html = `   <li>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>
    
            <div class="dt_itm_res_cart">
            <h5>${com}</h5>
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span><del>${priceDel}</del>${price}</span>
        </div>
        </li>`
                } else {
                    html = `   <li>

             <img src="https://img.icons8.com/color/15/000000/non-vegetarian-food-symbol.png" />

    
            <div class="dt_itm_res_cart">
                <h5>${com}</h5>
                <h4>${checkChar(name, 14)}</h4>
    
                <p>
                    1
                </p>
                <span><del>${priceDel}</del>${price}</span>
            </div>
        </li>`
                }
            }
        } else {
            if (com === null) {

                if (type === 'veg') {
                    html = `   <li>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>
    
            <div class="dt_itm_res_cart">
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span>${price}</span>
        </div>
        </li>`
                } else {
                    html = `   <li>

         <img src="https://img.icons8.com/color/15/000000/non-vegetarian-food-symbol.png" />

            <div class="dt_itm_res_cart">
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span>${price}</span>
        </div>
        </li>`
                }
            } else {
                if (type === 'veg') {
                    html = `   <li>

            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>
    
            <div class="dt_itm_res_cart">
            <h5>${com}</h5>
            <h4>${checkChar(name, 14)}</h4>

            <p>
                1
            </p>
            <span>${price}</span>
        </div>
        </li>`
                } else {
                    html = `   <li>

             <img src="https://img.icons8.com/color/15/000000/non-vegetarian-food-symbol.png" />

    
            <div class="dt_itm_res_cart">
                <h5>${com}</h5>
                <h4>${checkChar(name, 14)}</h4>
    
                <p>
                    1
                </p>
                <span>${price}</span>
            </div>
        </li>`
                }
            }
        }
        let totCost = []

        let allFd = JSON.parse(localStorage.getItem('grocFoodListCart'))

        allFd.forEach(cur => {
            console.log(cur, cur.price)
            let pr = parseFloat(cur.price.split('₹')[1])
            totCost.push(pr)

        })
        let totalamount = 0
        console.log(totCost)
        totCost.forEach(cur => {
            totalamount = totalamount + cur
        })
        val++

    }

    const addedRecGroc = async () => {

        if (document.querySelector('.ct_bx_all_groc_required') !== null) {

            document.querySelector('.ct_bx_all_groc_required').addEventListener('click', async (e) => {


                let elem = e.target.closest('.itm_food_list_ek')
                if (elem !== null) {
                    let qtfood = elem.classList.value.split(' ').includes('added_itm_ek_fd')
                    if (!qtfood) {
                        document.querySelector('.for_ek_groc_cart').style.display = 'none'

                        document.querySelectorAll('.ct_bx_diff_group ul li').forEach(cur => {
                            cur.classList.remove('active_gp_bx')
                            cur.classList.add('unactive_gp_bx')

                        })
                        let itm = JSON.parse(localStorage.getItem('grocFoodListCart'))
                        if (itm !== null) {

                            if (itm.length === 0) {
                                document.querySelector('.for_groc_cart_load').style.display = 'none'

                                document.querySelector('.for_ek_groc_cart').style.display = 'none'
                            }
                        }
                        document.querySelector('.for_req_groc_btn').classList.remove('unactive_gp_bx')
                        document.querySelector('.for_req_groc_btn').classList.add('active_gp_bx')
                        document.querySelector('.only_for_grocery_item').style.display = 'block'
                        document.querySelector('.bx_evt_cart_item').style.display = 'none'
                        document.querySelector('.for_groc_cart_load').style.display = 'block'
                        console.log(elem.childNodes)
                        if (elem.childNodes[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                            let off = elem.childNodes[1].innerText
                            let innerUnit = []
                            console.log(elem.childNodes)
                            let id = elem.childNodes[5].innerText
                            let priceDel = elem.childNodes[13].childNodes[0].innerText
                            let catId
                            let img = elem.childNodes[3].childNodes[1].src
                            if (elem.childNodes[15].classList.value === 'catId_groc') {
                                catId = elem.childNodes[15].innerText

                            } else {
                                catId = elem.childNodes[17].innerText

                            }
                            let stk
                            if (elem.childNodes[15].classList.value === 'stk_groc') {
                                stk = elem.childNodes[15].innerText

                            } else {
                                stk = elem.childNodes[17].innerText

                            }

                            let price = elem.childNodes[13].childNodes[1].innerText
                            let qt = 1
                            let typfd = elem.childNodes[7].childNodes[1].tagName.toLowerCase()
                            let type
                            if (typfd === 'img') {
                                type = 'non-veg'
                            } else if (typfd === 'svg') {
                                type = 'veg'

                            }
                            let unit
                            let selectedUnit
                            let selectedPrice
                            if (elem.childNodes[11].childNodes[3] !== undefined) {
                                elem.childNodes[11].childNodes[3].childNodes.forEach(cur => {
                                    if (cur.tagName === 'LI') {
                                        let unitPair = {
                                            unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                                        }
                                        innerUnit.push(unitPair)

                                    }
                                })
                                elem.childNodes[7].childNodes[1].childNodes.forEach(cur => {

                                    if (cur.tagName === 'LI') {
                                        console.log(cur)

                                        innerFood.push(cur.innerText)

                                    }
                                })
                                selectedUnit = elem.childNodes[11].childNodes[1].childNodes[1].innerText
                                selectedPrice = elem.childNodes[11].childNodes[1].childNodes[3].innerText
                                unit = null


                            } else {
                                unit = elem.childNodes[11].innerText
                                selectedPrice = null
                                selectedUnit = null
                                innerUnit = null
                                price = elem.childNodes[13].childNodes[1].innerText
                                priceDel = elem.childNodes[13].childNodes[0].innerText

                            }
                            let name
                            let com
                            if (elem.childNodes[9].childNodes[3] !== undefined) {
                                com = elem.childNodes[9].childNodes[1].innerText

                                name = elem.childNodes[9].childNodes[3].innerText

                            } else {

                                name = elem.childNodes[9].childNodes[1].innerText

                            }
                            if (com !== undefined) {
                                com = com
                            } else {
                                com = null
                            }

                            if (priceDel !== undefined) {
                                priceDel = parseFloat(priceDel.split('₹')[1].split(',').join('')) * qt

                            }
                            price = parseFloat(price.split('₹')[1].split(',').join('')) * qt
                            let pSaved = priceDel - price
                            priceDel = "₹" + priceDel.toLocaleString()

                            price = "₹" + price.toLocaleString()
                            let html
                            let stockGroc = 0
                            console.log(catId)
                            let dbCollection2 = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${catId}`)
                            let res = await dbCollection2.get()
                            document.querySelector('.for_groc_cart_load').style.display = 'none'

                            console.log(res)
                            for (let i1 = 0; i1 < res.docs.length; i1++) {
                                let cur = res.docs[i1]
                                let itemDb = cur.data().item
                                console.log(itemDb.name.split(' ').join(''), name.split(' ').join(''))
                                let namefooodDb2 = itemDb.name.toLowerCase().split(' ').join('').trim()
                                let namefoood2 = name.toLowerCase().split(' ').join('').trim()
                                let com1 = com
                                if (itemDb.com !== null && itemDb.com !== undefined && com1 !== null && com1 !== undefined) {

                                    let comFd = com1.toLowerCase().split(' ').join('').trim()
                                    let com3 = itemDb.com.toLowerCase().split(' ').join('').trim()

                                    if (namefooodDb2 === namefoood2 && com3 === comFd) {
                                        stockGroc = itemDb.stock
                                        break
                                    }

                                } else {
                                    console.log(namefooodDb2, namefoood2, 'checked')
                                    console.log(itemDb.stock, 'stock')
                                    if (namefooodDb2 === namefoood2) {
                                        stockGroc = itemDb.stock

                                        break
                                    }
                                }


                            }
                            if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                localStorage.setItem('grocFoodListCart', JSON.stringify([{
                                    name: name, catId: catId, id: id, img: img, price: price, priceDel: priceDel, off: off, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit
                                }]))

                            } else {
                                let FdLst;
                                FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                FdLst.push({
                                    name: name, catId: catId, id: id, img: img, price: price, priceDel: priceDel, off: off, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit


                                })
                                localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                            }

                            if (off !== undefined) {
                                if (com !== null) {

                                    if (selectedUnit !== null) {
                                        const setInFood = innerUnit.map((cur) => {
                                            let fdH = `  <li>
                                                    <p>${cur.unit}</p>
                                                <span>${cur.price}</span>
                                                    </li>
                                                        `
                                            return fdH
                                        })
                                        if (type === 'veg') {

                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name">${com}</span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit"></span>
  
             <div class="ct_filed_selct_qt_un">
                 <div class="ct_set_qt_for_groc">
                     <div class="field_bx_qt">
                     <p>${selectedUnit}</p>
                     <span> ${selectedPrice}</span>

                     </div>
                     <ul class='not_tog_dpd'>
                     ${setInFood.join('')}

                     </ul>

                 </div>
                 <div class="ct_bx_drop">
                     <ion-icon name="chevron-down-outline"></ion-icon>
                 </div>
             </div>

           
                 
             </div>
             <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
  
                  <span class='id_groc'>${id}</span>
  
          <span class="saved_am">You saves  ₹ ${pSaved}</span>
          
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                        } else {
                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name">${com}</span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit"></span>
                                            
                                                       <div class="ct_filed_selct_qt_un">
                                                           <div class="ct_set_qt_for_groc">
                                                               <div class="field_bx_qt">
                                                               <p>${selectedUnit}</p>
                                                               <span> ${selectedPrice}</span>
                                          
                                                               </div>
                                                               <ul class='not_tog_dpd'>
                                                               ${setInFood.join('')}
                                          
                                                               </ul>
                                          
                                                           </div>
                                                           <div class="ct_bx_drop">
                                                               <ion-icon name="chevron-down-outline"></ion-icon>
                                                           </div>
                                                       </div>
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
                                            
                                                            <span class='id_groc'>${id}</span>
                                            
                                                            <span class="saved_am">You saves  ₹ ${pSaved}</span>
                                                    
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                        }
                                    } else {
                                        if (type === 'veg') {

                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name">${com}</span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit">${unit}</span>
  
             

           
                 
             </div>
             <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
  
                  <span class='id_groc'>${id}</span>
  
          <span class="saved_am">You saves  ₹ ${pSaved}</span>
          
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                        } else {
                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name">${com}</span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit">${unit}</span>
                                            
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
                                            
                                                            <span class='id_groc'>${id}</span>
                                            
                                                            <span class="saved_am">You saves  ₹ ${pSaved}</span>
                                                    
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                        }
                                    }
                                } else {
                                    if (selectedUnit !== null) {
                                        const setInFood = innerUnit.map((cur) => {
                                            let fdH = `  <li>
                                                    <p>${cur.unit}</p>
                                                <span>${cur.price}</span>
                                                    </li>
                                                        `
                                            return fdH
                                        })
                                        if (type === 'veg') {

                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name"></span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit"></span>
  
             <div class="ct_filed_selct_qt_un">
                 <div class="ct_set_qt_for_groc">
                     <div class="field_bx_qt">
                     <p>${selectedUnit}</p>
                     <span> ${selectedPrice}</span>

                     </div>
                     <ul class='not_tog_dpd'>
                     ${setInFood.join('')}

                     </ul>

                 </div>
                 <div class="ct_bx_drop">
                     <ion-icon name="chevron-down-outline"></ion-icon>
                 </div>
             </div>

           
                 
             </div>
             <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
  
                  <span class='id_groc'>${id}</span>
  
          <span class="saved_am">You saves  ₹ ${pSaved}</span>
          
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                        } else {
                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name"></span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit"></span>
                                            
                                                       <div class="ct_filed_selct_qt_un">
                                                           <div class="ct_set_qt_for_groc">
                                                               <div class="field_bx_qt">
                                                               <p>${selectedUnit}</p>
                                                               <span> ${selectedPrice}</span>
                                          
                                                               </div>
                                                               <ul class='not_tog_dpd'>
                                                               ${setInFood.join('')}
                                          
                                                               </ul>
                                          
                                                           </div>
                                                           <div class="ct_bx_drop">
                                                               <ion-icon name="chevron-down-outline"></ion-icon>
                                                           </div>
                                                       </div>
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del> ${priceDel}</del> <span> ${price}</span> </p>
                                            
                                                            <span class='id_groc'>${id}</span>
                                            
                                                            <span class="saved_am">You saves  ₹ ${pSaved}</span>
                                                    
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                        }
                                    } else {
                                        if (type === 'veg') {

                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name"></span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit">${unit}</span>
  
             

           
                 
             </div>
             <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
  
                  <span class='id_groc'>${id}</span>
  
          <span class="saved_am">You saves  ₹ ${pSaved}</span>
          
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                        } else {
                                            html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                <span class="com_name"></span>
                                                <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit">${unit}</span>
                                            
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del>${priceDel}</del> <span> ${price}</span> </p>
                                            
                                                            <span class='id_groc'>${id}</span>
                                            
                                                            <span class="saved_am">You saves  ₹ ${pSaved}</span>
                                                    
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                        }
                                    }
                                }
                            }



                            document.querySelector('.only_for_grocery_item').insertAdjacentHTML('beforeend', html)
                            if (window.innerWidth < 470) {

                                document.querySelectorAll('.ct_filed_selct_qt_un').forEach(cur => {
                                    cur.style.transform = 'translate(-60px,-10px)'
                                })


                                document.querySelectorAll('.ct_bx_related_itm_dt_cart2').forEach(cur => {
                                    cur.style.display = 'block'
                                })

                                document.querySelectorAll('.groc_bx .ct_oferr').forEach(cur => {
                                    cur.style.transform = 'translate(-60px,-5px)'
                                })

                            }
                            if (window.innerWidth < 400&&window.innerWidth>360) {
                                document.querySelectorAll('.only_for_grocery_item li .ct_bx_quant_itm_cart').forEach(cur => {
                                    cur.style.width = '24%'
                                })
                                document.querySelectorAll('.groc_bx .ct_oferr').forEach(cur => {
                                    cur.style.width = '280%'
                                })
                            }
                            elem.classList.add('added_itm_ek_fd')

                        } else {

                            let innerUnit = []
                            console.log(elem.childNodes[11].childNodes)
                            let id = elem.childNodes[5].innerText
                            let catId
                            let img = elem.childNodes[1].childNodes[1].src
                            if (elem.childNodes[13].classList.value === 'catId_groc') {
                                catId = elem.childNodes[13].innerText

                            } else {
                                catId = elem.childNodes[15].innerText

                            }
                            let stk
                            if (elem.childNodes[13].classList.value === 'stk_groc') {
                                stk = elem.childNodes[13].innerText

                            } else {
                                stk = elem.childNodes[15].innerText

                            }

                            let price = elem.childNodes[11].childNodes[0].innerText
                            let qt = 1
                            let typfd = elem.childNodes[5].childNodes[1].tagName.toLowerCase()
                            let type
                            if (typfd === 'img') {
                                type = 'non-veg'
                            } else if (typfd === 'svg') {
                                type = 'veg'

                            }
                            let unit
                            let selectedUnit
                            let selectedPrice
                            console.log(elem.childNodes[9].childNodes)
                            if (elem.childNodes[9].childNodes[5] !== undefined) {
                                elem.childNodes[9].childNodes[5].childNodes.forEach(cur => {
                                    if (cur.tagName === 'LI') {
                                        let unitPair = {
                                            unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                                        }
                                        innerUnit.push(unitPair)

                                    }
                                })

                                selectedUnit = elem.childNodes[9].childNodes[1].childNodes[1].innerText
                                selectedPrice = elem.childNodes[9].childNodes[1].childNodes[3].innerText
                                unit = null


                            } else {
                                unit = elem.childNodes[9].innerText
                                selectedPrice = null
                                selectedUnit = null
                                innerUnit = null
                                price = elem.childNodes[11].childNodes[0].innerText

                            }
                            let name
                            let com
                            console.log(elem.childNodes[7].childNodes)
                            if (elem.childNodes[7].childNodes[2] !== undefined) {
                                com = elem.childNodes[7].childNodes[0].innerText

                                name = elem.childNodes[7].childNodes[2].innerText

                            } else {

                                name = elem.childNodes[7].childNodes[1].innerText

                            }
                            if (com !== undefined) {
                                com = com
                            } else {
                                com = null
                            }

                            price = parseFloat(price.split('₹')[1].split(',').join('')) * qt

                            price = "₹" + price.toLocaleString()
                            let html
                            let stockGroc = 0
                            console.log(catId)
                            let dbCollection2 = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${catId}`)
                            let res = await dbCollection2.get()
                            document.querySelector('.for_groc_cart_load').style.display = 'none'

                            console.log(res)
                            for (let i1 = 0; i1 < res.docs.length; i1++) {
                                let cur = res.docs[i1]
                                let itemDb = cur.data().item
                                console.log(itemDb.name.split(' ').join(''), name.split(' ').join(''))
                                let namefooodDb2 = itemDb.name.toLowerCase().split(' ').join('').trim()
                                let namefoood2 = name.toLowerCase().split(' ').join('').trim()
                                let com1 = com
                                if (itemDb.com !== null && itemDb.com !== undefined && com1 !== null && com1 !== undefined) {

                                    let comFd = com1.toLowerCase().split(' ').join('').trim()
                                    let com3 = itemDb.com.toLowerCase().split(' ').join('').trim()

                                    if (namefooodDb2 === namefoood2 && com3 === comFd) {
                                        stockGroc = itemDb.stock
                                        break
                                    }

                                } else {
                                    console.log(namefooodDb2, namefoood2, 'checked')
                                    console.log(itemDb.stock, 'stock')
                                    if (namefooodDb2 === namefoood2) {
                                        stockGroc = itemDb.stock

                                        break
                                    }
                                }


                            }
                            if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                localStorage.setItem('grocFoodListCart', JSON.stringify([{
                                    name: name, catId: catId, id: id, img: img, price: price, off: null, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit
                                }]))

                            } else {
                                let FdLst;
                                FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                FdLst.push({
                                    name: name, catId: catId, id: id, img: img, price: price, off: null, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit


                                })
                                localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                            }
                            console.log(selectedUnit, com)
                            if (com !== null) {

                                if (selectedUnit !== null) {
                                    const setInFood = innerUnit.map((cur) => {
                                        let fdH = `  <li>
                                                    <p>${cur.unit}</p>
                                                <span>${cur.price}</span>
                                                    </li>
                                                        `
                                        return fdH
                                    })
                                    console.log(setInFood)
                                    if (type === 'veg') {

                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name">${com}</span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit"></span>
  
             <div class="ct_filed_selct_qt_un">
                 <div class="ct_set_qt_for_groc">
                     <div class="field_bx_qt">
                     <p>${selectedUnit}</p>
                     <span> ${selectedPrice}</span>

                     </div>
                     <ul class='not_tog_dpd'>
                     ${setInFood.join('')}

                     </ul>

                 </div>
                 <div class="ct_bx_drop">
                     <ion-icon name="chevron-down-outline"></ion-icon>
                 </div>
             </div>

           
                 
             </div>
             <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
                  <span class='id_groc'>${id}</span>
  
          <span class="saved_am"></span>
          
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                    } else {
                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name">${com}</span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit"></span>
                                            
                                                       <div class="ct_filed_selct_qt_un">
                                                           <div class="ct_set_qt_for_groc">
                                                               <div class="field_bx_qt">
                                                               <p>${selectedUnit}</p>
                                                               <span> ${selectedPrice}</span>
                                          
                                                               </div>
                                                               <ul class='not_tog_dpd'>
                                                               ${setInFood.join('')}
                                          
                                                               </ul>
                                          
                                                           </div>
                                                           <div class="ct_bx_drop">
                                                               <ion-icon name="chevron-down-outline"></ion-icon>
                                                           </div>
                                                       </div>
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
                                                       <span class='id_groc'>${id}</span>
                                       
                                               <span class="saved_am"></span>
                                               
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                    }
                                } else {
                                    if (type === 'veg') {

                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name">${com}</span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit">${unit}</span>
  
             

           
                 
             </div>
             <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
             <span class='id_groc'>${id}</span>

     <span class="saved_am"></span>
     
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                    } else {
                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name">${com}</span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit">${unit}</span>
                                            
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
                                                       <span class='id_groc'>${id}</span>
                                          
                                               <span class="saved_am"></span>
                                               
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                    }
                                }
                            } else {
                                if (selectedUnit !== null) {
                                    const setInFood = innerUnit.map((cur) => {
                                        let fdH = `  <li>
                                                    <p>${cur.unit}</p>
                                                <span>${cur.price}</span>
                                                    </li>
                                                        `
                                        return fdH
                                    })
                                    if (type === 'veg') {

                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name"></span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit"></span>
  
             <div class="ct_filed_selct_qt_un">
                 <div class="ct_set_qt_for_groc">
                     <div class="field_bx_qt">
                     <p>${selectedUnit}</p>
                     <span> ${selectedPrice}</span>

                     </div>
                     <ul class='not_tog_dpd'>
                     ${setInFood.join('')}

                     </ul>

                 </div>
                 <div class="ct_bx_drop">
                     <ion-icon name="chevron-down-outline"></ion-icon>
                 </div>
             </div>

           
                 
             </div>
             <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
             <span class='id_groc'>${id}</span>

     <span class="saved_am"></span>
     
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                    } else {
                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                    <span class="com_name"></span>
                                                       <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit"></span>
                                            
                                                       <div class="ct_filed_selct_qt_un">
                                                           <div class="ct_set_qt_for_groc">
                                                               <div class="field_bx_qt">
                                                               <p>${selectedUnit}</p>
                                                               <span> ${selectedPrice}</span>
                                          
                                                               </div>
                                                               <ul class='not_tog_dpd'>
                                                               ${setInFood.join('')}
                                          
                                                               </ul>
                                          
                                                           </div>
                                                           <div class="ct_bx_drop">
                                                               <ion-icon name="chevron-down-outline"></ion-icon>
                                                           </div>
                                                       </div>
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
             <span class='id_groc'>${id}</span>

     <span class="saved_am"></span>
     
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                    }
                                } else {
                                    if (type === 'veg') {

                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

  <div class="ct_itm_food_cart">
  
      <div class="ct_type_fd_cart_itm"> 
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                                                        height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                            stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                            stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                            font-weight="none" font-size="none" text-anchor="none"
                                                            style="mix-blend-mode: normal">
                                                            <path d="M0,172v-172h172v172z" fill="none"></path>
                                                            <g fill="#099f49">
                                                                <path
                                                                    d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                </path>
                                                                <path
                                                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>
      </div>
      <img class="main_cart_img2" src=${img}>
      <div class="ct_bx_quant_itm_cart">
  
          <div class="for_cart_qt">
  
              <div class="bx_rem_field_qt_num bx_op">
  
                  <ion-icon class="remove_field_num md hydrated" name="remove"
                      role="img" aria-label="remove"></ion-icon>
              </div>
              <input '' type="text" value=1>
              <div class="bx_ad_field_qt_num bx_op">
                  <ion-icon class="add_field_num md hydrated" name="add"
                      role="img" aria-label="add"></ion-icon>
  
              </div>
  
          </div>
      </div>
      <div class="ct_bx_food_groc_casrt">
          <span class="com_name"></span>
             <h4>${name}</h4>
       
             <div class="ct_bx_related_itm_dt_cart2">
             <span class="unit">${unit}</span>
  
             

           
                 
             </div>
             <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
             <span class='id_groc'>${id}</span>

     <span class="saved_am"></span>
     
  
         
  
      </div>
  
  
  
  </div>
  
  <p class="stk_groc_cart">${stockGroc}</p>
  
  
  
  
  
  <div class="ct_bx_act_cart_itm">
  
  
      <div class="remove_fd_itm_ct">
          <ion-icon name="trash-outline" role="img" class="md hydrated"
              aria-label="trash outline"></ion-icon>
      </div>
  </div>
  
  </li>`

                                    } else {
                                        html = `       <li class="main_li_cart_fd_lis groc_bx">

                                            <div class="ct_itm_food_cart">
                                            
                                                <div class="ct_type_fd_cart_itm"> 
                                                <img
                                                src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
        
                                                </div>
                                                <img class="main_cart_img2" src=${img}>
                                                <div class="ct_bx_quant_itm_cart">
                                            
                                                    <div class="for_cart_qt">
                                            
                                                        <div class="bx_rem_field_qt_num bx_op">
                                            
                                                            <ion-icon class="remove_field_num md hydrated" name="remove"
                                                                role="img" aria-label="remove"></ion-icon>
                                                        </div>
                                                        <input '' type="text" value=1>
                                                        <div class="bx_ad_field_qt_num bx_op">
                                                            <ion-icon class="add_field_num md hydrated" name="add"
                                                                role="img" aria-label="add"></ion-icon>
                                            
                                                        </div>
                                            
                                                    </div>
                                                </div>
                                                <div class="ct_bx_food_groc_casrt">
                                                <span class="com_name"></span>
                                                <h4>${name}</h4>
                                                 
                                                       <div class="ct_bx_related_itm_dt_cart2">
                                                       <span class="unit">${unit}</span>
                                            
                                          
                                                     
                                                           
                                                       </div>
                                                       <p class="price_am_cart_fd2"><del></del> <span> ${price}</span> </p>
  
                                                       <span class='id_groc'>${id}</span>
                                          
                                               <span class="saved_am"></span>
                                               
                                            
                                                   
                                            
                                                </div>
                                            
                                            
                                            
                                            </div>
                                            
                                            <p class="stk_groc_cart">${stockGroc}</p>
                                            
                                            
                                            
                                            
                                            
                                            <div class="ct_bx_act_cart_itm">
                                            
                                            
                                                <div class="remove_fd_itm_ct">
                                                    <ion-icon name="trash-outline" role="img" class="md hydrated"
                                                        aria-label="trash outline"></ion-icon>
                                                </div>
                                            </div>
                                            
                                            </li>`

                                    }
                                }
                            }

                            console.log(html)
                            document.querySelector('.only_for_grocery_item').insertAdjacentHTML('beforeend', html)
                            if (window.innerWidth < 470) {

                                document.querySelectorAll('.ct_filed_selct_qt_un').forEach(cur => {
                                    cur.style.transform = 'translate(-60px,-10px)'
                                })



                                document.querySelectorAll('.ct_bx_related_itm_dt_cart2').forEach(cur => {
                                    cur.style.display = 'block'
                                })

                                document.querySelectorAll('.groc_bx .ct_oferr').forEach(cur => {
                                    cur.style.transform = 'translate(-60px,-5px)'
                                })

                            }
                            if (window.innerWidth <= 450) {
                                document.querySelectorAll('.only_for_grocery_item li .ct_bx_quant_itm_cart').forEach(cur => {
                                    cur.style.width = '20%'
                                })
                            }
                            if (window.innerWidth < 400&&window.innerWidth>360) {
                                document.querySelectorAll('.only_for_grocery_item li .ct_bx_quant_itm_cart').forEach(cur => {
                                    cur.style.width = '24%'
                                })
                                document.querySelectorAll('.groc_bx .ct_oferr').forEach(cur => {
                                    cur.style.width = '280%'

                                })
                            }
                            elem.classList.add('added_itm_ek_fd')
                        }
                    }

                }


            })
        }
    }

    addedRecGroc()
    document.querySelector('html').addEventListener('click', (e) => {
        let nthTimes = 0
        let elemFd = e.target.closest('.itm_food_list_ek')
        if (elemFd !== null) {
            let qtfood = elemFd.classList.value.split(' ').includes('added_itm_ek_fd')
            if (!qtfood) {
                if (JSON.parse(localStorage.getItem('foodListCart')) !== null) {

                    let allfd = JSON.parse(localStorage.getItem('foodListCart'))
                    if (allfd !== null) {
                        allfd.forEach(cur => {
                            if (cur.group === 'erakFood') {
                                nthTimes++

                            } else if (cur.group === 'eventFd') {

                                times_evt++


                            }
                        })
                    }
                }
                let user = getCookie('user')
                if (user !== '') {
                    user = JSON.parse(user)
                } else { user = null }
                let existOrder = JSON.parse(localStorage.getItem('orders'))
                if (existOrder !== null) {
                    $('.ct_error_stock').css('display', 'block')
                    $('.ct_error_stock').animate({ left: '20px' })
                    document.querySelector('.ct_error_stock p').innerText = 'We found an active order on your account ,please click the new order or cancel button of cart to add this item to cart. '
                    setTimeout(() => {
                        let floatX = -(window.innerWidth + 100)

                        $('.ct_error_stock').animate({ left: floatX })

                    }, 5000)

                    return
                }
                if (user === null) {

                    window.location.replace('/signup')
                    return

                }
                if (elemFd.classList.value.split(' ').includes('for_groc_itm')) {
                    if (document.querySelector('.for_ek_cart_groc') !== null) {
                        document.querySelector('.for_ek_cart_groc').style.display = 'none'

                    }

                    if (elemFd.parentElement.classList.value.split(' ').includes('ct_cat_by_list')) {
                        if (elemFd.childNodes[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                            let elem = elemFd.childNodes[3].childNodes[7]
                            let off = elemFd.childNodes[1].innerText
                            let innerUnit = []
                            elemFd.childNodes[3].childNodes[5].classList.remove('not_for_ek_pk_fd')
                            elemFd.childNodes[3].childNodes[5].classList.add('tog_for_ek_pk_fd')

                            let id = elemFd.childNodes[3].childNodes[3].innerText
                            let priceDel = elem.childNodes[7].childNodes[0].innerText
                            let img = elemFd.childNodes[3].childNodes[1].childNodes[1].src
                            let catId = elem.childNodes[11].innerText

                            let price = elem.childNodes[7].childNodes[1].innerText
                            let qt = 1
                            let typfd = elem.childNodes[1].childNodes[1].tagName.toLowerCase()
                            let type
                            if (typfd === 'img') {
                                type = 'non-veg'
                            } else if (typfd === 'svg') {
                                type = 'veg'

                            }
                            let unit
                            let selectedUnit
                            let selectedPrice
                            if (elem.childNodes[5].childNodes[7] !== undefined) {
                                elem.childNodes[5].childNodes[7].childNodes.forEach(cur => {
                                    if (cur.tagName === 'LI') {
                                        let unitPair = {
                                            unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                                        }
                                        innerUnit.push(unitPair)

                                    }
                                })
                                elem.childNodes[5].childNodes[1].childNodes.forEach(cur => {

                                    if (cur.tagName === 'LI') {
                                        console.log(cur)

                                        innerFood.push(cur.innerText)

                                    }
                                })
                                selectedUnit = elem.childNodes[5].childNodes[1].childNodes[1].innerText
                                selectedPrice = elem.childNodes[5].childNodes[1].childNodes[3].innerText
                                unit = null


                            } else {
                                unit = elem.childNodes[5].innerText
                                selectedPrice = null
                                selectedUnit = null
                                innerUnit = null
                                price = elem.childNodes[7].childNodes[1].innerText
                                priceDel = elem.childNodes[7].childNodes[0].innerText

                            }
                            let name
                            let com
                            if (elem.childNodes[3].childNodes[3] !== undefined) {
                                com = elem.childNodes[3].childNodes[1].innerText

                                name = elem.childNodes[3].childNodes[3].innerText

                            } else {

                                name = elem.childNodes[3].childNodes[1].innerText

                            }
                            if (com !== undefined) {
                                com = com
                            } else {
                                com = null
                            }









                            if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                localStorage.setItem('grocFoodListCart', JSON.stringify([{
                                    name: `${name}`, id: id, catId: catId, img: img, price: price, priceDel: priceDel, off: off, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit
                                }]))

                            } else {
                                let FdLst;
                                FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                FdLst.push({
                                    name: `${name}`, id: id, catId: catId, img: img, price: price, priceDel: priceDel, off: off, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit


                                })
                                localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                            }
                            addGroc(name, priceDel, price, com, type)



                        } else {
                            // let elem=elemFd.childNodes[1].childNodes[7]
                            // console.log( elemFd.childNodes[1].childNodes,)

                            // let id = elemFd.childNodes[4].innerText

                            // let innerUnit = []
                            // let price = elem.childNodes[7].childNodes[0].innerText
                            // let qt = 1
                            // let typfd = elemFd.childNodes[8].childNodes[1].tagName.toLowerCase()
                            // let type
                            // let img = elemFd.childNodes[2].childNodes[1].src
                            // let catId = elemFd.childNodes[18].innerText

                            // if (typfd === 'img') {
                            //     type = 'non-veg'
                            // } else if (typfd === 'svg') {
                            //     type = 'veg'

                            // }
                            // elemFd.childNodes[6].classList.remove('not_for_ek_pk_fd')
                            // elemFd.childNodes[6].classList.add('tog_for_ek_pk_fd')
                            // let unit
                            // let selectedUnit
                            // let selectedPrice
                            // if (elemFd.childNodes[12].childNodes[3] !== undefined) {
                            //     elemFd.childNodes[12].childNodes[3].childNodes.forEach(cur => {
                            //         if (cur.tagName === 'LI') {
                            //             let unitPair = {
                            //                 unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                            //             }
                            //             innerUnit.push(unitPair)

                            //         }
                            //     })
                            //     elemFd.childNodes[12].childNodes[1].childNodes.forEach(cur => {

                            //         if (cur.tagName === 'LI') {
                            //             console.log(cur)

                            //             innerFood.push(cur.innerText)

                            //         }
                            //     })
                            //     selectedUnit = elemFd.childNodes[12].childNodes[1].childNodes[1].innerText
                            //     selectedPrice = elemFd.childNodes[12].childNodes[1].childNodes[3].innerText
                            //     unit = null

                            // } else {
                            //     unit = elemFd.childNodes[12].innerText
                            //     selectedPrice = null
                            //     selectedUnit = null
                            //     innerUnit = null
                            //     price = elemFd.childNodes[14].childNodes[0].innerText

                            // }
                            // let name
                            // let com
                            // if (elemFd.childNodes[10].childNodes[3] !== undefined) {
                            //     com = elemFd.childNodes[10].childNodes[1].innerText

                            //     name = elemFd.childNodes[10].childNodes[3].innerText

                            // } else {

                            //     name = elemFd.childNodes[10].childNodes[1].innerText

                            // }
                            // if (com !== undefined) {
                            //     console.log(name, com)
                            // } else {
                            //     com = null
                            // }
                            let elem = elemFd.childNodes[1].childNodes[7]
                            let innerUnit = []
                            elemFd.childNodes[1].childNodes[5].classList.remove('not_for_ek_pk_fd')
                            elemFd.childNodes[1].childNodes[5].classList.add('tog_for_ek_pk_fd')

                            let id = elemFd.childNodes[1].childNodes[3].innerText
                            let img = elemFd.childNodes[1].childNodes[1].childNodes[1].src
                            let catId = elem.childNodes[11].innerText
                            let price = elem.childNodes[7].childNodes[0].innerText
                            let qt = 1
                            let typfd = elem.childNodes[1].childNodes[1].tagName.toLowerCase()
                            let type
                            if (typfd === 'img') {
                                type = 'non-veg'
                            } else if (typfd === 'svg') {
                                type = 'veg'

                            }
                            let unit
                            let selectedUnit
                            let selectedPrice
                            console.log(elem.childNodes, 'losi')
                            // return
                            if (elem.childNodes[5].classList.value !== 'unit') {
                                if (elem.childNodes[5].childNodes[3].classList.value === 'not_tog_dpd') {
                                    elem.childNodes[5].childNodes[3].childNodes.forEach(cur => {
                                        if (cur.tagName === 'LI') {
                                            let unitPair = {
                                                unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                                            }
                                            innerUnit.push(unitPair)

                                        }
                                    })

                                    selectedUnit = elem.childNodes[5].childNodes[1].childNodes[1].innerText
                                    selectedPrice = elem.childNodes[5].childNodes[1].childNodes[3].innerText
                                    unit = null


                                } else if (elem.childNodes[5].childNodes[7].classList.value === 'not_tog_dpd') {
                                    elem.childNodes[5].childNodes[7].childNodes.forEach(cur => {
                                        if (cur.tagName === 'LI') {
                                            let unitPair = {
                                                unit: cur.childNodes[1].innerText, price: cur.childNodes[3].innerText
                                            }
                                            innerUnit.push(unitPair)

                                        }
                                    })
                                    selectedUnit = elem.childNodes[5].childNodes[1].childNodes[1].innerText
                                    selectedPrice = elem.childNodes[5].childNodes[1].childNodes[3].innerText
                                    unit = null
                                } else {
                                    unit = elem.childNodes[5].innerText
                                    selectedPrice = null
                                    selectedUnit = null
                                    innerUnit = null
                                    price = elem.childNodes[7].childNodes[0].innerText

                                }
                            } else {
                                unit = elem.childNodes[5].innerText
                                selectedPrice = null
                                selectedUnit = null
                                innerUnit = null
                                price = elem.childNodes[7].childNodes[0].innerText
                            }
                            console.log(innerUnit)
                            let name
                            let com
                            if (elem.childNodes[3].childNodes[3] !== undefined) {
                                com = elem.childNodes[3].childNodes[1].innerText

                                name = elem.childNodes[3].childNodes[3].innerText

                            } else {

                                name = elem.childNodes[3].childNodes[1].innerText

                            }
                            if (com !== undefined) {
                                com = com
                            } else {
                                com = null
                            }

                            console.log(unit, name, com, type, price, selectedUnit, selectedPrice)








                            if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                localStorage.setItem('grocFoodListCart', JSON.stringify([{
                                    name: `${name}`, id: id, catId: catId, img: img, price: price, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit
                                }]))

                            } else {
                                let FdLst;
                                FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                FdLst.push({
                                    name: `${name}`, id: id, catId: catId, img: img, price: price, unit: `${unit}`, com: com, type: `${type}`, qt: `${qt}`, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                                    innerUnit: innerUnit


                                })
                                localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                            }
                            addGroc(name, null, price, com, type)



                        }
                    }


                }



            }
            elemFd.classList.add('added_itm_ek_fd')
        }
    })


    function setWithExpiry(key, value, ttl) {
        var now = new Date()
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
        }
        console.log(item)
        localStorage.setItem(key, JSON.stringify(item))
    }
    function getWithExpiry(key) {
        const itemStr = localStorage.getItem(key)

        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }

        const item = JSON.parse(itemStr)
        const now = new Date()

        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            console.log('removed')

            localStorage.removeItem(key)
            return null
        }
        return item.value
    }
    let totCost2 = []
    let totalamount2 = 0
    document.querySelectorAll('.ct_bx_diff_group ul li').forEach(cur => {
        cur.addEventListener('click', () => {
            if (cur.childNodes[1].innerText === 'Required grocery') {
                document.querySelectorAll('.ct_bx_diff_group ul li').forEach(cur => {
                    cur.classList.remove('active_gp_bx')
                    cur.classList.add('unactive_gp_bx')

                })
                let itm = JSON.parse(localStorage.getItem('grocFoodListCart'))
                if (itm !== null) {

                    if (itm.length === 0) {
                        document.querySelector('.for_groc_cart_load').style.display = 'none'

                        document.querySelector('.for_ek_groc_cart').style.display = 'block'
                    }
                }
                cur.classList.remove('unactive_gp_bx')
                cur.classList.add('active_gp_bx')
                $('.active_gp_bx::after').animate({ width: '100%' })
                document.querySelector('.only_for_grocery_item').style.display = 'block'
                document.querySelector('.bx_evt_cart_item').style.display = 'none'
            } else {
                let itm = JSON.parse(localStorage.getItem('foodsAdded'))


                document.querySelectorAll('.ct_bx_diff_group ul li').forEach(cur => {
                    cur.classList.remove('active_gp_bx')
                    cur.classList.add('unactive_gp_bx')

                })
                if (itm !== null) {
                    if (itm.length !== 0) {
                        document.querySelector('.for_ek_food_cart').style.display = 'none'
                    } else {
                        document.querySelector('.for_ek_food_cart').style.display = 'block'

                    }
                }
                cur.classList.remove('unactive_gp_bx')
                cur.classList.add('active_gp_bx')
                $('.active_gp_bx::after').animate({ width: '100%' })
                document.querySelector('.bx_evt_cart_item').style.display = 'block'
                document.querySelector('.only_for_grocery_item').style.display = 'none'

            }
        })
    })
    window.addEventListener('load', () => {
        if (document.querySelector('.body_cart') !== null) {
            let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
            let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            if (localStorage.length === 0) {
                document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'

                document.querySelector('.block_2_charge span').innerHTML = '&mdash;'

                document.querySelector('.for_cart_checkout').style.opacity = .5

                document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
                // document.querySelector('.ct_verif_bx').style.display = 'none'

            }
            if (allfd !== null && groc !== null) {
                if (allfd.length === 0 && groc.length === 0) {
                    document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                    document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'
                    document.querySelector('.block_2_charge span').innerHTML = '&mdash;'

                    document.querySelector('.for_cart_checkout').style.opacity = .5

                    document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
                    // document.querySelector('.ct_verif_bx').style.display = 'none'
                }
            }
            document.querySelector('.for_cart_cancel').addEventListener('click', () => {
                const cancelOrder = async () => {

                    document.querySelector('.for_messg_ov').style.display = 'block'

                    document.querySelector('.ct_bx_message_for_confim_cancel').style.display = 'block'
                    document.querySelector('.ct_subotatal').style.pointerEvents = 'none'

                    document.querySelector('.ct_list_food').style.pointerEvents = 'none'


                }
                cancelOrder()
            })

            document.querySelector('html').addEventListener('click', (e) => {

                if (e.target.closest('.cancel_order_btn_no') !== null) {
                    setTimeout(() => {
                        document.querySelector('.for_cancelation').style.display = 'none'

                    }, 3000);
                    document.querySelectorAll('.for_cart_qt div').forEach(cur => {
                        cur.style['pointer-events'] = 'auto'
                    })
                    document.querySelectorAll('.for_cart_qt div ion-icon').forEach(cur => {
                        cur.style.color = 'rgb(0, 132, 255)'
                    })

                    document.querySelector('.check_bx_if_view').style.display = 'flex'
                    const cancelOrderFinal = async () => {
                        let Uid = document.querySelector('.for_cart_cancel').id
                        socket.emit('cancelOrder')
                        console.log(Uid)
                        let d = new Date()
                        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear()
                        let dbCollection2 = db.collection("orders")
                        let od = await dbCollection2.get()


                        let am = document.querySelector('.to_pay_cahge span').innerText
                        document.querySelector('.ct_bx_message_canceled_ordered').style.display = 'block'
                        document.querySelector('.ct_bx_message_canceled_ordered p').innerHTML = `you just canceled the order of  amount <strong> ${am}</strong>  on date ${date}
                        . `

                        document.querySelector('.ct_bx_message_succesfully_ordered').style.display = 'none'

                        document.querySelector('.ct_bxc_hide_checkout').style.display = 'block'

                        od.docs.forEach(cur => {
                            let el = cur.data()
                            let order = el.order
                            let suggestion = el.suggestion
                            let timeE = el.time
                            let userE = el.user
                            if (suggestion === undefined) {
                                suggestion = null
                            }
                            if (el.idM === Uid) {
                                dbCollection2.doc(cur.id).set({
                                    idM: Uid,
                                    order: order,
                                    sugggestion: suggestion,
                                    time: timeE,
                                    user: userE,
                                    confimed: false,
                                    canceled: true
                                })
                                    .then(() => console.log('saved'))
                            }
                        })
                        localStorage.removeItem('orders')

                        document.querySelector('.for_acc_ov').style.display = 'block'

                        document.querySelector('.recomended_cart').style.pointerEvents = 'auto'

                        document.querySelector('.for_messg_ov').style.display = 'none'
                        document.querySelector('.recomended_cart').style.filter = 'blur(0px)'
                        document.querySelector('.ct_subotatal').style.pointerEvents = 'auto'

                        document.querySelector('.ct_subotatal').style.filter = 'blur(0px)'
                        document.querySelector('.ct_list_food').style.pointerEvents = 'auto'

                        document.querySelector('.for_checkout_order').style.display = 'flex'

                        document.querySelector('.ct_bx_info_confirm').style.display = 'none'
                        document.querySelector('.for_conf_order').style.display = 'none'

                        document.querySelector('.for_cart_cancel').style.display = 'none'

                        document.querySelector('.ct_bin_ts_nav_ck').style.display = 'block'
                        document.querySelectorAll('.for_cart_qt div').forEach(cur => {
                            cur.style.background = ' white'
                            cur.style.color = 'black'
                        })
                        document.querySelectorAll('.ct_bx_act_cart_itm').forEach(cur => {
                            cur.style.display = 'flex'
                        })
                        document.querySelectorAll('.field_bx_qt').forEach(cur => {
                            cur.style.pointerEvents = 'auto'
                        })


                        //             document.querySelectorAll('.itm_food_list_ek').forEach(cur=>{
                        //                 cur.style.pointerEvents='auto'

                        //             })

                        let dbCollection = db.collection("users")
                        let res = await dbCollection.get()

                        document.querySelector('.for_cart_load_full').style.display = 'none'
                        document.querySelector('.for_cancelation').style.display = 'block'

                        document.querySelector('.for_acc_ov').style.display = 'none'

                        document.querySelector('.for_messg_ov').style.display = 'none'
                        res.docs.forEach(cur => {
                            let item = cur.data().data
                            let cartGroc = cur.data().cartGroc
                            let cartItem = cur.data().cartItem
                            let likes = cur.data().likes
                            let authUser = cur.data().authUser
                            let rootAutyh = d.data().rootAutyh
                            let dislikes = cur.data().dislikes
                            let rtr = cur.data().myratings

                            let data = cur.data().myOrders
                            if (cur.authUser === user.authUser) {

                                for (let i = 0; i < data.length; i++) {
                                    let cur1 = data[i]
                                    if (cur1.id === Uid) {
                                        cur1.canceled = true

                                        data.splice(i, 1, cur1)
                                        dbCollection.doc(cur.id).set({
                                            authUser: authUser,
                                            cartGroc: cartGroc,
                                            rootAutyh: rootAutyh,
                                            cartItem: cartItem,
                                            data: item,
                                            myOrders: data,
                                            likes: likes,
                                            dislikes: dislikes,
                                            myratings: rtr,

                                        })
                                        break
                                    }
                                }
                            }

                        })
                    }
                    cancelOrderFinal()
                }
                if (e.target.closest('.cancel_order_btn_yes') !== null || e.target.closest('.remove_msg_conf_cancel') !== null) {
                    document.querySelector('.for_cart_load_full').style.display = 'none'

                    document.querySelector('.for_acc_ov').style.display = 'none'

                    document.querySelector('.for_messg_ov').style.display = 'none'
                    document.querySelector('.recomended_cart').style.pointerEvents = 'auto'

                    document.querySelector('.for_messg_ov').style.display = 'none'
                    document.querySelector('.ct_subotatal').style.pointerEvents = 'auto'

                    document.querySelector('.ct_list_food').style.pointerEvents = 'auto'




                    document.querySelector('.ct_bin_ts_nav_ck').style.display = 'block'
                    document.querySelectorAll('.for_cart_qt div').forEach(cur => {
                        cur.style.background = ' white'
                        cur.style.color = 'black'
                    })
                    document.querySelectorAll('.ct_bx_act_cart_itm').forEach(cur => {
                        cur.style.display = 'flex'
                    })
                    document.querySelectorAll('.field_bx_qt').forEach(cur => {
                        cur.style.pointerEvents = 'auto'
                    })

                }
            })
            let search = window.location.search

            let alOrders = JSON.parse(localStorage.getItem('orders'))
            if (alOrders === null) {
                if (search !== '') {
                    if (search.split('=')[0].split('?')[1] === 'item') {
                        // document.querySelector('.ct_verif_bx').style.display = 'none'
                        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
                            window.history.back()
                            return
                        }
                        let allFdEk = JSON.parse(localStorage.getItem('foodsAdded'))
                        let allFdGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                        if (allFdGroc !== null) {
                            allFdGroc.forEach(cur => {
                                const checkName = async () => {
                                    // grocSet
                                    let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group1`)
                                    let res = await dbCollection.get()
                                    res.docs.forEach(cur1 => {
                                        let el = cur1.data().item
                                        let com = cur.com
                                        let p = cur.name

                                        let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
                                        token = decodeURIComponent(token)
                                        token = JSON.parse(token)


                                        if (com !== null) {
                                            token.forEach(ed => {
                                                if (el.id === ed.split('+')[0]) {
                                                    const name = el.name
                                                    const id = el.id
                                                    const img = el.img
                                                    const offer = el.offer
                                                    const com = el.com
                                                    const price = el.price
                                                    const unit = el.unit
                                                    const type = el.group
                                                    const unitInside = el.unitInside
                                                    let stock = el.stock
                                                    stock = parseFloat(stock)
                                                    stock--
                                                    let obj = {
                                                        name: name,
                                                        unitInside: unitInside,
                                                        id: id,
                                                        com: com,
                                                        img: img,

                                                        offer: offer,
                                                        unit: unit,

                                                        price: price,
                                                        group: type,

                                                        stock: stock
                                                    }
                                                    dbCollection.doc(cur1.id).set({
                                                        item: obj
                                                    })

                                                }
                                            })


                                        } else {

                                            if (el.name.split(' ').join('') === p.split(' ').join('')) {
                                                token.forEach(ed => {

                                                    if (el.id === ed.split('+')[0]) {
                                                        const name = el.name



                                                        const id = el.id

                                                        const img = el.img

                                                        const offer = el.offer
                                                        const com = el.com
                                                        const price = el.price
                                                        const unit = el.unit
                                                        const type = el.group

                                                        const unitInside = el.unitInside
                                                        let stock = el.stock
                                                        stock = parseFloat(stock)
                                                        stock--
                                                        let obj = {
                                                            name: name,

                                                            unitInside: unitInside,
                                                            id: id,
                                                            com: com,
                                                            img: img,

                                                            offer: offer,
                                                            unit: unit,

                                                            price: price,
                                                            group: type,

                                                            stock: stock
                                                        }
                                                        console.log(obj)
                                                        dbCollection.doc(cur.id).set({
                                                            item: obj
                                                        })
                                                    }
                                                })
                                            }

                                        }

                                    })
                                }
                                checkName()
                            })
                        }

                        allFdEk.forEach(cur => {
                            const checkName = async () => {
                                // fdSet
                                let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group1`)
                                let res = await dbCollection.get()
                                res.docs.forEach(cur1 => {
                                    let item = cur1.data().item
                                    let cqa = cur1.data().cqa
                                    let name1 = item.name
                                    let price = item.price
                                    let offer = item.offer

                                    let cook = item.cook
                                    let id = item.id
                                    let ratings = item.ratings

                                    let review = item.review
                                    let img = item.img
                                    let fdInside = item.fdInside
                                    let time = item.time
                                    let type = item.type
                                    let recG = item.requiredGroc
                                    let name = cur1.data().item.name.split(' ').join('').toLowerCase()
                                    let FN = cur.data.item.name.split(' ').join('').toLowerCase()
                                    const base = item.base


                                    if (name === FN) {
                                        let stk = parseFloat(item.stock)
                                        stk--
                                        let stock = item.stock = stk
                                        let obj = {
                                            id: id,
                                            name: name1,
                                            price: price,
                                            type: type,
                                            base: base,
                                            offer: offer,
                                            cook: cook,
                                            img: img,
                                            requiredGroc: recG,
                                            review: review,
                                            time: time,
                                            ratings: ratings,
                                            stock: stock,
                                            fdInside: fdInside
                                        }
                                        dbCollection.doc(cur1.id).set({
                                            cqa: cqa,
                                            item: obj

                                        })
                                    }
                                })
                            }
                            checkName()
                        })



                        let allGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                        let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
                        let totAm = []
                        let arrOrders = []

                        if (allGroc !== null) {
                            allGroc.forEach(cur => {
                                if (cur.off !== undefined && cur.off !== null) {
                                    let p = parseFloat(cur.price.split('₹')[1])
                                    let offer = parseFloat(cur.off.split('%')[0])
                                    let pF = Math.round(p - (p * offer / 100))
                                    let qt = parseFloat(cur.qt)
                                    let price = pF * qt

                                    totAm.push(price)
                                } else {
                                    let p = parseFloat(cur.price.split('₹')[1])
                                    let qt = parseFloat(cur.qt)
                                    let price = p * qt

                                    totAm.push(price)
                                }
                                arrOrders.push(cur)

                            })
                        }
                        if (allfd !== null) {
                            allfd.forEach(cur => {
                                let data = cur.data.item
                                if (data.offer !== undefined && data.offer !== null) {

                                    let p = parseFloat(data.price.split('₹')[1])
                                    let offer = parseFloat(data.offer)
                                    let pF = Math.round(p - (p * offer / 100))
                                    let qt = parseFloat(cur.qt)
                                    let price = pF * qt

                                    totAm.push(price)
                                } else {
                                    let p = parseFloat(data.price.split('₹')[1])
                                    let qt = parseFloat(cur.qt)
                                    let price = p * qt
                                    totAm.push(price)
                                }
                                arrOrders.push(cur)

                            })
                        }
                        let user = getCookie('user')
                        if (user !== '') {

                            user = JSON.parse(user)
                        } else { user = null }
                        let arratOrders = []
                        const addOrder2 = async (arr) => {
                            socket.emit('newOrder', 'ss')
                            document.querySelector('.for_acc_ov').style.display = 'block'
                            document.querySelector('.ct_bxc_hide_checkout').style.display = 'none'
                            let user = getCookie('user')
                            if (user !== '') {
                                user = JSON.parse(user)
                            } else { user = null }
                            let dbCollection = db.collection("users")
                            let res = await dbCollection.get()
                            let dN = new Date()
                            let typ = dN.toLocaleString().split(',')[1].split(' ')[2]
                            let timeH = parseFloat(dN.toLocaleString().split(',')[1].split(':')[0])
                            let timeMin = parseFloat(dN.toLocaleString().split(',')[1].split(':')[1])
                            let hourT
                            let totTime
                            let setMin

                            document.querySelector('.for_success_order').style.display = 'block'
                            setTimeout(() => {
                                document.querySelector('.for_success_order').style.display = 'none'

                            }, 4000);
                            document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed,your order wil be delivered within today.
                            .</span>We  will call back soon on this number <span>+91 ${user.service}</span>.`
                            document.querySelector('.for_acc_ov').style.display = 'none'
                            document.querySelector('.ct_bx_message_canceled_ordered').style.display = 'none'


                            document.querySelector('.for_erak_cart').style.display = 'block'
                            let conf
                            console.log(arratOrders)
                            res.docs.forEach(d => {

                                let item = d.data().data
                                let cartGroc = d.data().cartGroc
                                let cartItem = d.data().cartItem
                                let likes = d.data().likes
                                let authUser = d.data().authUser
                                let dislikes = d.data().dislikes
                                let rtr = d.data().myratings
                                let rootAutyh = d.data().rootAutyh
                                let orders = d.data().myOrders
                                if (d.data().authUser === user.authUser) {

                                    if (orders.length === 0) {

                                        arratOrders.push(arr)
                                        console.log(arratOrders)
                                        dbCollection.doc(d.id).set({
                                            cartGroc: cartGroc,
                                            rootAutyh: rootAutyh,

                                            authUser: authUser,
                                            cartItem: cartItem,
                                            data: item,
                                            myOrders: arratOrders,
                                            likes: likes,
                                            dislikes: dislikes,
                                            myratings: rtr,

                                        })
                                        document.querySelector('.for_cart_cancel').removeAttribute('id')
                                        document.querySelector('.for_cart_cancel').setAttribute('id', hash)



                                    }

                                    else {
                                        orders.forEach(el => {
                                            console.log(el.confirmed, el.canceled)
                                            if (el.confirmed && !el.canceled) {
                                                conf = true
                                                arratOrders.push(el)
                                            } else if (!el.confirmed && el.canceled) {
                                                conf = true
                                                arratOrders.push(el)
                                            } else {
                                                conf = false
                                                document.querySelector('.for_cart_cancel').setAttribute('id', hash)

                                            }
                                        })
                                        arratOrders.push(arr)
                                        console.log(arr)
                                        dbCollection.doc(d.id).set({
                                            cartGroc: cartGroc,
                                            authUser: authUser,

                                            cartItem: cartItem,
                                            data: item,
                                            myOrders: arratOrders,
                                            likes: likes,
                                            dislikes: dislikes,
                                            myratings: rtr,

                                        })



                                    }

                                }
                            })

                        }

                        let addedIdOrder = []
                        var bcrypt = dcodeIO.bcrypt;
                        let hash = bcrypt.hashSync('unique', 4);
                        let d = new Date()
                        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear()

                        let time = d.toLocaleTimeString()
                        let obj = {
                            date: date,
                            time: time,
                            id: hash,
                            orders: arrOrders,
                            canceled: false,
                            confirmed: false,
                            amount: totAm,
                        }
                        localStorage.setItem('orders', JSON.stringify({ id: hash }))

                        document.querySelector('.for_checkout_order').style.display = 'none'

                        document.querySelector('.ct_bx_info_confirm').style.display = 'flex'
                        document.querySelector('.for_conf_order').style.display = 'block'

                        document.querySelector('.for_cart_cancel').style.display = 'flex'


                        addOrder2(obj)


                        let readed = null

                        let query = window.location.search.split('?')[1].split('=')[1].split('&')
                        let orders = decodeURIComponent(query[0])
                        orders = JSON.parse(orders)
                        let odData
                        readed = true
                        let sug
                        let arrOrderItems = []

                        let datNum = date.split(' ')[0]
                        let mon = date.split(' ')[1]
                        orders.forEach(cur => {
                            let items = cur.split('+')
                            let priceF

                            if (items.length > 2) {
                                odData = parseJwt(items[0])
                                let grocAll = JSON.parse(localStorage.getItem('grocFoodListCart'))
                                grocAll.forEach(cu => {
                                    if (cu.id === items[0]) {
                                        priceF = cu.price
                                    }
                                })
                                arrOrderItems.push({ dt: odData, qt: items[1], unit: items[2], unitPrice: items[3], price: priceF })


                                if (window.location.search.split('?')[1].split('=')[2] !== undefined) {
                                    sug = window.location.search.split('?')[1].split('=')[2]
                                } else {
                                    sug = null
                                }

                            } else {
                                odData = parseJwt(items[0])
                                arrOrderItems.push({ dt: odData, qt: items[1] })

                                if (window.location.search.split('?')[1].split('=')[2] !== undefined) {
                                    sug = window.location.search.split('?')[1].split('=')[2]
                                } else {
                                    sug = null
                                }

                            }




                        })
                        const addOrder = async () => {
                            let dbCollection = db.collection("orders")
                            await dbCollection.add({
                                time: { date: datNum, time: time, mon: mon },
                                order: arrOrderItems,
                                idM: hash,
                                user: user,
                                canceled: false,
                                suggestion: sug,

                            }).then(() => { console.log('order added.') })

                        }
                        addOrder()


                    }



                }
            }
        }


        if (window.location.pathname === '/foods') {

            let allfd = JSON.parse(localStorage.getItem('foodListCart'))
            if (allfd !== null) {
                let html

                allfd.forEach(cur => {
                    if (cur.offPercent !== null) {
                        let price = parseFloat(cur.cost.split("₹")[1])
                        let offer = parseFloat(cur.offPercent)
                        let offerPrice = Math.round(price - (price * (offer / 100)))

                        if (cur.fd_typ === 'veg') {
                            html = `  <li>

                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                        style=" fill:#000000;">
                        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                            font-family="none" font-weight="none" font-size="none" text-anchor="none"
                            style="mix-blend-mode: normal">
                            <path d="M0,172v-172h172v172z" fill="none"></path>
                            <g fill="#099f49">
                                <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                </path>
                                <path
                                    d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                </path>
                            </g>
                        </g>
                    </svg>
    
                    <div class="dt_itm_res_cart">
                    <h4>${checkChar(cur.fdName, 14)}</h4>
    
                        <p>
                        ${cur.qtfd}
                        </p>
                        <span><del>₹ ${price}</del>₹ ${offerPrice}</span>
                    </div>
                </li>`
                        } else if (cur.fd_typ === 'non-veg') {
                            html = `  <li>

                        <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

        
                        <div class="dt_itm_res_cart">
                        <h4>${checkChar(cur.fdName, 14)}</h4>
        
                            <p>
                            ${cur.qtfd}
                            </p>
                            <span><del>₹ ${price}</del>₹ ${offerPrice}</span>
                        </div>
                    </li>`
                        }
                    } else {
                        let price = parseFloat(cur.cost.split("₹")[1])

                        if (cur.fd_typ === 'veg') {
                            html = `  <li>
   
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 172 172"
                           style=" fill:#000000;">
                           <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                               stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                               font-family="none" font-weight="none" font-size="none" text-anchor="none"
                               style="mix-blend-mode: normal">
                               <path d="M0,172v-172h172v172z" fill="none"></path>
                               <g fill="#099f49">
                                   <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                   </path>
                                   <path
                                       d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                   </path>
                               </g>
                           </g>
                       </svg>
       
                       <div class="dt_itm_res_cart">
                       <h4>${checkChar(cur.fdName, 14)}</h4>
       
                           <p>
                           ${cur.qtfd}
                           </p>
                           <span>₹ ${price}</span>
                           </div>
                   </li>`
                        } else if (cur.fd_typ === 'non-veg') {
                            html = `  <li>
   
                           <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
   
           
                           <div class="dt_itm_res_cart">
                           <h4>${checkChar(cur.fdName, 14)}</h4>
           
                               <p>
                                   ${cur.qtfd}
                               </p>
                                <span>₹ ${price}</span>
                           </div>
                       </li>`
                        }
                    }



                })
            }
        }



        if (window.location.search !== '') {
            let query = decodeURIComponent(window.location.search).split('?')[1].split('&')
            if (document.querySelector('.ct_bx_overlay_cart_signup') !== null) {
                document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'block'
            }
            let parser = parseJwt(query[0].split('=')[1])
            if (window.location.pathname === '/signup') {

                var bcrypt = dcodeIO.bcrypt;
                let hash = bcrypt.hashSync(parser.user.password_login, 4);
                console.log(parser)

                let codeId = parseFloat(parser.id)

                document.querySelector('.name_of_user').value = parser.user.name_user
                document.querySelector('.last_of_user').value = parser.user.lastname


                let phN1 = parser.user.phonenum_user_acc[1][1]
                let phN2 = parser.user.phonenum_user_acc[1][2]
                let phN3 = parser.user.phonenum_user_acc[1][3]
                let phN4 = parser.user.phonenum_user_acc[1][9]
                let phN5 = parser.user.phonenum_user_acc[1][10]

                document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'


                const setUser = async () => {
                    let auth = window.location.search.split('?')[1].split('=')[1]
                    socket.emit('setId')
                    let idU
                    socket.on('getId', id => {
                        id

                        let paswordHash = hash
                        db.collection("users")
                            .add({
                                myOrders: [],
                                rootAutyh: id,

                                authUser: auth,
                                cartItem: [],
                                cartGroc: [],

                                data: [parser.user.name_user.split(' ').join(''),
                                parser.user.lastname.split(' ').join(''),
                                parser.user.address_user.split(' ').join(''),
                                    paswordHash,
                                parser.user.phonenum_user_acc[0],
                                parser.user.phonenum_user_acc[1].split(' ').join(''),
                                parser.user.pin
                                ],
                                likes: [],
                                myratings: [],
                                dislikes: [],

                            }).then(res => {
                                document.querySelector('.ct_bx_messgae').style.display = 'none'

                                location.replace('/login')
                            })
                    })
                }
                document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'block'

                const addUser = async () => {
                    let elem = await db.collection("users").get()
                    let elem1 = await db.collection("locations").get()
                    elem1.docs.forEach(cur => {
                        let p = parseFloat(cur.data().pin.trim())
                        let p1 = parseFloat(parser.user.pin.trim())
                        if (p1 === p) {
                            for (let i = 0; i < elem.docs.length; i++) {
                                let curElem = elem.docs[i]
                                let hash2 = bcrypt.compareSync(parser.user.password_login, curElem.data().data[3]);

                                if (curElem.data().data[5].trim() === parser.user.phonenum_user_acc[1].trim()) {
                                    if (document.querySelector('.ct_bx_overlay_cart_signup') !== null) {

                                        document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'
                                    }
                                    document.querySelector('.pin_error').style.display = 'none'

                                    document.querySelector('.phoneum_error').style.display = 'flex'

                                    document.querySelector('.pass_error').style.display = 'none'
                                    document.querySelectorAll('.nick_name label').forEach(cur => { cur.style.marginTop = '-55px' })
                                    document.querySelectorAll('.gmail_acc .nick_name label').forEach(cur => { cur.style.marginTop = '-65px' })

                                    let token = window.location.search.split('?')[1].split('=')[1]
                                    let jwt = parseJwt(token)

                                    let gmail = jwt.user.phonenum_user_acc[0]
                                    let ph = jwt.user.phonenum_user_acc[1]
                                    let pin = jwt.user.pin
                                    document.querySelector('.gmail_acc input ').value = gmail
                                    document.querySelector('.ct_phone_input_field input').value = ph

                                    document.querySelector('.pincode input').value = pin
                                    document.querySelector('.address_of_user').value = jwt.user.address_user
                                    return

                                }
                                if (hash2) {
                                    if (document.querySelector('.ct_bx_overlay_cart_signup') !== null) {

                                        document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'
                                    }
                                    document.querySelector('.pin_error').style.display = 'none'

                                    document.querySelector('.phoneum_error').style.display = 'none'

                                    document.querySelector('.pass_error').style.display = 'flex'
                                    document.querySelectorAll('.nick_name label').forEach(cur => { cur.style.marginTop = '-55px' })
                                    document.querySelectorAll('.gmail_acc .nick_name label').forEach(cur => { cur.style.marginTop = '-65px' })

                                    if (window.innerWidth < 700) {
                                        document.querySelectorAll('.pincode label').forEach(cur => { cur.style.marginTop = '-65px' })

                                    }

                                    let token = window.location.search.split('?')[1].split('=')[1]
                                    let jwt = parseJwt(token)

                                    let gmail = jwt.user.phonenum_user_acc[0]
                                    let ph = jwt.user.phonenum_user_acc[1]
                                    let pin = jwt.user.pin
                                    document.querySelector('.gmail_acc input ').value = gmail
                                    document.querySelector('.ct_phone_input_field input').value = ph

                                    document.querySelector('.pincode input').value = pin
                                    document.querySelector('.address_of_user').value = jwt.user.address_user
                                    return

                                }

                            }


                            if (decodeURIComponent(window.location.search) !== '') {
                                //                     if (parser !== null) {
                                //                         $('.ct_field_first_acc').css('display', 'none')
                                //                         let html = `<div class=" nick_name verfiy_otp_inp_field">
                                //        <input name='providedOTP' id="last_nam_inp_verif" spellcheck="false" type="text" required>
                                //        <span class="for_error">
                                //        <ion-icon name="alert-outline"></ion-icon>
                                //        Provided OTP does not match
                                //    </span>
                                //    </div>
                                //    <div class="ct_set_otp">
                                // <p>Do not recived any OTP?  <a href="/signup?authUser=${window.location.search.split('?')[1].split('=')[1]}&rd=true">Resend</a></p>

                                //  </div>
                                //    <input type='button' name='create_acc' class="login_now account_crate" value='Create account'></input>`
                                //                         $('.ct_ot_check_ov').css('display', 'block')
                                //                         $('.ov_welcome_acxc').css('display', 'none')
                                //                         $('.if_has_ald_acc').css('display', 'none')
                                //                         $('.ct_go_back_acc').css('display', 'block')
                                //                         $('.test').css('display', 'block')
                                //                         $('.ct_field_set_which_service').css('display', 'none')
                                //                         $('.otp_img').css('display', 'block')

                                //                         document.querySelector('.ct_verify_otp').style.display = 'block'
                                //                         document.querySelector('.ct_verify_otp').insertAdjacentHTML('beforeend', html)
                                //                     }
                                //                     else {
                                //                         window.location.replace('/signup')
                                //                     }



                                // if (document.querySelector('.ct_field_first_acc') !== null) {
                                //     document.querySelector('.ct_field_first_acc').remove()
                                //     $('.account_cont').css('display', 'none')
                                //     $('.other_way_of_acc').css('display', 'none')
                                // }
                                document.querySelector('.ov_welcome_acxc').style.display = 'none'

                                document.querySelector('.if_has_ald_acc').style.display = 'none'
                                document.querySelector('.ct_field_first_acc').remove()
                                document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'

                                let hm = ` <div class="ct_bx_verify">
                                <span class='go_back'><ion-icon name="arrow-back-outline"></ion-icon> Go Back</span>
                                
                                                <div class="ct_bx_icons_verif">
                                                    <div class="ct_bx1">
                                                        <ion-icon name="chatbox-ellipses-outline"></ion-icon>
                                
                                                    </div>
                                                    <div class="ct_bx2">
                                                        <ion-icon name="phone-portrait-outline"></ion-icon>
                                
                                                    </div>
                                                </div>
                                
                                                <h4>We sent you a OTP.</h4>
                                                <p>Enter it below to verify   this number <strong>${phN1}${phN2}${phN3}zxzyx${phN4}${phN5}</strong>
                                                </p>
                                                <div class="ct_bx_verif2">
                                                    <form action="/signup" method="GET">
                                
                                                        <div class="nick_name gmail_inp_fl  bx_acc">
                                                            <input name="number_verif" class="email_of_user" id="verify" type="text" required>
                                                            <label class="email_of_user" for="verify">Please type here</label>
                                
                                
                                
                                
                                                        </div>
                                                        <button class="cont_btn_acc  account_cont1" name='continue_verify' type="button"><span>
                                                                <ion-icon name="person-add-sharp"></ion-icon> Create account
                                                            </span></button>
                                                    </form>
                                                </div>
                                                <p class='send_again'>Do not recived any OTP?  <a href="/signup?authUser=${window.location.search.split('?')[1].split('=')[1]}&rd=true">Resend</a></p>
                                
                                            </div>
                                `

                                document.querySelector('.ct_bx_account').insertAdjacentHTML('beforeend', hm)
                                document.querySelector('.go_back').addEventListener('click', () => {

                                    window.history.back()
                                })

                                document.querySelector('.account_cont1').addEventListener('click', () => {
                                    let inpTxt = document.querySelector('.ct_bx_verif2 input').value
                                    inpTxt = parseFloat(inpTxt)
                                    console.log(codeId, inpTxt)
                                    if (codeId === inpTxt) {

                                        document.querySelector('.ct_bx_messgae').style.display = 'block'

                                        setUser()

                                    } else {
                                        document.querySelector('.pin_error').style.display = 'flex'
                                        document.querySelector('.pin_error p').innerText = 'Your provided OTP does not match'

                                    }
                                })

                            }
                        } else {
                            document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'
                            document.querySelector('.pass_error').style.display = 'none'
                            document.querySelector('.pin_error').style.display = 'flex'

                            document.querySelector('.phoneum_error').style.display = 'none'

                            document.querySelectorAll('.nick_name label').forEach(cur => { cur.style.marginTop = '-55px' })
                            document.querySelectorAll('.gmail_acc .nick_name label').forEach(cur => { cur.style.marginTop = '-65px' })

                            let token = window.location.search.split('?')[1].split('=')[1]
                            let jwt = parseJwt(token)

                            let gmail = jwt.user.phonenum_user_acc[0]
                            let ph = jwt.user.phonenum_user_acc[1]
                            let pin = jwt.user.pin

                            document.querySelector('.gmail_acc input ').value = gmail
                            document.querySelector('.ct_phone_input_field input').value = ph
                            document.querySelector('.address_of_user').value = jwt.user.address_user
                            document.querySelector('.pincode input').value = pin
                        }
                    })


                }
                addUser()




            }

        }

        if (document.querySelector('.remove_fd_itm_ct') !== null) {
            document.querySelectorAll('.remove_fd_itm_ct').forEach(cur => {
                cur.addEventListener('click', e => {
                    e.target.closest('.remove_fd_itm_ct').parentElement.remove()


                    let namefood = e.target.closest('.remove_fd_itm_ct').parentElement.childNodes[1].childNodes[3].innerText
                    let allfd = JSON.parse(JSON.parse(localStorage.getItem('foodListCart')).value)
                    allfd.forEach(cur2 => {
                        if (cur2.fdName === namefood) {
                            let indexItm = allfd.indexOf(cur2)
                            allfd.splice(indexItm, 1)
                            setWithExpiry('foodListCart', JSON.stringify(allfd), 1)

                        }
                    })
                })
            })
        }

        if (document.querySelector('.go_back') !== null) {
            document.querySelector('.go_back').addEventListener('click', () => {

                window.location.replace('/login?#forgot')
            })
        }
        if (document.querySelector('.body_login') !== null) {


            if (window.location.search !== '') {
                if (window.location.search.split('?')[1].split('=')[0] === 'forgotpass') {
                    document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'
                    let query = decodeURIComponent(window.location.search).split('?')[1].split('&')

                    document.querySelector('.ct_field_first_acc').style.display = 'none'

                    document.querySelector('.ov_welcome_acxc').style.display = 'none'

                    document.querySelector('.for_login_signup').style.display = 'none'

                    document.querySelector('.for_login_verif').style.display = 'block'

                    let dbCollection = db.collection("users")
                    let parser = parseJwt(query[0].split('=')[1])
                    console.log(parser)
                    let code = parseFloat(parser.num)

                    const updateUser = async () => {
                        let resp = await dbCollection.get()
                        document.querySelector('.ct_bx_messgae').style.display = 'block'

                        resp.docs.forEach(res => {
                            let cartGroc = res.data().cartGroc
                            let cartItem = res.data().cartItem
                            let order = res.data().myOrders

                            let likes = res.data().likes
                            let authUser = res.data().authUser
                            let rootAutyh = res.data().rootAutyh

                            let dislikes = res.data().dislikes
                            let rtr = res.data().myratings
                            let user = parser.user
                            for (let i = 0; i < resp.docs.length; i++) {
                                let cur = resp.docs[i]
                                console.log(cur.data().authUser, user)
                                if (cur.data().data[5] === user.sv && cur.data().data[0].trim() === user.n.trim()) {
                                    var bcrypt = dcodeIO.bcrypt;
                                    console.log(user.pass)
                                    var hash = bcrypt.hashSync(user.pass, 4);
                                    console.log(user.n, user.ln, user.ad, hash, user.pn, user.sv, cur.data().data, 'hus')
                                    // return

                                    // console.lolg(user.n, user.ln, user.ad, hash, user.pn, user.sv, res.data().data)
                                    dbCollection.doc(resp.docs[i].id).set({
                                        data: [user.n, user.ln, user.ad, hash, user.pn, user.sv, cur.data().data[6]],
                                        cartGroc: cartGroc,
                                        authUser: authUser,
                                        rootAutyh: rootAutyh,

                                        cartItem: cartItem,
                                        likes: likes,
                                        dislikes: dislikes,
                                        myOrders: order,
                                        myratings: rtr
                                    })
                                        .then(res => {
                                            document.querySelector('.ct_bx_messgae').style.display = 'none'

                                            window.location.replace('/login')
                                        })

                                    break
                                }
                            }
                        })

                    }
                    document.querySelector('.account_cont11').addEventListener('click', () => {
                        let inp = document.querySelector('.ct_bx_verif2 input').value


                        if (inp !== '') {
                            inp = parseFloat(inp)

                            if (code === inp) {
                                updateUser()
                            } else {
                                document.querySelector('.otp_err2').style.display = 'none'

                                document.querySelector('.otp_err1').style.display = 'flex'
                            }
                        } else {
                            document.querySelector('.otp_err2').style.display = 'flex'

                            document.querySelector('.otp_err1').style.display = 'none'

                        }
                    }
                    )

                }
            }



        }
    })

    document.querySelectorAll('.ct_serv_itm').forEach(cur => {
        cur.addEventListener('click', e => {
            let h4 = e.target.closest('.ct_flexselection_itm_service').childNodes[1].innerText
            document.querySelector('.ct_adin_help_service p').innerText = h4
            document.querySelectorAll('.list_food_cart ul li input[type=checkbox]').forEach(res => {

                if (res.parentElement.classList.value === 'add_as_full_cooked') {
                    res.style.display = 'block'
                    // $('.list_food_cart ul li input[type=checkbox]').prop('checked', false)

                } else if (res.parentElement.classList.value === 'add_as_pre_cooked') {
                    res.style.display = 'block'

                    // $('.list_food_cart ul li input[type=checkbox]').prop('checked', false)
                }
                else {
                    res.style.display = 'block'

                }

            })

        })
    })






    if (document.querySelector('.ct_adin_help_service button') !== null) {

        document.querySelector('.ct_adin_help_service button').addEventListener('click', () => {
            $('.added_serv_ov').css('display', 'block')
            document.querySelectorAll('.list_food_cart ul li input[type=checkbox]').forEach(cur => {
                cur.style.display = 'none'
            })

        })
    }



    $('.text_drop').click(() => {
        if ($('.drop_box_groc ul').hasClass('not_toggle')) {
            $('.drop_box_groc ul').removeClass('not_toggle')
            $('.drop_box_groc ul').addClass('toggle')
        } else {
            $('.drop_box_groc ul').addClass('not_toggle')
            $('.drop_box_groc ul').removeClass('toggle')
        }


    })

    document.querySelector('html').addEventListener('click', (e) => {


        if (e.target.closest('.qt_selection') === null && e.target.closest('.qt_nav_ev') === null) {
            $('.qt_nav_ev').fadeOut()
            $('.qt_nav_ev').addClass('.not_tog')
        }
        if (e.target.closest('.category_nav') === null) {
            $('.cat_list_foods_itm').fadeOut()
            $('.cat_list_foods_itm').addClass('not_tog')
        }

    })
    if (document.querySelector('.qt_selection') !== null) {
        document.querySelector('.qt_selection').addEventListener('click', () => {

            if ($('.qt_nav_ev').hasClass('not_tog')) {
                $('.qt_nav_ev').fadeIn()
                $('.qt_nav_ev').removeClass('not_tog')

            } else {
                $('.qt_nav_ev').fadeOut()
                $('.qt_nav_ev').addClass('not_tog')

            }
        })
    }
    $('.category_nav').click(() => {

        if ($('.cat_list_foods_itm').hasClass('not_tog')) {
            $('.cat_list_foods_itm').fadeIn()
            $('.cat_list_foods_itm').removeClass('not_tog')

        } else {
            $('.cat_list_foods_itm').fadeOut()
            $('.cat_list_foods_itm').addClass('not_tog')

        }
    })


    if (
        document.querySelector('.ct_suggested_bx textarea') !== null) {
        document.querySelector('.ct_suggested_bx textarea').addEventListener('input', () => {
            let href = document.querySelector('.check_out_btn_order').href
            let res = decodeURIComponent(href.split('=')[1].split('&')[0])
            let sugst = document.querySelector('.ct_suggested_bx textarea').value
            if (sugst !== '') {
                console.log(sugst)
                document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${res}&sug=${sugst}`)
            }

        })
    }


    if (document.querySelector('.for_login') !== null) {
        document.querySelector('.for_login').addEventListener('click', () => {
            let n = document.getElementsByName('usfstnm')[0].value
            let ln = document.querySelector('.last_of_user').value

            let p = document.querySelector('.email_of_user').value
            let firstname = document.getElementsByName('usfstnm')[0].value.split(' ').join('')
            let lastname = document.querySelector('.last_of_user').value.split(' ').join('')
            let password = document.getElementsByName('password_login')[0].value.split(' ').join('')
            if (n !== '' && ln !== '' && p !== '') {
                if (document.getElementsByName('password_login')[0].value.trim().length >= 9) {
                    document.querySelector('.lstname_err3').style.display = 'none'
                    let dbCollection = db.collection("users")

                    var bcrypt = dcodeIO.bcrypt;
                    document.querySelectorAll('.display_on_no_acc').forEach(cur => {
                        cur.style.display = 'none'
                    })

                    let foundName = false
                    const login = async () => {
                        document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'block'

                        let cur = await dbCollection.get()

                        for (let i = 0; i < cur.docs.length; i++) {
                            let curs = cur.docs
                            if (curs[i].data().data !== undefined) {
                                let hash = curs[i].data().data[3]
                                let checkPass = bcrypt.compareSync(password, hash);
                                if (n.split(' ').join('').toLowerCase().trim() === curs[i].data().data[0].split(' ').join('').toLowerCase().trim()) {
                                    foundName = true
                                    if (checkPass) {

                                        if (curs[i].data().data[0].split(' ').join('') === firstname && curs[i].data().data[1].split(' ').join('') === lastname && checkPass) {
                                            $('.password_err').css('display', 'none')

                                            $('.name_err').css('display', 'none')
                                            $('.lstname_err').css('display', 'none')
                                            $('.lstname_err3').css('display', 'none')
                                            console.log(curs[i].data().rootAutyh)
                                            let dtus = JSON.stringify({ rootAutyh: curs[i].data().rootAutyh, authUser: curs[i].data().authUser, n: curs[i].data().data[0], ln: curs[i].data().data[1], ad: curs[i].data().data[2], ct: curs[i].data().data[4], pass: curs[i].data().data[3], service: curs[i].data().data[5], pin: curs[i].data().data[6] })
                                            console.log(dtus)
                                            document.cookie = "user" + "=" + dtus + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/"
                                            if (curs[i].data().cartItem !== undefined) {
                                                localStorage.setItem('foodsAdded', JSON.stringify(curs[i].data().cartItem))
                                            }

                                            if (curs[i].data().myratings !== undefined) {
                                                localStorage.setItem('myRatings', JSON.stringify(curs[i].data().myratings))
                                            }
                                            if (curs[i].data().cartGroc !== undefined) {
                                                localStorage.setItem('grocFoodListCart', JSON.stringify(curs[i].data().cartGroc))
                                            }
                                            window.location.replace('/')
                                            break



                                        } else if (curs[i].data().data[1].split(' ').join('') !== lastname) {

                                            $('.password_err').css('display', 'none')
                                            $('.lstname_err3').css('display', 'none')

                                            $('.name_err').css('display', 'none')
                                            $('.lstname_err').css('display', 'block')
                                        }
                                    } else {
                                        $('.password_err').css('display', 'block')

                                        $('.name_err').css('display', 'none')
                                        $('.lstname_err3').css('display', 'none')

                                        $('.lstname_err').css('display', 'none')
                                    }
                                }



                            }

                        }
                        if (!foundName) {
                            $('.password_err').css('display', 'none')
                            $('.lstname_err3').css('display', 'none')

                            $('.name_err').css('display', 'block')
                            $('.lstname_err').css('display', 'none')

                        }

                        document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'


                    }
                    login()


                } else {
                    document.querySelector('.lstname_err3').style.display = 'block'
                }
            }
        })

    }

    if (document.querySelector('.goback') !== null) {
        document.querySelector('.goback').addEventListener('click', e => {
            window.history.back()
            document.querySelector('.phone_number_login_forg').style.display = 'none'

            document.querySelector('.password_err_exsist').style.display = 'none'

            document.querySelector('.for_login_signup').style.display = 'block'

            document.querySelector('.ov_welcome_acxc p').style.display = 'block'
            document.querySelector('.lstname_err3').style.display = 'none'

            document.querySelector('.or').style.display = 'block'

            document.querySelector('.goback').style.display = 'none'


            document.querySelector('.ct_create_acc h3 t').innerText = 'Login To ERAK '
            document.querySelector('.pass_bx_field').style.display = 'block'
            document.querySelector('.new_pass_bx').style.display = 'none'
            document.querySelector('.password_err').style.display = 'none'

            document.querySelector('.name_err').style.display = 'none'
            document.querySelector('.lstname_err').style.display = 'none'



            document.querySelector('.hiden_update2').style.display = 'none'
            document.querySelector('.for_login').style.display = 'block'
            document.querySelector('.forgot_pass').style.display = 'block'

        })
    }
    function sameCode() {
        document.querySelector('.phone_number_login_forg').style.display = 'flex'

        document.querySelector('.for_login_signup').style.display = 'none'

        document.querySelector('.ov_welcome_acxc p').style.display = 'none'
        document.querySelector('.lstname_err3').style.display = 'none'

        document.querySelector('.or').style.display = 'none'

        document.querySelector('.goback').style.display = 'block'


        document.querySelector('.ct_create_acc h3 t').innerText = 'Change Password '
        document.querySelector('.pass_bx_field').style.display = 'none'
        document.querySelector('.new_pass_bx').style.display = 'block'
        document.querySelector('.password_err').style.display = 'none'

        document.querySelector('.name_err').style.display = 'none'
        document.querySelector('.lstname_err').style.display = 'none'

        document.querySelector('.password_err_exsist').style.transform = 'translate(180px,210px);'


        document.querySelector('.hiden_update2').style.display = 'block'
        document.querySelector('.for_login').style.display = 'none'
        document.querySelector('.forgot_pass').style.display = 'none'
    }
    if (document.querySelector('.forgot_pass') !== null) {
        document.querySelector('.forgot_pass').addEventListener('click', e => {
            if (window.innerWidth <= 500) {

                document.querySelector('.gt_first_nam_second_name:nth-child(1) label:nth-child(2)').style.width = '137px'

            }
            sameCode()
        })
    }

    if (window.location.href.split('#')[1] === 'forgot' && window.location.pathname === '/login') {

        sameCode()



    }

    if (document.querySelector('.hiden_update2') !== null) {
        document.querySelector('.hiden_update2').addEventListener('click', () => {
            let dbCollection = db.collection("users")
            let pn = document.querySelector('.phone_numforg').value
            let confInp = document.querySelector('.new_pass_bx2').value.trim()
            var bcrypt = dcodeIO.bcrypt;
            let firstname = document.getElementsByName('usfstnm')[0].value.split(' ').join('')
            let lastname = document.getElementsByName('uslstnm')[0].value.split(' ').join('')
            let matchedName = false
            let mathchedlst = false
            let checkPass2 = false
            let chpn = false
            document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'block'

            const forgotpass = async () => {

                let cur = await dbCollection.get()
                document.querySelector('.ct_bx_overlay_cart_signup').style.display = 'none'

                let curs

                let i
                if (cur.docs.length !== 0) {
                    for (let i1 = 0; i1 < cur.docs.length; i1++) {
                        curs = cur.docs
                        checkPas = bcrypt.compareSync(confInp.trim(), curs[i1].data().data[3]);
                        console.log(checkPas)
                        if (checkPas) {
                            checkPass2 = true
                        }
                        if (pn.trim() === curs[i1].data().data[5].trim()) {
                            chpn = true
                            i = i1
                            console.log(curs[i1].data().data[5].trim())

                        }
                        if (curs[i1].data().data[0].split(' ').join('') === firstname) {
                            matchedName = true

                        }
                        if (curs[i1].data().data[1].split(' ').join('') === lastname) {
                            mathchedlst = true
                        }

                    }
                    if (!matchedName) {

                        $('.password_err').css('display', 'none')
                        $('.phonenum').css('display', 'none')

                        $('.name_err').css('display', 'block')
                        $('.lstname_err').css('display', 'none')
                        return

                    }
                    if (!mathchedlst) {
                        $('.password_err').css('display', 'none')
                        $('.phonenum').css('display', 'none')

                        $('.name_err').css('display', 'none')
                        $('.lstname_err').css('display', 'block')
                        return
                    }
                    console.log(chpn, checkPass2)
                    if (chpn) {


                        if (!checkPass2) {
                            $('.password_err').css('display', 'none')
                            $('.phonenum').css('display', 'none')
                            $('.password_err_exsist').css('display', 'none')
                            $('.lstname_err2').css('display', 'none')

                            $('.name_err').css('display', 'none')
                            $('.lstname_err').css('display', 'none')
                            let inp = document.querySelector('.new_pass_bx1').value.trim()
                            console.log(inp.length > 9)
                            if (inp.length >= 9) {
                                if (inp === confInp) {
                                    document.querySelector('.lstname_err2').style.display = 'none'
                                    let decode_phone_num = decodeURIComponent(curs[i].data().data[4])
                                    let decode_name = decodeURIComponent(curs[i].data().data[0])
                                    window.location.replace(`/login?pn=${decode_phone_num}&n=${decode_name}&ln=${curs[i].data().data[1]}&ad=${curs[i].data().data[2]}&pass=${inp}&sv=${curs[i].data().data[5]}`)

                                    document.querySelector('.lstname_err3').style.display = 'none'
                                } else {
                                    document.querySelector('.lstname_err2').style.display = 'block'

                                }
                            } else {
                                $('.phonenum').css('display', 'none')
                                $('.password_err').css('display', 'none')

                                $('.name_err').css('display', 'none')
                                $('.lstname_err').css('display', 'none')
                                $('.lstname_err2').css('display', 'none')


                                $('.password_err_exsist').css('display', 'block')
                                document.querySelector('.lstname_err3').style.display = 'block'

                            }


                        } else {
                            $('.phonenum').css('display', 'none')
                            $('.password_err').css('display', 'none')

                            $('.name_err').css('display', 'none')
                            $('.lstname_err').css('display', 'none')

                            $('.lstname_err2').css('display', 'none')

                            $('.lstname_err3').css('display', 'none')

                            $('.password_err_exsist').css('display', 'block')

                            return
                        }

                    }
                    else {
                        matchedName = true
                        mathchedlst = true
                        $('.password_err_exsist').css('display', 'none')

                        $('.phonenum').css('display', 'block')
                        $('.password_err').css('display', 'none')
                        $('.lstname_err2').css('display', 'none')
                        $('.lstname_err3').css('display', 'none')

                        $('.name_err').css('display', 'none')
                        $('.lstname_err').css('display', 'none')

                        return
                    }

                }



            }
            forgotpass()

        })
    }


    document.querySelector('html').addEventListener('click', (e1) => {
        let qtgroc = e1.target.closest('.for_groc_itm .for_ek_pk_fd .bx_ad_field_qt_num')
        let qtgroc2 = e1.target.closest('.for_groc_itm .for_ek_pk_fd .bx_rem_field_qt_num')
        let rmItm = e1.target.closest('.remove_fd_itm_ct')
        let qtekfd = e1.target.closest('.for_ek_qt .bx_ad_field_qt_num')
        let qtekfd2 = e1.target.closest('.for_ek_qt .bx_rem_field_qt_num')
        let unitgroc = e1.target.closest('.ct_set_qt_for_groc .field_bx_qt')
        let qtcart = e1.target.closest('.ct_bx_quant_itm_cart .bx_ad_field_qt_num')
        let qtcart2 = e1.target.closest('.ct_bx_quant_itm_cart .bx_rem_field_qt_num')
        let grocul = e1.target.closest('.ct_set_qt_for_groc .tog_dpd li')
        if (grocul !== null) {
            let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            let elem = grocul.parentElement.parentElement.parentElement.childNodes
            let p = grocul.childNodes[1].innerText
            let el
            console.log(grocul.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes)
            if (grocul.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[7] !== undefined) {
                el = grocul.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes

            } else {
                el = {}
                el[7] = undefined
            }
            let span = grocul.childNodes[3].innerText
            let qtE = grocul.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[5]
            grocul.parentElement.parentElement.childNodes[1].childNodes[1].innerText = p
            grocul.parentElement.parentElement.childNodes[1].childNodes[3].innerText = span
            let del
            let price
            let addedGrocId1 = []

            let saves
            if (el[7] !== undefined) {
                grocul.parentElement.parentElement.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'


                let id
                let qt = qtE.childNodes[1].childNodes[3].value
                qt = parseFloat(qt)
                if (el.length < 15) {
                    id = el[7].innerText

                } else {
                    id = el[9].innerText
                }

                let saveE
                let off
                let com = el[1].innerText
                let price
                let h4 = el[3].innerText
                let grocs = JSON.parse(localStorage.getItem('grocFoodListCart'))
                grocs.forEach(cur => {
                    if (cur.off !== null && cur.off !== undefined) {
                        if (cur.com !== null) {
                            if (cur.com.split(' ').join('').toLowerCase().trim() === com.split(' ').join('').toLowerCase().trim()
                                && h4.split(' ').join('').toLowerCase().trim() === cur.name.split(' ').join('').toLowerCase().trim()) {
                                off = cur.off.split('%')[0]
                                off = parseFloat(off)
                                price = cur.price
                            }
                            saves = el[11].innerText.split('₹')[1]
                            savEl = el[11]
                        }
                        else {
                            if (h4.split(' ').join('').toLowerCase().trim() === cur.name.split(' ').join('').toLowerCase().trim()) {
                                off = cur.off.split('%')[0]
                                off = parseFloat(off)
                                price = cur.price

                            }
                            saves = el[11].innerText.split('₹')[1]
                            savEl = el[9]

                        }
                    } else {
                        if (cur.com !== null) {
                            if (cur.com.split(' ').join('').toLowerCase().trim() === com.split(' ').join('').toLowerCase().trim() &&
                                h4.split(' ').join('').toLowerCase().trim() === cur.name.split(' ').join('').toLowerCase().trim()) {
                                price = cur.price
                            }
                        }
                        else {
                            if (h4.split(' ').join('').toLowerCase().trim() === cur.name.split(' ').join('').toLowerCase().trim()) {
                                price = cur.price
                                console.log(cur.price)

                            }

                        }
                        off = null
                    }
                })
                let beforeP
                let pF
                if (price.split('₹')[1] !== undefined) {
                    pF = parseFloat(span.split('₹')[1].split(' ').join(''))

                } else {
                    pF = parseFloat(span.split(' ').join(''))

                }
                console.log(pF, price, 'ops', off)

                if (off !== null) {
                    offPrice = pF - (pF * off / 100)
                    offPrice = Math.round(offPrice)
                    let offPriceF = offPrice

                    offPrice = offPrice * qt

                    let pAmount = pF * qt
                    pAmount = Math.round(pAmount)
                    offPriceF = Math.round(offPriceF)
                    beforeP = offPriceF

                    saves = pAmount - offPrice

                    pAmount = pAmount.toLocaleString()
                    offPrice = offPrice.toLocaleString()
                    saves = Math.round(saves)
                    saves.toLocaleString()

                    console.log(savEl, saves)
                    savEl.innerText = 'You saves ₹ ' + saves
                    el[7].childNodes[2].innerText = "₹" + offPrice
                    el[7].childNodes[0].innerText = "₹" + pAmount

                } else {


                    let pAmount = pF * qt
                    beforeP = pF

                    pAmount = pAmount.toLocaleString()
                    el[7].childNodes[2].innerText = "₹" + pAmount
                }

                for (let i1 = 0; i1 < groc.length; i1++) {
                    let cur = groc[i1]
                    let test = document.querySelector('.check_out_btn_order').href
                    test = test.split('=')[1]
                    test = decodeURIComponent(test)

                    test = JSON.parse(test)
                    console.log(id)
                    if (cur.id === id) {
                        cur.priceDel = `₹ ${pF}`

                        cur.price = "₹" + beforeP
                        groc.splice(i1, 1, cur)
                        console.log(groc)
                        localStorage.setItem('grocFoodListCart', JSON.stringify(groc))
                        addBill()
                        test.forEach((e, i) => {
                            let iId = e.split('+')[0]
                            let qt = e.split('+')[1]

                            if (iId === id) {
                                addedGrocId1.push(iId)
                                test.splice(i, 1, iId + "+" + qt + '+' + p + '+' + span)
                                cur.selectedUnit = p
                                cur.selectedPrice = "₹" + span
                                groc.splice(i1, 1, cur)

                                localStorage.setItem('grocFoodListCart', JSON.stringify(groc))

                                document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)

                            }
                        })
                    }
                }

            } else {
                console.log(grocul.parentElement.parentElement.parentElement.childNodes)
                if (grocul.parentElement.parentElement.parentElement.childNodes[13] !== undefined) {
                    el = grocul.parentElement.parentElement.parentElement.childNodes


                    let id
                    let itm
                    id = el[5].innerText



                    let saveE
                    let off
                    if (el[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                        off = el[1].innerText

                    } else {
                        off = null

                    }
                    let price

                    let beforeP
                    let pF
                    console.log(el[13].childNodes[3])

                    if (span.split('₹')[1] !== undefined) {
                        pF = parseFloat(span.split('₹')[1].split(' ').join(''))

                    } else {
                        pF = parseFloat(span.split(' ').join(''))

                    }
                    // console.log(pF, price, 'ops', off)
                    // price=
                    if (off !== null) {
                        off = parseFloat(off.split('%')[0])
                        offPrice = pF - (pF * off / 100)
                        offPrice = Math.round(offPrice)
                        let offPriceF = offPrice

                        offPrice = offPrice

                        let pAmount = pF
                        pAmount = Math.round(pAmount)
                        offPriceF = Math.round(offPriceF)
                        beforeP = offPriceF


                        pAmount = pAmount.toLocaleString()
                        offPrice = offPrice.toLocaleString()
                        console.log(offPrice, pAmount)
                        el[13].childNodes[1].innerText = "₹" + offPrice
                        el[13].childNodes[0].innerText = "₹" + pAmount

                    } else {


                        let pAmount = pF
                        beforeP = pF

                        pAmount = pAmount.toLocaleString()
                        el[13].childNodes[0].innerText = "₹" + pAmount
                    }

                    for (let i1 = 0; i1 < groc.length; i1++) {
                        let cur = groc[i1]

                        if (cur.id === id) {
                            cur.priceDel = `₹ ${pF}`

                            cur.price = "₹" + beforeP
                            cur.selectedUnit = `${p}`

                            cur.selectedPrice = `₹ ${span}`
                            groc.splice(i1, 1, cur)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(groc))







                        }
                    }
                } else {
                    el = grocul.parentElement.parentElement.parentElement.childNodes
                    console.log(el[7].childNodes)

                    let id
                    let itm
                    if (grocul.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3] === undefined) {
                        id = grocul.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].innerText
                    } else {
                        id = grocul.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3].innerText

                    }



                    let saveE
                    let off
                    if (grocul.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                        off = grocul.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText

                    } else {
                        off = null

                    }
                    let com = el[1].innerText
                    let price
                    let h4 = el[3].innerText

                    let beforeP
                    let pF
                    console.log(el[7].childNodes[3])

                    if (span.split('₹')[1] !== undefined) {
                        pF = parseFloat(span.split('₹')[1].split(' ').join(''))

                    } else {
                        pF = parseFloat(span.split(' ').join(''))

                    }
                    console.log(pF, price, 'ops', off)

                    if (off !== null) {
                        off = parseFloat(off.split('%')[0])
                        offPrice = pF - (pF * off / 100)
                        offPrice = Math.round(offPrice)
                        let offPriceF = offPrice

                        offPrice = offPrice

                        let pAmount = pF
                        pAmount = Math.round(pAmount)
                        offPriceF = Math.round(offPriceF)
                        beforeP = offPriceF


                        pAmount = pAmount.toLocaleString()
                        offPrice = offPrice.toLocaleString()
                        console.log(offPrice, pAmount)
                        el[7].childNodes[1].innerText = "₹" + offPrice
                        el[7].childNodes[0].innerText = "₹" + pAmount

                    } else {


                        let pAmount = pF
                        beforeP = pF

                        pAmount = pAmount.toLocaleString()
                        el[7].childNodes[0].innerText = "₹" + pAmount
                    }

                    for (let i1 = 0; i1 < groc.length; i1++) {
                        let cur = groc[i1]

                        if (cur.id === id) {
                            cur.priceDel = `₹ ${pF}`

                            cur.price = "₹" + beforeP
                            cur.selectedUnit = `${p}`

                            cur.selectedPrice = `₹ ${span}`
                            groc.splice(i1, 1, cur)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(groc))







                        }
                    }
                }

            }

        }
        if (unitgroc === null) {
            let rem1 = document.querySelector('.bodyessestials .tog_dpd')
            let rem = document.querySelector('.tog_dpd')
            let rem2 = document.querySelector('.ct_bx_grocery_required .tog_dpd')
            if (rem2) {
                rem.classList.remove('tog_dpd')
                rem.classList.add('not_tog_dpd')
                console.log(rem.parentElement.childNodes)
                rem.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

                return
            }
            if (rem1 !== null) {
                if (rem !== null) {
                    rem.classList.remove('tog_dpd')
                    rem.classList.add('not_tog_dpd')
                    console.log(rem.parentElement.childNodes)
                    rem.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

                }
            } else {
                if (rem !== null) {
                    rem.classList.remove('tog_dpd')
                    rem.classList.add('not_tog_dpd')
                    console.log(rem.parentElement.childNodes)
                    rem.parentElement.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

                }
            }
        }
        if (unitgroc !== null) {
            console.log(unitgroc.parentElement.childNodes)
            if (unitgroc.parentElement.childNodes[7] !== undefined) {
                if (unitgroc.parentElement.childNodes[7].classList.value === 'not_tog_dpd') {
                    let forother = document.querySelector('.selected_field')

                    if (forother !== null) {
                        forother.parentElement.childNodes[7].classList.add('not_tog_dpd')
                        console.log(forother.parentElement.childNodes)
                        forother.parentElement.childNodes[7].classList.remove('tog_dpd')
                        if (forother.parentElement.childNodes[3].childNodes.length === 3) {
                            forother.parentElement.childNodes[3].childNodes[1].remove()

                        } else if (forother.parentElement.childNodes[3].childNodes.length < 3) {
                            forother.parentElement.childNodes[3].childNodes[0].remove()

                        }
                        forother.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

                        forother.classList.remove('selected_field')
                    }
                    unitgroc.parentElement.childNodes[7].classList.remove('not_tog_dpd')
                    unitgroc.parentElement.childNodes[7].classList.add('tog_dpd')
                    unitgroc.classList.remove('unsecleted_field')

                    unitgroc.classList.add('selected_field')
                    if (unitgroc.parentElement.childNodes[3].childNodes.length === 3) {
                        unitgroc.parentElement.childNodes[3].childNodes[1].remove()

                    } else if (unitgroc.parentElement.childNodes[3].childNodes.length < 3) {
                        unitgroc.parentElement.childNodes[3].childNodes[0].remove()

                    }
                    unitgroc.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>'




                } else if (unitgroc.parentElement.childNodes[7].classList.value === 'tog_dpd') {
                    unitgroc.parentElement.childNodes[7].classList.add('not_tog_dpd')
                    unitgroc.parentElement.childNodes[7].classList.remove('tog_dpd')
                    if (unitgroc.parentElement.childNodes[3].childNodes.length === 3) {

                        unitgroc.parentElement.childNodes[3].childNodes[1].remove()

                    } else if (unitgroc.parentElement.childNodes[3].childNodes.length < 3) {
                        unitgroc.parentElement.childNodes[3].childNodes[0].remove()

                    }
                    unitgroc.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'





                }
            } else {

                if (unitgroc.parentElement.childNodes[3].classList.value === 'not_tog_dpd') {
                    let forother = document.querySelector('.selected_field')

                    if (forother !== null) {
                        forother.parentElement.childNodes[3].classList.add('not_tog_dpd')
                        forother.parentElement.childNodes[3].classList.remove('tog_dpd')
                        if (forother.parentElement.parentElement.childNodes[3].childNodes.length === 3) {
                            forother.parentElement.parentElement.childNodes[3].childNodes[1].remove()

                        } else if (forother.parentElement.parentElement.childNodes[3].childNodes.length < 3) {
                            forother.parentElement.parentElement.childNodes[3].childNodes[0].remove()

                        }
                        forother.parentElement.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'

                        forother.classList.remove('selected_field')
                    }
                    unitgroc.parentElement.childNodes[3].classList.remove('not_tog_dpd')
                    unitgroc.parentElement.childNodes[3].classList.add('tog_dpd')
                    unitgroc.classList.remove('unsecleted_field')

                    unitgroc.classList.add('selected_field')
                    if (unitgroc.parentElement.parentElement.childNodes[3].childNodes.length === 3) {
                        unitgroc.parentElement.parentElement.childNodes[3].childNodes[1].remove()

                    } else if (unitgroc.parentElement.childNodes[3].childNodes.length < 3) {
                        unitgroc.parentElement.parentElement.childNodes[3].childNodes[0].remove()

                    }
                    unitgroc.parentElement.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>'




                } else if (unitgroc.parentElement.childNodes[3].classList.value === 'tog_dpd') {
                    unitgroc.parentElement.childNodes[3].classList.add('not_tog_dpd')
                    unitgroc.parentElement.childNodes[3].classList.remove('tog_dpd')

                    if (unitgroc.parentElement.parentElement.childNodes[3].childNodes.length === 3) {

                        unitgroc.parentElement.parentElement.childNodes[3].childNodes[1].remove()

                    } else if (unitgroc.parentElement.parentElement.childNodes[3].childNodes.length < 3) {
                        unitgroc.parentElement.parentElement.childNodes[3].childNodes[0].remove()

                    }
                    unitgroc.parentElement.parentElement.childNodes[3].innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>'





                }
            }

        }
        if (qtgroc2 !== null) {
            let existOrder = JSON.parse(localStorage.getItem('orders'))

            if (existOrder !== null) {
                $('.ct_error_stock').css('display', 'inline-block')
                $('.ct_error_stock').animate({ left: '20px' })
                document.querySelector('.ct_error_stock p').innerText = 'We found an active order on your account ,please click the new order or cancel button of cart to manage quantity of  this item. '
                setTimeout(() => {
                    let floatX = -(window.innerWidth + 100)

                    $('.ct_error_stock').animate({ left: floatX })
                }, 5000)

                return
            }
            if (qtgroc2.parentElement.parentElement.parentElement.childNodes[3] !== undefined && qtgroc2.parentElement.parentElement.parentElement.classList.value.split(' ').includes('itm_food_list_ek')) {
                let floatX = -(window.innerWidth + 100)
                if (window.innerWidth <= 1200) {
                    $('.ct_error_stock.for_grocery_err').animate({ left: floatX })

                } else {
                    $('.ct_error_stock').animate({ right: '-610px' })

                    $('.ct_error_stock').css('display', 'block')

                }
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let el = qtgroc2.parentElement.parentElement.parentElement.childNodes[3]
                let le = qtgroc2.parentElement.parentElement.parentElement.childNodes[3].childNodes[7]
                let stock = parseFloat(le.childNodes[9].innerText)
                let namefd
                let com
                if (le.childNodes[3].childNodes[3] !== undefined) {
                    namefd = le.childNodes[3].childNodes[3].innerText
                    com = le.childNodes[3].childNodes[1].innerText


                } else {
                    namefd = le.childNodes[3].childNodes[1].innerText
                    com = null

                }
                i = parseFloat(qtgroc2.parentElement.childNodes[3].value)

                i--

                if (i <= stock) {

                    if (allfd !== null) {
                        console.log(allfd.length)
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            console.log(cur.name.split(' ').join(''), namefd.split(' ').join(''), i)
                            if (com !== null && cur.com !== null) {
                                if (cur.name.split(' ').join('') === namefd.split(' ').join('') && com === cur.com) {

                                    if (i !== 0) {
                                        cur.qt = i
                                        qtgroc2.parentElement.childNodes[3].value = i

                                        allfd.splice(i1, 1, cur)

                                    } else {
                                        allfd.splice(i1, 1)
                                        qtgroc2.parentElement.parentElement.parentElement.classList.remove('added_itm_ek_fd')
                                        el.childNodes[5].classList.remove('tog_for_ek_pk_fd')

                                        el.childNodes[5].classList.add('not_for_ek_pk_fd')
                                    }
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))





                                }
                            } else {
                                if (cur.name.split(' ').join('') === namefd.split(' ').join('')) {

                                    if (i !== 0) {
                                        cur.qt = i
                                        qtgroc2.parentElement.childNodes[3].value = i

                                        allfd.splice(i1, 1, cur)

                                    } else {
                                        allfd.splice(i1, 1)
                                        qtgroc2.parentElement.parentElement.parentElement.classList.remove('added_itm_ek_fd')
                                        el.childNodes[5].classList.remove('tog_for_ek_pk_fd')

                                        el.childNodes[5].classList.add('not_for_ek_pk_fd')
                                    }
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))





                                }
                            }

                        }


                    }

                }

            }
            else {
                // return
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let el = qtgroc2.parentElement.parentElement.parentElement.childNodes[1]

                let le = qtgroc2.parentElement.parentElement.parentElement.childNodes[1].childNodes[7]
                let floatX = -(window.innerWidth + 100)

                $('.ct_error_stock.for_grocery_err').animate({ left: floatX })
                console.log(le.childNodes[3].childNodes[3])
                let stock = parseFloat(le.childNodes[9].innerText)
                let i = parseFloat(qtgroc2.parentElement.childNodes[3].value)
                i--
                let namefd
                let com
                if (le.childNodes[3].childNodes[3] !== undefined) {
                    namefd = le.childNodes[3].childNodes[3].innerText
                    com = le.childNodes[3].childNodes[1].innerText


                } else {
                    namefd = le.childNodes[3].childNodes[1].innerText
                    com = null

                }
                if (i <= stock) {

                    if (allfd !== null) {
                        console.log(allfd.length)
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            console.log(cur.name.split(' ').join(''), namefd.split(' ').join(''), i)
                            if (com !== null && cur.com !== null) {
                                if (cur.name.split(' ').join('') === namefd.split(' ').join('') && com === cur.com) {

                                    if (i !== 0) {
                                        cur.qt = i
                                        qtgroc2.parentElement.childNodes[3].value = i

                                        allfd.splice(i1, 1, cur)

                                    } else {
                                        allfd.splice(i1, 1)
                                        qtgroc2.parentElement.parentElement.parentElement.classList.remove('added_itm_ek_fd')
                                        el.childNodes[5].classList.remove('tog_for_ek_pk_fd')

                                        el.childNodes[5].classList.add('not_for_ek_pk_fd')
                                    }
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))





                                }
                            } else {
                                if (cur.name.split(' ').join('') === namefd.split(' ').join('')) {

                                    if (i !== 0) {
                                        cur.qt = i
                                        qtgroc2.parentElement.childNodes[3].value = i

                                        allfd.splice(i1, 1, cur)

                                    } else {
                                        allfd.splice(i1, 1)
                                        qtgroc2.parentElement.parentElement.parentElement.classList.remove('added_itm_ek_fd')
                                        el.childNodes[5].classList.remove('tog_for_ek_pk_fd')

                                        el.childNodes[5].classList.add('not_for_ek_pk_fd')
                                    }
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))





                                }
                            }

                        }


                    }

                }

            }

        }
        const checkTagName = (elem, tag) => {
            let h14
            elem.forEach(cur => {
                console.log(cur)
                if (cur.tagName !== undefined) {
                    if (cur.tagName === tag) {
                        console.log(cur.innerText)
                        h14 = cur.innerText
                    }
                }
            })
            return h14

        }
        let addedGrocCart2 = []
        if (rmItm !== null) {

            let h4
            if (rmItm.parentElement.parentElement.childNodes[9] !== undefined) {
                console.log(rmItm.parentElement.parentElement.childNodes)
                let href = rmItm.parentElement.parentElement.childNodes[3].href.split('product')[1].split('?')[1]

                h4 = checkTagName(rmItm.parentElement.parentElement.childNodes[9].childNodes, 'H4')
                console.log(h4)
                h4 = h4.split(' ').join('').toLowerCase()            // console.log(href)
                // return
                let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
                let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                if (allfd !== null) {

                    for (let i1 = 0; i1 < allfd.length; i1++) {
                        let cur = allfd[i1]
                        if (cur.href === href) {

                            allfd.splice(i1, 1)
                            localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                            rmItm.parentElement.parentElement.remove()
                            addBill()
                            addedGrocFull.forEach(c => {
                                if (h4 === c.name.split(' ').join('').toLowerCase()) {
                                    c.itm.forEach(p => {
                                        addedGrocCart2.push(p)
                                    })
                                }
                            })
                            console.log(allfd)
                            if (allfd.length !== 0) {
                                if (addedGrocCart2.length !== 0) {
                                    for (let i = 0; i < addedGrocCart2.length; i++) {
                                        let cu = addedGrocCart2[i]

                                        if (!bothHave.includes(cu.callName)) {
                                            document.querySelectorAll('.ct_bx_all_groc_required .itm_food_list_ek').forEach(cur => {
                                                if (cur.childNodes[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                                                    if (cur.childNodes[7].childNodes[1].innerText !== undefined) {
                                                        if (cur.childNodes[7].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                            cur.remove()
                                                        }
                                                    } else {
                                                        if (cur.childNodes[7].childNodes[2].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                            cur.remove()

                                                        }
                                                    }

                                                } else {
                                                    if (cur.childNodes[6].childNodes[1].innerText !== undefined) {
                                                        if (cur.childNodes[6].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                            cur.remove()

                                                        }
                                                    } else {
                                                        if (cur.childNodes[6].childNodes[2].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                            cur.remove()

                                                        }
                                                    }
                                                }
                                            })
                                            break
                                        }
                                    }




                                }
                                break
                            } else {
                                if (groc.length === 0 && allfd.length === 0) {
                                    document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                                    document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'
                                    document.querySelector('.block_2_charge span').innerHTML = '&mdash;'

                                    document.querySelector('.for_cart_checkout').style.opacity = .5

                                    document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
                                    // document.querySelector('.ct_verif_bx').style.display = 'none'
                                }
                                document.querySelector('.for_ek_food_cart').style.display = 'block'
                                document.querySelector('.ct_bx_grocery_required').style.display = 'none'
                            }
                        }


                    }
                }
            } else {
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let id
                let allfd2 = JSON.parse(localStorage.getItem('foodsAdded'))
                console.log(rmItm.parentElement.parentElement.childNodes[1].childNodes[7])
                // return
                let elem = rmItm.parentElement.parentElement.childNodes[1].childNodes[7].childNodes

                id = elem[9].innerText
                console.log(id)

                // checkTagName(elem,)






                let test = document.querySelector('.check_out_btn_order').href
                test = test.split('=')[1]
                test = decodeURIComponent(test)
                test = JSON.parse(test)

                console.log(test)
                if (test.length !== 0) {
                    for (let i1 = 0; i1 < allfd.length; i1++) {
                        let cur = allfd[i1]
                        if (cur.id === id) {
                            test.forEach((e, i) => {
                                let iId = e.split('+')[0]
                                console.log(iId, id)
                                if (iId === id) {
                                    console.log(test)

                                    console.log('remove at', i)

                                    test.splice(i, 1)
                                    console.log(test)
                                    // console.log(cur.id)
                                    document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)
                                }
                            })
                        }
                    }
                }


                if (allfd !== null) {

                    for (let i1 = 0; i1 < allfd.length; i1++) {
                        let cur = allfd[i1]
                        if (cur.id === id) {

                            allfd.splice(i1, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))
                            rmItm.parentElement.parentElement.remove()
                            addBill()
                            if (allfd2.length === 0 && allfd.length === 0) {
                                document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                                document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'
                                document.querySelector('.block_2_charge span').innerHTML = '&mdash;'

                                document.querySelector('.for_cart_checkout').style.opacity = .5

                                document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
                                // document.querySelector('.ct_verif_bx').style.display = 'none'
                            }
                            if (allfd.length === 0) {
                                document.querySelector('.for_ek_groc_cart').style.display = 'block'

                            }

                            break
                        }



                    }
                }


            }

        }
        let addedGrocCart = []
        let addedGrocId = []
        if (qtcart2 !== null) {
            if (qtcart2.parentElement.parentElement.parentElement.childNodes[9] !== undefined) {

                let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
                let href = qtcart2.parentElement.parentElement.parentElement.childNodes[3].href.split('product')[1].split('?')[1]
                let h4
                qtcart2.parentElement.parentElement.parentElement.childNodes[9].childNodes.forEach(cur => {
                    if (cur.tagName !== undefined) {
                        if (cur.tagName === 'H4') {
                            h4 = cur.innerText
                        }
                    }
                })


                let i = parseFloat(qtcart2.parentElement.childNodes[3].value)
                i--
                let off
                JSON.parse(localStorage.getItem('foodsAdded')).forEach(Cur => {
                    console.log(Cur.data.item)
                    let itm = Cur.data.item
                    if (Cur.data.item.name === h4) {
                        off = itm.offer
                        p = itm.price
                    }
                })
                qt = parseFloat(qtcart2.parentElement.childNodes[3].value)
                document.querySelector('.carterr').style.display = 'none'

                if (i !== 0) {
                    qtcart2.parentElement.childNodes[3].value = i
                    let del
                    let p
                    let itm = qtcart2.parentElement.parentElement.parentElement.childNodes[9].childNodes[7].childNodes
                    if (itm[0].tagName !== undefined) {
                        del = itm[0].innerText
                        p = itm[2].innerText
                    } else {
                        del = null
                        p = itm[1].innerText
                    }
                    // return
                    console.log(del)
                    if (del !== null) {
                        del = parseFloat(del.split('₹')[1].split(',').join(''))
                        let beforeDel = del

                        console.log(beforeDel)

                        del = beforeDel - Math.round(del / (qt))

                        p = Math.round(del - (parseFloat(off) * del / 100))
                        let saves = del - p

                        del = del.toLocaleString()
                        p = p.toLocaleString()
                        itm[2].innerText = '₹' + p
                        itm[0].innerText = '₹' + del
                        saves = Math.round(saves)
                        qtcart2.parentElement.parentElement.parentElement.childNodes[9].childNodes[9].innerText = "You saves ₹ " + saves
                    } else {
                        p = parseFloat(p.split('₹')[1].split(',').join(''))
                        let beforeP = p
                        p = p.toLocaleString()
                        p = beforeP - Math.round(p / (qt))
                        itm[1].innerText = '₹' + p
                    }

                    if (allfd !== null) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            if (cur.href === href) {
                                cur.qt = i

                                let test = document.querySelector('.check_out_btn_order').href
                                test = test.split('=')[1]
                                test = decodeURIComponent(test)
                                test = JSON.parse(test)
                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    console.log(e)

                                    if (iId === cur.id) {

                                        test.splice(i, 1, iId + "+" + cur.qt)
                                        console.log(test)

                                        // console.log(cur.id)
                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)
                                    }
                                })

                                allfd.splice(i1, 1)
                                allfd.push(cur)

                                localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                                break
                            }

                        }
                    }
                } else {
                    let test = document.querySelector('.check_out_btn_order').href
                    test = test.split('=')[1]
                    test = decodeURIComponent(test)
                    test = JSON.parse(test)

                    console.log(test)
                    if (test.length !== 0) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]

                            if (cur.href === href) {
                                cur.qt = i
                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    if (iId === cur.id) {
                                        test.splice(i, 1)
                                        console.log(test)

                                        // console.log(cur.id)
                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)
                                    }
                                })
                            }
                        }
                    }

                    addedGrocFull.forEach(c => {
                        if (h4 === c.name.split(' ').join('').toLowerCase()) {
                            c.itm.forEach(p => {
                                addedGrocCart.push(p)
                                console.log(addedGrocCart)
                            })
                        }
                    })
                    if (addedGrocCart.length !== 0) {
                        console.log(addedGrocFull)
                        for (let i = 0; i < addedGrocCart.length; i++) {
                            let cu = addedGrocCart[i]

                            if (!bothHave.includes(cu.callName)) {

                                console.log(cu)
                                document.querySelectorAll('.ct_bx_all_groc_required .itm_food_list_ek').forEach(cur => {
                                    if (cur.childNodes[1].classList.value.split(' ').includes('ct_offer_box_cook2')) {
                                        if (cur.childNodes[7].childNodes[3] !== undefined) {
                                            if (cur.childNodes[7].childNodes[1].innerText !== undefined) {
                                                if (cur.childNodes[7].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()
                                                }
                                            } else {
                                                if (cur.childNodes[7].childNodes[2].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()

                                                }
                                            }
                                        } else {
                                            if (cur.childNodes[9].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                cur.remove()
                                            }


                                        }


                                    } else {
                                        if (cur.childNodes[6].childNodes[1] !== undefined) {
                                            if (cur.childNodes[6].childNodes[1].innerText !== undefined) {
                                                if (cur.childNodes[6].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()

                                                }
                                            } else {
                                                if (cur.childNodes[6].childNodes[2].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()

                                                }
                                            }
                                        } else {
                                            console.log(cur.childNodes)
                                            if (cur.childNodes[8].childNodes[1] !== undefined) {
                                                if (cur.childNodes[8].childNodes[3].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()

                                                }
                                            } else {
                                                if (cur.childNodes[7].childNodes[1].innerText.split(' ').join('').toLowerCase() === cu.name.split(' ').join('').toLowerCase()) {
                                                    cur.remove()

                                                }
                                            }
                                        }

                                    }
                                })
                                break
                            }
                        }




                    }
                    if (allfd !== null) {

                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            console.log(allfd)
                            if (cur.href === href) {

                                allfd.splice(i1, 1)
                                localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                                qtcart2.parentElement.parentElement.parentElement.remove()
                                if (allfd.length === 0) {
                                    document.querySelector('.for_ek_food_cart').style.display = 'block'
                                    // document.querySelector('.ct_bx_grocery_required').style.display = 'none'

                                }

                                break
                            }



                        }
                    }
                }
                addBill()

            } else {
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let id
                let elem = qtcart2.parentElement.parentElement.parentElement.childNodes[7].childNodes


                let itm = elem[7]
                let saves
                elem.forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('saved_am')) {
                            saves = cur

                        }
                    }
                })
                console.log(elem)
                let i = parseFloat(qtcart2.parentElement.childNodes[3].value)
                i--
                let qt = parseFloat(qtcart2.parentElement.childNodes[3].value)
                let del
                let p
                document.querySelector('.carterr').style.display = 'none'
                if (i !== 0) {
                    qtcart2.parentElement.childNodes[3].value = i

                    if (elem[3].tagName !== undefined) {
                        if (itm.childNodes[2] !== undefined) {
                            id = elem[9].innerText

                            if (itm.childNodes[0].innerText !== "") {
                                p = itm.childNodes[2].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))

                                del = itm.childNodes[0].innerText
                                console.log(p, del)
                                del = del.split('₹')[1].split(',').join('')
                                del = parseFloat(del)


                                del = del - Math.round(parseFloat(del / (qt)))
                                p = p - Math.round(p / (qt))

                                saves.innerText = 'You saves ₹ ' + (del - p)


                                del = del.toLocaleString()
                                itm.childNodes[0].innerText = "₹" + del


                                p = p.toLocaleString()

                                // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                                itm.childNodes[2].innerText = "₹" + p
                            } else {
                                p = itm.childNodes[2].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                p = p - Math.round(p / (qt))
                                p = p.toLocaleString()

                                // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                                itm.childNodes[2].innerText = "₹" + p
                            }
                        } else {

                            id = elem[9].innerText
                            p = itm.childNodes[2].innerText
                            p = parseFloat(p.split('₹')[1].split(',').join(''))
                            p = p - Math.round(p / (qt))
                            p = p.toLocaleString()

                            // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                            itm.childNodes[2].innerText = "₹" + p
                        }
                    } else {

                        id = elem[9].innerText
                        if (itm.childNodes[2] !== undefined) {
                            if (itm.childNodes[2].innerText !== undefined) {
                                p = itm.childNodes[2].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                del = itm.childNodes[0].innerText

                                if (del.split('₹')[1] !== undefined) {
                                    del = del.split('₹')[1].split(',').join('')
                                    del = del - Math.round(parseFloat(del / (qt)))
                                    del = del.toLocaleString()
                                    itm.childNodes[0].innerText = "₹" + del

                                }


                                p = p - Math.round(p / (qt))
                                p = p.toLocaleString()

                                // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                                itm.childNodes[2].innerText = "₹" + p
                            } else {
                                p = itm.childNodes[1].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                p = p - Math.round(p / (qt))
                                p = p.toLocaleString()

                                // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                                itm.childNodes[1].innerText = "₹" + p

                            }

                        } else {
                            p = itm.childNodes[0].innerText
                            p = parseFloat(p.split('₹')[1].split(',').join(''))
                            p = p - Math.round(p / (qt))
                            p = p.toLocaleString()

                            // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                            itm.childNodes[0].innerText = "₹" + p
                        }
                    }
                    console.log(id)
                    if (allfd !== null) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            let test = document.querySelector('.check_out_btn_order').href
                            test = test.split('=')[1]
                            test = decodeURIComponent(test)

                            test = JSON.parse(test)

                            console.log(test)
                            if (cur.id === id) {
                                cur.qt = i

                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    let unit = e.split('+')[2]
                                    let unitP = e.split('+')[3]

                                    if (iId === id) {
                                        addedGrocId.push(iId)
                                        test.splice(i, 1, iId + "+" + cur.qt + '+' + unit + '+' + unitP)

                                        console.log(test)
                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)


                                    }
                                })
                                allfd.splice(i1, 1)
                                allfd.push(cur)
                                localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))
                                break

                            }
                        }
                    }
                    addBill()

                } else {
                    console.log(elem)
                    if (elem[1].tagName.toLowerCase() === 'span') {
                        id = elem[9].innerText
                    } else {
                        id = elem[9].innerText

                    }
                    let test = document.querySelector('.check_out_btn_order').href
                    test = test.split('=')[1]
                    test = decodeURIComponent(test)
                    test = JSON.parse(test)

                    if (test.length !== 0) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            if (cur.id === id) {
                                cur.qt = i
                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    console.log(iId, id)
                                    if (iId === id) {
                                        console.log(test)

                                        console.log('remove at', i)

                                        test.splice(i, 1)
                                        console.log(test)
                                        // console.log(cur.id)
                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)
                                    }
                                })
                            }
                        }
                    }


                    if (allfd !== null) {

                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            if (cur.id === id) {

                                allfd.splice(i1, 1)
                                localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))
                                qtcart2.parentElement.parentElement.parentElement.parentElement.remove()
                                if (allfd.length === 0) {
                                    document.querySelector('.for_ek_groc_cart').style.display = 'block'

                                }

                                break
                            }



                        }
                    }
                    addBill()

                }


            }
        }
        if (qtcart !== null) {
            if (qtcart.parentElement.parentElement.parentElement.childNodes[9] !== undefined) {
                let h4
                qtcart.parentElement.parentElement.parentElement.childNodes[9].childNodes.forEach(cur => {
                    if (cur.tagName !== undefined) {
                        if (cur.tagName === 'H4') {
                            h4 = cur.innerText
                        }
                    }
                })
                let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
                let href = qtcart.parentElement.parentElement.parentElement.childNodes[3].href.split('product')[1].split('?')[1]

                let stock = qtcart.parentElement.parentElement.parentElement.childNodes[7].innerText

                let i = parseFloat(qtcart.parentElement.childNodes[3].value)
                i++
                let off
                JSON.parse(localStorage.getItem('foodsAdded')).forEach(Cur => {
                    console.log(Cur.data.item)
                    let itm = Cur.data.item
                    if (Cur.data.item.name === h4) {
                        off = itm.offer
                        p = itm.price
                    }
                })
                console.log(p)
                if (i <= stock) {
                    qtcart.parentElement.childNodes[3].value = i
                    let qt = parseFloat(qtcart.parentElement.childNodes[3].value)
                    if (allfd !== null) {
                        let del
                        let itm = qtcart.parentElement.parentElement.parentElement.childNodes[9].childNodes[7].childNodes
                        // if (itm[0].tagName !== undefined) {
                        //     del = itm[0].innerText
                        //     p = itm[2].innerText
                        // } else {
                        //     del = null
                        //     p = itm[1].innerText
                        // }
                        if (del !== null) {


                            p = (parseFloat(p.split('₹')[1].split(',').join(''))) * qt
                            let offerP = p - (p * (off / 100))
                            p = Math.round(p)
                            offerP = Math.round(offerP)

                            console.log(offerP)
                            let saves = p - offerP
                            saves = Math.round(saves)
                            offerP = offerP.toLocaleString()
                            p = p.toLocaleString()
                            itm[2].innerText = '₹' + offerP
                            itm[0].innerText = '₹' + p
                            qtcart.parentElement.parentElement.parentElement.childNodes[9].childNodes[9].innerText = "You saves ₹ " + saves
                        } else {
                            p = Math.round(parseFloat(p.split('₹')[1].split(',').join('') / (qt - 1))) * qt
                            p = p.toLocaleString()

                            p = p.toLocaleString()
                            itm[1].innerText = '₹' + p
                        }

                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            let test = document.querySelector('.check_out_btn_order').href
                            test = test.split('=')[1]
                            test = decodeURIComponent(test)
                            console.log(test)

                            test = JSON.parse(test)


                            if (cur.href === href) {
                                cur.qt = i
                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    if (iId === cur.id) {

                                        test.splice(i, 1, iId + "+" + cur.qt)

                                        console.log(test)
                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)
                                    }
                                })
                                allfd.splice(i1, 1)
                                allfd.push(cur)
                                localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                                break

                            }
                        }
                    }
                    addBill()

                } else {
                    document.querySelector('.carterr').style.display = 'flex'
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    document.querySelector('.carterr p').innerText = `We donot have more than ${stock} items left in your stock.Please try again later`
                }
            } else {
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let id
                let elem = qtcart.parentElement.parentElement.parentElement.childNodes[7].childNodes
                console.log(elem)
                let saves
                let itm = elem[7]
                elem.forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('saved_am')) {
                            saves = cur

                        }
                    }
                })



                let stock = qtcart.parentElement.parentElement.parentElement.parentElement.childNodes[3].innerText

                let i = parseFloat(qtcart.parentElement.childNodes[3].value)
                i++
                if (i <= stock) {
                    qtcart.parentElement.childNodes[3].value = i

                    let qt = parseFloat(qtcart.parentElement.childNodes[3].value)
                    console.log(elem)
                    let elem1

                    elem1 = elem[1]
                    console.log(elem1.tagName)
                    if (elem1.tagName !== undefined) {

                        if (itm.childNodes[2] !== undefined) {
                            if (elem[9].innerText !== undefined) {
                                id = elem[9].innerText

                            } else {
                                id = elem[10].innerText
                            }
                            if (itm.childNodes[0].innerText !== '') {
                                let p = itm.childNodes[2].innerText
                                console.log(itm.childNodes)
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                let del = itm.childNodes[0].innerText
                                del = Math.round(parseFloat(del.split('₹')[1].split(',').join('') / (qt - 1))) * qt

                                p = Math.round(p / (qt - 1)) * qt
                                let saved = del - p

                                del = del.toLocaleString()
                                p = p.toLocaleString()
                                saves.innerText = 'You saves ₹ ' + saved
                                itm.childNodes[0].innerText = "₹" + del
                                itm.childNodes[2].innerText = "₹" + p
                            } else {
                                let p = itm.childNodes[2].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                p = Math.round(p / (qt - 1)) * qt
                                p = p.toLocaleString()

                                // console.log(Math.round(parseFloat(del.split('₹')[1].split(',').join(''))/(qt-1)) ,qt)
                                itm.childNodes[2].innerText = "₹" + p
                            }
                        }
                    } else {

                        if (itm.childNodes[2] !== undefined) {
                            if (itm.childNodes[2].innerText !== '') {
                                let p = itm.childNodes[2].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                let del = itm.childNodes[0].innerText
                                del = Math.round(parseFloat(del.split('₹')[1].split(',').join('') / (qt - 1))) * qt
                                p = Math.round(p / (qt - 1)) * qt
                                del = del.toLocaleString()
                                p = p.toLocaleString()

                                itm.childNodes[0].innerText = "₹" + del
                                itm.childNodes[2].innerText = "₹" + p
                            } else {
                                let p = itm.childNodes[1].innerText
                                p = parseFloat(p.split('₹')[1].split(',').join(''))
                                p = Math.round(p / (qt - 1)) * qt
                                p = p.toLocaleString()
                                itm.childNodes[2].innerText = "₹" + p

                            }

                        }
                    }

                    if (allfd !== null) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            let test = document.querySelector('.check_out_btn_order').href
                            test = test.split('=')[1]
                            test = decodeURIComponent(test)

                            test = JSON.parse(test)
                            if (cur.id === id) {
                                cur.qt = i
                                test.forEach((e, i) => {
                                    let iId = e.split('+')[0]
                                    let unit = e.split('+')[2]
                                    let unitP = e.split('+')[3]

                                    if (iId === id) {
                                        addedGrocId.push(iId)
                                        test.splice(i, 1, iId + "+" + cur.qt + '+' + unit + '+' + unitP)

                                        document.querySelector('.check_out_btn_order').setAttribute('href', `?item=${JSON.stringify(test)}`)


                                    }
                                })
                                allfd.splice(i1, 1)
                                allfd.push(cur)
                                localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))
                                addBill()

                                break

                            }
                        }
                    }

                } else {
                    document.querySelector('.carterr').style.display = 'flex'
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    document.querySelector('.carterr p').innerText = `We donot have more than ${stock} items left in your stock.Please try again later`
                }
            }
        }
        if (qtekfd2 !== null) {
            let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]


            let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
            i = parseFloat(qtekfd2.parentElement.childNodes[3].value)
            i--



            if (i !== 0) {
                qtekfd2.parentElement.childNodes[3].value = i
                for (let i1 = 0; i1 < allfd.length; i1++) {
                    let cur = allfd[i1]
                    if (cur.id === token) {
                        cur.qt = i
                        console.log(allfd)

                        allfd.splice(i1, 1)
                        allfd.push(cur)
                        console.log(allfd)
                        localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                        break
                    }
                }
            } else {
                document.querySelectorAll('.select').forEach(cur => {
                    cur.style.opacity = 1
                    cur.style['pointer-events'] = 'auto'
                })

                if (document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.value.split(' ').includes('added_to_cart')) {
                    document.querySelectorAll('.added_to_cart').forEach(c => {
                        c.remove('added_to_cart')
                    })

                    let hm = `<button class="bx_add_t_cart_btn_itm_dt">
                    <span>
                        <ion-icon name="cart" role="img" class="md hydrated" aria-label="cart"></ion-icon> &thinsp; Add to Cart
                    </span>
                    <p>Added to Cart</p>
                    </button>
                    <a class="bx_buy_now" href="/mycart"> <span>Buy now</span>
                    <p>Added to Cart</p>
                    </a>`
                    let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
                    let jwt = parseJwt(token)
                    document.querySelector('.ct_bx_acct_cart').insertAdjacentHTML('beforeend', hm)
                    document.querySelector('.ct_bx_messgae').style.display = 'block'

                    document.querySelector('.ct_bx_messgae p').innerText = `${jwt.item.name} successfully removed from the Cart`
                    setTimeout(() => {
                        $('.ct_bx_messgae').fadeOut()

                    }, 2000)
                }
                console.log(allfd)

                for (let i1 = 0; i1 < allfd.length; i1++) {
                    let cur = allfd[i1]
                    if (cur.id === token) {

                        cur.qt = i
                        allfd.splice(i1, 1)
                        console.log(allfd)
                        if (allfd === undefined) {
                            allfd = []
                        }
                        localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                        let jwt = parseJwt(token)
                        if (window.innerWidth < 1200) {
                            $('.ct_error_stock.for_items').css('display', 'block')
                            $('.ct_error_stock.for_items ion-icon').css('color', 'rgb(82, 235, 77)')

                            $('.ct_error_stock.for_items').animate({ left: '20px' })
                            document.querySelector('.ct_error_stock.for_items p').innerText = `${jwt.item.name} successfully removed from the  Cart`
                        } else {
                            $('.ct_error_stock.for_items').css('display', 'block')

                            $('.ct_error_stock.for_items ion-icon').css('color', 'rgb(82, 235, 77)')
                            document.querySelector('.ct_error_stock.for_items p').innerText = `${jwt.item.name} successfully  removed from the  Cart`

                        }
                        window.scrollTo(0, 250)

                        document.querySelector('.bx_add_t_cart_btn_itm_dt p').style.display = 'none'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'block'

                        document.querySelector('.bx_buy_now p').style.display = 'none'

                        document.querySelector('.bx_buy_now span').style.display = 'block'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.remove('added_to_cart')

                        document.querySelector('.bx_buy_now').classList.remove('added_to_cart')

                        break
                    }
                }

            }








        }
        if (qtekfd !== null) {
            let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]


            let allfd = JSON.parse(localStorage.getItem('foodsAdded'))

            let oQ = window.location.search.split('?')[1].split('&')

            let stock = parseFloat(oQ[2].split('=')[1])

            let i = parseFloat(qtekfd.parentElement.childNodes[3].value)
            i++
            if (i <= stock) {
                qtekfd.parentElement.childNodes[3].value = i
                if (allfd !== null) {
                    for (let i1 = 0; i1 < allfd.length; i1++) {
                        let cur = allfd[i1]
                        if (cur.id === token) {
                            cur.qt = i
                            console.log(allfd)

                            allfd.splice(i1, 1)
                            allfd.push(cur)
                            console.log(allfd)
                            localStorage.setItem('foodsAdded', JSON.stringify(allfd))
                            break
                        }
                    }
                }
            } else {
                document.querySelector('.ct_bx_show_out_of_stk.for_stock_err h3').innerText = `We donot have more than ${stock} items left on our stock, please try again later`

                if (window.innerWidth < 1200) {
                    let floatX = -(window.innerWidth + 100)

                    $('.ct_error_stock.for_items').animate({ left: floatX })
                } else {
                    $('.ct_error_stock.for_items').css('display', 'none')


                }
                document.querySelector('.ct_bx_show_out_of_stk.for_stock_err').style.display = 'block'

                $('.ct_bx_show_out_of_stk.for_stock_err').animate({ right: '10px' })


            }





        }


        if (qtgroc !== null) {
            let existOrder = JSON.parse(localStorage.getItem('orders'))

            if (existOrder !== null) {
                $('.ct_error_stock').css('display', 'block')
                $('.ct_error_stock').animate({ left: '20px' })
                document.querySelector('.ct_error_stock p').innerText = 'We found an active order on your account ,please click the new order or cancel button of cart to manage quantity of  this item. '
                setTimeout(() => {
                    let floatX = -(window.innerWidth + 100)

                    $('.ct_error_stock').animate({ left: floatX })
                }, 5000)

                return
            }
            if (qtgroc.parentElement.parentElement.parentElement.childNodes[3] !== undefined && qtgroc.parentElement.parentElement.parentElement.classList.value.split(' ').includes('itm_food_list_ek')) {
                let floatX = -(window.innerWidth + 100)
console.log(qtgroc.parentElement.parentElement.childNodes)
                let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let le = qtgroc.parentElement.parentElement.childNodes[7]
                let stock = parseFloat(le.childNodes[9].innerText)
                let namefd
                let com
                console.log(le.childNodes[1].childNodes,'elon')

                if (le.childNodes[1].childNodes[3] !== undefined) {
                    namefd = le.childNodes[1].childNodes[3].innerText
                    com = le.childNodes[1].childNodes[1].innerText


                } else {
                    namefd = le.childNodes[3].childNodes[1].innerText
                    com = null

                }
                i = parseFloat(qtgroc.parentElement.childNodes[3].value)

                i++

                if (i <= stock) {

                    qtgroc.parentElement.childNodes[3].value = i
                    if (allfd !== null) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            console.log(cur.name, namefd)
                            if (cur.name.split(' ').join('') === namefd.split(' ').join('')) {
                                cur.qt = i
                                allfd.splice(i1, 1)

                                allfd.push(cur)


                                localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))

                            }
                        }


                    }

                }
                else {
                    
                    qtgroc.style['pointer-events'] = 'none'
                    document.querySelector('.ct_error_stock.for_grocery_err').style.display = 'block'

                    if (window.innerWidth <= 1200) {
                        $('.ct_error_stock.for_grocery_err').animate({ left: '20px' })

                    } else {
                        $('.ct_error_stock').animate({ right: '310px' })

                        $('.ct_error_stock').css('display', 'block')

                    }
                    setTimeout(() => {

                        if (window.innerWidth <= 1200) {
                            $('.ct_error_stock.for_grocery_err').animate({ left: floatX })

                        } else {
                            $('.ct_error_stock').animate({ right: '-610px' })

                            $('.ct_error_stock').css('display', 'block')

                        }
                        qtgroc.style['pointer-events'] = 'auto'

                    }, 4000)
                    document.querySelector('.ct_error_stock.for_grocery_err .ct_inner_msg p').innerText = ` ${namefd} has only ${stock} items left in the stock please try again later.`

                }
            }

            else {
                let le = qtgroc.parentElement.childNodes[1].childNodes[7]
                console.log(le.childNodes[1].childNodes,'elon')

                document.querySelector('.ct_error_stock.for_grocery_err ').style.display = 'none'
                let stock = parseFloat(le.childNodes[9].innerText)
                let i = parseFloat(qtgroc.parentElement.childNodes[3].value)
                i++
                let namefd
                let com

                if (le.childNodes[3].childNodes[3] !== undefined) {
                    namefd = le.childNodes[3].childNodes[3].innerText
                    com = le.childNodes[3].childNodes[1].innerText


                } else {
                    namefd = le.childNodes[3].childNodes[1].innerText
                    com = null

                }
                if (i <= stock) {
                    let allfd = JSON.parse(localStorage.getItem('grocFoodListCart'))
                    qtgroc.parentElement.childNodes[3].value = i

                    if (allfd !== null) {
                        for (let i1 = 0; i1 < allfd.length; i1++) {
                            let cur = allfd[i1]
                            if (cur.name === namefd) {
                                cur.qt = i

                                allfd.splice(i1, 1)

                                allfd.push(cur)
                                if (com !== null) {
                                    document.querySelectorAll('.for_foods_grocery_cart li').forEach(li => {
                                        let name = checkChar(namefd, 14)
                                        console.log(li.childNodes[3].childNodes[3].innerText.toLowerCase() === name.toLowerCase(), li.childNodes[3].childNodes[1].innerText.toLowerCase(), com.toLowerCase())
                                        if (li.childNodes[3].childNodes[3].innerText.toLowerCase() === name.toLowerCase() && li.childNodes[3].childNodes[1].innerText.toLowerCase() === com.toLowerCase()) {
                                            li.childNodes[3].childNodes[5].innerText = cur.qt
                                        }
                                    })
                                } else {
                                    document.querySelectorAll('.for_foods_grocery_cart li').forEach(li => {
                                        let name = checkChar(namefd, 14)

                                        if (li.childNodes[3].childNodes[1].innerText.toLowerCase() === name.toLowerCase()) {
                                            li.childNodes[3].childNodes[3].innerText = cur.qt
                                        }
                                    })
                                }

                                localStorage.setItem('grocFoodListCart', JSON.stringify(allfd))

                            }
                        }


                    }
                } else {
                    qtgroc.style['pointer-events'] = 'none'
                    document.querySelector('.ct_error_stock.for_grocery_err').style.display = 'block'

                    if (window.innerWidth <= 1200) {
                        $('.ct_error_stock.for_grocery_err').animate({ left: '20px' })

                    } else {
                        $('.ct_error_stock').animate({ right: '310px' })

                        $('.ct_error_stock').css('display', 'block')

                    }
                    setTimeout(() => {

                        if (window.innerWidth <= 1200) {
                            $('.ct_error_stock.for_grocery_err').animate({ left: floatX })

                        } else {
                            $('.ct_error_stock').animate({ right: '-610px' })

                            $('.ct_error_stock').css('display', 'block')

                        }
                        qtgroc.style['pointer-events'] = 'auto'

                    }, 4000)
                    document.querySelector('.ct_error_stock.for_grocery_err .ct_inner_msg p').innerText = ` ${namefd} has only ${stock} items left in the stock please try again later.`

                }

            }
        }
    })
    let ratNum = 0
    document.querySelectorAll('.ct_rate_star_wrapper label').forEach(cur => {
        cur.addEventListener('click', () => {
            console.log(cur.getAttribute('for').split('st')[1])
            ratNum = cur.getAttribute('for').split('st')[1]
            ratNum = parseFloat(ratNum)
            console.log(ratNum)


        })
    })
    let revArr = []
    if (document.querySelector('.ct_bx_rt_rv_bx .for_submit_form_rev') !== null) {
        document.querySelector('.ct_bx_rt_rv_bx .for_submit_form_rev').addEventListener('click', () => {
            let userLoc = getCookie('user')
            if (userLoc !== '') {
                userLoc = JSON.parse(userLoc)
            } else { userLoc = null }
            if (userLoc === null) {


                window.location.replace('/signup')


                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                return
            }
            let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
            let user = getCookie('user')
            if (user !== '') {
                user = JSON.parse(user)
            } else { user = null }

            let h = document.querySelector('.headLine_form input').value
            let sh = document.querySelector('.subheadLine_form textarea').value
            if (sh !== '' && h !== '' && ratNum !== 0) {
                document.querySelector('.ct_bx_form_rating').style.opacity = .5
                document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'none';


                document.querySelector('.for_submit_form_rev').style.opacity = .5
                document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'none';
                document.querySelector('.err_form_sub').style.display = 'none'

                const addRev = async () => {
                    var d = new Date();
                    // d = d.toLocaleString().split(',')[0]
                    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    d = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear()
                    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${window.location.search.split('?')[1].split('=')[4]}`)
                    let res = await dbCollection.get()
                    document.querySelector('.ct_bx_form_rating').style.opacity = 1

                    document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'auto';

                    document.querySelector('.rate_prod_h4').innerText = 'You rated this product'

                    document.querySelector('.ct_Remove_edit_bx').style.display = 'block'
                    document.querySelector('.for_submit_form_rev').style.opacity = 1
                    document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'auto';
                    document.querySelector('.for_submit_form_rev').style.display = 'none'

                    res.docs.forEach(el => {
                        let itm = el.data().item
                        let item = el.data().item
                        let cqa = el.data().cqa
                        const name = item.name
                        const group = item.type
                        const cook = item.cook
                        const time = item.time
                        const requiredGroc = item.requiredGroc
                        const base = item.base
                        const price = item.price
                        const includes = item.fdInside
                        const img = item.img
                        const id = item.id
                        const reviews = item.review
                        const offer = item.offer
                        const stock = item.stock
                        const ratingsFd = item.ratings
                        if (itm.id === token) {
                            let ratings = ratingsFd
                            let datRev = {
                                userId: user.authUser,
                                user: user.n + ' ' + user.ln,
                                ratings: ratNum,
                                headLine: h,
                                subHead: sh,
                                likes: 0,
                                time: d,
                                dislikes: 0,
                                id: token,
                            }
                            revArr.push(datRev)
                            if (reviews.length !== 0) {
                                reviews.forEach(l => {
                                    revArr.push(l)
                                })
                            }

                            for (let i = 0; i < ratings.length; i++) {
                                let st = ratings[i]
                                console.log(ratNum, st.star)
                                if (st.star === ratNum) {
                                    console.log(st.ratings)
                                    let r = st.ratings
                                    r = parseFloat(r)
                                    r++
                                    st.ratings = r
                                    let obj1 = {
                                        name: name,
                                        base: base,
                                        type: group,
                                        cook: cook,
                                        time: time,
                                        price: price,
                                        fdInside: includes,
                                        img: img,
                                        offer: offer,
                                        id: id,
                                        requiredGroc: requiredGroc,
                                        stock: stock,
                                        review: revArr,
                                        ratings: ratings
                                    }
                                    console.log(obj1, r)
                                    let obj = {
                                        cqa: cqa,
                                        item: obj1

                                    }
                                    dbCollection.doc(el.id).set(obj)
                                        .then(res => {
                                            let checkStar = () => {

                                                document.querySelector('.ct_bx_messgae').style.display = 'block'
                                                document.querySelector('.ct_bx_messgae p').innerText = 'Thank you for rating us.Your ratings is registered.'
                                                setTimeout(() => {
                                                    document.querySelector('.ct_bx_messgae').style.display = 'none'

                                                }, 2000)
                                                let html
                                                if (ratNum === 5) {
                                                    html = ` <div class="ct_rate_bx_rev">
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>

</ion-icon>
</div>`
                                                } else if (ratNum === 4) {
                                                    html = ` <div class="ct_rate_bx_rev">
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star">
        
        </ion-icon>
        </div>`
                                                } else if (ratNum === 3) {
                                                    html = ` <div class="ct_rate_bx_rev">
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star">
        
        </ion-icon>
        </div>`
                                                } else if (ratNum === 2) {
                                                    html = ` <div class="ct_rate_bx_rev">
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star">
        
        </ion-icon>
        </div>`
                                                } else if (ratNum === 1) {
                                                    html = ` <div class="ct_rate_bx_rev">
        <ion-icon class="fillrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star"></ion-icon>
        <ion-icon class="notrat" name="star">
        
        </ion-icon>
        </div>`
                                                }
                                                return html

                                            }
                                            let stars = checkStar()
                                            let html = `       <div class="ct_bx_revies">
                                           <div class="ct_person_dt">
                                               <ion-icon name="person-circle"></ion-icon>
                                               <h4>${user.n} ${user.ln}</h4>
                           
                                           </div>
                                           ${stars}
                                           <div class="ct_bx_dt_rv">
                           
                                               <h5>${h}</h5>
                                               <p>${sh}</</p>
                                               <div class="ct_bx_likes_dilik">
                                                   <div class="ct_lik_btn">
                                                       <ion-icon name="thumbs-up-outline"></ion-icon>
                                                       <span class='no_like_fm'></span>
                                                   </div>
                                                   <div class="ct_lik_btn2">
                                                       <ion-icon name="thumbs-down-outline"></ion-icon>
                                                       <span class='no_dis_like_fm'></span>
                                                   </div>
                                               </div>
                                               <span class="idUser">${user.authUser}</span>

                                               <span class="date_rev">${d}</span>
                           
                                           </div>
                           
                           
                           
                                       </div>`
                                            document.querySelector('.ct_bx_first_icon').style.display = 'none'
                                            let token = window.location.search.split('?')[1].split('=')[1]
                                            if (localStorage.getItem('myRatings') !== null) {
                                                let parseRt = JSON.parse(localStorage.getItem('myRatings'))
                                                parseRt.push({ id: token, rate: datRev })

                                                localStorage.setItem('myRatings', JSON.stringify(parseRt))
                                            } else {


                                                let rateBox = JSON.stringify([{ id: token, rate: datRev }])
                                                localStorage.setItem('myRatings', rateBox)
                                            }


                                            document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)

                                        })
                                    break
                                }

                            }

                        }


                    })

                }

                addRev()

            } else {
                document.querySelector('.err_form_sub').style.display = 'block'
                if (h === '') {
                    document.querySelector('.err_form_sub').innerText = `! Please add a headline`
                } else
                    if (sh === '') {
                        document.querySelector('.err_form_sub').innerText = `! Please add a written text`
                    } else
                        if (ratNum === 0) {
                            document.querySelector('.err_form_sub').innerText = `! Please  rate this product to submit`
                        }

            }
        })
    }
    let arrFd = []
    let addedSelected = 0

    let matchedOne = 0
    if (window.location.pathname === '/product') {


        let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
        let href = window.location.search.split('?')[1]
        let jwt = parseJwt(token)
        let addedItems = JSON.parse(localStorage.getItem('foodsAdded'))
        let oQ = window.location.search.split('?')[1].split('&')
        let qtfd = oQ[1].split('=')[1]
        let stock = oQ[2].split('=')[1]

        if (parseFloat(stock) === 0) {
            document.querySelectorAll('.bx_op').forEach(cur => {
                cur.style['pointer-events'] = 'none'
            })
            document.querySelector('.ct_bx_show_out_of_stk.for_stock_err h3').innerText = `${jwt.item.name} is currently out of stock`
            document.querySelector('.bx_add_t_cart_btn_itm_dt ').style['pointer-events'] = 'none'
            document.querySelector('.bx_buy_now ').style['pointer-events'] = 'none'
            document.querySelector('.bx_add_t_cart_btn_itm_dt ').style.opacity = .5
            document.querySelector('.bx_buy_now ').style.opacity = .5

            document.querySelectorAll('.ct_bx_acct_cart').forEach(cur => {
                cur.style['pointer-events'] = 'none'
            })
            $('.ct_bx_show_out_of_stk.for_stock_err').animate({ left: '-10px' })
        }

        if (window.innerWidth < 1200) {
            let floatX = -(window.innerWidth + 100)

            $('.ct_error_stock.for_items').animate({ left: floatX })
        } else {
            $('.ct_error_stock.for_items').css('display', 'none')

        }


        document.querySelector('html').addEventListener('click', (e) => {
            // console.log(e.target.closest('.ct_about_itm_fld').childNodes[5].classList.value.s)
            if (e.target.closest('.ct_about_itm_fld .select') !== null) {

                e.target.closest('.ct_about_itm_fld .select').parentElement.childNodes.forEach(cur => {
                    if (cur.tagName !== undefined) {
                        if (cur.tagName.toLowerCase() === 'ion-icon') {
                            cur.remove()
                        }
                    }
                })

                e.target.closest('.ct_about_itm_fld .select').innerText = 'select'
                e.target.closest('.ct_about_itm_fld .select').parentElement.insertAdjacentHTML('afterbegin', '<ion-icon name="close-outline"></ion-icon>')
                let fd = e.target.closest('.ct_about_itm_fld .select').parentElement.childNodes[3].innerText.split(' ').join('').toLowerCase()

                let p = e.target.closest('.ct_about_itm_fld .select').parentElement.childNodes[7].innerText
                e.target.closest('.ct_about_itm_fld .select').classList.add('unselect')

                e.target.closest('.ct_about_itm_fld .select').classList.remove('select')
                let domP = document.querySelector('.mrp_ammount del').innerText.split('₹')[1]
                console.log(p, domP)
                domP = parseFloat(domP)
                p = parseFloat(p)
                let fP = domP - p


                let off = parseFloat(document.querySelector('.ct_offer_box_cook2 span').innerText.split('%')[0])
                document.querySelector('.mrp_ammount del').innerText = "₹ " + fP
                let offerP = fP - ((off / 100) * fP)
                offerP = Math.round(offerP)

                document.querySelector('.ct_saved_am p').innerText = "You saves " + "₹ " + (fP - offerP)

                document.querySelector('.ct_bx_price span').innerText = offerP
                let arrFd = jwt.item.fdInside
                jwt.item.price = `₹ ${fP}`

                arrFd.forEach((cur, ind) => {
                    let fdI = cur.split(' ').join('').toLowerCase()
                    if (fdI === fd) {
                        arrFd.splice(ind, 1)
                        parsedData = arrFd
                        console.log(jwt.item)
                    }
                })



            } else if (e.target.closest('.ct_about_itm_fld .unselect') !== null) {
                console.log(e.target.closest('.ct_about_itm_fld .unselect'))
                e.target.closest('.ct_about_itm_fld .unselect').parentElement.childNodes.forEach(cur => {
                    if (cur.tagName !== undefined) {
                        if (cur.tagName.toLowerCase() === 'ion-icon') {
                            cur.remove()
                        }
                    }
                })

                e.target.closest('.ct_about_itm_fld .unselect').innerText = 'unselect'
                e.target.closest('.ct_about_itm_fld .unselect').parentElement.insertAdjacentHTML('afterbegin', '<ion-icon name="checkbox-outline" role="img" class="md hydrated" aria-label="checkbox outline"></ion-icon>')
                let fd = e.target.closest('.ct_about_itm_fld .unselect').parentElement.childNodes[3].innerText.split(' ').join('').toLowerCase()

                let p = e.target.closest('.ct_about_itm_fld .unselect').parentElement.childNodes[7].innerText
                e.target.closest('.ct_about_itm_fld .unselect').classList.add('select')

                e.target.closest('.ct_about_itm_fld .unselect').classList.remove('unselect')

                let domP = document.querySelector('.mrp_ammount del').innerText.split('₹')[1]
                console.log(p, domP)
                domP = parseFloat(domP)
                p = parseFloat(p)
                let fP = domP + p


                let off = parseFloat(document.querySelector('.ct_offer_box_cook2 span').innerText.split('%')[0])
                document.querySelector('.mrp_ammount del').innerText = "₹ " + fP
                let offerP = fP - ((off / 100) * fP)
                offerP = Math.round(offerP)
                document.querySelector('.ct_saved_am p').innerText = "You saves " + "₹ " + (fP - offerP)

                document.querySelector('.ct_bx_price span').innerText = offerP
                let arrFd = jwt.item.fdInside
                jwt.item.price = `₹ ${fP}`
                arrFd.forEach((cur, ind) => {
                    let fdI = cur.split(' ').join('').toLowerCase()
                    if (fdI === fd) {
                        arrFd.splice(ind, 1)
                        parsedData = arrFd
                        console.log(jwt.item)
                    }
                })






            }

        })

        document.querySelector('html').addEventListener('click', (e) => {
            let cBtn = e.target.closest('.bx_add_t_cart_btn_itm_dt')
            let buyBtn = e.target.closest('.bx_buy_now')
            let qt1 = document.querySelector('.ct_bx_qtfood input').value
            if (cBtn !== null || buyBtn !== null) {
                let userLoc = getCookie('user')
                if (userLoc !== '') {
                    userLoc = JSON.parse(userLoc)
                } else { userLoc = null }
                if (userLoc === null) {

                    window.location.replace('/signup')

                    return
                }
                document.querySelectorAll('.select').forEach(cur => {
                    cur.style.opacity = .5
                    cur.style['pointer-events'] = 'none'
                })

                if (localStorage.length !== 0) {

                    if (addedItems !== null) {
                        if (parsedData) {
                            arrFd.push({ href: href, id: token, data: parsedData, qt: qt1, stock: stock, catId: catId })
                            addedItems.forEach(c => {
                                arrFd.push(c)
                            })
                            localStorage.setItem('foodsAdded', JSON.stringify(arrFd))

                        } else {
                            arrFd.push({ href: href, id: token, data: jwt, qt: qt1, stock: stock, catId: catId })
                            addedItems.forEach(c => {
                                arrFd.push(c)
                            })
                            localStorage.setItem('foodsAdded', JSON.stringify(arrFd))

                        }

                        document.querySelector('.bx_add_t_cart_btn_itm_dt p').style.display = 'block'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'none'

                        document.querySelector('.bx_buy_now p').style.display = 'block'

                        document.querySelector('.bx_buy_now span').style.display = 'none'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.add('added_to_cart')
                        document.querySelector('.bx_buy_now').style.paddingLeft = '18px'

                        document.querySelector('.bx_buy_now').classList.add('added_to_cart')

                    } else {
                        localStorage.setItem('foodsAdded', JSON.stringify([{ href: href, id: token, data: jwt, qt: qt1, stock: stock, catId: catId }]))

                        document.querySelector('.bx_add_t_cart_btn_itm_dt p').style.display = 'block'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'none'

                        document.querySelector('.bx_buy_now p').style.display = 'block'

                        document.querySelector('.bx_buy_now span').style.display = 'none'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.add('added_to_cart')
                        document.querySelector('.bx_buy_now').style.paddingLeft = '18px'

                        document.querySelector('.bx_buy_now').classList.add('added_to_cart')
                    }

                    document.querySelector('.ct_bx_messgae').style.display = 'block'

                    document.querySelector('.ct_bx_messgae p').innerText = `${jwt.item.name} successfully added to Cart`
                    setTimeout(() => {
                        $('.ct_bx_messgae').fadeOut()

                    }, 2000)

                } else {
                    document.querySelector('.ct_msg_send_itm_dt2').style.display = 'flex'

                }
            }

        })

        let addedQt = null
        if (addedItems !== null) {
            addedItems.forEach(cur => {
                if (cur.id === token) {
                    addedQt = true
                    document.querySelector('.ct_bx_qtfood input').value = cur.qt

                    document.querySelector('.bx_add_t_cart_btn_itm_dt p').style.display = 'block'
                    document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'none'

                    document.querySelector('.bx_buy_now p').style.display = 'block'

                    document.querySelector('.bx_buy_now span').style.display = 'none'
                    document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.add('added_to_cart')
                    document.querySelector('.bx_buy_now').style.paddingLeft = '18px'

                    document.querySelector('.bx_buy_now').classList.add('added_to_cart')

                }
            })
            if (addedQt === null) {
                document.querySelector('.ct_bx_qtfood input').value = 1

            }
        } else {
            document.querySelector('.ct_bx_qtfood input').value = qtfd

        }


        let catId = oQ[3].split('=')[1]


        let offPrice = document.querySelector('.ct_bx_price span').innerText
        let inside = document.querySelector('.ct_bx_all_inside_pack_itm')

        let qa = document.querySelector('.ct_bx_all_qa')
        let name = jwt.item.name




        let type2 = jwt.item.type
        let h
        if (type2 === 'veg') {
            h = `        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172"
style=" fill:#000000;">
<g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
    font-family="none" font-weight="none" font-size="none" text-anchor="none"
    style="mix-blend-mode: normal">
    <path d="M0,172v-172h172v172z" fill="none"></path>
    <g fill="#099f49">
        <path
            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
        </path>
        <path
            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
        </path>
    </g>
</g>
</svg>
<p>${type2}</p>`
        } else {
            h = `              <img src="https://img.icons8.com/color/15/000000/non-vegetarian-food-symbol.png" />

    <p>${type2}</p>`
        }

        // hid
        document.querySelector('.ct_bx_type_fd').innerHTML = h

        let myRating = JSON.parse(localStorage.getItem('myRatings'))
        document.querySelector('.loading_rate_bx_for_reviews_msg').style.display = 'block'

        if (myRating !== null) {
            document.querySelector('.ct_bx_form_rating').style.opacity = .5
            document.querySelector('.loading_rate_bx').style.display = 'block'
            document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'none';


            document.querySelector('.for_submit_form_rev').style.opacity = .5
            document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'none';
            myRating.forEach(cur => {
                console.log(cur.rate.id, token)
                if (myRating !== null && cur.rate.id === token) {
                    document.querySelector('.ct_Remove_edit_bx').style.display = 'block'
                    document.querySelector('.for_submit_form_rev').classList.add('for_already_submit_rev_bx')
                    let head = document.querySelector('.headLine_form input')
                    head.value = cur.rate.headLine
                    head.readOnly = true
                    let subHead = document.querySelector('.subheadLine_form textarea')
                    subHead.value = cur.rate.subHead
                    subHead.readOnly = true

                    let checkStar = (ratNum) => {
                        let html
                        if (ratNum === 5) {
                            html = `
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>

</ion-icon>
`
                        } else if (ratNum === 4) {
                            html = ` 
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star">

</ion-icon>
`
                        } else if (ratNum === 3) {
                            html = ` 
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star">

</ion-icon>
`
                        } else if (ratNum === 2) {
                            html = ` 
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star">

</ion-icon>
`
                        } else if (ratNum === 1) {
                            html = ` 
<ion-icon class="fillrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star"></ion-icon>
<ion-icon class="notrat" name="star">

</ion-icon>
`
                        }
                        return html

                    }
                    let stars = checkStar(cur.rate.ratings)
                    console.log(stars)
                    document.querySelector('.ct_rate_star_wrapper').classList.remove('not_rated')
                    document.querySelector('.ct_rate_star_wrapper').classList.add('rated_success')
                    document.querySelector('.rated_success').insertAdjacentHTML('beforeend', stars)

                }
            })
        }
        let addedNamesRat = []

        $("button").click(function () {
            $(".check-icon").hide();
            setTimeout(function () {
                $(".check-icon").show();
            }, 10000);
        });
        const addLoadedItm = async () => {
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${window.location.search.split('?')[1].split('=')[4]}`)
            let res = await dbCollection.get()

            document.querySelector('.ct_bx_form_rating').style.opacity = 1
            document.querySelector('.loading_rate_bx').style.display = 'none'
            document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'auto';
            document.querySelector('.loading_rate_bx_for_reviews_msg').style.display = 'none'


            document.querySelector('.for_submit_form_rev').style.opacity = 1
            document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'auto';
            res.docs.forEach(el => {

                let item = el.data().item

                if (item.id === token) {
                    document.querySelector('title').innerText = item.name

                    let fdInside = jwt.item.fdInside
                    let price2 = parseFloat(item.price)

                    document.querySelector('.ct_bx_acct_cart').style.visibility = 'visible'
                    document.querySelector('.ct_x_fd_dt_itm').style.visibility = 'visible'

                    document.querySelector('.ct_offer_box_cook2 span').innerText = item.offer + "%"

                    document.querySelectorAll('.ct_download_cooking a')[0].src = item.cook
                    document.querySelectorAll('.ct_download_cooking a')[1].src = item.cook
                    document.querySelector('.fd_name_dt_itm').innerText = item.name
                    document.querySelector('.ct_bx_mrp del').innerText = '₹' + price2
                    let offer2 = parseFloat(item.offer)

                    let offp = Math.round(price2 - (price2 * offer2 / 100))
                    let sAm = price2 - offp
                    document.querySelector('.mrp_ammount del').innerText = `₹ ${price2}`

                    document.querySelector('.ct_saved_am p').innerText = `You saves ₹ ${sAm}`
                    document.querySelector('.ct_bx_price span').innerText = `${offp}`
                    document.querySelector('.ct_bx_fex_fd_dt_ov').style.height = 'auto'

                    document.querySelector('.for_items_loadsss').style.display = 'none'
                    document.querySelector('.ct_bx_img_itm img').src = item.img
                    document.querySelector('.ct_bx_img_itm').style.visibility = 'visible'

                    document.querySelector('.ct_bx_acct_cart').style.visibility = 'visible'
                    document.querySelector('.ct_x_fd_dt_itm').style.visibility = 'visible'
                    document.querySelector('.ct_time_takes_itm p').innerHTML = `<p>Cook just in <strong>${item.time}</strong> </p>`
                    time = item.time
                    if (item.fdInside !== null) {
                        document.querySelector('.ct_sbout_this_itm').style.display = 'block'
                        const insideFd = item.fdInside.map((dt) => {
                            let ht
                            console.log(item)
                            item.base.forEach(cur12 => {
                                console.log(cur12.name, dt)
                                if (cur12.name.split(' ').join('').toLowerCase() === dt.split(' ').join('').toLowerCase()) {
                                    ht = `  <div class="ct_about_itm_fld">
                                <ion-icon name="checkbox-outline"></ion-icon>                   
                                                        <p>${dt}</p>
                                                        <button class="select">unselect</button>               
                                                        <span>${cur12.price}</span>
                                                    </div>`
                                } else {
                                    ht = `  <div class="ct_about_itm_fld">
                                <ion-icon name="checkbox-outline"></ion-icon>                   
                                <p>${dt}</p>
                                </div>`
                                }

                            })
                            return ht


                        })
                        document.querySelector('.ct_bx_all_inside_pack_itm').innerHTML = insideFd.join('')
                        let token11 = window.location.search.split('?')[1].split('=')[1].split('&')[0]

                        let jwt11 = parseJwt(token11)
                        let allItm = JSON.parse(localStorage.getItem('foodsAdded'))
                        if (allItm !== null) {
                            if (allItm.length !== 0) {
                                allItm.forEach((cur, i) => {
                                    let nameF = cur.data.item.name.split(' ').join('').toLowerCase().trim()
                                    console.log(nameF, jwt11.item.name.split(' ').join('').toLowerCase().trim(), 'ama')
                                    if (nameF === jwt11.item.name.split(' ').join('').toLowerCase().trim()) {
                                        console.log(document.querySelectorAll('.select'), 'lioa')
                                        document.querySelectorAll('.select').forEach(cur1 => {
                                            cur1.style.opacity = .4
                                            cur1.style['pointer-events'] = 'none'
                                        })
                                    }
                                })
                            }
                        }
                    }

                    document.querySelector('.ct_bx_first_icon').style.display = 'none'
                    let user = {}
                    item.review.forEach(cur1 => {
                        matchedOne++

                        let dislikes = cur1.dislikes
                        let likes = cur1.likes

                        let headLine = cur1.headLine
                        let userN = cur1.user
                        let time = cur1.time
                        user.userId = cur1.userId
                        console.log(time)
                        let subHead = cur1.subHead
                        let ratings = parseFloat(cur1.ratings)

                        let checkStar = (ratNum) => {
                            let html
                            if (ratNum === 5) {
                                html = ` <div class="ct_rate_bx_rev">
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                
                </ion-icon>
                </div>`
                            } else if (ratNum === 4) {
                                html = ` <div class="ct_rate_bx_rev">
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star">
                
                </ion-icon>
                </div>`
                            } else if (ratNum === 3) {
                                html = ` <div class="ct_rate_bx_rev">
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star">
                
                </ion-icon>
                </div>`
                            } else if (ratNum === 2) {
                                html = ` <div class="ct_rate_bx_rev">
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star">
                
                </ion-icon>
                </div>`
                            } else if (ratNum === 1) {
                                html = ` <div class="ct_rate_bx_rev">
                <ion-icon class="fillrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star"></ion-icon>
                <ion-icon class="notrat" name="star">
                
                </ion-icon>
                </div>`
                            }
                            return html

                        }

                        let stars = checkStar(ratings)

                        let html


                        let likesSt = JSON.parse(localStorage.getItem('likes'))
                        let dislikesSt = JSON.parse(localStorage.getItem('dislikes'))
                        if (dislikesSt !== null && dislikesSt.length !== 0) {
                            for (let a = 0; a < dislikesSt.length; a++) {
                                let cur = dislikesSt[a]

                                if (cur.id === token && cur.dilikes.name === user.userId) {
                                    console.log(dislikes)
                                    if (dislikes === 0 && likes !== 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik ">
                                    <div class="ct_lik_btn">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>${likes}</span>
                                    </div>
                                    <div class="ct_lik_btn2 added_like2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`

                                    } else if (dislikes === 0 && likes === 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span class='no_like_fm'></span>
                                    </div>
                                    <div class="ct_lik_btn2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    } else if (dislikes !== 0 && likes !== 0) {
                                        html = `       <div class="ct_bx_revies">
                           <div class="ct_person_dt">
                               <ion-icon name="person-circle"></ion-icon>
                               <h4>${userN}</h4>
            
                           </div>
                           ${stars}
                           <div class="ct_bx_dt_rv">
            
                               <h5>${headLine}</h5>
                               <p>${subHead}</</p>
                               <div class="ct_bx_likes_dilik">
                                   <div class="ct_lik_btn ">
                                       <ion-icon name="thumbs-up-outline"></ion-icon>
                                       <span>${likes}</span>
                                       </div>
                                   <div class="ct_lik_btn2 added_like2">
                                       <ion-icon name="thumbs-down-outline"></ion-icon>
                                       <span>${dislikes}</span>
                                   </div>
                               </div>
                               <span class="idUser">${user.userId}</span>

                               <span class="date_rev">${time}</span>
            
                           </div>
            
            
            
                       </div>`
                                    } else if (dislikes !== 0 && likes === 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span class='no_like_fm'></span>
                                    </div>
                                    <div class="ct_lik_btn2 added_like2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span>${dislikes}</span>
                                    </div>
                                </div>

                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    }
                                    else if (likes !== 0 && dislikes === 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>${likes}</span>
                                    </div>
                                    <div class="ct_lik_btn2 added_like2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    }
                                    addedNamesRat.push(user.userId)
                                    document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)
                                    return

                                }
                            }


                        }
                        if (likesSt !== null && likesSt.length !== 0) {
                            for (let a = 0; a < likesSt.length; a++) {
                                let cur = likesSt[a]
                                if (cur.id === token && cur.likes.name === user.userId) {

                                    if (dislikes === 0 && likes !== 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik ">
                                    <div class="ct_lik_btn added_like">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>${likes}</span>
                                    </div>
                                    <div class="ct_lik_btn2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    } else if (likes === 0 && dislikes !== 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn ">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span class='no_like_fm'></span>
                                    </div>
                                    <div class="ct_lik_btn2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span>${dislikes}</span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    } else if (dislikes === 0 && likes === 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span class='no_like_fm'></span>
                                    </div>
                                    <div class="ct_lik_btn2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    } else if (dislikes !== 0 && likes !== 0) {
                                        html = `       <div class="ct_bx_revies">
                           <div class="ct_person_dt">
                               <ion-icon name="person-circle"></ion-icon>
                               <h4>${userN}</h4>
            
                           </div>
                           ${stars}
                           <div class="ct_bx_dt_rv">
            
                               <h5>${headLine}</h5>
                               <p>${subHead}</</p>
                               <div class="ct_bx_likes_dilik">
                                   <div class="ct_lik_btn added_like">
                                       <ion-icon name="thumbs-up-outline"></ion-icon>
                                       <span>${likes}</span>
                                       </div>
                                   <div class="ct_lik_btn2">
                                       <ion-icon name="thumbs-down-outline"></ion-icon>
                                       <span>${dislikes}</span>
                                   </div>
                               </div>
                               <span class="idUser">${user.userId}</span>

                               <span class="date_rev">${time}</span>
            
                           </div>
            
            
            
                       </div>`

                                    }
                                    else if (likes !== 0 && dislikes === 0) {
                                        html = `       <div class="ct_bx_revies">
                            <div class="ct_person_dt">
                                <ion-icon name="person-circle"></ion-icon>
                                <h4>${userN}</h4>
             
                            </div>
                            ${stars}
                            <div class="ct_bx_dt_rv">
             
                                <h5>${headLine}</h5>
                                <p>${subHead}</</p>
                                <div class="ct_bx_likes_dilik">
                                    <div class="ct_lik_btn added_like">
                                        <ion-icon name="thumbs-up-outline"></ion-icon>
                                        <span>${likes}</span>
                                    </div>
                                    <div class="ct_lik_btn2">
                                        <ion-icon name="thumbs-down-outline"></ion-icon>
                                        <span class='no_dis_like_fm'></span>
                                    </div>
                                </div>
                                <span class="idUser">${user.userId}</span>

                                <span class="date_rev">${time}</span>
             
                            </div>
             
             
             
                        </div>`
                                    }
                                    addedNamesRat.push(user.userId)
                                    document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)
                                    break
                                }
                            }
                            if (!addedNamesRat.includes(user.userId)) {
                                console.log(dislikes, likes)
                                if (dislikes === 0
                                    && likes !== 0) {
                                    html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                        <ion-icon name="person-circle"></ion-icon>
                        <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</</p>
                        <div class="ct_bx_likes_dilik ">
                            <div class="ct_lik_btn">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span>${likes}</span>
                            </div>
                            <div class="ct_lik_btn2">
                                <ion-icon name="thumbs-down-outline"></ion-icon>
                                <span class='no_dis_like_fm'></span>
                            </div>
                        </div>
                        <span class="idUser">${user.userId}</span>

                        <span class="date_rev">${time}</span>
     
                    </div>
     
     
     
                </div>`
                                } else if (likes === 0 && dislikes !== 0) {
                                    html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                        <ion-icon name="person-circle"></ion-icon>
                        <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</</p>
                        <div class="ct_bx_likes_dilik">
                            <div class="ct_lik_btn">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span class='no_like_fm'></span>
                            </div>
                            <div class="ct_lik_btn2">
                                <ion-icon name="thumbs-down-outline"></ion-icon>
                                <span>${dislikes}</span>
                            </div>
                        </div>
                        <span class="idUser">${user.userId}</span>

                        <span class="date_rev">${time}</span>
     
                    </div>
     
     
     
                </div>`
                                } else if (dislikes === 0 && likes === 0) {
                                    html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                        <ion-icon name="person-circle"></ion-icon>
                        <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</</p>
                        <div class="ct_bx_likes_dilik">
                            <div class="ct_lik_btn">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span class='no_like_fm'></span>
                            </div>
                            <div class="ct_lik_btn2">
                                <ion-icon name="thumbs-down-outline"></ion-icon>
                                <span class='no_dis_like_fm'></span>
                            </div>
                        </div>
                        <span class="idUser">${user.userId}</span>

                        <span class="date_rev">${time}</span>
     
                    </div>
     
     
     
                </div>`
                                } else if (dislikes !== 0 && likes !== 0) {
                                    html = `       <div class="ct_bx_revies">
                   <div class="ct_person_dt">
                       <ion-icon name="person-circle"></ion-icon>
                       <h4>${userN}</h4>
    
                   </div>
                   ${stars}
                   <div class="ct_bx_dt_rv">
    
                       <h5>${headLine}</h5>
                       <p>${subHead}</</p>
                       <div class="ct_bx_likes_dilik">
                           <div class="ct_lik_btn">
                               <ion-icon name="thumbs-up-outline"></ion-icon>
                               <span>${likes}</span>
                               </div>
                           <div class="ct_lik_btn2">
                               <ion-icon name="thumbs-down-outline"></ion-icon>
                               <span>${dislikes}</span>
                           </div>
                       </div>
                       <span class="idUser">${user.userId}</span>

                       <span class="date_rev">${time}</span>
    
                   </div>
    
    
    
               </div>`
                                } else if (dislikes !== 0 && likes === 0) {
                                    html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                        <ion-icon name="person-circle"></ion-icon>
                        <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</</p>
                        <div class="ct_bx_likes_dilik">
                            <div class="ct_lik_btn ">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span class='no_like_fm'></span>
                            </div>
                            <div class="ct_lik_btn2">
                                <ion-icon name="thumbs-down-outline"></ion-icon>
                                <span>${dislikes}</span>
                            </div>
                        </div>
                        <span class="idUser">${user.userId}</span>

                        <span class="date_rev">${time}</span>
     
                    </div>
     
     
     
                </div>`
                                }
                                else if (likes !== 0 && dislikes === 0) {
                                    html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                        <ion-icon name="person-circle"></ion-icon>
                        <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</</p>
                        <div class="ct_bx_likes_dilik">
                            <div class="ct_lik_btn">
                                <ion-icon name="thumbs-up-outline"></ion-icon>
                                <span>${likes}</span>
                            </div>
                            <div class="ct_lik_btn2">
                                <ion-icon name="thumbs-down-outline"></ion-icon>
                                <span class='no_dis_like_fm'></span>
                            </div>
                        </div>
                        <span class="idUser">${user.userId}</span>

                        <span class="date_rev">${time}</span>
     
                    </div>
     
     
     
                </div>`
                                }

                                document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)
                            }
                        } else {
                            if (dislikes === 0
                                && likes !== 0) {
                                html = `       <div class="ct_bx_revies">
                <div class="ct_person_dt">
                    <ion-icon name="person-circle"></ion-icon>
                    <h4>${userN}</h4>
 
                </div>
                ${stars}
                <div class="ct_bx_dt_rv">
 
                    <h5>${headLine}</h5>
                    <p>${subHead}</</p>
                    <div class="ct_bx_likes_dilik ">
                        <div class="ct_lik_btn">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span>${likes}</span>
                        </div>
                        <div class="ct_lik_btn2">
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                            <span class='no_dis_like_fm'></span>
                        </div>
                    </div>
                    <span class="idUser">${user.userId}</span>

                    <span class="date_rev">${time}</span>
 
                </div>
 
 
 
            </div>`
                            } else if (likes === 0 && dislikes !== 0) {
                                html = `       <div class="ct_bx_revies">
                <div class="ct_person_dt">
                    <ion-icon name="person-circle"></ion-icon>
                    <h4>${userN}</h4>
 
                </div>
                ${stars}
                <div class="ct_bx_dt_rv">
 
                    <h5>${headLine}</h5>
                    <p>${subHead}</</p>
                    <div class="ct_bx_likes_dilik">
                        <div class="ct_lik_btn">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span class='no_like_fm'></span>
                        </div>
                        <div class="ct_lik_btn2">
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                            <span>${dislikes}</span>
                        </div>
                    </div>
                    <span class="idUser">${user.userId}</span>

                    <span class="date_rev">${time}</span>
 
                </div>
 
 
 
            </div>`
                            } else if (dislikes === 0 && likes === 0) {
                                html = `       <div class="ct_bx_revies">
                <div class="ct_person_dt">
                    <ion-icon name="person-circle"></ion-icon>
                    <h4>${userN}</h4>
 
                </div>
                ${stars}
                <div class="ct_bx_dt_rv">
 
                    <h5>${headLine}</h5>
                    <p>${subHead}</</p>
                    <div class="ct_bx_likes_dilik">
                        <div class="ct_lik_btn">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span class='no_like_fm'></span>
                        </div>
                        <div class="ct_lik_btn2">
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                            <span class='no_dis_like_fm'></span>
                        </div>
                    </div>
                    <span class="idUser">${user.userId}</span>

                    <span class="date_rev">${time}</span>
 
                </div>
 
 
 
            </div>`
                            } else if (dislikes !== 0 && likes !== 0) {
                                html = `       <div class="ct_bx_revies">
               <div class="ct_person_dt">
                   <ion-icon name="person-circle"></ion-icon>
                   <h4>${userN}</h4>

               </div>
               ${stars}
               <div class="ct_bx_dt_rv">

                   <h5>${headLine}</h5>
                   <p>${subHead}</</p>
                   <div class="ct_bx_likes_dilik">
                       <div class="ct_lik_btn">
                           <ion-icon name="thumbs-up-outline"></ion-icon>
                           <span>${likes}</span>
                           </div>
                       <div class="ct_lik_btn2">
                           <ion-icon name="thumbs-down-outline"></ion-icon>
                           <span>${dislikes}</span>
                       </div>
                   </div>
                   <span class="idUser">${user.userId}</span>

                   <span class="date_rev">${time}</span>

               </div>



           </div>`
                            } else if (dislikes !== 0 && likes === 0) {
                                html = `       <div class="ct_bx_revies">
                <div class="ct_person_dt">
                    <ion-icon name="person-circle"></ion-icon>
                    <h4>${userN}</h4>
 
                </div>
                ${stars}
                <div class="ct_bx_dt_rv">
 
                    <h5>${headLine}</h5>
                    <p>${subHead}</</p>
                    <div class="ct_bx_likes_dilik">
                        <div class="ct_lik_btn ">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span class='no_like_fm'></span>
                        </div>
                        <div class="ct_lik_btn2">
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                            <span>${dislikes}</span>
                        </div>
                    </div>
                    <span class="idUser">${user.userId}</span>

                    <span class="date_rev">${time}</span>
 
                </div>
 
 
 
            </div>`
                            }
                            else if (likes !== 0 && dislikes === 0) {
                                html = `       <div class="ct_bx_revies">
                <div class="ct_person_dt">
                    <ion-icon name="person-circle"></ion-icon>
                    <h4>${userN}</h4>
 
                </div>
                ${stars}
                <div class="ct_bx_dt_rv">
 
                    <h5>${headLine}</h5>
                    <p>${subHead}</</p>
                    <div class="ct_bx_likes_dilik">
                        <div class="ct_lik_btn">
                            <ion-icon name="thumbs-up-outline"></ion-icon>
                            <span>${likes}</span>
                        </div>
                        <div class="ct_lik_btn2">
                            <ion-icon name="thumbs-down-outline"></ion-icon>
                            <span class='no_dis_like_fm'></span>
                        </div>
                    </div>
                    <span class="idUser">${user.userId}</span>

                    <span class="date_rev">${time}</span>
 
                </div>
 
 
 
            </div>`
                            }
                            document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)
                        }
                    })

                }
            })
            console.log(matchedOne)
            if (matchedOne === 0) {
                document.querySelector('.ct_bx_first_icon').style.display = 'block'



            }
        }
        addLoadedItm()

        document.querySelector('html').addEventListener('click', (e) => {
            let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]


            let btnLike = e.target.closest('.ct_lik_btn')
            if (btnLike !== null) {

                let userLoc = getCookie('user')
                if (userLoc !== '') {
                    userLoc = JSON.parse(userLoc)
                } else { userLoc = null }
                if (userLoc === null) {
                    window.location.replace('/signup')

                    return
                }
                let addedDis = false
                let idA = btnLike.parentElement.parentElement.parentElement.childNodes[5].childNodes[6].innerText
                let dataLike = {
                    name: idA,

                }
                if (btnLike.classList.value.split(' ').includes('added_like')) { return }

                if (btnLike.parentElement.childNodes[3].classList.value.split(' ').includes('added_like2')) {
                    let num_dis = parseFloat(btnLike.parentElement.childNodes[3].childNodes[3].innerText)
                    if (num_dis > 1) {
                        btnLike.parentElement.childNodes[3].childNodes[3].innerText = num_dis - 1
                        addedDis = true


                    } else {
                        addedDis = true
                        btnLike.parentElement.childNodes[3].childNodes[3].innerText = 0

                        btnLike.parentElement.childNodes[3].childNodes[3].style.display = 'none'
                    }

                }
                let num = parseFloat(btnLike.childNodes[3].innerText)

                if (btnLike.childNodes[3].innerText === '') { num = 0 }
                num++
                btnLike.classList.add('added_like')

                btnLike.parentElement.childNodes[3].classList.remove('added_like')

                btnLike.parentElement.childNodes[3].classList.remove('added_like2')
                // return
                btnLike.childNodes[3].style.display = 'inline-block'
                btnLike.childNodes[3].innerText = num

                const addLikes = async () => {

                    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${window.location.search.split('?')[1].split('=')[4]}`)
                    let res = await dbCollection.get()

                    res.docs.forEach(el => {
                        let item = el.data().item
                        let cqa = el.data().cqa
                        const name = item.name
                        const group = item.type
                        const cook = item.cook
                        const time = item.time
                        const reqG = item.requiredGroc
                        const price = item.price
                        const includes = item.fdInside
                        const img = item.img
                        const base = item.base
                        const id = item.id
                        const offer = item.offer
                        const stock = item.stock
                        const ratingsFd = item.ratings
                        let itm = el.data().item
                        let rat = el.data().ratings
                        btnLike.classList.remove('no_like_fm')

                        if (itm.id === token) {

                            let parseRt2 = JSON.parse(localStorage.getItem('dislikes'))

                            if (parseRt2 !== null) {
                                for (let i = 0; i < parseRt2.length; i++) {
                                    let cur = parseRt2[i]
                                    if (cur.dilikes.name === idA & cur.id === token) {
                                        console.log(i)
                                        parseRt2.splice(i, 1)
                                        console.log(parseRt2)
                                        localStorage.setItem('dislikes', JSON.stringify(parseRt2))
                                    }

                                }
                            }
                            let parseRt = JSON.parse(localStorage.getItem('likes'))
                            console.log(JSON.parse(localStorage.getItem('likes')))
                            if (parseRt !== null && parseRt.length !== 0) {
                                let dtNew = {
                                    id: token,
                                    likes: dataLike
                                }
                                for (let i = 0; i < parseRt.length; i++) {
                                    let cur = parseRt[i]
                                    console.log(cur.likes.name, idA)

                                    if (cur.likes.name !== idA) {
                                        parseRt.push(dtNew)
                                        console.log(parseRt)
                                        localStorage.setItem('likes', JSON.stringify(parseRt))
                                        break
                                    }
                                }





                            } else {
                                let dtNew = JSON.stringify([{
                                    id: token,
                                    likes: dataLike
                                }])
                                localStorage.setItem('likes', dtNew)
                            }




                            let reviews = itm.review
                            reviews.forEach(cur => {
                                console.log(cur.userId, idA)
                                if (cur.userId === idA & cur.id === token) {
                                    let obj = {
                                        cqa: cqa,
                                        item: {
                                            name: name,
                                            base: base,
                                            type: group,
                                            cook: cook,
                                            time: time,
                                            price: price,
                                            requiredGroc: reqG,
                                            fdInside: includes,
                                            img: img,
                                            offer: offer,
                                            id: id,
                                            stock: stock,
                                            review: reviews,
                                            ratings: ratingsFd
                                        }

                                    }




                                    cur.likes = parseFloat(btnLike.childNodes[3].innerText)

                                    if (addedDis === true) {
                                        let dis = parseFloat(btnLike.parentElement.childNodes[3].childNodes[3].innerText)
                                        if (dis === 1) { dis = 0 }
                                        cur.dislikes = dis

                                    }
                                    console.log('from likes', cur.likes, 'dis', cur.dislikes)
                                    dbCollection.doc(el.id)
                                        .set(obj).then(res => {

                                        })
                                }

                            })
                        }
                    })
                }
                if (btnLike.childNodes[3].classList.value.split(' ').includes('no_like_fm')) {
                    num = 0
                    if (btnLike.classList.value.split(' ').includes('added_like')) {

                        addLikes()

                    }
                }
                else {
                    if (btnLike.classList.value.split(' ').includes('added_like')) {
                        num = parseFloat(btnLike.childNodes[3].innerText)


                        addLikes()

                    }

                }


            } else {
                let addedlike = null

                let btnLike = e.target.closest('.ct_lik_btn2')
                if (btnLike !== null) {
                    let userLoc = getCookie('user')
                    if (userLoc !== '') {
                        userLoc = JSON.parse(userLoc)
                    } else { userLoc = null }
                    if (userLoc === null) {
                        window.location.replace('/signup')

                        return
                    }
                    let idA = btnLike.parentElement.parentElement.parentElement.childNodes[5].childNodes[6].innerText
                    let dataLike = {
                        name: idA,

                    }
                    if (btnLike.classList.value.split(' ').includes('added_like2')) { return }
                    btnLike.childNodes[3].style.display = 'inline-block'
                    if (btnLike.parentElement.childNodes[1].classList.value.split(' ')[1] === 'added_like') {
                        let num_dis = parseFloat(btnLike.parentElement.childNodes[1].childNodes[3].innerText)
                        if (num_dis > 1) {
                            btnLike.parentElement.childNodes[1].childNodes[3].innerText = num_dis - 1
                            addedlike = true

                        } else {
                            addedlike = true
                            btnLike.parentElement.childNodes[1].childNodes[3].innerText = 0
                            btnLike.parentElement.childNodes[1].childNodes[3].style.display = 'none'
                        }
                    }
                    console.log(btnLike.childNodes[3].innerText)
                    let num12 = parseFloat(btnLike.childNodes[3].innerText)

                    btnLike.parentElement.childNodes[1].classList.remove('added_like')

                    let parseRt = JSON.parse(localStorage.getItem('likes'))
                    console.log(parseRt)

                    if (btnLike.childNodes[3].innerText === '') {
                        num12 = 0
                    }
                    num12++

                    btnLike.classList.add('added_like2')
                    btnLike.childNodes[3].innerText = num12




                    const adddisLikes = async () => {

                        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${window.location.search.split('?')[1].split('=')[4]}`)
                        let res = await dbCollection.get()

                        res.docs.forEach(el => {
                            let item = el.data().item
                            let cqa = el.data().cqa

                            const name = item.name
                            const group = item.type
                            const cook = item.cook
                            const time = item.time
                            const reqG = item.requiredGroc
                            const price = item.price
                            const includes = item.fdInside
                            const img = item.img
                            const id = item.id
                            const base = item.base

                            const reviews = item.review
                            const offer = item.offer
                            const stock = item.stock
                            const ratingsFd = item.ratings
                            if (item.id === token) {
                                if (parseRt !== null) {
                                    for (let i = 0; i < parseRt.length; i++) {
                                        let cur = parseRt[i]
                                        if (cur.likes.name === idA) {
                                            console.log(i)
                                            parseRt.splice(i, 1)
                                            localStorage.setItem('likes', JSON.stringify(parseRt))
                                        }

                                    }
                                }
                                if (localStorage.getItem('dislikes') !== null && JSON.parse(localStorage.getItem('dislikes').length !== 0)) {
                                    let parseRt = JSON.parse(localStorage.getItem('dislikes'))
                                    let dtNew = {
                                        id: token,
                                        dilikes: dataLike
                                    }
                                    parseRt.push(dtNew)
                                    localStorage.setItem('dislikes', JSON.stringify(parseRt))





                                } else {
                                    let dtNew = JSON.stringify([{
                                        id: token,
                                        dilikes: dataLike
                                    }])
                                    localStorage.setItem('dislikes', dtNew)
                                }
                                let reviews = item.review
                                reviews.forEach(cur => {
                                    console.log(cur.userId === idA, cur.id, '\n', token)
                                    if (cur.userId === idA && cur.id === token) {
                                        let obj = {
                                            cqa: cqa,
                                            item: {
                                                name: name,
                                                base: base,

                                                type: group,
                                                cook: cook,
                                                time: time,
                                                price: price,
                                                fdInside: includes,
                                                img: img,
                                                offer: offer,
                                                requiredGroc: reqG,

                                                id: id,
                                                stock: stock,
                                                review: reviews,
                                                ratings: ratingsFd
                                            }

                                        }

                                        cur.dislikes = parseFloat(btnLike.childNodes[3].innerText)
                                        if (addedlike === true) {
                                            let dis = parseFloat(btnLike.parentElement.childNodes[1].childNodes[3].innerText)
                                            if (dis === 1) { dis = 0 }
                                            cur.likes = dis

                                        }



                                        document.querySelector('.ct_lik_btn').style['pointer-events'] = 'auto'



                                        dbCollection.doc(el.id)
                                            .set(obj).then(res => {
                                            })
                                    }

                                })


                            }
                        })
                    }

                    if (btnLike.childNodes[3].classList.value.split(' ').includes('no_dis_like_fm')) {
                        if (btnLike.classList.value.split(' ').includes('added_like2')) {
                            btnLike.childNodes[3].style.display = 'inline-block'
                            adddisLikes()

                            btnLike.classList.remove('no_dis_like_fm')
                        }
                    }
                    else {
                        console.log(btnLike.classList.value.split(' ').includes('added_like2'))
                        if (btnLike.classList.value.split(' ').includes('added_like2')) {
                            adddisLikes()


                        }

                    }

                }
            }
        })

    }
    if (document.querySelector('.remove_btn_sub_form') !== null) {
        document.querySelector('.remove_btn_sub_form').addEventListener('click', () => {
            let user = getCookie('user')

            if (user !== '') {
                user = JSON.parse(user)
            } else { user = null }
            let myRating = JSON.parse(localStorage.getItem('myRatings'))
            let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
            if (document.querySelectorAll('.ct_bx_revies').length === 1) {

                document.querySelector('.ct_bx_first_icon').style.display = 'block'
            }
            for (let a = 0; a < document.querySelectorAll('.idUser').length; a++) {
                let cur = document.querySelectorAll('.ct_bx_revies')[a]
                let cur12 = document.querySelectorAll('.idUser')[a]
                let h4 = cur.childNodes[1].childNodes[3].innerText
                console.log(h4, user.n.split(' ').join('').toLowerCase() + user.ln.split(' ').join('').toLowerCase())
                console.log(user.authUser === cur12.innerText)

                //    return
                if (user.authUser === cur12.innerText) {

                    document.querySelector('.rate_prod_h4').innerText = 'Rate this product'
                    document.querySelector('.ct_bx_form_rating').style.opacity = .5
                    document.querySelector('.loading_rate_bx').style.display = 'block'
                    document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'none';


                    document.querySelectorAll('.ct_Remove_edit_bx button').forEach(cur => {
                        cur.style.opacity = .5
                        cur.style['pointer-events'] = 'none';

                    })
                    let catid = document.querySelector('.catId_fd').innerText

                    document.querySelector('.ct_rate_star_wrapper').classList.add('not_rated')
                    document.querySelector('.ct_rate_star_wrapper').classList.remove('rated_success')
                    const removeRatings = async () => {
                        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${catid}`)
                        let res = await dbCollection.get()
                        console.log(res.docs)
                        for (let i1 = 0; i1 < res.docs.length; i1++) {
                            let el1 = res.docs[i1]
                            let itm = el1.data().item
                            let cqa = el1.data().cqa
                            if (itm.id !== undefined) {
                                if (itm.id === token) {
                                    let ratings = itm.ratings
                                    const name = itm.name

                                    const group = itm.type
                                    const cook = itm.cook
                                    const time = itm.time
                                    const price = itm.price
                                    const base = itm.base
                                    const stock = itm.stock
                                    const includes = itm.fdInside
                                    const img = itm.img
                                    const requiredGroc = itm.requiredGroc
                                    const id = itm.id
                                    const reviews = itm.review
                                    const offer = itm.offer
                                    const ratingsFd = itm.ratings

                                    console.log(ratingsFd, ratings)
                                    for (let a = 0; a < ratings.length; a++) {

                                        item = ratings[a]

                                        myRating.forEach(el => {

                                            if (el.rate.id === token) {
                                                if (item.star === el.rate.ratings) {
                                                    console.log(item.ratings)

                                                    item.ratings--

                                                    document.querySelector('.ct_Remove_edit_bx').style.display = 'none'
                                                    document.querySelector('.for_submit_form_rev').style.display = 'block'
                                                    let head = document.querySelector('.headLine_form input')
                                                    head.readOnly = false
                                                    let subHead = document.querySelector('.subheadLine_form textarea')
                                                    subHead.readOnly = false
                                                    for (let i = 0; i < myRating.length; i++) {
                                                        let cur1 = myRating[i]

                                                        if (cur1.rate.id === token) {
                                                            myRating.splice(i, 1)

                                                            localStorage.setItem('myRatings', JSON.stringify(myRating))
                                                            break
                                                        }
                                                    }
                                                    document.querySelector('.ct_bx_form_rating').style.opacity = 1
                                                    document.querySelector('.loading_rate_bx').style.display = 'none'
                                                    document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'auto';


                                                    document.querySelectorAll('.ct_Remove_edit_bx button').forEach(cur => {
                                                        cur.style.opacity = 1
                                                        cur.style['pointer-events'] = 'auto';

                                                    })
                                                    for (let i2 = 0; i2 < reviews.length; i2++) {
                                                        let doc = reviews[i2]
                                                        if (doc.userId === user.authUser) {
                                                            reviews.splice(i2, 1)
                                                            let obj = {
                                                                cqa: cqa,
                                                                item: {
                                                                    name: name,
                                                                    base: base,
                                                                    type: group,
                                                                    cook: cook,
                                                                    time: time,
                                                                    price: price,
                                                                    fdInside: includes,
                                                                    img: img,
                                                                    offer: offer,
                                                                    requiredGroc: requiredGroc,
                                                                    id: id,
                                                                    stock: stock,
                                                                    review: reviews,
                                                                    ratings: ratings
                                                                }

                                                            }
                                                            console.log(obj)
                                                            dbCollection.doc(el1.id)
                                                                .set(obj)
                                                            break
                                                        }

                                                        break
                                                    }




                                                }

                                            }
                                        })
                                    }
                                    break
                                }
                            }


                        }


                    }

                    removeRatings()
                    cur.remove()
                    return
                }


            }

        })
    }
    if (document.querySelector('.ct_bx_serached_itm') !== null) {
        document.querySelector('.ct_bx_serached_itm').addEventListener('click', (e) => {
            document.querySelector('.ct_bx_serached_itm').style.display = 'none'
            const showSearchRes = async () => {
                document.querySelectorAll('.ct_bx_qa').forEach(cur => {
                    console.log
                    cur.remove()
                })
                let q = e.target.closest('.ct_bx_serached_itm ul li').innerText.split(' ').join('').trim()
                let id = window.location.search.split('?')[1].split('=')[4]
                let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${id}`)
                let res = await dbCollection.get()

                res.docs.forEach(cur => {
                    let itm = cur.data().item
                    let qa = cur.data().cqa
                    let token = window.location.search.split('?')[1].split('=')[1]
                    let jwt1 = parseJwt(token)
                    let nameJ = jwt1.item.name
                    if (itm.name === nameJ) {
                        qa.forEach(itmQ => {
                            if (itmQ.question.split(' ').join('').trim() === q) {
                                document.querySelectorAll('.ct_bx_qa').forEach(el => {
                                    el.remove()
                                })
                                let html = `      <div class="ct_bx_qa">
                            <div class="ct_itm_qa_bx">
                                <div class="ct_bx_queston_bx">
                                    <p>Question:</p>
                                    <span>${itmQ.question}</span>
                                </div>
                        
                            </div>
                            <div class="ct_itm_qa_bx">
                                <div class="ct_bx_a_q_bx">
                                    <p>Answer:</p>
                                    <span>${itmQ.answer}</span>
                                </div>
                        
                                <div class="ct_bx_by_whom">
                                    <p>${itmQ.by}</p>
                                </div>
                            </div>
                        </div>`

                                document.querySelector('.ct_bx_all_qa').insertAdjacentHTML('beforeend', html)
                            }
                        })

                    }
                })
            }

            showSearchRes()

        })
    }
    let outPutSearch = async (text) => {
        if (text.length > 0) {
            console.log(text)
            let id = window.location.search.split('?')[1].split('=')[4]
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${id}`)
            let res = await dbCollection.get()
            res.docs.forEach(cur => {
                let itm = cur.data().item
                let qa = cur.data().cqa
                let token = window.location.search.split('?')[1].split('=')[1]
                let jwt1 = parseJwt(token)
                let nameJ = jwt1.item.name
                if (itm.name === nameJ) {
                    document.querySelector('.ct_no_res_search_qa').style.display = 'none'
                    let matches = qa.filter(st => {
                        console.log(st)
                        return st.question.toLowerCase().startsWith(text)
                    })
                    if (matches.length !== 0) {
                        if (text.length > 1) {
                            if (matches.length !== 0) {
                                document.querySelector('.ct_bx_serached_itm').style.display = 'block'

                                let sugg = matches.map(itm => {
                                    let html = `    <li>
                            <p>${itm.question}</p>
                        
                                </li>`
                                    return html
                                })
                                let bx = document.querySelector('.ct_bx_serached_itm ul')
                                console.log(sugg.length)
                                if (sugg.length !== 0) {

                                    bx.innerHTML = sugg.join('')
                                }
                            } else {
                                document.querySelector('.ct_bx_serached_itm').style.display = 'none'

                            }
                        } else {
                            document.querySelector('.ct_bx_serached_itm').style.display = 'none'

                        }
                    } else {

                        document.querySelectorAll('.ct_bx_qa').forEach(cur => {
                            cur.remove()
                        })
                        notFound = true
                        
                        document.querySelector('.ct_bx_serached_itm').style.display='none'
                        document.querySelector('.ct_no_res_search_qa').style.display = 'block'
                    }
                }
            })

        } else {
            document.querySelectorAll('.ct_bx_qa').forEach(cur => {
                cur.remove()
            })
            document.querySelector('.ct_no_res_search_qa').style.display = 'none'
            addCqa()

        }
    }

    let search = document.querySelector('.Search_bar_qa')
    if (search !== null) {
        search.addEventListener('input', () => {
            outPutSearch(search.value)

        })
    }


})






let userDt = getCookie('user')
if (userDt !== '') {
    userDt = JSON.parse(userDt)
} else {
    userDt = null
}
let accMsg = document.querySelector('.ct_bx_remove_bx_msg_acc')
if (accMsg !== null) {
    accMsg.addEventListener('click', () => {
        document.querySelector('.ct_bx_cannot_login_signuop_acc').style.display = 'none'

    })
}
let loginDom = document.querySelector('.for_login2')

let signupDom = document.querySelector('.ct_signup')
if (signupDom !== null) {
    if (userDt !== null) {
        window.location.replace(`/account?user=${userDt.authUser}&sign=true`)
    }
}

if (loginDom !== null) {
    if (userDt !== null) {
        window.location.replace(`/account?user=${userDt.authUser}&log=true`)
    }
}
function myFunction2(x) {
    if (x.matches) {
        document.querySelector('html').addEventListener('click', (e) => {
            let bar = e.target.closest('.ct_bx_show_nav_adm')
            let elem = document.querySelector('.ct_side_bar')
            if (document.querySelector('.ct_side_bar') !== null) {
                if (bar !== null) {

                    if (elem.classList.value.split(' ').includes('not_tog')) {
                        elem.style.display = 'block'
                        elem.classList.add('tog')
                        elem.classList.remove('not_tog')

                    } else {
                        elem.style.display = 'none'
                        elem.classList.remove('tog')
                        elem.classList.add('not_tog')
                    }
                } else {
                    elem.style.display = 'none'
                    elem.classList.remove('tog')
                    elem.classList.add('not_tog')
                }
            }
        })
    }
}

var xa = window.matchMedia("(max-width: 500px)")
myFunction2(xa)
xa.addEventListener('change', myFunction2)






let addedOrder = 0

const addCqa = async () => {
    let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]
    let jwt1 = parseJwt(token)
    document.querySelector('.for_ek_fd_cart_load_rec_load2').style.display = 'block'

    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${window.location.search.split('?')[1].split('=')[4]}`)
    let res = await dbCollection.get()
    document.querySelector('.ct_no_res_search_qa').style.display = 'none'

    document.querySelector('.for_ek_fd_cart_load_rec_load2').style.display = 'none'
    res.docs.forEach(cur => {
        let item = cur.data().item
        console.log(item.img)
        let name = item.name.split(' ').join('').trim().toLowerCase()
        let name2 = jwt1.item.name.split(' ').join('').trim().toLowerCase()
        if (name2 === name) {
            document.querySelector('.ct_bx_img_itm').style.visibility = 'visible'
            document.querySelector('.ct_bx_img_itm img').src = item.img

            document.querySelector('.ct_bx_fex_fd_dt_ov .ct_full_loading_box').style.display = 'none'
            let qa = cur.data().cqa
            qa.forEach(el => {
                let cqaH = `     <div class="ct_bx_qa">
    <div class="ct_itm_qa_bx">
        <div class="ct_bx_queston_bx">
            <p>Question:</p>
            <span>${el.question}</span>
        </div>
    
    </div>
    <div class="ct_itm_qa_bx">
        <div class="ct_bx_a_q_bx">
            <p>Answer:</p>
            <span>${el.answer}</span>
        </div>
    
        <div class="ct_bx_by_whom">
            <p>${el.by}</p>
        </div>
    </div>
    </div>`

                document.querySelector('.ct_bx_all_qa').insertAdjacentHTML('beforeend', cqaH)

            })
        }

    })
}

let addedSearch = []
let lenFd = 0
let cont = document.querySelector('.ct_all_users')
if (cont !== null) {

    const user = async () => {
        let dbCollection = db.collection("users")
        let res = await dbCollection.get()
        document.querySelector('.for_users').style.display = 'none'
        if (res.docs.length === 0) {

            document.querySelector('.ct_x_users').style.display = 'block'

        }
        res.docs.forEach(cur => {

            let itm = cur.data().data
            let n = itm[0]
            let ln = itm[1]
            let email = itm[4]
            let add = itm[2]
            let lO = cur.data().myOrders.length
            let ph = itm[5]

            let html = `     <div class="ct_user_itm">
            <div class="ct_user_data_outer nottog_user_itm">
                <h4>${n} ${ln}</h4>
                <p>${lO}</p>
                <span>${ph}</span>
            </div>
            <div class="ct_inner_user_data">
                <div class="ct_user_name_inner">
                <ion-icon name="person"></ion-icon>
                <h4>${n} ${ln}</h4>
                </div>
                <div class="ct_orders_user_inner">
                    <p> orders on last 7 days:</p>
                    <span>${lO}</span>
                </div>
                <div class="ct_address_user_inner">
                    <p> address:</p>
                    <span>${add}</span>
                </div>
                <div class="ct_mail_user_inner">
                    <p> Gmaill:</p>
                    <span>${email}</span>
                </div>
                <div class="ct_mail_user_inner">
                    <p> phone number:</p>
                    <span>${ph}</span>
                </div>
            </div>
        </div>`
            document.querySelector('.ct_all_users').insertAdjacentHTML('beforeend', html)
            if (window.innerWidth < 450) {

                document.querySelectorAll('.nav_user_data ul li p').forEach(cur => {
                    cur.style.fontSize = '12px'
                })
            }
            if (window.innerWidth <= 420) {

                document.querySelectorAll('.ct_user_data_outer span').forEach(cur => {
                    cur.style.right = '-20px'
                })

                document.querySelectorAll('.ct_user_data_outer p').forEach(cur => {
                    cur.style.right = '86px'
                })
                document.querySelectorAll('.ct_user_data_outer span, .ct_user_data_outer p, .ct_user_data_outer h4').forEach(cur => {
                    cur.style.width = '14%'
                })
            }
        })
    }
    user()

}
document.querySelector('html').addEventListener('click', (e) => {
    if (e.target.closest('.ct_user_data_outer') !== null) {
        let itm = e.target.closest('.ct_user_data_outer')
        if (itm.parentElement.childNodes[1].classList.value.split(' ').includes('nottog_user_itm')) {
            console.log(itm.parentElement.childNodes[1])
            itm.parentElement.childNodes[3].style.display = 'block'
            console.log(itm.parentElement.childNodes[3])
            itm.parentElement.childNodes[1].classList.add('tog_user_itm')

            itm.parentElement.classList.add('selected_order_itm')
            itm.parentElement.childNodes[1].classList.remove('nottog_user_itm')
        } else {
            itm.parentElement.classList.remove('selected_order_itm')

            itm.parentElement.childNodes[3].style.display = 'none'
            itm.parentElement.childNodes[1].classList.remove('tog_user_itm')
            itm.parentElement.childNodes[1].classList.add('nottog_user_itm')
        }


    }
})

if (document.querySelector('.xclose_icon') !== null) {
    document.querySelectorAll('.xclose_icon').forEach(cur1 => {
        cur1.addEventListener('click', () => {
            cur1.style.display = 'none'
            document.querySelectorAll('.ct_bx_search input').forEach(cur => {
                cur.value = ''
                let li = document.querySelectorAll('.ct_bx_matched_itm li')
                console.log(li)
                li.forEach(cur => {
                    cur.remove()
                })


                document.querySelector('.ct_content_all_searched ul').innerHTML = ''


                document.querySelectorAll(' .ct_bx_matched_itm').forEach(cur => {
                    cur.style.display = 'none'
                })

                document.querySelectorAll('.ct_content_all_searched ul').forEach(cur => {
                    cur.innerHTML = ''

                })


                document.querySelector('.ct_bx_error').style.display = 'none'
                notS = null
                allReady = 0
                addedItm = 0
                numenator = 0
                denomenator = 0
                if (document.querySelector('#search') !== null) {
                    document.querySelector('#search').remove()

                }

                if (document.querySelector('.bodyessestials') !== null) {

                    functionAddItm2()
                    location.replace('/essentials')

                } else if (document.querySelector('.erak_fd_body') !== null) {
                    functionAddItm()
                    if (window.location.search !== '') {
                        location.replace('/foods')

                    }
                    document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'none'
                }
            })
        })
    })
}
if (document.querySelector('.ct_bx_search input') !== null) {
    document.querySelectorAll('.ct_bx_search input').forEach(cur => {
        cur.addEventListener('input', (e) => {
            console.log(cur.value)
            let txt = cur.value.toLowerCase()

            if (txt !== '') {

                const searchFood = async () => {
                    let dbCollection = db.collection(`searchFd`)

                    let res = await dbCollection.get()
                    let matched = res.docs.filter(cur => {

                        return cur.data().name.toLowerCase().startsWith(txt)
                    })
                    let lenFd = matched.length
                    if (matched.length !== 0) {
                        document.querySelectorAll('.ct_bx_error').forEach(cur => {
                            cur.style.display = 'none'
                        })
                        let emptyArr = matched.map(cur => {
                            let name = cur.data().name

                            let delP
                            let price
                            let off = cur.data().offer
                            if (off !== undefined) {
                                price = cur.data().price
                                price = parseFloat(price)
                                off = parseFloat(off)
                                delP = price - (price * (off / 100))
                                delP = "₹" + delP.toLocaleString()
                            } else {
                                delP = ''
                            }
                            let img = cur.data().img

                            price = cur.data().price
                            let html
                            if (cur.data().typ === 'fd') {


                                html = `<li>
                          <a href='/foods?q=${name}+${cur.data().typ}+${cur.data().catId}'>
   
                          <img src=${img}>
                          <div class="ct_bx_inner">
    <p>${name}</p>

                                       <span><del>  ${delP}</del>  ₹ ${price}</span>
   
                                       <pr>${cur.data().catId}</pr>
                                       </div>
                                       </a>
   
    </li>`



                            } else {
                                let com = cur.data().com

                                let unit = cur.data().unit
                                html = `<li>
                                <a href='/foods?q=${name}+${cur.data().typ}+${cur.data().catId}'>
         
                                <img src=${img}>
                                <div class="ct_bx_inner">
          <p>${name}</p>
          <un>${unit}</un>

      
                                             <span><del>  ${delP}</del>  ₹ ${price}</span>
         
                                             <pr>${cur.data().catId}</pr>
                                             </div>
                                             </a>
   `



                            }

                            return html

                        })
                        if (e.target.parentElement.parentElement.classList.value.split(' ').includes('for_mobile_search')) {

                            document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.display = 'block'
                            document.querySelector('.for_mobile_search .ct_content_all_searched ul').innerHTML = emptyArr.join('')

                        } else {
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'block'
                            document.querySelector('.for_nav_search .ct_content_all_searched ul').innerHTML = emptyArr.join('')

                        }

                    } else {
                        let li = document.querySelectorAll('.ct_bx_matched_itm li')
                        li.forEach(cur => {
                            cur.remove()
                        })
                        if (window.innerWidth <= 510) {

                            document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.display = 'block'
                            document.querySelector('.for_mobile_search .ct_bx_error').style.display = 'block'
                            document.querySelector('.for_mobile_search .ct_bx_error p').innerText = `no result found for " ${txt} "`
                        } else {
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'block'

                            document.querySelector('.ct_bx_error').style.display = 'block'



                            document.querySelector('.ct_bx_error p').innerText = `no result found for " ${txt} "`
                        }



                    }
                }
                searchFood()
            } else {
                let li = document.querySelectorAll('.ct_bx_matched_itm li')
                console.log(li)
                li.forEach(cur => {
                    cur.remove()
                })


                document.querySelector('.ct_content_all_searched ul').innerHTML = ''

                if (e.target.parentElement.parentElement.classList.value.split(' ').includes('for_mobile_search')) {

                    document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.display = 'none'
                    document.querySelector('.for_mobile_search .ct_content_all_searched ul').innerHTML = ''

                } else {
                    document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'none'
                    document.querySelector('.for_nav_search .ct_content_all_searched ul').innerHTML = ''

                }
                document.querySelector('.ct_bx_error').style.display = 'none'
                notS = null
                allReady = 0
                addedItm = 0
                numenator = 0
                denomenator = 0
                if (document.querySelector('#search') !== null) {
                    document.querySelector('#search').remove()

                }

                if (document.querySelector('.bodyessestials') !== null) {

                    functionAddItm2()
                    location.replace('/essentials')

                } else if (document.querySelector('.erak_fd_body') !== null) {
                    functionAddItm()
                    if (window.location.search !== '') {
                        location.replace('/foods')

                    }
                    document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'none'
                }
            }

        })
    })
}
if (document.querySelector('.close_msg_icon') !== null) {
    document.querySelectorAll('.close_msg_icon').forEach(cur => {
        cur.addEventListener('click', () => {
            document.querySelector('.ct_bx_message_adm2').style.display = 'none'

            document.querySelector('.ct_bx_message_adm').style.display = 'none'
        })
    })

}

const logout = async () => {
    let allgroc = JSON.parse(localStorage.getItem('grocFoodListCart'))

    let user = getCookie('user')

    if (user !== '') {
        user = JSON.parse(user)
    } else { user = null }
    document.querySelector('.for_acc_ov').style.display = 'block'
    let dbCollection = db.collection("users")
    let likes = JSON.parse(localStorage.getItem('likes'))
    let dislikes = JSON.parse(localStorage.getItem('dislikes'))
    let myr = JSON.parse(localStorage.getItem('myRatings'))
    let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
    dbCollection.get().then(res => {
        res.docs.forEach(async cur => {
            let myorders = cur.data().myOrders
            if (cur.data().authUser === user.authUser) {
                await dbCollection.doc(cur.id).set({
                    authUser: cur.data().authUser,
                    rootAutyh: cur.data().rootAutyh,

                    data: [user.n, user.ln, user.ad, user.pass, user.ct, user.service, user.pin],
                    cartItem: allfd,
                    cartGroc: allgroc,
                    myOrders: myorders,
                    myratings: myr,
                    likes: likes,
                    dislikes: dislikes
                })
                let userDt = getCookie('user')
                userDt = JSON.parse(userDt)

                let auth = userDt.authUser
                document.cookie = "user" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/";

                localStorage.clear()
                document.querySelector('.for_acc_ov').style.display = 'none'
                window.location.replace(`/foods?logout=${auth}`)
            }

        })

    })
}
if (document.querySelector('.logout_btn') !== null) {
    document.querySelectorAll('.logout_btn').forEach(cur => {
        cur.addEventListener('click', () => {

            logout()
        })
    })
}


if (document.querySelector('.ct_bx_account_exist button') !== null) {
    document.querySelector('.ct_bx_account_exist button').addEventListener('click', () => {

        logout()

    })
}

if (document.querySelector('.ct_bx_side_adm_user ') !== null) {
    const showOrders = async () => {

        let dbCollection = db.collection(`users`)
        let res = await dbCollection.get()
        document.querySelector('.for_adm_user_cart_load').style.display = 'none'
        res.docs.forEach(cur => {
            let mOrder = cur.data().myOrders
            let user1 = cur.data().data

            let user = getCookie('user')
            user = JSON.parse(user)
            let mainPriceFdT

            if (user.authUser === cur.data().authUser) {
                mOrder.forEach((cur1, index) => {
                    let htmlFd

                    if (cur1.canceled) {

                        let orders = cur1.orders
                        let time = cur1.time
                        let date = cur1.date
                        let arrFd = orders.map(el => {
                            if (el.data !== undefined) {
                                let priceFdT = 0

                                let item
                                if (el.data.data === undefined) {
                                    item = el.data.item
                                } else {
                                    item = el.data.data
                                }
                                console.log(el.data)
                                item.ratings.forEach(cur => {
                                    numen += cur.star * cur.ratings
                                    denomen += cur.ratings
                                })
                                cur1.amount.forEach((el1) => {
                                    el1 = parseFloat(el1)
                                    priceFdT += el1
                                })
                                priceFdT += 150
                                console.log(priceFdT)
                                let cook = item.cook
                                let name = item.name

                                let offer = item.offer

                                let price = item.price
                                let qt = el.qt
                                let img = item.img
                                let href = el.href
                                let time = 10

                                mainPriceFdT = priceFdT.toLocaleString()
                                let ratedFront = parseFloat((numen / denomen).toFixed(2).split('.')[0])

                                let ratedBack = parseFloat((numen / denomen).toFixed(2).split('.')[1].split('')[0])
                                let html1
                                let dN = new Date()
                                //test
                                let fdDate = parseFloat(dN.toLocaleString().split(',')[0].split('/')[1])
                                let dateToday = parseFloat(date.split(' ')[0]) + 1
                                if (fdDate >= dateToday) {
                                    const removeFd = async () => {
                                        let dbCollection = db.collection("users")
                                        let res = await dbCollection.get()
                                        mOrder.splice(index, 1)

                                        let user = getCookie('user')
                                        user = JSON.parse(user)
                                        res.docs.forEach(cur => {
                                            let item = cur.data().data
                                            if (cur.authUser === user.authUser) {

                                                let cartGroc = cur.data().cartGroc
                                                let cartItem = cur.data().cartItem
                                                let likes = cur.data().likes

                                                let dislikes = cur.data().dislikes
                                                let rtr = cur.data().myratings

                                                dbCollection.doc(cur.id).set({
                                                    data: item,
                                                    cartItem: cartItem,
                                                    cartGroc: cartGroc,
                                                    likes: likes,
                                                    dislikes: dislikes,
                                                    myratings: rtr,
                                                    authUser: cur.data().authUser,
                                                    rootAutyh: cur.data().rootAutyh,

                                                    myOrders: mOrder,
                                                })

                                            }
                                        })

                                    }
                                    removeFd()
                                    return
                                };
                                if (ratedFront === 5) {

                                    html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>


    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>`

                                } else {
                                    if (ratedFront === 4) {

                                        if (ratedBack > 1) {
                                            html1 = `       <span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>


<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
</span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`

                                        }
                                    } else if (ratedFront === 3) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    } else if (ratedFront === 2) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    } else if (ratedFront === 1) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    }
                                }



                                let type = item.type
                                if (offer !== null && offer !== undefined) {
                                    if (type === 'non-veg') {
                                        htmlFd = `               <li>
<div class="ct_all_over_fd_dt">
    <div class="ct_type_bx">
        <img
            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
    </div>
    <a class="for_img_order_user" href="product?${href}">
        <img class="main_img" src="${img}" alt="">

    </a>

    <div class="ct_fd_dt_full">
        <div class="ct_bx_food_dt_acc">
            <h4>${name}</h4>
            <div class="ct_bx_ratings">
               ${html1}
            </div>
            <a href="${cook}">How to cook ?</a>
            <p class="price_fd">₹ ${price}</p>
            <div class="ct_bx_btm_bar_order">
                <div class="ct_bx_of">
                    <p>${offer}% off</p>
                </div>
                <div class="ct_time">
                    <ion-icon name="alarm-outline"></ion-icon>

                    <p>${time} Min</p>
                </div>
            </div>

        </div>

        <span class="qt_order_itm">Quantity: ${qt}</span>
    </div>
</div>

</li>`
                                    } else {
                                        htmlFd = `               <li>
        <div class="ct_all_over_fd_dt">
            <div class="ct_type_bx">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#099f49">
                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                    </path>
                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                    </path>
                </g>
            </g>
        </svg>
            </div>
            <a class="for_img_order_user" href="product?${href}">
                <img class="main_img" src="${img}" alt="">
        
            </a>
        
            <div class="ct_fd_dt_full">
                <div class="ct_bx_food_dt_acc">
                <h4>${name}</h4>
                <div class="ct_bx_ratings">
                       ${html1}
                    </div>
                    <a href="${cook}">How to cook ?</a>
                    <p class="price_fd">₹ ${price}</p>
                    <div class="ct_bx_btm_bar_order">
                        <div class="ct_bx_of">
                            <p>${offer}% off</p>
                        </div>
                        <div class="ct_time">
                            <ion-icon name="alarm-outline"></ion-icon>
        
                            <p>${time} Min</p>
                        </div>
                    </div>
        
                </div>
        
                <span class="qt_order_itm">Quantity: ${qt}</span>
            </div>
        </div>
        
        </li>`
                                    }


                                } else {
                                    if (type === 'non-veg') {
                                        htmlFd = `               <li>
<div class="ct_all_over_fd_dt">
    <div class="ct_type_bx">
        <img
            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
    </div>
    <a class="for_img_order_user" href="product?${href}">
        <img class="main_img" src="${img}" alt="">

    </a>

    <div class="ct_fd_dt_full">
        <div class="ct_bx_food_dt_acc">
        <h4>${name}</h4>
        <div class="ct_bx_ratings">
               ${html1}
            </div>
            <a href="${cook}">How to cook ?</a>
            <p class="price_fd">₹ ${price}</p>
            <div class="ct_bx_btm_bar_order">
              
                <div class="ct_time">
                    <ion-icon name="alarm-outline"></ion-icon>

                    <p>${time} Min</p>
                </div>
            </div>

        </div>

        <span class="qt_order_itm">Quantity: ${qt}</span>
    </div>
</div>

</li>`
                                    } else {
                                        htmlFd = `               <li>
        <div class="ct_all_over_fd_dt">
            <div class="ct_type_bx">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#099f49">
                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                    </path>
                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                    </path>
                </g>
            </g>
        </svg>
            </div>
            <a class="for_img_order_user" href="product?${href}">
                <img class="main_img" src="${img}" alt="">
        
            </a>
        
            <div class="ct_fd_dt_full">
                <div class="ct_bx_food_dt_acc">
                <h4>${name}</h4>
                <div class="ct_bx_ratings">
                       ${html1}
                    </div>
                    <a href="${cook}">How to cook ?</a>
                    <p class="price_fd">₹ ${price}</p>
                    <div class="ct_bx_btm_bar_order">
                       
                        <div class="ct_time">
                            <ion-icon name="alarm-outline"></ion-icon>
        
                            <p>${time} Min</p>
                        </div>
                    </div>
        
                </div>
        
                <span class="qt_order_itm">Quantity: ${qt}</span>
            </div>
        </div>
        
        </li>`
                                    }

                                }

                                return htmlFd

                            } else {
                                let priceFdT = 0

                                let item = el
                                cur1.amount.forEach((el1) => {
                                    console.log(el1)
                                    el1 = parseFloat(el1)
                                    priceFdT += el1
                                })

                                priceFdT += 150
                                mainPriceFdT = priceFdT.toLocaleString()

                                console.log(priceFdT)
                                let com = item.com
                                let name = item.name

                                let offer = item.off
                                let type = item.type
                                let price = item.price
                                let qt = item.qt
                                let htmlFd
                                let img = item.img
                                let unit
                                if (item.selectedUnit !== null) {
                                    unit = item.selectedUnit

                                } else {
                                    unit = item.unit
                                }
                                let dN = new Date()
                                //test
                                let fdDate = parseFloat(dN.toLocaleString().split(',')[0].split('/')[1])
                                let dateToday = parseFloat(date.split(' ')[0]) + 1
                                console.log(dateToday, fdDate)
                                if (fdDate >= dateToday) {
                                    const removeFd = async () => {
                                        let dbCollection = db.collection("users")
                                        let res = await dbCollection.get()
                                        mOrder.splice(index, 1)

                                        let user = getCookie('user')
                                        user = JSON.parse(user)
                                        res.docs.forEach(cur => {
                                            let item = cur.data().data
                                            if (cur.authUser === user.authUser) {

                                                let cartGroc = cur.data().cartGroc
                                                let cartItem = cur.data().cartItem
                                                let likes = cur.data().likes

                                                let dislikes = cur.data().dislikes
                                                let rtr = cur.data().myratings

                                                dbCollection.doc(cur.id).set({
                                                    data: item,
                                                    cartItem: cartItem,
                                                    cartGroc: cartGroc,
                                                    likes: likes,
                                                    rootAutyh: cur.data().rootAutyh,
                                                    authUser: cur.data().authUser,
                                                    dislikes: dislikes,
                                                    myratings: rtr,
                                                    myOrders: mOrder,
                                                })

                                            }
                                        })

                                    }
                                    removeFd()
                                    return
                                };
                                if (offer !== undefined && offer !== null) {
                                    if (type === 'non-veg') {
                                        if (com !== null) {
                                            0
                                            htmlFd = `                 <li>
                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                    <img
                                        src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                        <p>${offer}</p>
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                    <span class="qt_order_itm">Quantity: ${qt}</span>
                                </div>
                            </div>
      
                        </li>`

                                        } else {
                                            htmlFd = `                 <li>
                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                                <img
                                                    src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd"> ${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    <p>${offer}</p>
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                                <span class="qt_order_itm">Quantity: ${qt}</span>
                                            </div>
                                        </div>
                  
                                    </li>`

                                        }
                                    } else {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#099f49">
                                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                        </path>
                                        <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                        <p>${offer}</p>
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                    <span class="qt_order_itm">Quantity: ${qt}</span>
                                </div>
                            </div>
      
                        </li>`

                                        } else {

                                            htmlFd = `                 <li>
                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#099f49">
                                                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                    </path>
                                                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd">${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    <p>${offer}</p>
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                                <span class="qt_order_itm">Quantity: ${qt}</span>
                                            </div>
                                        </div>
                  
                                    </li>`

                                        }
                                    }
                                } else {
                                    if (type === 'non-veg') {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                    <img
                                        src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                    <span class="qt_order_itm">Quantity: ${qt}</span>
                                </div>
                            </div>
      
                        </li>`

                                        } else {
                                            htmlFd = `                 <li>
                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                                <img
                                                    src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd"> ${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                                <span class="qt_order_itm">Quantity: ${qt}</span>
                                            </div>
                                        </div>
                  
                                    </li>`

                                        }
                                    } else {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#099f49">
                                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                        </path>
                                        <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                    <span class="qt_order_itm">Quantity: ${qt}</span>
                                </div>
                            </div>
      
                        </li>`

                                        } else {

                                            htmlFd = `                 <li>
                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#099f49">
                                                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                    </path>
                                                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd">${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                                <span class="qt_order_itm">Quantity: ${qt}</span>
                                            </div>
                                        </div>
                  
                                    </li>`

                                        }
                                    }
                                }
                                return htmlFd

                            }

                        })
                        let time1 = time.split(':')[0]
                        let time2 = time.split(':')[1]
                        let em = time.split(' ')[1].toLowerCase()
                        let html = `        <div class="ct_box_half_order">
                           <div class="ct_bx_nav_order_itm">
                        <div class="date_time_order">
                            
                            <p>Date of order placement</p>
                            
                            <span>${date}, ${time1}:${time2} ${em}</span>
                        </div>
                        <div class="bx_tot_ammount_order">
                        <span>Total Amount + delivery charge</span>
                        <p class="amount_tot_acc">₹ ${mainPriceFdT}</p>

                    </div>
                    </div>
                     <p class="cancel_st_order_user ">
                        <ion-icon name="alert-outline"></ion-icon> You canceled this order.
                    </p> 
                    <div class="bx_inner">
                     
                   
              
                        <ul>
                ${arrFd.join('')}

                        </ul>


                    </div>
                </div>`
                        let dN2 = new Date()
                        let fdDate2 = parseFloat(dN2.toLocaleString().split(',')[0].split('/')[1])
                        let dateToday2 = parseFloat(date.split(' ')[0]) + 1
                        if (fdDate2 >= dateToday2) {


                            return
                        };
                        addedOrder++
                        document.querySelector('.ct_bx_orders').insertAdjacentHTML('afterbegin', html)


                        if (window.innerWidth < 400) {
                            document.querySelectorAll('.ct_bx_food_dt_acc h4').forEach(cur => {
                                cur.style.fontSize = '13px'
                            })

                            document.querySelectorAll('.ct_bx_food_dt_acc a').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                            document.querySelectorAll('.ct_fd_dt_full .qt_order_itm').forEach(cur => {
                                cur.style.fontSize = '9px'
                            })

                            document.querySelectorAll('.ct_time p, .ct_unit p, .ct_bx_of p').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                         
                            document.querySelectorAll('.date_time_order').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                          
                        }

                        if (window.innerWidth < 470) {

                            document.querySelectorAll('.date_time_order').forEach(cur => {
                                cur.style.fontSize = '11px'
                            })


                      
                            document.querySelector('.ct_inner_dt_order_none h3').style.fontSize = '14px'
                   
                            document.querySelectorAll('.ct_fd_dt_full .qt_order_itm').forEach(cur => {
                                cur.style.top = '15px'
                                cur.style.marginLeft = '120px'
                            })
                            document.querySelectorAll('.ct_fd_dt_full').forEach(cur => {
                                cur.style.transform = 'translate(-10px,-15px)'
                            })
                            document.querySelectorAll('.ct_box_half_order .main_img').forEach(cur => {
                                cur.style.width = '100%'
                            })
                            document.querySelectorAll('.ct_bx_food_dt_acc h4').forEach(cur => {
                                cur.style.width = '100%'
                            })
                           
                        
                        }
                    } else {

                        let orders = cur1.orders
                        let time = cur1.time
                        let date = cur1.date
                        let arrFd = orders.map(el => {
                            if (el.data !== undefined) {
                                let priceFdT = 0

                                let item = el.data.item
                                item.ratings.forEach(cur => {
                                    numen += cur.star * cur.ratings
                                    denomen += cur.ratings
                                })
                                cur1.amount.forEach((el1) => {
                                    el1 = parseFloat(el1)
                                    priceFdT += el1
                                })
                                priceFdT += 150
                                console.log(priceFdT)
                                let cook = item.cook
                                let name = item.name

                                let offer = item.offer

                                let price = item.price
                                let qt = el.qt
                                let img = item.img
                                let href = el.href
                                let time = 10

                                mainPriceFdT = priceFdT.toLocaleString()
                                let ratedFront = parseFloat((numen / denomen).toFixed(2).split('.')[0])

                                let ratedBack = parseFloat((numen / denomen).toFixed(2).split('.')[1].split('')[0])
                                let html1

                                if (ratedFront === 5) {

                                    html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>


    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>

    <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
    </span>`

                                } else {
                                    if (ratedFront === 4) {

                                        if (ratedBack > 1) {
                                            html1 = `       <span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>


<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
</span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`

                                        }
                                    } else if (ratedFront === 3) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    } else if (ratedFront === 2) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    } else if (ratedFront === 1) {
                                        if (ratedBack > 1) {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        } else {
                                            html1 = `       <span>
            <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
            </span>
            
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>
            
            <span>
            <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
            </span>`
                                        }
                                    }
                                }



                                let type = item.type
                                if (offer !== null && offer !== undefined) {
                                    if (type === 'non-veg') {
                                        htmlFd = `               <li>
                                        <span class="qt_order_itm">Quantity: ${qt}</span>

<div class="ct_all_over_fd_dt">
    <div class="ct_type_bx">
        <img
            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
    </div>
    <a class="for_img_order_user" href="product?${href}">
        <img class="main_img" src="${img}" alt="">

    </a>

    <div class="ct_fd_dt_full">
        <div class="ct_bx_food_dt_acc">
            <h4>${name}</h4>
            <div class="ct_bx_ratings">
               ${html1}
            </div>
            <a href="${cook}">How to cook ?</a>
            <p class="price_fd">₹ ${price}</p>
            <div class="ct_bx_btm_bar_order">
                <div class="ct_bx_of">
                    <p>${offer}% off</p>
                </div>
                <div class="ct_time">
                    <ion-icon name="alarm-outline"></ion-icon>

                    <p>${time} Min</p>
                </div>
            </div>

        </div>

    </div>
</div>

</li>`
                                    } else {
                                        htmlFd = `               <li>
                                        <span class="qt_order_itm">Quantity: ${qt}</span>

        <div class="ct_all_over_fd_dt">
            <div class="ct_type_bx">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#099f49">
                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                    </path>
                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                    </path>
                </g>
            </g>
        </svg>
            </div>
            <a class="for_img_order_user" href="product?${href}">
                <img class="main_img" src="${img}" alt="">
        
            </a>
        
            <div class="ct_fd_dt_full">
                <div class="ct_bx_food_dt_acc">
                <h4>${name}</h4>
                <div class="ct_bx_ratings">
                       ${html1}
                    </div>
                    <a href="${cook}">How to cook ?</a>
                    <p class="price_fd">₹ ${price}</p>
                    <div class="ct_bx_btm_bar_order">
                        <div class="ct_bx_of">
                            <p>${offer}% off</p>
                        </div>
                        <div class="ct_time">
                            <ion-icon name="alarm-outline"></ion-icon>
        
                            <p>${time} Min</p>
                        </div>
                    </div>
        
                </div>
        
            </div>
        </div>

        </li>`
                                    }


                                } else {
                                    if (type === 'non-veg') {
                                        htmlFd = `               <li>
                                        <span class="qt_order_itm">Quantity: ${qt}</span>

<div class="ct_all_over_fd_dt">
    <div class="ct_type_bx">
        <img
            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
    </div>
    <a class="for_img_order_user" href="product?${href}">
        <img class="main_img" src="${img}" alt="">

    </a>

    <div class="ct_fd_dt_full">
        <div class="ct_bx_food_dt_acc">
        <h4>${name}</h4>
        <div class="ct_bx_ratings">
               ${html1}
            </div>
            <a href="${cook}">How to cook ?</a>
            <p class="price_fd">₹ ${price}</p>
            <div class="ct_bx_btm_bar_order">
              
                <div class="ct_time">
                    <ion-icon name="alarm-outline"></ion-icon>

                    <p>${time} Min</p>
                </div>
            </div>

        </div>

    </div>
</div>

</li>`
                                    } else {
                                        htmlFd = `               <li>
                                        <span class="qt_order_itm">Quantity: ${qt}</span>

        <div class="ct_all_over_fd_dt">
            <div class="ct_type_bx">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#099f49">
                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                    </path>
                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                    </path>
                </g>
            </g>
        </svg>
            </div>
            <a class="for_img_order_user" href="product?${href}">
                <img class="main_img" src="${img}" alt="">
        
            </a>
        
            <div class="ct_fd_dt_full">
                <div class="ct_bx_food_dt_acc">
                <h4>${name}</h4>
                <div class="ct_bx_ratings">
                       ${html1}
                    </div>
                    <a href="${cook}">How to cook ?</a>
                    <p class="price_fd">₹ ${price}</p>
                    <div class="ct_bx_btm_bar_order">
                       
                        <div class="ct_time">
                            <ion-icon name="alarm-outline"></ion-icon>
        
                            <p>${time} Min</p>
                        </div>
                    </div>
        
                </div>
        
            </div>
        </div>
        <span class="qt_order_itm">Quantity: ${qt}</span>

        </li>`
                                    }

                                }

                                return htmlFd

                            } else {
                                let priceFdT = 0

                                let item = el
                                cur1.amount.forEach((el1) => {
                                    console.log(el1)
                                    el1 = parseFloat(el1)
                                    priceFdT += el1
                                })
                                priceFdT += 150
                                mainPriceFdT = priceFdT
                                let com = item.com
                                let name = item.name

                                let offer = item.off
                                let type = item.type
                                let price = item.price
                                let qt = item.qt
                                let htmlFd
                                let img = item.img
                                let unit
                                if (item.selectedUnit !== null) {
                                    unit = item.selectedUnit

                                } else {
                                    unit = item.unit
                                }
                                console.log(unit, offer, price, type, com)
                                if (offer !== undefined && offer !== null) {
                                    if (type === 'non-veg') {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                    <img
                                        src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                        <p>${offer}</p>
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                </div>
                            </div>

                        </li>`

                                        } else {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                                <img
                                                    src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd"> ${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    <p>${offer}</p>
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                            </div>
                                        </div>

                                    </li>`

                                        }
                                    } else {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#099f49">
                                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                        </path>
                                        <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                        <p>${offer}</p>
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                </div>
                            </div>

                        </li>`

                                        } else {

                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#099f49">
                                                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                    </path>
                                                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd">${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    <p>${offer}</p>
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                            </div>
                                        </div>

                                    </li>`

                                        }
                                    }
                                } else {
                                    if (type === 'non-veg') {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                    <img
                                        src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                </div>
                            </div>

                        </li>`

                                        } else {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                                <img
                                                    src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd"> ${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                            </div>
                                        </div>

                                    </li>`

                                        }
                                    } else {
                                        if (com !== null) {
                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                            <div class="ct_all_over_fd_dt for_grocery_order">
                                <div class="ct_type_bx">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#099f49">
                                        <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                        </path>
                                        <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                                </div>
                                <div class="for_img_order_user2">
                                    <img class="main_img" src="${img}" alt="">
      
                                </div>
      
                                <div class="ct_fd_dt_full">
                                    <div class="ct_bx_food_dt_acc">
                                        <span class="com_itm_ord">${com}</span>
                                        <h4>${name}</h4>
                                        <p class="unit_itm_ord">${unit}</p>
                                       
                                        <p class="price_fd"> ${price}</p>
                                        <div class="ct_bx_btm_bar_order">
                                        <div class="ct_bx_of">
                                    </div>
                                          
                                        </div>
      
                                    </div>
      
                                </div>
                            </div>

                        </li>`

                                        } else {

                                            htmlFd = `                 <li>
                                            <span class="qt_order_itm">Quantity: ${qt}</span>

                                        <div class="ct_all_over_fd_dt for_grocery_order">
                                            <div class="ct_type_bx">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                                <g fill="#099f49">
                                                    <path d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                    </path>
                                                    <path d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                    </path>
                                                </g>
                                            </g>
                                        </svg>
                                            </div>
                                            <div class="for_img_order_user2">
                                                <img class="main_img" src="${img}" alt="">
                  
                                            </div>
                  
                                            <div class="ct_fd_dt_full">
                                                <div class="ct_bx_food_dt_acc">
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                   
                                                    <p class="price_fd">${price}</p>
                                                    <div class="ct_bx_btm_bar_order">
                                                    <div class="ct_bx_of">
                                                    </div>
                                                      
                                                    </div>
                  
                                                </div>
                  
                                            </div>
                                        </div>

                                    </li>`

                                        }
                                    }
                                }
                                return htmlFd

                            }

                        })
                        let dN2 = new Date()
                        //test
                        let fdDate2 = parseFloat(dN2.toLocaleString().split(',')[0].split('/')[1])
                        let dateToday2 = parseFloat(date.split(' ')[0]) + 1
                        if (fdDate2 >= dateToday2) {
                            const removeFd = async () => {
                                let dbCollection = db.collection("users")
                                let res = await dbCollection.get()
                                mOrder.splice(index, 1)
                                let user = getCookie('user')
                                user = JSON.parse(user)
                                res.docs.forEach(cur => {
                                    let item = cur.data().data
                                    if (cur.authUser === user.authUser) {
                                        let cartGroc = cur.data().cartGroc
                                        let cartItem = cur.data().cartItem
                                        let likes = cur.data().likes

                                        let dislikes = cur.data().dislikes
                                        let rtr = cur.data().myratings
                                        console.log(cur.data())
                                        dbCollection.doc(cur.id).set({
                                            data: item,
                                            cartItem: cartItem,
                                            cartGroc: cartGroc,
                                            likes: likes,
                                            rootAutyh: cur.data().rootAutyh,
                                            authUser: cur.data().authUser,
                                            dislikes: dislikes,
                                            myratings: rtr,
                                            myOrders: mOrder,
                                        }).then(() => console.log('saved'))
                                        if (addedOrder === 0) {
                                            document.querySelector('.ct_bx_no_order_yet').style.display = 'block'
                                        }
                                    }
                                })

                            }
                            removeFd()

                            return
                        }
                        let time1 = time.split(':')[0]
                        let time2 = time.split(':')[1]
                        let em = time.split(' ')[1].toLowerCase()

                        let html = `        <div class="ct_box_half_order">
                        <div class="ct_bx_nav_order_itm">
                        <div class="date_time_order">
                            <p>Date of order placement</p>
                            <span>${date}, ${time1}:${time2} ${em}</span>
                        </div>
                        <div class="bx_tot_ammount_order">
                        <span class='vm'>T.A + D.C</span>

                        <span class='vd'>Total Amount + delivery charge</span>
                        <p class="amount_tot_acc">₹ ${mainPriceFdT}</p>

                    </div>
                    </div>
                    <div class="bx_inner">
                     
                        <ul>
                ${arrFd.join('')}

                        </ul>


                    </div>
                </div>`
                        addedOrder++
                        document.querySelector('.ct_bx_orders').insertAdjacentHTML('afterbegin', html)

                        if (window.innerWidth < 400) {
                            document.querySelectorAll('.ct_bx_food_dt_acc h4').forEach(cur => {
                                cur.style.fontSize = '13px'
                            })

                            document.querySelectorAll('.ct_bx_food_dt_acc a').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                            document.querySelectorAll('.ct_fd_dt_full .qt_order_itm').forEach(cur => {
                                cur.style.fontSize = '9px'
                            })

                            document.querySelectorAll('.ct_time p, .ct_unit p, .ct_bx_of p').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                          
                            document.querySelectorAll('.date_time_order').forEach(cur => {
                                cur.style.fontSize = '10px'
                            })
                           
                        }
                        if (window.innerWidth < 470) {
                         
                            document.querySelectorAll('.date_time_order').forEach(cur => {
                                cur.style.fontSize = '11px'
                            })


                         
                            document.querySelector('.ct_inner_dt_order_none h3').style.fontSize = '14px'
                          
                            document.querySelectorAll('.ct_fd_dt_full .qt_order_itm').forEach(cur => {
                                cur.style.top = '15px'
                                cur.style.marginLeft = '120px'
                            })
                           
                            document.querySelectorAll('.ct_box_half_order .main_img').forEach(cur => {
                                cur.style.width = '100%'
                            })
                            document.querySelectorAll('.ct_bx_food_dt_acc h4').forEach(cur => {
                                cur.style.width = '100%'
                            })
                        }
                    }
                })
            }

        })
        if (addedOrder === 0) {
            document.querySelector('.ct_bx_no_order_yet').style.display = 'block'
        }
    }
    showOrders()





    if (document.querySelector('.succ_otp .ct_remove_bill_pop_up_update_acc') !== null) {
        document.querySelector('.succ_otp .ct_remove_bill_pop_up_update_acc').addEventListener('click', () => {

            document.querySelector('.ct_bx_acc_user_dt .ct_bx_message_succesfully_ordered.succ_otp').style.display = 'none'
        })
        document.querySelector('.err_otp .ct_remove_bill_pop_up_update_acc').addEventListener('click', () => {

            document.querySelector('.ct_bx_acc_user_dt .ct_bx_message_succesfully_ordered.err_otp').style.display = 'none'
        })
    }


    // let cartGroc=cur.data().cartGroc
    // let cartItem=cur.data().cartItem
    // let myOrders=cur.data().myOrders


    let user = getCookie('user')
    console.log(user)
    user = JSON.parse(user)

    document.querySelector('.phone_num_dt span').innerText = user.service
    document.querySelector('.gmail_dt span').innerText = user.ct
    document.querySelector('.address_dt span').innerText = user.ad


    document.querySelector('.loc_dt span').innerText = user.pin


    document.querySelector('.ct_bx_edit_acc').addEventListener('click', () => {
        document.querySelector('.ct_edit_cc #nick_name_inp_dt').value = user.n
        document.querySelector('.ct_edit_cc #lst_name_inp').value = user.ln
        document.querySelector('.ct_edit_cc #address_inp').value = user.ad
        document.querySelector('.ct_edit_cc #phone_num_inp').value = user.service
        document.querySelector('.ct_edit_cc #pass_inp').value = ''
        document.querySelector('.ct_edit_cc #Gmail_dt').value = user.ct
        document.querySelector('.ct_edit_cc #pin').value = user.pin

        document.querySelector('.ct_edit_cc').style.display = 'block'
    
        document.querySelector('.ct_show_acc_dt').style.display = 'block'

        document.querySelector('.ct_bx_peoples_details').style.display = 'none'

    })
    document.querySelector('.btn_cancel').addEventListener('click', () => {
        document.querySelector('.ct_edit_cc').style.display = 'none'
        document.querySelector('.ct_bx_peoples_details').style.display = 'block'

    })



    window.onload = () => {
        let accBx = document.querySelector('.on_edit_profile_acc')
        if (accBx !== null) {
            if (window.location.search.split('?')[1].split('&')[1] !== undefined) {
                window.location.search.split('?')[1].split('&')[1]
                let accSign = window.location.search.split('?')[1].split('&')[1].split('=')[0]
                if (accSign === 'sign') {
                    document.querySelector('.ct_bx_cannot_login_signuop_acc').style.display = 'flex'
                } else if (accSign === 'log') {
                    document.querySelector('.ct_bx_cannot_login_signuop_acc p').innerText = `To login again you have to logout.`

                    document.querySelector('.ct_bx_cannot_login_signuop_acc h4').innerText = `you cannot login with existing account.`
                    document.querySelector('.ct_bx_cannot_login_signuop_acc').style.display = 'flex'

                }
            }
        }
       
        if (window.location.search.split('?')[1].split('=')[0] === 'updated' && window.location.pathname === '/account') {
            if (window.location.search.split('?')[1].split('=')[0] === 'true') {
                document.querySelector('.on_edit_profile_acc .ct_bx_message_succesfully_ordered.succ_otp').style.display = 'inline-block'

            }
        }
        if (window.location.search.split('?')[1].split('=')[0] === 'authuser') {

            if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
                window.history.back()
                return
            }
            let token = window.location.search.split('?')[1].split('=')[1]

            let jwt = parseJwt(token)
            let user = getCookie('user')
            user = JSON.parse(user)

            const updateAcc = async () => {
                let dbCollection = db.collection(`users`)
                document.querySelector('.for_acc_ov').style.display = 'block'

                var bcrypt = dcodeIO.bcrypt;
                let hash = bcrypt.hashSync(jwt.a.password, 4);
                let res = await dbCollection.get()
                let matchedName = 1
                let matchedPass = 1
                let data
                let checkPas
                let cartGroc
                let cartItem
                let myOrders
                let authUser
                let mr
                let docId
                let likes

                let dislikes

                let user = getCookie('user')
                user = JSON.parse(user)
                res.docs.forEach(cur => {
                    console.log(cur.id)
                    data = cur.data().data
                    console.log(data[3])
                    checkPas = bcrypt.compareSync(jwt.a.password, data[3]);
                    cartGroc = cur.data().cartGroc
                    cartItem = cur.data().cartItem
                    myOrders = cur.data().myOrders
                    authUser = cur.data().authUser
                    mr = cur.data().myratings
                    likes = cur.data().likes

                    dislikes = cur.data().dislikes
                    if (jwt.a.name.split(' ').join('').trim() === user.n.split(' ').join('').trim()) {
                        matchedName = 0
                    } else if (data[0].split(' ').join('').trim() === jwt.a.name.split(' ').join('').trim()) {
                        matchedName++

                    }

                    if (checkPas) {

                        matchedPass++

                    }
                    if (user.authUser === authUser) {
                        docId = cur.id

                    }
                    console.log(docId)

                })
                if (matchedPass < 2) {
                    dbCollection.doc(docId).set({
                        cartGroc: cartGroc,
                        cartItem: cartItem,
                        likes: likes,
                        myratings: mr,
                        dislikes: dislikes,
                        myOrders: myOrders,
                        data: [
                            jwt.a.name,
                            jwt.a.lastname,
                            jwt.a.address,
                            hash,
                            jwt.a.password_login,

                            jwt.a.phonenumber,
                            jwt.a.pin,

                        ],
                        authUser: user.authUser,

                    })
                        .then(() => {
                            document.querySelector('.ed_acc').classList.remove('active_slide_user_Dash')
                            document.querySelector('.for_acc_ov').style.display = 'none'

                            document.querySelector('.acc_set_main_nav h3').innerText = jwt.a.name
                            document.querySelector('.ct_bx_acc_user_dt .ct_bx_message_succesfully_ordered.succ_otp').style.display = 'inline-block'
                            document.querySelector('.ct_order_coll_acc_us').style.display = 'none'
                            document.querySelector('.acc_ek_ser').classList.add('active_slide_user_Dash')
                            document.querySelector('.ct_bx_verif_acc_num').style.display = 'none'


                            document.querySelector('.ct_show_acc_dt').style.display = 'block'

                            document.querySelector('.ct_bx_acc_user_dt .new_pass_ek_user').style.display = 'none'
                            document.querySelector('.ct_bx_acc_user_dt').style.display = 'block'
                            let user1 = {}
                            console.log(jwt)
                            user1.n = jwt.a.name,
                                user1.ln = jwt.a.lastname,
                                user1.ad = jwt.a.address,
                                user1.pass = hash,
                                user1.ct = jwt.a.password_login
                            user1.authUser = user.authUser
                            user1.service = jwt.a.phonenumber

                            document.cookie = "user" + "=" + JSON.stringify(user1) + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/"


                        })
                    // }
                    // }
                } else if (matchedPass >= 2) {
                    document.querySelector('.err_otp h2').innerText = `Your provided password is already taken,please try again.`
                    document.querySelector('.err_otp').style.display = 'block'
                    document.querySelector('.for_acc_ov').style.display = 'none'
                }

            }
            updateAcc()


        }

    }



    // document.querySelectorAll('.ct_bx_side_adm_user 

   // document.querySelectorAll('.ct_bx_for_orders').forEach(cur => {

    //     cur.addEventListener('click', () => {
    //         console.log(cur.childNodes)
    //         let txt = cur.childNodes[1].innerText
    //         if(window.location.pathname.split('/').includes('editAccount')){
    //             return
    //         }
    //         if (document.querySelector('.ct_bx_for_orders.active_selcted_nav_account') !== null) {
    //             document.querySelector('.ct_bx_for_orders.active_selcted_nav_account').classList.remove('active_selcted_nav_account')
    //         }
    //         if (txt === 'Orders') {
    //             cur.classList.add('active_selcted_nav_account')
    //             document.querySelector('.ct_bx_account_exist').style.display = 'none'

    //             document.querySelector('.ct_order_coll_acc_us').style.display = 'block'
    //             document.querySelector('.ct_bx_acc_user_dt').style.display = 'none'

    //         } else if (txt === 'Account') {
    //             document.querySelector('.ct_order_coll_acc_us').style.display = 'none'

    //             cur.classList.add('active_selcted_nav_account')
    //             document.querySelector('.ct_bx_verif_acc_num').style.display = 'none'


    //             document.querySelector('.ct_show_acc_dt').style.display = 'block'
    //             document.querySelector('.ct_bx_account_exist').style.display = 'none'

    //             document.querySelector('.ct_bx_acc_user_dt').style.display = 'block'

    //         } else if (txt === 'Logout') {
    //             document.querySelector('.ct_order_coll_acc_us').style.display = 'none'

    //             cur.classList.add('active_selcted_nav_account')
    //             document.querySelector('.ct_bx_verif_acc_num').style.display = 'none'


    //             document.querySelector('.ct_bx_account_exist').style.display = 'flex'

    //             document.querySelector('.ct_show_acc_dt').style.display = 'none'

    //             document.querySelector('.ct_bx_acc_user_dt').style.display = 'none'

    //         }
    //     })
    // })

    document.querySelectorAll('.ct_bx_side_adm_user.main ul li').forEach(cur => {

        cur.addEventListener('click', () => {
            document.querySelector('.main .active_slide_user_Dash').classList.remove('active_slide_user_Dash')

            if (cur.innerText === 'My Orders') {
                cur.classList.add('active_slide_user_Dash')

                document.querySelector('.ct_order_coll_acc_us').style.display = 'block'
                document.querySelector('.ct_bx_acc_user_dt').style.display = 'none'

            } else if (cur.innerText === 'Account') {
                document.querySelector('.ct_order_coll_acc_us').style.display = 'none'

                cur.classList.add('active_slide_user_Dash')
                document.querySelector('.ct_bx_verif_acc_num').style.display = 'none'


                document.querySelector('.ct_show_acc_dt').style.display = 'block'

                document.querySelector('.ct_bx_acc_user_dt').style.display = 'block'

            }
        })
    })
}
let numLen = 0
if (document.querySelector('.bx_show_stock_cat') !== null) {

    document.querySelectorAll('.side_nav_bar_adm  li').forEach(cur => {
        cur.addEventListener('click', () => {
            console.log(cur.innerText === '')
            if (cur.innerText === 'Manage Stock') {

                document.querySelector('.act_bx_adm').classList.remove('act_bx_adm')
                document.querySelector('.bx_show_stock_cat').style.display = 'block'
                cur.classList.add('act_bx_adm')
                document.querySelector('.ct_x_users').style.display = 'none'

                document.querySelector('.ct_bx_for_stock_management').style.display = 'block'

                document.querySelector('.ct_bx_for_orders_page').style.display = 'none'
            } else if (cur.innerText === 'View Order') {
                document.querySelector('.ct_bx_for_stock_management').style.display = 'none'
                document.querySelector('.bx_show_stock_cat').style.display = 'none'
                document.querySelector('.act_bx_adm').classList.remove('act_bx_adm')
                cur.classList.add('act_bx_adm')
                document.querySelector('.ct_x_users').style.display = 'none'

                document.querySelector('.ct_bx_for_orders_page').style.display = 'block'
            } else if (cur.innerText === 'Users') {
                document.querySelector('.ct_bx_for_stock_management').style.display = 'none'
                document.querySelector('.bx_show_stock_cat').style.display = 'none'
                document.querySelector('.act_bx_adm').classList.remove('act_bx_adm')

                document.querySelector('.ct_x_users').style.display = 'block'

                cur.classList.add('act_bx_adm')
                document.querySelector('.ct_bx_for_orders_page').style.display = 'none'
            }
        })
    })
    document.querySelector('.ct_bx_remove_msg_stk').addEventListener('click', () => {

        document.querySelector('.ct_bx_stock_message').style.display = 'none'
    })
    document.querySelectorAll('.bx_show_stock_cat ul li').forEach(cur => {
        cur.addEventListener('click', () => {

            console.log(cur.innerText)
            let tx = cur.innerText
            if (tx === 'Grocery') {
                document.querySelector('.active_cat_stock').classList.add('unactive_cat_stock')
                document.querySelector('.active_cat_stock').classList.remove('active_cat_stock')

                cur.classList.remove('unactive_cat_stock')
                cur.classList.add('active_cat_stock')

                document.querySelector('.for_groc_fd_stock').style.display = 'block'

                document.querySelector('.for_ek_fd_stock').style.display = 'none'
                addStock('groc')
            } else {
                document.querySelector('.active_cat_stock').classList.add('unactive_cat_stock')
                document.querySelector('.active_cat_stock').classList.remove('active_cat_stock')

                cur.classList.remove('unactive_cat_stock')
                cur.classList.add('active_cat_stock')

                addStock()

            }
        })
    })
    document.querySelector('html').addEventListener('click', (e) => {
        let bxUpBtn = e.target.closest('.update_btn_stk')
        let bxUpBtn2 = e.target.closest('.for_update_stk_groc')
        if (bxUpBtn2 !== null) {
            let p
            let cId
            let inp
            const updateStock = async () => {
                console.log(bxUpBtn2.parentElement.parentElement.childNodes)
                if (bxUpBtn2.parentElement.parentElement.childNodes[1].classList.value.split(' ').includes('ct_bx_alert_tock')) {
                    let elem = bxUpBtn2.parentElement.parentElement.childNodes[3].childNodes
                    if (elem[1].tagName.toLowerCase() === 'span') {
                        com = elem[1].innerText
                        p = elem[3].innerText
                        cId = elem[5].innerText

                    } else {
                        com = null
                        p = elem[1].innerText
                        cId = elem[3].innerText

                    }
                    console.log(com, p)
                    inp = bxUpBtn2.parentElement.childNodes[1].value
                } else {
                    let elem = bxUpBtn2.parentElement.parentElement.childNodes[1].childNodes
                    if (elem[1].tagName.toLowerCase() === 'span') {
                        com = elem[1].innerText
                        p = elem[3].innerText
                        cId = elem[5].innerText

                    } else {
                        com = null
                        p = elem[1].innerText
                        cId = elem[3].innerText

                    }
                    console.log(com, p)
                    inp = bxUpBtn2.parentElement.childNodes[1].value
                }
                console.log(cId)

                let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${cId}`)


                let dbCo = await dbCollection.get()
                dbCo.docs.forEach(cur => {
                    let el = cur.data().item
                    if (com !== null && el.com !== null) {

                        if (el.name.split(' ').join('') === p.split(' ').join('') && el.com === com) {
                            if (el.id !== undefined) {
                                const name = el.name



                                const id = el.id

                                const img = el.img

                                const offer = el.offer
                                const com = el.com
                                const price = el.price
                                const unit = el.unit
                                const time = el.time
                                const type = el.group

                                const unitInside = el.unitInside
                                const stock = inp
                                dbCollection.doc(cur.id).set({
                                    item: {
                                        name: name,

                                        unitInside: unitInside,
                                        id: id,
                                        com: com,
                                        img: img,

                                        offer: offer,
                                        unit: unit,

                                        price: price,
                                        group: type,

                                        stock: stock
                                    }
                                })
                                    .then(() => { document.querySelector('.ct_bx_stock_message').style.display = 'flex' })
                            }
                        }
                    } else {

                        if (el.name.split(' ').join('') === p.split(' ').join('')) {
                            if (el.id !== undefined) {
                                const name = el.name



                                const id = el.id

                                const img = el.img

                                const offer = el.offer
                                const com = el.com
                                const price = el.price
                                const unit = el.unit
                                const time = el.time
                                const type = el.group

                                const unitInside = el.unitInside
                                const stock = inp
                                dbCollection.doc(cur.id).set({
                                    item: {
                                        name: name,

                                        unitInside: unitInside,
                                        id: id,
                                        com: com,
                                        img: img,

                                        offer: offer,
                                        unit: unit,

                                        price: price,
                                        group: type,

                                        stock: stock
                                    }
                                }).then(() => { document.querySelector('.ct_bx_stock_message').style.display = 'flex' })
                            }
                        }
                    }
                })
            }
            updateStock()
        } else if (bxUpBtn !== null) {
            let p
            let cId
            let inp
            const updateStock = async () => {
                if (bxUpBtn.parentElement.parentElement.childNodes[1].classList.value.split(' ').includes('ct_bx_alert_tock')) {
                    let elem = bxUpBtn.parentElement.parentElement.childNodes[3].childNodes
                    p = elem[1].innerText
                    cId = elem[3].innerText
                    inp = bxUpBtn.parentElement.childNodes[1].value
                } else {
                    let elem = bxUpBtn.parentElement.parentElement.childNodes[1].childNodes
                    p = elem[1].innerText
                    cId = elem[3].innerText
                    inp = bxUpBtn.parentElement.childNodes[1].value
                }
                console.log(p, cId)

                let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cId}`)


                let dbCo = await dbCollection.get()
                dbCo.docs.forEach(cur => {
                    let el = cur.data().item
                    let cqa = cur.data().cqa
                    if (el.name.split(' ').join('') === p.split(' ').join('')) {
                        if (el.id !== undefined) {

                            const cook = el.cook
                            const name = el.name

                            const fdInside = el.fdInside
                            const base = el.base

                            const id = el.id

                            const img = el.img

                            const offer = el.offer
                            const requiredGroc = el.requiredGroc

                            const price = el.price
                            const ratings = el.ratings
                            const time = el.time
                            const type = el.type

                            const reviews = el.review
                            const stock = inp
                            console.log(el, cqa)
                            dbCollection.doc(cur.id).set({
                                cqa: cqa,
                                item: {
                                    name: name,
                                    base: base,
                                    cook: cook,
                                    fdInside: fdInside,
                                    requiredGroc: requiredGroc,

                                    id: id,

                                    img: img,

                                    offer: offer,


                                    price: price,
                                    ratings: ratings,
                                    time: time,
                                    type: type,

                                    review: reviews,
                                    stock: stock
                                }
                            }).then(() => {
                                document.querySelector('.ct_bx_stock_message').style.display = 'flex'
                            })
                        }
                    }
                })
            }
            updateStock()
        }
    })
    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) === document.documentElement.scrollHeight) {
            let item = document.querySelector('.active_cat_stock')
            if (item.innerText === 'Grocery') {
                addStock('groc')

            } else {
                addStock()

            }
        };
    }
    const addStock = async (typ = '') => {

        if (typ == '') {
            const returnH = async () => {
                let len = document.querySelectorAll('.for_ek_fd_stock .main_listock').length
                console.log(len, numLen)
                if (len < 10) {
                    document.querySelector('.for_ek_fd_stock .for_stk_load').style.display = 'block'

                    if (numLen === 0) {

                        let res = await dbCollection.orderBy('item')
                            .limit(7).get()
                        document.querySelector('.for_ek_fd_stock .for_stk_load').style.display = 'none'
                        res.docs.forEach(cur => {
                            console.log(numLen, res.docs.length)
                            // if (res.docs.length !== numLen) {
                            let item = cur.data().item
                            let name = item.name
                            let stock = item.stock

                            if (!addedFdEk.includes(name)) {
                                addedFdEk.push(name)
                                numLen++

                                let html = ` <li class="main_listock">
                            <div class="ct_ibnner_li_fd">
                            <ul>
                                <li>
                                    <p>${name}</p>
                                    <span class='catId_stk'>${sFGr}</span>
                            
                                </li>
                                <li class="stk_inp">
                                    <input type="text" value="${stock}">
                                    <button class="update_btn_stk">Update</button>
                            
                                </li>
                            </ul>
                            </div>
                            </li>`


                                document.querySelector('.for_ek_fd_stock ul').insertAdjacentHTML('beforeend', html)


                            }
                        })
                    } else {
                        console.log(dbCo.docs.length, numLen)
                        if (dbCo.docs.length === numLen) {
                            sFGr++
                            numLen = 0
                            addStock()

                            return
                        }
                        dbCo.forEach(cur => {
                            console.log(cur.data().item)
                        })
                        lastVisible = dbCo.docs[numLen - 1].data().item

                        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${sFGr}`)
                        let res = await dbCollection.orderBy('item').startAfter(lastVisible).limit(7).get()
                        document.querySelector('.for_ek_fd_stock .for_stk_load').style.display = 'none'

                        res.docs.forEach(cur => {
                            console.log(numLen, res.docs.length)

                            let item = cur.data().item
                            let name = item.name

                            if (!addedFdEk.includes(name)) {

                                addedFdEk.push(name)
                                numLen++


                                let stock = parseFloat(item.stock)
                                let html = ` <li class="main_listock">
    <div class="ct_ibnner_li_fd">
    <ul>

    <li>
    <p>${name}</p>
    <span class='catId_stk'>${sFGr}</span>
    
    </li>
    <li class="stk_inp">
    <input type="text" value="${stock}">
    <button class="update_btn_stk">Update</button>
    
    </li>
    </ul>
    </div>
    </li>`

                                document.querySelector('.for_ek_fd_stock ul').insertAdjacentHTML('beforeend', html)
                            }
                        })
                    }
                    if (window.innerWidth <= 400) {

                        document.querySelectorAll('.stk_inp').forEach(cur => {
                            cur.style.marginLeft = '-110px'
                        })

                        document.querySelector('.ct_nav_panel ul li').style.width = '260px'

                    }
                    if (window.innerWidth <= 450) {

                        document.querySelectorAll('.ct_ibnner_li_fd ul li').forEach(cur => {
                            cur.style.marginRight = '150px'
                        })

                        document.querySelector('.ct_nav_panel ul li').style.width = '260px'

                    }
                }
            }
            document.querySelector('.for_groc_fd_stock').style.display = 'none'

            document.querySelector('.for_ek_fd_stock').style.display = 'block'
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${sFGr}`)

            let dbCo = await dbCollection
                .orderBy('item')
                .get()
            dbCo.docs.forEach(cur => {
                let item = cur.data().item
                let stock = parseFloat(item.stock)

                if (stock === 0) {
                    let name = item.name

                    if (!addedFdEk.includes(name)) {

                        addedFdEk.push(name)
                        numLen++

                        let stock = parseFloat(item.stock)
                        let html = ` <li class="main_listock">
<div class="ct_ibnner_li_fd">
<ul>
<div class="ct_bx_alert_tock">
<ion-icon name="warning-outline"></ion-icon>                                               </div>
<li>
<p>${name}</p>
<span class='catId_stk'>${sFGr}</span>

</li>
<li class="stk_inp">
<input type="text" value="${stock}">
<button class="update_btn_stk">Update</button>

</li>
</ul>
</div>
</li>`


                        document.querySelector('.for_ek_fd_stock ul').insertAdjacentHTML('beforeend', html)
                    }
                } else {
                    returnH()
                }
            })


            returnH()
        } else {
            const returnH = async () => {

                let len = document.querySelectorAll('.for_groc_fd_stock .main_listock').length

                if (len < 2) {
                    document.querySelector('.for_groc_fd_stock .for_stk_load').style.display = 'block'

                    if (numLen1 === 0) {

                        let res = await dbCollection.orderBy('item')
                            .limit(7).get()
                        document.querySelector('.for_groc_fd_stock .for_stk_load').style.display = 'none'
                        res.docs.forEach(cur => {
                            let html
                            let item = cur.data().item
                            let name = item.name
                            if (!addedFdEk1.includes(name)) {
                                numLen1++
                                let com = item.com
                                if (com !== null && com !== undefined) {
                                    let stock = parseFloat(item.stock)
                                    html = `     <li class="main_listock">
                                <div class="ct_ibnner_li_fd for_groc_adm">
                                    <ul>
                                        <li>
                                        <span>${com}</span>
        
                                            <p>${name}</p>
                                            <span class='catId_stk'>${sFGr1}</span>
        
                                        </li>
                                        <li class="stk_inp">
                                            <input type="text" value="${stock}">
                                            <button class="for_update_stk_groc">Update</button>
        
                                        </li>
                                    </ul>
                                </div>
                            </li>`
                                } else {
                                    let stock = parseFloat(item.stock)
                                    html = `     <li class="main_listock">
                                <div class="ct_ibnner_li_fd for_groc_adm">
                                    <ul>
                                        <li>
        
                                            <p>${name}</p>
                                            <span class='catId_stk'>${sFGr1}</span>
        
                                        </li>
                                        <li class="stk_inp">
                                            <input type="text" value="${stock}">
                                            <button class="for_update_stk_groc">Update</button>
        
                                        </li>
                                    </ul>
                                </div>
                            </li>`
                                }
                                addedFdEk1.push(name)

                                document.querySelector('.for_groc_fd_stock ul').insertAdjacentHTML('beforeend', html)
                            }
                        })
                    } else {
                        if (dbCo.docs.length === numLen1) {
                            sFGr1++
                            numLen1 = 0
                            addStock()

                            return
                        }
                        dbCo.forEach(cur => {
                            console.log(cur.data().item)
                        })
                        lastVisible = dbCo.docs[numLen1 - 1].data().item

                        let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${sFGr1}`)
                        let res = await dbCollection.orderBy('item').startAfter(lastVisible).limit(7).get()
                        document.querySelector('.for_groc_fd_stock .for_stk_load').style.display = 'none'

                        res.docs.forEach(cur => {
                            console.log(numLen, res.docs.length)
                            let html

                            let item = cur.data().item
                            let name = item.name
                            if (!addedFdEk1.includes(name)) {
                                numLen1++

                                let com = item.com
                                if (com !== null && com !== undefined) {
                                    let stock = parseFloat(item.stock)
                                    html = `     <li class="main_listock">
                                <div class="ct_ibnner_li_fd for_groc_adm">
                                    <ul>
                                        <li>
                                            <span>${com}</span>
                                            <p>${name}</p>
                                            <span class='catId_stk'>${sFGr1}</span>
    
                                        </li>
                                        <li class="stk_inp">
                                            <input type="text" value="${stock}">
                                            <button class="for_update_stk_groc">Update</button>
        
                                        </li>
                                    </ul>
                                </div>
                            </li>`
                                } else {
                                    let stock = parseFloat(item.stock)
                                    html = `     <li class="main_listock">
                                <div class="ct_ibnner_li_fd for_groc_adm">
                                    <ul>
                                        <li>
                                            <p>${name}</p>
                                            <span class='catId_stk'>${sFGr1}</span>
    
                                        </li>
                                        <li class="stk_inp">
                                            <input type="text" value="${stock}">
                                            <button class="for_update_stk_groc">Update</button>
        
                                        </li>
                                    </ul>
                                </div>
                            </li>`
                                }
                                addedFdEk1.push(name)

                                document.querySelector('.for_groc_fd_stock ul').insertAdjacentHTML('beforeend', html)
                            }
                        })
                    }
                    if (window.innerWidth <= 400) {

                        document.querySelectorAll('.stk_inp').forEach(cur => {
                            cur.style.marginLeft = '-110px'
                        })

                        document.querySelector('.ct_nav_panel ul li').style.width = '260px'

                    }
                    if (window.innerWidth <= 450) {

                        document.querySelectorAll('.ct_ibnner_li_fd ul li').forEach(cur => {
                            cur.style.marginRight = '150px'
                        })

                        document.querySelector('.ct_nav_panel ul li').style.width = '260px'

                    }
                }

            }
            let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${sFGr1}`)

            let dbCo = await dbCollection
                .orderBy('item')
                .get()
            dbCo.docs.forEach(cur => {
                let item = cur.data().item
                let stock = parseFloat(item.stock)
                console.log(stock)
                if (stock === 0) {
                    let html
                    let name = item.name
                    let com = item.com

                    if (!addedFdEk1.includes(name)) {

                        addedFdEk1.push(name)
                        numLen1++
                        if (com !== null && com !== undefined) {
                            let stock = parseFloat(item.stock)
                            html = `     <li class="main_listock">
                        <div class="ct_ibnner_li_fd for_groc_adm">
                            <ul>
                            <div class="ct_bx_alert_tock">
<ion-icon name="warning-outline"></ion-icon>                        </div>
                                <li>
                                <span>${com}</span>

                                    <p>${name}</p>
                                    <span class='catId_stk'>${sFGr1}</span>

                                </li>
                                <li class="stk_inp">
                                    <input type="text" value="${stock}">
                                    <button class="for_update_stk_groc">Update</button>

                                </li>
                            </ul>
                        </div>
                    </li>`
                        } else {
                            let stock = parseFloat(item.stock)
                            html = `     <li class="main_listock">
                        <div class="ct_ibnner_li_fd for_groc_adm">
                            <ul>
                            <div class="ct_bx_alert_tock">
<ion-icon name="warning-outline"></ion-icon>                        </div>
                                <li>
                                    <p>${name}</p>
                                    <span class='catId_stk'>${sFGr1}</span>

                                </li>
                                <li class="stk_inp">
                                    <input type="text" value="${stock}">
                                    <button class="for_update_stk_groc">Update</button>

                                </li>
                            </ul>
                        </div>
                    </li>`
                        }
                        document.querySelector('.for_groc_fd_stock ul').insertAdjacentHTML('beforeend', html)
                    }
                } else {
                    returnH()
                }

            })

            returnH()
        }

    }


    addStock()
    if (document.querySelector('.ct_select_dat') !== null) {
        document.querySelector('.refreshBtn').addEventListener('click', () => {
            if (document.querySelectorAll('.ct_as_per_date_order ul li').length !== 0) {
                document.querySelector('.for_orders').style.display = 'block'

                document.querySelectorAll('.ct_as_per_date_order ul li').forEach(cur =>
                    cur.remove())
                loadOrders()
            }
        })
        let date = new Date()
        let yestarday = parseFloat(date.toLocaleString().split(',')[0].split('/')[1])
        let yestardayMon = date.toLocaleString().split(',')[0].split('/')[0]
        let yestardayY = date.toLocaleString().split(',')[0].split('/')[2]
        let selectD = date.toLocaleString().split(',')[0]

        let tD = ` <li>
    <p>Today</p>
    <span>${selectD}</span>
    
    </li>`
        let yD = ` <li>
    <p>Yesterday</p>
    <span>${yestardayMon}/${yestarday - 1}/${yestardayY}</span>
    
    </li>`
        let l7 = `<li>
    <p>Last 7 days</p>
    
    </li>`
        let htm = ` <ul>
    ${tD}
    
    ${yD}
    ${l7}
    
    </ul>`
        document.querySelector('.ct_select_dat').innerHTML = htm
        document.querySelectorAll('.ct_select_dat li').forEach(cur => {
            cur.addEventListener('click', (e) => {
                let p
                if (cur.childNodes[3] !== undefined) {
                    p = cur.childNodes[1].innerText
                    span = cur.childNodes[3].innerText

                    document.querySelector('.ct_bx_dt_sle_date p').innerText = p
                    document.querySelector('.ct_bx_dt_sle_date span').innerText = span

                    document.querySelector('.ct_selected_date_order h4').innerHTML = p + " &mdash; " + span
                    let icon = `                    <ion-icon name="chevron-down-outline"></ion-icon>
                `
                    document.querySelector('.ct_sld_icon_order').childNodes[1].remove()

                    document.querySelector('.ct_sld_icon_order').innerHTML = icon
                    document.querySelector('.ct_select_dat').style.display = 'none'
                    let selectedBx = document.querySelector('.ct_bx_dt_sle_date').classList

                    selectedBx.remove('tog_date_select')
                    selectedBx.add('nottog_date_select')
                    document.querySelectorAll('.ct_as_per_date_order ul li').forEach(cur =>
                        cur.remove())
                    document.querySelector('.for_orders').style.display = 'block'
                    if (p === 'Yesterday') {

                        loadOrders(false)

                    } else {
                        loadOrders(true)

                    }
                    document.querySelector('.ct_as_per_date_order h1').style.display = 'none'

                } else {
                    let icon = `                    <ion-icon name="chevron-down-outline"></ion-icon>
                `
                    document.querySelector('.ct_sld_icon_order').childNodes[1].remove()

                    document.querySelector('.ct_sld_icon_order').innerHTML = icon
                    document.querySelector('.ct_select_dat').style.display = 'none'
                    let selectedBx = document.querySelector('.ct_bx_dt_sle_date').classList

                    selectedBx.remove('tog_date_select')
                    selectedBx.add('nottog_date_select')
                    p = cur.childNodes[1].innerText
                    document.querySelector('.ct_selected_date_order h4').innerText = p
                    document.querySelectorAll('.ct_as_per_date_order ul li').forEach(cur =>
                        cur.remove())
                    document.querySelector('.for_orders').style.display = 'block'
                    loadOrders()
                    document.querySelector('.ct_as_per_date_order h1').style.display = 'none'

                }
            })
        })

    }

    document.querySelector('html').addEventListener('click', (e) => {
        let bxOrder = e.target.closest('.main_li_itm_order')

        if (bxOrder) {
            console.log(bxOrder.childNodes[1].childNodes)
            if (bxOrder.classList.value.split(' ').includes('notselected_order_itm')) {
                if (!e.target.closest('.ct_select_dat')) {
                    if (document.querySelector('.selected_order_itm') !== null) {
                        document.querySelector('.selected_order_itm').classList.add('notselected_order_itm')
                        document.querySelector('.selected_order_itm').classList.remove('selected_order_itm')

                    }
                    if (bxOrder.childNodes[1].childNodes[1].classList.value.includes('ct_bx_if_new')) {
                        bxOrder.childNodes[1].childNodes[1].style.display = 'none'

                    }

                    bxOrder.classList.remove('notselected_order_itm')
                    bxOrder.classList.add('selected_order_itm')
                }
            } else {
                if (!e.target.closest('.ct_select_dat')) {
                    if (document.querySelector('.selected_order_itm') !== null) {
                        document.querySelector('.selected_order_itm').classList.add('selected_order_itm')
                        document.querySelector('.selected_order_itm').classList.remove('notselected_order_itm')

                    }

                    bxOrder.classList.remove('selected_order_itm')
                    bxOrder.classList.add('notselected_order_itm')
                }
            }
            //  bxOrder.childNodes[3].style.display='block'
        }
        if (e.target.closest('.ct_bx_dt_sle_date')) {
            if (!e.target.closest('.ct_select_dat')) {

                let selectedBx = document.querySelector('.ct_bx_dt_sle_date').classList

                if (selectedBx.value.split(' ').includes('tog_date_select')) {
                    let icon = `                    <ion-icon name="chevron-down-outline"></ion-icon>
            `
                    document.querySelector('.ct_sld_icon_order').childNodes[1].remove()

                    document.querySelector('.ct_sld_icon_order').innerHTML = icon
                    document.querySelector('.ct_select_dat').style.display = 'none'

                    selectedBx.remove('tog_date_select')
                    selectedBx.add('nottog_date_select')
                } else {
                    let icon = `                    <ion-icon name="chevron-up-outline"></ion-icon>
            `
                    document.querySelector('.ct_sld_icon_order').childNodes[1].remove()

                    document.querySelector('.ct_sld_icon_order').innerHTML = icon
                    document.querySelector('.ct_select_dat').style.display = 'block'

                    selectedBx.add('tog_date_select')
                    selectedBx.remove('nottog_date_select')
                }
            }

        } else {
            if (!e.target.closest('.ct_select_dat')) {

                let icon = `                    <ion-icon name="chevron-down-outline"></ion-icon>
        `
                document.querySelector('.ct_sld_icon_order').childNodes[1].remove()

                document.querySelector('.ct_sld_icon_order').innerHTML = icon
                document.querySelector('.ct_select_dat').style.display = 'none'
                document.querySelector('.ct_select_dat').style.display = 'none'

                document.querySelector('.ct_bx_dt_sle_date').classList.remove('tog_date_select')
                document.querySelector('.ct_bx_dt_sle_date').classList.add('nottog_date_select')
            }
        }

    })
    let td = 0
    let ttd = 0
    let t7d = 0
    const loadOrders = async (day = '') => {
        let dbCollection = db.collection("orders")


        let res = await dbCollection.get()
        socket.on('oDcancel', (i) => {
            console.log(i)
            // document.querySelector('.audio_wh').play()
        })
        res.docs.forEach(cur => {
            let user = cur.data().user
            let time = cur.data().time.time
            let date = cur.data().time.date
            let mon = cur.data().time.mon

            let order = cur.data().order
            let suggestion = cur.data().suggestion
            let d = new Date()
            hr = parseFloat(time.split(':')[0])
            min = parseFloat(time.split(':')[1])
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            let timeCurrent = d.toLocaleTimeString()
            let mNNum = d.getMonth()
            let dateNow = d.toLocaleString().split('/')[1]
            let monthNow = month[mNNum]
            hour = parseFloat(timeCurrent.split(':')[0])
            minutes = parseFloat(timeCurrent.split(':')[1])
            let yD = parseFloat(date) + 1
            const addCatItm = () => {
                let finalHr
                let minFinal
                if (hr === hour) {
                    if (minutes > 0 && min > 0) {

                        if (min >= minutes) {
                            minFinal = min - minutes

                        } else if (minutes >= min) {
                            minFinal = minutes - min

                        }

                    }
                } else { minFinal = 60 }
                let rlHour = 0
                if (hr === 12) {
                    hr = 00
                    if (hour === 12) {
                        hour = 00
                    }

                    if (hr >= hour) {
                        finalHr = hr - hour

                    } else if (hour >= hr) {
                        finalHr = hour - hr

                    }
                    for (let i = 0; i < finalHr; i++) {
                        if (hour === 00) { hour = 12 }

                        if (hr === hour) {
                            if (min === minutes) {
                                rlHour += 1

                            }
                        } else if (hr < hour) {
                            rlHour += 1


                        }
                    }
                } else {
                    if (hour === 12) {
                        hour = 00
                        if (hr === 12) {
                            hr = 00
                        }
                        finalHr = hr - hour

                    } else {
                        if (hr >= hour) {
                            finalHr = hr - hour

                        } else if (hour >= hr) {
                            finalHr = hour - hr

                        }


                    }

                    for (let i = 0; i < finalHr; i++) {
                        if (hour === 00) { hour = 12 }
                        if (hr === hour) {
                            if (min === minutes) {
                                rlHour += 1

                            }
                        } else if (hr < hour) {
                            rlHour += 1


                        }
                    }
                }

                console.log(' ordered  was on last', minFinal, rlHour)


                let fdNames = []
                let arrTotalAmount = []
                let fdFull = []
                order.forEach(cur1 => {
                    let item
                    if (cur1.dt.data !== undefined) {
                        item = cur1.dt.data

                    } else {
                        item = cur1.dt.item

                    }

                    if (item.cook !== undefined) {

                        let name = item.name
                        let qt = cur1.qt
                        let com = item.com

                        let price = item.price
                        let offer = item.offer
                        if (price.split('₹')[1] !== undefined) {
                            price = price.split('₹')[1]
                            price = price.split(',').join('')

                        }
                        offer = parseFloat(offer)
                        price = parseFloat(price)
                        qt = parseFloat(qt)
                        console.log(name, qt, offer, price)
                        let pF = price * qt
                        let tm = Math.round(pF - (pF * offer / 100))
                        fdNames.push(name)
                        arrTotalAmount.push(tm)
                        fdFull.push({ name: name, qt: qt, price: price, offer: offer, unit: null, com: undefined })

                    } else {
                        let name = item.name
                        let qt = cur1.qt
                        let price = cur1.price
                        let com = item.com
                        console
                        let offer = item.offer
                        let unit = cur1.unit
                        console.log(offer)

                        price = price.split('₹')[1]
                        if (offer !== null) {
                            offer = parseFloat(offer)

                        }
                        price = parseFloat(price)
                        qt = parseFloat(qt)
                        console.log(name, qt, offer, price)
                        let pF = price * qt
                        let tm = Math.round(pF - (pF * offer / 100))
                        fdNames.push(name)
                        if (com === null) {
                            com = undefined
                        }
                        fdFull.push({ name: name, qt: qt, price: price, offer: offer, unit: unit, com: com })
                        arrTotalAmount.push(tm)
                    }
                })
                let amount = 0
                let namesF = checkChar(fdNames.join(','), 25)
                console.log(fdFull.offer === undefined)
                arrTotalAmount.forEach(cur => {
                    amount += cur
                })
                let fd = fdFull.map((res) => {
                    let html
                    if (res.offer !== null) {

                        if (res.unit !== null) {
                            if (res.com !== undefined) {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <com>${res.com}</com>
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>${res.unit} </span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>${res.offer} %</span>
                                    </div>
                                </div>
                            </div>`

                            } else {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>${res.unit} </span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>${res.offer} %</span>
                                    </div>
                                </div>
                            </div>`

                            }

                        } else {
                            if (res.com !== undefined) {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <com>${res.com}</com>
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>&mdash;</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>${res.offer} %</span>
                                    </div>
                                </div>
                            </div>`

                            } else {

                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>&mdash;</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>${res.offer} %</span>
                                    </div>
                                </div>
                            </div>`
                            }

                        }
                    } else {

                        if (res.unit !== null) {
                            if (res.com !== undefined) {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <com>${res.com}</com>
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>${res.unit}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>&mdash; %</span>
                                    </div>
                                </div>
                            </div>`

                            } else {
                                html = `<li>
                            <div class="ct_bx_name_adm">
                                <p>${res.name}</p>
                            
                            </div>
                            
                            <div class="ct_bx_fd_qt_adm">
                                <span>${res.qt}</span>
                            
                            </div>
                            <div class="ct_bx_fd_price_adm">
                                <span>₹ ${res.price}</span>
                            
                            </div>
                            <div class="ct_bx_fd_off_adm">
                            <span>&mdash;</span>
                            
                            </div>
                            <div class="ct_bx_fd_unit_adm">
                                <span>${res.unit}</span>
                            
                            </div>
                            
                            </li>`
                            }
                        } else {
                            if (res.com !== undefined) {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <com>${res.com}</com>
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>&mdash;</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>&mdash; %</span>
                                    </div>
                                </div>
                            </div>`

                            } else {
                                html = `  <div class="ct_bx_foods_mobile_version">
                                <h4>Item:-</h4>
                                <div class="ct_inner_foods">
                                    <div class="ct_bx_food_itm">
                                        <p>Food name</p>
                                        <div class="ct_fd_name_order">
                                            <span>${res.name}</span>
                                        </div>
                    
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>quantity</p>
                                        <span>${res.qt}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>amount</p>
                                        <span>₹ ${res.price}</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>unit</p>
                                        <span>&mdash;</span>
                                    </div>
                                    <div class="ct_bx_food_itm">
                                        <p>offer</p>
                                        <span>&mdash; %</span>
                                    </div>
                                </div>
                            </div>`

                            }

                        }

                    }
                    return html
                })
                let userName = user.n + ' ' + user.ln
                let html1
                if (suggestion === undefined) {
                    suggestion = '&mdash;'
                }
                let Tamount = "₹ " + amount
                html1 = `  <li>
    <ion-icon name="mail-outline"></ion-icon>
    <p>${user.ct}</p>
    </li>
    <li>
    <ion-icon name="call-outline"></ion-icon>
        <p>${user.service}</p>
    </li>`


                let html
                minFinal = parseFloat(minFinal)
                let uAd = user.ad

                finalHr = parseFloat(finalHr)
                let n = checkChar(userName, 9)
                console.log(cur.data().canceled)
                let dNow = new Date()
                let dateN = dNow.toLocaleString()
                let dateNum = parseFloat(dateN.split(',')[0].split('/')[1])
                let date2num = parseFloat(cur.data().time.date)
                console.log(date2num, dateNum, date2num < dateNum)
                //dltod 
                if (date2num > dateNum || date2num < dateNum) {
                    const delOrders = async () => {
                        let dbCollection = db.collection(`orders`)
                        let res = await dbCollection.get()
                        res.docs.forEach(doc => {
                            let el = doc.data()
                            let id = el.idM
                            if (id === cur.data().idM) {
                                dbCollection.doc(doc.id).delete().then(() => {
                                    console.log('deleted')
                                })
                            }

                        })
                    }
                    delOrders()

                    html = null
                } else {
                    if (cur.data().canceled) {
                        if (minFinal <= 55 && rlHour < 1) {

                            html = `    <li class="main_li_itm_order notselected_order_itm new_ly_added">
        <div class="ct_bx_outer_order_itm">
        
        <div class="ct_bx_if_cancel_od">
        </div>
      
        <div class="ct_bx_dt_fd_order">
        <ion-icon name="person-outline"></ion-icon>        
        <p>${n}</p>
        </div>
        <div class="ctdt_order_ext">
        <p>${namesF}</p>
        
        </div>
        <div class="ctdt_order_ext ctdt_order_ext2">
        <p>₹ ${amount}</p>
        <span>${time}</span>
        </div>
        <div class="ct_tog_slide_bar_fd_order">
        <ion-icon name="chevron-down-outline"></ion-icon>
        
        </div>
        </div>
        <div class=" ct_bx_inner_order_itm">
        <div class="c_cust_dt">
        <ion-icon name="person-outline"></ion-icon>
                <div class="ct_bx_inner_ac_dt">
        <h2>${userName}</h2>
        <p>Address:${uAd}</p>
        <span>Suggestion: ${suggestion}</span>
        </div>
        
        </div>
        <div class="ctbx_cancel_btn_andbx">
        <div class="ct_cancled_b_user">
        <ion-icon name="alert-circle-outline"></ion-icon>
        <p>This ordered is canceled by customer.</p>
    </div>
    <div class="ct_bx_amount_total">
    <h4>Total amount </h4>
    <p>${Tamount}</p>
</div>
        <div class="ct_bx_foods_list">
    
        <div class="ct_bx_foods_list">
        <h2>Items Ordered</h2>
        ${fd.join('')}


    </div>
        </div>
        
        
        <div class="ct_contact_ifo_user">
        <ul>
          ${html1}
        </ul>
        </div>
        </div>
        
        </li>`
                        } else {
                            html = `    <li class="main_li_itm_order notselected_order_itm new_ly_added">
        <div class="ct_bx_outer_order_itm">
        <div class="ct_bx_if_cancel_od">
                </div>
        
        <div class="ct_bx_dt_fd_order">
        <ion-icon name="person-outline"></ion-icon>        
        <p>${n}</p>
        </div>
        <div class="ctdt_order_ext">
        <p>${namesF}</p>
        
        </div>
        <div class="ctdt_order_ext ctdt_order_ext2">
        <p>₹ ${amount}</p>
        <span>${time}</span>
        </div>
        <div class="ct_tog_slide_bar_fd_order">
        <ion-icon name="chevron-down-outline"></ion-icon>
        
        </div>
        </div>
        <div class=" ct_bx_inner_order_itm">
        <div class="c_cust_dt">
        <ion-icon name="person-outline"></ion-icon>        <div class="ct_bx_inner_ac_dt">
        <h2>${userName}</h2>
        <p>Address:${uAd}</p>
        <span>Suggestion: ${suggestion}</span>
        </div>
        
        </div>
        <div class="ct_cancled_b_user">
        <ion-icon name="alert-circle-outline"></ion-icon>
        <p>This ordered is canceled by customer.</p>
    </div>

    <div class="ct_bx_amount_total">
        <h4>Total amount </h4>
        <p>${Tamount}</p>
    </div>
        <div class="ct_bx_foods_list">
  
        <div class="ct_bx_foods_list">
        <h2>Items Ordered</h2>
        ${fd.join('')}


    </div>
        </div>
        
        
        <div class="ct_contact_ifo_user">
        <ul>
          ${html1}
        </ul>
        </div>
        </div>
        
        </li>`
                        }
                    } else {
                        if (minFinal <= 15 && rlHour < 1) {

                            html = `    <li class="main_li_itm_order notselected_order_itm new_ly_added">
        <div class="ct_bx_outer_order_itm">
        
        <div class="ct_bx_if_new">
        </div>
      
        <div class="ct_bx_dt_fd_order">
        <ion-icon name="person-outline"></ion-icon>        
        <p>${n}</p>
        </div>
        <div class="ctdt_order_ext">
        <p>${namesF}</p>
        
        </div>
        <div class="ctdt_order_ext ctdt_order_ext2">
        <p>₹ ${amount}</p>
        <span>${time}</span>
        </div>
        <div class="ct_tog_slide_bar_fd_order">
        <ion-icon name="chevron-down-outline"></ion-icon>
        
        </div>
        </div>
        <div class=" ct_bx_inner_order_itm">
        <div class="c_cust_dt">
        <ion-icon name="person-outline"></ion-icon>        <div class="ct_bx_inner_ac_dt">
        <h2>${userName}</h2>
        <p>Address:${uAd}</p>
        <span>Suggestion: ${suggestion}</span>
        </div>
        
        </div>
        <div class="ctbx_cancel_btn_andbx">
        <div class="ct_bx_cancel_bx_confirm">
            <h2>Please give a reason</h2>
            <p>Let your customer know why.</p>
            <textarea cols="30" rows="7" placeholder="Your order has been canceled."></textarea>
            <button class="send_btn">Send</button>
            <button  class="cancel_btn">Cancel</button>
        </div>
        <button class="cnacel_bn_main">Cancel this order</button>
        </div>
        <div class="ct_bx_amount_total">
        <h4>Total amount </h4>
        <p>${Tamount}</p>
    </div>
        <div class="ct_bx_foods_list">
  
        <div class="ct_bx_foods_list">
        <h2>Items Ordered</h2>
        ${fd.join('')}


    </div>
        </div>
        
        
        <div class="ct_contact_ifo_user">
        <ul>
          ${html1}
        </ul>
        </div>
        </div>
        
        </li>`
                        } else {
                            html = `    <li class="main_li_itm_order notselected_order_itm new_ly_added">
        <div class="ct_bx_outer_order_itm">
        
        
        <div class="ct_bx_dt_fd_order">
        <ion-icon name="person-outline"></ion-icon>        
        <p>${n}</p>
        </div>
        <div class="ctdt_order_ext">
        <p>${namesF}</p>
        
        </div>
        <div class="ctdt_order_ext ctdt_order_ext2">
        <p>₹ ${amount}</p>
        <span>${time}</span>
        </div>
        <div class="ct_tog_slide_bar_fd_order">
        <ion-icon name="chevron-down-outline"></ion-icon>
        
        </div>
        </div>
        <div class=" ct_bx_inner_order_itm">
        <div class="c_cust_dt">
        <ion-icon name="person-outline"></ion-icon>        <div class="ct_bx_inner_ac_dt">
        <h2>${userName}</h2>
        <p>Address:${uAd}</p>
        <span>Suggestion: ${suggestion}</span>
        </div>
        
        </div>
        <div class="ctbx_cancel_btn_andbx">
        <div class="ct_bx_cancel_bx_confirm">
            <h2>Please give a reason</h2>
            <p>Let your customer know why.</p>
            <textarea cols="30" rows="7" placeholder="Your order has been canceled."></textarea>
            <button class="send_btn">Send</button>
            <button  class="cancel_btn">Cancel</button>
        </div>
        <button class="cnacel_bn_main">Cancel this order</button>
        </div>
        <div class="ct_bx_amount_total">
        <h4>Total amount </h4>
        <p>${Tamount}</p>
    </div>
        <div class="ct_bx_foods_list">
        <div class="ct_bx_foods_list">
        <h2>Items Ordered</h2>
        ${fd.join('')}


    </div>
        </div>
        
        
        <div class="ct_contact_ifo_user">
        <ul>
          ${html1}
        </ul>
        </div>
        </div>
        
        </li>`
                        }
                    }
                }
                if (html !== null) {
                    document.querySelector('.ct_as_per_date_order ul').insertAdjacentHTML('beforeend', html)
                    if (window.innerWidth <= 450) {


                        document.querySelectorAll('.ct_bx_inner_ac_dt').forEach(cur => {
                            cur.style.width = '45%'
                        })
                        document.querySelectorAll('.c_cust_dt span').forEach(cur => {
                            cur.style.fontSize = '12px'
                        })
                        document.querySelectorAll('.c_cust_dt p').forEach(cur => {
                            cur.style.fontSize = '12px'
                        })
                    }
                }
            }
            if (day === true) {
                if (date === dateNow && mon === monthNow) {
                    td++
                    document.querySelector('.ct_as_per_date_order h1').style.display = 'none'

                    document.querySelector('.for_orders').style.display = 'none'
                    addCatItm()

                }
            } else if (day === false) {
                if (parseFloat(dateNow) === yD && mon === monthNow) {
                    ttd++
                    document.querySelector('.ct_as_per_date_order h1').style.display = 'none'

                    document.querySelector('.for_orders').style.display = 'none'
                    addCatItm()
                }
            } else {
                t7d++
                document.querySelector('.ct_as_per_date_order h1').style.display = 'none'

                document.querySelector('.for_orders').style.display = 'none'
                addCatItm()

            }
        })
        if (day && day !== '') {
            if (td === 0) {
                document.querySelector('.ct_as_per_date_order h1').style.display = 'block'

                document.querySelector('.for_orders').style.display = 'none'

                document.querySelector('.ct_as_per_date_order h1').innerText = 'No orders yet.'
            }
        } else if (!day && day !== '') {
            if (ttd === 0) {
                document.querySelector('.ct_as_per_date_order h1').style.display = 'block'
                document.querySelector('.for_orders').style.display = 'none'

                document.querySelector('.ct_as_per_date_order h1').innerText = 'No orders on yesterday.'

            }
        } else {
            if (t7d === 0) {
                document.querySelector('.for_orders').style.display = 'none'

                document.querySelector('.ct_as_per_date_order h1').style.display = 'block'

                document.querySelector('.ct_as_per_date_order h1').innerText = 'No orders on last 7 days.'

            }
        }
    }

    loadOrders()
}
const addBill = () => {
    let allgroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
    let allfd = JSON.parse(localStorage.getItem('foodsAdded'))

    let totalAmount = []

    if (allfd !== null) {
        if (allfd.length !== 0) {
            allfd.forEach(cur => {
                if (cur.data.item.offer !== undefined && cur.data.item.offer !== null) {
                    let off = parseFloat(cur.data.item.offer)
                    let price
                    if (cur.data.item.price.split('₹')[1] !== undefined) {
                        price = parseFloat(cur.data.item.price.split('₹')[1].split(',').join('')) * parseFloat(cur.qt)

                    } else {
                        price = parseFloat(cur.data.item.price.split(',').join('')) * parseFloat(cur.qt)

                    }

                    let offPrice = Math.round(price - (price * off / 100))
                    totalAmount.push(offPrice)
                } else {
                    let price

                    if (cur.data.item.price.split('₹')[1] !== undefined) {
                        price = parseFloat(cur.data.item.price.split('₹')[1].split(',').join('')) * parseFloat(cur.qt)

                    } else {
                        price = parseFloat(cur.data.item.price.split(',').join('')) * parseFloat(cur.qt)

                    }
                    totalAmount.push(price)
                }


            })
        }
    }
    if (allgroc !== null) {
        if (allgroc.length !== 0) {
            allgroc.forEach(cur => {
                if (cur.offer !== undefined && cur.offer !== null) {
                    let off = parseFloat(cur.offer)
                    let price = parseFloat(cur.price.split('₹')[1].split(',').join('')) * parseFloat(cur.qt)
                    let offPrice = Math.round(price - (price * off / 100))
                    totalAmount.push(offPrice)
                } else {
                    let price = parseFloat(cur.price.split('₹')[1].split(',').join('')) * parseFloat(cur.qt)

                    totalAmount.push(price)
                }


            })
        }

    }

    let am = 0
    totalAmount.forEach(cur => {
        am += cur
    })
    if (am !== 0) {
        if(window.innerWidth<=500){
        document.querySelector('.ct_bx_locate_bill').style.display='flex'
        document.querySelector('.ct_bx_locate_bill p').innerText = '₹' + ' ' + am.toLocaleString()

        }
        document.querySelector('.block_1_charge span').innerText = '₹' + ' ' + am.toLocaleString()
        document.querySelector('.block_2_charge span').innerText = '₹ 150'


        document.querySelector('.to_pay_cahge c').innerText = (am + 150).toLocaleString()
    } else {
        if(window.innerWidth<=500){
            document.querySelector('.ct_bx_locate_bill').style.display='none'
    
            }
        document.querySelector('.block_1_charge span').innerHTML = '&mdash;'
        document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
        document.querySelector('.to_pay_cahge b').remove()
        document.querySelector('.to_pay_cahge c').innerHTML = '&mdash;;'
    }

}
const addToCart = async (elem, bx, price) => {
    let html2
    let html
    added = 0
    document.querySelector('.loader_cart').style.display = 'block'
    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${elem.catId}`)
    dbCollection.get().then(res => {
        res.docs.forEach(cur => {
            let itemDb = cur.data().item
            let namefooodDb = itemDb.name.toLowerCase().trim()
            let namefoood = elem.data.item.name.toLowerCase().trim()
            console.log(namefooodDb, namefoood, itemDb.id, elem.id, 'po')
            if (namefooodDb === namefoood && itemDb.id === elem.id) {
                let groc = itemDb.requiredGroc
                //    let stock=-
                console.log(groc, 'req')

                let itm = itemDb

                let ratings = elem.data.item.ratings
                if (groc !== null && groc !== undefined) {
                    for (let i = 0; i < groc.length; i++) {
                        let cur2 = groc[i]
                        if (addedGroc.length !== 0) {

                            if (!addedGroc.includes(cur2.callName)) {
                                addedGroc.push(cur2.callName)
                                addedGrocFull.forEach(p => {
                                    if (p.name !== namefooodDb) {
                                        addedGrocFull.push({ name: namefooodDb, itm: [cur2] })

                                    } else {
                                        p.itm.push(cur2)

                                    }
                                })


                            } else {
                                bothHave.push(cur2.callName)
                            }

                        } else {

                            addedGroc.push(cur2.callName)
                            addedGrocFull.push({ name: namefooodDb, itm: [cur2] })


                        }


                    }
                } else {
                    return
                }
                addedGrocFull.forEach(async curi => {
                    let aItm = curi.itm
                    console.log(aItm)
                    // console.log(catId)
                    aItm.forEach(async el1 => {
                        let catId = el1.catId



                        let dbGroc = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${catId}`)
                        let doc = await dbGroc.get()
                        console.log(doc.docs)

                        doc.docs.forEach(itm => {
                            let el = itm.data().item
                            let id = el.id

                            let added = 'not_added_itm_ek_fd'
                            if (el.name.split(' ').join('').toLowerCase() === el1.name.split(' ').join('').toLowerCase()) {
                                let allGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                                if (allGroc !== null) {
                                    allGroc.forEach(c => {
                                        if (c.com !== null) {
                                            if (c.name.split(' ').join('').toLowerCase() === el.name.split(' ').join('').toLowerCase()) {
                                                //for seleted item
                                                added = 'added_itm_ek_fd'
                                            }
                                        } else {
                                            if (c.name.split(' ').join('').toLowerCase() === el.name.split(' ').join('').toLowerCase()) {
                                                //for seleted item
                                                added = 'added_itm_ek_fd'
                                            }
                                        }
                                    })
                                }
                                if (!allReadyAdded.includes(el.name)) {
                                    allReadyAdded.push(el.name)
                                    if (el.offer !== null) {

                                        let p = parseFloat(el.price)
                                        let off = parseFloat(el.offer)
                                        let oP = Math.round(p - (p * off / 100))
                                        if (el.group === 'veg') {
                                            if (el.unitInside !== undefined && el.unitInside !== null) {
                                                const addInside = el.unitInside.map(c => {
                                                    let itm = `<li>
                                                            <p>${c.selectedUnit}</p>
   <span>₹ ${c.selectedPrice}</span>
                                                        </li>`
                                                    return itm
                                                })
                                                html = `      <div class="itm_food_list_ek ${added}  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                        <div class="ct_offer_box_cook2">
                                                            <span>${el.offer}%</span>
                                                            <p> off</p>
                                                        </div>
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
                                                                viewBox="0 0 172 172" style=" fill:#000000;">
                                                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                                    font-weight="none" font-size="none" text-anchor="none"
                                                                    style="mix-blend-mode: normal">
                                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                                    <g fill="#099f49">
                                                                        <path
                                                                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                        </path>
                                                                        <path
                                                                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                
                                                        <div class="ct_set_qt_for_groc">
                                                            <div class="field_bx_qt">
                                                                <p>${el.unitInside[0].selectedUnit}</p>
                                                                <span>₹ ${el.unitInside[0].selectedPrice}</span>
                                                                
                                                            </div>
                                                            <div class="ct_bx_drop">
                                                                    <ion-icon name="chevron-down-outline"></ion-icon>
                                                                </div>
                                                            <ul class="not_tog_dpd">
                                                              ${addInside.join('')}
                                                            </ul>
                                                         
                                                        </div>
                                                        <p class="price_food"><del>₹ ${el.price}</del><span>₹ ${oP}</span></p>
                                
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>
                                
                                
                                
                                
                                
                                                    </div>`
                                            } else {
                                                html = `      <div class="itm_food_list_ek  ${added}  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                        <div class="ct_offer_box_cook2">
                                                            <span>${el.offer}%</span>
                                                            <p> off</p>
                                                        </div>
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
                                                                viewBox="0 0 172 172" style=" fill:#000000;">
                                                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                                    font-weight="none" font-size="none" text-anchor="none"
                                                                    style="mix-blend-mode: normal">
                                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                                    <g fill="#099f49">
                                                                        <path
                                                                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                        </path>
                                                                        <path
                                                                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                
                                                        <div class="ct_set_qt_for_groc">
                                                        <span class="unit">${el.unit}</span>
                                                       </div>                                                           
                                                        <p class="price_food"><del>₹ ${el.price}</del><span>₹ ${oP}</span></p>
                                
                                                        <span class="stk_groc">${el.stock}</span>
                                
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>
                                
                                
                                
                                                    </div>`
                                            }



                                        } else {

                                            if (el.unitInside !== undefined && el.unitInside !== null) {
                                                const addInside = el.unitInside.map(c => {
                                                    let itm = `<li>
                                                    <p>${c.selctedUnit}</p>
                                                    <span>₹ ${c.selctedPrice}</span>
                                                    </li>`
                                                    return itm
                                                })
                                                html = `      <div class="itm_food_list_ek ${added}  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                    <div class="ct_offer_box_cook2">
                                                        <span>${el.offer}%</span>
                                                        <p> off</p>
                                                    </div>
                                                    <div class="ct_img_res_main">
                                                        <img class="main_img_groc_itm" src="${el.img}">
                            
                                                    </div>
                                                    <span class='id_groc'>${id}</span>
        
                                                    <div class="ct_type_fd_cart_itm2">
                                                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                                                    </div>
                                                    <div class="ct_dt_tm_food_res">
            
                                                        <h4>${el.name}</h4>
                            
                            
                                                    </div>
                            
                                                    <div class="ct_set_qt_for_groc">
                                                    <div class="field_bx_qt">
                                                        <p>${el.unitInside[0].selectedUnit}</p>
                                                        <span>₹ ${el.unitInside[0].selectedPrice}</span>
                                                        
                                                    </div>
                                                    <div class="ct_bx_drop">
                                                            <ion-icon name="chevron-down-outline"></ion-icon>
                                                        </div>
                                                    <ul class="not_tog_dpd">
                                                      ${addInside.join('')}
                                                    </ul>
                                                 
                                                </div>
                                                    <p class="price_food"><del>₹ ${el.price}</del><span>₹ ${oP}</span></p>
                            
                            
                                                    <span class='catId_groc'>${catId}</span>
                                                    <span class='stk_groc'>${catId}</span>
                            
                            
                            
                            
                            
                                                </div>`
                                            } else {
                                                html = `      <div class="itm_food_list_ek  ${added}  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                    <div class="ct_offer_box_cook2">
                                                        <span>${el.offer}%</span>
                                                        <p> off</p>
                                                    </div>
                                                    <div class="ct_img_res_main">
                                                        <img class="main_img_groc_itm" src="${el.img}">
                            
                                                    </div>
                                                    <span class='id_groc'>${id}</span>
        
                                                    <div class="ct_type_fd_cart_itm2">
                                                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                                                    </div>
                                                    <div class="ct_dt_tm_food_res">
            
                                                        <h4>${el.name}</h4>
                            
                            
                                                    </div>
                            
                                                    <div class="ct_set_qt_for_groc">
                                                    <span class="unit">${el.unit}</span>
                                                   </div>                                                           
                                                    <p class="price_food"><del>₹ ${el.price}</del><span>₹ ${oP}</span></p>
                            
                                                    <span class="stk_groc">${el.stock}</span>
                            
                            
                                                    <span class='catId_groc'>${catId}</span>
                                                    <span class='stk_groc'>${catId}</span>
                            
                            
                            
                                                </div>`
                                            }
                                        }
                                    } else {

                                        if (el.group === 'veg') {
                                            if (el.unitInside !== undefined && el.unitInside !== null) {
                                                const addInside = el.unitInside.map(c => {
                                                    let html = `<li>
                                                               <p>${c.selectedUnit}</p>
   <span>₹ ${c.selectedPrice}</span>
                                                        </li>`
                                                    return html
                                                })
                                                html = `      <div class="itm_food_list_ek ${added} for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                     
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
                                                                viewBox="0 0 172 172" style=" fill:#000000;">
                                                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                                    font-weight="none" font-size="none" text-anchor="none"
                                                                    style="mix-blend-mode: normal">
                                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                                    <g fill="#099f49">
                                                                        <path
                                                                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                        </path>
                                                                        <path
                                                                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                
                                                        <div class="ct_set_qt_for_groc">
                                                        <div class="field_bx_qt">
                                                            <p>${el.unitInside[0].selectedUnit}</p>
                                                            <span>₹ ${el.unitInside[0].selectedPrice}</span>
                                                            
                                                        </div>
                                                        <div class="ct_bx_drop">
                                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                                            </div>
                                                        <ul class="not_tog_dpd">
                                                          ${addInside.join('')}
                                                        </ul>
                                                     
                                                    </div>    
                                                        <p class="price_food"><span>₹ ${el.price}</span></p>
                                
                                
                                
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>
                                
                                
                                
                                                    </div>`
                                            } else {
                                                html = `      <div class="itm_food_list_ek ${added} for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
                                                                viewBox="0 0 172 172" style=" fill:#000000;">
                                                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                                                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                                                    font-weight="none" font-size="none" text-anchor="none"
                                                                    style="mix-blend-mode: normal">
                                                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                                                    <g fill="#099f49">
                                                                        <path
                                                                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                                                        </path>
                                                                        <path
                                                                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                                                        </path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                
                                                        <div class="ct_set_qt_for_groc">
                                                        <span class="unit">${el.unit}</span>
                                                       </div>    
                                                        <p class="price_food"><span>₹ ${el.price}</span></p>
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>                    
                                
                                
                                
                                
                                
                                                    </div>`
                                            }




                                        } else {

                                            if (el.unitInside !== undefined && el.unitInside !== null) {
                                                const addInside = el.unitInside.map(c => {
                                                    let html = `<li>
                                                    <p>${c.selectedUnit}</p>
   <span>₹ ${c.selectedPrice}</span>
                                                        </li>`
                                                    return html
                                                })
                                                html = `      <div class="itm_food_list_ek ${added} for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                      
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                        <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                                        <div class="ct_set_qt_for_groc">
                                                        <div class="field_bx_qt">
                                                            <p>${el.unitInside[0].selectedUnit}</p>
                                                            <span>₹ ${el.unitInside[0].selectedPrice}</span>
                                                            
                                                        </div>
                                                        <div class="ct_bx_drop">
                                                                <ion-icon name="chevron-down-outline"></ion-icon>
                                                            </div>
                                                        <ul class="not_tog_dpd">
                                                          ${addInside.join('')}
                                                        </ul>
                                                     
                                                    </div>
                                                        <p class="price_food"><span>₹ ${el.price}</span></p>
                                
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>
                                
                                
                                
                                
                                
                                                    </div>`
                                            } else {
                                                html = `      <div class="itm_food_list_ek ${added} for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                                                      
                                                        <div class="ct_img_res_main">
                                                            <img class="main_img_groc_itm" src="${el.img}">
                                
                                                        </div>
                                                        <span class='id_groc'>${id}</span>
            
                                                        <div class="ct_type_fd_cart_itm2">
                                                        <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                
                                                        </div>
                                                        <div class="ct_dt_tm_food_res">
                
                                                            <h4>${el.name}</h4>
                                
                                
                                                        </div>
                                
                                                        <div class="ct_set_qt_for_groc">
                                                        <span class="unit">${el.unit}</span>
                                                       </div>    
                                                        <p class="price_food"><span>₹ ${el.price}</span></p>
                                
                                                        <span class="stk_groc">${el.stock}</span>
                                
                                                        <span class='catId_groc'>${catId}</span>
                                                        <span class='stk_groc'>${catId}</span>
            
                                
                                
                                
                                
                                                    </div>`
                                            }




                                        }
                                    }

                                    document.querySelector('.ct_bx_all_groc_required .loader_cart').style.display = 'none'

                                    document.querySelector('.ct_bx_foods_req').insertAdjacentHTML('beforeend', html)

                                    Array.from(document.querySelector('.ct_bx_foods_req').lastChild.childNodes).forEach(cur => {
                                        if (cur.classList !== undefined) {
                                            if (cur.classList.value.split(' ').includes('ct_dt_tm_food_res')) {
                                                if (el.com !== null) {
                                                    cur.insertAdjacentHTML('afterbegin', `<span class="unit">${el.com}</span>`)

                                                }
                                            }
                                        }
                                    })
                                    if (el.com !== null && el1.com !== null) {

                                        document.querySelector('.ct_bx_foods_req').lastChild.childNodes.forEach(cur1 => {
                                            if (cur1.classList !== undefined) {
                                                console.log(cur1.classList.value.split(' '))
                                                if (cur1.classList.value.split(' ').includes('ct_dt_tm_food_res')) {
                                                    cur1.insertAdjacentHTML('afterbegin', `<span>${el.com}</span>`)
                                                }
                                            }
                                        })

                                    }

                                    if (window.innerWidth < 400) {



                                        document.querySelectorAll('.ct_bx_grocery_required .field_bx_qt p').forEach(cur => {
                                            cur.style.fontSize = '12px'
                                        })
                                        document.querySelectorAll('.ct_bx_grocery_required .field_bx_qt span').forEach(cur => {
                                            cur.style.fontSize = '10px'
                                        })
                                    }
                                    let search = window.location.search
                                    let order = JSON.parse(localStorage.getItem('orders'))
                                    if (search.split('=')[0].split('?')[1] === 'item' || order !== null) {
                                        if (order.length !== 0) {

                                            document.querySelectorAll('.itm_food_list_ek').forEach(cur => {
                                                cur.style.pointerEvents = 'none'
                                            })

                                        }
                                    }
                                }


                                if (window.innerWidth < 360) {
                                    
                              
                                    document.querySelectorAll('.main_li_cart_fd_lis').forEach(cur => {
                                        cur.style.marginLeft = '2px'
                                    })
                                }
     
                               
                                if(window.innerWidth<=400){

                                    document.querySelectorAll('.ct_bx_grocery_required .itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
                                        cur.style.fontSize = '15px'
                                    })
                                    document.querySelectorAll('.ct_bx_grocery_required .itm_food_list_ek').forEach(cur => {
                                        cur.style.width = '30%'
                                
                                    })
                                  
                                    document.querySelectorAll('.ct_bx_all_groc_required .itm_food_list_ek').forEach(cur => {
                                        cur.style.overflow='visible'
                                
                                    })
                                    document.querySelectorAll('.ct_bx_all_groc_required .main_img_groc_itm').forEach(cur => {
                                        cur.style.minHeight='120px'
                                        cur.style.width='120px'
                                
                                    })
                                }
                                if(window.innerWidth<360){  
                                    document.querySelectorAll('.ct_bx_all_groc_required').forEach(cur => {
                                        cur.style.transform='translate(-52px,60px)'
                                        cur.style.width='114%'

                                    })}
                            }


                        })
                    })


                })
                ratings.forEach(cur => {
                    numenator2 += cur.star * cur.ratings
                    denomenator2 += cur.ratings
                })

                let ratedFront = parseFloat((numenator2 / denomenator2).toFixed(2).split('.')[0])

                let ratedBack = parseFloat((numenator2 / denomenator2).toFixed(2).split('.')[1].split('')[0])
                if (ratedFront === 5) {

                    html1 = `       <span>
    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>


<span>
    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>`

                } else {
                    if (ratedFront === 4) {

                        if (ratedBack > 1) {
                            html1 = `       <span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>


<span>
<ion-icon class="filed_rating_itm" name="star"></ion-icon>
</span>

<span>
<ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
</span>`
                        } else {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`

                        }
                    } else if (ratedFront === 3) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        } else {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        }
                    } else if (ratedFront === 2) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        } else {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        }
                    } else if (ratedFront === 1) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        } else {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
        </span>`
                        }
                    }
                }
                let Numstock = parseFloat(itm.stock)
                let eQt = parseFloat(elem.qt)
                if (eQt > Numstock) {
                    elem.qt = Numstock
                }
                if (itm.stock !== 0) {
                    let stock = 10

                    let checkqt = () => {
                        elem.qt = parseFloat(elem.qt)
                        if (elem.qt >= stock) {
                            return stock
                        } else {
                            return true
                        }
                    }
                    let qtFood = checkqt()
                    if (qtFood) {
                        qtFood = elem.qt
                    }
                    qtFood = parseFloat(qtFood)
                    price = qtFood * price
                    price = price.toLocaleString()
                    let d = elem.data.item
                    if (d.offer !== null) {
                        let totprice = price.split(',').join('')
                        totprice = parseFloat(totprice)

                        let offer = parseFloat(d.offer)
                        let offerPrice = (totprice - Math.round(totprice * (offer / 100)))
                        let saves = totprice - offerPrice
                        offerPrice = offerPrice.toLocaleString()
                        // return 
                        if (d.type === 'non-veg') {
                            html2 = `<li class="main_li_cart_fd_lis">

                            <div class="ct_itm_food_cart">
                            <div class="ct_type_fd_cart_itm">
                            <img
                            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                            </div>
                            <a class="img_a_cart" href="/product?${elem.href}">

                            <img class="main_cart_img" src='${d.img}'>
                            </a>
                            <div class="ct_bx_quant_itm_cart">

                                <div class="for_cart_qt">
                                    <div class="bx_rem_field_qt_num bx_op">

                                        <ion-icon class="remove_field_num md hydrated" name="remove"
                                            role="img" aria-label="remove"></ion-icon>
                                    </div>
                                    <input ''="" type="text" value="${elem.qt}">
                                    <div class="bx_ad_field_qt_num bx_op">
                                        <ion-icon class="add_field_num md hydrated" name="add" role="img"
                                            aria-label="add"></ion-icon>

                                    </div>

                                </div>
                            </div>
                            <span class="stk_cart">${itm.stock}</span>

                            <div class="flex_bx_cart_itm">
                            <h4>${d.name}</h4>
                            <div class="ct_bx_ratings">
                            ${html1}
                                </div>
                                <div class="ct_bx_hw_cook">
                                <a href="${d.cook}">How to cook?</a>
                                </div>

                                <p class="price_am_cart_fd2"><del>₹ ${price}</del> <span>₹ ${offerPrice}</span> </p>

                                    
                                    <span class="saved_am">you saved ₹ ${saves} </span>

                                    <div class="ct_bx_related_itm_dt_cart">

                                        <div class="ct_time_takes">
                                            <ion-icon name="alarm-outline" role="img" class="md hydrated" aria-label="alarm outline"></ion-icon>

                                            <p>Cook Just in <strong>  <p>${d.time}</p>
                                            </strong></p>
                                        </div>

                                </div>





                            </div>






                            <div class="ct_bx_act_cart_itm">


                                <div class="remove_fd_itm_ct">
                                    <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>

                                </div>

                            </div>


                        </div></li>`




                        } else if (d.type === 'veg') {
                            html2 = `<li class="main_li_cart_fd_lis">

                            <div class="ct_itm_food_cart">
                            <div class="ct_type_fd_cart_itm">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                            height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#099f49">
                                    <path
                                        d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                    </path>
                                    <path
                                        d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                            <a class="img_a_cart" href="/product?${elem.href}">

                            <img class="main_cart_img" src='${d.img}'>
                            </a>
                            <div class="ct_bx_quant_itm_cart">

                                <div class="for_cart_qt">
                                    <div class="bx_rem_field_qt_num bx_op">

                                        <ion-icon class="remove_field_num md hydrated" name="remove"
                                            role="img" aria-label="remove"></ion-icon>
                                    </div>
                                    <input ''="" type="text" value="${elem.qt}">
                                    <div class="bx_ad_field_qt_num bx_op">
                                        <ion-icon class="add_field_num md hydrated" name="add" role="img"
                                            aria-label="add"></ion-icon>

                                    </div>

                                </div>
                            </div>
                            <span class="stk_cart">${itm.stock}</span>

                            <div class="flex_bx_cart_itm">
                            <h4>${d.name}</h4>
                            <div class="ct_bx_ratings">
                            ${html1}
                                </div>
                                <div class="ct_bx_hw_cook">
                                <a href="${d.cook}">How to cook?</a>
                                </div>

                                <p class="price_am_cart_fd2"><del>₹ ${price}</del> <span>₹ ${offerPrice}</span> </p>

                                    
                                    <span class="saved_am">you saved ₹ ${saves} </span>

                                    <div class="ct_bx_related_itm_dt_cart">

                                        <div class="ct_time_takes">
                                            <ion-icon name="alarm-outline" role="img" class="md hydrated" aria-label="alarm outline"></ion-icon>

                                            <p>Cook Just in <strong>  <p>${d.time}</p>
                                            </strong></p>
                                        </div>

                                </div>





                            </div>






                            <div class="ct_bx_act_cart_itm">


                                <div class="remove_fd_itm_ct">
                                    <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>

                                </div>

                            </div>


                        </div></li>`


                        }
                    } else {
                        if (d.type === 'non-veg') {
                            html2 = `<li class="main_li_cart_fd_lis">

                            <div class="ct_itm_food_cart">
                            <div class="ct_type_fd_cart_itm">
                            <img
                            src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                            </div>
                            <a class="img_a_cart" href="/product?${elem.href}">

                            <img class="main_cart_img" src='${d.img}'>
                            </a>
                            <div class="ct_bx_quant_itm_cart">

                                <div class="for_cart_qt">
                                    <div class="bx_rem_field_qt_num bx_op">

                                        <ion-icon class="remove_field_num md hydrated" name="remove"
                                            role="img" aria-label="remove"></ion-icon>
                                    </div>
                                    <input ''="" type="text" value="${elem.qt}">
                                    <div class="bx_ad_field_qt_num bx_op">
                                        <ion-icon class="add_field_num md hydrated" name="add" role="img"
                                            aria-label="add"></ion-icon>

                                    </div>

                                </div>
                            </div>
                            <span class="stk_cart">${itm.stock}</span>

                            <div class="flex_bx_cart_itm">
                            <h4>${d.name}</h4>
                            <div class="ct_bx_ratings">
                            ${html1}
                                </div>
                                <div class="ct_bx_hw_cook">
                                <a href="${d.cook}">How to cook?</a>
                                </div>

                                <p class="price_am_cart_fd2"><del>₹ ${price}</del> <span>₹ ${offerPrice}</span> </p>

                                    

                                    <div class="ct_bx_related_itm_dt_cart">

                                        <div class="ct_time_takes">
                                            <ion-icon name="alarm-outline" role="img" class="md hydrated" aria-label="alarm outline"></ion-icon>

                                            <p>Cook Just in <strong>  <p>${d.time}</p>
                                            </strong></p>
                                        </div>

                                </div>





                            </div>






                            <div class="ct_bx_act_cart_itm">


                                <div class="remove_fd_itm_ct">
                                    <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>

                                </div>

                            </div>


                        </div></li>`




                        } else if (d.type === 'veg') {
                            html2 = `<li class="main_li_cart_fd_lis">

                            <div class="ct_itm_food_cart">
                            <div class="ct_type_fd_cart_itm">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                            height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                                stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                                font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#099f49">
                                    <path
                                        d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                                    </path>
                                    <path
                                        d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                            <a class="img_a_cart" href="/product?${elem.href}">

                            <img class="main_cart_img" src='${d.img}'>
                            </a>
                            <div class="ct_bx_quant_itm_cart">

                                <div class="for_cart_qt">
                                    <div class="bx_rem_field_qt_num bx_op">

                                        <ion-icon class="remove_field_num md hydrated" name="remove"
                                            role="img" aria-label="remove"></ion-icon>
                                    </div>
                                    <input ''="" type="text" value="${elem.qt}">
                                    <div class="bx_ad_field_qt_num bx_op">
                                        <ion-icon class="add_field_num md hydrated" name="add" role="img"
                                            aria-label="add"></ion-icon>

                                    </div>

                                </div>
                            </div>
                            <span class="stk_cart">${itm.stock}</span>

                            <div class="flex_bx_cart_itm">
                            <h4>${d.name}</h4>
                            <div class="ct_bx_ratings">
                            ${html1}
                                </div>
                                <div class="ct_bx_hw_cook">
                                <a href="${d.cook}">How to cook?</a>
                                </div>

                                <p class="price_am_cart_fd2"><del>₹ ${price}</del> <span>₹ ${offerPrice}</span> </p>

                                    

                                    <div class="ct_bx_related_itm_dt_cart">

                                        <div class="ct_time_takes">
                                            <ion-icon name="alarm-outline" role="img" class="md hydrated" aria-label="alarm outline"></ion-icon>

                                            <p>Cook Just in <strong>  <p>${d.time}</p>
                                            </strong></p>
                                        </div>

                                </div>





                            </div>






                            <div class="ct_bx_act_cart_itm">


                                <div class="remove_fd_itm_ct">
                                    <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>

                                </div>

                            </div>


                        </div></li>`


                        }
                    }

                } else { html2 = null }
                if (html2 !== null) {
                    document.querySelector('.bx_evt_cart_item .loader_cart').style.display = 'none'
                    document.querySelector(bx).insertAdjacentHTML('beforeend', html2)
                    $('.ct_subotatal').waypoint(function (direction) {

                        if (direction === 'down') {
                            if (window.innerWidth < 500) {
                
                                $('.ct_bx_locate_bill').css('position', 'relative')
                            }
                        } else if (direction === 'up') {
                            if (window.innerWidth < 500) {
                
                                $('.ct_bx_locate_bill').css('position', 'fixed')
                
                            }
                        }
                    }, {
                        offset: '80%'
                    })
                    $('.ct_bx_quant_itm_cart input').keypress(function (e) {
                        var a = [];
                        var k = e.which;
                    
                        for (i = 999; i < 9999; i++)
                            a.push(i);
                    
                        if (!(a.indexOf(k) >= 0))
                            e.preventDefault();
                    
                    });
                    if (window.innerWidth < 500) {
                        let lenFd = document.querySelectorAll('.bx_evt_cart_item .main_li_cart_fd_lis').length
                        document.querySelector(`.bx_evt_cart_item .main_li_cart_fd_lis:nth-of-type(${lenFd})`).childNodes[1].childNodes[11].remove()
                        //    document.querySelector(`.bx_evt_cart_item .main_li_cart_fd_lis:nth-of-type(${lenFd})`).childNodes[1].childNodes[9].remove()
                        document.querySelectorAll('.bx_evt_cart_item .ct_time_takes').forEach(cur => {
                            cur.style.display = 'none'
                        })

                        document.querySelectorAll('.bx_evt_cart_item .ct_bx_related_itm_dt_cart').forEach(cur => {
                            cur.style.transform = 'translate(-90px, -13px)'
                        })
                        document.querySelector(`.bx_evt_cart_item .main_li_cart_fd_lis:nth-of-type(${lenFd})`).childNodes[1].childNodes[11].remove()

                        Array.from(document.querySelector(`.bx_evt_cart_item .main_li_cart_fd_lis:nth-of-type(${lenFd})`).childNodes[1].childNodes[9].childNodes).forEach(cur => {
                            if (cur.classList !== undefined) {
                                if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart')) {
                                    cur.insertAdjacentHTML('afterbegin', `<div class="remove_fd_itm_ct11">
                        <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>

                    </div>`)
                                }
                            }
                        })

                    }
if(window.innerWidth<=360){
     
    document.querySelectorAll('.main_cart_img').forEach(cur => {
        cur.style.height= '96px'
    })
    
    document.querySelectorAll('.bx_evt_cart_item .ct_bx_quant_itm_cart').forEach(cur => {
        cur.style.marginTop='116px'
    })
    document.querySelectorAll('.main_cart_img').forEach(cur => {
        cur.style.height= '96px'
    })
  
}
                    let search = window.location.search
                    let order = JSON.parse(localStorage.getItem('orders'))
                    if (search.split('=')[0].split('?')[1] === 'item' || order !== null) {

                        document.querySelector('.ct_bin_ts_nav_ck').style.display = 'none'
                        document.querySelectorAll('.for_cart_qt div').forEach(cur => {
                            cur.style.background = 'rgb(33, 164, 240)'
                            cur.style.color = 'white'
                            cur.style['pointer-events'] = 'none'
                        })

                        document.querySelectorAll('.for_cart_qt ion-icon').forEach(cur => {
                            cur.style.color = 'white'
                        })
                        document.querySelectorAll('.ct_bx_act_cart_itm').forEach(cur => {
                            cur.style.display = 'none'
                        })

                    }

                }
            } else if (html2 === null) {
                document.querySelectorAll('.for_ek_fd_cart_load').forEach(cur => {
                    cur.style.display = 'none'

                })

                document.querySelectorAll('.for_ek_food_cart').forEach(cur => {
                    cur.style.display = 'block'

                })
            }
        })
    })



}

let stockGroc
const addGrocCart = async (elem, bx, reqGroc = false) => {
    if (elem.priceDel !== undefined && elem.priceDel !== null) {
        if (Number.isInteger(elem.priceDel)) {
            elem.priceDel = elem.priceDel
        } else {
            elem.priceDel = parseFloat(elem.priceDel.split('₹')[1].split(',').join('')) * elem.qt
            elem.priceDel = elem.priceDel.toLocaleString()
        }

    }

    elem.price = parseFloat(elem.price.split('₹')[1].split(',').join('')) * elem.qt
    elem.price = '₹' + ' ' + elem.price.toLocaleString()
    let html
    let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${elem.catId}`)
    let res = await dbCollection.get()
    document.querySelector('.for_ek_groc_cart').style.display = 'none'

    document.querySelector('.for_groc_cart_load').style.display = 'none'

    res.docs.forEach(cur => {
        let itemDb = cur.data().item
        console.log(itemDb.com !== null && itemDb.com !== undefined)
        let namefooodDb = itemDb.name.toLowerCase().split(' ').join('')
        let namefoood = elem.name.toLowerCase().split(' ').join('')

        if (itemDb.com !== null && itemDb.com !== undefined && elem.com !== null && elem.com !== undefined) {
            console.log(itemDb.com, elem.com)
            let comFd = elem.com.toLowerCase().split(' ').join('')
            let com = itemDb.com.toLowerCase().split(' ').join('')
            if (namefooodDb === namefoood && com === comFd) {
                stockGroc = itemDb.stock
            }

        } else {
            if (namefooodDb === namefoood) {
                stockGroc = itemDb.stock
            }
        }



    })
    let html1
    if (window.innerWidth <= 500) {
        html1 = `       <li class="main_li_cart_fd_lis groc_bx">

        <div class="ct_itm_food_cart">
        
            <div class="ct_type_fd_cart_itm"> 
            </div>
            <img class="main_cart_img2" src=${elem.img}>
            <div class="ct_bx_quant_itm_cart">
        
                <div class="for_cart_qt">
        
                    <div class="bx_rem_field_qt_num bx_op">
        
                        <ion-icon class="remove_field_num md hydrated" name="remove"
                            role="img" aria-label="remove"></ion-icon>
                    </div>
                    <input '' type="text" value=${elem.qt}>
                    <div class="bx_ad_field_qt_num bx_op">
                        <ion-icon class="add_field_num md hydrated" name="add"
                            role="img" aria-label="add"></ion-icon>
        
                    </div>
        
                </div>
            </div>
            <div class="ct_bx_food_groc_casrt">
                <span class="com_name"></span>
                   <h4>${elem.name}</h4>
             
                   <div class="ct_bx_related_itm_dt_cart2">
                   <span class="unit"></span>
        
                       
        
                       
                   </div>
                        <p class="price_am_cart_fd2"><del></del> <span></span> </p>
        
                        <span class='id_groc'>${elem.id}</span>
        
                        <div class="ct_bx_savd_an_trash">
                        <div class="remove_fd_itm_ct2">
                            <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>
                        </div>
                        <span class="saved_am"></span>
                    </div>              
        
        
               
        
            </div>
        
        
        
        </div>
        
        <p class="stk_groc_cart">${stockGroc}</p>
        
        
        
        
        
      
        
        </li>`
    } else {
        html1 = `       <li class="main_li_cart_fd_lis groc_bx">

        <div class="ct_itm_food_cart">
        
            <div class="ct_type_fd_cart_itm"> 
            </div>
            <img class="main_cart_img2" src=${elem.img}>
            <div class="ct_bx_quant_itm_cart">
        
                <div class="for_cart_qt">
        
                    <div class="bx_rem_field_qt_num bx_op">
        
                        <ion-icon class="remove_field_num md hydrated" name="remove"
                            role="img" aria-label="remove"></ion-icon>
                    </div>
                    <input '' type="text" value=${elem.qt}>
                    <div class="bx_ad_field_qt_num bx_op">
                        <ion-icon class="add_field_num md hydrated" name="add"
                            role="img" aria-label="add"></ion-icon>
        
                    </div>
        
                </div>
            </div>
            <div class="ct_bx_food_groc_casrt">
                <span class="com_name"></span>
                   <h4>${elem.name}</h4>
             
                   <div class="ct_bx_related_itm_dt_cart2">
                   <span class="unit"></span>
        
                       
        
                       
                   </div>
                        <p class="price_am_cart_fd2"><del></del> <span></span> </p>
        
                        <span class='id_groc'>${elem.id}</span>
        
                <span class="saved_am"></span>
              
        
        
               
        
            </div>
        
        
        
        </div>
        
        <p class="stk_groc_cart">${stockGroc}</p>
        
        
        
        
        
        <div class="ct_bx_act_cart_itm">
        
        
            <div class="remove_fd_itm_ct">
                <ion-icon name="trash-outline" role="img" class="md hydrated"
                    aria-label="trash outline"></ion-icon>
            </div>
        </div>
        
        </li>`
    }
    document.querySelector('.only_for_grocery_item').insertAdjacentHTML('beforeend', html1)
    
    $('.ct_subotatal').waypoint(function (direction) {

        if (direction === 'down') {
            if (window.innerWidth < 500) {

                $('.ct_bx_locate_bill').css('position', 'relative')
            }
        } else if (direction === 'up') {
            if (window.innerWidth < 500) {

                $('.ct_bx_locate_bill').css('position', 'fixed')

            }
        }
    }, {
        offset: '80%'
    })
    $('.ct_bx_quant_itm_cart input').keypress(function (e) {
        var a = [];
        var k = e.which;
    
        for (i = 999; i < 9999; i++)
            a.push(i);
    
        if (!(a.indexOf(k) >= 0))
            e.preventDefault();
    
    });
    if (elem.unit !== null && elem.unit !== 'null') {
        Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
            if (cur.classList !== undefined) {

                if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {
                    cur.childNodes[1].innerText = elem.unit
                    // })
                }

            }
        })
    }

    if (elem.off !== null && elem.off !== undefined) {

        let p = parseFloat(elem.price.trim().split('₹')[1].split(',').join(''))
        let pD = parseFloat(elem.priceDel)
        pD = parseFloat(elem.priceDel.split(',').join(''))

        let offAm = pD - p

        console.log(pD)
        p = p.toLocaleString()
        pD = pD.toLocaleString()




        if (elem.type === 'veg') {
            let typH = `  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                    font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path
                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>`

            document.querySelectorAll('.ct_type_fd_cart_itm').forEach(cur => {
                cur.innerHTML = typH
            })
            if (elem.innerUnit !== null) {

                const addInside = elem.innerUnit.map(c => {
                    let itm = `<li>
                        <p>${c.unit}</p>
                        <span>₹ ${c.price}</span>
                    </li>`
                    return itm
                })
                let hm
                if (elem.selectedPrice !== 'null') {
                    hm = `<div class="ct_filed_selct_qt_un">
                            <div class="ct_set_qt_for_groc">
                                <div class="field_bx_qt">
                                    <p>${elem.selectedUnit}</p>
                                    <span>${elem.selectedPrice}</span>

                                </div>
                                <ul class='not_tog_dpd'>
                                ${addInside.join('')}
                                </ul>

                            </div>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>`
                } else {
                    hm = `<div class="ct_filed_selct_qt_un">
                            <div class="ct_set_qt_for_groc">
                                <div class="field_bx_qt">
                                    <p>${elem.innerUnit[0].unit}</p>
                                    <span>${elem.innerUnit[0].price}</span>

                                </div>
                                <ul class='not_tog_dpd'>
                                ${addInside.join('')}
                                </ul>

                            </div>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>`
                }
                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {

                        if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {

                            cur.insertAdjacentHTML('beforeend', hm)
                            //    document.querySelectorAll('.ct_bx_related_itm_dt_cart2').forEach(cur => {
                            // })
                        }

                    }
                })

            } else {


                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes[9].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        cur.innerText = elem.unit
                    }
                })
            }
            if (elem.com !== null) {

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('com_name')) {

                            cur.innerText = elem.com
                        }

                    }
                })
            }

            Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                if (cur.classList !== undefined) {
                    console.log(cur)

                    if (cur.classList.value.split(' ').includes('com_name')) {

                        cur.innerText = elem.com
                    }
                    if (window.innerWidth <= 500) {
                        console.log(cur.childNodes)
                        if (cur.classList.value.split(' ').includes('ct_bx_savd_an_trash')) {
                            cur.childNodes[3].innerText = `You saves ₹ ${offAm}`
                        }


                    } else {

                        if (cur.classList.value.split(' ').includes('saved_am')) {

                            cur.innerText = `You saves ₹ ${offAm}`
                        }

                    }
                    if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {
                        cur.childNodes[2].innerText = "₹" + p


                        cur.childNodes[0].innerText = "₹" + pD

                    }
                }
            })

        }
        else {

            let typH = `                                     <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
`

            document.querySelectorAll('.ct_type_fd_cart_itm').forEach(cur => {
                cur.innerHTML = typH
            })
            if (elem.innerUnit !== null) {
                const addInside = elem.innerUnit.map(c => {
                    let itm = `<li>
                        <p>${c.unit}</p>
                        <span>₹ ${c.price}</span>
                    </li>`
                    return itm
                })
                let hm
                if (elem.selectedPrice !== 'null') {
                    hm = `<div class="ct_filed_selct_qt_un">
                            <div class="ct_set_qt_for_groc">
                                <div class="field_bx_qt">
                                    <p>${elem.selectedUnit}</p>
                                    <span>${elem.selectedPrice}</span>

                                </div>
                                <ul class='not_tog_dpd'>
                                ${addInside.join('')}
                                </ul>

                            </div>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>`
                } else {
                    hm = `<div class="ct_filed_selct_qt_un">
                            <div class="ct_set_qt_for_groc">
                                <div class="field_bx_qt">
                                    <p>${elem.innerUnit[0].unit}</p>
                                    <span>${elem.innerUnit[0].price}</span>

                                </div>
                                <ul class='not_tog_dpd'>
                                ${addInside.join('')}
                                </ul>

                            </div>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>`
                }

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {

                        if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {
                            cur.insertAdjacentHTML('beforeend', hm)

                        }
                    }
                })

            } else {


                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes[9].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        cur.innerText = elem.unit
                    }
                })
            }
            if (elem.com !== null) {

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('com_name')) {

                            cur.innerText = elem.com
                        }

                    }
                })
            }

            Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                if (cur.classList !== undefined) {
                    if (cur.classList.value.split(' ').includes('com_name')) {

                        cur.innerText = elem.com
                    }
                    if (window.innerWidth <= 500) {
                        if (cur.classList.value.split(' ').includes('ct_bx_savd_an_trash')) {
                            cur.childNodes[3].innerText = `You saves ₹ ${offAm}`
                        }


                    } else {

                        if (cur.classList.value.split(' ').includes('saved_am')) {

                            cur.innerText = `You saves ₹ ${offAm}`
                        }

                    }
                    if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {

                        cur.childNodes[0].innerText = "₹" + p


                        cur.childNodes[2].innerText = "₹" + pD

                    }
                }
            })

        }
    }
    else {
        let p = parseFloat(elem.price.split('₹')[1])





        if (elem.type === 'veg') {
            let typH = `  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18"
                height="18" viewBox="0 0 172 172" style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                    stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10"
                    stroke-dasharray="" stroke-dashoffset="0" font-family="none"
                    font-weight="none" font-size="none" text-anchor="none"
                    style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#099f49">
                        <path
                            d="M150.5,150.5h-129v-129h129zM28.66667,143.33333h114.66667v-114.66667h-114.66667z">
                        </path>
                        <path
                            d="M86,46.58333c-21.76922,0 -39.41667,17.64744 -39.41667,39.41667c0,21.76922 17.64744,39.41667 39.41667,39.41667c21.76922,0 39.41667,-17.64744 39.41667,-39.41667c0,-21.76922 -17.64744,-39.41667 -39.41667,-39.41667z">
                        </path>
                    </g>
                </g>
            </svg>`

            document.querySelectorAll('.ct_type_fd_cart_itm').forEach(cur => {
                cur.innerHTML = typH
            })
            if (elem.innerUnit !== null) {
                const addInside = elem.innerUnit.map(c => {
                    let itm = `<li>
                    <p>${c.unit}</p>
                    <span>₹ ${c.price}</span>
                </li>`
                    return itm
                })
                let hm
                if (elem.selectedPrice !== 'null') {
                    hm = `<div class="ct_filed_selct_qt_un">
                        <div class="ct_set_qt_for_groc">
                            <div class="field_bx_qt">
                                <p>${elem.selectedUnit}</p>
                                <span>${elem.selectedPrice}</span>

                            </div>
                            <ul class='not_tog_dpd'>
                            ${addInside.join('')}
                            </ul>

                        </div>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>`
                } else {
                    hm = `<div class="ct_filed_selct_qt_un">
                        <div class="ct_set_qt_for_groc">
                            <div class="field_bx_qt">
                                <p>${elem.innerUnit[0].unit}</p>
                                <span>${elem.innerUnit[0].price}</span>

                            </div>
                            <ul class='not_tog_dpd'>
                            ${addInside.join('')}
                            </ul>

                        </div>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>`
                }

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {

                        if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {
                            cur.insertAdjacentHTML('beforeend', hm)
                            //    document.querySelectorAll('.ct_bx_related_itm_dt_cart2').forEach(cur => {
                            // })
                        }

                    }
                })

            } else {
                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes[9].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        cur.innerText = elem.unit
                    }
                })
            }
            if (elem.com !== null) {

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('com_name')) {

                            cur.innerText = elem.com
                        }

                    }
                })
            }
            Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                if (cur.classList !== undefined) {

                    if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {

                        cur.childNodes[2].innerText = "₹" + p



                    }
                }
            })

        }
        else {
            let typH = `                                     <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />
                `

            document.querySelectorAll('.ct_type_fd_cart_itm').forEach(cur => {
                cur.innerHTML = typH
            })
            if (elem.innerUnit !== null) {
                const addInside = elem.innerUnit.map(c => {
                    let itm = `<li>
                    <p>${c.unit}</p>
                    <span>₹ ${c.price}</span>
                </li>`
                    return itm
                })
                let hm
                if (elem.selectedPrice !== 'null') {
                    hm = `<div class="ct_filed_selct_qt_un">
                        <div class="ct_set_qt_for_groc">
                            <div class="field_bx_qt">
                                <p>${elem.selectedUnit}</p>
                                <span>${elem.selectedPrice}</span>

                            </div>
                            <ul class='not_tog_dpd'>
                            ${addInside.join('')}
                            </ul>

                        </div>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>`
                } else {
                    hm = `<div class="ct_filed_selct_qt_un">
                        <div class="ct_set_qt_for_groc">
                            <div class="field_bx_qt">
                                <p>${elem.innerUnit[0].unit}</p>
                                <span>${elem.innerUnit[0].price}</span>

                            </div>
                            <ul class='not_tog_dpd'>
                            ${addInside.join('')}
                            </ul>

                        </div>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>`
                }

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {

                        if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {
                            cur.insertAdjacentHTML('beforeend', hm)
                            //    document.querySelectorAll('.ct_bx_related_itm_dt_cart2').forEach(cur => {
                            // })
                        }

                    }
                })

            } else {


                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes[9].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        cur.innerText = elem.unit
                    }
                })
            }
            if (elem.com !== null) {

                Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                    if (cur.classList !== undefined) {
                        if (cur.classList.value.split(' ').includes('com_name')) {

                            cur.innerText = elem.com
                        }

                    }
                })
            }

            Array.from(document.querySelector('.only_for_grocery_item').lastChild.childNodes[1].childNodes[7].childNodes).forEach(cur => {
                if (cur.classList !== undefined) {

                    if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {

                        cur.childNodes[2].innerText = "₹" + p



                    }
                }
            })

        }

    }



    let search = window.location.search
    let order = JSON.parse(localStorage.getItem('orders'))

    if (search.split('=')[0].split('?')[1] === 'item' || order !== null) {
        document.querySelector('.for_checkout_order').style.display = 'none'


        document.querySelector('.ct_bx_info_confirm').style.display = 'flex'
        document.querySelector('.for_conf_order').style.display = 'block'

        document.querySelector('.for_cart_cancel').style.display = 'flex'
        document.querySelector('.ct_bin_ts_nav_ck').style.display = 'none'

        document.querySelectorAll('.for_cart_qt div').forEach(cur => {
            cur.style.background = ' rgb(33, 164, 240)'
            cur.style['pointer-events'] = 'none'

        })
        document.querySelectorAll('.for_cart_qt ion-icon').forEach(cur => {
            cur.style.color = 'white'
        })
        document.querySelectorAll('.ct_bx_act_cart_itm').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.field_bx_qt').forEach(cur => {
            cur.style.pointerEvents = 'none'
        })

        document.querySelectorAll('.itm_food_list_ek').forEach(cur => {
            cur.style.pointerEvents = 'none'
        })


    }




    if (window.innerWidth <= 600 && window.innerWidth > 500) {
        document.querySelectorAll('.groc_bx .remove_fd_itm_ct').forEach(cur => {
            cur.style.right = '-10px'
            cur.style.marginTop = '-119px'

        })

    }
}

//cuib
const sliderOuter = document.querySelector('.inner_slide')
const sliderInner = document.querySelectorAll('.carousel-cell.fd_ek_cell_car_recom')
let offsets = 0

let pressed = false
let startX;
let isDragging = false
let startPos = 0

let curTransX = 0
let prevTransX = 0
let animationId = 0
let indexCur = 0
// sliderInner.forEach((cur,ind)=>{
//     cur.addEventListener('dragstart',()=>{
//         sliderOuter.addEventListener('touchstart',touchStart(ind))
//         sliderOuter.addEventListener('touchend',touchEnd)

//         sliderOuter.addEventListener('touchmove',touchMove)

//     })
// })
// function touchStart(){
// console.log('start')
// }
// function touchMove(){
//     console.log('move')

// }
// function touchEnd(){
//     console.log('end')

// }


let iG = 0
let btns = document.querySelectorAll('.ct_bx_buttons_actions button')
if (window.innerWidth < 540 && window.innerWidth > 500) {
    btns.forEach(cur => {
        cur.addEventListener('click', (e) => {
            if (e.target.id === 'prev_crousel') {
                iG--
                if (iG !== 0) {
                    let calcT = iG * 62.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`
                        if (iG < 0) { iG = 0 }


                    })
                } else {
                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

                        row1.style.left = `-0vw`
                    })
                }
            } else {

                if (iG <= 11) {
                    iG++
                    let calcT = iG * 62.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        if (iG === 0) {
                            row1.style.left = `-0vw`
                            return
                        }
                        row1.style.left = `-${calcT}vw`




                    })
                }
            }
            console.log(iG)

        })
    })
}
if (window.innerWidth < 400) {
    btns.forEach(cur => {
        cur.addEventListener('click', (e) => {
            if (e.target.id === 'prev_crousel') {
                iG--
                if (iG !== 0) {
                    let calcT = iG * 63

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`
                        if (iG < 0) { iG = 0 }


                    })
                } else {
                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

                        row1.style.left = `-0vw`
                    })
                }
            } else {
                console.log(iG)

                if (iG <= 11) {
                    iG++
                    let calcT = iG * 63

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        if (iG === 0) {
                            row1.style.left = `-0vw`
                            return
                        }
                        row1.style.left = `-${calcT}vw`




                    })
                }
            }
            console.log(iG)

        })
    })
}
if (window.innerWidth <= 450 && window.innerWidth > 400) {
    btns.forEach(cur => {
        cur.addEventListener('click', (e) => {
            if (e.target.id === 'prev_crousel') {
                iG--
                if (iG !== 0) {
                    let calcT = iG * 60.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`
                        if (iG < 0) { iG = 0 }


                    })
                } else {
                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

                        row1.style.left = `-0vw`
                    })
                }
            } else {
                console.log(iG)

                if (iG <= 11) {
                    iG++
                    let calcT = iG * 60.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        if (iG === 0) {
                            row1.style.left = `-0vw`
                            return
                        }
                        row1.style.left = `-${calcT}vw`




                    })
                }
            }
            console.log(iG)

        })
    })
}
if (window.innerWidth < 500 && window.innerWidth > 450) {
    btns.forEach(cur => {
        cur.addEventListener('click', (e) => {
            if (e.target.id === 'prev_crousel') {
                iG--
                if (iG !== 0) {
                    let calcT = iG * 58.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`
                        if (iG < 0) { iG = 0 }


                    })
                } else {
                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

                        row1.style.left = `-0vw`
                    })
                }
            } else {
                console.log(iG)

                if (iG <= 11) {
                    iG++
                    let calcT = iG * 58.5

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        if (iG === 0) {
                            row1.style.left = `-0vw`
                            return
                        }
                        row1.style.left = `-${calcT}vw`




                    })
                }
            }
            console.log(iG)

        })
    })
}
if (window.innerWidth > 800) {
    btns.forEach(cur => {
        cur.addEventListener('click', (e) => {
            if (e.target.id === 'prev_crousel') {
                iG--
                document.querySelector('#forw').style['pointer-events'] = 'auto'
                document.querySelector('#forw').style.opacity = '1'

                if (iG !== 0) {
                    let calcT = iG * 88

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`
                        if (iG < 0) { iG = 0 }


                    })
                } else {
                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

                        document.querySelector('#prev_crousel').style['pointer-events'] = 'none'
                        document.querySelector('#prev_crousel').style.opacity = '.5'
                        row1.style.left = `-0vw`
                    })
                }
            } else {
                console.log(iG)
                if (iG === 1) {
                    document.querySelector('#forw').style['pointer-events'] = 'none'
                    document.querySelector('#forw').style.opacity = '.5'

                }

                document.querySelector('#prev_crousel').style['pointer-events'] = 'auto'
                document.querySelector('#prev_crousel').style.opacity = '1'
                if (iG <= 1) {
                    iG++
                    let calcT = iG * 88

                    document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
                        row1.style.left = `-${calcT}vw`

                        if (iG === 0) { row1.style.left = `-0vw` }



                    })
                }
            }
            console.log(iG)

        })
    })
}
let numenator1 = 0
let denomenator1 = 0
if (window.location.pathname === '/product') {
    let locOr = localStorage.getItem('orders')
    if (locOr !== null) {
        document.querySelector('.relative_width1').style['pointer-events'] = 'none'
    } else {
        document.querySelector('.relative_width1').style['pointer-events'] = 'auto '

    }

    addCqa()

    let stkUrl = window.location.search.split('?')[1].split('=')[3].split('&')[0]
    stkUrl = parseFloat(stkUrl)
    if (stkUrl === 0) {

        if (window.innerWidth < 1200) {
            let floatX = -(window.innerWidth + 100)

            $('.ct_error_stock.for_items').animate({ left: floatX })

        } else {
            $('.ct_error_stock.for_items').css('display', 'none')
        }
        let token1 = window.location.search.split('?')[1].split('=')[1].split('&')[0]

        let jwt1 = parseJwt(token1)
        // remove the item 
        let allItm = JSON.parse(localStorage.getItem('foodsAdded'))
        if (allItm !== null) {
            if (allItm.length !== 0) {
                allItm.forEach((cur, i) => {
                    let nameF = cur.data.item.name.split(' ').join('').toLowerCase().trim()
                    console.log(nameF, jwt1.item.name.split(' ').join('').toLowerCase().trim(), 'ama')
                    if (nameF === jwt1.item.name.split(' ').join('').toLowerCase().trim()) {
                        allItm.splice(i, 1)
                        document.querySelectorAll('.select').forEach(cur1 => {
                            cur1.style.opacity = .4
                            cur1.style['pointer-events'] = 'none'
                        })
                        document.querySelector('.relative_width1').style['pointer-events'] = 'none'
                        localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                        document.querySelector('.bx_buy_now span').style.display = 'block'
                        document.querySelector('.bx_buy_now p').innerText = 'Add to cart'
                        document.querySelector('.bx_buy_now').style.paddingLeft = '18px'

                        document.querySelector('.bx_buy_now').classList.add('added_to_cart')
                        document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'block'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt p').innerText = 'Add to cart'
                        document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.add('added_to_cart')
                    }

                })
            } else {
                document.querySelector('.bx_buy_now span').style.display = 'block'
                document.querySelector('.bx_buy_now p').innerText = 'Add to cart'
                document.querySelector('.bx_buy_now').style.paddingLeft = '18px'
                document.querySelector('.bx_buy_now').classList.remove('added_to_cart')
                document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'block'
                document.querySelector('.bx_add_t_cart_btn_itm_dt p').innerText = 'Add to cart'
                document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.remove('added_to_cart')
            }
        } else {
            document.querySelector('.bx_buy_now span').style.display = 'block'
            document.querySelector('.bx_buy_now p').innerText = 'Add to cart'
            document.querySelector('.bx_buy_now').classList.add('added_to_cart')
            document.querySelector('.bx_buy_now').style.paddingLeft = '18px'

            document.querySelector('.bx_add_t_cart_btn_itm_dt span').style.display = 'block'
            document.querySelector('.bx_add_t_cart_btn_itm_dt p').innerText = 'Add to cart'
            document.querySelector('.bx_add_t_cart_btn_itm_dt').classList.remove('added_to_cart')
        }
    }

    // style the input and add btn

    let id = window.location.search.split('?')[1].split('=')[4]
    let allR = 0
    const clacRate = async () => {
        let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]

        let jwt = parseJwt(token)
        document.querySelector('.loading_rate_bx').style.display = 'block'

        let name = jwt.item.name.split(' ').join('').toLowerCase().trim()
        console.log(name)
        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${id}`)
        let res = await dbCollection.get()
        document.querySelector('.loading_rate_bx').style.display = 'none'

        document.querySelector('.ct_bx_form_rating').style.opacity = 1
        res.docs.forEach(cur => {
            let item = cur.data().item
            if (token === item.id) {
                item.ratings.forEach(cur1 => {
                    r = cur1.ratings
                    r = parseFloat(r)

                    allR += r
                })
                let numenator = 0
                let denomenator = 0
                item.ratings.forEach(cur1 => {
                    numenator += cur1.star * cur1.ratings
                    denomenator += cur1.ratings
                })

                let ratedFront = parseFloat((numenator / denomenator).toFixed(2).split('.')[0])

                let ratedBack = parseFloat((numenator / denomenator).toFixed(2).split('.')[1].split('')[0])
                let html1

                if (ratedFront === 5) {

                    html1 = `       <span>
                <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
        
            <span>
                <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
        
            <span>
                <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
        
        
            <span>
                <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>
        
            <span>
                <ion-icon class="filed_rating_itm" name="star"></ion-icon>
            </span>`

                } else {
                    if (ratedFront === 4) {

                        if (ratedBack > 1) {
                            html1 = `       <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        
        <span>
        <ion-icon class="filed_rating_itm" name="star"></ion-icon>
        </span>
        
        <span>
        <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
        </span>`
                        } else {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`

                        }
                    } else if (ratedFront === 3) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        } else {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        }
                    } else if (ratedFront === 2) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        } else {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        }
                    } else if (ratedFront === 1) {
                        if (ratedBack > 1) {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        } else {
                            html1 = `       <span>
                    <ion-icon class="filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>
                    </span>
                    
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>
                    
                    <span>
                    <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>
                    </span>`
                        }
                    }
                }
                document.querySelector('.ct_bx_ratings_info a').innerHTML = html1

                let star5 = parseFloat(item.ratings[0].ratings)
                let star4 = parseFloat(item.ratings[1].ratings)

                let star3 = parseFloat(item.ratings[2].ratings)

                let star2 = parseFloat(item.ratings[3].ratings)

                let star1 = parseFloat(item.ratings[4].ratings)

                if (star5 !== 0) {
                    let rate5 = Math.round((star5 / allR) * 100)
                    document.querySelector('.star5th .ct_level').style.width = `${rate5}%`
                    document.querySelector('.star5th .bx_star_dis span').innerText = `${rate5}%`

                } else {
                    document.querySelector('.star5th .ct_level').style.width = `0%`
                    document.querySelector('.star5th span').innerHTML = `&mdash;`
                }
                if (star4 !== 0) {
                    let rate5 = Math.round((star4 / allR) * 100)
                    document.querySelector('.star4th .ct_level').style.width = `${rate5}%`
                    document.querySelector('.star4th  span').innerText = `${rate5}%`
                } else {
                    document.querySelector('.star4th .ct_level').style.width = `0%`
                    document.querySelector('.star4th  span').innerHTML = `&mdash;`
                }
                if (star3 !== 0) {
                    let rate5 = Math.round((star3 / allR) * 100)
                    document.querySelector('.star3th .ct_level').style.width = `${rate5}%`
                    document.querySelector('.star3th  span').innerText = `${rate5}%`
                } else {
                    document.querySelector('.star3th .ct_level').style.width = `0%`
                    document.querySelector('.star3th  span').innerHTML = `&mdash;`
                }
                if (star2 !== 0) {
                    let rate5 = Math.round((star2 / allR) * 100)
                    document.querySelector('.star2th .ct_level').style.width = `${rate5}%`
                    document.querySelector('.star2th  span').innerText = `${rate5}%`
                } else {
                    document.querySelector('.star2th .ct_level').style.width = `0%`
                    document.querySelector('.star2th  span').innerHTML = `&mdash;`
                }
                if (star1 !== 0) {
                    let rate5 = Math.round((star1 / allR) * 100)
                    document.querySelector('.star1th .ct_level').style.width = `${rate5}%`
                    document.querySelector('.star1th  span').innerText = `${rate5}%`
                } else {
                    document.querySelector('.star1th .ct_level').style.width = `0%`
                    document.querySelector('.star1th  span').innerHTML = `&mdash;`
                }
            }

        })

    }
    clacRate()
    let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]

    let jwt = parseJwt(token)
    console.log(jwt.item)

    let name = jwt.item.name.split(' ').join('').toLowerCase()
    locItm2.push(name)
    addReccom(locItm2, '.ct_slider_inner', 'fd', 1)
    let token11 = window.location.search.split('?')[1].split('=')[1].split('&')[0]

    let jwt11 = parseJwt(token11)
    let allItm = JSON.parse(localStorage.getItem('foodsAdded'))


}

if (document.querySelector('.body_cart') !== null) {

    document.querySelector('html').addEventListener('click', e => {
        let remBtn = e.target.closest('.itm_cart_nav')
        if (remBtn !== null) {
            let p = document.querySelector('.active_gp_bx').innerText
            if (p === `Erak's food`) {
                let li = document.querySelectorAll('.bx_evt_cart_item li')
                li.forEach(cur => {
                    cur.remove()
                })
                document.querySelector('.for_ek_food_cart').style.display = 'block'
                document.querySelector('.ct_bx_grocery_required').style.display = 'none'

                localStorage.setItem('foodsAdded', JSON.stringify([]))
                if (document.querySelectorAll('.only_for_grocery_item li').length === 0) {
                    document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                    document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'

                    document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
                }

                addBill()

            } else {
                let li = document.querySelectorAll('.only_for_grocery_item li')
                li.forEach(cur => {
                    cur.remove()
                })


                document.querySelector('.for_ek_groc_cart').style.display = 'block'

                localStorage.setItem('grocFoodListCart', JSON.stringify([]))
                addBill()
                if (document.querySelectorAll('.bx_evt_cart_item li').length === 0) {
                    document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                    document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'

                    document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
                }
            }
        }
    })
    document.querySelector('.check_bx_if_view').addEventListener('click', e => {
        let inp1 = document.querySelector('#viewd_groc').checked
        if (inp1) {
            document.querySelector('.ct_bxc_hide_checkout').style.display = 'none'

        } else {
            document.querySelector('.ct_bxc_hide_checkout').style.display = 'block'

        }
    })

    // let f = false
    document.querySelector('.ct_bxc_hide_checkout').addEventListener('click', e => {





    })
    document.querySelector('.for_conf_order').addEventListener('click', () => {
        const confOrderFinal = async () => {
            let dbCollection = db.collection("users")
            let res = await dbCollection.get()
            document.querySelector('.for_acc_ov').style.display = 'none'

            res.docs.forEach(cur => {
                let user = getCookie('user')
                user = JSON.parse(user)
                let item = cur.data().data
                let cartGroc = cur.data().cartGroc
                let cartItem = cur.data().cartItem
                let likes = cur.data().likes
                let authUser = cur.data().authUser
                let dislikes = cur.data().dislikes
                let rtr = cur.data().myratings
                let Uid = document.querySelector('.for_cart_cancel').id

                let data = cur.data().myOrders
                if (cur.authUser === user.authUser) {

                    for (let i = 0; i < data.length; i++) {
                        let cur1 = data[i]
                        cur1.confirmed = true
                        console.log(cur1.id, Uid)
                        if (cur1.id === Uid) {
                            data.splice(i, 1, cur1)
                            console.log(data)
                            dbCollection.doc(cur.id).set({
                                authUser: authUser,
                                rootAutyh: cur.data().rootAutyh,
                                cartGroc: cartGroc,
                                cartItem: cartItem,
                                data: item,
                                myOrders: data,
                                likes: likes,
                                dislikes: dislikes,
                                myratings: rtr,

                            })
                            break
                        }
                    }
                }

            })

        }
        document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

        document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'

        document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
        document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
        // document.querySelector('.ct_verif_bx').style.display = 'none'
        document.querySelector('.for_ek_food_cart').style.display = 'block'
        localStorage.removeItem('orders')

        document.querySelector('.ct_bx_grocery_required').style.display = 'none'

        document.querySelector('.for_ek_groc_cart').style.display = 'block'



        document.querySelector('.for_checkout_order').style.display = 'flex'

        document.querySelector('.for_checkout_order').style.opacity = .5
        document.querySelector('.for_checkout_order').style['pointer-events'] = 'none'

        document.querySelector('.ct_bx_info_confirm').style.display = 'none'
        document.querySelector('.for_conf_order').style.display = 'none'

        document.querySelector('.for_cart_cancel').style.display = 'none'
        localStorage.setItem('foodsAdded', JSON.stringify([]))
        localStorage.setItem('grocFoodListCart', JSON.stringify([]))
        document.querySelectorAll('.main_li_cart_fd_lis').forEach(cur => {
            cur.remove()
        })

        document.querySelector('.for_ek_food_cart').style.display = 'block'
        confOrderFinal()

    })
    let order = JSON.parse(localStorage.getItem('orders'))
    if (order !== null) {

        document.querySelector('.ct_bxc_hide_checkout').style.display = 'none'

        document.querySelector('.for_cart_cancel').setAttribute('id', order.id)
        document.querySelector('.for_checkout_order').style.display = 'none'

        document.querySelector('.ct_bx_info_confirm').style.display = 'flex'
        document.querySelector('.for_conf_order').style.display = 'block'

        document.querySelector('.for_cart_cancel').style.display = 'flex'
    }
    let allfd = JSON.parse(localStorage.getItem('foodsAdded'))

    if (allfd !== null) {

        document.querySelector('.bx_evt_cart_item .loader_cart').style.display = 'none'
    }

    let user = getCookie('user')
    if (user !== '') {
        user = JSON.parse(user)
    } else {
        user = ''

    }
    addReccom(locItm, '.ct_slider_inner', 'cart', 1)

    let allReadyAddedC = []
    let arrL = []

    if (user !== '') {
        let allgroc = JSON.parse(localStorage.getItem('grocFoodListCart'))

        addBill()
        let a = []
        let allReadyAddedC = []
        if (allfd !== null && user !== '') {

            if (allfd.length === 0) {
                document.querySelector('.for_ek_food_cart').style.display = 'block'
            } else {
                document.querySelector('.for_ek_food_cart').style.display = 'none'

            }




            allfd.forEach(elem => {
                if (allReadyAddedC.length !== 0) {
                    a.push({ l: elem.id, qt: elem.qt })
                    a.forEach((cur, i) => {
                        if (!allReadyAddedC.includes(cur.l)) {

                            let v = cur.l + '+' + cur.qt
                            arrL.push(v)
                            allReadyAddedC.push(cur.l)

                        }

                    })
                    allReadyAddedC.push(elem.id)

                    document.querySelector(".check_out_btn_order").setAttribute("href", `?item=${JSON.stringify(arrL)}`);



                } else {

                    a.push({ l: elem.id, qt: elem.qt })
                    console.log(a)

                    a.forEach((cur, i) => {
                        if (!allReadyAddedC.includes(cur.l)) {

                            let v = cur.l + '+' + cur.qt
                            arrL.push(v)
                            allReadyAddedC.push(cur.l)

                        }

                    })
                    document.querySelector(".check_out_btn_order").setAttribute("href", `?item=${JSON.stringify(arrL)}`);
                }
                if (allfd.length !== 0) {
                    price = parseFloat(elem.data.item.price.split('₹')[1].split(' ').join(''))



                    // qtarr.push(elem.qtfd)
                    addToCart(elem, '.bx_evt_cart_item', price)

                    //   document.querySelector('.for_cart_qt div').style.display='none'
                }
            })


        } else {
            document.querySelector('.for_ek_food_cart').style.display = 'block'
            document.querySelector('.ct_bx_grocery_required').style.display = 'none'


        }
        if (allfd.length === 0) {
            if (allgroc.length !== 0) {
                if (allgroc === null) {
                    document.querySelector('.for_groc_cart_load').style.display = 'none'
                    document.querySelector('.for_ek_groc_cart').style.display = 'block'

                    document.querySelector('.for_cart_checkout').style['pointer-events'] = 'none';
                    // document.querySelector('.ct_verif_bx').style.display = 'none'
                    if (document.querySelectorAll('.only_for_grocery_item li').length === 0) {

                        document.querySelector('.for_ek_food_cart').style.display = 'block'
                    }
                    document.querySelector('.for_ekfd_btn').classList.remove('active_gp_bx')

                    document.querySelector('.for_ekfd_btn').classList.add('unactive_gp_bx')
                    document.querySelector('.for_req_groc_btn').classList.remove('unactive_gp_bx')

                    document.querySelector('.for_req_groc_btn').classList.add('active_gp_bx')
                    document.querySelector('.only_for_grocery_item').style.display = 'block'
                    document.querySelector('.bx_evt_cart_item').style.display = 'none'
                    document.querySelector('.for_ek_fd_cart_load').style.display = 'none'
                } else {
                    document.querySelector('.for_groc_cart_load').style.display = 'block'

                    if (document.querySelectorAll('.only_for_grocery_item li').length === 0) {

                        document.querySelector('.for_ek_food_cart').style.display = 'block'
                    }
                    document.querySelector('.for_ekfd_btn').classList.remove('active_gp_bx')

                    document.querySelector('.for_ekfd_btn').classList.add('unactive_gp_bx')
                    document.querySelector('.for_req_groc_btn').classList.remove('unactive_gp_bx')

                    document.querySelector('.for_req_groc_btn').classList.add('active_gp_bx')
                    document.querySelector('.only_for_grocery_item').style.display = 'block'
                    document.querySelector('.bx_evt_cart_item').style.display = 'none'
                    document.querySelector('.for_ek_fd_cart_load').style.display = 'none'
                }



            } else {
                document.querySelector('.for_groc_cart_load').style.display = 'block'

                if (document.querySelectorAll('.only_for_grocery_item li').length === 0) {

                    document.querySelector('.for_ek_food_cart').style.display = 'block'
                }
                document.querySelector('.for_ekfd_btn').classList.remove('active_gp_bx')

                document.querySelector('.for_ekfd_btn').classList.add('unactive_gp_bx')
                document.querySelector('.for_req_groc_btn').classList.remove('unactive_gp_bx')

                document.querySelector('.for_req_groc_btn').classList.add('active_gp_bx')
                document.querySelector('.only_for_grocery_item').style.display = 'block'
                document.querySelector('.bx_evt_cart_item').style.display = 'none'
                document.querySelector('.for_ek_fd_cart_load').style.display = 'none'



            }


        } else if (allfd !== null && allgroc !== null || allgroc === null) {

            if (allgroc.length === 0) {
                document.querySelector('.for_groc_cart_load').style.display = 'none'

                document.querySelector('.bx_evt_cart_item .loader_cart').style.display = 'block'

                if (document.querySelectorAll('.bx_evt_cart_item li').length === 0) {

                    document.querySelector('.for_ek_groc_cart').style.display = 'block'
                }
                document.querySelector('.for_req_groc_btn').classList.remove('active_gp_bx')

                document.querySelector('.for_req_groc_btn').classList.add('unactive_gp_bx')
                document.querySelector('.for_ekfd_btn').classList.remove('unactive_gp_bx')

                document.querySelector('.for_ekfd_btn').classList.add('active_gp_bx')
                document.querySelector('.bx_evt_cart_item').style.display = 'block'
                document.querySelector('.only_for_grocery_item').style.display = 'none'
            }
        }
        if (allgroc !== null && allfd !== null) {

            if (allgroc.length !== 0 && allfd.length !== 0) {
                document.querySelector('.for_ek_groc_cart').style.display = 'none'
                document.querySelector('.for_ek_food_cart').style.display = 'none'
                document.querySelector('.for_groc_cart_load').style.display = 'block'
                document.querySelector('.for_ek_fd_cart_load').style.display = 'block'
                document.querySelector('.ct_bx_grocery_required').style.display = 'block'

            } else {
                document.querySelector('.ct_bx_grocery_required').style.display = 'none'

            }
        }
        if (allfd !== null) {
            if (allfd.length !== 0) {

                document.querySelector('.ct_bx_grocery_required').style.display = 'block'
            } else {
                document.querySelector('.ct_bx_grocery_required').style.display = 'none'

            }
        }
        if (allgroc !== null && user !== '') {
            if (allgroc.length === 0) {
                document.querySelector('.for_ek_groc_cart').style.display = 'block'
                document.querySelector('.for_groc_cart_load').style.display = 'none'

            } else {
                document.querySelector('.for_ek_groc_cart').style.display = 'none'

            }

            let a = []
            allgroc.forEach(elem => {

                if (allReadyAddedC.length !== 0) {

                    a.push({ l: elem.id, qt: elem.qt })
                    console.log(elem)
                    a.forEach((cur, i) => {
                        if (!allReadyAddedC.includes(cur.l)) {
                            allReadyAddedC.push(cur.l)

                            let v = cur.l + '+' + cur.qt + '+' + elem.selectedUnit + '+' + elem.selectedPrice
                            console.log(v)

                            arrL.push(v)


                        }

                    })


                } else {

                    a.push({ l: elem.id, qt: elem.qt })

                    a.forEach((cur, i) => {
                        if (!allReadyAddedC.includes(cur.l)) {
                            allReadyAddedC.push(cur.l)

                            let v = cur.l + '+' + cur.qt + '+' + elem.selectedUnit + '+' + elem.selectedPrice
                            console.log(v)

                            arrL.push(v)


                        }

                    })
                }
                console.log(arrL)
                document.querySelector(".check_out_btn_order").setAttribute("href", `?item=${JSON.stringify(arrL)}`);

                addGrocCart(elem, '.only_for_grocery_item')

            })
        }




    }

}

let welTxt = document.querySelector('.ct_x_welcome_inner p')
let user = getCookie('user')
if (welTxt !== null) {
    let parsedData = JSON.parse(user)

    welTxt.innerText = parsedData.n + " " + parsedData.ln

}
let dS = document.querySelector('.acc_set_main_nav a')
if (user !== '' && dS !== null) {
    let parsedData = JSON.parse(user)

    dS.setAttribute('href', `/account?user=${parsedData.authUser}`)

}
if (user !== '') {
    let parsedData = JSON.parse(user)
    if (document.querySelector('.ct_bx_matched_itm') !== null) {
    }

    if (document.querySelector('.ct_acc_dt_ov h3') !== null) {
        if (window.innerWidth <= 1000) {
            if (document.querySelector('.ct_bx_slide_bx .ct_acc_dt_ov') !== null) {

                document.querySelectorAll('.ct_bx_slide_bx .ct_acc_dt_ov p').forEach(cur => {
                    console.log(cur)
                    cur.innerText = 'Hello ,' + parsedData.n.split(' ').join('')
                })
                let dS = document.querySelectorAll('.ct_bx_slide_bx .ct_acc_dt_ov  a')
                if (user !== '' && dS !== null) {
                    dS.forEach(cur => {
                        cur.setAttribute('href', `/account?user=${parsedData.authUser}`)
                    })

                }
            }
        }
        if (window.innerWidth < 800) {
            document.querySelector('.ct_acc_dt_ov p').innerText = parsedData.n.split(' ').join('')

        }
        if (window.innerWidth <= 500) {
            document.querySelector('.acc_set_main_nav').style.display = 'none'

        }
        if (window.innerWidth > 1000) {
            document.querySelector('.acc_set_main_nav').style.display = 'flex'
            document.querySelector('.acc_set_main_nav h3').innerText = parsedData.n.split(' ').join('')

        }

        document.querySelectorAll('.display_on_no_acc').forEach(cur => cur.style.display = 'none')
    }
    if (document.querySelector('.ct_acount_details_cart') !== null) {
        document.querySelector('.ct_acount_details_cart').style.display = 'none'
        document.querySelector('.ct_full_cart_fd_ov').style.display = 'block'

    }




} else {
    document.querySelectorAll('.log_in_btn_pk ').forEach(cur => {
        cur.style.margin = '20px 1px 0 10px'
    })
    document.querySelector('.for_nonfix_search .search-icon').style.fontSize = '26px'
    document.querySelector('.for_nonfix_search .search-icon').style.marginTop = '7px'
    document.querySelector('.for_nonfix_search, .for_fixed_search').style.width = '140%'
    document.querySelectorAll('.super_groc  ').forEach(cur => {
        cur.style.margin = '10px 1px 0 10px'
    })
    if (window.innerWidth <= 1000) {
        document.querySelectorAll('.log_in_btn_pk ').forEach(cur => {
            cur.style.margin = '10px 20px 0 10px'
        })
        document.querySelectorAll('.super_groc  ').forEach(cur => {
            cur.style.margin = '10px 1px 0 10px'
        })
    }

    if (window.innerWidth <= 1000) {
        document.querySelectorAll('.display_on_no_acc').forEach(cur => cur.style.display = 'none')

        if (document.querySelector('.ct_bx_slide_bx .ct_acc_dt_ov') !== null) {
            document.querySelector('.ct_bx_slide_bx .ct_acc_dt_ov p').innerText = 'Hello ,Sign in'
            document.querySelector('.ct_bx_slide_bx  a').setAttribute('href', '/login')
        }



    }
    if (document.querySelector('.for_nonfix_search input, .for_fixed_search input') !== null) {
        document.querySelector('.for_nonfix_search input, .for_fixed_search input').style.width = '123%'
    }
    function myFunction2(x) {
        if (x.matches) {
            if (document.querySelector('.ct_bx_search input') !== null) {
                document.querySelector('.ct_bx_search input').style.width = '130%'

            }
            if (document.querySelector('.ct_bx_matched_itm') !== null) {
                document.querySelector('.ct_bx_matched_itm').style.width = '213%'
            }

        }
    }
    var xa = window.matchMedia("(max-width: 768px)")
    myFunction2(xa)
    xa.addEventListener('change', myFunction2)
    if (document.querySelector('.ct_acount_details_cart') !== null) {





    }
}

function parseJwt(token) {
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

function checkChar(letter, limit = 10) {
    if (letter.length <= 10) {
        return letter
    } else if (letter.length >= 10) {
        letter = letter.split('').slice(0, limit).join('')
        letter = `${letter}..`
        return letter
    }
}


function editUser(data = false, t = false) {
    let user = getCookie('user')
    user = JSON.parse(user)
    let auth = user.rootAutyh
    console.log(auth)

    let alreadyPass = false
    let n
    let ln
    let ad
    let ph
    let m
    let pin
    let pass
    if (data) {
        n = data.n
        ln = data.ln
        ad = data.address
        ph = data.ph
        m = data.mail
        pin = data.pin
        pass = data.pass
    }
    console.log(data)
    var bcrypt = dcodeIO.bcrypt;
    if (n !== '' && ln !== '' && ad !== '' && ph !== '' && m !== '' && pin !== '' && pass !== '') {
        document.querySelector('.ct_bx_overlay_cart').style.display = 'flex'
        let hash1 = bcrypt.hashSync(pass.trim(), 4);
        console.log(hash1)
        const upadteUser = async () => {
            let dbColl = await db.collection('users').get()
            let dbColl1 = await db.collection('locations').get()
            dbColl1.docs.forEach(cur1 => {
                if (cur1.data().pin === pin) {
                    let itm
                    let id
                    dbColl.docs.forEach(cur => {
                        let hash = bcrypt.compareSync(pass, cur.data().data[3]);
                        if (hash) {
                            alreadyPass = true
                        }
                        console.log(cur.data().rootAutyh, auth)
                        if (cur.data().rootAutyh === auth) {
                            id = cur.id
                            itm = cur.data()
                        }
                    })
                    if (alreadyPass) {

                        document.querySelector('.succ_otp').style.display = 'none'
                        document.querySelector('.ct_bx_overlay_cart').style.display = 'none'

                        document.querySelector('.err_otp').style.display = 'flex'
                    } else {
                        document.querySelector('.ct_bx_overlay_cart').style.display = 'none'
                        let search = window.location.search.split('?')[1].split('=')[1]
                        let jwt = parseJwt(search)
                        document.querySelector('.ct_bx_peoples_details').style.display = 'none'
                        let ph1 = jwt.updated.ph[0]
                        let ph2 = jwt.updated.ph[1]
                        let ph3 = jwt.updated.ph[2]
                        let ph4 = jwt.updated.ph[8]
                        let ph5 = jwt.updated.ph[9]

                        document.querySelector('.ct_bx_verify p strong').innerText = `+91 ${ph1}${ph2}${ph3}zxzyx${ph4}${ph5}`
                        document.querySelector('.ct_edit_cc').style.display = 'block'
                        document.querySelector('.ct_acc').style.display = 'block'

                        document.querySelector('.ct_create_acc .ct_bx_verify').style.display = 'block'

                        document.querySelector('.ct_show_acc_dt').style.display = 'none'
                    }
                    if (t) {

                        let authUser = window.location.search.split('?')[1].split('=')[1]

                        let authUser2 = itm.rootAutyh

                        let cartGroc = itm.cartGroc

                        let cartItem = itm.cartItem

                        let myOrders = itm.myOrders

                        let likes = itm.likes

                        let dislikes = itm.dislikes

                        let rtr = itm.myratings
                        db.collection('users').doc(id).set({
                            rootAutyh: authUser2,

                            authUser: authUser,
                            cartGroc: cartGroc,
                            cartItem: cartItem,
                            data: [n, ln, ad, hash1, m, ph, pin],
                            myOrders: myOrders,
                            likes: likes,
                            dislikes: dislikes,
                            myratings: rtr,

                        }).then(() => {
                            let user = getCookie('user')
                            user = JSON.parse(user)
                            let obj = {
                                n: n,
                                ln: ln,
                                pass: hash1,
                                pin: pin,
                                service: ph,
                                ct: m,
                                rootAutyh: authUser2,

                                authUser: authUser,
                                ad: ad
                            }
                            console.log(obj)
                            // return
                            obj = JSON.stringify(obj)
                            document.cookie = `username=11;expires=18 Dec 9999 12:00:00 UTC;;path=/'`
                            // console.log(JSON.parse(getCookie('username')))

                            document.cookie = `username=1221;expires=18 Dec 9999 12:00:00 UTC;;path=/'`

                            document.cookie = "user" + "=" + obj + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/"
                            window.location.replace(`/account?user=${authUser}&upadted=true#Account`)
                            console.log(JSON.parse(getCookie('user')))
                            document.querySelector('.ct_edit_cc').style.display = 'none'
                            document.querySelector('.ct_bx_overlay_cart').style.display = 'none'

                            document.querySelector('.err_otp').style.display = 'none'
                            document.querySelector('.ct_bx_peoples_details').style.display = 'block'
                            document.querySelector('.err_otp').style.display = 'none'

                            document.querySelector('.succ_otp').style.display = 'flex'
                        })

                    }
                } else {
                    document.querySelector('.ct_bx_overlay_cart').style.display = 'none'

                    document.querySelector('.succ_otp').style.display = 'none'

                    document.querySelector('.err_otp h2').innerText = `Sorry we donot deliver to your provided PIN code location.`
                    document.querySelector('.err_otp').style.display = 'flex'
                }
            })
        }
        upadteUser()
    }


}

if (document.querySelector('.for_acc_dt') !== null) {
    let search = window.location.search.split('?')[1].split('=')[1]
    // let
    let jwt = parseJwt(search)
    console.log(jwt)
    window.location.search.split('?')[1]
    if (window.location.href.split('&')[1]
        === "upadted=true#Account") {
        if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            window.history.back()

        }
        document.querySelector('.succ_otp').style.display = 'flex'

    }

    if (window.location.pathname === '/account/editAccount') {

        if (jwt.updated !== undefined) {
            let upadtedDt = jwt.updated
            editUser(upadtedDt, false)


            document.querySelector('.account_cont11').addEventListener('click', () => {
                let inpVal = document.querySelector('.ct_bx_verif2 input').value

                inpVal = parseFloat(inpVal)
                jwt.id = parseFloat(jwt.id)
                console.log(jwt.id, inpVal)
                if (jwt.id === inpVal) {
                    editUser(upadtedDt, true)

                } else {
                    document.querySelector('.err_otp p').innerText = `Provided OTP  doesnot matched.Please try again.`
                    document.querySelector('.err_otp').style.display = 'flex'
                    document.querySelector('.succ_otp').style.display = 'none'

                }
            })

        }
    }
}
