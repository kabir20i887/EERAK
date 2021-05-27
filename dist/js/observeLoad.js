// let obj = [{
//     com: 'tata sampanna',
//     fdInside: null,
//     group: "veg",
//     img: "../img/turmeric.png",
//     name: "Turmeric powder",
//     offer: 12,
//     price: "55",
//     stock: "8",
//     unit: "200g",
//     unitInside: null,
// }, {
//     com: null,
//     fdInside: null,
//     group: "veg",
//     img: "../img/ghee.jpg",
//     name: "ghee",
//     offer: 12,
//     price: "165",
//     stock: "8",
//     unit: "500g",
//     unitInside: null,
// }, {
//     com: null,
//     fdInside: null,
//     group: "veg",
//     img: "../img/cabbage.jpg",
//     name: "cabbage",
//     offer: 12,
//     price: "265",
//     stock: "8",
//     unit: "500g",
//     unitInside: null,
// }]

// let bx = [
  
//     {
//         cook: '../img/butterChicken.jpg',
//         type: "non-veg",
//         time:'45 min',
//         img: "../img/chilliChick.jpg",
//         name: "Chilli Chicken ",
//         offer: 12,
//         id:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImltZyI6Ii4uL2ltZy9iaXJ5YW5pX2ltZy5wbmciLCJuYW1lIjoiQWxvbyBQYXJhdGhhMiIsInJhdGUiOjQuNCwicHJpY2UiOiI3OSIsImNvb2siOiIuLi9pbWcvYmlyeWFuaV9pbWcucG5nIiwidHlwZSI6InZlZyIsIm9mZmVyIjoiMTQiLCJmZEluc2lkZSI6WyJtYXJpbmF0ZWQgY2hpa2VuIiwiZ3JhdnkiLCJ1c2VyIG1hbnVhbCJdLCJyZXZpZXciOltdLCJyYXRpbmdzIjpbeyJzdGFyIjo1LCJyYXRpbmdzIjoxOX0seyJzdGFyIjo0LCJyYXRpbmdzIjoxN30seyJzdGFyIjozLCJyYXRpbmdzIjo4fSx7InN0YXIiOjIsInJhdGluZ3MiOjV9LHsic3RhciI6NCwicmF0aW5ncyI6M31dfSwiaWF0IjoxNjE3NzI4MjEzfQ.vBof3vJHnY-a9KiD7Jx5iAyu1qGLOL9dYQBaAYBlGCo`,
//         ratings:[{star:5,ratings:10},{star:4,ratings:5},{star:3,ratings:2},{star:2,ratings:1},{star:1,ratings:0}],
//         review:[],
//         price: "179",
//         stock: "12",
//       fdInside:null,
//         unit: null,
//     },
// ]
// bx.forEach(item=>{
//     db.collection("foods/sYNT0aiTqEnZ0I7IVmd7/group2").add({
// cqa:[{answer:'yes',questions:'can i add jeera powder ?',by:'ERAK on 14th may 2021'}],
//         item
//     })
//     .then((docRef) => {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch((error) => {
//         console.error("Error adding document: ", error);
//     });
// })



let notS = null
let addedSelected
let fdItm
let addGroup = 0
window.onload = () => {
    const searchDb = async (name, id, typ) => {
        document.querySelectorAll('.ct_bx_search input').forEach(cur => cur.value = name)
        if (typ === 'groc') {
            let dbCollection1 = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${id}`)
            let resp = await dbCollection1.get()
            resp.docs.forEach(async el => {

                let item = el.data().item
                let fdN = item.name.split(' ').join('').toLowerCase()
                if (fdN === name.split(' ').join('').toLowerCase()) {
                    console.log(item)
                    let name = item.name
                    let price = item.price
                    let unit = item.unit
                    let com = item.com
                    price = parseFloat(price)
                    let includes = item.unitInside
                    let offer = item.offer
                    if (offer !== null) {
                        offer = parseFloat(offer.split('%')[0])

                    }

                    let img = item.img
                    let stock = item.stock
                    let id = item.id
                    let group = item.group
                    notS = true
                    let res = await db.collection("grocery").get()
                    document.querySelectorAll('.evt_list_food_cat a').forEach(cur => {
                        cur.remove()
                    })
                    res.docs.forEach(itm => {
                        console.log(itm.data())
                        itm.data().name.forEach(cur => {
                            groupedItm.push(cur)

                            if (actCl === null) {
                                actCl = true
                                html = `                        <a class="active_a_cat_ck_fd loaded" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
                `
                            } else {
                                html = `                        <a class="not_active_a_cat" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
                `
                            }
                            document.querySelector('.ct_loading_bx_categories').style.display = 'none'
                            document.querySelector('.evt_list_food_cat').insertAdjacentHTML('beforeend', html)


                        })

                    })
                    let allGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                    if (allGroc.length !== 0) {
                        for (let i = 0; i < allGroc.length; i++) {
                            let cur1 = allGroc[i]
                            if (cur1.id === id) {
                                let prM = price - (price * offer / 100)
                                giveHtmlGroc(true, name, group, price, cur1.qt, prM, includes, unit, com, img, offer, id, stock, cur1.selectedPrice, cur1.selectedUnit, name)
                                break
                            } else {
                                let prM = null
                                giveHtmlGroc(false, name, group, price, cur1.qt, prM, includes, unit, com, img, offer, id, stock, cur1.selectedPrice, cur1.selectedUnit, name)
                                break

                            }
                        }
                    } else {
                        if (offer !== null) {
                            let prM = price - (price * offer / 100)

                            giveHtmlGroc(false, name, group, price, 1, prM, includes, unit, com, img, offer, id, stock, includes[0].selectedPrice, includes[0].selectedUnit, name)
                        } else {
                            let prM = null

                            giveHtmlGroc(false, name, group, price, 1, prM, includes, unit, com, img, offer, id, stock, includes[0].selectedPrice, includes[0].selectedUnit, name)
                        }


                    }

                }
            })
        } else if (typ === 'fd') {
            let dbCollection1 = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${id}`)
            let resp = await dbCollection1.get()
            resp.docs.forEach(async el => {

                let item = el.data().item
                let fdN = item.name.split(' ').join('').toLowerCase()
                if (fdN === name.split(' ').join('').toLowerCase()) {
                    console.log(item)
                    let name = item.name
                    let price = item.price
                    let includes = item.fdInside
                    let offer = item.offer
                    let img = item.img
                    let ratings = item.ratings
                    let cook = item.cook
                    let time = item.time
                    let id = item.id
                    let group = item.type
                    notS = true
                    let res = await db.collection("foods").get()
                    res.docs.forEach(itm => {
                        itm.data().name.forEach(cur => {
                            groupedItm.push(cur)

                            if (actCl === null) {
                                actCl = true
                                html = `                        <a class="active_a_cat_ck_fd" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
                `
                            } else {
                                html = `                        <a class="not_active_a_cat" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
                `
                            }
                            document.querySelector('.ct_loading_bx_categories').style.display = 'none'
                            document.querySelector('.evt_list_food_cat').insertAdjacentHTML('beforeend', html)


                        })

                    })

                    document.querySelectorAll('.list_food_at_ov').forEach(cur1 => {
                        cur1.remove()
                    })
                    giveChtml(false, name, group, price, 1, includes, img, offer, 10, cook, ratings, time, id, name, lenFd)
                }
            })
        } else {


            if (document.querySelector('.bodyessestials') !== null) {
                if (notS === null) {
                    let res = await db.collection("grocery").get()
                    res.docs.forEach(itm => {
                        itm.data().name.forEach(cur => {
                            groupedItm2.push(cur)

                        })
                    })
                    functionAddItm2()

                }
            } else {
                if (notS === null) {
                    let res = await db.collection("foods").get()
                    res.docs.forEach(itm => {
                        itm.data().name.forEach(cur => {
                            groupedItm.push(cur)

                            if (actCl === null) {
                                actCl = true
                                html = `                        <a class="active_a_cat_ck_fd" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
        `
                            } else {
                                html = `                        <a class="not_active_a_cat" href="#${cur.name.split(' ').join('')}">${cur.name} &mdash; (${cur.item} )</a>
        `
                            }
                            if (document.querySelector('.ct_loading_bx_categories') !== null) {
                                document.querySelector('.ct_loading_bx_categories').style.display = 'none'
                                document.querySelector('.evt_list_food_cat').insertAdjacentHTML('beforeend', html)
                            }



                        })

                    })
                    functionAddItm()

                }
            }

        }

    }

    let q
    if (window.location.search !== '') {

        q = window.location.search.split('?')[1].split('=')[1].split('+')

        if (window.location.search.split('?')[1].split('=')[0] !== 'q' || window.location.search === '') {
            searchDb(null, null, '')

        }

        if (window.location.search.split('?')[1].split('=')[0] === 'q') {
            console.log(q.length)
            if (q.length > 3) {
                let name = q[0]
                name = decodeURIComponent(name)
                let com = q[2]
                let id = q[3]

                let typ = q[1]
                console.log(name, id, typ)

                searchDb(name, id, typ)

            } else {
                let name = q[0]
                let id = q[2]
                name = decodeURIComponent(name)
                let typ = q[1]
                searchDb(name, id, typ)

            }
        }
    } else {
        searchDb(null, null, '')

    }



}

let addedGroc2 = -1
const giveHtmlGroc = (added, name, group, price, qt, priceMain, unitIn, unit, com, img, offer, id, stock, sP, sU, forS) => {

    addedGroc2++
    let html5
    stock = parseFloat(stock)

    if (forS) {
        allReady = 0
        fdGroup = forS
    } else {
        fdGroup = fdGroup

    }
    if (added === true) {
        if (forS) {
            allReady = 0
            fdGroup = 'search'
            if (allReady === 0) {

                html5 = `     <div class="list_food_at_ov groc_list" id='${fdGroup, fdGroup.split(' ').join('')
                    }'>
    
    <h3>search result found for " ${forS} "</h3>
    
    
    <div class="ct_cat_by_list">
    
    </div>
    </div>
    
    `
                console.log(html5)
                document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', html5)
            }
        } else {
            if (allReady === 0) {

                let htmlMain = `     <div class="list_food_at_ov  groc_list" id='${fdGroup, fdGroup.split(' ').join('')
                    }'>
    
    <h3>${fdGroup}</h3>
    
    
    <div class="ct_cat_by_list">
    
    </div>
    </div>
    
    `
                document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', htmlMain)
            }
        }


        allReady += 1
        if (offer !== null) {
            if (unitIn !== null) {
                inside = unitIn.map(cur2 => {
                    let html1 = ` <li>
                <p>${cur2.selectedUnit}</p>
                <span>${cur2.selectedPrice}</span>
            </li>`
                    return html1
                })
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                    <div class="ct_offer_box_cook2">
                    <span>${offer}%</span>
                            <p> off</p>
                        </div>
                        <div class="ct_bx_inner_groc_itm">

                <div class="ct_img_res_main">
                    <img class="main_img_groc_itm" src=${img}>

                </div>
                
                <span class='id_groc'>${id}</span>
                <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                <div class="bx_rem_field_qt_num bx_op">
                
                <ion-icon class="remove_field_num" name="remove"></ion-icon>
                </div>
                
                <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                <div class="bx_ad_field_qt_num bx_op">
                <ion-icon class="add_field_num" name="add"></ion-icon>
                
                </div>
                
                </div>
                <div class="ct_bx_inner1_groc_itm">

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
                    <span>${com}</span>
                    <h4>${name}</h4>


                </div>

                <div class="ct_set_qt_for_groc">
                    <div class="field_bx_qt">
                        <p>${sU}</p>
                        <span>${sP}</span>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <ul class="not_tog_dpd">
                        ${inside.join('')}
                    </ul>

                </div>
                

                <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>

                
                <span class="stk_groc">${stock}</span>
                <p class="bx_cat_item">${groping}</p>



</div>
</div>


            </div>`
                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            } else {
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`
                    } else {

                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    }
                }
            }
        } else {
            if (unitIn !== null) {
                inside = unitIn.map(cur2 => {
                    let html1 = ` <li>
                <p>${cur2.selectedUnit}</p>
                <span>${cur2.selectedPrice}</span>
            </li>`
                    return html1
                })
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
               
                        <div class="ct_bx_inner_groc_itm">

                <div class="ct_img_res_main">
                    <img class="main_img_groc_itm" src=${img}>

                </div>
                
                <span class='id_groc'>${id}</span>
                <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                <div class="bx_rem_field_qt_num bx_op">
                
                <ion-icon class="remove_field_num" name="remove"></ion-icon>
                </div>
                
                <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                <div class="bx_ad_field_qt_num bx_op">
                <ion-icon class="add_field_num" name="add"></ion-icon>
                
                </div>
                
                </div>
                <div class="ct_bx_inner1_groc_itm">

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
                    <span>${com}</span>
                    <h4>${name}</h4>


                </div>

                <div class="ct_set_qt_for_groc">
                    <div class="field_bx_qt">
                        <p>${sU}</p>
                        <span>${sP}</span>
                        <div class="ct_bx_drop">
                            <ion-icon name="chevron-down-outline"></ion-icon>
                        </div>
                    </div>
                    <ul class="not_tog_dpd">
                        ${inside.join('')}
                    </ul>

                </div>
                

                <p class="price_food"><span>₹${price} </span></p>

                
                <span class="stk_groc">${stock}</span>
                <p class="bx_cat_item">${groping}</p>



</div>
</div>


            </div>`
                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                  
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                    
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            } else {
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                    
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                   
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                     
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`
                    } else {

                        html = `   <div class="itm_food_list_ek added_itm_ek_fd for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                   
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd tog_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>`

                    }
                }
            }
        }
        document.querySelector(`#${fdGroup.split(' ').join('')} .ct_cat_by_list`).insertAdjacentHTML('beforeend', html)
        document.querySelector('.for_groc_full_load').style.display = 'none'
        let ltEl = document.querySelector(`#${fdGroup.split(' ').join('')} .ct_cat_by_list`).lastChild
        console.log(ltEl.childNodes,'hai2')
        if (ltEl.childNodes[3] !== undefined) {
            Array.from(ltEl.childNodes[3].childNodes).forEach(cur1 => {
                if (cur1.classList !== undefined) {
                    if (cur1.classList.value.split(' ').includes('ct_bx_inner1_groc_itm')) {
                        Array.from(cur1.childNodes).forEach(cur2 => {
                            if (cur2.classList !== undefined) {
                                if (cur2.classList.value.split(' ').includes('ct_set_qt_for_groc')) {
                                    let h = `                    <div class="field_bx_qt">
                                    <p>${sU}</p>
                                    <span>${sP}</span>
                           
                        </div>
                        <div class="ct_bx_drop">
                        <ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon>
                    </div>
                        `

                                    cur2.removeChild(cur2.childNodes[1])
                                    // cur2.
                                    cur2.insertAdjacentHTML('afterbegin', h)
                                }
                            }
                        })
                    }
                }
            })
        }else{
            Array.from(ltEl.childNodes[1].childNodes).forEach(cur1 => {
                if (cur1.classList !== undefined) {
                    if (cur1.classList.value.split(' ').includes('ct_bx_inner1_groc_itm')) {
                        Array.from(cur1.childNodes).forEach(cur2 => {
                            if (cur2.classList !== undefined) {
                                if (cur2.classList.value.split(' ').includes('ct_set_qt_for_groc')) {
                                    let h = `                    <div class="field_bx_qt">
                                    <p>${sU}</p>
                                    <span>${sP}</span>
                           
                        </div>
                        <div class="ct_bx_drop">
                        <ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon>
                    </div>
                        `

                                    cur2.removeChild(cur2.childNodes[1])
                                    // cur2.
                                    cur2.insertAdjacentHTML('afterbegin', h)
                                }
                            }
                        })
                    }
                }
            })  
        }
        if (stock === 0) {
            let curEl = document.querySelectorAll(`#${fdGroup.split(' ').join('')} .ct_cat_by_list .itm_food_list_ek `)[addedGroc2]
            curEl.insertAdjacentHTML('afterbegin', `<div class="ct_bx_not_available">
    <ion-icon name="alert-circle-outline" role="img" class="md hydrated" aria-label="alert circle outline"></ion-icon>
    <p>not available</p>
    </div>`)
            let itmOrders = localStorage.getItem('orders')
            if (itmOrders !== null) {
                document.querySelectorAll('.for_groc_itm').forEach(cur => {
                    cur.style['pointer-events'] = 'none'
                })
            } else {
                document.querySelectorAll('.for_groc_itm').forEach(cur => {
                    cur.style['pointer-events'] = 'auto'
                })

            } curEl.childNodes[0].style.display = 'flex'
            curEl.style[`pointer-events`] = 'none'
            let locGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            if (locGroc !== null) {
                locGroc.forEach((cur1, i) => {
                    let com1 = cur1.com
                    let name1 = cur1.name.split(' ').join('').trim()
                    if (com !== null && com1 !== null) {
                        if (name.split(' ').join('').trim() === name1 && com === com1) {
                            locGroc.splice(i, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(locGroc))
                        }
                    } else {
                        if (name.split(' ').join('').trim() === name1) {
                            locGroc.splice(i, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(locGroc))
                        }
                    }
                })
            }
        }
    } else {
        let htmlMain
        if (forS) {
            allReady = 0
            fdGroup = 'search'
            if (allReady === 0) {

                htmlMain = `     <div class="list_food_at_ov groc_list" id='${fdGroup, fdGroup.split(' ').join('')
                    }'>
    
    <h3>search result found for " ${forS} "</h3>
    
    
    <div class="ct_cat_by_list">
    
    </div>
    </div>
    
    `
                console.log(htmlMain)
                document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', htmlMain)
            }
        } else {
            if (allReady === 0) {

                htmlMain = `     <div class="list_food_at_ov groc_list" id='${fdGroup, fdGroup.split(' ').join('')
                    }'>
    
    <h3>${fdGroup}</h3>
    
    
    <div class="ct_cat_by_list">
    
    </div>
    </div>
    
    `
                document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', htmlMain)
            }
        }


        allReady += 1
        if (offer !== null) {
            if (unitIn !== null) {
                inside = unitIn.map(cur2 => {
                    let html1 = ` <li>
                <p>${cur2.selectedUnit}</p>
                <span>${cur2.selectedPrice}</span>
            </li>`
                    return html1
                })
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            } else {
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }

                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                        <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                                <p> off</p>
                            </div>
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><del>₹ ${price}</del><span>₹${priceMain} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            }
        } else {
            if (unitIn !== null) {
                inside = unitIn.map(cur2 => {
                    let html1 = ` <li>
                <p>${cur2.selectedUnit}</p>
                <span> ${cur2.selectedPrice}</span>
            </li>`
                    return html1
                })
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                    
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                       
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                   
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                   
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <div class="ct_set_qt_for_groc">
                        <div class="field_bx_qt">
                            <p>${sU}</p>
                            <span>${sP}</span>
                            <div class="ct_bx_drop">
                                <ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                        </div>
                        <ul class="not_tog_dpd">
                            ${inside.join('')}
                        </ul>
    
                    </div>
                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            } else {
                if (com !== null) {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                     
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                     
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <span>${com}</span>
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }

                } else {
                    if (group === 'veg') {
                        html = `   <div class="itm_food_list_ek for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                      
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
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
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    } else {
                        html = `   <div class="itm_food_list_ek  for_groc_itm itm_not_selected" id='itm_food_list_ek'>
                    
                            <div class="ct_bx_inner_groc_itm">
    
                    <div class="ct_img_res_main">
                        <img class="main_img_groc_itm" src=${img}>
    
                    </div>
                    
                    <span class='id_groc'>${id}</span>
                    <div class="relative_width1 for_ek_pk_fd not_for_ek_pk_fd ">
                    <div class="bx_rem_field_qt_num bx_op">
                    
                    <ion-icon class="remove_field_num" name="remove"></ion-icon>
                    </div>
                    
                    <input readonly class="str_to_num  nottog_inp_groc for_grocery_qt_inp" type="text" value="${qt}">
                    <div class="bx_ad_field_qt_num bx_op">
                    <ion-icon class="add_field_num" name="add"></ion-icon>
                    
                    </div>
                    
                    </div>
                    <div class="ct_bx_inner1_groc_itm">
    
                    <div class="ct_type_fd_cart_itm2">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    </div>
                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>
    
    
                    </div>
    
                    <span class="unit">${unit}</span>

                    
    
                    <p class="price_food"><span>₹ ${price} </span></p>
    
                    
                    <span class="stk_groc">${stock}</span>
                    <p class="bx_cat_item">${groping}</p>
    
    
    
    </div>
    </div>
    
    
                </div>`

                    }
                }
            }
        }
        console.log(fdGroup, html)

        document.querySelector(`#${fdGroup.split(' ').join('')} .ct_cat_by_list`).insertAdjacentHTML('beforeend', html)
if(document.querySelector('.for_groc_full_load')!==null){
        document.querySelector('.for_groc_full_load').style.display = 'none'
}
        let ltEl = document.querySelector(`#${fdGroup.split(' ').join('')} .ct_cat_by_list`).lastChild
        console.log('hai2',ltEl.childNodes)

        if (ltEl.childNodes[3] !== undefined) {
            Array.from(ltEl.childNodes[3].childNodes).forEach(cur1 => {
                console.log(cur1)
                if (cur1.classList !== undefined) {
                    if (cur1.classList.value.split(' ').includes('ct_bx_inner1_groc_itm')) {
                        Array.from(cur1.childNodes).forEach(cur2 => {
                            if (cur2.classList !== undefined) {
                                if (cur2.classList.value.split(' ').includes('ct_set_qt_for_groc')) {
                                    let h = `                    <div class="field_bx_qt">
                                    <p>${sU}</p>
                                    <span>${sP}</span>
                           
                        </div>
                        <div class="ct_bx_drop">
                        <ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon>
                    </div>
                        `

                                    cur2.removeChild(cur2.childNodes[1])
                                    cur2.insertAdjacentHTML('afterbegin', h)
                                }
                            }
                        })
                    }
                }
            })
        }else{
            Array.from(ltEl.childNodes[1].childNodes).forEach(cur1 => {
                console.log(cur1)
                if (cur1.classList !== undefined) {
                    if (cur1.classList.value.split(' ').includes('ct_bx_inner1_groc_itm')) {
                        Array.from(cur1.childNodes).forEach(cur2 => {
                            if (cur2.classList !== undefined) {
                                if (cur2.classList.value.split(' ').includes('ct_set_qt_for_groc')) {
                                    let h = `                    <div class="field_bx_qt">
                                    <p>${sU}</p>
                                    <span>${sP}</span>
                           
                        </div>
                        <div class="ct_bx_drop">
                        <ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon>
                    </div>
                        `

                                    cur2.removeChild(cur2.childNodes[1])
                                    cur2.insertAdjacentHTML('afterbegin', h)
                                }
                            }
                        })
                    }
                }
            })
        }
        if (stock === 0) {
            let curEl = document.querySelectorAll(`#${fdGroup.split(' ').join('')} .ct_cat_by_list .itm_food_list_ek `)[addedGroc2]
            curEl.insertAdjacentHTML('afterbegin', `<div class="ct_bx_not_available">
    <ion-icon name="alert-circle-outline" role="img" class="md hydrated" aria-label="alert circle outline"></ion-icon>
    <p>not available</p>
    </div>`)
            let itmOrders = localStorage.getItem('orders')
            if (itmOrders !== null) {
                document.querySelectorAll('.for_groc_itm').forEach(cur => {
                    cur.style['pointer-events'] = 'none'
                })
            } else {
                document.querySelectorAll('.for_groc_itm').forEach(cur => {
                    cur.style['pointer-events'] = 'auto'
                })

            }
            console.log(curEl.childNodes)
            curEl.childNodes[0].style.display = 'flex'
            curEl.style[`pointer-events`] = 'none'
            let locGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            if (locGroc !== null) {
                locGroc.forEach((cur1, i) => {
                    let com1 = cur1.com
                    let name1 = cur1.name.split(' ').join('').trim()
                    if (com !== null && com1 !== null) {
                        if (name.split(' ').join('').trim() === name1 && com === com1) {
                            locGroc.splice(i, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(locGroc))
                        }
                    } else {
                        if (name.split(' ').join('').trim() === name1) {
                            locGroc.splice(i, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(locGroc))
                        }
                    }
                })
            }
        }
    }
    if (window.innerWidth < 400) {

        document.querySelectorAll('.ct_bx_not_available p').forEach(cur => {
            cur.style.fontSize = '11px'

        })
        document.querySelectorAll('.for_groc_itm .relative_width1').forEach(cur => {
            cur.style.transform = 'translate(-59px,80px)'

        })
        document.querySelectorAll('.ct_bx_inner1_groc_itm').forEach(cur => {
            cur.style.margin = '0px 0 0 228px'

        })

        document.querySelectorAll('.itm_food_list_ek .ct_img_res_main .main_img_groc_itm').forEach(cur => {
            cur.style.height = '120px'
            cur.style.marginLeft = '25px'

        })
        document.querySelectorAll('.ct_dt_tm_food_res span').forEach(cur => {
            cur.style.fontSize = '9px'

        })

    

      
        document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
            cur.style.fontSize = '14px'
            cur.style.width = '47vw'

        })
    
    }
    if (window.innerWidth < 400) {

        document.querySelectorAll('.ct_bx_not_available p').forEach(cur => {
            cur.style.fontSize = '11px'

        })
        document.querySelectorAll('.for_groc_itm .relative_width1').forEach(cur => {
            cur.style.transform = 'translate(-59px,80px)'

        })
        document.querySelectorAll('.ct_bx_inner1_groc_itm').forEach(cur => {
            cur.style.margin = '0px 0 0 198px'

        })
        document.querySelectorAll('.bodyessestials .ct_type_fd_cart_itm2').forEach(cur => {
            cur.style.transform = 'translate(-180px,62px)'
        })
     
        document.querySelectorAll('.itm_food_list_ek .ct_img_res_main .main_img_groc_itm').forEach(cur => {
            cur.style.height = '127px'
            cur.style.marginLeft = '25px'
            cur.style.maxWidth = '100%'

        })
        document.querySelectorAll('.ct_dt_tm_food_res span').forEach(cur => {
            cur.style.fontSize = '9px'

        })

    

      
        document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
            cur.style.fontSize = '14px'
            cur.style.width = '47vw'

        })
     
    }




}

const giveChtml = async (added, name, group, price, qt, includes, img, offer, stock, cook, ratings, time, id, forS = false, g = false, fDg = 0) => {

    if (forS) {
        allReady = 0
        fdGrgoup = forS
    } else {
        fdGroup = fdGroup

    }
    if (g === true) {
        fdGroup = fDg

    }
    console.log(fdGroup)
    let html1
    if (ratings !== null && ratings.length !== 0) {
        let numenator = 0
        let denomenator = 0
        ratings.forEach(cur => {
            cur.star = parseFloat(cur.star)
            cur.ratings = parseFloat(cur.ratings)

            numenator += cur.star * cur.ratings
            denomenator += cur.ratings
        })
        let ratedFront = parseFloat((numenator / denomenator).toFixed(2).split('.')[0])

        let ratedBack = parseFloat((numenator / denomenator).toFixed(2).split('.')[1].split('')[0])
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
        html1 = ` <span>
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
    let html
    if (forS) {
        allReady = 0
        fdGroup = 'search'
        if (allReady === 0) {

            let htmlMain = `     <div class="list_food_at_ov groc_list" id='${fdGroup.split(' ').join('')
                }'>

<h3>search result found for " ${forS} "</h3>


<div class="ct_cat_by_list">

</div>
</div>

`
            document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', htmlMain)
        }
    } else {
        fdGroup = fdGroup

        if (allReady === 0) {

            let htmlMain = `     <div class="list_food_at_ov groc_list" id='${fdGroup.split(' ').join('')
                }'>

<h3>${fdGroup}</h3>


<div class="ct_cat_by_list">

</div>
</div>

`
            document.querySelector('.ct_all_list_food').insertAdjacentHTML('beforeend', htmlMain)
        }
    }


    allReady += 1
    if (offer !== null) {

        if (group === 'veg') {
            html = `      
                <div class="itm_food_list_ek added_itm_ek_fd">
                    <a
                        href="/product?item=${id}&qt=1&sk=${stock}&cid=${groping}">
                        <div class="ct_offer_box_cook2">
                            <span>${offer}%</span>
                            <p> off</p>
                        </div>
                        <div class="ct_inner_fd_dt_grid">

                        <div class="ct_img_res_main">
                            <img src=${img}>

                        </div>
                        <div class="ct_inner_fd1_dt_grid">

                        <div class="ct_dt_tm_food_res">
                            <h4>${name}</h4>


                        </div>
                        <div class="ct_bx_ratings">
                         ${html1}
                        </div>
                        <div class="ct_bx_hw_cook">
                            <a href="${cook}">How to cook?</a>
                        </div>
                        <p class="price_food for_oly_ekfd_price"><span>₹ ${price}</span></p>

                        <div class="ct_type_bx_item_food">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
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
                            <p>veg</p>

                        </div>
                        <p class="bx_cat_item">1</p>
                        <div class="ct_time_it_takes">
                            <ion-icon name="alarm-outline"></ion-icon>
                            <p>${time}</p>
                        </div>
                        </div>
                        </div>
                    </a>



                </div>`
        } else {
            html = `      
            <div class="itm_food_list_ek added_itm_ek_fd">
                <a
                    href="/product?item=${id}&qt=1&sk=${stock}&cid=${groping}">
                    <div class="ct_offer_box_cook2">
                        <span>${offer}%</span>
                        <p> off</p>
                    </div>
                    <div class="ct_inner_fd_dt_grid">

                    <div class="ct_img_res_main">
                        <img src=${img}>

                    </div>
                    <div class="ct_inner_fd1_dt_grid">

                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>


                    </div>
                    <div class="ct_bx_ratings">
                     ${html1}
                    </div>
                    <div class="ct_bx_hw_cook">
                        <a href="${cook}">How to cook?</a>
                    </div>
                    <p class="price_food for_oly_ekfd_price"><span>₹ ${price}</span></p>

                    <div class="ct_type_bx_item_food">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    <p>non-veg</p>

                    </div>
                    <p class="bx_cat_item">1</p>
                    <div class="ct_time_it_takes">
                        <ion-icon name="alarm-outline"></ion-icon>
                        <p>${time}</p>
                        </div>
                    </div>
                    </div>
                </a>



            </div>`

        }

    } else {
        if (group === 'veg') {
            html = `      
            <div class="itm_food_list_ek added_itm_ek_fd">
                <a
                    href="/product?item=${id}&qt=1&sk=${stock}&cid=${groping}">
                  
                    <div class="ct_inner_fd_dt_grid">

                    <div class="ct_img_res_main">
                        <img src=${img}>

                    </div>
                    <div class="ct_inner_fd1_dt_grid">

                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>


                    </div>
                    <div class="ct_bx_ratings">
                     ${html1}
                    </div>
                    <div class="ct_bx_hw_cook">
                        <a href="${cook}">How to cook?</a>
                    </div>
                    <p class="price_food for_oly_ekfd_price"><span>₹ ${price}</span></p>

                    <div class="ct_type_bx_item_food">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18"
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
                <p>veg</p>

                    </div>
                    <p class="bx_cat_item">1</p>
                    <div class="ct_time_it_takes">
                        <ion-icon name="alarm-outline"></ion-icon>
                        <p>${time}</p>
                        </div>
                    </div>
                    </div>
                </a>



            </div>`

        } else {
            html = `      
            <div class="itm_food_list_ek added_itm_ek_fd">
                <a
                    href="/product?item=${id}&qt=1&sk=${stock}&cid=${groping}">
                  
                    <div class="ct_inner_fd_dt_grid">

                    <div class="ct_img_res_main">
                        <img src=${img}>

                    </div>
                    <div class="ct_inner_fd1_dt_grid">

                    <div class="ct_dt_tm_food_res">
                        <h4>${name}</h4>


                    </div>
                    <div class="ct_bx_ratings">
                     ${html1}
                    </div>
                    <div class="ct_bx_hw_cook">
                        <a href="${cook}">How to cook?</a>
                    </div>
                    <p class="price_food for_oly_ekfd_price"><span>₹ ${price}</span></p>

                    <div class="ct_type_bx_item_food">
                    <img src="https://img.icons8.com/color/18/000000/non-vegetarian-food-symbol.png" />

                    <p>non-veg</p>

                    </div>
                    <p class="bx_cat_item">1</p>
                    <div class="ct_time_it_takes">
                        <ion-icon name="alarm-outline"></ion-icon>
                        <p>${time}</p>
                        </div>
                    </div>
                    </div>
                </a>



            </div>`
        }
    }


    document.querySelector(`#${fdGroup.split(' ').join('')} .ct_cat_by_list`).insertAdjacentHTML('beforeend', html)
    document.querySelector('.for_ek_fd_full_load').style.display = 'none'
    if(window.innerWidth>500){
    if(window.innerWidth<=650){
        document.querySelectorAll('.erak_fd_body .itm_food_list_ek .ct_img_res_main img ').forEach(cur=>{
            cur.style.height='193px'
            cur.style.width='41vw'

                      })
          
                   
                      document.querySelectorAll('.ct_inner_fd1_dt_grid ').forEach(cur=>{
                        cur.style.transform='translate(20px,10px)'
                                  })
                      
    }
    if(window.innerWidth<=600){
        
        
        document.querySelectorAll('.ct_img_res_main img').forEach(cur=>{
            cur.style.height='193px'
                      })
        document.querySelectorAll('.ct_img_res_main img').forEach(cur=>{
            cur.style.width='45vw'
                      })
                      document.querySelectorAll('.ct_inner_fd1_dt_grid ').forEach(cur=>{
                        cur.style.transform='translate(44px,10px)'
                                  })
                      
    }
//     transform: translate(0px,-20px);
// }
    if(window.innerWidth<=530){
        document.querySelectorAll('.erak_fd_body .itm_food_list_ek .ct_img_res_main img ').forEach(cur=>{
            cur.style.height='193px'
            cur.style.width='45vw'

                      })
          
                   
                      document.querySelectorAll('.ct_inner_fd1_dt_grid ').forEach(cur=>{
                        cur.style.transform='translate(34px,10px)'
                                  })
                      
    }
}
    

    let fdG = fdGroup.split(' ').join('')
    $(`#${fdGroup.split(' ').join('')}`).waypoint(function (direction) {
        if (direction === 'down') {


            document.querySelectorAll('.evt_list_food_cat a').forEach(cur => {
                cur.classList.remove('active_a_cat_ck_fd')
                cur.classList.add('not_active_a_cat')
                if (cur.innerText.split('—')[0].trim().toLowerCase() === fdG) {
                    cur.classList.add('active_a_cat_ck_fd')
                    cur.classList.remove('not_active_a_cat')
                }

            })

        } else if (direction === 'up') {

            document.querySelectorAll('.evt_list_food_cat a').forEach(cur => {
                cur.classList.remove('active_a_cat_ck_fd')
                cur.classList.add('not_active_a_cat')
                if (cur.innerText.split('—')[0].trim().toLowerCase() === fdG) {
                    cur.classList.add('active_a_cat_ck_fd')
                    cur.classList.remove('not_active_a_cat')
                }

            })

        }
    }, {
        offset: '20%'
    })

 
    if (window.innerWidth < 470) {

       

        document.querySelectorAll('.ct_offer_box_cook2').forEach(cur => {
            cur.style.transform = 'translate(20px,-10px)'
        })
        document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
            // cur.style.width='120%'
            cur.style.fontSize = '17px'
        })

        document.querySelectorAll('.erak_fd_body .itm_food_list_ek .ct_img_res_main img ').forEach(cur=>{
            cur.style.height='166px'
            cur.style.width='48vw'
                        cur.style.marginLeft='-21px'

                      })
                      document.querySelectorAll('.ct_cat_by_list .itm_food_list_ek ').forEach(cur=>{
                        cur.style.marginLeft='10px'
                                  })
                                  
                                  document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4 ').forEach(cur=>{
                                    cur.style.width='70%'
                                              })
                      document.querySelectorAll('.ct_inner_fd1_dt_grid ').forEach(cur=>{
                        cur.style.transform='translate(0px,-16px)'
                                  })
                      
    }
    if (window.innerWidth <= 400) {
    
        document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
            cur.style.width = '80%'
            cur.style.fontSize = '15px'
        })
        document.querySelectorAll('.ct_type_bx_item_food').forEach(cur => {
            cur.style.marginLeft = '5px'
        })
         
        document.querySelectorAll('.ct_inner_fd1_dt_grid').forEach(cur => {
            cur.style.transform = 'translate(-10px,-17px)'
        })
        document.querySelectorAll('.erak_fd_body .itm_food_list_ek .ct_img_res_main img').forEach(cur => {
            cur.style.height='160px'
            cur.style.width='48vw'        })
      
        document.querySelectorAll('.ct_time_it_takes').forEach(cur => {
            cur.style.transform = 'translate(80px,-16px)'
        })
        document.querySelectorAll('.ct_type_bx_item_food p ,.ct_time_it_takes p').forEach(cur => {
            cur.style.fontSize = '11px'
        })
     
    }
    if (window.innerWidth < 360) {
     
                document.querySelectorAll('.ct_inner_fd1_dt_grid').forEach(cur => {
            cur.style.transform = 'translate(-20px,-17px)'
        })
        document.querySelectorAll('.ct_time_it_takes p, .ct_type_bx_item_food p').forEach(cur => {
            cur.style.fontSize = '10px'
            cur.style.marginTop = '2px'

        })
        document.querySelectorAll('.ct_time_it_takes').forEach(cur => {
            cur.style.transform="translate(71px, -16px)"
        })
         document.querySelectorAll('.ct_type_bx_item_food').forEach(cur => {
            cur.style.marginLeft = '2px'
        })
        document.querySelectorAll('.price_food span').forEach(cur => {
            cur.style.fontSize = '13px'
        })
        document.querySelectorAll('.itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
            cur.style.fontSize = '15px'
        })

        document.querySelectorAll('.erak_fd_body .itm_food_list_ek .ct_img_res_main img').forEach(cur => {
            cur.style.height='140px'
            cur.style.width='47vw'        })

    }


}
let addedNames = []

let groping = 1
let allReady = 0
let fdGroup
let numItm
let addedItm = 0

let html
let groupedItm = []
let groupedItm2 = []

let actCl = null
let hasCat = null
const functionAddItm2 = () => {
    let locFd = JSON.parse(localStorage.getItem('grocFoodListCart'))
    let numberItmMust = 0

    if (groupedItm2.length !== 0) {
        fdGroup = groupedItm2[groping - 1].name
        let num
        groupedItm2.forEach(cur => {
            console.log(cur.item)
            num = parseFloat(cur.item)
            numberItmMust += num
        })

    } else {
        return
    }

    let allFd = document.querySelectorAll(`#${fdGroup.split(' ').join('')} .itm_food_list_ek`).length
    if (document.querySelector('.for_groc_full_load').style.display === 'none' || document.querySelector('.for_groc_full_load').style.display === '') {
        let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${groping}`)
        numItm = parseFloat((groupedItm2[groping - 1].item)) + 1

        if (document.querySelectorAll(`.itm_food_list_ek`).length < numberItmMust) {

            document.querySelector('.for_groc_full_load').style.display = 'block'

            dbCollection
                .orderBy('item')

                .get()
                .then(res => {
                    console.log(res.docs, allFd, addedItm)
                    let lastVisible
                    if (addedItm > 0) {
                        if ((addedItm) !== 0 && (addedItm + 1) !== numItm - addedSelected) {
                            if (addedSelected !== 0) {

                                lastVisible = res.docs[allFd - 1].data().item
                            }
                            else {
                                lastVisible = res.docs[allFd - 1].data().item

                            }

                        } else if ((allFd) !== 0 && (allFd + 1) !== numItm - addedSelected) {
                            if (addedItm === 0) {

                                lastVisible = res.docs[1].data().item
                                return
                            }

                            lastVisible = res.docs[allFd - 1].data().item



                        } else {
                            lastVisible = res.docs[2].data().item

                        }
                        console.log(lastVisible, 'vis')

                        dbCollection
                            .orderBy('item')
                            .startAfter(lastVisible)

                            .limit(5)
                            .get()
                            .then(el => {
                                if (el.docs.length === 0) {
                                    groping++
                                    if (addedSelected !== 0) {
                                        addedItm = 0

                                    } else {
                                        addedItm = 0

                                    }
                                    allReady = 0

                                    document.querySelector('.for_groc_full_load').style.display = 'none'


                                } else {

                                    el.forEach(cur => {

                                        console.log(cur)
                                        let item = cur.data().item
                                        console.log(item, 'items')
                                        const name = item.name
                                        const group = item.group
                                        let price = parseFloat(item.price)
                                        const unitIn = item.unitInside
                                        const unit = item.unit
                                        const com = item.com
                                        const id = item.id

                                        const img = item.img
                                        const offer = item.offer
                                        let off = parseFloat(offer)
                                        let priceMain = Math.round(price - (off / 100 * price))
                                        priceMain = priceMain.toLocaleString()
                                        price = price.toLocaleString()
                                        let stock = item.stock
                                        console.log(allFd + 1, numItm, 'check')
                                        if (allFd + 1 < numItm) {

                                            if (locFd !== null && locFd.length !== 0) {

                                                if (addedSelected !== locFd.length) {
                                                    for (let i = 0; i < locFd.length; i++) {
                                                        let curItm = locFd[i]
                                                        let sU = curItm.selectedUnit
                                                        let sP = curItm.selectedPrice

                                                        console.log(parseFloat(curItm.catId), groping)

                                                        if (parseFloat(curItm.catId) === groping) {

                                                            if (curItm.name === name) {
                                                                console.log(addedNames)
                                                                if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                                    giveHtmlGroc(true, name, group, price, curItm.qt, priceMain, unitIn, unit, com, img, offer, id, stock, sP, sU)
                                                                    addedSelected++
                                                                    addedNames.push(curItm.name.split(' ').join('').toLowerCase())
                                                                    break



                                                                }


                                                            }
                                                        }

                                                    }

                                                    if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                        addedItm++

                                                        if (unitIn !== null) {
                                                            giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                        } else {
                                                            giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                        }
                                                    }


                                                } else {
                                                    console.log(addedNames, name)
                                                    if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                        addedItm++

                                                        if (unitIn !== null) {
                                                            giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                        } else {
                                                            giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                        }
                                                    }


                                                }

                                            } else {
                                                if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                    addedItm++

                                                    if (unitIn !== null) {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                    } else {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                    }
                                                }
                                            }

                                        } else {
                                            if (groping < 2) {
                                                groping++
                                                if (addedSelected !== 0) {
                                                    addedItm = -1

                                                } else {
                                                    addedItm = 0

                                                }
                                                allReady = 0

                                                document.querySelector('.for_groc_full_load').style.display = 'none'

                                            }
                                        }

                                    })
                                }


                            })






                    } else {
                        dbCollection
                            .orderBy('item')

                            .limit(5)
                            .get()
                            .then(res => {
                                res.docs.forEach(cur => {
                                    let item = cur.data().item
                                    console.log(item, 'items')
                                    const name = item.name
                                    const group = item.group
                                    let price = parseFloat(item.price)
                                    const unitIn = item.unitInside
                                    const unit = item.unit
                                    const com = item.com
                                    const id = item.id
                                    const img = item.img
                                    const offer = item.offer
                                    let off = parseFloat(offer)
                                    let priceMain = Math.round(price - (off / 100 * price))
                                    priceMain = priceMain.toLocaleString()
                                    price = price.toLocaleString()
                                    let stock = item.stock
                                    console.log(addedItm, numItm)
                                    if (allFd + 1 < numItm) {
                                        if (locFd !== null && locFd.length !== 0) {



                                            if (addedSelected !== locFd.length) {
                                                //2
                                                for (let i = 0; i < locFd.length; i++) {
                                                    let curItm = locFd[i]
                                                    console.log(curItm)

                                                    let sU = curItm.selectedUnit
                                                    let sP = curItm.selectedPrice
                                                    console.log(parseFloat(curItm.catId), groping)

                                                    if (parseFloat(curItm.catId) === groping) {
                                                        console.log(addedNames)

                                                        if (curItm.name.split(' ').join('') === name.split(' ').join('')) {

                                                            if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                                console.log(curItm.qt)
                                                                giveHtmlGroc(true, name, group, price, curItm.qt, priceMain, unitIn, unit, com, img, offer, id, stock, sP, sU)
                                                                addedSelected++
                                                                addedNames.push(curItm.name.split(' ').join('').toLowerCase())
                                                                break



                                                            }



                                                        }
                                                    }
                                                }
                                                if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                    addedItm++
                                                    if (unitIn !== null) {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                    } else {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                    }
                                                }

                                            } else {
                                                if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                    addedItm++

                                                    if (unitIn !== null) {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                    } else {
                                                        giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                    }
                                                }
                                            }

                                        } else {
                                            if (!addedNames.includes(name.split(' ').join('').toLowerCase())) {
                                                addedItm++

                                                if (unitIn !== null) {
                                                    giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, unitIn[0].selectedPrice, unitIn[0].selectedUnit)
                                                } else {
                                                    giveHtmlGroc(false, name, group, price, 1, priceMain, unitIn, unit, com, img, offer, id, stock, null, null)

                                                }
                                            }
                                        }

                                    } else {
                                        groping++

                                        if (addedSelected !== 0) {
                                            addedItm = -1

                                        } else {
                                            addedItm = 0

                                        } allReady = 0

                                        document.querySelector('.for_groc_full_load').style.display = 'none'


                                    }
                                });
                            })

                    }


                })
        } else {
            document.querySelector('.for_groc_full_load').style.display = 'none'
        }
    }
}
const functionAddItm = async (cat = false, id1 = 1, grp = 0) => {
    let locFd = JSON.parse(localStorage.getItem('foodListCart'))
    if (addGroup !== 0) {
        groping = addGroup + 1
    }
    if (groupedItm.length !== 0) {

        if (groupedItm[groping - 1] !== undefined) {
            fdGroup = groupedItm[groping - 1].name

        } else {
            fdGroup = groupedItm[1].name

        }
    } else { return }
    let num = 0
    let numberItmMust = 1
    numItm = parseFloat((groupedItm[groping - 1].item)) + 1
    groupedItm.forEach(cur => {
        num = parseFloat(cur.item)
        numberItmMust += num

    })
    let allFd = document.querySelectorAll(`#${fdGroup.split(' ').join('')} .itm_food_list_ek`).length
    if (document.querySelector('.for_ek_fd_full_load').style.display === 'none' || document.querySelector('.for_ek_fd_full_load').style.display === '') {
        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`)


        if (document.querySelectorAll(`.itm_food_list_ek`).length < numberItmMust) {
            document.querySelector('.for_ek_fd_full_load').style.display = 'block'

            dbCollection
                .orderBy('item')

                .get()
                .then(res => {
                    let lastVisible

                    if (addedItm > 0) {
                        if ((addedItm) !== 0 && (addedItm + 1) !== numItm - addedSelected) {

                            lastVisible = res.docs[allFd - 1].data().item



                        } else if ((allFd) !== 0 && (allFd + 1) !== numItm - addedSelected) {
                            lastVisible = res.docs[allFd - 1].data().item

                        } else {
                            lastVisible = res.docs[2].data().item

                        }
                        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`)
                        let lim = 4
                        function myFunction2(x) {
                            if (x.matches) {
                                lim = 4
                            }
                        }
                        var x = window.matchMedia("(max-width: 768px)")
                        myFunction2(x)
                        x.addEventListener('change', myFunction2)

                        dbCollection
                            .orderBy('item')
                            .startAfter(lastVisible)

                            .limit(lim)
                            .get()
                            .then(cur => {
                                console.log(cur.docs.length)
                                if (cur.docs.length === 0) {
                                    if (groping < 3) {
                                        groping++
                                        if (addedSelected !== 0) {
                                            addedItm = 0

                                        } else {
                                            addedItm = 0

                                        }
                                        allReady = 0
                                        document.querySelector('.ct_bx_search').style.display = 'flex'

                                        document.querySelector('.for_ek_fd_full_load').style.display = 'none'

                                    }
                                } else {
                                    cur.docs.forEach(cur => {
                                        let item = cur.data().item

                                        const name = item.name
                                        const group = item.type
                                        const cook = item.cook
                                        const time = item.time

                                        const price = item.price
                                        const includes = item.fdInside
                                        const img = item.img
                                        const id = item.id

                                        const offer = item.offer
                                        const stock = item.stock
                                        const ratings = item.ratings
                                        if (allFd + 1 < numItm && (allFd + 1) < numItm) {

                                            if (locFd !== null) {

                                                if (addedSelected !== locFd.length) {
                                                    for (let i = 0; i < locFd.length; i++) {
                                                        let curItm = locFd[i]
                                                        console.log(parseFloat(curItm.catId), groping)

                                                        if (parseFloat(curItm.catId) === groping) {

                                                            if (curItm.fdName === name) {
                                                                if (!addedNames.includes(name)) {
                                                                    giveChtml(true, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)
                                                                    addedSelected++
                                                                    addedNames.push(curItm.fdName)
                                                                    break



                                                                }


                                                            }
                                                        }

                                                    }

                                                    if (!addedNames.includes(name)) {
                                                        addedItm++

                                                        giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                                    }


                                                } else {
                                                    console.log(addedNames, name)
                                                    if (!addedNames.includes(name)) {
                                                        addedItm++

                                                        giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                                    }


                                                }

                                            } else {
                                                if (!addedNames.includes(name)) {
                                                    addedItm++

                                                    giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                                }
                                            }
                                        } else {
                                            if (groping < 3) {
                                                groping++
                                                if (addedSelected !== 0) {
                                                    addedItm = -1

                                                } else {
                                                    addedItm = 0

                                                }
                                                allReady = 0

                                        document.querySelector('.ct_bx_search').style.display = 'flex'
                                                document.querySelector('.for_ek_fd_full_load').style.display = 'none'

                                            }
                                        }

                                    })
                                }
                            })







                    } else {

                        let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`)
                        let lim = 4
                        function myFunction2(x) {
                            if (x.matches) {
                                lim = 4
                            }
                        }
                        var x = window.matchMedia("(max-width: 768px)")
                        myFunction2(x)
                        x.addEventListener('change', myFunction2)
                        dbCollection
                            .orderBy('item')
                            .limit(lim)
                            .get()
                            .then(res => {

                                res.forEach(cur => {
                                    let item = cur.data().item

                                    const name = item.name
                                    const group = item.type
                                    const cook = item.cook
                                    const time = item.time

                                    const price = item.price
                                    const includes = item.fdInside
                                    const img = item.img
                                    const offer = item.offer
                                    const stock = item.stock
                                    const id = item.id
                                    const ratings = item.ratings
                                    console.log(ratings, name)

                                    if (allFd + 1 < numItm) {
                                        if (locFd !== null) {

                                            if (addedSelected !== locFd.length) {
                                                //2
                                                for (let i = 0; i < locFd.length; i++) {
                                                    let curItm = locFd[i]

                                                    console.log(parseFloat(curItm.catId), groping)

                                                    if (parseFloat(curItm.catId) === groping) {

                                                        if (curItm.fdName.split(' ').join('') === name.split(' ').join('')) {

                                                            if (!addedNames.includes(name)) {
                                                                giveChtml(true, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)
                                                                addedSelected++
                                                                addedNames.push(curItm.fdName)
                                                                break



                                                            }



                                                        }
                                                    }
                                                }
                                                if (!addedNames.includes(name)) {
                                                    addedItm++

                                                    giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                                }

                                            } else {
                                                if (!addedNames.includes(name)) {
                                                    addedItm++

                                                    giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                                }
                                            }
                                        } else {
                                            if (!addedNames.includes(name)) {
                                                addedItm++

                                                giveChtml(false, name, group, price, 1, includes, img, offer, stock, cook, ratings, time, id)

                                            }
                                        }

                                    } else {
                                        if (groping < 3) {
                                            groping++

                                            if (addedSelected !== 0) {
                                                addedItm = -1

                                            } else {
                                                addedItm = 0

                                            } allReady = 0
                                            document.querySelector('.ct_bx_search').style.display = 'flex'

                                            document.querySelector('.for_ek_fd_full_load').style.display = 'none'

                                        }
                                    }
                                });
                            })

                    }

                })
        } else {
            document.querySelector('.ct_bx_search').style.display = 'block'

            document.querySelector('.for_ek_fd_full_load').style.display = 'none'
        }
    }
}
// $(document).ready(() => {

//     const touch=(e)=>{
//         // alert(window.innerHeight + window.scrollY+'  event')
//     console.log('touch moved')
//         if ((window.innerHeight + window.scrollY) === document.documentElement.scrollHeight) {
//     alert('loading')
//     functionAddItm()

//         }
//         }
//         $(document.body).on('touchmove', touch); // for mobile

//     })

document.addEventListener('scroll', function (e) {

    if ((window.innerHeight + window.scrollY) === document.documentElement.scrollHeight) {
        if (document.querySelector('.bodyessestials') !== null) {

            if (notS === null) {
                functionAddItm2()

            }
        }
        if (document.querySelector('.erak_fd_body') !== null) {
            if (notS === null) {
                functionAddItm()

            }
        }


    }




})
