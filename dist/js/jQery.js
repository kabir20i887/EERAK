
    


var noReccom = false
var foodObjGrocery = null
var xDown = null;

var yDown = null;
if (window.screen.width <= 400) {
    if (document.querySelector('.for_nav_search') !== null) {
        document.querySelector('.for_nav_search input').addEventListener('click', (e) => {
            document.querySelector('.ct_field_small_size_bx').style.display = 'none'
            document.querySelector('.mai_ul').style.display = 'none'
            document.querySelector('.ct_nav_erak .for_seravh_in_nav').style.margin = '0'
            document.querySelector('.icon_search_bx').style.display = 'none'
            document.querySelector('.ct_bx_go_back_nav').classList.add('appear')
            document.querySelector('.ct_bx_matched_itm').style.transform = 'translate(0,6px)'
            document.querySelector('.ct_inner_nav').style.padding = '10px 0'
            setTimeout(() => {
                document.querySelector('.ct_nav_erak .ct_inner_nav .for_big_scr_only .ct_bx_search').style.boxShadow = 'none'

            }, 200);
            document.querySelector('.for_big_scr_only').classList.remove('active2')
            document.querySelector('.for_big_scr_only ').classList.add('active')
        })
        document.querySelector('.ct_bx_go_back_nav').addEventListener('click', (e) => {
            document.querySelector('.ct_field_small_size_bx').style.display = 'block'
            document.querySelector('.ct_nav_erak .for_seravh_in_nav').style.margin = '2px 0 0 0'

            document.querySelector('.mai_ul').style.display = 'block'
            if (window.screen.width <= 360) {
                document.querySelector('.ct_nav_erak .for_seravh_in_nav').style.margin = '2px 0 0 0'

            }
            if (window.screen.width <= 330) {
                document.querySelector('.ct_nav_erak .for_seravh_in_nav').style.margin = '2px 0 0 0'

            }
            document.querySelector('.icon_search_bx').style.display = 'block'
            document.querySelector('.ct_bx_go_back_nav').classList.remove('appear')
            document.querySelector('.xclose_icon').style.display = 'none'
            document.querySelector('.for_big_scr_only input').value = ''
            document.querySelector('.ct_bx_matched_itm').style.transform = 'translate(0,6px)'
            document.querySelector('.ct_inner_nav').style.padding = '4px 0'
            document.querySelector('.ct_nav_erak .ct_inner_nav .for_big_scr_only .ct_bx_search').style.boxShadow = '0 1px 6px rgb(0 0 0 / 42%)'
            document.querySelector('.for_big_scr_only').classList.remove('active')
            document.querySelector('.for_big_scr_only ').classList.add('active2')

        })
    }

}

if (document.querySelector('#phone_num_inp') !== null) {
    document.querySelector('#phone_num_inp').addEventListener("keydown", function (e) {
        var a = e.which;
        var k = isFinite(e.key);
        if (!k && a !== 8)
            e.preventDefault();
    });

}


if (document.querySelector('.about_us') !== null) {

    if (window.screen.width <= 1380) {
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.marginLeft = '265px'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.margin = '41px 0 0 30px'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.width = '400px'

    }
    if (window.screen.width <= 1290) {
        document.querySelectorAll('.ct_bx_ov_about_us1 .img2').forEach(cur => {
            cur.style.transform = 'translate(0,-196px)'
        })
        document.querySelectorAll('.ct_bx_ov_about_us1 .img1').forEach(cur => {
            cur.style.width = 'auto'
        })
        document.querySelectorAll('.ct_bx_ov_about_us1 .img1').forEach(cur => {
            cur.style.height = '200px'
        })
    }
    if (window.screen.width <= 1200) {
        document.querySelector('.ct_bx_ov_about_us3').style.height = 'auto'

        document.querySelector('.ct_bx_ov_about_us4 .img2').style.marginLeft = '185px'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.width = '377px'
        // document.querySelector('.ct_bx_ov_about_us4 .ct_bx_designShape1').style.marginTop = '65px'
        document.querySelectorAll('.ct_bx_ov_about_us1 .img1').forEach(cur => {
            cur.style.height = '166px'
        })
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.margin = '0px 0 0 30px'

    }
    if (window.screen.width <= 970) {
        document.querySelector('.ct_bx_ov_about_us3').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '84%'
        document.querySelector('.ct_bx_ov_about_us1 .innerM.innerMAb1 .img3').style.transform = 'translate(181px,-110px)'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.width = '335px'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.margin = '56px 0px 0px 30px'
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.marginLeft = '122px'
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.width = '70px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.marginTop = '56px'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape2').style.marginTop = '0'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape1').style.marginTop = '15px'
        document.querySelector('.ct_bx_ov_about_us3 .innerM').style.marginTop = '0'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout1').style.display = 'none'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us3 .innerM.m2').style.display = 'block'
        document.querySelector(' .ct_bx_ov_about_us3 h2').style.paddingTop = '10px'
        document.querySelector('.ct_bx_ov_about_us3 .img5').style.transform = 'translate(10px, -100px)'
        document.querySelector('.ct_bx_ov_about_us3 .img4').style.transform = 'translate(10px, -30px)'

        document.querySelector('.ct_bx_ov_about_us3 .innerM.m1').style.display = 'none'
    }
    if (window.screen.width <= 960) {
        document.querySelector('.ct_bx_ov_about_us3 .img1').style.height = '173px'
        document.querySelector('.ct_bx_ov_about_us3 .img4').style.height = '78px'
        document.querySelector('.ct_bx_ov_about_us3 .img4').style.transform = 'translate(7px, -109px)'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.width = '453px'
        document.querySelectorAll('.ct_bx_ov_about_us1 .img1').forEach(cur => {
            cur.style.height = '134px'
        })
        document.querySelector('.ct_bx_ov_about_us1 .img3').style.width = 'auto'
        document.querySelectorAll('.ct_bx_ov_about_us1 .img2').forEach(cur => {
            cur.style.height = '76px'
            cur.style.width = 'auto'
            cur.style.transform = 'translate(0,-146px)'

        })
        document.querySelector('.ct_bx_ov_about_us1 .img3').style.transform = 'translate(176px,-110px)'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.width = '62%'
        // document.querySelector('.ct_bx_ov_about_us4 h2').style.width = '62%'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.width = '62%'
        // document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '62%'
        document.querySelector('.ct_bx_ov_about_us2 .img3').style.marginTop = '200px'
        document.querySelector('.ct_bx_ov_about_us3').style.height = '334px'
        document.querySelector('.ct_bx_ov_about_us4 .img1').style.width = '295px'

    }
    if (window.screen.width <= 890) {
        document.querySelector('.ct_bx_ov_about_us2 .img3').style.marginTop = '231px'
        document.querySelector('.ct_bx_ov_about_us3').style.height = '372px'
    }
    if (window.screen.width <= 800) {
        document.querySelector('.ct_bx_ov_about_us1 .ct_bx_designShape1').style.marginLeft = '13px'
        document.querySelector('.ct_bx_ov_about_us1 .ct_bx_designShape2').style.marginLeft = '32px'
        document.querySelector('.ct_bx_ov_about_us1 .innerM.innerMAb1 .img3').style.transform = 'translate(1px, -0px)'
        document.querySelector('.ct_bx_ov_about_us4').style.height = 'auto'
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.marginLeft = '332px'
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.marginTop = '105px'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '92%'
        document.querySelector('.ct_bx_ov_about_us1').style.height = 'auto'
        document.querySelector('.ct_bx_ov_about_us3').style.height = 'auto'
        document.querySelector('.ct_bx_ov_about_us2').style.height = 'auto'
        document.querySelector('.ct_bx_ov_about_us4').style.height = 'auto'
        document.querySelector('.ct_bx_ov_about_us2').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us3').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us1').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us4').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.marginLeft = '41px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img3').style.margin = '190px 0px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img1').style.position = 'static'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.position = 'static'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.marginLeft = '8px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img3').style.position = 'static'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img3').style.margin = '0 20px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img3').style.transform = 'translate(10px, -0)'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img1').style.width = '342px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img1').style.margin = '-50px 0 0 0'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.transform = 'translate(10px, -140px)'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.marginLeft = '40px'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape1').style.marginLeft = '13px'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape2').style.marginLeft = '31px'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.width = '91%'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.transform = 'translate(1%)'
        document.querySelector('.ct_bx_ov_about_us2 .innerM').style.display = 'block'
        document.querySelector('.ct_bx_ov_about_us2 .img3').style.marginTop = '20px'
        document.querySelector('.ct_bx_ov_about_us2 .img3').style.position = 'static'
        // document.querySelector('.ct_bx_ov_about_us4 h2').style.width = '86%'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.width = '86%'
        document.querySelectorAll('.ct_bx_ov_about_us1 .innerM').forEach(cur => {
            cur.style.position = 'absolute'
            cur.style.right = '0'
            cur.style.transform = 'translate(0px, -108px)'
        })
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.marginTop = '44px'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.marginLeft = '0'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.paddingTop = '0'
        document.querySelector('.ct_bx_ov_about_us2 .img4').style.position = 'static'
        document.querySelector('.ct_bx_ov_about_us2 .img4').style.marginTop = '182px'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.position = 'absolute'
        document.querySelector('.ct_bx_ov_about_us1 .img2').style.marginTop = '152px'
        document.querySelectorAll('.ct_bx_ov_about_us1 .img1').forEach(cur => {
            cur.style.marginTop = '0'
        })
        document.querySelector('.ct_bx_ov_about_us1 .img2').style.transform = 'translate(0px, 6px)'
        document.querySelectorAll('.ct_bx_ov_about_us1 .img2').forEach(cur => {
            cur.style.marginTop = '152px'
            cur.style.transform = 'translate(0px, 6px)'

        })
        document.querySelector('.ct_bx_ov_about_us1 .img3').style.transform = 'translate(-26px, 10px)'
        document.querySelector('.ct_bx_ov_about_us2 .img3').style.width = '192px'

    }
    if (window.screen.width <= 645) {
        document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '88%'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.width = '88%'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.paddingTop = '0'
        document.querySelector('.ct_bx_ov_about_us2 .img4').style.marginTop = '213px'

        document.querySelector('.ct_bx_ov_about_us2 .img2').style.marginTop = '87px'
        document.querySelector('.ct_bx_ov_about_us4 .img2').style.transform = 'translate(10px, -80px)'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.width = '385px'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape2').style.marginTop = '-10px'
        document.querySelector('.ct_bx_ov_about_us3 .ct_bx_designShape1').style.marginTop = '2px'
        // document.querySelector('.ct_bx_ov_about_us4 h2').style.width = '81%'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.marginLeft = '40px'
        document.querySelector('.ct_bx_ov_about_us1 .ct_bx_designShape1').style.marginLeft = '13px'
        document.querySelector('.ct_bx_ov_about_us1 .ct_bx_designShape2').style.marginLeft = '35px'

        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img1').style.width = '311px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.transform = 'translate(-110px, -50px)'

    }
    if (window.screen.width <= 550) {
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img1').style.width = '356px'
        document.querySelector('.ct_bx_ov_about_us4 .ct_bx_inneabout2 .img2').style.transform = 'translate(310px, -43px)'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.position = 'static'
        document.querySelector('.ct_bx_ov_about_us2 .img2').style.marginTop = '124px'
        document.querySelector('.ct_bx_ov_about_us2 .img4').style.marginTop = '-99px'
    }
    if (window.screen.width <= 470) {
        document.querySelector('.ct_bx_ov_about_us3 h2').style.fontSize = '24px'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.lineHeight = '38px'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.fontSize = '24px'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.lineHeight = '38px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.fontSize = '24px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.lineHeight = '38px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.width = '83%'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.width = '83%'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '83%'

    }
    if (window.screen.width <= 360) {
        document.querySelector('.ct_bx_ov_about_us3 .innerM.m2').style.marginBottom = '-97px'

        document.querySelector('.ct_bx_ov_about_us3 h2').style.fontSize = '21px'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.lineHeight = '35px'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.fontSize = '21px'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.lineHeight = '35px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.fontSize = '21px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.lineHeight = '35px'
        document.querySelector('.ct_bx_ov_about_us1 h2').style.width = '80%'
        document.querySelector('.ct_bx_ov_about_us2 h2').style.width = '80%'
        document.querySelector('.ct_bx_ov_about_us3 h2').style.width = '80%'
    }

}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

if (document.querySelector('.body_cart') !== null) {
    if (getCookie('user') !== '') {
        if (JSON.parse(getCookie('user')).business) {
            let krFd = JSON.parse(localStorage.getItem('krBusiness'))
            if (krFd.length !== 0)
                document.querySelector('.ct_bx_diff_group .cart_itm_ov_b').style.display = 'block'
        }
    }
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {

        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            if (document.querySelector('.t_bx_about_ins') !== null) {
                document.querySelectorAll('.t_bx_about_ins').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_list_other_item ').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelector('.ct_overfow_for_baseitm').style.display = 'none'
                document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_bx_ins_items  .iconup').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.ct_bx_ins_items  .icondwn').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_up_nav').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_down_nav').forEach(cur => {
                    cur.style.display = 'block'
                })
            }
        } else {
            /* right swipe */

            if (document.querySelector('.t_bx_about_ins') !== null) {
                document.querySelectorAll('.ct_list_other_item ').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelector('.ct_overfow_for_baseitm').style.display = 'none'
                document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_bx_ins_items  .iconup').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.ct_bx_ins_items  .icondwn').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.t_bx_about_ins').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_up_nav').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_down_nav').forEach(cur => {
                    cur.style.display = 'block'
                })
            }
        }
    }
    else {
        if (yDiff > 0) {
            if (document.querySelector('.t_bx_about_ins') !== null) {

                document.querySelectorAll('.t_bx_about_ins').forEach(cur => {
                    cur.style.display = 'none'
                })

                document.querySelectorAll('.for_otherItems  .ct_up_nav').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_bx_units_item ul ').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_bx_ins_items  .iconup').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.ct_bx_ins_items  .icondwn').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_down_nav').forEach(cur => {
                    cur.style.display = 'block'
                })
            }
        } else {

            if (document.querySelector('.t_bx_about_ins') !== null) {
                document.querySelectorAll('.t_bx_about_ins').forEach(cur => {
                    cur.style.display = 'none'
                })

                document.querySelectorAll('.for_otherItems  .ct_up_nav').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.for_otherItems  .ct_down_nav').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelectorAll('.ct_bx_ins_items  .iconup').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.ct_bx_ins_items  .icondwn').forEach(cur => {
                    cur.style.display = 'none'
                })

            }
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;

}

let val = 0
let numenator2 = 0
let a = 0
let locItm2 = []
let gloablOffer = null
let gloabP = null
let ifd = []
let stockFin = false
let locItm = []
let denomenator2 = 0
let denomenatorM2 = 0
let numenatorM2 = 0

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
let gAccept = false
if (document.querySelector('.body_login') !== null) {
    if (window.screen.width <= 1100) {
        document.querySelector('.ct_bx_overlay_cart_signup').style.top = '0px'

    }

}


if (JSON.parse(localStorage.getItem('maxqtfd')) !== null) {
    let fds = JSON.parse(localStorage.getItem('foodsAdded'))
    let fds2 = JSON.parse(localStorage.getItem('maxqtfd'))
    for (let indx = 0; indx < fds.length; indx++) {
        let cu = fds[indx]
        for (let i = 0; i < fds2.length; i++) {
            let cur = fds2[i]
            console.log(cur, cu, 'kaiioo')
            if (cu.id === cur) {
                fds2.splice(i, 1)
                i--
                fds.splice(indx, 1)
                indx--
                localStorage.setItem('maxqtfd', JSON.stringify(fds2))
                localStorage.setItem('foodsAdded', JSON.stringify(fds))

            }
        }
    }
    if (fds2 !== null) {
        if (fds2.length === 0) {
            localStorage.removeItem('maxqtfd')

        }
    }


}
function base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
}



const setOrderCart = async (pass, oId) => {
    let dbCollection = db.collection("orders")
    let res = await dbCollection.get()
    res.docs.forEach(cur => {
        let itm = cur.data().obj
        if (itm.idM.trim() === oId.trim()) {
            let time = itm.time
            let arrOrders = itm.order
            let isAccepted = itm.isAccepted
            let user = itm.user
            let canceled = itm.user
            let isDelivered = itm.isDelivered
            let op = pass
            let obj = {
                time: time,
                order: arrOrders,
                idM: oId,
                isAccepted: isAccepted,
                user: user,
                canceled: canceled,
                isDelivered: isDelivered,
                op: op,
            }
            dbCollection.doc(cur.id).set({
                obj,
                createdAt: cur.data().createdAt

            }).then(() => {
                document.querySelector('.animated.yt-loader').style.display = 'none'
                document.querySelector('.ct_overfow_for_load').style.display = 'none'
            })
        }
    })


}
if (document.querySelector('.for_erak_cart t') !== null) {
    document.querySelector('.for_erak_cart t').addEventListener('click', () => {
        let orderI = document.querySelector('.orderId').innerText
        let user = JSON.parse(getCookie('user'))
        let phone = parseFloat(user.ct)
        socket.emit('resndCart', phone)
        let pass = document.querySelector('.nOp').innerText
        var header = {
            "alg": "HS256",
            "typ": "JWT"
        };

        var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
        var encodedHeader = base64url(stringifiedHeader);


        var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(pass));
        var encodedData = base64url(stringifiedData);
        var token = encodedHeader + "." + encodedData;
        pass = token
        document.querySelector('.animated.yt-loader').style.display = 'flex'
        document.querySelector('.ct_overfow_for_load').style.display = 'flex'
        setOrderCart(pass, orderI)

    })


}
if (window.location.pathname.split('/')[1] === 'mycart') {
    // window.location.search.split('&')[2]
    if (getCookie('user') !== '') {
        let u = JSON.parse(getCookie('user'))
        if (window.location.search.split('&')[0] !== '') {
            if (window.location.search.split('&')[0].split('=')[1].trim() !== u.rootAutyh.trim()) {
                localStorage.removeItem('orders')
            }
        } else {
            localStorage.removeItem('orders')
        }
        if (window.location.search.split('&')[2] !== undefined) {
            if (window.location.search.split('&')[2].split('=')[0] !== 'rdM') {
                document.cookie = "processResend" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';

            }
        } else {
            document.cookie = "processResend" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;

        }
    }
} else {
    localStorage.removeItem('orders')
    document.cookie = "processResend" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;

}
if (window.location.pathname.split('/')[1] === 'signup') {
    if (window.location.search.split('&')[0].split('=')[0].split('?')[1] !== 'authUser') {
        document.cookie = "processSign" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;
        document.cookie = "checkSign" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;

    }
} else {
    document.cookie = "checkSign" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;

    document.cookie = "processSign" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;
}
if (window.location.pathname === '/account/editAccount') {
    if (window.location.search.split('&')[0].split('=')[0].split('?')[1] !== 'user') {
        document.cookie = "processOtp2" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;

    }
} else {
    document.cookie = "processSign" + "=" + '' + ";expires=Thu, 01 Jan 1970 00:00:00 UTC" + ";path=/" + ' ';;
}
const cancelOrderFinal = async (idM = 0) => {

    let for_acc_dt = false
    let Uid
    socket.emit('cancelOrder')
    let d = new Date()
    let dbCollection2 = db.collection("orders")
    let od = await dbCollection2.get()

    document.querySelector('.for_acc_dt .yt-loader').style.display = 'none'
    document.querySelector('.ct_overfow_for_load').style.display = 'none'
    for_acc_dt = true
    Uid = idM

    od.docs.forEach(cur => {
        let el = cur.data().obj
        let order = el.order
        let timeE = el.time
        let userE = el.user
        console.log(el.idM === Uid, 'cIdo')
        if (el.idM === Uid) {
            order.forEach(async elm => {
                if (elm.typ === 'fd') {
                    let dbCollectionM = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${elm.catId}`)

                    let resFd = await dbCollectionM.get()
                    resFd.docs.forEach(async elem1 => {
                        let item = elem1.data().item
                        let cqa = elem1.data().cqa
                        let maxqt = elem1.data().maxqt
                        let name = item.name
                        let imgBanner = item.imgBanner
                        let base = item.base
                        let cook = item.cook
                        let fdInside = item.fdInside
                        let id = item.id
                        let img = item.img
                        let unitInit = item.unitInit
                        let initUnit = item.initUnit
                        let offer = item.offer
                        let price = item.price
                        let ratings = item.ratings
                        let review = item.review
                        let unitUni = item.unitUni
                        let restPrice = item.restPrice
                        let itemsOthers = item.itemsOthers
                        let about = item.about
                        if (elm.id === item.id) {
                            for (let i = 0; i < maxqt.length; i++) {
                                let em = maxqt[i]
                                if (em.id === elm.id) {
                                    maxqt.splice(i, 1)
                                    i--
                                }
                            }
                            if (item.unitInit[0].name !== undefined) {
                                item.unitInit.forEach(em => {
                                    el.itemsOther.forEach(cu => {
                                        if (em.name === cu.name) {
                                            em.stock += parseFloat(elm.qt)
                                        }
                                    })
                                })
                            } else {
                                item.unitInit.forEach(em => {
                                    if (elm.baseU === 'not selected') {
                                        if (em.price === null) {
                                            em.stock += parseFloat(elm.qt)
                                        }
                                    } else {
                                        let fnn = `${em.unitNum}${em.unitU}`
                                        if (fnn.split(' ').join('') === elm.baseU.split(' ').join('')) {
                                            em.stock += parseFloat(elm.qt)
                                        }
                                    }
                                })
                            }
                            let nStk = parseFloat(item.netweight) + parseFloat(elm.qt)
                            let obj = {
                                name: name,
                                id: id,
                                unitUni: unitUni,
                                imgBanner: imgBanner,
                                base: base,
                                cook: cook,
                                about: about,
                                restPrice: restPrice,
                                itemsOthers: itemsOthers,
                                fdInside: fdInside,
                                img: img,
                                unitInit2: item.unitInit2,
                                unitInit: item.unitInit,
                                initUnit: initUnit,
                                netweight: nStk,
                                offer: offer,
                                price: price,
                                ratings: ratings,
                                review: review,
                            }
                            console.log(obj, dbCollectionM.doc(elem1.id), 'kii')
                            dbCollectionM.doc(elem1.id).set({
                                cqa: cqa,
                                item: obj,
                                maxqt: maxqt
                            }).then((msg) => console.log('added new'))
                            return
                        }
                    })

                } else if (elm.typ === 'groc') {

                    let itm = elm
                    let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${elm.catId}`)
                    let resFd = await dbCollection.get()
                    resFd.forEach(cur => {
                        let item = cur.data().item
                        if (item.id === elm.id) {
                            let qt = parseFloat(itm.qt)
                            let name = item.name
                            let offer = item.offer
                            let com = item.com
                            let price = item.price
                            let img = item.img
                            let stock = item.stock
                            let id = item.id
                            let group = item.group
                            let unit = item.unit
                            let unitInside = item.unitInside
                            let unitUniv = item.unitUniv
                            let obj

                            if (itm.unitUniv !== 'prod') {
                                //items like tomato 
                                let finalProduct

                                let unit2
                                unit2 = itm.unit

                                if (unit2.split('').includes('k')) {

                                    let unN = unit2.split('k')[0]
                                    finalProduct = parseFloat(unN) * 1000
                                    finalProduct *= qt
                                } else if (unit2.split('').includes('g')) {
                                    let unN = unit2.split('g')[0]
                                    finalProduct = parseFloat(unN)
                                    finalProduct *= qt

                                }
                                stock = parseFloat(stock)

                                stock += finalProduct
                                obj = {
                                    name: name,
                                    id: id,
                                    com: com,
                                    unit: unit,
                                    unitInside: unitInside,
                                    price: price,
                                    img: img,
                                    stock: stock,
                                    offer: offer,
                                    unitUniv: unitUniv,
                                    group: group
                                }
                                console.log(obj, 'fproduct')
                            } else {
                                //both the stock and the selectedUnit on unitIn
                                stock = parseFloat(stock)
                                unitInside.forEach(cu => {
                                    if (cu.selectedUnit === itm.selectedUnit) {
                                        cu.stock += qt
                                    }
                                })
                                stock += qt
                                obj = {
                                    name: name,
                                    id: id,
                                    com: com,
                                    unit: unit,
                                    unitInside: unitInside,
                                    price: price,
                                    img: img,
                                    stock: stock,
                                    offer: offer,
                                    unitUniv: unitUniv,
                                    group: group
                                }

                            }
                            dbCollection.doc(cur.id).set({
                                item: obj
                            })
                        }
                    })
                }
            })

            dbCollection2.doc(cur.id).set({
                obj: {
                    idM: Uid,
                    order: order,
                    time: timeE,
                    user: userE,
                    isDelivered: el.isDelivered,
                    op: el.op,

                    isAccepted: el.isAccepted,
                    canceled: true
                },
                createdAt: cur.data().createdAt
            })

        }
    })
    localStorage.removeItem('orders')



    let dbCollection = db.collection("users")
    let res = await dbCollection.get()


    if (for_acc_dt) {
        document.querySelector('.succ_cancel').style.display = 'block'
    }
    res.docs.forEach(cur => {
        let item = cur.data().data

        let cartGroc = cur.data().cartGroc
        let cartItem = cur.data().cartItem
        let likes = cur.data().likes
        let authUser = cur.data().authUser
        let rootAutyh = cur.data().rootAutyh
        let dislikes = cur.data().dislikes
        let rtr = cur.data().myratings
        let fstPurchase = cur.data().fstPurchase

        let data = cur.data().myOrders
        if (rootAutyh === JSON.parse(user).rootAutyh) {

            for (let i = 0; i < data.length; i++) {
                let cur1 = data[i]
                if (cur1.id.trim() === Uid.trim()) {
                    cur1.canceled = true

                    data.splice(i, 1, cur1)

                    dbCollection.doc(cur.id).set({
                        data: item,
                        cartGroc: cartGroc,
                        authUser: authUser,
                        rootAutyh: rootAutyh,
                        deliv: cur.data().deliv,
                        admin: cur.data().admin,
                        cartItem: cartItem,
                        likes: likes,
                        fstPurchase: fstPurchase,
                        dislikes: dislikes,
                        myOrders: data,
                        myratings: rtr
                    })

                    break
                }
            }
        }

    })
}


if (document.querySelector('.ct_bx_overlay_cart') !== null || document.querySelector('.ct_bx_overlay_cart_signup') !== null) {
    let x = window.screen.height
    if (document.querySelector('.ct_bx_signup_box_overall') !== null) {
        let x2 = document.querySelector('.ct_bx_signup_box_overall').getBoundingClientRect().height


        document.querySelectorAll('.ct_bx_overlay_cart_signup').forEach(cur => {
            cur.style.height = x2 + 'px'
        })
    }

    document.querySelectorAll('.ct_bx_overlay_cart').forEach(cur => {
        cur.style.height = x + 'px'
    })
}
if (window.screen.width <= 650) {
    if (document.querySelector('.ct_bx_person_info') !== null) {
        let w = document.querySelector('.ct_bx_person_info').getBoundingClientRect().width + 50

        document.querySelector('.ct_bx_nav_order_main li:nth-of-type(1)').style.width = w + 'px'

    }

}


if (window.screen.width <= 650) {
    if (document.querySelector('.ct_bx_person_info') !== null) {
        let w = document.querySelector('.ct_bx_person_info').getBoundingClientRect().width - 26

        document.querySelector('.ct_bx_nav_order_main li:nth-of-type(1)').style.width = w + 'px'

    }

}


if (document.querySelector('.delivery_body') !== null) {
    document.querySelector('.for_acc_ov2').style.display = 'flex'
    if (window.location.search !== '') {

        let rAuth = window.location.search.split('?')[1].split('=')[1]
        async function checkvalid() {
            let dbCollection = db.collection(`partners`)
            let res = await dbCollection.get()

            res.forEach(cur => {
                let item = cur.data()
                if (!item.admin) {
                    if (item.id !== rAuth) { window.location.replace('/') } else {
                        document.querySelector('.for_acc_ov2').style.display = 'none'
                    }
                }

            })
        }
        checkvalid()
    } else {
        window.location.replace('/')
    }
}
if (document.querySelector('.admin_page') !== null) {
    document.querySelector('.for_acc_ov2').style.display = 'flex'
    if (window.location.search !== '') {
        let rAuth = window.location.search.split('?')[1].split('=')[1]
        async function checkvalid() {
            let dbCollection = db.collection(`partners`)
            let res = await dbCollection.get()

            res.forEach(cur => {
                let item = cur.data()
                console.log(item.id, rAuth)
                if (item.admin) {
                    if (item.id !== rAuth) { window.location.replace('/') } else {
                        document.querySelector('.for_acc_ov2').style.display = 'none'
                    }
                }


            })
        }
        checkvalid()

    } else {
        window.location.replace('/')
    }
}
function setQTunits(elem) {
    let parent = elem.childNodes
    let inp = parent[3].childNodes[1].value
    inp = parseFloat(inp)
    if (inp < 5) {
        parent[3].style.paddingBottom = 19 + 'px'
        parent[3].childNodes[5].style.display = 'block'
        return
    } else {
        parent[3].style.paddingBottom = 0 + 'px'
        parent[3].childNodes[5].style.display = 'none'
    }
    // document.querySelector('.carterr p').innerText
    let baseQt = elem.parentElement.parentElement.parentElement.parentElement.childNodes
    let price = parent[5].childNodes[5].innerText
    let stkTot = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[5].innerText
    stkTot = parseFloat(stkTot)
    if (inp > stkTot) {
        inp = stkTot
        document.querySelector('.carterr').style.display = 'flex'
        document.querySelector('.carterr p').innerText = `You have reached to the maximum quantity.`
    }

    let earlyQ = baseQt[5].childNodes[1].childNodes[1].childNodes[3].innerText
    earlyQ = earlyQ.split(' ')[0]
    earlyQ = parseFloat(earlyQ)
    price = parseFloat(price)
    let earlyS = baseQt[3].innerText.split(',').join('')
    let earlyS2 = baseQt[1].innerText.split(',').join('')
    earlyS2 = parseFloat(earlyS2)
    earlyS = parseFloat(earlyS)
    baseQt[5].childNodes[1].childNodes[1].childNodes[3].innerText = inp + ' kg'
    price *= inp

    parent[5].childNodes[3].innerText = "₹ " + price.toLocaleString()
    let priceDom = elem.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[7].childNodes
    elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].innerText
    let idM = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[7].innerText
    console.log(elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[7].innerText)
    let localFd = JSON.parse(localStorage.getItem('krBusiness'))

    localStorage.setItem('krBusiness', JSON.stringify(localFd))
    if (priceDom[0].tagName === 'DEL') {
        //it has offer
        console.log(priceDom[4].innerText, '19245')

        let off = priceDom[4].innerText.split('%')[0].split('(')[1]
        off = parseFloat(off)
        console.log(earlyS, earlyS2, inp, '19245')
        let mPrice = (earlyS + earlyS2) * inp
        console.log(earlyS, earlyS2, inp, mPrice, '19245')
        let fP = mPrice - (mPrice * (off / 100))
        fP = Math.round(fP)
        priceDom[2].innerText = "₹ " + fP.toLocaleString()
        priceDom[0].innerText = "₹ " + mPrice.toLocaleString()
        localFd.forEach(cur => {
            if (cur.id === idM) {
                cur.unit = inp + ' kg'
                cur.price = String(mPrice)

            }
            localStorage.setItem('krBusiness', JSON.stringify(localFd))
        })

    } else {
        let mPrice = (earlyS + earlyS2) * inp
        priceDom[0].innerText = "₹ " + mPrice.toLocaleString()
        localFd.forEach(cur => {
            if (cur.id === idM) {
                cur.unit = inp + ' kg'
                cur.price = String(mPrice)

            }
            localStorage.setItem('krBusiness', JSON.stringify(localFd))
        })
    }


    document.querySelectorAll('.ct_bx_units_item ul').forEach(c => {
        c.style.width = '150px'
        c.style.display = 'none'

        c.classList.remove('add_c_un')
        c.style.maxHeight = '160px'
    })

    document.querySelectorAll('.ct_bx_units_item .ct_bx_show_units_krick').forEach(c => {
        c.style.display = 'block'
    })
    document.querySelectorAll('.ct_bx_units_item .ct_bx_show_units_krick.for_set').forEach(c => {
        c.style.display = 'none'
    })
    addBill()
}
document.querySelector('html').addEventListener('click', (e) => {
    let applyCsusUnit = e.target.closest('.apply_btn_set_un')
    if (applyCsusUnit !== null) {
        setQTunits(applyCsusUnit.parentElement.parentElement)
    }
})
window.onkeydown = (e) => {
    if (e.keyCode === 13) {
        if (e.path[1].classList.value.split(' ').includes('ct_inner_setunit')) {
            setQTunits(e.path[1].parentElement)
        }
    }
}
// function selectCCart(forb) {
//     console.log(forb, '13fcsd')
//     if (forb) {
//         document.querySelector('.bx_kr_business_cart_item').style.display = 'block'
//         document.querySelector('.bx_evt_cart_item').style.display = 'none'
//     } else {
//         document.querySelector('.bx_kr_business_cart_item').style.display = 'none'
//         document.querySelector('.bx_evt_cart_item').style.display = 'block'
//     }
//     document.querySelector('.selected_field').classList.add('unselected_field')
//     document.querySelector('.selected_field').classList.remove('selected_field')

// }

// if (document.querySelector('.body_cart') !== null) {

//     if (JSON.parse(localStorage.getItem('foodsAdded')).length === 0) {
//         selectCCart(true)
//         document.querySelector('.cart_itm_ov_b').classList.remove('unselected_field')
//         document.querySelector('.cart_itm_ov_b').classList.add('selected_field')
//     }
// }
// if (window.location.href.split('#').includes("orderbussiness")) {
//     let krFd = JSON.parse(localStorage.getItem('krBusiness'))
//     if (krFd !== null) {
//         if (krFd.length !== 0) {
//             selectCCart(true)
//             document.querySelector('.cart_itm_ov_b').classList.remove('unselected_field')
//             document.querySelector('.cart_itm_ov_b').classList.add('selected_field')
//         }
//     }

// }
document.querySelector('html').addEventListener('keyup', (e) => {
    let krAinp = e.target.closest('.krAdm_inp')
    if (krAinp !== null) {

        document.querySelectorAll('.Openned_inp').forEach(cur => {
            cur.style.display = 'none'
            cur.classList.remove('Openned_inp')

        })

        krAinp.parentElement.childNodes[3].classList.add('Openned_inp')
        console.log(krAinp.parentElement.childNodes[3].style.display = 'block')
    }
})
function checkChar(letter, limit = 10) {
    if (letter.length <= limit) {
        return letter
    } else if (letter.length > limit) {
        letter = letter.split('').slice(0, limit).join('')
        letter = `${letter}..`
        return letter
    }
}
document.querySelector('html').addEventListener('click', (e) => {
    let e1 = e.target.closest('.ct_bx_verifcation_order button:nth-of-type(1)')
    let e12 = e.target.closest('.ct_bx_verifcation_order button:nth-of-type(2)')
    let itmStk = e.target.closest('.ct_ibnner_li_fd')
    let info = e.target.closest('.ct_bx_info_mob_order')
    let orderFd = e.target.closest('.ct_upper_layer_fd')
    let admHem = e.target.closest('.ct_bx_show_nav_adm')
    let showInfo = e.target.closest('.date_time_order pre')
    let canBtnO = e.target.closest('.cancel_order_btn')
    let remRegis = e.target.closest('.ct_bx_remove_succ_regis')
    let cancelOrderD = e.target.closest('.cancel_order')
    let setstockKr = e.target.closest('.ct_button_change_un_stk')
    let stkDashli = e.target.closest('.ct_box_select_unitIn li')
    let btnSignup = e.target.closest('.sign_UP_btn a')
    let cancelCsusUnit = e.target.closest('.cancel_btn_set_un')
    let addCkr = e.target.closest('.Addtocartkrick')
    let goTcart = e.target.closest('.gotocartkr')
    let krAinp = e.target.closest('.krAdm_inp')
    let saveBtnAdm = e.target.closest('.saveBtn_items_dash')
    let showme_others = e.target.closest('.showme_others')
    let saveOther = e.target.closest('.main_save_otherbtn')
    let saveUnits = e.target.closest('.main_save_unitbtn')
    let otherDitm = e.target.closest('.ct_bx_other_dash li')
    let showReviews = e.target.closest('.ct_bx_btn_show_rev')
    let closeReviews = e.target.closest('.closeReview')
    let closeInfoCart = e.target.closest('.ct_bx_remove_info')
    let slectCustomG = e.target.closest('.ct_list_custom li')
    let btnAddgCuss = e.target.closest('.ct_bx_btn_add_this_item')
    let showCustCart = e.target.closest('.ct_bx_show_customize_cart')
    let customOverflow = e.target.closest('.ct_overflow_customize')
    let closeX = e.target.closest('.ct_bx_remove_custom')
    let setUnitsAdm = e.target.closest('.viewunits_dash')
    let showUnitsAdm = e.target.closest('.ct_box_selected_unit_dash')
    let closeCustom = e.target.closest('.close_cusproduct')
    let selectUnitDash = e.target.closest('.ct_box_select_unit_dash li')

    if (showUnitsAdm !== null) {
        if (showUnitsAdm.parentElement.childNodes[3].classList.value.split(' ').includes('nottog')) {
            showUnitsAdm.parentElement.childNodes[3].classList.add('tog')
            showUnitsAdm.parentElement.childNodes[3].classList.remove('nottog')
            showUnitsAdm.parentElement.childNodes[3].style.display = 'block'
        } else {
            showUnitsAdm.parentElement.childNodes[3].classList.add('nottog')
            showUnitsAdm.parentElement.childNodes[3].classList.remove('tog')
            showUnitsAdm.parentElement.childNodes[3].style.display = 'none'
        }

    } else {
        if (document.querySelector('.ct_bx_on_add_c_unit .tog') !== null) {
            document.querySelector('.ct_bx_on_add_c_unit .tog').style.display = 'none'
            document.querySelector('.ct_bx_on_add_c_unit .tog').classList.add('nottog')
            document.querySelector('.ct_bx_on_add_c_unit .tog').classList.remove('tog')
        }
    }

    if (selectUnitDash !== null) {
        let unit = selectUnitDash.childNodes[3].innerText
        selectUnitDash.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].innerText = unit
    }

    if (setUnitsAdm !== null) {
        let id = setUnitsAdm.parentElement.parentElement.childNodes[1].innerText
        let CId = setUnitsAdm.parentElement.parentElement.childNodes[3].innerText
        setUnitsAdm.parentElement.childNodes[1].style.display = 'block'
    }
    if (closeCustom !== null) {
        if (document.querySelector('.ct_bx_customize_product') !== null) {
            document.querySelector('.ct_bx_customize_product').style.display = 'none'

        }
        document.querySelector('.ct_overflow_customize').style.display = 'none'
        if (document.querySelector('.show_units_cust') !== null) { document.querySelector('.show_units_cust').classList.remove('show_units_cust') }
    }

    if (closeX !== null) {
        document.querySelector('.ct_overflow_customize').style.display = 'none'
        document.querySelector('.ct_bx_items_order_details').style.display = 'none'

    }
    if (customOverflow !== null) {
        customOverflow.style.display = 'none'
        if (document.querySelector('.ct_bx_customize_product') !== null) {
            document.querySelector('.ct_bx_customize_product').style.display = 'none'
        }
        if (document.querySelector('.ct_bx_items_order_details') !== null) { document.querySelector('.ct_bx_items_order_details').style.display = 'none' }

        if (document.querySelector('.show_units_cust') !== null) { document.querySelector('.show_units_cust').classList.remove('show_units_cust') }

    }
    if (showCustCart !== null) {
        let parent = showCustCart.parentElement.parentElement.childNodes
        let id = parent[13].innerText
        document.querySelector('.ct_overflow_customize').style.display = 'block'
        document.querySelector('.ct_bx_customize_product').style.display = 'flex'
        let locGrocCus = JSON.parse(localStorage.getItem('cusItemforgroc'))
        let grocLoc = JSON.parse(localStorage.getItem('grocFoodListCart'))
        let cH = ``
        document.querySelector('.ct_bx_select_type_prod').style.display = 'block'
        document.querySelector('.ct_set_quantity_custom').style.display = 'none'

        let off = null
        locGrocCus.map(cur => {
            if (cur.id === id) {
                for (let i; i < cur.custom.length; i++) {
                    if (cur.custom[i].innerUnits === null) {
                        if (parseFloat(cur.custom[i].stock) !== 0) {
                            //19902
                            document.querySelector('.ct_bx_btn_add_this_item p').innerText
                        }
                    }
                }
                grocLoc.forEach(cur11 => {
                    if (cur11.id === id) {
                        if (off !== null) {
                            off = cur.off

                        } else {
                            off = null
                        }
                    }
                })
                cH = cur.custom.map(cm => {
                    let innUn = cm.innerUnits
                    let stock = 0
                    let haveInside = false
                    if (innUn !== null) {
                        haveInside = true
                        innUn.forEach(cu => {
                            let stk = parseFloat(cu.stock)
                            stock += stk
                        })
                    } else { stock = parseFloat(cm.stock) }
                    let nameCus = cm.name
                    let priceCus = cm.price
                    if (priceCus !== undefined) {
                        if (off !== null) {
                            priceCus = parseFloat(priceCus)
                            priceCus = priceCus - (priceCus * (off / 100))
                            priceCus = Math.round(priceCus)
                            priceBox = `<span> <del>₹${cm.price} </del> <pr> ₹${priceCus}  </pr></span>`
                        } else {
                            priceBox = `<span><del style='display:none'></del> <pr style='margin-left: 0;'> ₹${priceCus}  </pr></span>`

                        }

                    } else { priceBox = `<span><pr>See available options.</pr></span>` }
                    let hm = ``
                    let insideHm = ``
                    let classInside = ``
                    if (haveInside) {
                        classInside = 'inside_custom'
                        insideHm = `<ion-icon name="chevron-forward-outline"></ion-icon>`
                    }
                    console.log(stock, '12900asbjd')
                    if (stock === 0) {

                        hm = `<li class='no_stock_customize ${classInside}' style="pointer-events: none;
                 ">
                 <div class="ct_inner_bx">
                 <p>${nameCus}</p>
                 ${priceBox}
                 <span>not available</span>
                 </div>
             ${insideHm}

            </li>`
                    } else {
                        hm = `<li class='${classInside}''>
                    <div class="ct_inner_bx">
                    <p>${nameCus}</p>
                    ${priceBox}
                    <span class='hidden'>not available</span>
                    </div>
                    ${insideHm}

                </li>`
                    }

                    document.querySelector('.ct_bx_customize_product .id_g').innerText = id
                    return hm

                })
            }
        })
        document.querySelector('.ct_bx_select_type_prod ul').innerHTML = cH.join('')

    }
    if (btnAddgCuss !== null) {

        if (btnAddgCuss.classList.value.includes('add_now_btn_c2') && !btnAddgCuss.classList.value.includes('continue_btn_c2') && !btnAddgCuss.classList.value.includes('show_units_cust')) {
            let name = document.querySelector('.selected_custom_prod').childNodes[1].childNodes[1].innerText
            let price = document.querySelector('.selected_custom_prod').childNodes[1].childNodes[3].childNodes[1].innerText
            if (document.querySelector('.selected_custom_prod').childNodes[1].childNodes[3].childNodes[1].innerText === undefined) {
                price = document.querySelector('.selected_custom_prod').childNodes[1].childNodes[3].childNodes[2].innerText

            }

            price = parseFloat(price.split('₹')[1].split(',').join(''))
            let id = document.querySelector('.selected_custom_prod').parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText
            console.log(name, document.querySelector('.selected_custom_prod').childNodes, '1200zls')
            let pMain = price.toLocaleString()
            let grocLoc = JSON.parse(localStorage.getItem('grocFoodListCart'))

            if (document.querySelector('.body_cart') === null) {
                document.querySelectorAll('.hasCustom').forEach(cur => {
                    document.querySelectorAll('.hasCustom').forEach(cur => {
                        let idDom = cur.parentElement.parentElement.childNodes[3].innerText
                        console.log(cur.parentElement.parentElement.childNodes)
                        let off = cur.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[3]
                        if (off !== undefined) {
                            off = off.childNodes[1].split('%')[0]
                            off = parseFloat(off)
                            pMain = price - (price * (off / 100))
                            pMain = Math.round(pMain)
                            pMain = pMain.toLocaleString()
                            if (id === idDom) {
                                cur.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[0].innerText = '₹ ' + price.toLocaleString()
                                cur.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[1].innerText = '₹ ' + pMain
                            }
                        } else {
                            document.querySelectorAll('.hasCustom').forEach(cur => {
                                let idDom = cur.parentElement.parentElement.childNodes[3].innerText
                                if (id === idDom) {
                                    cur.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[0].innerText = '₹ ' + price.toLocaleString()
                                }
                            })
                        }
                        cur.parentElement.parentElement.childNodes[5].childNodes[5].innerText = name
                        cur.parentElement.parentElement.childNodes[5].childNodes[13].style.display = 'none'
                        cur.parentElement.parentElement.childNodes[5].childNodes[15].style.display = 'block'
                        cur.parentElement.parentElement.parentElement.classList.add('added_itm_ek_fd')

                    })
                })
                foodObjGrocery.custom = true
                foodObjGrocery.selectedPrice = String(price)
                if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                    localStorage.setItem('grocFoodListCart', JSON.stringify([foodObjGrocery]))

                } else {
                    let FdLst;
                    FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                    FdLst.push(foodObjGrocery)
                    localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                }
            } else {
                let unit = ``
                JSON.parse(localStorage.getItem('cusItemforgroc')).forEach(em => {
                    if (em.id === id) {
                        em.custom.forEach(elm => {
                            if (elm.name.split(' ').join('') === name.split(' ').join('')) {
                                unit = elm.unit
                            }
                        })
                    }
                })
                document.querySelectorAll('.main_li_cart_fd_lis.groc_bx').forEach(cur => {
                    let idM = cur.childNodes[1].childNodes[3].childNodes[13].innerText
                    let mainDom = cur.childNodes[1].childNodes[3].childNodes[11].childNodes
                    if (idM === id) {
                        cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[1].innerText = `${name} ${unit}`
                        let qtvalue = cur.childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].value
                        qtvalue = parseFloat(qtvalue)
                        let priceMain = price * qtvalue
                        grocLoc.forEach(em => {
                            if (em.id === id) {
                                let stkHave = cur.childNodes[5].innerText
                                let toCh = 0
                                if (unit.split('').includes('k')) {
                                    toCh = unit.split('k')[0]
                                    toCh = parseFloat(toCh)
                                    toCh *= 1000

                                } else if (unit.split('').includes('g')) {
                                    toCh = unit.split('g')[0]
                                    toCh = parseFloat(toCh)
                                }

                                let newStk = stkHave / toCh
                                newStk = String(newStk)
                                newStk = parseFloat(newStk.split('.')[0])
                                console.log(newStk, unit, '19900s')

                                if (newStk < qtvalue) {
                                    em.qt = newStk
                                    cur.childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].value = newStk
                                }
                                priceMain = price * parseFloat(em.qt)
                                if (mainDom[4].innerText !== undefined) {
                                    let off = mainDom[4].innerText
                                    off = off.split('%')[0]
                                    off = parseFloat(off)
                                    pMain = priceMain - (priceMain * (off / 100))
                                    let pMain2 = price - (price * (off / 100))
                                    pMain2 = Math.round(pMain2)
                                    pMain2 = pMain2.toLocaleString()
                                    pMain = Math.round(pMain)
                                    pMain = pMain.toLocaleString()
                                    mainDom[2].innerText = '₹ ' + pMain
                                    mainDom[0].innerText = '₹ ' + priceMain.toLocaleString()
                                    cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + pMain2
                                } else {
                                    mainDom[2].innerText = '₹ ' + priceMain.toLocaleString()
                                    cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + price.toLocaleString()

                                }
                                cur.childNodes[3].innerText = newStk

                            }
                        })
                        localStorage.setItem('grocFoodListCart', JSON.stringify(grocLoc))

                    }

                })
                grocLoc.forEach(elm => {
                    if (elm.id === id) {
                        elm.selectedPrice = price
                        elm.priceDel = price
                        elm.price = price
                        elm.selectedUnit = unit
                        elm.unit = name
                    }
                })
                localStorage.setItem('grocFoodListCart', JSON.stringify(grocLoc))
                addBill()
            }



            document.querySelector('.ct_overflow_customize').style.display = 'none'
            document.querySelector('.ct_bx_customize_product').style.display = 'none'



        } else {
            let pMain
            let off = null
            let name = ``
            if (document.querySelector('.selected_custom_prod2') !== null) {
                name = document.querySelector('.selected_custom_prod2').childNodes[1].childNodes[1].innerText
            }

            let name2 = document.querySelector('.selected_custom_prod').childNodes[1].childNodes[1].innerText

            let price = ``
            if (document.querySelector('.selected_custom_prod2') !== null) {
                price = document.querySelector('.selected_custom_prod2').childNodes[1].childNodes[3].innerText
                price = parseFloat(price.split('₹')[1].split(',').join(''))

            }
            let grocLoc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            let id = document.querySelector('.selected_custom_prod').parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText
            let custLoc = JSON.parse(localStorage.getItem('cusItemforgroc'))
            custLoc.forEach(cur => {
                if (cur.id === id) {
                    if (document.querySelector('.body_cart') === null) {
                        document.querySelectorAll('.hasCustom').forEach(curN => {
                            let idDom = curN.parentElement.parentElement.childNodes[3].innerText
                            if (id === idDom) {
                                if (curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[3] !== undefined) {
                                    off = curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[3].childNodes[1].innerText.split('%')[0]
                                    off = parseFloat(off)
                                }
                            }
                        })
                    } else {
                        document.querySelectorAll('.main_li_cart_fd_lis.groc_bx').forEach(cur => {
                            let idM = cur.childNodes[1].childNodes[3].childNodes[13].innerText
                            let mainDom = cur.childNodes[1].childNodes[3].childNodes[11].childNodes
                            if (idM === id) {
                                if (mainDom[4].innerText !== undefined) {
                                    off = off.split('%')[0]

                                } else {
                                    off = null
                                }
                            }

                        })
                    }
                    if (btnAddgCuss.classList.value.includes('show_units_cust')) {
                        if (document.querySelector('.body_cart') === null) {

                            document.querySelectorAll('.hasCustom').forEach(curN => {
                                let idDom = curN.parentElement.parentElement.childNodes[3].innerText
                                if (id === idDom) {
                                    if (curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[3] !== undefined) {
                                        pMain = price - (price * (off / 100))
                                        pMain = Math.round(pMain)
                                        cur.selectedUnit = name
                                        foodObjGrocery.selectedPrice = pMain
                                        foodObjGrocery.price = pMain
                                        foodObjGrocery.priceDel = price
                                        curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[0].innerText = '₹ ' + price
                                        curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[1].innerText = '₹ ' + pMain
                                    } else {
                                        foodObjGrocery.selectedPrice = price
                                        foodObjGrocery.price = price
                                        foodObjGrocery.priceDel = price
                                        curN.parentElement.parentElement.childNodes[5].childNodes[7].childNodes[1].childNodes[0].innerText = '₹ ' + price
                                    }
                                    foodObjGrocery.selectedUnit = name
                                    foodObjGrocery.unit = name2
                                    curN.parentElement.parentElement.childNodes[5].childNodes[5].innerText = name2 + ' ' + name
                                }
                            })
                        } else {
                            document.querySelectorAll('.main_li_cart_fd_lis.groc_bx').forEach(cur => {
                                let idM = cur.childNodes[1].childNodes[3].childNodes[13].innerText
                                let mainDom = cur.childNodes[1].childNodes[3].childNodes[11].childNodes
                                if (idM === id) {
                                    let qtvalue = cur.childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].value
                                    qtvalue = parseFloat(qtvalue)
                                    cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[1].innerText = name2 + ' ' + name
                                    // if (mainDom[4].innerText !== undefined) {
                                    //     off = off.split('%')[0]
                                    //     off = parseFloat(off)
                                    //     pMain = price - (price * (off / 100))
                                    //     pMain = Math.round(pMain)
                                    //     pMain = pMain.toLocaleString()
                                    //     mainDom[2].innerText = '₹ ' + pMain
                                    //     mainDom[0].innerText = '₹ ' + price.toLocaleString()
                                    //     cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + pMain
                                    // } else {
                                    //     mainDom[2].innerText = '₹ ' + price.toLocaleString()
                                    //     cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + price.toLocaleString()

                                    // }

                                    grocLoc.forEach(em => {
                                        if (em.id === id) {
                                            let stkHave = cur.childNodes[5].innerText
                                            let toCh = 0
                                            if (name.split('').includes('k')) {
                                                toCh = name.split('k')[0]
                                                toCh = parseFloat(toCh)
                                                toCh *= 1000

                                            } else if (name.split('').includes('g')) {
                                                toCh = name.split('g')[0]
                                                toCh = parseFloat(toCh)
                                            }

                                            let newStk = stkHave / toCh
                                            newStk = String(newStk)
                                            newStk = parseFloat(newStk.split('.')[0])
                                            if (newStk < qtvalue) {
                                                em.qt = newStk
                                                cur.childNodes[1].childNodes[3].childNodes[9].childNodes[1].childNodes[3].value = newStk
                                            }
                                            let priceMain = price * parseFloat(em.qt)

                                            if (mainDom[4].innerText !== undefined) {
                                                let off = mainDom[4].innerText
                                                off = off.split('%')[0]
                                                off = parseFloat(off)
                                                pMain = priceMain - (priceMain * (off / 100))
                                                let pMain2 = price - (price * (off / 100))
                                                pMain2 = Math.round(pMain2)
                                                pMain2 = pMain2.toLocaleString()
                                                pMain = Math.round(pMain)
                                                pMain = pMain.toLocaleString()
                                                mainDom[2].innerText = '₹ ' + pMain
                                                mainDom[0].innerText = '₹ ' + priceMain.toLocaleString()
                                                cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + pMain2
                                            } else {
                                                mainDom[2].innerText = '₹ ' + priceMain.toLocaleString()
                                                cur.childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].childNodes[3].innerText = '₹ ' + price.toLocaleString()

                                            }
                                            cur.childNodes[3].innerText = newStk

                                        }
                                    })
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(grocLoc))
                                }

                            })
                            addBill()

                        }

                    }
                    cur.custom.forEach(cu => {
                        let fName = name2.split(' ').join('').toLowerCase()
                        if (cu.name.split(' ').join('').toLowerCase() === fName) {
                            let innerHtmDom = cu.innerUnits.map((elm => {
                                let hm
                                let priceCus = elm.price
                                if (priceCus !== undefined) {
                                    if (off !== null) {
                                        priceCus = parseFloat(priceCus)
                                        priceCus = priceCus - (priceCus * (off / 100))
                                        priceCus = Math.round(priceCus)
                                        priceBox = `<span> <del>₹${elm.price} </del> <pr> ₹${priceCus}  </pr></span>`
                                    } else {
                                        priceBox = `<span><del style='display:none'></del> <pr style='margin-left: 0;'> ₹${priceCus}  </pr></span>`

                                    }

                                } else { priceBox = `<span><pr>See available options.</pr></span>` }
                                if (parseFloat(elm.stock) !== 0) {
                                    hm = `<li>
                                <div class="ct_inner_bx">

                                <p>${elm.name}</p>
                                ${priceBox}
                                <span class='hidden'>not available</span>
</div>
                                </li>`
                                } else {
                                    hm = `<li class='no_stock_customize' style='pointer-events: none;'>
                                <div class="ct_inner_bx">
                                <p>${elm.name}</p>
                                ${priceBox}
                                <span >not available</span>
                                </div>
                              

                                </li>`
                                }
                                return hm
                            }))
                            if (!btnAddgCuss.classList.value.includes('show_units_cust')) {
                                document.querySelector('.ct_bx_btn_add_this_item').classList.add('show_units_cust')
                                document.querySelector('.ct_main_cust_bx h4').style.display = 'block'
                                document.querySelector('.ct_bx_select_type_prod').style.display = 'none'
                                document.querySelector('.ct_set_quantity_custom').style.display = 'block'
                                document.querySelector('.ct_set_quantity_custom ul').innerHTML = innerHtmDom.join('')
                            } else {
                                document.querySelector('.ct_overflow_customize').style.display = 'none'
                                document.querySelector('.ct_bx_customize_product').style.display = 'none'
                                document.querySelector('.show_units_cust').classList.remove('show_units_cust')
                                document.querySelectorAll('.hasCustom').forEach(cur => {
                                    let idDom = cur.parentElement.parentElement.childNodes[3].innerText
                                    let elemMain = cur.parentElement.parentElement.childNodes[5].childNodes

                                    if (id === idDom) {
                                        elemMain[13].style.display = 'none'
                                        elemMain[15].style.display = 'block'
                                        cur.parentElement.parentElement.parentElement.classList.add('added_itm_ek_fd')

                                    }
                                })
                                if (document.querySelector('.body_cart') === null) {

                                    foodObjGrocery.custom = true
                                    if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                        localStorage.setItem('grocFoodListCart', JSON.stringify([foodObjGrocery]))

                                    } else {
                                        let FdLst;
                                        FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                        FdLst.push(foodObjGrocery)
                                        localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                                    }
                                } else {
                                    grocLoc.forEach(cu => {
                                        if (cu.id === id) {
                                            cu.selectedUnit = name
                                            if (off !== null) {
                                                cu.selectedPrice = pMain

                                            } else {
                                                cu.selectedPrice = price
                                                cu.price = price

                                            }

                                        }
                                        cu.unit = name2

                                    })
                                    localStorage.setItem('grocFoodListCart', JSON.stringify(grocLoc))
                                }
                            }


                        }
                    })
                }
            })

        }

    }
    if (slectCustomG !== null) {
        if (slectCustomG.parentElement.parentElement.parentElement.parentElement.childNodes[9].classList.value.split(' ').includes('show_units_cust')) {
            if (document.querySelector('.selected_custom_prod2') !== null) {
                document.querySelector('.selected_custom_prod2').classList.remove('selected_custom_prod2')

            }
            slectCustomG.classList.add('selected_custom_prod2')
        } else {
            if (document.querySelector('.selected_custom_prod') !== null) {
                document.querySelector('.selected_custom_prod').classList.remove('selected_custom_prod')

            }
            slectCustomG.classList.add('selected_custom_prod')
        }

        let name = slectCustomG.childNodes[1].childNodes[1].innerText
        let price = ``
        if (slectCustomG.childNodes[1].childNodes[3].childNodes[3] !== undefined) {
            price = slectCustomG.childNodes[1].childNodes[3].childNodes[3].innerText
        } else {
            if (slectCustomG.childNodes[1].childNodes[3].childNodes[2] !== undefined) {
                price = slectCustomG.childNodes[1].childNodes[3].childNodes[2].innerText
            }
        }
        let id = slectCustomG.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText
        let custLoc = JSON.parse(localStorage.getItem('cusItemforgroc'))
        let hasInner = false
        custLoc.forEach(cur => {
            if (cur.id === id) {
                cur.custom.forEach(cu => {
                    console.log(cu.name, name, '12oshhs')
                    if (cu.name.split(' ').join('') === name.split(' ').join('')) {
                        if (cu.innerUnits !== null) {
                            hasInner = true
                        }
                    }
                })

            }
        })
        if (hasInner) {
            if (!document.querySelector('.ct_bx_btn_add_this_item').classList.value.split(' ').includes('continue_btn_c2')) {

                document.querySelector('.ct_bx_btn_add_this_item').classList.add('continue_btn_c2')
                document.querySelector('.ct_bx_btn_add_this_item').classList.remove('add_now_btn_c2')
            }

        } else {
            if (!document.querySelector('.ct_bx_btn_add_this_item').classList.value.split(' ').includes('add_now_btn_c2')) {
                document.querySelector('.ct_bx_btn_add_this_item').classList.remove('continue_btn_c2')
                document.querySelector('.ct_bx_btn_add_this_item').classList.add('add_now_btn_c2')
            }
            document.querySelector('.ct_bx_btn_add_this_item .add_now_dt span').innerText = price
        }
    }
    if (closeInfoCart !== null) {
        if (window.screen.width <= 800) {
            let dv = window.getComputedStyle(document.querySelector('.ek_cart')).marginTop
            dv = parseFloat(dv) + 20
            document.querySelector('.ek_cart').style.marginTop = dv + 'px'
        }
        document.querySelector('.ct_bx_information_cart').style.display = 'none'
    }
    if (closeReviews !== null) {
        document.querySelector('.ct_bx_btn_show_rev').style.display = 'flex'
        document.querySelector('.for_submit_form_rev').style.display = 'none'
        document.querySelector('.closeReview ').style.display = 'none'
        document.querySelectorAll('.openBoxrev').forEach(cur => {
            cur.classList.remove('openBoxrev')
            cur.classList.add('ct_bx_hideandshow_revbox')
        })

    }
    if (showReviews !== null) {
        showReviews.style.display = 'none'

        document.querySelectorAll('.ct_bx_hideandshow_revbox').forEach(cur => {
            cur.classList.add('openBoxrev')
            cur.classList.remove('ct_bx_hideandshow_revbox')
        })

    }
    if (saveUnits !== null) {
        let cId = saveUnits.parentElement.parentElement.parentElement.parentElement.childNodes[3].innerText
        let id = saveUnits.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText
        let parent = saveUnits.parentElement.parentElement.childNodes
        let unitTxt = parent[3].childNodes[1].childNodes[3].childNodes[1].innerText
        let nameDom1 = parent[3].childNodes[1].childNodes[1].value
        let priceDom = parent[5].value
        let indx = parent[7].value
        let indxM = parent[9].innerText
        async function setKr() {
            document.querySelector('.for_acc_ov2').style.display = 'flex'
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cId}`)
            let res = await dbCollection.get()
            res.docs.forEach(cur => {
                let el = cur.data().item
                if (el.id === id) {


                    const cook = el.cook
                    let name = el.name
                    const imgBanner = el.imgBanner
                    const fdInside = el.fdInside
                    const base = el.base
                    const id = el.id
                    const img = el.img
                    let offer = el.offer
                    let price = el.price
                    const ratings = el.ratings
                    const about = el.about
                    const initUnit = el.initUnit
                    let itemsOthers = el.itemsOthers
                    let restPrice = el.restPrice
                    const video = el.video
                    let unitInit = el.unitInit
                    const unitUni = el.unitUni
                    const reviews = el.review
                    let netweight = el.netweight
                    if (indxM === 'add') {
                        let lenUn = unitInit.length
                        let obj = { unitNum: nameDom1, price: priceDom, unitU: unitTxt.toLowerCase(), count: lenUn, stock: indx }
                        unitInit.push(obj)

                    } else {
                        unitInit[indxM].price = priceDom
                        unitInit[indxM].unitU = unitTxt
                        unitInit[indxM].stock = indx
                        unitInit[indxM].unitNum = nameDom1
                    }
                    let obj = {
                        id: id,
                        imgBanner: imgBanner,
                        about: about,
                        unitInit: unitInit,
                        unitUni: unitUni,
                        initUnit: initUnit,
                        netweight: netweight,
                        name: name,
                        price: price,
                        base: base,
                        offer: offer,
                        itemsOthers: itemsOthers,
                        restPrice: restPrice,
                        cook: cook,
                        img: img,
                        video:video,
                        review: reviews,
                        ratings: ratings,
                        fdInside: fdInside
                    }
                    dbCollection.doc(cur.id).set({
                        cqa: cur.data().cqa,
                        item: obj

                    }).then(c => {
                        document.querySelector('.for_acc_ov2').style.display = 'none'
                        alert('Successfully Saved.')
                    }).catch(err => {
                        alert('Error! while updating.Please try again')

                    })
                }
            })


        }
        setKr()
    }

    if (saveOther !== null) {
        console.log(saveOther.parentElement.parentElement.parentElement.parentElement.childNodes)
        let cId = saveOther.parentElement.parentElement.parentElement.parentElement.childNodes[3].innerText
        let id = saveOther.parentElement.parentElement.parentElement.parentElement.childNodes[1].innerText
        let parent = saveOther.parentElement.parentElement.childNodes
        let nameDom = parent[3].childNodes[1].value
        let priceDom = parent[5].value
        let indx = parent[7].innerText
        async function setKr() {
            document.querySelector('.for_acc_ov2').style.display = 'flex'
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cId}`)
            let res = await dbCollection.get()
            res.docs.forEach(cur => {
                let el = cur.data().item
                if (el.id === id) {


                    const cook = el.cook
                    let name = el.name
                    const imgBanner = el.imgBanner
                    const fdInside = el.fdInside
                    const base = el.base
                    const id = el.id
                    const img = el.img
                    let offer = el.offer
                    let price = el.price
                    const ratings = el.ratings
                    const about = el.about
                    const initUnit = el.initUnit
                    let itemsOthers = el.itemsOthers
                    let restPrice = el.restPrice
                    const video=el.video
                    const unitInit = el.unitInit
                    const unitUni = el.unitUni
                    const reviews = el.review
                    let netweight = el.netweight
                    // let totOtherp = 0
                    // itemsOthers.forEach(em => {
                    //     let pr = parseFloat(em.price)
                    //     totOtherp += pr
                    // })
                    // restPrice=parseFloat(restPrice)
                    // restPrice-=totOtherp
                    // let totOtherp2 = 0
                    if (indx === 'add') {
                        itemsOthers.push({ name: nameDom, price: priceDom })
                    } else {
                        indx = parseFloat(indx)

                        itemsOthers[indx].name = nameDom
                        itemsOthers[indx].price = priceDom

                    }
                    // itemsOthers.forEach(em => {
                    //     let pr = parseFloat(em.price)
                    //     totOtherp2 += pr
                    // })
                    // restPrice+=totOtherp2

                    let obj = {
                        id: id,
                        imgBanner: imgBanner,
                        about: about,
                        unitInit: unitInit,
                        unitUni: unitUni,
                        initUnit: initUnit,
                        netweight: netweight,
                        name: name,
                        price: price,
                        base: base,
                        offer: offer,
                        itemsOthers: itemsOthers,
                        restPrice: restPrice,
                        cook: cook,
                        img: img,
                        video:video,
                        review: reviews,
                        ratings: ratings,
                        fdInside: fdInside
                    }
                    dbCollection.doc(cur.id).set({
                        cqa: cur.data().cqa,
                        item: obj

                    }).then(c => {
                        document.querySelector('.for_acc_ov2').style.display = 'none'
                        alert('Successfully Saved.')
                    }).catch(err => {
                        alert('Error! while updating.Please try again')

                    })
                }
            })


        }
        setKr()

    }
    if (otherDitm !== null) {
        if (otherDitm.classList.value === 'AddAunit') {
            let parent = otherDitm.parentElement.parentElement.parentElement.childNodes[3]
            parent.style.display = 'block'
            parent.childNodes[7].innerText = 'add'
            if (e.target.closest('.select_units_dash')) {
                parent.childNodes[9].innerText = 'add'
            }
        } else {
            let name = otherDitm.childNodes[1].innerText
            let price = otherDitm.childNodes[3].innerText.split('₹')[1]
            let indx = otherDitm.childNodes[5].innerText
            indx = parseFloat(indx)
            let parent = otherDitm.parentElement.parentElement.parentElement.childNodes[3]
            parent.style.display = 'block'
            parent.childNodes[5].value = price
            parent.childNodes[3].childNodes[1].value = name
            parent.childNodes[7].innerText = indx
            if (e.target.closest('.select_units_dash')) {
                let nm
                let nmUn
                if (name.split('').includes('k')) {
                    nm = name.split('k')[0]
                    nmUn = 'kg'

                } else {
                    nm = name.split('g')[0]
                    nmUn = 'g'
                }
                parent.childNodes[3].childNodes[1].childNodes[3].childNodes[1].childNodes[1].innerText = nmUn
                parent.childNodes[3].childNodes[1].childNodes[1].value = nm
                parent.childNodes[7].value = indx
                parent.childNodes[9].innerText = otherDitm.childNodes[7].innerText


            }


        }


    }

    if (showme_others !== null) {
        showme_others.parentElement.childNodes[1].style.display = 'block'
        console.log(showme_others.parentElement.childNodes)
    } else if (e.target.closest('.ct_bx_on_add_c_unit') === null && e.target.closest('.viewunits_dash') === null && e.target.closest('.ct_bx_other_dash') === null || e.target.closest('.main_cancel_otherbtn') !== null || e.target.closest('.main_save_otherbtn') !== null) {
        document.querySelectorAll('.ct_bx_on_add_c_unit').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.ct_bx_other_dash').forEach(cur => {
            cur.style.display = 'none'
        })
    }
    if (saveBtnAdm !== null) {
        let inp = saveBtnAdm.parentElement.childNodes[1].value
        let setFor = saveBtnAdm.parentElement.childNodes[1].classList.value.split(' ')[1]
        let id = saveBtnAdm.parentElement.parentElement.childNodes[1].innerText
        let cId = saveBtnAdm.parentElement.parentElement.childNodes[3].innerText
        console.log(setFor)
        async function setKr() {
            document.querySelector('.for_acc_ov2').style.display = 'flex'
            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cId}`)
            let res = await dbCollection.get()
            res.docs.forEach(cur => {
                let el = cur.data().item
                if (el.id === id) {


                    const cook = el.cook
                    let name = el.name
                    const imgBanner = el.imgBanner
                    let fdInside = el.fdInside
                    const base = el.base
                    const id = el.id
                    const img = el.img
                    let offer = el.offer
                    let price = el.price
                    const ratings = el.ratings
                    const about = el.about
                    const initUnit = el.initUnit
                    const itemsOthers = el.itemsOthers
                    const restPrice = el.restPrice
                    const video=el.video
                    const unitInit = el.unitInit
                    const unitUni = el.unitUni
                    const reviews = el.review
                    let netweight = el.netweight
                    console.log(setFor)
                    if (setFor === 'name') {
                        name = inp
                    } else if (setFor === 'price') {
                        price = inp

                    } else if (setFor === 'offer') {
                        offer = inp

                    } else if (setFor === 'stock_inp') {
                        netweight = inp

                    } else if (setFor === 'tastemaker') {
                        let hasT = false
                        fdInside.forEach(em => {
                            if (em.name === 'Taste makers') {
                                hasT = true
                                em.price = inp
                            }
                        })
                        if (!hasT) {
                            let obj = {
                                name: 'Taste makers',
                                price: inp,
                                about: 'Tastemakers are masala made up of  specialy selected herbs to create a great taste for krick foods',

                            }
                            fdInside.push(obj)
                        }

                    } else if (setFor === 'sauce') {
                        fdInside.forEach(em => {
                            if (em.name === 'Curry Sauce') {
                                em.price = inp
                            }
                        })
                    }
                    let obj = {
                        id: id,
                        imgBanner: imgBanner,
                        about: about,
                        unitInit: unitInit,
                        unitUni: unitUni,
                        initUnit: initUnit,
                        netweight: netweight,
                        name: name,
                        price: price,
                        base: base,
                        offer: offer,
                        itemsOthers: itemsOthers,
                        restPrice: restPrice,
                        cook: cook,
                        img: img,
                        video:video,
                        review: reviews,
                        ratings: ratings,
                        fdInside: fdInside
                    }
                    dbCollection.doc(cur.id).set({
                        cqa: cur.data().cqa,
                        item: obj

                    }).then(c => {
                        document.querySelector('.for_acc_ov2').style.display = 'none'
                        alert('Successfully Saved.')
                    }).catch(err => {
                        alert('Error! while updating.Please try again')

                    })
                }
            })


        }
        if (inp !== '') { setKr() }
    }
    if (krAinp === null && saveBtnAdm === null) {

        // if(Openned_inp)
        document.querySelectorAll('.Openned_inp').forEach(cur => {
            cur.style.display = 'none'
            cur.classList.remove('Openned_inp')

        })
    }
    if (goTcart !== null) {
        window.location.replace('/mycart')
    }


    if (addCkr !== null) {
        let parent = addCkr.parentElement.parentElement.childNodes
        let idM
        let iUn
        let cId
        if (parent[1].classList.value === 'main_im') {
            parent = addCkr.parentElement.parentElement.parentElement.childNodes
            idM = parent[1].innerText
            iUn = parent[3].innerText
            cId = parent[5].innerText

        } else {
            idM = parent[1].innerText
            iUn = parent[3].innerText
            cId = parent[5].innerText

        }
        addCkr.parentElement.childNodes.forEach(cur => {
            if (cur.classList !== undefined) {
                if (cur.classList.value === 'gotocartkr') {
                    cur.style.display = 'flex'
                }
            }
        })
        let obj = [{ id: idM, unit: iUn, qt: 1, cId: cId }]

        if (JSON.parse(localStorage.getItem('krBusiness')).length > 0) {
            let allKr = JSON.parse(localStorage.getItem('krBusiness'))
            allKr.push({ id: idM, unit: iUn, qt: 1, cId: cId })
            localStorage.setItem('krBusiness', JSON.stringify(allKr))

        } else {
            localStorage.setItem('krBusiness', JSON.stringify(obj))

        }
        addCkr.style.display = 'none'

    }
    if (cancelCsusUnit !== null) {
        cancelCsusUnit.parentElement.parentElement.parentElement.style.width = '150px'
        cancelCsusUnit.parentElement.parentElement.parentElement.style.maxHeight = '160px'
        cancelCsusUnit.parentElement.parentElement.parentElement.childNodes[5].style.display = 'none'

        cancelCsusUnit.parentElement.parentElement.parentElement.childNodes[3].style.display = 'block'
        cancelCsusUnit.parentElement.parentElement.parentElement.classList.remove('add_c_un')

    }


    if (go_back !== null) {
        window.history.back()
    }
    if (stkDashli !== null) {
        let liStk = stkDashli.childNodes[3].innerText
        stkDashli.parentElement.parentElement.parentElement.childNodes[1].childNodes[3].innerText = stkDashli.childNodes[1].innerText
        stkDashli.parentElement.parentElement.parentElement.childNodes[11].value = liStk
    }
    if (setstockKr !== null) {
        let elem = setstockKr.parentElement.childNodes[3]
        if (elem.classList.value.split(' ').includes('nottog')) {
            elem.classList.add('tog')
            elem.classList.remove('nottog')
            setstockKr.parentElement.childNodes[3].style.display = 'block'
        } else {
            setstockKr.parentElement.childNodes[3].style.display = 'none'

            elem.classList.add('nottog')
            elem.classList.remove('tog')
        }
    } else {
        if (document.querySelector('.tog.ct_box_select_unitIn') !== null) {

            document.querySelector('.tog.ct_box_select_unitIn').classList.add('nottog')
            document.querySelector('.tog.ct_box_select_unitIn').style.display = 'none'
            document.querySelector('.tog.ct_box_select_unitIn').classList.remove('tog')

        }
    }
  
    
    if (remRegis !== null) {
        document.querySelector('.ct_msg_succ_reg_rating').style.display = 'none'


    }
    if (canBtnO !== null) {
        // canBtnO.parentElement.childNodes[1].childNodes[3].childNodes[3].classList.add('pending')
        // canBtnO.parentElement.childNodes[1].childNodes[3].childNodes[3].classList.remove('sucess')
        // canBtnO.parentElement.childNodes[1].childNodes[3].childNodes[3].innerText = 'You canceled this order'
        let idM = canBtnO.parentElement.childNodes[5].innerText.trim()
        canBtnO.parentElement.childNodes[3].childNodes[9].style.display = 'none'
        canBtnO.parentElement.childNodes[3].childNodes[7].innerText = 'You canceled this order'
        if (canBtnO.parentElement.childNodes[3].childNodes[11].classList.value !== 'ct_bx_info_mob_order') {
            canBtnO.parentElement.childNodes[3].childNodes[11].style.display = 'none'

        }
        canBtnO.style.display = 'none'
        document.querySelector('.for_acc_dt .yt-loader').style.display = 'block'
        document.querySelector('.ct_overfow_for_load').style.display = 'block'
        cancelOrderFinal(idM)
    }
    if (orderFd !== null) {
        if (orderFd.classList.value.split(' ').includes('nottog')) {
            orderFd.classList.add('tog')
            orderFd.classList.remove('nottog')
            orderFd.parentElement.childNodes[3].style.display = 'block'
        } else {
            orderFd.parentElement.childNodes[3].style.display = 'none'
            orderFd.classList.remove('tog')
            orderFd.classList.add('nottog')
        }
    }

    if (admHem !== null) {
        console.log('toggling12234', document.querySelector('.ct_bx_list_adm'))

        if (document.querySelector('.ct_bx_list_adm').classList.value.split(' ').includes('nottog')) {
            document.querySelector('.ct_bx_list_adm').style.display = 'block';
            document.querySelector('.ct_bx_list_adm').classList.add('tog');
            console.log('toggling', document.querySelector('.ct_bx_list_adm'));
            document.querySelector('.ct_bx_list_adm').classList.remove('nottog');
        } else {
            document.querySelector('.ct_bx_list_adm').style.display = 'none';
            document.querySelector('.ct_bx_list_adm').classList.add('nottog');
            document.querySelector('.ct_bx_list_adm').classList.remove('tog');
            console.log('nottoggling');
        }
    } else {
        if (document.querySelector('.ct_bx_list_adm.tog')) {
            document.querySelector('.ct_bx_list_adm').style.display = 'none'
            document.querySelector('.ct_bx_list_adm').classList.add('nottog')
            document.querySelector('.ct_bx_list_adm').classList.remove('tog')
        }
    }

    if (info !== null) {
        if (window.screen.width <= 400) {
            document.querySelector('.ct_bx_show_mobile_order_dt .ct_bx_items_order_details').style.display = 'block'
            document.querySelector('.ct_overflow_customize').style.display = 'block'
            document.querySelector('.ct_bx_show_mobile_order_dt .ct_bx_items_order_details').innerHTML = info.parentElement.parentElement.childNodes[1].innerHTML + `<div class="ct_bx_remove_custom close_order_dt">
            <ion-icon name="close-outline"></ion-icon>
        </div>`


            return

        }
        if (info.parentElement.parentElement.childNodes[1].classList.value.split(' ').includes('nottog22')) {
            info.parentElement.parentElement.childNodes[1].classList.remove('nottog22')
            info.parentElement.parentElement.childNodes[1].classList.add('tog22')
            info.parentElement.parentElement.childNodes[1].style.display = 'block'

        } else {
            info.parentElement.parentElement.childNodes[1].classList.remove('tog22')
            info.parentElement.parentElement.childNodes[1].classList.add('nottog22')
            info.parentElement.parentElement.childNodes[1].style.display = 'none'
            document.querySelector('.ct_overflow_customize').style.display = 'none'
            document.querySelector('.ct_bx_show_mobile_order_dt .ct_bx_items_order_details').style.display = 'none'
        }
    } else {
        if (document.querySelector('.tog22') !== null && document.querySelector('.ct_bx_info_mob_order') !== null && e.target.closest('.ct_bx_items_order_details') === null || e.target.closest('.close_order_dt') !== null) {
            document.querySelector('.tog22').classList.add('nottog22')
            document.querySelector('.ct_bx_show_mobile_order_dt .ct_bx_items_order_details').style.display = 'none'
            document.querySelector('.ct_overflow_customize').style.display = 'none'
            document.querySelector('.tog22').style.display = 'none'
            document.querySelector('.tog22').classList.remove('tog22')
        }
    }
    if (showInfo !== null) {
        if (showInfo.parentElement.classList.value.split(' ').includes('nottog')) {
            showInfo.parentElement.classList.remove('nottog')
            showInfo.parentElement.classList.add('tog')
            showInfo.parentElement.childNodes[5].style.display = 'block'
        } else {
            showInfo.parentElement.classList.remove('tog')
            showInfo.parentElement.classList.add('nottog')
            showInfo.parentElement.childNodes[5].style.display = 'none'
        }
    } else {
        if (document.querySelector('.date_time_order.tog') !== null) {
            document.querySelector('.date_time_order.tog .ct_bx_deliv_to').style.display = 'none'
            document.querySelector('.date_time_order.tog').classList.add('nottog')

            document.querySelector('.date_time_order.tog').classList.remove('tog')
        }
    }

    if (itmStk !== null) {
        console.log(itmStk.parentElement.classList, itmStk.parentElement.classList.value.split(' ').includes('nottog'))
        if (document.querySelector('.itm_selected .ct_inner_inner_man_stk') !== null) {
            document.querySelectorAll('.itm_selected').forEach(cur => {
                cur.classList.add('nottog')
            })
            document.querySelectorAll('.itm_selected .ct_inner_inner_man_stk').forEach(cur => {
                cur.style.display = 'none'
            })
            document.querySelectorAll('.itm_selected').forEach((cur) => {
                cur.classList.remove('itm_selected')
            })
            return
        }
        console.log('tst12')

        if (itmStk.parentElement.classList.value.split(' ').includes('nottog')) {
            itmStk.parentElement.classList.remove('nottog')
            itmStk.parentElement.classList.add('itm_selected')

            if (itmStk.parentElement.childNodes[5] !== undefined) {
                itmStk.parentElement.childNodes[5].style.display = 'block'
            } else {
                itmStk.parentElement.childNodes[3].style.display = 'block'

            }
        } else {
            console.log(itmStk.parentElement.childNodes)
            itmStk.parentElement.classList.add('nottog')
            itmStk.parentElement.classList.remove('itm_selected')
            if (itmStk.parentElement.childNodes[5] !== undefined) {
                itmStk.parentElement.childNodes[5].style.display = 'none'
            } else {
                itmStk.parentElement.childNodes[3].style.display = 'none'

            }
        }
    } else {
        if (e.target.closest('.ct_inner_inner_man_stk') === null) {

            if (document.querySelector('.itm_selected .ct_inner_inner_man_stk') !== null) {
                document.querySelector('.itm_selected').classList.add('nottog')


                document.querySelector('.itm_selected .ct_inner_inner_man_stk').style.display = 'none'
                document.querySelector('.itm_selected').classList.remove('itm_selected')
            }
        }
    }

    if (e.target.closest('.accept_order') !== null) {
        // document.querySelectorAll('.accept_order').forEach(cur => {
        //     cur.style['pointer-events'] = 'none'
        //     cur.style.opacity = .4

        // })
        if (document.querySelector('.delivery_body') !== null) {
            socket.emit('acceptedOrAdm1')

        } else {
            socket.emit('acceptedOr')

        }
        document.querySelector('.ct_bx_overlay_cart').style.display = 'flex'
        console.log(e.target.parentElement.parentElement.childNodes)
        let idOrd
        e.target.parentElement.parentElement.childNodes.forEach(cur => {
            if (cur.classList !== undefined) {
                if (cur.classList.value === 'ct_bx_verifcation_order') {
                    idOrd = cur.childNodes[5].innerText
                }
            }
        })
        let phoneNumber = e.target.closest('.accept_order').parentElement.parentElement.parentElement.childNodes[3].childNodes[3].childNodes[3].childNodes[5].childNodes[3].innerText
        let name = e.target.closest('.accept_order').parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText
        let amount = e.target.closest('.accept_order').parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[5].innerText.split('₹')[1]
        console.log(name, phoneNumber, amount)
        socket.emit('deliveryOnwaySms', name, phoneNumber, amount)

        const setUser = async () => {
            let dbCollection = db.collection(`orders`)
            let res = await dbCollection.get()
            res.docs.forEach(cur => {
                let obj1 = cur.data().obj
                if (obj1.idM === idOrd) {
                    let uObj = JSON.parse(getCookie('user'))
                    let fN = uObj.n + ' ' + uObj.ln
                    let d = new Date()
                    let hours = d.getHours()

                    let typ = hours >= 12 ? 'pm' : "am"
                    let timeH = parseFloat(d.toLocaleString().split(',')[1].split(':')[0])
                    let timeMin = parseFloat(d.toLocaleString().split(',')[1].split(':')[1])
                    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    let date = d.getDate() + " " + month[d.getMonth()] + ` , ${timeH}:${timeMin} ${typ}`
                    let canceled = obj1.canceled
                    let idM = obj1.idM
                    let isAccepted = obj1.isAccepted
                    let isDelivered = obj1.isDelivered
                    let op = obj1.op
                    let order = obj1.order
                    let time = obj1.time
                    let user = obj1.user
                    isAccepted = {

                        id: uObj.rootAutyh,
                        name: fN,
                        t: date,
                    }
                    let obj = {
                        canceled: false,
                        idM: idM,
                        isAccepted: isAccepted,
                        isDelivered: isDelivered,
                        op: op,
                        order: order,
                        time: time,
                        user: user,
                    }
                    dbCollection.doc(cur.id).set({
                        obj,
                        createdAt: cur.data().createdAt

                    }).then(() => {
                        document.querySelector('.ct_bx_overlay_cart').style.display = 'none'
                    })
                }
            })
        }
        setUser()

        e.target.parentElement.parentElement.childNodes.forEach(cur => {
            if (cur.classList !== undefined) {
                if (cur.classList.value === 'ct_bx_verifcation_order') {
                    cur.style.display = 'block'

                } else {
                    cur.style.display = 'none'

                }
            }
        })
    }
})
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

if (document.querySelector('.body_cart') !== null) {

    if (getCookie('user') !== '') {

        let getuser = JSON.parse(getCookie('user'))
        let namefull = `${getuser.n} ${getuser.ln}`
        let amT = document.querySelector('.to_pay_cahge span c').innerText
        let phonec = parseFloat(getuser.ct)
        let address = getuser.ad

        document.querySelector('.for_cart_checkout').addEventListener('click', () => {
            setTimeout(() => {

                let secret
                let priceBox = []
                document.querySelector('.yt-loader').style.display = 'block'
                document.querySelector('.ct_overfow_for_load').style.display = 'block'
                let fd1 = JSON.parse(localStorage.getItem('foodsAdded'))
                let fd2 = JSON.parse(localStorage.getItem('grocFoodListCart'))
                fd2.forEach(cu => {

                    cu.selectedPrice = String(cu.selectedPrice)
                    if (cu.off !== null) {
                        let p
                        if (cu.selectedPrice.split('₹')[1] !== undefined) {
                            p = cu.selectedPrice.split('₹')[1].split(',').join('')
                        } else {
                            p = cu.selectedPrice
                        }
                        p = parseFloat(p)
                        p *= parseFloat(cu.qt)
                        let off = parseFloat(cu.off)
                        p = p - (p * (off / 100))
                        p = Math.round(p)
                        priceBox.push(p)

                    } else {
                        let p
                        if (cu.selectedPrice.split('₹')[1] !== undefined) {
                            p = cu.selectedPrice.split('₹')[1].split(',').join('')
                        } else {
                            p = cu.selectedPrice
                        }
                        p = parseFloat(p)
                        p *= parseFloat(cu.qt)
                        priceBox.push(p)
                    }
                })

                fd1.forEach(cu => {
                    let p = cu.price.split('₹')[1].split(',').join('')
                    p = parseFloat(p)
                    priceBox.push(p)
                })
                let tot = 0
                priceBox.forEach(cu => {
                    tot += cu
                })
                tot += 150
                tot = tot.toLocaleString()

                socket.emit('newOrderClient', phonec, namefull, tot)
                socket.on('newOrderClient2', (unique) => {
                    secret = unique
                    var header = {
                        "alg": "HS256",
                        "typ": "JWT"
                    };

                    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
                    var encodedHeader = base64url(stringifiedHeader);


                    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(secret));
                    var encodedData = base64url(stringifiedData);
                    secret = encodedHeader + "." + encodedData;
                    socket.emit('newOrder')


                    document.querySelector('.body_cart').classList.add('no_req')

                    document.querySelector('.placeneworder').style.display = 'flex'


                    let dt = window.location.search.split('&')[1]
                    let fd = JSON.parse(localStorage.getItem('foodsAdded'))
                    let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                    let hasKrick = false
                    let foodsarr = []
                    let mxqtFd = []
                    let forBkr = false

                    let krFd = JSON.parse(localStorage.getItem('krBusiness'))
                    console.log(krFd, 'c9000a9')

                    if (krFd !== null) {
                        if (krFd.length !== 0) {
                            forBkr = true
                            console.log(fd, 'c9000a9')
                            fd = fd.concat(krFd)
                            console.log(fd, 'c9000a9')

                        }
                    }
                    console.log(fd, 'c9000a9')
                    fd.forEach(cur => {
                        let itm = cur
                        let name = itm.id
                        let off = itm.offer
                        let price = itm.price
                        let qt = cur.qt
                        if (price.split('₹')[1] !== undefined) {
                            price = price.split('₹')[1].split(',').join('')

                        } else {
                            price = price.split(',').join('')

                        }

                        let unit = ``
                        let selBase
                        if (cur.baseU !== undefined) {
                            unit = cur.baseU
                            selBase = unit.split(' ').join('')

                        }


                        if (cur.unitInit === null) {
                            unit = `none`
                        }
                        price = parseFloat(price)
                        qt = parseFloat(qt)
                        let priceFinal
                        if (off !== null) {
                            off = parseFloat(off)
                            priceFinal = price - (price * (off / 100))
                            priceFinal = Math.round(priceFinal)
                        } else {
                            priceFinal = price
                        }
                        console.log(priceFinal, 'c9000a9')

                        let obj = {
                            com: null,
                            name: name,
                            price: priceFinal,
                            qt: qt,
                            unit: unit,
                            forbusiness: false,
                        }
                        let cId = ``
                        if (cur.catId !== undefined) {
                            cId = cur.catId
                        } else {
                            cId = cur.cId

                        }
                        // if (cur.baseU === undefined) {
                        //     obj = {
                        //         com: null,
                        //         name: cur.name,
                        //         id: cur.id,
                        //         price: priceFinal,
                        //         qt: qt,
                        //         cId:cId,
                        //         unit: unit,
                        //         forbusiness: true,
                        //     }
                        // }
                        foodsarr.push(obj)
                        const checkName = async () => {
                            // fdSet
                            let cid
                            if (cur.catId !== undefined) {
                                cid = cur.catId

                            } else {
                                cid = cur.cId
                            }
                            let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cid}`)
                            let res = await dbCollection.get()
                            res.docs.forEach(cur1 => {

                                let item = cur1.data().item
                                name = name.split(' ').join('').toLowerCase().trim()
                                let cqa = cur1.data().cqa
                                let name2 = item.id
                                let name1 = item.name
                                let price = item.price
                                let offer = item.offer
                                let cook = item.cook
                                let id = item.id
                                let ratings = item.ratings
                                let review = item.review
                                let img = item.img
                                let fdInside = item.fdInside
                                const base = item.base
                                let imgBanner = item.imgBanner
                                let unitInit = item.unitInit
                                let initUnit = item.initUnit
                                const video=el.video
                                const itemsOthers = item.itemsOthers
                                const restPrice = item.restPrice
                                let ntwe = item.netweight

                                console.log(ntwe, 'c9000a9')


                                if (name2 === name) {
                                    let has2selection = false
                                    if (item.unitInit !== null) {
                                        if (item.unitInit[0].name !== undefined) {
                                            has2selection = true
                                        }
                                        unitInit.forEach(cu => {

                                            if (parseFloat(cur.selU2) !== 0) {

                                                let fUnn = `${cu.unitNum}${cu.unitU}`

                                                if (fUnn === selBase) {
                                                    let stk = parseFloat(cu.stock)
                                                    stk -= qt
                                                    cu.stock = stk
                                                }
                                            } else {
                                                if (cu.price === null) {
                                                    let stk = parseFloat(cu.stock)
                                                    stk -= qt
                                                    cu.stock = stk
                                                }
                                            }
                                        })
                                    }
                                    let numUnit = 1
                                    if (unit.split(' ').join('').split('').includes('k')) {
                                        numUnit = unit.split('k')[0]
                                    } else if (unit.split(' ').join('').split('').includes('g')) {
                                        numUnit = 1
                                    }
                                    if (unit.split(' ').join('') !== 'notselected') {
                                        numUnit = parseFloat(numUnit)
                                        ntwe -= (qt * numUnit)
                                    }

                                    hasKrick = true

                                    let totBuy = 0

                                    const checkMaxqt = async () => {
                                        let userId = JSON.parse(getCookie('user')).rootAutyh
                                        if (cur.baseU !== undefined) {

                                            db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cur.catId}/${cur1.id}/maxqt`).add({
                                                id: JSON.parse(getCookie('user')).rootAutyh,
                                                qt: qt,
                                            })

                                            let respm2 = await db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${cur.catId}/${cur1.id}/maxqt`).get()
                                            respm2.forEach(doc => {
                                                let itm = doc.data()

                                                console.log(itm.id, userId, 'kaib')
                                                if (itm.id === userId) {
                                                    totBuy += 1
                                                }
                                            })
                                            console.log(totBuy, 'kaibhai')

                                            if (qt >= 2 || totBuy >= 2) {
                                                mxqtFd.push(cur.id)
                                                console.log(mxqtFd, 'kaibhai')

                                            }
                                            if (mxqtFd.length > 0) {
                                                localStorage.setItem('maxqtfd', JSON.stringify(mxqtFd))
                                            }
                                        }
                                    }

                                    checkMaxqt()
                                    let obj = {
                                        id: id,
                                        imgBanner: imgBanner,
                                        about: item.about,
                                        unitInit: unitInit,
                                        unitUni: item.unitUni,
                                        initUnit: initUnit,
                                        netweight: ntwe,
                                        name: name1,
                                        price: price,
                                        base: base,
                                        offer: offer,
                                        itemsOthers: itemsOthers,
                                        restPrice: restPrice,
                                        cook: cook,
                                        img: img,
                                        review: review,
                                        video:video,
                                        ratings: ratings,
                                        fdInside: fdInside
                                    }
                                    console.log(obj)
                                    dbCollection.doc(cur1.id).set({
                                        cqa: cqa,
                                        item: obj

                                    })

                                }
                            })
                            console.log(mxqtFd, 'kaibhai')



                        }

                        checkName()
                        return

                    })
                    groc.forEach(cur => {
                        let itm = cur
                        let com = itm.com

                        let name = itm.name
                        let off = itm.off
                        let price = itm.selectedPrice
                        let qt = cur.qt
                        qt = parseFloat(qt)
                        if (price.split('₹')[1] !== undefined) {
                            price = price.split('₹')[1].split(',').join('')
                        } else {
                            price = price.split(',').join('')

                        }
                        price = parseFloat(price)
                        price = parseFloat(price)
                        price *= qt
                        qt = parseFloat(qt)
                        let priceFinal
                        if (off !== null) {
                            off = parseFloat(off)
                            priceFinal = price - (price * (off / 100))
                            priceFinal = Math.round(priceFinal)
                        } else {
                            priceFinal = price
                        }
                        let unit
                        if (cur.selectedUnit !== null) {
                            unit = cur.selectedUnit
                        } else {
                            unit = cur.unit
                        }
                        //unitcalcg
                        let toCh
                        function provideTch(l, sm = true) {
                            let numU = unit.split(l)[0]
                            numU = parseFloat(numU)
                            if (sm) {
                                numU *= 1000
                            }
                            toCh = numU
                        }
                        if (unit.split('').includes('k')) {
                            provideTch('k')
                        } else if (unit.split('').includes('m')) {
                            provideTch('m')

                        } else if (unit.split('').includes('l')) {
                            provideTch('l', false)

                        } else if (unit.split('').includes('g')) {
                            provideTch('g', false)

                        }
                        let obj = {
                            com: com,
                            name: name,
                            price: priceFinal,
                            qt: qt,
                            unit: unit,
                        }
                        foodsarr.push(obj)
                        console.log(off, com, priceFinal, qt, name, unit, toCh, 'groc')
                        const checkName = async () => {

                            let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${itm.catId}`)
                            let res = await dbCollection.get()
                            res.docs.forEach(cur1 => {

                                let item = cur1.data().item
                                if (item.id === undefined) {
                                    return
                                }
                                name = name.split(' ').join('').toLowerCase().trim()
                                let obj
                                let name1 = item.name.split(' ').join('').toLowerCase().trim()
                                if (item.id == cur.id) {


                                    let com1 = item.com
                                    let name2 = item.name
                                    let customize = item.customize

                                    let group = item.group
                                    let id = item.id
                                    let img = item.img
                                    let offer = item.offer
                                    let price = item.price
                                    let unit = item.unit
                                    let unitIn = item.unitInside
                                    let unitUniv = item.unitUniv
                                    console.log(toCh, '------------------------------------------------------------------------------------')
                                    if (item.unitUniv !== 'prod') {
                                        item.stock -= toCh * qt


                                    } else {
                                        item.stock -= qt
                                        if (unitIn !== null) {
                                            unitIn.forEach(cu => {
                                                console.log(cu.selectedUnit, cur.selectedUnit, 'slcU')
                                                if (cu.selectedUnit === cur.selectedUnit) {
                                                    cu.stock -= qt
                                                }
                                            })
                                        }
                                    }
                                    obj = {
                                        name: name2,
                                        customize: customize,
                                        unitInside: unitIn,
                                        id: id,
                                        com: com,
                                        img: img,
                                        unit: unit,
                                        offer: offer,
                                        unitUniv: unitUniv,

                                        price: price,
                                        group: group,

                                        stock: item.stock
                                    }
                                    dbCollection.doc(cur1.id).set({
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
                    foodsarr.forEach(cur => {
                        totAm.push(cur.price)
                    })
                    console.log(totAm, 'toto')
                    if (allGroc !== null) {
                        allGroc.forEach(cur => {



                            let name = cur.name
                            let id = cur.id
                            let catId = cur.catId
                            let qt = cur.qt
                            let img = cur.img
                            let price = cur.selectedPrice
                            let com
                            let unit
                            if (cur.com !== null) {
                                com = cur.com
                            } else { com = null }
                            if (cur.selectedUnit !== null) {
                                unit = cur.selectedUnit

                            } else {
                                unit = cur.unit
                            }
                            if (price.split('₹')[1] !== undefined) {
                                price = parseFloat(price.split('₹')[1].split(',').join(''))

                            } else {
                                price = parseFloat(price)

                            }
                            price = Math.round(price)

                            price *= qt
                            price = price.toLocaleString()

                            price = "₹" + price
                            let obj = {
                                img: img,
                                name: name,
                                qt: qt,
                                typ: 'groc',
                                com: com,
                                id: id,
                                itemsOther: null,
                                unit: unit,
                                catId: catId,
                                price: price,

                            }
                            arrOrders.push(obj)

                        })
                    }



                    document.querySelector('.ct_subotatal').style.paddingBottom = '0'

                    let user = getCookie('user')
                    if (user !== '') {

                        user = JSON.parse(user)
                    } else { user = null }
                    let arratOrders = []
                    let delivTommo = false
                    document.querySelector('.ct_subotatal').style.transform = ' translate(4%,20px)'
                    let addedIdOrder = []
                    var bcrypt = dcodeIO.bcrypt;
                    let hash = bcrypt.hashSync('unique', 4);
                    let d = new Date()
                    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    let date = d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear()

                    //orderdatastructure
                    let userObj = JSON.parse(getCookie('user'))
                    let add = userObj.ad
                    let n = userObj.n
                    let ph = userObj.ct
                    let hours = d.getHours()
                    let minutes = d.getMinutes()
                    let sec = d.getSeconds()
                    let prepend = hours >= 12 ? 'pm' : "am"
                    let time = moment().format("HH:mm")


                    if (JSON.parse(localStorage.getItem('foodsAdded')).length > 0 || JSON.parse(localStorage.getItem('grocFoodListCart')).length > 0) {
                        localStorage.setItem('orders', JSON.stringify({ id: hash }))

                    }
                    document.querySelector('.for_checkout_order').style.display = 'none'
                    let datNum = date.split(' ')[0]
                    let mon = date.split(' ')[1]
                    console.log(foodsarr, totAm)
                    if (window.screen.width > 470) {
                        document.querySelector('.ek_cart').style.marginTop = '33px'

                    }
                    if (window.screen.width <= 470) {
                        document.querySelector('.ek_cart').style.marginTop = '83px'

                    }



                    const addOrder = async () => {
                        let dbCollection = db.collection("orders")
                        document.querySelector('.orderId').innerText = hash

                        document.querySelector('.nOp').innerText = secret

                        let dbCollectionMa = db.collection("users")
                        let res12 = await dbCollectionMa.get()
                        let idUser = JSON.parse(getCookie('user')).rootAutyh
                        let hasFst = false
                        res12.docs.forEach(cu => {
                            let dat = cu.data()
                            if (idUser === dat.rootAutyh) {
                                hasFst = dat.fstPurchase
                            }

                        })
                        let freePur = false
                        let alreadyFree = false
                        if (allfd !== null) {
                            allfd.forEach(async cur => {
                                let data = cur

                                if (alreadyFree) {
                                    hasFst = false
                                }
                                let name = data.name
                                let id = cur.id
                                let catId = cur.catId
                                let price = cur.price

                                let qt = parseFloat(cur.qt)
                                let unit = cur.itemUnit
                                let img = data.img
                                let isfree = false
                                if (cur.permGroup !== undefined) {
                                    cur.permGroup.forEach(cu => {
                                        if (cu.price === 'Free') {
                                            isfree = true
                                            alreadyFree = true
                                        }
                                    })
                                }
                                //isfree is used for checking which item is free and hasFst is used for checking if the user has free purchase set to true.
                                if (hasFst & isfree) {
                                    freePur = true
                                }
                                if (price.split('₹')[1] !== undefined) {
                                    price = parseFloat(price.split('₹')[1].split(',').join(''))

                                } else {
                                    price = parseFloat(price)

                                }

                                let priceF
                                if (cur.offer !== null && cur.offer !== 'null') {
                                    let off = parseFloat(cur.offer)

                                    priceF = price - (price * (off / 100))
                                } else {
                                    priceF = price

                                }
                                if (freePur) {
                                    let pDetails = JSON.parse(getCookie('user'))
                                    pDetails.fstPurchase = false
                                    document.cookie = "user" + "=" + JSON.stringify(pDetails) + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/" + ' ';

                                }
                                priceF = Math.round(priceF)
                                priceF = priceF.toLocaleString()

                                priceF = "₹" + priceF
                                if (cur.baseU2 === undefined) { cur.baseU2 = null }
                                if (cur.unit === undefined) {
                                    cur.baseU = ``
                                }
                                let obj = {
                                    img: img,
                                    name: name,
                                    qt: qt,
                                    typ: 'fd',
                                    id: id,
                                    itemsOther: cur.itemsOthers,
                                    baseU: cur.baseU,
                                    baseU2: cur.baseU2,
                                    fstpurchase: freePur,
                                    catId: catId,
                                    price: priceF,
                                    forbusiness: false,

                                }
                                console.log(obj, '2391')

                                arrOrders.push(obj)

                            })
                        }
                        foodsarr.forEach(cur => {
                            console.log(cur, '900qasdhisd')
                            if (cur.unit === undefined) {
                                cur.unit = ``
                            }
                            if (cur.forbusiness) {
                                let obj = {
                                    name: cur.name,
                                    qt: cur.qt,
                                    typ: 'fd',
                                    id: cur.id,
                                    itemsOther: null,
                                    baseU: cur.unit,
                                    baseU2: null,
                                    fstpurchase: false,
                                    catId: cur.cId,
                                    price: "₹ " + String(cur.price),
                                    forbusiness: true,


                                }
                                arrOrders.push(obj)
                            }
                        })
                        console.log(arrOrders, '900qasdhisd')

                        let obj = {
                            time: { date: datNum, time: time, mon: mon },
                            order: arrOrders,
                            idM: hash,
                            isAccepted: false,
                            user: user,
                            canceled: false,
                            isDelivered: false,
                            op: secret,
                        }
                        let obj1 = {
                            isDelivered: false,
                            isTom: delivTommo,
                            date: date,
                            time: time,
                            address: add,
                            phone: ph,
                            pName: checkChar(userObj.n + ' ' + userObj.ln, 20),
                            id: hash,
                            orders: arrOrders,
                            canceled: false,
                            confirmed: false,
                            amount: totAm,
                        }
                        await dbCollection.add({
                            obj,
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        }).then(() => { console.log('order added.') })

                        let arr = obj1

                        let dbCollection2 = db.collection("users")
                        let res = await dbCollection2.get()
                        document.querySelector('.yt-loader').style.display = 'none'
                        document.querySelector('.ct_overfow_for_load').style.display = 'none'
                        let dN = moment().format('hh:mm A');
                        let hours = parseFloat(moment().format("HH:mm").split(':')[0])
                        let prepend = hours >= 12 ? 'pm' : "am"
                        let typ = prepend.toUpperCase()
                        let timeH = parseFloat(moment().format("HH:mm").split(':')[0])
                        let timeMin = parseFloat(dN.split(':')[1])
                        let hourT
                        let totTime
                        let setMin
                        let noLt = true
                        //setDelivMintime


                        let dtF = new Date().toLocaleDateString()
                        let dNum = dtF.split('/')[1]
                        let dNum2 = dtF.split('/')[0]
                        let dNum3 = dtF.split('/')[2]
                        user.n = user.n.replace(/\b\w/g, l => l.toUpperCase())
                        user.ln = user.ln.replace(/\b\w/g, l => l.toUpperCase())

                        console.log(hours, timeMin, timeH, 'timeOr')


                        if (hours >= 21 && timeMin >= 15) {
                            document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed.Please use the OTP that has been sent to you for verifying this delivery.Our all delivery service
                                        closes after 9:30 pm,so your order wil be delivered on tommorow,with in 10 am.
                                        </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`

                            noLt = false
                        } else if (hours < 21 && prepend === 'pm') {
                            document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed.Please use the OTP that has been sent to you for verifying this delivery.Our all delivery service
    closes after 9:30 pm,so your order wil be delivered on tommorow,with in 10 am.
    </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`

                            noLt = false
                        } else {
                            document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed,your order wil be delivered within today.Please use the OTP that has been sent to you for verifying this delivery.
    </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`
                        }
                        // if (typ === 'PM') {

                        //     if (timeH >= 8) {
                        //         if (timeMin >= 45 && timeH === 9) {
                        //             document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed.Please use the OTP that has been sent to you for verifying this delivery.Our all delivery service
                        //                 closes after 9:30 pm,so your order wil be delivered on tommorow,with in 10 am.
                        //                 </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`

                        //             noLt = false
                        //         } else {
                        //             document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed.Please use the OTP that has been sent to you for verifying this delivery.Our all delivery service
                        //                 closes after 9:30 pm,so your order wil be delivered on tommorow,with in 10 am.
                        //                 </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`

                        //             noLt = false
                        //         }
                        //     }
                        // } else {
                        //     if (timeH < 8) {
                        //         document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed.Please use the OTP that has been sent to you for verifying this delivery.Our all delivery service
                        //             closes after 9:30 pm,so your order wil be delivered on today with in 10 am.
                        //             </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`
                        //         noLt = false

                        //     }
                        // }
                        // if (noLt) {
                        //     document.querySelector('.for_erak_cart p').innerHTML = `Hello ${user.n} ${user.ln} your order has been successfully placed,your order wil be delivered within today.Please use the OTP that has been sent to you for verifying this delivery.
                        //     </span>We  will call back soon on this number <span>+91 ${user.ct}</span>.`
                        // }
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
                            let fstPurchase = d.data().fstPurchase
                            if (fstPurchase === undefined) { fstPurchase = 'Not free' }
                            console.log(orders.length, rootAutyh, arr, fstPurchase, '2544')

                            if (d.data().rootAutyh === user.rootAutyh) {

                                if (hasKrick) {
                                    fstPurchase = false
                                }

                                if (orders.length === 0) {
                                    console.log(orders, arr, d.id, 'kaioo')
                                    dbCollection2.doc(d.id).set({
                                        data: item,
                                        cartGroc: cartGroc,
                                        authUser: authUser,
                                        rootAutyh: rootAutyh,
                                        deliv: d.data().deliv,
                                        admin: d.data().admin,
                                        cartItem: cartItem,
                                        likes: likes,
                                        dislikes: dislikes,
                                        myOrders: [arr],
                                        fstPurchase: fstPurchase,
                                        myratings: rtr
                                    })
                                }

                                else {

                                    orders.push(arr)
                                    if (item.admin === true) {
                                        item.admin = true
                                        item.deliv = false

                                    } else if (item.deliv === true) {
                                        item.deliv = true
                                        item.admin = false

                                    } else {
                                        item.deliv = false
                                        item.admin = false
                                    }
                                    dbCollection2.doc(d.id).set({
                                        data: item,
                                        cartGroc: cartGroc,
                                        authUser: authUser,
                                        rootAutyh: rootAutyh,
                                        deliv: item.deliv,
                                        admin: item.admin,
                                        cartItem: cartItem,
                                        likes: likes,
                                        dislikes: dislikes,
                                        fstPurchase: fstPurchase,
                                        myOrders: orders,
                                        myratings: rtr
                                    })



                                }

                            }
                        })



                    }
                    addOrder()
                })
            }, 400);

        })
    }

}
console.log(JSON.parse(localStorage.getItem('foodsAdded')), 'firstall')
if (document.querySelector('.body_cart') !== null) {
    if (JSON.parse(localStorage.getItem('orders')) !== null) {
        document.querySelector('.ct_subotatal').style.paddingBottom = '0px'


    }
}

function checkItm(type, el, command, iitm = '0') {
    if (type === 'groc') {
        let loc = JSON.parse(localStorage.getItem('grocFoodListCart'))
        loc.forEach((cur, i) => {

            if (el.com !== undefined && el.com !== null) {
                let com = cur.com.split('').join('').toLowerCase()
                let com1 = el.com.split('').join('').toLowerCase()
                if (com1 === com) {
                    let locN = cur.name.split('').join('').toLowerCase()
                    let n = el.name.split('').join('').toLowerCase()
                    if (n === locN) {
                        if (command === 'set') {
                            cur.qt = iitm
                            localStorage.setItem('grocFoodListCart', JSON.stringify(loc))
                        } else if (command === 'remove') {
                            loc.splice(i, 1)
                            localStorage.setItem('grocFoodListCart', JSON.stringify(loc))

                        }
                    }
                }
            } else {
                let locN = cur.name.split('').join('').toLowerCase()
                let n = el.name.split('').join('').toLowerCase()
                if (n === locN) {
                    if (command === 'set') {
                        cur.qt = iitm
                        localStorage.setItem('grocFoodListCart', JSON.stringify(loc))
                    } else if (command === 'remove') {
                        loc.splice(i, 1)
                        if (loc.length === 0) {
                        }
                        localStorage.setItem('grocFoodListCart', JSON.stringify(loc))

                    }
                }
            }


        })



    }
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (e) {
            console.log(e)
        })
    }
}
getLocation()
let remM = document.querySelector('.ct_bx_remove_stk_msg')
if (remM !== null) {
    remM.addEventListener('click', () => {

        document.querySelector('.ct_error_stock.for_ek_fd').style.display = 'none'
    })
}



function is_touch_enabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

if (is_touch_enabled()) {
    if (document.querySelector('.ct_bx_buttons_actions') !== null) {
        document.querySelectorAll('.ct_bx_buttons_actions').forEach(cur => {
            cur.style.display = 'none'
        })
        if (window.screen.width > 920) {
            document.querySelector('.inner_slide').style.paddingLeft = '20px'
        }
        document.querySelector('.crousel').style.width = '100%'
        document.querySelector('.crousel').style.marginLeft = '0px'


        document.querySelector('.inner_slide').style.width = '100%'

    }

}

if (document.querySelector('.authInp') !== null) {
    let user = getCookie('user')
    user = JSON.parse(user)
    console.log(user)
    document.querySelector('.authInp').value = user.authUser
}


if (document.querySelector('.body_cart') !== null) {
    if (window.screen.width < 400) {
        document.querySelector('.block_2_charge, .block_1_charge span').style.fontSize = '12px'

        document.querySelector('.list_itm_sub_cart span').style.fontSize = '12px'
        document.querySelectorAll('.ct_bx_all_groc_required .main_img_groc_itm').forEach(cur => {
            cur.style.minHeight = '120px'
            cur.style.width = '120px'

        })
    }
}

if (localStorage.length === 0) {
    localStorage.setItem('foodsAdded', "[]")
    localStorage.setItem('grocFoodListCart', "[]")
}



if (document.querySelector('.for_seravh_in_nav input') !== null) {
    document.querySelectorAll('.for_seravh_in_nav input').forEach(cur => {
        cur.addEventListener('input', () => {
            if (cur.value === '') {
                document.querySelectorAll('.xclose_icon').forEach(cur => {
                    cur.style.display = 'none'
                })
            }
        })
    })
}

let parsedData = false

let search = window.location.search
if (window.screen.width <= 600 && window.screen.width > 500) {

    document.querySelectorAll('.ct_itm_food_cart h4').forEach(cur => {
        cur.style.fontSize = '16px'
    })
    if (document.querySelector('.ct_bx_ratings_info a span .not_filed_rating_itm, .ct_bx_ratings span .not_filed_rating_itm') !== null) {
        document.querySelectorAll('.ct_bx_ratings_info a span .not_filed_rating_itm, .ct_bx_ratings span .not_filed_rating_itm').forEach(cur => {
            cur.style.fontSize = '17px'
        })
    }

    document.querySelectorAll('.ct_bx_ratings_info a span .filed_rating_itm, .ct_bx_ratings span .filed_rating_itm').forEach(cur => { cur.style.fontSize = '17px' })
    //gr

    document.querySelectorAll('.ct_filed_selct_qt_un').forEach(cur => { cur.style.width = '330px' })

}

let aOrders = JSON.parse(localStorage.getItem('orders'))
if (document.querySelector('.body_cart')) {

    if (aOrders !== null) {
        document.querySelector('.bx_evt_cart_item').style.filter = 'grayscale(1)'
        document.querySelector('.bx_evt_cart_item').style.filter = 'grayscale(1)'
        document.querySelector('.bx_evt_cart_item').style['pointer-events'] = 'none'

        document.querySelector('.bx_evt_cart_item').style['pointer-events'] = 'none'



        document.querySelector('.ct_bx_flex_sub_list').style.paaingBottom = '70px'

        // document.querySelector('.ct_verif_bx').style.display = 'none'
    }
    if (window.screen.width <= 600) {

        document.querySelectorAll('.ct_loading_bx2 .ct_for_img_load, .ct_loading_bx .ct_for_img_load').forEach(cur => {
            cur.style.width = '445px'
        })

    }
}

if (document.querySelector('.ct_remove_err2') !== null) {
    document.querySelector('.ct_remove_err2').addEventListener('click', () => {
        if (window.screen.width <= 1200) {
            let floatX = -(window.screen.width + 100)
            document.querySelector('.ct_error_stock.for_items').animate({ left: floatX })
        } else {
            document.querySelector('.ct_error_stock.for_items').css('display', 'none')
        }
    })

}



if (window.screen.width < 500) {


    if (document.querySelector('.body_cart') !== null) {


        document.querySelectorAll('.for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '180%'
        })
        document.querySelectorAll('.ct_bx_grocery_required  .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '100%'
        })

    }
    if (document.querySelector('.for_main_nav_login') !== null) {
        document.querySelector('.for_main_nav_login').style.marginTop = '5px'

    }


    if (document.querySelector('.body_cart') !== null) {
        if (document.querySelector('.for_ek_cartNav .for_main_nav_login') !== null) {
            document.querySelector('.for_ek_cartNav .for_main_nav_login').style.marginTop = '25px'
        }
        document.querySelectorAll('.ct_bx_buttons_actions').forEach(cur => {
            cur.style.width = '16%'
        })



    }
    if (document.querySelector('.pincode label') !== null) {

    }



}

if (window.screen.width < 450) {


    document.querySelectorAll('.for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
        cur.style.width = '240%'
    })


    document.querySelectorAll('.for_groc_itm .relative_width1').forEach(cur => {
        cur.style.width = '33%'
    })


}
if (window.screen.width <= 360) {
    document.querySelectorAll('.ct_for_price_load').forEach(cur => {
        cur.style.width = '70px'
    })


    document.querySelectorAll('.ct_loading_bx .ct_for_p_load').forEach(cur => {
        cur.style.width = '120px'
        cur.style.height = '19px'

    })
}
if (window.screen.width <= 450) {

    if (document.querySelector('.ct_bx_select_qt_final .relative_width1') !== null) {
        document.querySelector('.ct_bx_select_qt_final .relative_width1').style.width = '24%'
        document.querySelector('.forward_acc').style.width = 'translate(250px,-80px)'
        document.querySelector('.for_nav_main .acc_set_main_nav').style.transform = 'translate(-60px,0px)'
    }
    if (document.querySelector('.for_login_only_cart') !== null) {

        document.querySelector('.for_login_only_cart').style.padding = '5px 6px 5px 23px'

        document.querySelector('.to_pay_cahge1').classList.add('to_pay_cahge2')
        document.querySelector('.to_pay_cahge1').classList.remove('to_pay_cahge1')
        document.querySelector('.btn_sign_up_cart').style.padding = '5px 6px 5px 23px'

        document.querySelectorAll('.ct_loading_bx').forEach(cur => {
            cur.style.marginLeft = '34px'
        })
    }

}
if (window.screen.width < 400 && window.screen.width > 360) {
    document.querySelectorAll('.for_load_bx_grid_inner').forEach(cur => {
        cur.style.margin = '-20px 0 0 56px'

        document.querySelector('.for_ek_foods_load').style.width = 'transform: translate(-140px)'

    })
    if (document.querySelector('.body_cart') !== null) {
        document.querySelectorAll('.ct_bx_grocery_required .for_groc_itm .ct_set_qt_for_groc').forEach(cur => {
            cur.style.width = '91%'
        })


        document.querySelector('.for_signup_only_cart').style.width = '40%'

        document.querySelector('.ct_ct_text_about_acc a').style.width = '45%'

        document.querySelectorAll('.bx_evt_cart_item li .ct_bx_quant_itm_cart').forEach(cur => {
            cur.style.width = '24%'
        })


    }

}
if (window.screen.width < 360) {
    if (document.querySelector('.ct_img_res_main img') !== null) {
        document.querySelectorAll('.ct_img_res_main img').forEach(cur => {
            cur.style.width = '180%'
        })




        if (document.querySelector('.ct_bx_side_rt_revies') !== null) {
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


    document.querySelector('html').addEventListener('click', (e) => {
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
            document.querySelector('.ct_bx_slide_bx2').style.height = `${window.screen.height}px`
            if (bx !== null) {
                if (!document.querySelector('.ct_bx_slide_bx').classList.value.split(' ').includes('active'))
                    document.querySelector('.ct_bx_slide_bx').classList.add('active')
                document.querySelector('.ct_bx_ov_lay').style.display = 'block'
            } else {
                document.querySelector('.ct_bx_ov_lay').style.display = 'none'
                document.querySelector('.ct_bx_slide_bx').classList.remove('active')

            }
        } else {
            if (e.target.closest('.essentials') !== null) {
                return
            }
            if (document.querySelector('.ct_bx_slide_bx.active') !== null) {
                document.querySelector('.ct_bx_slide_bx.active').classList.remove('active')
                document.querySelector('.ct_bx_ov_lay').style.display = 'none'

            }

        }
    })
    let shopEk = document.querySelector('.ek_cart')

    let waElem = ``
    let itmPage = document.querySelector('.ct_x_fd_dt_itm')

    if (shopEk !== null) {
        waElem = $('.ek_cart')
    } else if (document.querySelector('#ek_res_ev') !== null) {
        waElem = $('#ek_res_ev')

    } else if (itmPage !== null) {
        if (window.screen.width <= 920) {

            waElem = $('.ct_remcombx_pf_ct')

        } else {
            waElem = $('.ct_x_fd_dt_itm')

        }
    } else if (document.querySelector('.for_acc_dt') !== null) {
        waElem = $('.ct_account_bx')

    }
    if (waElem !== '') {
        waElem.waypoint(function (direction) {

            let w = document.querySelector('.ct_nav_erak .mai_ul').getBoundingClientRect().width
            if (direction === 'down') {


                let heightNav = document.querySelector('.for_nav_main').getBoundingClientRect().height - 8
                if (window.screen.width <= 740) {
                    document.querySelector('.for_nav_main').style.height = '63px'
                    heightNav = 63
                }
                if (window.screen.width <= 1100) {
                    document.querySelector('.for_mobile_search').style.display = 'none'
                    if (window.screen.width <= 740) {
                        if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + `px` }
                        document.querySelector('.ct_nav_erak .mai_ul').style.width = '63px'

                    }

                    // if (window.screen.width <= 400) {
                    //     if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + `px` }

                    // }
                    // if (window.screen.width <= 470) {
                    //     if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + `px` }
                    // }
                    // if (window.screen.width <= 360) {

                    //     if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + `px` }

                    // }
                    if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.position = 'fixed' }
                    if (window.screen.width <= 740) {
                        document.querySelector('.ct_nav_erak .ct_bx_search').style.display = 'block'
                        document.querySelector('.ct_nav_erak .ct_bx_search').style.display = 'flex'
                        document.querySelector('.for_ain_home_logo').style.display = 'none'
                        document.querySelector('.ct_bx_matched_itm').style.marginLeft = '0'
                        document.querySelector('.ct_nav_erak .ct_bx_matched_itm').style.paddingBottom = '0px'

                        if (window.screen.width <= 400) {
                            document.querySelector('.ct_nav_erak  .ct_bx_matched_itm').style.marginTop = '12px'
                            document.querySelector('.ct_nav_erak  .ct_bx_matched_itm').style.marginLeft = '0'
                        }
                        let searchLi = document.querySelectorAll('.ct_nav_erak  .ct_bx_matched_itm li').length

                        if (searchLi !== 0) {
                            let wh = document.querySelector('.ct_nav_erak .ct_bx_search').getBoundingClientRect().width
                            document.querySelector('.ct_nav_erak  .ct_bx_matched_itm').style.width = wh + 'px'
                            document.querySelector('.ct_nav_erak  .ct_bx_matched_itm').style.display = 'block'

                        }
                    }

                }
                document.querySelector('.for_nav_main').style.top = '0'
                document.querySelector('.for_nav_main').style.position = 'fixed'
                document.querySelector('.for_mobile_search').style.position = 'fixed'
                if (document.querySelector('.for_seravh_in_nav.active') !== null) {
                    document.querySelector('.ct_field_small_size_bx').style.display = 'none'
                    document.querySelector('.mai_ul').style.display = 'none'
                    document.querySelector('.ct_inner_nav').style.padding = '10px 0'
                }
            } else if (direction === 'up') {
                // if (window.screen.width >= 1200) {document.querySelector('.ct_bx_categories_essen').style.position='absolute'}
                if (window.screen.width <= 400) {
                    document.querySelector('.mai_ul').style.display = 'block'
                    document.querySelector('.ct_field_small_size_bx').style.display = 'block'

                    document.querySelector('.ct_inner_nav').style.padding = '4px px'
                }
                let heightNav = document.querySelector('.for_nav_main').getBoundingClientRect().height - 8
                if (window.screen.width <= 1100) {
                    if (window.screen.width <= 740 && window.screen.width > 470) {
                        document.querySelector('.ct_nav_erak .mai_ul').style.width = '100%'

                    }
                    if (window.screen.width <= 1100 && window.screen.width > 470) {
                        if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + 'px' }
                    }
                    if (window.screen.width <= 740) {
                        if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + 'px' }

                    }
                    if (window.screen.width <= 470 && window.screen.width > 400) {
                        document.querySelector('.ct_nav_erak .mai_ul').style.width = 'auto'

                    }
                    if (window.screen.width <= 470 && window.screen.width > 400) {
                        if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + 'px' }



                    } else if (window.screen.width > 1200) {
                        if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.top = heightNav + 'px' }

                    }


                    if (document.querySelector('.yt-loader') !== null) { document.querySelector('.yt-loader').style.position = 'absolute' }

                    if (window.screen.width <= 740) {

                        document.querySelector('.for_mobile_search').style.display = 'block'
                        document.querySelector('.ct_inner_nav .ct_bx_search').style.display = 'none'

                        document.querySelector('.for_ain_home_logo').style.display = 'block'
                        if (document.querySelector('.for_nav_main .ct_bx_search input').value !== '') {
                            if (document.querySelectorAll('.for_mobile_search  .ct_bx_matched_itm li').length > 0) {
                                document.querySelector('.for_mobile_search  .ct_bx_matched_itm').style.display = 'block'

                            }
                        }

                        document.querySelector('.ct_nav_erak  .ct_bx_matched_itm').style.display = 'none'
                        if (window.screen.width <= 360) {
                            document.querySelector('.for_mobile_search  .ct_bx_matched_itm').style.marginTop = '-2px'
                        }
                        let xW = document.querySelector('.for_mobile_search .ct_bx_search input').getBoundingClientRect().width
                        document.querySelector('.for_mobile_search  .ct_bx_matched_itm').style.width = `${xW}px`
                    }
                }
                if (window.screen.width >= 1200) {
                    // document.querySelector('.ct_bx_categories_essen').style.position= 'absolute'

                }
                if (window.screen.width <= 740) {

                    document.querySelector('.for_nav_main').style.height = '78px'
                }
                document.querySelector('.for_nav_main').style.position = 'absolute'
                document.querySelector('.for_nav_main').style.top = '0'
                document.querySelector('.for_mobile_search').style.position = 'absolute'

            }
        }, {
            offset: '0%'
        })




    }
    //jquery11

    if (document.querySelector('.ct_reome_pop_up') !== null) {
        document.querySelectorAll('.ct_reome_pop_up').forEach(cur => {
            cur.addEventListener('click', () => {

                document.querySelector('ct_error_stock.for_ek_fd').style.display = 'none'
            })
        })
    }
    let ListCookies = {};
    if (document.querySelector('.ct_bx_show_password') !== null) {
        document.querySelector('.ct_bx_show_password').addEventListener('click', (e) => {
            document.querySelector('.ct_bx_show_password').style.display = 'none'
            document.querySelector('.ct_nhide_pass').style.display = 'block'

            console.log(e.target.closest('.ct_bx_show_password').parentElement.childNodes[3].tagName)
            if (e.target.closest('.ct_bx_show_password').parentElement.childNodes[1].tagName === 'INPUT') {
                e.target.closest('.ct_bx_show_password').parentElement.childNodes[1].type = 'password'

            } else {
                e.target.closest('.ct_bx_show_password').parentElement.childNodes[3].type = 'password'

            }
        })
    }
    if (document.querySelector('.ct_nhide_pass') !== null) {
        document.querySelector('.ct_nhide_pass').addEventListener('click', (e) => {
            document.querySelector('.ct_bx_show_password').style.display = 'block'
            document.querySelector('.ct_nhide_pass').style.display = 'none'
            if (e.target.closest('.ct_nhide_pass').parentElement.childNodes[1].tagName === 'INPUT') {
                e.target.closest('.ct_nhide_pass').parentElement.childNodes[1].type = 'text'

            } else {
                e.target.closest('.ct_nhide_pass').parentElement.childNodes[3].type = 'text'

            }
        })
    }

    const addedRecGroc = async () => {

        if (document.querySelector('.ct_bx_all_groc_required') !== null) {

            document.querySelector('.ct_bx_all_groc_required').addEventListener('click', async (e) => {


                let elem = e.target.closest('.itm_food_list_ek')
                if (elem !== null) {
                    let qtfood = elem.classList.value.split(' ').includes('added_itm_ek_fd')
                    if (!qtfood) {



                        document.querySelector('.bx_evt_cart_item').style.display = 'block'
                        document.querySelector('.bx_evt_cart_item').style.display = 'none'
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
             <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
  
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
                                                       <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
                                            
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
             <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
  
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
                                                       <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
                                            
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
             <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
  
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
                                                       <p class="price_am_cart_fd2"><del style='margin-left:10px'> ${priceDel}</del> <span> ${price}</span> </p>
                                            
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
             <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
  
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
                                                       <p class="price_am_cart_fd2"><del style='margin-left:10px'>${priceDel}</del> <span> ${price}</span> </p>
                                            
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



                            document.querySelector('.bx_evt_cart_item ul').insertAdjacentHTML('beforeend', html)

                            if (window.screen.width < 400 && window.screen.width > 360) {
                                document.querySelectorAll('.bx_evt_cart_item li .ct_bx_quant_itm_cart').forEach(cur => {
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
                            document.querySelector('.bx_evt_cart_item ul').insertAdjacentHTML('beforeend', html)

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

            if (e.target.closest('.ct_set_qt_for_groc') !== null || e.target.closest('.ct_set_qt_for_groc ul') !== null) {
                return
            }
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

                if (user === null) {

                    window.location.replace('/signup')
                    return

                }
                if (elemFd.classList.value.split(' ').includes('for_groc_itm')) {
                    if (document.querySelector('.for_ek_cart_groc') !== null) {
                        document.querySelector('.for_ek_cart_groc').style.display = 'none'

                    }

                    if (elemFd.parentElement.classList.value.split(' ').includes('ct_cat_by_list')) {
                        let elem
                        if (elemFd.childNodes[5] !== undefined) {
                            elem = elemFd.childNodes[5]

                        } else {
                            elem = elemFd.childNodes[3]

                        }
                        console.log(elem.childNodes, '--------------10---100---1000000---------------------')
                        console.log(elemFd, '--------------10---100---1000000---------------------')
                        let hasCustom = false
                        elem.childNodes[5].childNodes.forEach(cu => {
                            if (cu.classList !== undefined) {
                                if (cu.classList.value.split(' ').includes('hasCustom')) {
                                    hasCustom = true
                                }
                                if (!hasCustom) {
                                    if (cu.classList.value.split(' ').includes('ct_bx_add_this')) {
                                        cu.style.display = 'none'
                                    }
                                    if (cu.classList.value.split(' ').includes('ct_bx_got_cart')) {
                                        cu.style.display = 'block'
                                    }
                                }
                            }
                        })
                        let off = null
                        if (elem.childNodes[5].childNodes[5].childNodes[3] !== undefined) {
                            off = elem.childNodes[5].childNodes[5].childNodes[3].childNodes[1].innerText.split('%')[0]
                        }
                        let unitUniv
                        if (elemFd.childNodes[1].classList.value === 'ct_offer_box_cook2') {
                            unitUniv = elemFd.childNodes[3].innerText
                        } else {
                            unitUniv = elemFd.childNodes[1].innerText
                        }
                        let innerUnit = []
                        // elem.childNodes[5].classList.remove('not_for_ek_pk_fd')
                        // elem.childNodes[5].classList.add('tog_for_ek_pk_fd')
                        // selected_custom_prod
                        let id = elem.childNodes[3].innerText
                        let img = elem.childNodes[1].childNodes[1].src
                        let catId = elem.childNodes[5].childNodes[11].innerText
                        let price
                        let priceDel

                        if (elem.childNodes[5].childNodes[5].childNodes[3] !== undefined) {
                            priceDel = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[0].innerText


                            price = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[1].innerText
                        } else {
                            console.log(elem.childNodes[5].childNodes)
                            priceDel = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[0].innerText

                            off = null
                            price = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[0].innerText
                        }
                        if (hasCustom) {
                            document.querySelector('.ct_overflow_customize').style.display = 'block'
                            document.querySelector('.ct_bx_customize_product').style.display = 'flex'
                            let locGrocCus = JSON.parse(localStorage.getItem('cusItemforgroc'))
                            let cH
                            locGrocCus.map(cur => {
                                console.log(cur.id, id, '1289as')
                                if (cur.id === id) {
                                    for (let i; i < cur.custom.length; i++) {
                                        if (cur.custom[i].innerUnits === null) {
                                            if (parseFloat(cur.custom[i].stock) !== 0) {
                                                //19902
                                                document.querySelector('.ct_bx_btn_add_this_item p').innerText
                                            }
                                        }
                                    }

                                    cH = cur.custom.map(cm => {
                                        let innUn = cm.innerUnits
                                        let stock = 0
                                        let haveInside = false
                                        if (innUn !== null) {
                                            haveInside = true
                                            innUn.forEach(cu => {
                                                let stk = parseFloat(cu.stock)
                                                stock += stk
                                            })
                                        } else { stock = parseFloat(cm.stock) }
                                        let nameCus = cm.name
                                        let priceCus = cm.price
                                        if (priceCus !== undefined) {
                                            if (off !== null) {
                                                priceCus = parseFloat(priceCus)
                                                priceCus = priceCus - (priceCus * (off / 100))
                                                priceCus = Math.round(priceCus)
                                                priceBox = `<span> <del>₹${cm.price} </del> <pr> ₹${priceCus}  </pr></span>`
                                            } else {
                                                priceBox = `<span><del style='display:none'></del> <pr style='margin-left: 0;'> ₹${priceCus}  </pr></span>`

                                            }

                                        } else { priceBox = `<span><pr>See available options.</pr></span>` }
                                        let hm = ``
                                        let insideHm = ``
                                        let classInside = ``
                                        if (haveInside) {
                                            classInside = 'inside_custom'
                                            insideHm = `<ion-icon name="chevron-forward-outline"></ion-icon>`
                                        }
                                        console.log(stock, '12900asbjd')
                                        if (stock === 0) {

                                            hm = `<li class='no_stock_customize ${classInside}' style="pointer-events: none;
                                         ">
                                         <div class="ct_inner_bx">
                                         <p>${nameCus}</p>
                                         ${priceBox}
                                         <span>not available</span>
                                         </div>
                                     ${insideHm}

                                    </li>`
                                        } else {
                                            hm = `<li class='${classInside}''>
                                            <div class="ct_inner_bx">
                                            <p>${nameCus}</p>
                                            ${priceBox}
                                            <span class='hidden'>not available</span>
                                            </div>
                                            ${insideHm}

                                        </li>`
                                        }

                                        document.querySelector('.ct_bx_customize_product .id_g').innerText = id
                                        return hm

                                    })
                                }
                            })
                            console.log(cH, '1289as')
                            document.querySelector('.ct_bx_select_type_prod ul').innerHTML = cH.join('')

                        } else {
                            elemFd.classList.add('added_itm_ek_fd')

                        }
                        let qt = 1
                        let typfd = elem.childNodes[5].childNodes[1].childNodes[1].tagName.toLowerCase()
                        let type
                        if (typfd === 'img') {
                            type = 'non-veg'
                        } else if (typfd === 'svg') {
                            type = 'veg'

                        }
                        let unit
                        let selectedUnit = ``
                        let selectedPrice
                        if (elem.childNodes[5].childNodes[5].childNodes[7] !== undefined) {
                            elem.childNodes[5].childNodes[5].childNodes[7].childNodes.forEach(cur => {
                                if (cur.tagName === 'LI') {
                                    let unitPair = {
                                        selectedUnit: cur.childNodes[1].innerText, selectedPrice: cur.childNodes[3].innerText.split('₹')[1].split(',').join(''), stock: cur.childNodes[5].innerText
                                    }
                                    innerUnit.push(unitPair)

                                }
                            })
                            elem.childNodes[5].childNodes[5].childNodes[1].childNodes.forEach(cur => {

                                if (cur.tagName === 'LI') {
                                    console.log(cur)

                                    innerFood.push(cur.innerText)

                                }
                            })
                            if (elem.childNodes[5].childNodes[5].childNodes[1].childNodes[1] !== undefined) {
                                selectedPrice = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[1].innerText

                            } else {
                                selectedPrice = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[0].innerText

                            }
                            selectedUnit = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[3].innerText
                            unit = null


                        } else {
                            unit = elem.childNodes[5].childNodes[5].innerText
                            if (elem.childNodes[5].childNodes[5].childNodes[1].childNodes[1] !== undefined) {
                                selectedPrice = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[1].innerText

                            } else {
                                selectedPrice = elem.childNodes[5].childNodes[5].childNodes[1].childNodes[0].innerText

                            }
                            selectedUnit = null
                            innerUnit = null


                        }
                        let name
                        let com
                        if (elem.childNodes[5].childNodes[3] !== undefined) {
                            com = elem.childNodes[5].childNodes[3].childNodes[1].innerText

                            name = elem.childNodes[5].childNodes[3].childNodes[3].innerText

                        } else {

                            name = elem.childNodes[3].childNodes[1].innerText

                        }


                        if (com !== '') {
                            com = com
                        } else {
                            com = null
                        }
                        selectedPrice = priceDel
                        foodObjGrocery = {
                            unitUniv: unitUniv, name: name, id: id, catId: catId, img: img, price: price, priceDel: priceDel, off: off, unit: unit, com: com, type: type, qt: qt, selectedUnit: selectedUnit, selectedPrice: selectedPrice,
                            innerUnit: innerUnit, custom: false
                        }

                        if (!hasCustom) {
                            if (JSON.parse(localStorage.getItem('grocFoodListCart')) === null) {
                                localStorage.setItem('grocFoodListCart', JSON.stringify([foodObjGrocery]))

                            } else {
                                let FdLst;
                                FdLst = JSON.parse(localStorage.getItem('grocFoodListCart'))

                                FdLst.push(foodObjGrocery)
                                localStorage.setItem('grocFoodListCart', JSON.stringify(FdLst))

                            }
                        }


                    }


                }



            }
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



    if (document.querySelector('.body_cart') !== null) {

        if (JSON.parse(localStorage.getItem('orders')) !== null) {
            if (document.querySelector('.body_cart') !== null) {
                let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                let fd = JSON.parse(localStorage.getItem('foodsAdded'))

                if (fd.length === 0 && groc.length === 0) {

                    document.querySelector('.for_ek_fd_cart_load').style.display = 'block'


                }
            }

        }

    }

    window.addEventListener('load', () => {
        if (document.querySelector('.body_cart') !== null) {
            let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
            let groc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            if (localStorage.length === 0) {
                document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'

                document.querySelector('.block_2_charge span').innerHTML = '&mdash;'

                document.querySelector('.ct_btns_group_check_ek').style.opacity = .5

                document.querySelector('.ct_btns_group_check_ek').style['pointer-events'] = 'none';
                // document.querySelector('.ct_verif_bx').style.display = 'none'

            }
            if (allfd !== null && groc !== null && JSON.parse(localStorage.getItem('krBusiness')) !== null) {
                if (allfd.length === 0 && groc.length === 0 && JSON.parse(localStorage.getItem('krBusiness')).length === 0) {
                    document.querySelector('.block_1_charge span').innerHTML = '&mdash;'

                    document.querySelector('.to_pay_cahge span').innerHTML = '&mdash;'
                    document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
                    document.querySelector('.ct_btns_group_check_ek').style.opacity = .5

                    document.querySelector('.ct_btns_group_check_ek').style['pointer-events'] = 'none';
                    // document.querySelector('.ct_verif_bx').style.display = 'none'
                }
            }
            // document.querySelector('.for_cart_cancel').addEventListener('click', () => {
            //     document.querySelector('.for_messg_ov').style.display = 'block'

            //     document.querySelector('.ct_bx_message_for_confim_cancel').style.display = 'block'

            //     document.querySelector('.ct_list_food').style.pointerEvents = 'none'



            // })

            document.querySelector('html').addEventListener('click', (e) => {


                if (e.target.closest('.cancel_order_btn_yes') !== null || e.target.closest('.remove_msg_conf_cancel') !== null) {

                    document.querySelector('.for_cart_load_full').style.display = 'none'

                    document.querySelector('.for_acc_ov').style.display = 'none'







                    document.querySelector('.ct_bin_ts_nav_ck').style.display = 'block'



                }
            })

        }
        if (document.querySelector('.for_acc_dt .go_back') !== null) {
            document.querySelector('.for_acc_dt .go_back').addEventListener('click', () => {

                window.history.back()
            })
        }
        if (document.querySelector('.go_back') !== null) {
            document.querySelector('.go_back').addEventListener('click', () => {

                window.location.replace('/login?#forgot')
            })
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


    /// remove jquery restore javascri
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
            if (pn === '' || firstname === '' || lastname == '' || confInp === '') {
                return
            }
            if (window.screen.width <= 800) {

                document.querySelector('.yt-loader').style.display = 'block'

            } else {
                document.querySelector('.ct_acc .yt-loader').style.display = 'block'

            }
            document.querySelectorAll('.login_now').forEach(cu => {
                cu.style['pointer-events'] = 'none'
                cu.style.opacity = .4
            })

            const forgotpass = async () => {
                document.querySelectorAll('.error_login').forEach(cur => {
                    cur.style.display = 'none'
                })

                let cur = await dbCollection.get()
                document.querySelectorAll('.yt-loader').forEach(cu => {
                    cu.style.display = 'none'
                })
                document.querySelectorAll('.login_now').forEach(cu => {
                    cu.style['pointer-events'] = 'auto'
                    cu.style.opacity = 1
                })
                let curs
                let checkPas
                let i
                if (cur.docs.length !== 0) {
                    for (let i1 = 0; i1 < cur.docs.length; i1++) {
                        curs = cur.docs
                        console.log(curs[i1].data().data)
                        console.log(curs[i1].data().data[0].split(' ').join(''), firstname, pn.trim(), curs[i1].data().data[4].trim(), pn.trim() === curs[i1].data().data[4].trim(), curs[i1].data().data[0].split(' ').join('') === firstname, '100927jhsjjs')

                        checkPas = bcrypt.compareSync(confInp.trim(), curs[i1].data().data[3]);
                        if (checkPas) {
                            checkPass2 = true
                        }
                        if (pn.trim() === curs[i1].data().data[4].trim() && curs[i1].data().data[0].split(' ').join('') === firstname) {
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
                        document.querySelector('.name_err').style.display = 'flex'
                        return

                    }
                    if (!mathchedlst) {
                        document.querySelector('.lstname_err').style.display = 'flex'
                        return
                    }
                    console.log(chpn, checkPass2)
                    if (chpn) {


                        if (!checkPass2) {
                            document.querySelector('.lstname_err').style.display = 'none'
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
                                    document.querySelector('.lstname_err2').style.display = 'flex'

                                }
                            } else {
                                document.querySelector('.lstname_err3').style.display = 'flex'
                                return
                            }


                        } else {
                            document.querySelector('.password_err_exsist').style.display = 'flex'
                            return
                        }

                    }
                    else {
                        matchedName = true
                        mathchedlst = true
                        document.querySelector('.phonenum').style.display = 'flex'


                        return
                    }

                }



            }
            forgotpass()

        })
    }

    let addedSelected = 0



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
        window.location.replace(`/account?user=${userDt.rootAutyh}&sign=true`)
    }
}

if (loginDom !== null) {
    if (userDt !== null) {
        window.location.replace(`/account?user=${userDt.authUser}&log=true`)
    }
}
let addedOrder = 0
if (document.querySelector('.xclose_icon') !== null) {
    document.querySelectorAll('.xclose_icon').forEach(cur1 => {
        cur1.addEventListener('click', () => {
            document.querySelectorAll('.xclose_icon').forEach(cu => { cu.style.display = 'none' })
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
                if (document.querySelector('#search') !== null) {
                    document.querySelector('#search').remove()

                }

                if (document.querySelector('.bodyessestials') !== null) {

                    functionAddItm2()
                    if (window.location.search !== '') {

                        location.replace('/grocery')
                    }
                } else if (document.querySelector('.erak_fd_body') !== null) {

                    document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'none'
                }
            })
        })
    })
}
if (document.querySelector('.ct_bx_search input') !== null) {

    document.querySelectorAll('.ct_bx_search input').forEach(cur => {
        cur.addEventListener('keyup', (e) => {
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
                        document.querySelectorAll('.ct_bx_matched_itm ul').forEach(cur => {
                            cur.style.display = 'block'
                        })

                        let w11 = document.querySelectorAll('.ct_bx_search input')[0].getBoundingClientRect().width

                        document.querySelectorAll('.ct_bx_matched_itm')[0].style.width = w11 + 'px'
                        document.querySelectorAll('.ct_bx_error').forEach(cur => {
                            cur.style.display = 'none'
                        })

                        var header = {
                            "alg": "HS256",
                            "typ": "JWT"
                        };


                        let emptyArr = matched.map(cur => {
                            let name = cur.data().name
                            var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
                            var encodedHeader = base64url(stringifiedHeader);

                            var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(name));
                            var encodedData = base64url(stringifiedData);
                            var token = encodedHeader + "." + encodedData;
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
                                window.location.pathname

                                html = `<li>
                          <a href='/product?item=${cur.data().id}&qt=1&cid=${cur.data().catId}'>
                          <ion-icon name="search-outline"></ion-icon>

    <p>${name}</p>

   
                                       </a>
   
    </li>`



                            } else {


                                html = `<li>
                                <a href='/grocery?q=${cur.data().id}&cid=${cur.data().catId}&typ=groc&itm=${token}'>
                                <ion-icon name="search-outline"></ion-icon>

                                <div class="ct_bx_inner">
          <p>${name}</p>

      
         
                                             </div>
                                             </a>
   `



                            }

                            return html

                        })
                        e.target.parentElement.childNodes.forEach(cu => {
                            if (cu.classList !== undefined) {
                                if (cu.classList.value === 'ct_bx_close_over') {
                                    cu.childNodes[1].style.display = 'flex'
                                }
                            }
                        })
                        if (e.target.parentElement.parentElement.classList.value.split(' ').includes('for_mobile_search')) {
                            document.querySelector('.for_nav_search .ct_bx_search input').value = cur.value
                            let w

                            if (window.screen.width <= 920) {
                                w = document.querySelector('.for_mobile_search .ct_bx_search').getBoundingClientRect().width
                            } else {
                                w = e.target.parentElement.getBoundingClientRect().width()
                            }
                            document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.width = w + 'px'

                            document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.display = 'block'

                        } else {
                            document.querySelector('.for_mobile_search .ct_bx_search input').value = cur.value

                            let w = e.target.parentElement.getBoundingClientRect().width
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.width = w + 'px'
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'block'

                        }
                        document.querySelectorAll('.ct_content_all_searched ul').forEach(cur => {
                            cur.innerHTML = emptyArr.join('')
                        })


                    } else {
                        let li = document.querySelectorAll('.ct_bx_matched_itm li')
                        li.forEach(cur => {
                            cur.remove()
                        })
                        e.target.parentElement.childNodes.forEach(cu => {
                            if (cu.classList !== undefined) {
                                if (cu.classList.value === 'ct_bx_close_over') {
                                    cu.childNodes[1].style.display = 'flex'
                                }
                            }
                        })
                        document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.display = 'block'
                        document.querySelector('.for_mobile_search .ct_bx_error').style.display = 'block'
                        document.querySelector('.for_mobile_search .ct_bx_error p').innerText = `no result found for " ${txt} "`
                        if (e.target.parentElement.parentElement.classList.value.split(' ').includes('for_mobile_search')) {
                            let w

                            if (window.screen.width <= 920) {
                                w = document.querySelector('.for_mobile_search .ct_bx_search').getBoundingClientRect().width
                            } else {
                                w = e.target.parentElement.getBoundingClientRect().width()
                            }
                            document.querySelector('.for_mobile_search .ct_bx_matched_itm').style.width = w + 'px'
                            document.querySelector('.for_nav_search .ct_bx_search input').value = cur.value


                        } else {
                            document.querySelector('.for_mobile_search .ct_bx_search input').value = cur.value


                            let w = e.target.parentElement.getBoundingClientRect().width
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.width = w + 'px'
                            document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'block'

                        }


                        document.querySelectorAll('.ct_bx_matched_itm ul').forEach(cur => {
                            cur.style.display = 'none'
                        })
                        document.querySelector('.ct_bx_error').style.display = 'block'



                        document.querySelector('.ct_bx_error p').innerText = `no result found for " ${txt} "`




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
                    document.querySelector('.for_nav_search .ct_content_all_searched ul').innerHTML = ''
                    document.querySelector('.for_nav_search .ct_bx_matched_itm').style.display = 'none'
                    return
                }
                document.querySelector('.ct_bx_error').style.display = 'none'
                allReady = 0
                numenator = 0
                denomenator = 0
                if (document.querySelector('#search') !== null) {
                    document.querySelector('#search').remove()

                }

                if (document.querySelector('.bodyessestials') !== null) {

                    functionAddItm2()
                    location.replace('/grocery')

                } else if (document.querySelector('.erak_fd_body') !== null) {
                    functionAddItm()
                    if (window.location.search !== '') {
                        location.replace('/foods')

                    }
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
            if (cur.data().rootAutyh === user.rootAutyh) {
                mOrder.forEach((cur1, index) => {
                    let htmlFd


                    let orders = cur1.orders
                    let time = cur1.time
                    let date = cur1.date
                    let arrFd = orders.map(el => {
                        if (el.typ !== 'groc') {
                            let priceFdT = 0

                            let item = el

                            cur1.amount.forEach((el1) => {
                                el1 = parseFloat(el1)
                                priceFdT += el1
                            })
                            priceFdT += 150
                            console.log(priceFdT)
                            let name = item.name


                            let unit = item.unit
                            let qt = el.qt
                            let img = item.img
                            let id = item.id

                            mainPriceFdT = priceFdT.toLocaleString()





                            htmlFd = `<li>

                          <div class="ct_all_over_fd_dt">

                              <a class="for_img_order_user" href="/product?item=${id}&qt=1&catId=${item.catId}">
                                  <img class="main_img" src="${img}" alt="img">

                              </a>

                              <div class="ct_fd_dt_full">
                                  <div class="ct_bx_food_dt_acc">
                                      <h4>${name}</h4>
                                      <span>QUANTITY :  ${qt}</span>
                                      <a href="/product?item=${id}&qt=1&catId=${item.catId}" class="btn_by_again">
                                          <ion-icon name="refresh-circle" role="img" class="md hydrated" aria-label="refresh circle"></ion-icon> Buy it
                                          Again
                                      </a>



                                  </div>

                              </div>
                          </div>

                      </li>`




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

                            let id = item.id
                            let qt = item.qt
                            let htmlFd
                            let img = item.img
                            let unit = item.unit
                            var header = {
                                "alg": "HS256",
                                "typ": "JWT"
                            };

                            var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
                            var encodedHeader = base64url(stringifiedHeader);


                            var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(name));
                            var encodedData = base64url(stringifiedData);
                            let token = encodedHeader + "." + encodedData;
                            if (com !== '' && com !== null) {
                                htmlFd = `<li>

                                            <div class="ct_all_over_fd_dt for_grocery_order">

                                                <div class="for_img_order_user2">
                                                    <img class="main_img" src="${img}" alt='img'>

                                                </div>

                                                <div class="ct_fd_dt_full">
                                                    <div class="ct_bx_food_dt_acc">
                                                    <aa class="com_itm_ord">${com}
                                                    </aa>
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                        <span>QUANTITY : ${qt}</span>

                                                        <a href="/grocery?q=${id}&cid=${item.catId}&typ=groc&itm=${token}" class="btn_by_again">
                                                            <ion-icon name="refresh-circle" role="img" class="md hydrated" aria-label="refresh circle"></ion-icon> Buy it
                                                            Again
                                                        </a>


                                                    </div>

                                                </div>
                                            </div>

                                        </li>`

                            } else {
                                htmlFd = `<li>

                                            <div class="ct_all_over_fd_dt for_grocery_order">

                                                <div class="for_img_order_user2">
                                                    <img class="main_img" src="${img}" alt='img'>

                                                </div>

                                                <div class="ct_fd_dt_full">
                                                    <div class="ct_bx_food_dt_acc">
                                 
                                                    <h4>${name}</h4>
                                                    <p class="unit_itm_ord">${unit}</p>
                                                        <span>QUANTITY : ${qt}</span>

                                                        <a href="/grocery?q=${id}&cid=${item.catId}&typ=groc&&itm=${token}" class="btn_by_again">
                                                            <ion-icon name="refresh-circle" role="img" class="md hydrated" aria-label="refresh circle"></ion-icon> Buy it
                                                            Again
                                                        </a>


                                                    </div>

                                                </div>
                                            </div>

                                        </li>`
                            }

                            return htmlFd


                        }

                    })
                    let dN2 = new Date()
                    let fdMonth = dN2.getMonth()
                    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    let expNumber = month.indexOf(date.split(' ')[1]) + 1
                    //removing order after 1 month
                    if (fdMonth >= expNumber) {
                        const removeFd = async () => {
                            let dbCollection = db.collection("users")
                            let res = await dbCollection.get()

                            mOrder.splice(index, 1)
                            let user = getCookie('user')
                            console.log(mOrder, 'kiooo')

                            user = JSON.parse(user)
                            res.docs.forEach(cur => {
                                let item = cur.data().data
                                if (cur.data().rootAutyh === user.rootAutyh) {
                                    let cartGroc = cur.data().cartGroc
                                    let cartItem = cur.data().cartItem
                                    let likes = cur.data().likes
                                    let fstPurchase = cur.data().fstPurchase

                                    let dislikes = cur.data().dislikes
                                    let rtr = cur.data().myratings

                                    dbCollection.doc(cur.id).set({
                                        data: item,
                                        cartGroc: cartGroc,
                                        authUser: cur.data().authUser,
                                        rootAutyh: cur.data().rootAutyh,
                                        deliv: cur.data().deliv,
                                        admin: cur.data().admin,
                                        cartItem: cartItem,
                                        likes: likes,
                                        dislikes: dislikes,
                                        fstPurchase: fstPurchase,
                                        myOrders: mOrder,
                                        myratings: rtr
                                    })

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
                    let cHtml
                    let htmlT
                    let htmlD

                    let htmlD2 = ``
                    let htmlP = ``
                    let htmlT2 = ``
                    // cur1.isTom

                    if (cur1.isDelivered) {
                        let obj = cur1.isDelivered
                        htmlD = `<div class="date_time_order delivery_stat">
    <p>DELIVERY STATUS</p>
    <div class="ct_bx_staus_delivery_od">
        <div class="deliv">
            <ion-icon name="checkmark-circle" role="img" class="md hydrated" aria-label="checkmark circle"></ion-icon>
            <p>DELIVERED AT ${obj.t}</p>
        </div>
    </div>
</div>`

                        htmlD2 = `<p class="sucess" style='display:block'>Deliverd at ${obj.t}</p>`
                        htmlT = ''
                    } else {
                        htmlP = `<p class="pending">Pending</p>`
                        htmlD = `<div class="date_time_order delivery_stat">
                        <p>DELIVERY STATUS</p>
                        <div class="ct_bx_staus_delivery_od">
                            <div class="Pending_order">
                                <p>Pending..</p>
                            </div>
                        </div>
                    </div>`                    }

                    if (cur1.isTom) {
                        // htmlP = `<p class="sucess">Delivery will be on ${cur1.isTom} after 8:00 am</p>`

                        htmlT2 = ` <div class="ct_bx_delivery_stat">
                        <span>Info</span>
                        <p>Delivery will be on tommorow</p>

                    </div>`
                        htmlT = `<div class="date_time_order for_info_order  bx_tot_ammount_order">
    <p>Info</p>
    <span>Delivery will be on ${cur1.isTom} after 8:00 am</span>
<o> Delivery service not available </o>
        

</div>`

                        htmlD = ``
                    } else {
                        htmlT = ``
                    }
                    let cancelBtn = `<button class="cancel_order_btn">Cancel Order</button>
                    `
                    if (cur1.canceled) {
                        htmlP = `<p class="pending">canceled by You</p>`

                        cHtml = `                                            <span class="canceled_order">You Canceled this order.</span>
`
                        cancelBtn = ``
                        htmlT = ``
                        htmlD = ``
                    } else {
                        cHtml = ' <span class="canceled_order"></span>'
                    }
                    if (cur1.isDelivered) {
                        cancelBtn = ``
                    }
                    let html = `        <div class="ct_box_half_order">
                    <div class="ct_bx_items_order_details nottog22">
                    
                    <div class='ct_order_dt_inner'>
                    <div class="dvt">
                    <span>Order placed</span>
                    <p> ${date}, ${time1}:${time2} ${em}</p>
                </div>
                <div class="ct_bx_delivery_stat">
                    <span>Delivery Status</span>
${htmlP}
${htmlD2}
                </div>
               ${htmlT2}
                <div class="ct_bxamount">
                    <span>Total amount</span>
                    <p>₹ ${mainPriceFdT.toLocaleString()}</p>
                </div>
                <ul>
                    <span>Delivery Address</span>
                  
                    <li>
                        <p>${cur1.pName}</p>


                    </li>
                    <li>
                        <p>${cur1.address}</p>


                    </li>
                    <li>
                        <p>Phone Number: ${cur1.phone}</p>

                    </li>
                </ul>

                    </div>

                </div>
                        <div class="ct_bx_nav_order_itm">
                                            <div class="date_time_order dt_order">
                                                <p>Order placed</p>
                                                <span> ${date}, ${time1}:${time2} ${em}</span>
                                            </div>
                                            <div class="date_time_order bx_tot_ammount_order">
                                                <p>TOTAL</p>
                                                <span>₹ ${mainPriceFdT.toLocaleString()}</span>


                                            </div>
                                            ${htmlT}
                                            <div class="date_time_order nottog">
                                                <p>DELIVERY TO</p>
                                                <pre>${checkChar(cur1.pName, 20)} <ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon></pre>

                                                <div class="ct_bx_deliv_to">
                                                    <ul>
                                                        <li>
                                                            ${cur1.pName}
                                                        </li>
                                                        <li>
                                                        ${cur1.address}
                                                        </li>
                                                        <li>
                                                            Phone:  ${cur1.phone}

                                                        </li>
                                                        <p></p>
                                                </ul></div>
                                            </div>
                                            ${cHtml}

                                            ${htmlD}

                                            <div class="ct_bx_info_mob_order">
                                            <p>Info</p>
                                            <ion-icon name="chevron-down-outline"></ion-icon>

                                            </div>
                                        </div>
                                        <span class="hidden">${cur1.id}</span>
                                        ${cancelBtn}
                    <div class="bx_inner">
                     
                        <ul>
                ${arrFd.join('')}

                        </ul>


                    </div>
                </div>`
                    addedOrder++
                    document.querySelector('.ct_bx_orders').insertAdjacentHTML('afterbegin', html)

                    if (window.screen.width < 400) {
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
            document.querySelectorAll('.ct_bx_message_succesfully_ordered.succ_otp').forEach(cur => {
                cur.style.display = 'none'
            })
            if (document.querySelector('.login_err') !== null) {
                document.querySelector('.ct_bx_message_succesfully_ordered.login_err').style.display = 'none'

            }
        })
        document.querySelector('.err_otp .ct_remove_bill_pop_up_update_acc').addEventListener('click', () => {
            document.querySelectorAll('.ct_bx_message_succesfully_ordered.err_otp').forEach(cur => {
                cur.style.display = 'none'
            })

        })
    }
    let user = getCookie('user')
    console.log(user)
    user = JSON.parse(user)

    document.querySelector('.phone_num_dt span').innerText = user.ct
    document.querySelector('.address_dt span').innerText = user.ad
    document.querySelector('.ct_x_welcome_inner p').innerText = user.n + ' ' + user.ln


    document.querySelector('.loc_dt span').innerText = user.service


    document.querySelector('.ct_bx_edit_acc').addEventListener('click', () => {


        // if (window.location.pathname.split('/').includes('editAccount')) { 


        //     return }
        document.querySelector('.ct_edit_cc #nick_name_inp_dt').value = user.n
        document.querySelector('.ct_edit_cc #lst_name_inp').value = user.ln
        document.querySelector('.ct_edit_cc #address_inp').value = user.ad
        document.querySelector('.ct_edit_cc #phone_num_inp').value = user.ct
        document.querySelectorAll('.ct_edit_cc #phone_num_inp').forEach(cur => {
            cur.value = user.ct
        })

        document.querySelector('.ct_edit_cc #pass_inp').value = ''
        document.querySelector('.ct_edit_cc #pin').value = user.service

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
                    document.querySelector('.login_err').style.display = 'flex'
                    document.querySelector('.login_err p').innerText = `To signup again you have to logout.`

                    document.querySelector('.login_err span').innerText = `you cannot signup with existing account.`
                } else if (accSign === 'log') {
                    document.querySelector('.login_err p').innerText = `To login again you have to logout.`

                    document.querySelector('.login_err span').innerText = `you cannot login with existing account.`
                    document.querySelector('.login_err').style.display = 'flex'

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

            let jwt = secret(token)
            let user = getCookie('user')
            user = JSON.parse(user)

            const updateAcc = async () => {
                let dbCollection = db.collection(`users`)
                document.querySelector('.for_acc_ov').style.display = 'flex'

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
                let rootAutyh
                let dislikes
                let fstPurchase = cur.data().fstPurchase

                let user = getCookie('user')
                user = JSON.parse(user)
                res.docs.forEach(cur => {
                    console.log(cur.id)
                    data = cur.data().data
                    checkPas = bcrypt.compareSync(jwt.a.password, data[3]);
                    cartGroc = cur.data().cartGroc
                    cartItem = cur.data().cartItem
                    myOrders = cur.data().myOrders
                    rootAutyh = cur.data().rootAutyh
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
                    if (user.rootAutyh === rootAutyh) {
                        docId = cur.id

                    }
                    console.log(docId)

                })
                if (matchedPass < 2) {
                    let ob
                    if (cur.data().admin !== undefined) {
                        ob = dbCollection.doc(docId).set({
                            admin: cur.data().admin,
                            deliv: false,
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
                            rootAutyh: rootAutyh,
                            fstPurchase: fstPurchase,
                            authUser: user.authUser,

                        })
                    } else if (cur.data().deliv !== undefined) {
                        ob = dbCollection.doc(docId).set({
                            delivery: cur.data().deliv,
                            cartGroc: cartGroc,
                            cartItem: cartItem,
                            likes: likes,
                            admin: false,
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
                            fstPurchase: fstPurchase,
                            authUser: user.authUser,

                        })
                    } else {
                        ob = dbCollection.doc(docId).set({
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
                            fstPurchase: fstPurchase,
                            authUser: user.authUser,

                        })
                    }

                    ob.then(() => {
                        document.querySelector('.ed_acc').classList.remove('active_slide_user_Dash')
                        document.querySelector('.for_acc_ov').style.display = 'none'

                        // document.querySelector('.acc_set_main_nav h3').innerText = jwt.a.name
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
                            user1.ct = jwt.a.phonenumber
                        user1.authUser = user.authUser
                        user1.service = jwt.a.password_login

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
if (document.querySelector('.adm_page') !== null) {


}
const addBill = () => {
    let allgroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
    let allfd = JSON.parse(localStorage.getItem('foodsAdded'))
    let allfd2 = JSON.parse(localStorage.getItem('krBusiness'))


    let totalAmount = []

    if (allfd2 !== null) {
        if (allfd2.length !== 0) {
            allfd2.forEach(cur => {
                let qt = cur.qt
                qt = parseFloat(qt)
                if (cur.price !== undefined) {
                    let price = cur.price
                    let off = cur.off
                    let unit = cur.unit
                    if (unit.split('').includes('k')) {
                        unit = unit.split('k')[0]
                    } else if (unit.split('').includes('g')) {
                        unit = 1
                    }
                    console.log('new111')
                    unit = parseFloat(unit)
                    price = parseFloat(cur.price.split(',').join(''))
                    console.log(price, 'ama')

                    if (off !== null && off !== 'null') {
                        off = parseFloat(off)
                        let ffP = price - (price * (off / 100))
                        ffP = Math.round(ffP)
                        totalAmount.push(ffP)

                        return
                    }

                    totalAmount.push(price)
                }




            })
        }
    }
    if (allfd !== null) {
        if (allfd.length !== 0) {
            allfd.forEach(cur => {
                console.log(cur, 'ama')
                let off = parseFloat(cur.offer)
                let price

                if (cur.price.split('₹')[1].split(',').join('') !== undefined) {
                    price = parseFloat(cur.price.split('₹')[1].split(',').join(''))

                } else {
                    price = parseFloat(cur.price.split(',').join(''))

                }
                console.log(price, 'ama')

                if (cur.offer !== null && cur.offer !== 'null') {
                    let ffP = price - (price * (off / 100))
                    console.log(ffP)
                    ffP = Math.round(ffP)
                    totalAmount.push(ffP)

                    return
                }
                console.log(price, 'ama')

                totalAmount.push(price)



            })
        }
    }
    if (allgroc !== null) {
        if (allgroc.length !== 0) {
            allgroc.forEach(cur => {
                let price
                let qt = parseFloat(cur.qt)

                let off = parseFloat(cur.off)
                if (cur.off !== null) {
                    cur.selectedPrice = String(cur.selectedPrice)
                    if (cur.selectedPrice.split('₹')[1] !== undefined) {
                        price = parseFloat(cur.selectedPrice.split('₹')[1].split(',').join('')) * qt

                    } else {
                        price = parseFloat(cur.selectedPrice.split(',').join('')) * qt

                    }
                    let ffP = price - (price * (off / 100))
                    console.log(price)
                    ffP = Math.round(ffP)
                    totalAmount.push(ffP)
                    return
                } else {
                    let pr
                    cur.selectedPrice = String(cur.selectedPrice)
                    if (cur.selectedPrice.split('₹')[1] !== undefined) {
                        pr = cur.selectedPrice.split('₹')[1].split(',').join('')
                    } else {
                        pr = cur.selectedPrice

                    }
                    price = parseFloat(pr) * qt
                    totalAmount.push(price)
                }


            })
        }

    }

    let am = 0
    totalAmount.forEach(cur => {
        console.log(cur, 'ama')
        am += cur
    })
    console.log(totalAmount, 'ama')
    console.log(totalAmount, 'new111')

    am = Math.round(am)
    if (am !== 0 && !isNaN(am)) {



        document.querySelector('.block_1_charge span').innerText = '₹' + ' ' + am.toLocaleString()
        document.querySelector('.block_2_charge span').innerText = '₹ 150'


        document.querySelector('.to_pay_cahge c').innerText = (am + 150).toLocaleString()
    } else {

        document.querySelector('.block_1_charge span').innerHTML = '&mdash;'
        document.querySelector('.block_2_charge span').innerHTML = '&mdash;'
    }

}
let stockGroc
let stockGroc2

const addGrocCart = async (elem, bx, ind, reqGroc = false) => {
    document.querySelector('.ct_bx_flex_sub_list').style.marginBottom = '0'

    document.querySelectorAll('.check_out_btn_order').forEach(cu => {
        cu.style['pointer-events'] = 'none'
        cu.style.opacity = .4

    })
    let stockItem = 0
    document.querySelector('.ct_order_confirm').style.display = 'none'

    document.querySelector('.for_groc_full_load').style.display = 'block'

    let html
    let dbCollection = db.collection(`grocery/PGpqRRwGbgF3hsiQBguH/group${elem.catId}`)
    let res = await dbCollection.get()
    if (JSON.parse(localStorage.getItem('foodsAdded')) !== null) {
        if (JSON.parse(localStorage.getItem('foodsAdded')).length === 0) {
            document.querySelector('.for_ek_fd_cart_load').style.display = 'none'

        }
    }

    document.querySelector('.ct_order_confirm').style.display = 'block'
    document.querySelectorAll('.check_out_btn_order').forEach(cu => {
        cu.style['pointer-events'] = 'auto'
        cu.style.opacity = 1

    })



    let itemDb
    let actOrder = JSON.parse(localStorage.getItem('orders'))
    let unitUnv

    for (let i = 0; i < res.docs.length; i++) {
        let cur = res.docs[i]
        itemDb = cur.data().item
        let namefooodDb = itemDb.id
        let namefoood = elem.id
        let done = false
        let addedGrocId = []
        if (itemDb.id === elem.id) {

            elem.img = itemDb.img


            if (actOrder === null) {

                if (namefooodDb === namefoood) {
                    stockGroc = itemDb.stock
                    unitUnv = itemDb.unitUniv
                    stockGroc2 = itemDb.stock

                    if (parseFloat(stockGroc) === 0) {
                        if (JSON.parse(localStorage.getItem('orders')) === null) {

                            checkItm('groc', elem, 'remove')
                        }
                        return


                    }
                    let smU
                    let toCh
                    if (elem.selectedUnit !== null) {
                        if (itemDb.unitInside !== null) {
                            itemDb.unitInside.forEach(cu => {
                                if (cu.sm !== undefined) {
                                    smU = parseFloat(cu.unitUniv)
                                }
                                if (elem.selectedUnit.trim() === cu.selectedUnit.trim()) {
                                    //unitcalcg
                                    if (elem.selectedUnit.split('').includes('k')) {
                                        toCh = elem.selectedUnit.split('k')[0]
                                        toCh = parseFloat(toCh)
                                        toCh *= 1000

                                    } else if (elem.selectedUnit.split('').includes('g')) {
                                        toCh = elem.selectedUnit.split('g')[0]
                                        toCh = parseFloat(toCh)
                                    }

                                    console.log(toCh, 'kaiu')
                                    if (itemDb.unitUniv !== 'prod') {
                                        let netwe = parseFloat(itemDb.stock)
                                        stockGroc = netwe / toCh
                                    } else {
                                        if (cu.stock !== 0) {
                                            stockGroc = cu.stock

                                        }

                                    }
                                }
                            })
                        }


                    }
                    let Numstock = parseFloat(stockGroc)

                    let eQt = parseFloat(elem.qt)
                    if (eQt > stockGroc) {
                        elem.qt = Numstock
                    }
                }
            } else { stockGroc = elem.qt }
        }

        if (actOrder === null) {
            let t = false
            let wasZero = false
            let itemLoc = JSON.parse(localStorage.getItem('grocFoodListCart'))
            let custLoc = JSON.parse(localStorage.getItem('cusItemforgroc'))
            if (elem.id === itemDb.id) {
                console.log(elem.custom, elem.id, 'gyyaa')
                stockItem = itemDb.stock
                elem.price = '₹' + itemDb.price
                elem.priceDel = '₹' + itemDb.price
                if (itemDb.unitInside === null) {
                    elem.selectedPrice = '₹' + itemDb.price

                }
                if (elem.custom) {
                    custLoc.forEach(cu => {
                        console.log(cu.id, elem.id, 'gyyaa')

                        if (cu.id === elem.id) {
                            cu.custom = itemDb.customize


                            cu.custom.forEach(em => {
                                let unitNmae
                                if (em.stock !== undefined) {
                                    unitNmae = em.name + ' ' + em.unit
                                } else {
                                    unitNmae = em.name
                                }
                                if (unitNmae.split(' ').join('') === elem.unit.split(' ').join('')) {
                                    if (em.stock !== undefined) {
                                        elem.selectedUnit = em.unit
                                        elem.unit = em.name

                                        let nSTk = false
                                        let stk = parseFloat(em.stock)

                                        if (stk === 0) {
                                            for (let ind = 0; ind < cu.custom.length; ind++) {
                                                let em12 = cu.custom[ind]
                                                console.log(em12, '12989as')

                                                if (em12.stock !== undefined) {
                                                    let stk1 = parseFloat(em12.stock)
                                                    if (stk1 !== 0) {
                                                        elem.unit = em12.name
                                                        console.log(em12.name, '12989as')

                                                        elem.selectedUnit = null
                                                        elem.selectedPrice = em12.price
                                                        break
                                                    } else {
                                                        nSTk = true

                                                    }
                                                } else {
                                                    if (em12.innerUnits !== null) {
                                                        let noStk = false
                                                        elem.unit = em12.name
                                                        nSTk = false
                                                        console.log(em12.name, '12989as')

                                                        for (let m = 0; m < em12.innerUnits.length; m++) {
                                                            let elm = em12.innerUnits[m]
                                                            if (parseFloat(elm.stock) !== 0) {
                                                                elem.selectedUnit = elm.name
                                                                elem.selectedPrice = elm.price
                                                                break
                                                            } else { noStk = true }
                                                        }


                                                    }
                                                }
                                                if (nSTk) {
                                                    if (em12.innerUnits !== null) {
                                                        elem.unit = em12.name

                                                        em12.innerUnits.forEach(elm => {
                                                            if (parseFloat(elm.stock) !== 0) {
                                                                elem.selectedUnit = elm.name
                                                                elem.selectedPrice = elm.price
                                                            }
                                                        })
                                                        break

                                                    }
                                                }
                                            }


                                        }
                                    } else {
                                        let nSTk = false

                                        for (let ind = 0; ind < cu.custom.length; ind++) {
                                            let em12 = cu.custom[ind]
                                            if (em12.stock !== undefined) {
                                                let stk1 = parseFloat(em12.stock)
                                                let stk = parseFloat(em.stock)

                                                if (stk === 0) {
                                                    if (stk1 !== 0) {
                                                        elem.unit = em12.name
                                                        elem.selectedUnit = null
                                                        elem.selectedPrice = em12.price
                                                        break
                                                    } else {
                                                        nSTk = true

                                                    }
                                                }
                                            }
                                            if (nSTk) {
                                                if (em12.innerUnits !== null) {
                                                    elem.unit = em12.name

                                                    em12.innerUnits.forEach(elm => {
                                                        if (parseFloat(elm.stock) !== 0) {
                                                            elem.selectedUnit = elem.name
                                                            elem.selectedPrice = elem.price
                                                        }
                                                    })
                                                    break

                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    })
                    localStorage.setItem('cusItemforgroc', JSON.stringify(custLoc))

                }
                if (!elem.custom) {
                    elem.unit = itemDb.unit

                }
                let offp

                if (itemDb.unitInside !== null) {
                    elem.innerUnit = itemDb.unitInside
                    for (let ui = 0; ui < itemDb.unitInside.length; ui++) {
                        let cu = itemDb.unitInside[ui]

                        if (itemDb.unitUniv === 'prod') {
                            console.log(cu.selectedUnit, parseFloat(cu.stock), 'aioos')

                            if (parseFloat(cu.stock) === 0) {

                                elem.innerUnit.splice(ui, 1)
                                ui--
                            }


                        }

                    }
                    if (elem.innerUnit.length === 1 && !elem.custom) {
                        wasZero = true
                        elem.unit = elem.innerUnit[0].selectedUnit

                        elem.selectedUnit = elem.innerUnit[0].selectedUnit

                        elem.selectedPrice = '₹' + elem.innerUnit[0].selectedPrice
                        elem.innerUnit = null

                    }


                    if (!t && !wasZero && !elem.custom) {
                        if (elem.selectedPrice === null) {
                            elem.selectedUnit = elem.innerUnit[0].selectedUnit

                            elem.selectedPrice = '₹' + elem.innerUnit[0].selectedPrice
                        }

                    }
                }


                if (itemDb.offer !== null) {
                    if (elem.selectedPrice !== null && !elem.custom) {
                        elem.selectedPrice = String(elem.selectedPrice)
                        if (elem.selectedPrice.split('₹')[1] !== undefined) {
                            itemDb.price = elem.selectedPrice.split('₹')[1].split(',').join('')

                        } else {
                            itemDb.price = elem.selectedPrice.split(',').join('')

                        }

                    }


                    let off = parseFloat(itemDb.offer)
                    let p = parseFloat(itemDb.price)


                    offp = p - (p * (off / 100))
                } else {
                    if (elem.selectedPrice !== null) {
                        elem.selectedPrice = String(elem.selectedPrice)
                        if (elem.selectedPrice.split('₹')[1] !== undefined) {
                            itemDb.price = elem.selectedPrice.split('₹')[1].split(',').join('')

                        } else {
                            itemDb.price = elem.selectedPrice

                        }

                    }
                    offp = itemDb.price

                }

                elem.off = itemDb.offer


            }

            itemLoc.splice(ind, 1, elem)

            localStorage.setItem('grocFoodListCart', JSON.stringify(itemLoc))
            addBill()

        }

    }
    if (elem.selectedPrice !== undefined && elem.selectedPrice !== null) {
        if (Number.isInteger(elem.selectedPrice) || elem.selectedPrice.split('₹')[1] === undefined) {
            elem.selectedPrice = elem.selectedPrice
        } else {
            elem.selectedPrice = parseFloat(elem.selectedPrice.split('₹')[1].split(',').join(''))
            elem.selectedPrice = elem.selectedPrice.toLocaleString()
        }

    }
    document.querySelector('.ct_order_confirm').style.display = 'block'
    document.querySelectorAll('.ct_btns_group_check_ek').forEach(cur => {
        cur.style.opacity = 1
        cur.style['pointer-events'] = 'auto'
    })

    document.querySelector('.ct_full_loading_box').style.display = 'none'
    // // elem.price = parseFloat(elem.price.split('₹')[1].split(',').join(''))
    // elem.price = '₹ ' + elem.price.toLocaleString()
    console.log(stockGroc, 'kaiu')
    let html1 = `<li class="main_li_cart_fd_lis groc_bx">

    <div class="ct_itm_food_cart">

  
        <img class="main_cart_img2" src="${elem.img}" alt='img'>

        <div class="ct_bx_food_groc_casrt">
<span class='hidden'>${unitUnv}</span>
            <span class="com_name"></span>
            <h4>${elem.name}</h4>

            <div class="ct_bx_related_itm_dt_cart2">
                <span class="unit"></span>




               
            </div>
            <div class="ct_bx_qty">


                <div class="ct_bx_qt_foods">
                    <div class="ct_bx_item_rem">
                        <ion-icon name="remove-outline" role="img" class="md hydrated" aria-label="remove outline">
                        </ion-icon>
                    </div>
                    <input type="text" value="${elem.qt}">
                    <div class="ct_bx_item_add">
                        <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline">
                        </ion-icon>
                    </div>

                </div>
            </div>
            <p class="price_am_cart_fd2"><del></del> <span></span><of></of> </p>

            <span class='id_groc'>${elem.id}</span>

            <span class="saved_am"></span>




            <div class="ct_bx_act_cart_itm">


                <div class="remove_fd_itm_ct">
                    <p>Delete</p>
                </div>
            </div>



        </div>



    </div>

    <p class="stk_groc_cart">${stockGroc}</p>
    <p class="stk_groc_cart">${stockItem}</p>




</li>`

    document.querySelector('.bx_evt_cart_item ul').insertAdjacentHTML('beforeend', html1)



    //unitcalcg
    if (elem.innerUnit !== null) {
        let gLoc = JSON.parse(localStorage.getItem('grocFoodListCart'))
        let isCal = false
        let isRem1 = false
        for (var i = 0; i < elem.innerUnit.length; i++) {
            let c = elem.innerUnit[i]
            if (unitUnv !== 'prod') {
                let unvN = parseFloat(stockGroc2)
                let unvN2
                //unitcalcg
                if (c.selectedUnit.split('').includes('k')) {
                    unvN2 = c.selectedUnit.split('k')[0]
                    unvN2 = parseFloat(unvN2)
                    unvN2 *= 1000

                } else if (c.selectedUnit.split('').includes('g')) {
                    unvN2 = c.selectedUnit.split('g')[0]
                    unvN2 = parseFloat(unvN2)
                }

                if (unvN2 > unvN) {

                    elem.innerUnit.splice(i, 1)
                    isCal = true
                    if (elem.innerUnit.length === 1) {
                        isRem1 = true
                        elem.unit = elem.innerUnit[0].selectedUnit
                        elem.selectedUnit = null
                        elem.selectedPrice = null

                        elem.selectedPrice = "₹ " + elem.innerUnit[0].selectedPrice
                        elem.innerUnit = null
                        gLoc.splice(ind, 1)
                        gLoc.push(elem)

                        localStorage.setItem('grocFoodListCart', JSON.stringify(gLoc))
                        break
                    }

                    i--
                }
            }
        }
        if (isCal && !isRem1) {
            elem.selectedPrice = "₹ " + elem.innerUnit[0].selectedPrice
        }
        addBill()

    }
    if (elem.unit !== null && elem.unit !== 'null' && !elem.custom) {
        Array.from(document.querySelector('.bx_evt_cart_item ul').lastChild.childNodes[1].childNodes[3].childNodes).forEach(cur => {
            if (cur.classList !== undefined) {

                if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {
                    cur.childNodes[1].innerText = elem.unit
                    cur.childNodes[1].style.display = 'block'
                    // })
                }

            }
        })
    }

    if (elem.off !== undefined && elem.off !== null) {

        let offer = elem.off
        let qt = parseFloat(elem.qt)
        offer = parseFloat(offer)
        elem.selectedPrice = String(elem.selectedPrice)
        let prp = elem.selectedPrice.split(',').join('')
        prp = parseFloat(prp)
        let prp2 = prp
        prp = prp * qt
        let p = prp - (prp * (offer / 100))
        p = Math.round(p)
        let p2 = prp - (prp * (offer / 100))
        p2 = Math.round(p2)
        prp = prp
        prp = Math.round(prp)
        p = p.toLocaleString()
        p2 = p2.toLocaleString()
        prp = prp.toLocaleString()

        if (elem.innerUnit !== null) {

            const addInside = elem.innerUnit.map(c => {


                if (parseFloat(c.stock) !== 0) {
                    let itm = `<li>
                        <p>${c.selectedUnit}</p>
                        <span>₹ ${c.selectedPrice}</span>
                        <span class='stk'>${c.stock}</span>

                    </li>`

                    return itm
                }
            })
            let hm
            if (elem.selectedPrice !== 'null') {
                hm = `<div class="ct_filed_selct_qt_un">
                            <div class="ct_set_qt_for_groc">
                                <div class="field_bx_qt">
                                    <p>${elem.selectedUnit}</p>
                                    <span>₹ ${elem.selectedPrice}</span>

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
                                    <span>₹ ${elem.innerUnit[0].price}</span>

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
            if (elem.custom) {
                let htmlSelectedUn = ``
                if (elem.selectedUnit !== null) {
                    htmlSelectedUn = elem.selectedUnit
                }
                elem.selectedPrice = String(p)
                hm = `<div class="ct_bx_show_customize_cart">
                <div class="ct_inner_cust">
                    <p>${elem.unit} ${htmlSelectedUn}</p>
                    <span>₹${p2}</span>
                </div>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>`
            }
            Array.from(document.querySelector('.bx_evt_cart_item ul').lastChild.childNodes[1].childNodes[3].childNodes).forEach(cur => {
                if (cur.classList !== undefined) {

                    if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {

                        cur.insertAdjacentHTML('beforeend', hm)

                    }

                }
            })

        }

        Array.from(document.querySelector('.bx_evt_cart_item ul').lastChild.childNodes[1].childNodes[3].childNodes).forEach(cur => {
            if (cur.classList !== undefined) {
                if (cur.classList.value.split(' ').includes('com_name')) {

                    cur.innerText = elem.com
                }

                if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {
                    cur.childNodes[2].innerText = "₹" + p
                    cur.childNodes[3].innerText = `( ${elem.off}%  )`

                    cur.childNodes[0].innerText = "₹" + prp
                    cur.childNodes[0].style.marginLeft = '10px'
                }
            }
        })



    }
    else {
        let prp = elem.selectedPrice

        let p = parseFloat(prp)
        let itmQt = parseFloat(elem.qt)
        let p2 = p
        p = p * itmQt
        p = p.toLocaleString()
        if (elem.innerUnit !== null) {

            const addInside = elem.innerUnit.map(c => {
                let itm = `<li>
                <p>${c.selectedUnit}</p>
                <span>₹ ${c.selectedPrice}</span>
                <span class='stk'>${c.stock}</span>

                </li>`
                return itm
            })
            let hm
            if (elem.selectedPrice !== 'null') {
                hm = `<div class="ct_filed_selct_qt_un">
                        <div class="ct_set_qt_for_groc">
                            <div class="field_bx_qt">
                                <p>${elem.selectedUnit}</p>
                                <span>₹ ${elem.selectedPrice}</span>

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
                                <span>₹ ${elem.innerUnit[0].price}</span>

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
            if (elem.custom) {
                let htmlSelectedUn = ``
                if (elem.selectedUnit !== null) {
                    htmlSelectedUn = elem.selectedUnit
                }
                elem.selectedPrice = String(p)
                hm = `<div class="ct_bx_show_customize_cart">
                <div class="ct_inner_cust">
                    <p>${elem.unit} ${htmlSelectedUn}</p>
                    <span>₹${p2}</span>
                </div>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </div>`
            }
            Array.from(document.querySelector('.bx_evt_cart_item ul').lastChild.childNodes)[1].childNodes[3].childNodes.forEach(cur => {
                if (cur.classList !== undefined) {
                    if (cur.classList.value.split(' ').includes('ct_bx_related_itm_dt_cart2')) {

                        cur.insertAdjacentHTML('beforeend', hm)

                    }

                }
            })

        }

        Array.from(document.querySelector('.bx_evt_cart_item ul').lastChild.childNodes[1].childNodes[3].childNodes).forEach(cur => {
            if (cur.classList !== undefined) {
                console.log(cur)

                if (cur.classList.value.split(' ').includes('com_name')) {

                    cur.innerText = elem.com
                }





                if (cur.classList.value.split(' ').includes('price_am_cart_fd2')) {


                    cur.childNodes[2].innerText = "₹" + p

                }
            }
        })



    }


    let search = window.location.search
    let order = JSON.parse(localStorage.getItem('orders'))

    if (search.split('=')[0].split('?')[1] === 'item' || order !== null) {
        document.querySelector('.for_cart_checkout ').style.display = 'none'

        document.querySelector('.placeneworder').style.display = 'block'

        document.querySelector('.bx_evt_cart_item').style.filter = 'grayscale(1)'
        document.querySelector('.bx_evt_cart_item').style.filter = 'grayscale(1)'
        document.querySelector('.bx_evt_cart_item').style['pointer-events'] = 'none'

        document.querySelector('.bx_evt_cart_item').style['pointer-events'] = 'none'
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





}

const addToCart = async (elem, bx, price, index, cheated) => {
    let offerPrice
    let html2
    let html
    document.querySelector('.for_ek_fd_cart_load').style.display = 'flex'

    document.querySelector('.ct_bx_flex_sub_list').style.marginBottom = '0'
    let actOrder = JSON.parse(localStorage.getItem('orders'))
    let dbCollection = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${elem.catId}`)
    dbCollection.get().then(async res => {
        res.docs.forEach(async cur => {
            let itemDb = cur.data().item
            let namefooodDb = itemDb.name.toLowerCase().trim()
            if (itemDb.id === elem.id) {
                document.querySelector('.for_ek_food_cart').style.display = 'none'
                document.querySelector('.ct_other_nav_cart').style.display = 'block'
                document.querySelector('.ct_bx_information_cart').style.display = 'flex'
                let groc = itemDb.requiredGroc
                let itm = itemDb
                let ratings = itemDb.ratings

                let noRate = false
                ratings.forEach(cur => {
                    if (cur.ratings === 0) {
                        noRate = true
                    }
                    numenator2 += cur.star * cur.ratings
                    denomenator2 += cur.ratings
                })
                let html1

                if (!noRate) {
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
                } else {
                    html1 = `       <span>
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
                //global variable
                let qt
                let n2
                let n1
                console.log(elem, 'index')
                let Numstock = parseFloat(itm.netweight)
                let eQt = parseFloat(elem.qt)
                console.log(Numstock, elem.qt, 'ioos')

                if (actOrder === null) {
                    if (eQt > Numstock) {
                        elem.qt = Numstock
                    }
                } else {
                    if (Numstock === 0) { Numstock = 3000 }
                }

                let numUnit
                let noReqStock = false
                if (itm.unitInit !== null) {
                    itm.unitInit.forEach(cur22 => {
                        if (cur22.name === undefined) {
                            if (cur22.sm !== undefined) {
                                numUnit = parseFloat(cur22.unitNum)
                                if (cur22.unitU.toLowerCase() !== 'g') {
                                    numUnit *= 1000
                                }
                            }
                        } else {
                            if (cur22.stock !== null) {
                                if (cur22.sm !== undefined) {

                                    let tStk = parseFloat(cur22.stock)
                                    if (tStk > Numstock) {
                                        noReqStock = true
                                    }
                                }
                            }
                        }
                    })
                }
                //checkingstkcart
                if (Numstock !== 0 && Numstock >= numUnit || !noReqStock) {
                    console.log(groc, 'cur22')

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
                                let isAdded = false
                                let added = 'not_added_itm_ek_fd'
                                console.log(el.name, el1.name, 'grocery')
                                if (el.id === el1.name) {

                                    let allGroc = JSON.parse(localStorage.getItem('grocFoodListCart'))
                                    if (allGroc !== null) {
                                        allGroc.forEach(c => {
                                            if (c.com !== null) {
                                                if (c.name.split(' ').join('').toLowerCase() === el.name.split(' ').join('').toLowerCase()) {
                                                    //for seleted item
                                                    isAdded = true
                                                }
                                            } else {
                                                if (c.name.split(' ').join('').toLowerCase() === el.name.split(' ').join('').toLowerCase()) {
                                                    //for seleted item
                                                    isAdded = true
                                                }
                                            }
                                        })
                                    }
                                    if (parseFloat(el.stock) !== 0) {
                                        if (!allReadyAdded.includes(el.name)) {
                                            allReadyAdded.push(el.name)
                                            let addInside
                                            if (el.offer !== null) {
                                                let off = parseFloat(el.offer)
                                                let price = parseFloat(el.price)

                                                let offP = price - (price * (off / 100))
                                                offP = Math.round(offP).toLocaleString()

                                                if (el.unitInside !== null && el.unitInside !== undefined) {
                                                    addInside = el.unitInside.map(c => {
                                                        let itm = `<li>
                                                                    <p>${c.selectedUnit}</p>
           <span>₹ ${c.selectedPrice}</span>
           <span>${c.stock}</span>
    
                                                                </li>`
                                                        return itm
                                                    })
                                                } else {
                                                    addInside = null
                                                }

                                                if (addInside !== null) {
                                                    html = `<div class="ct_items_req_groc">
                                                <div class="ct_offer_box_cook2">
                                                <span>${el.offer}%</span>
                                                <p>off</p>
    
                                            </div>
        <img src="${el.img}" alt='img'>
        <div class="ct_bx_item_inner_groc">
            <span></span>
            <h4>${el.name}</h4>
            <span class='id_groc'>${id}</span>
            <span class='hidden'>${el.unitUniv}</span>

        <span class="stk">${el.stock}</span>
    
            <div class="ct_set_qt_for_groc">
    
        
            <ul class="not_tog_dpd">
              ${addInside.join('')}
            </ul>
         
        </div>
        <un>${el.unitInside[0].selectedUnit}</un>
            <p><del>₹ ${el.price}</del>  ₹ ${offP}</p>
            <button class="Add_cart">Add to cart</button>
            <span class='catId_groc'>${catId}</span>
        </div>
    </div>`
                                                } else {
                                                    html = `<div class="ct_items_req_groc">
                                                <div class="ct_offer_box_cook2">
                                                <span>${el.offer}%</span>
                                                <p>off</p>
                                            </div>
                                                <img src="${el.img}" alt='img'>
                                                <div class="ct_bx_item_inner_groc">
                                                    <span></span>
                                                    <h4>${el.name}</h4>
                                                    <span class='id_groc'>${id}</span>
                                                    <span class='hidden'>${el.unitUniv}</span>

                                                    <span class="stk">${el.stock}</span>
                                            
                                                    <div class="ct_set_qt_for_groc">
                                            
                                                
                                                    <ul class="not_tog_dpd">
                                                      ${null}
                                                    </ul>
                                                 
                                                </div>
                                                <un>${el.unit}</un>
                                                <p><del>₹ ${el.price}</del>  ₹ ${offP}</p>
                                                <button class="Add_cart">Add to cart</button>
                                                    <span class='catId_groc'>${catId}</span>
                                                </div>
                                            </div>`
                                                }
                                            } else {
                                                if (el.unitInside !== null && el.unitInside !== undefined) {
                                                    addInside = el.unitInside.map(c => {
                                                        let itm = `<li>
                                                                    <p>${c.selectedUnit}</p>
           <span>₹ ${c.selectedPrice}</span>
           <span>${c.stock}</span>
    
                                                                </li>`
                                                        return itm
                                                    })
                                                } else {
                                                    addInside = null
                                                }

                                                if (addInside !== null) {
                                                    html = `<div class="ct_items_req_groc">
                                                
        <img src="${el.img}" alt='img'>
        <div class="ct_bx_item_inner_groc">
            <span></span>
            <h4>${el.name}</h4>
            <span class='id_groc'>${id}</span>
           
            <span class='hidden'>${el.unitUniv}</span>

            <span class="stk">${el.stock}</span>
    
            <div class="ct_set_qt_for_groc">
    
        
            <ul class="not_tog_dpd">
              ${addInside.join('')}
            </ul>
         
        </div>
        <un>${el.unitInside[0].selectedUnit}</un>
            <p>₹ ${el.price}</p>
            <button class="Add_cart">Add to cart</button>
            <span class='catId_groc'>${catId}</span>
        </div>
    </div>`
                                                } else {
                                                    html = `<div class="ct_items_req_groc">
                                                
                                                <img src="${el.img}" alt='img'>
                                                <div class="ct_bx_item_inner_groc">
                                                    <span></span>
                                                    <h4>${el.name}</h4>
                                                    <span class='id_groc'>${id}</span>
                                                    <span class='hidden'>${el.unitUniv}</span>

                                                    <span class="stk">${el.stock}</span>
                                            
                                                    <div class="ct_set_qt_for_groc">
                                            
                                                
                                                    <ul class="not_tog_dpd">
                                                      ${null}
                                                    </ul>
                                                 
                                                </div>
                                                <un>${el.unit}</un>
                                                <p>₹ ${el.price}</p>
                                                    <button class="Add_cart">Add to cart</button>
                                                    <span class='catId_groc'>${catId}</span>
                                                </div>
                                            </div>`
                                                }
                                            }



                                            document.querySelector('.ct_bx_all_groc_required .loader_cart').style.display = 'none'
                                            document.querySelectorAll('.ct_bx_inner_requried').forEach(cur => {
                                                cur.insertAdjacentHTML('beforeend', html)
                                            })

                                            if (isAdded) {
                                                let domE
                                                let domE2

                                                document.querySelectorAll('.ct_bx_inner_requried').forEach(cur => {
                                                    cur.lastChild.style.filter = 'grayscale(1)'
                                                })
                                                if (document.querySelector('.Required1 .ct_bx_inner_requried').lastChild.childNodes[5] !== undefined) {
                                                    domE = document.querySelector('.Required1 .ct_bx_inner_requried').lastChild.childNodes[5]

                                                } else {
                                                    domE = document.querySelector('.Required1  .ct_bx_inner_requried').lastChild.childNodes[3]

                                                }
                                                if (document.querySelector('.Required2 .ct_bx_inner_requried').lastChild.childNodes[5] !== undefined) {
                                                    domE2 = document.querySelector('.Required2 .ct_bx_inner_requried').lastChild.childNodes[5]

                                                } else {
                                                    domE2 = document.querySelector('.Required2 .ct_bx_inner_requried').lastChild.childNodes[3]

                                                }
                                                domE.childNodes.forEach(cur => {
                                                    console.log(cur)
                                                    if (cur.tagName !== undefined) {
                                                        if (cur.tagName === 'BUTTON') {
                                                            cur.style.display = 'none'
                                                        }
                                                    }
                                                })
                                                domE2.childNodes.forEach(cur => {
                                                    console.log(cur)
                                                    if (cur.tagName !== undefined) {
                                                        if (cur.tagName === 'BUTTON') {
                                                            cur.style.display = 'none'
                                                        }
                                                    }
                                                })
                                            }
                                            if (document.querySelector('.ct_bx_inner_requried').lastChild.childNodes[5] !== undefined) {
                                                document.querySelector('.ct_bx_inner_requried').lastChild.childNodes[5].childNodes[1].innerText = el.com
                                            } else {
                                                document.querySelector('.ct_bx_inner_requried').lastChild.childNodes[3].childNodes[1].innerText = el.com

                                            }





                                            if (window.screen.width < 400) {



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


                                        if (window.screen.width < 360) {


                                            document.querySelectorAll('.main_li_cart_fd_lis').forEach(cur => {
                                                cur.style.marginLeft = '2px'
                                            })
                                        }


                                        if (window.screen.width <= 400) {

                                            document.querySelectorAll('.ct_bx_grocery_required .itm_food_list_ek .ct_dt_tm_food_res h4').forEach(cur => {
                                                cur.style.fontSize = '15px'
                                            })
                                            document.querySelectorAll('.ct_bx_grocery_required .itm_food_list_ek').forEach(cur => {
                                                cur.style.width = '30%'

                                            })

                                            document.querySelectorAll('.ct_bx_all_groc_required .itm_food_list_ek').forEach(cur => {
                                                cur.style.overflow = 'visible'

                                            })
                                            document.querySelectorAll('.ct_bx_all_groc_required .main_img_groc_itm').forEach(cur => {
                                                cur.style.minHeight = '120px'
                                                cur.style.width = '120px'

                                            })
                                        }
                                        if (window.screen.width < 360) {
                                            document.querySelectorAll('.ct_bx_all_groc_required').forEach(cur => {
                                                cur.style.transform = 'translate(-52px,60px)'
                                                cur.style.width = '114%'

                                            })
                                        }
                                    }

                                }


                            })
                        })


                    })
                    document.querySelector('.ct_order_confirm').style.display = 'block'

                    document.querySelector('.ct_btns_group_check_ek').style.opacity = 1
                    document.querySelector('.ct_btns_group_check_ek').style['pointer-events'] = 'auto'
                    document.querySelector('.ct_full_loading_box').style.display = 'none'


                    //uniqu
                    let priceMainOth = 0

                    if (actOrder === null) {

                        let dataLoc = JSON.parse(localStorage.getItem('foodsAdded'))
                        dataLoc.forEach(cur => {
                            let iitm = cur
                            iitm.offer = itm.offer
                            if (itm.unitInit !== null) {

                                itm.unitInit.forEach(cu => {
                                    if (cu.name === undefined) {
                                        iitm.unitInit = itm.unitInit

                                    }
                                })
                                itm.unitInit2.forEach(cu => {
                                    if (cu.name === undefined) {
                                        iitm.unitInit = itm.unitInit2

                                    }
                                })
                            }
                            localStorage.setItem('foodsAdded', JSON.stringify(dataLoc))
                        })

                        let allReadyAddedC = []
                        let a = []
                        let arrL = []


                        qt = parseFloat(elem.qt)
                        n1 = itm.id.trim()
                        n2 = elem.id.trim()
                        if (n2 === n1) {

                            if (actOrder === null) {
                                price = parseFloat(itm.price.split(',').join(''))
                                let mainQt = parseFloat(elem.qt)
                                console.log(elem.itemsOthers, 'llooosdss')
                                elem.offer = itm.offer
                                if (itm.unitInit !== null) {

                                    itm.unitInit.forEach(cu => {
                                        if (cu.name === undefined) {
                                            elem.unitInit = itm.unitInit

                                        }
                                    })
                                    itm.unitInit2.forEach(cu => {
                                        if (cu.name === undefined) {
                                            elem.unitInit = itm.unitInit2

                                        }
                                    })
                                }

                                elem.fdInside = itm.fdInside
                                elem.Iup = itm.fdInside
                                let arr101 = []
                                let arr = []
                                if (itm.unitInit !== null) {

                                    itm.unitInit.forEach(cu => {
                                        if (parseFloat(cu.stock) !== 0) {
                                            arr101.push(cu)

                                        }


                                    })

                                }
                                console.log(elem.selU2, arr101, 'losssfa')


                                if (elem.selU === ' ') {
                                    elem.selU = 0
                                }
                                if (elem.selU2 === ' ') {
                                    elem.selU2 = 0
                                }


                                let posEm = 1
                                let iN = -1
                                let matchedU
                                let postionRem = 1
                                if (actOrder === null) {
                                    if (itm.unitInit !== null) {
                                        for (let ind = 0; ind < itm.unitInit.length; ind++) {
                                            let cu = itm.unitInit[ind]
                                            console.log(cu, 'aa3')
                                            if (cu.name === undefined) {

                                                if (parseFloat(cu.stock) === 0) {
                                                    postionRem = ind
                                                    itm.unitInit.splice(ind, 1)
                                                    ind--
                                                    console.log(itm.unitInit, iN, 'aa3')

                                                }

                                            } else {
                                                let el = itm.unitInit[ind]

                                                let stock = parseFloat(el.stock)
                                                if (stock === 0) {
                                                    postionRem = ind
                                                    itm.unitInit.splice(ind, 1)
                                                    ind--
                                                }
                                            }
                                        }
                                        let has2selU = false
                                        if (itm.unitInit !== null) {
                                            if (itm.unitInit.length > 0) {
                                                if (itm.unitInit[0].name !== undefined) {
                                                    has2selU = true
                                                }
                                            }
                                        }
                                        console.log(elem.baseU, has2selU, '222222')

                                        let matchedU = false
                                        if (itm.unitInit !== null) {
                                            itm.unitInit.forEach(((elm, indx) => {
                                                let unitin
                                                let b2U = elem.baseU
                                                if (itm.unitInit !== null) {
                                                    b2U = ''
                                                }
                                                if (!has2selU) {
                                                    if (elm.price !== null) {
                                                        unitin = `${elm.unitNum}${elm.unitU}`

                                                    } else {
                                                        unitin = `${elm.unit}`

                                                    }
                                                } else {

                                                    unitin = elm.name
                                                    b2U = elem.baseU
                                                }

                                                if (elm.price !== null) {
                                                    if (b2U.split(' ').join('') === unitin) {
                                                        posEm = elm.count


                                                        matchedU = true


                                                    }
                                                } else {
                                                    if (elem.baseU === 'not selected') {
                                                        matchedU = true
                                                        posEm = 1


                                                    }
                                                }



                                            }))
                                        }

                                        console.log(matchedU, 'aa3')
                                        if (!matchedU) {
                                            matchedU = true
                                            elem.selU2 = elem.unitInit[0].price
                                            mainQt = parseFloat(mainQt)
                                            elem.qt = 1
                                            elem.selU = parseFloat(itm.restPrice)
                                            if (elem.unitInit[0].name === undefined) {
                                                if (elem.unitInit[0].price !== null) {
                                                    elem.baseU = `${elem.unitInit[0].unitNum} ${elem.unitInit[0].unitU}`
                                                } else {
                                                    elem.baseU = `${elem.unitInit[0].unit}`

                                                }
                                            } else {
                                                elem.baseU = `${elem.unitInit[0].name}`


                                            }

                                        }
                                    }
                                }
                                console.log(elem.baseU, 'kainu')
                                let has2selU = false
                                if (itm.unitInit !== null) {
                                    if (itm.unitInit[0].name !== undefined) {
                                        has2selU = true
                                    }
                                }
                                if (has2selU) {
                                    posEm = 1
                                }
                                if (itm.itemsOthers !== null) {
                                    itm.itemsOthers.map(cua => {

                                        elem.itemsOthers.forEach(im => {
                                            let name = im.name.split('x')[0].split(' ').join('')

                                            let name2 = cua.name.split(' ').join('')
                                            if (name2 === name) {
                                                if (!im.unselect) {
                                                    let priceM1 = cua.price
                                                    priceM1 = parseFloat(priceM1)
                                                    priceM1 *= posEm
                                                    priceM1 *= parseFloat(elem.qt)
                                                    im.price = "₹ " + priceM1
                                                    console.log(priceM1, posEm, priceMainOth, 'kaiioo')

                                                    priceMainOth += priceM1

                                                }
                                                return im

                                            }

                                        })
                                    })
                                }
                                let freePur = false
                                if (elem.selU2 === null) {
                                    elem.selU2 = 0
                                }

                                if (elem.permGroup !== undefined) {
                                    elem.permGroup.forEach(cu => {
                                        if (cu.price === 'Free') {
                                            freePur = true

                                        }
                                    })
                                }

                                //checking for first purchase is in the user data
                                let pSelected = 0
                                if (freePur) {
                                    let dbCollectionL = db.collection(`users`)
                                    let resL = await dbCollectionL.get()


                                    resL.docs.forEach(l => {
                                        let lD = l.data()
                                        let idU = JSON.parse(getCookie('user')).rootAutyh
                                        if (lD.rootAutyh === idU) {
                                            let fstP = lD.fstPurchase
                                            if (getCookie('user') !== '') {

                                                if (JSON.parse(getCookie('user')).fstPurchase) {
                                                    if (itm.fdInside.length > 1) {
                                                        if (fstP) {
                                                            let fsP = 0
                                                            itm.fdInside.forEach(fsn => {
                                                                if (fsn.price !== undefined && fsn.name.split(' ').join('').toLowerCase() !== 'currysauce') {
                                                                    fsP += parseFloat(fsn.price)

                                                                }
                                                            })
                                                            itm.restPrice -= fsP
                                                            console.log(price, elem.selU, fsP, '19114')

                                                        }
                                                        console.log(fstP, '19114')

                                                    }
                                                }

                                                if (!fstP) {
                                                    let objL = JSON.parse(getCookie('user'))
                                                    objL.fstPurchase = false
                                                    document.cookie = "user" + "=" + JSON.stringify(objL) + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/"
                                                }
                                            }
                                        }

                                    })
                                }
                                if (cheated) {
                                    itm.fdInside.forEach(cu => {
                                        if (elem.permGroup !== undefined) {
                                            elem.permGroup.forEach(el => {
                                                if (cu.name.split(' ').join('').toLowerCase() === el.name.split(' ').join('').toLowerCase()) {
                                                    el.price = "₹ " + cu.price
                                                }

                                            })

                                        }
                                    })
                                }
                                let selectedIndx = 1
                                if (itm.unitInit !== null) {
                                    itm.unitInit.forEach(cu => {
                                        if (cu.price !== null) {
                                            if (elem.selU2 !== 0) {
                                                if (elem.baseU !== undefined) {
                                                    let sB = elem.baseU.split(' ').join('')
                                                    let sB2 = `${cu.unitNum}${cu.unitU}`
                                                    if (cu.unit === undefined) {
                                                        if (sB === sB2.split(' ').join('')) {
                                                            selectedIndx = parseFloat(cu.count)
                                                        }
                                                    } else {
                                                        if (sB.split(' ').join('').toLowerCase() === cu.unit.split(' ').join('').toLowerCase()) {
                                                            selectedIndx = parseFloat(cu.count)
                                                        }
                                                    }

                                                }

                                            } else { selectedIndx = 2 }

                                        }

                                    })
                                }
                                let totInside = 0
                                elem.selU = 0
                                itm.fdInside.forEach(elm => {
                                    let nameA = elm.name.split('').join('').toLowerCase()
                                    if (elem.permGroup !== undefined) {

                                        elem.permGroup.forEach(em => {
                                            if (!em.eprice) {
                                                if (em.name.split('').join('').toLowerCase() === nameA) {
                                                    let pr = parseFloat(elm.price)
                                                    pr = (pr / selectedIndx)
                                                    pr = Math.round(pr)
                                                    em.price = "₹ " + pr
                                                    totInside += pr
                                                }
                                            }
                                        })
                                    }
                                })
                                console.log(totInside, '123902A')
                                price = parseFloat(elem.selU2) + totInside
                                price *= parseFloat(elem.qt)
                                price += priceMainOth
                                elem.price = "₹" + (price)
                                console.log(elem.price, posEm, priceMainOth, 'kaiioo')
                                elem.img = itm.img

                                elem.unitInit = arr101
                                elem.unitInit2 = arr
                                ifd.push(elem)
                                console.log(ifd, 'elllo')
                                localStorage.setItem('foodsAdded', JSON.stringify(ifd))

                            }
                        }
                    }
                    let netweight = itm.netweight
                    if (itm.unitInit2.length > 0) {
                        let b = elem.baseU2.split(' ').join('').toLowerCase()
                        elem.unitInit2.forEach(cur => {
                            if (cur.price !== null) {
                                let b2 = cur.name.split(' ').join('').toLowerCase()
                                if (b === b2) {
                                    netweight = cur.stock
                                }
                            }
                        })

                    }
                    let stock = parseFloat(netweight)
                    let unFd = ``

                    if (itm.offer !== null && itm.offer !== 'null') {
                        let qt = parseFloat(elem.qt)

                        let offer
                        if (actOrder === null) {
                            offer = parseFloat(itm.offer)
                        } else {
                            offer = parseFloat(elem.offer)
                        }
                        if (itm.unitInit !== null) {
                            let hasTwoSelection = false
                            if (itm.unitInit2.length > 0) {
                                hasTwoSelection = true
                            }
                            let checkqt = () => {
                                let fnun
                                let selp = parseFloat(elem.selU2)
                                if (selp !== 0) {
                                    if (!hasTwoSelection) {
                                        if (elem.unitInit !== null) {
                                            elem.unitInit.forEach(cur => {
                                                let fUn = `${cur.unitNum}${cur.unitU}`
                                                let bU = elem.baseU.split(' ')[0]
                                                if (fUn === bU) {
                                                    stock = parseFloat(cur.stock)
                                                }
                                            })
                                        }

                                    } else {
                                        elem.unitInit2.forEach(cur => {
                                            if (cur.name === elem.baseU2) {
                                                stock = parseFloat(cur.stock)
                                            }


                                        })




                                    }
                                } else {
                                    stock = false
                                }


                                if (stock !== false) {

                                    elem.qt = parseFloat(elem.qt)
                                    if (actOrder === null) {
                                        if (elem.qt > stock) {
                                            let p = elem.price.split('₹')[1].split(',').join('')
                                            p = parseFloat(p)
                                            p = p / parseFloat(elem.qt)
                                            p = Math.round(p)
                                            p *= stock
                                            price = p

                                            elem.qt = stock
                                            return stock
                                        } else {
                                            return true
                                        }
                                    } else {
                                        return true
                                    }
                                } else { return true }

                            }
                            let qtFood = checkqt()

                            if (qtFood) {
                                qtFood = elem.qt
                            }
                            let baseSelect = elem.baseU
                            qtFood = parseFloat(qtFood)




                            console.log(price, 'iiii')
                            offerPrice = price - (price * (offer / 100))
                            console.log('mainP', offerPrice)

                            offerPrice = Math.round(offerPrice)
                            offerPrice = offerPrice.toLocaleString()
                            price = price.toLocaleString()
                            if (actOrder === null) {
                                if (n2 === n1) {
                                    let ifd = JSON.parse(localStorage.getItem('foodsAdded'))
                                    if (ifd.length !== 0) {
                                        elem.price = "₹" + price
                                        ifd.splice(index, 1)
                                        ifd.push(elem)
                                        localStorage.setItem('foodsAdded', JSON.stringify(ifd))
                                    }
                                }
                            }

                            let has2selU = false
                            if (itm.unitInit[0].name !== undefined) {
                                has2selU = true
                            }
                            let per_unit_price = 0

                            if (!has2selU) {
                                if (itm.unitInit !== null) {
                                    unFd = itm.unitInit.map(((el, iN) => {
                                        let ht
                                        if (el.price !== null) {
                                            el.price = parseFloat(el.price).toLocaleString()
                                            ht = ` <li>
        
                     <span>${el.unitNum} ${el.unitU}</span>
                     <am>₹ ${el.price}</am>
                     <span class='hidden'>${el.stock}</span>
    
                 </li>`
                                        } else {
                                            ht = ` <li class='othTog'>
                            
                            <span>${el.unit}</span>
                            <span class='hidden'>${el.stock}</span>
    
                        </li>`
                                        }
                                        return ht
                                    }))
                                    unFd = unFd.join(' ')
                                }


                            } else {
                                console.log(elem.baseU, 'from 19039')
                                baseSelect = elem.baseU
                                elem.baseMain = 'Base'
                                if (itm.unitInit !== null) {

                                    unFd = itm.unitInit.map(((el, iN) => {
                                        let ht


                                        if (el.price !== null && !isNaN(el.price)) {
                                            if (parseFloat(el.unitNum) === 1) {
                                                per_unit_price = parseFloat(el.price)
                                                per_unit_price *= Qty_units
                                            }
                                            per_unit_price = Math.round(per_unit_price)
                                            per_unit_price = per_unit_price.toLocaleString()
                                            el.price = parseFloat(el.price).toLocaleString()

                                            ht = ` <li>
    
                 <span>${el.name}</span>
                 <am>₹ ${el.price}</am>
                 <span class='hidden'>${el.stock}</span>

             </li>`
                                        } else {
                                            ht = ` <li class='othTog'>
                        
                        <span>${el.name}</span>
                        <span class='hidden'>${el.stock}</span>

                    </li>`
                                        }
                                        return ht
                                    }))
                                    unFd = unFd.join(' ')

                                }

                            }
                            let Qty_units = baseSelect.split(' ')[0]
                            if (baseSelect.split(' ').includes('k')) {
                                Qty_units = baseSelect.split('k')[0]
                            } else if (baseSelect.split(' ').includes('g')) {
                                Qty_units = baseSelect.split('g')[0]
                            }

                            if (Qty_units >= itm.netweight) {
                                Qty_units = itm.netweight
                            }
                            Qty_units = parseFloat(Qty_units)
                            let contBxqt = ''
                            let htmUNITS = ``
                            if (baseSelect.split(' ').join('') === 'notselected') {
                                htmUNITS = `     <span>${elem.baseMain}</span>
                                <ar>${baseSelect}</ar>`
                            } else {
                                htmUNITS = `  <span>${elem.baseMain} - ${baseSelect}</span>
                                <ar>₹${elem.selU2}</ar>`
                            }
                            if (itemDb.price === '0') {
                                contBxqt = `   <div class="ct_bx_qty_inner nottog">
    <div class="ct_bx_weight_qt">
        <div class="ct_inner_weh">
            ${htmUNITS}
        </div>
    
        <div class="ct_bx_up">
            <ion-icon name="chevron-up-outline" role="img"
                class="md hydrated"
                aria-label="chevron up outline"></ion-icon>
    
        </div>
        <div class="ct_bx_dwn">
            <ion-icon name="chevron-down-outline" role="img"
                class="md hydrated"
                aria-label="chevron down outline">
            </ion-icon>
    
        </div>
    
    </div>
    <div class="ct_bx_units_item">
    <ul>
        <div class="ct_bx_ov_units">
        <p>${itemDb.fdInside[0].name}</p>
        </div>
        <div class="ct_bx_show_units_krick">
    
        ${unFd}
    
    
        </div>
        <div class="ct_bx_show_units_krick for_set" style="display: none;">
            <span>Unit</span>
            <div class="ct_inner_setunit">
                <input type="text" value="${Qty_units}">
                <p>${itemDb.unitUni}</p>
            </div>
            <div class="ct_total_cost_units">
                <span>Cost</span>
                <p>₹ ${per_unit_price}</p>
            </div>
            <div class="ct_btns_units_set">
            <button>Reset</button>
            <button>Apply</button>
            </div>
    
        </div>
    
    
    </ul>
    </div>
    </div>`
                            }

                            html2 = `<li class="main_li_cart_fd_lis">
        
                                    <div class="ct_itm_food_cart">
                             
                                    <a class="img_a_cart" href="/product?${elem.href}">
        
                                    <img class="main_cart_img" src='${itm.img}' alt='img'>
                                        </a>
        
                                        <span class="stk_cart">${stock}</span>
                                        <span class="stk_cart">${netweight}</span>
                                        <span class="id hidden">${itm.id}</span>

                                        <div class="flex_bx_cart_itm">
        
                                            <h4>${itm.name}</h4>
                                            <div class="ct_bx_ratings">
                                            ${html1}
        
                                            </div>
        
                                            <div class="ct_bx_qty">
        <span class='hidden'>${elem.selU}</span>
        <span class='hidden'>${elem.selU2}</span>

                            
                                     ${contBxqt}
                                                <div class="ct_bx_qt_foods">
                                                    <div class="ct_bx_item_rem">
                                                        <ion-icon name="remove-outline" role="img" class="md hydrated" aria-label="remove outline"></ion-icon>
                                                    </div>
                                                    <input type="text" value="${elem.qt}">
                                                    <div class="ct_bx_item_add">
                                                        <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon>
                                                    </div>
        
                                                </div>
                                            </div>
                                            <p class="price_am_cart_fd2"><del style='margin-left:10px'>₹ ${price}</del> <span>₹ ${offerPrice}</span> <of>( ${itm.offer} % off)</of> </p>
        
        
        
        
        
                                            <div class="remove_fd_itm_ct">
                                                <p>Delete</p>
                                            </div>
        
        
        
        
                                        </div>
        
        
        
        
        
        
        
        
        
        
        
                                    </div>
                                </li>`
                        } else {
                            price = parseFloat(itemDb.price.split(',').join(''))
                            offerPrice = price - (price * (offer / 100))
                            offerPrice = Math.round(offerPrice) * qt
                            price = price * qt
                            offerPrice = offerPrice.toLocaleString()
                            price = price.toLocaleString()
                            if (n2 === n1) {
                                let ifd = JSON.parse(localStorage.getItem('foodsAdded'))
                                if (ifd.length !== 0) {
                                    elem.price = "₹" + price
                                    ifd.splice(index, 1)
                                    ifd.push(elem)
                                    localStorage.setItem('foodsAdded', JSON.stringify(ifd))
                                }
                            }
                            let isTandSfree
                            if (itm.freeperm) {
                                isTandSfree = itm.freeperm
                            } else {
                                isTandSfree = 'Not free'
                            }



                            html2 = `<li class="main_li_cart_fd_lis has_not_ubnit_itm">
        
                                    <div class="ct_itm_food_cart">
                             
                                    <a class="img_a_cart" href="/product?${elem.href}">
        
                                    <img class="main_cart_img" src='${itm.img}' alt='img'>
                                        </a>
        
                                        <span class="stk_cart">${stock}</span>
                                        <span class="stk_cart">${netweight}</span>
                                        <span class="id hidden">${itm.id}</span>

                                        <div class="flex_bx_cart_itm">
        
                                            <h4>${itm.name}</h4>
                                            <div class="ct_bx_ratings">
                                            ${html1}
        
                                            </div>
                                            <div class="ct_bx_qty">
                                            <span class='hidden'>${elem.selU}</span>
                                            <span class='hidden'>${elem.selU2}</span>
                                    
                                                                                    <div class="ct_bx_qt_foods">
                                                                                        <div class="ct_bx_item_rem">
                                                                                            <ion-icon name="remove-outline" role="img" class="md hydrated" aria-label="remove outline"></ion-icon>
                                                                                        </div>
                                                                                        <input type="text" value="${elem.qt}">
                                                                                        <div class="ct_bx_item_add">
                                                                                            <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon>
                                                                                        </div>
                                            
                                                                                    </div>
                                                                                </div>
                                            <p class="price_am_cart_fd2"><del style='margin-left:10px'>₹ ${price}</del> <span>₹ ${offerPrice}</span> <of>( ${itm.offer} % off)</of> </p>
        
        
        
        
        
                                            <div class="remove_fd_itm_ct">
                                                <p>Delete</p>
                                            </div>
        
        
        
        
                                        </div>
        
        
        
        
        
        
        
        
        
        
        
                                    </div>
                                </li>`
                        }





                    } else {
                        let qt = elem.qt
                        let nNum = parseFloat(netweight)
                        let hasTwoSelection = false
                        // console.log(qt,'iiii')

                        // price = price - parseFloat(elem.initU)
                        // price += parseFloat(elem.selP)
                        // price = price * qt
                        // price = price.toLocaleString()
                        if (itm.unitInit[0].name !== undefined) {
                            hasTwoSelection = true
                        }

                        let stock = parseFloat(netweight)
                        let checkqt = () => {
                            let fnun
                            let selp = parseFloat(elem.selU2)
                            if (selp !== 0) {
                                if (!hasTwoSelection) {
                                    if (itm.unitInit !== null) {
                                        elem.unitInit.forEach(cur => {
                                            let fUn = `${cur.unitNum}${cur.unitU}`
                                            let bU = elem.baseU.split(' ')[0]
                                            if (fUn === bU) {
                                                stock = parseFloat(cur.stock)
                                            }
                                        })
                                    }
                                } else {
                                    elem.unitInit.forEach(cur => {
                                        if (cur.name === elem.baseU2) {
                                            stock = parseFloat(cur.stock)
                                        }


                                    })




                                }
                            } else {
                                if (itm.unitInit !== null) {

                                    elem.unitInit.forEach(cur => {
                                        if (cur.price === null) {
                                            stock = parseFloat(cur.stock)
                                        }


                                    })
                                }
                            }

                            if (stock !== false) {

                                if (String(stock).split('.')[0] !== undefined) {
                                    stock = String(stock).split('.')[0]
                                    stock = parseFloat(stock)
                                } else {
                                    stock = stock.split('.')[0]

                                }
                                elem.qt = parseFloat(elem.qt)
                                if (actOrder === null) {
                                    if (elem.qt > stock) {
                                        let p = elem.price.split('₹')[1].split(',').join('')
                                        p = parseFloat(p)
                                        p = p / parseFloat(elem.qt)
                                        p = Math.round(p)
                                        p *= stock
                                        price = p
                                        elem.qt = stock
                                        return stock
                                    } else {
                                        return true
                                    }
                                } else {
                                    return true
                                }
                            } else { return true }

                        }
                        let qtFood = checkqt()
                        console.log(stock, price, elem.qt, 'ioos')
                        // console.log(stock, elem.qt, 'ioos')
                        // return

                        if (qtFood) {
                            qtFood = elem.qt
                        }
                        let baseSelect = elem.baseU
                        if (actOrder === null) {




                            if (itm.unitInit !== null) {


                                price = price.toLocaleString()
                                console.log(price, 'kloo')

                                if (n2 === n1) {
                                    let ifd = JSON.parse(localStorage.getItem('foodsAdded'))
                                    if (ifd.length !== 0) {
                                        elem.price = "₹" + price

                                        ifd.splice(index, 1)
                                        ifd.push(elem)
                                        localStorage.setItem('foodsAdded', JSON.stringify(ifd))
                                    }
                                }
                                let has2selU = false
                                if (itm.unitInit[0].name !== undefined) {
                                    has2selU = true
                                }
                                let Qty_units = baseSelect.split(' ')[0]
                                if (baseSelect.split(' ').includes('k')) {
                                    Qty_units = baseSelect.split('k')[0]
                                } else if (baseSelect.split(' ').includes('g')) {
                                    Qty_units = baseSelect.split('g')[0]
                                }

                                if (Qty_units >= itm.netweight) {
                                    Qty_units = itm.netweight
                                }
                                let per_unit_price = 0

                                Qty_units = parseFloat(Qty_units)
                                let unFd
                                if (!has2selU) {
                                    unFd = itm.unitInit.map(((el, iN) => {
                                        let ht

                                        if (el.price !== null) {
                                            if (parseFloat(el.unitNum) === 1) {
                                                per_unit_price = parseFloat(el.price)
                                                per_unit_price *= Qty_units
                                            }

                                            el.price = parseFloat(el.price).toLocaleString()

                                            ht = ` <li>
        
                <span>${el.unitNum} ${el.unitU}</span>
                                     <am>₹ ${el.price}</am>
                                     <span class='hidden'>${el.stock}</span>

                                 </li>`
                                        } else {
                                            ht = ` <li class='othTog'>
                                            
                                            <span>${el.unit}</span>
                                            <span class='hidden'>${el.stock}</span>

                                        </li>`
                                        }

                                        return ht
                                    }))
                                    unFd = unFd.join(' ')

                                }
                                let htmUNITS = ``
                                per_unit_price = Math.round(per_unit_price)
                                per_unit_price = per_unit_price.toLocaleString()
                                if (baseSelect.split(' ').join('') === 'notselected') {
                                    htmUNITS = `     <span>${elem.baseMain}</span>
                                <ar>${baseSelect}</ar>`
                                } else {
                                    htmUNITS = `  <span>${elem.baseMain} - ${baseSelect}</span>
                                <ar>₹${elem.selU2}</ar>`
                                }
                                let htm
                                let contBxqt = ''
                                if (itemDb.price === '0') {
                                    contBxqt = ` <div class="ct_bx_qty_inner nottog">
                                    <div class="ct_bx_weight_qt">
                                        <div class="ct_inner_weh">
                                      ${htmUNITS}
                                        </div>

                                        <div class="ct_bx_up">
                                            <ion-icon name="chevron-up-outline" role="img"
                                                class="md hydrated"
                                                aria-label="chevron up outline"></ion-icon>

                                        </div>
                                        <div class="ct_bx_dwn">
                                            <ion-icon name="chevron-down-outline" role="img"
                                                class="md hydrated"
                                                aria-label="chevron down outline">
                                            </ion-icon>

                                        </div>

                                    </div>
                                    <div class="ct_bx_units_item">
                                    <ul>
                                        <div class="ct_bx_ov_units">
                                        <p>${itemDb.fdInside[0].name}</p>
                                        </div>
                                        <div class="ct_bx_show_units_krick">

                                        ${unFd}


                                        </div>
                                        <div class="ct_bx_show_units_krick for_set" style="display: none;">
                                            <span>Unit</span>
                                            <div class="ct_inner_setunit">
                                                <input type="text" value="${Qty_units}">
                                                <p>${itemDb.unitUni}</p>
                                            </div>
                                            <div class="ct_total_cost_units">
                                                <span>Cost</span>
                                                <p>₹ ${per_unit_price}</p>
                                            </div>
                                            <div class="ct_btns_units_set">
                                            <button>Reset</button>
                                            <button>Apply</button>
                                            </div>

                                        </div>


                                    </ul>
                                </div>`
                                }
                                if (nNum === 0) {
                                    htm = ` <div class="ct_bx_qty">
                                    <span class='hidden'>${elem.selU}</span>
                                    <span class='hidden'>${elem.selU2}</span>
                            
                                                                   ${contBxqt}
                                                                   
                                                                </div>
                                                                            <div class="ct_bx_qt_foods">
                                                                                <div class="ct_bx_item_rem">
                                                                                    <ion-icon name="remove-outline" role="img" class="md hydrated" aria-label="remove outline"></ion-icon>
                                                                                </div>
                                                                                <input type="text" value="${elem.qt}">
                                                                                <div class="ct_bx_item_add">
                                                                                    <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon>
                                                                                </div>
                                    
                                                                            </div>
                                                                        </div>
                           `
                                } else {
                                    htm = `                          <div class="ct_bx_qty">
                                    <span class='hidden'>${elem.selU}</span>
                                    <span class='hidden'>${elem.selU2}</span>
                            
                                                               ${contBxqt}
                                                                </div>
                                                                            <div class="ct_bx_qt_foods">
                                                                                <div class="ct_bx_item_rem">
                                                                                    <ion-icon name="remove-outline" role="img" class="md hydrated" aria-label="remove outline"></ion-icon>
                                                                                </div>
                                                                                <input type="text" value="${elem.qt}">
                                                                                <div class="ct_bx_item_add">
                                                                                    <ion-icon name="add-outline" role="img" class="md hydrated" aria-label="add outline"></ion-icon>
                                                                                </div>
                                    
                                                                            </div>
                                                                        </div>`
                                }

                                html2 = `<li class="main_li_cart_fd_lis">
    
                                <div class="ct_itm_food_cart">
                         
                                <a class="img_a_cart" href="/product?${elem.href}">
    
                                <img class="main_cart_img" src='${itm.img}' alt='img'>
                                    </a>
    
                                    <span class="stk_cart">${stock}</span>
                                    <span class="stk_cart">${netweight}</span>
                                    <span class="id hidden">${itm.id}</span>

                                    <div class="flex_bx_cart_itm">
    
                                        <h4>${itm.name}</h4>
                                        <div class="ct_bx_ratings">
                                        ${html1}
    
                                        </div>
    
                                        ${htm}
    
                                     
                                        <p class="price_am_cart_fd2"><span>₹ ${price}</span>  </p>
    
    
    
    
                                        <div class="remove_fd_itm_ct">
                                            <p>Delete</p>
                                        </div>
    
    
    
    
                                    </div>
    
    
    
    
    
    
    
    
    
    
    
                                </div>
                            </li>`
                            }

                        }



                    }

                } else {
                    if (JSON.parse(localStorage.getItem('orders')) === null) {
                        stockFin = null
                        let arr = JSON.parse(localStorage.getItem('foodsAdded'))
                        arr.splice(index, 1)
                        localStorage.setItem('foodsAdded', JSON.stringify(arr))
                        addBill()
                    }
                }

                console.log(html2, 'htm')

                if (html2 !== null && stockFin !== null) {
                    document.querySelector('.bx_evt_cart_item .loader_cart').style.display = 'none'
                    document.querySelector(bx).insertAdjacentHTML('beforeend', html2)

                    addBill()
                }
            } else if (html2 === null) {
                document.querySelectorAll('.for_ek_fd_cart_load').forEach(cur => {
                    cur.style.display = 'none'

                })

                document.querySelectorAll('.for_ek_food_cart').forEach(cur => {
                    cur.style.display = 'flex'

                })

                document.querySelector('.ct_other_nav_cart .ct_bin_ts_nav_ck ').style.display = 'none'
                document.querySelector('.ct_bx_information_cart').style.display = 'none'
            }
            if (noReccom) {
                document.querySelector('.ek_cart').style.background = 'white'
                document.querySelector('.for_items_recm').style.display = 'none'

            }
        })
    })



}

// if (window.screen.width <= 1160 && window.screen.width > 920) {
//     btns.forEach(cur => {
//         cur.addEventListener('click', (e) => {
//             if (e.target.id === 'prev_crousel') {
//                 iG--
//                 document.querySelector('#forw').style['pointer-events'] = 'auto'
//                 document.querySelector('#forw').style.opacity = '1'

//                 if (iG !== 0) {
//                     let calcT = iG * 84

//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}vw`
//                         if (iG < 0) { iG = 0 }


//                     })
//                 } else {
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

//                         row1.style.left = `-0vw`
//                     })
//                     document.querySelector('#prev_crousel').style['pointer-events'] = 'none'
//                     document.querySelector('#prev_crousel').style.opacity = '.5'
//                     document.querySelector('#forw').style['pointer-events'] = 'auto'
//                     document.querySelector('#forw').style.opacity = '1'
//                 }
//             } else {
//                 iG++

//                 document.querySelector('#prev_crousel').style['pointer-events'] = 'auto'
//                 document.querySelector('#prev_crousel').style.opacity = '1'
//                 let togo = Math.round(document.querySelectorAll('.fd_ek_cell_car_recom').length / 5) - 1
//                 if (document.querySelector('#forw') !== null) {
//                     document.querySelector('#forw').style['pointer-events'] = 'auto'
//                     document.querySelector('#forw').style.opacity = '1'
//                 }
//                 if (iG === togo || togo === 0) {
//                     document.querySelector('#forw').style['pointer-events'] = 'none'
//                     document.querySelector('#forw').style.opacity = '.5'

//                 }
//                 if (togo === 0) { togo = 1 }
//                 if (iG <= togo) {
//                     let calcT = iG * 84
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}vw`

//                         if (iG === 0) { row1.style.left = `-0vw` }



//                     })
//                 }
//             }

//         })
//     })
// }
// if (window.screen.width >= 1360) {

//     btns.forEach(cur => {
//         cur.addEventListener('click', (e) => {
//             if (e.target.id === 'prev_crousel') {
//                 iG--
//                 document.querySelector('#forw').style['pointer-events'] = 'auto'
//                 document.querySelector('#forw').style.opacity = '1'

//                 if (iG !== 0) {
//                     let calcT = iG * 963

//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}px`
//                         if (iG < 0) { iG = 0 }


//                     })
//                 } else {
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

//                         row1.style.left = `-0vw`
//                     })
//                     document.querySelector('#prev_crousel').style['pointer-events'] = 'none'
//                     document.querySelector('#prev_crousel').style.opacity = '.5'
//                     document.querySelector('#forw').style['pointer-events'] = 'auto'
//                     document.querySelector('#forw').style.opacity = '1'
//                 }
//             } else {
//                 iG++

//                 document.querySelector('#prev_crousel').style['pointer-events'] = 'auto'
//                 document.querySelector('#prev_crousel').style.opacity = '1'
//                 let togo = Math.round(document.querySelectorAll('.fd_ek_cell_car_recom').length / 5) - 1
//                 if (document.querySelector('#forw') !== null) {
//                     document.querySelector('#forw').style['pointer-events'] = 'auto'
//                     document.querySelector('#forw').style.opacity = '1'
//                 }
//                 if (iG === togo || togo === 0) {
//                     document.querySelector('#forw').style['pointer-events'] = 'none'
//                     document.querySelector('#forw').style.opacity = '.5'

//                 }
//                 if (togo === 0) { togo = 1 }
//                 if (iG <= togo) {
//                     let calcT = iG * 966
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}px`

//                         if (iG === 0) { row1.style.left = `-0vw` }



//                     })
//                 }
//             }

//         })
//     })
// }
// if (window.screen.width > 1300 && window.screen.width < 1380) {
//     let iG = 0


//     btns.forEach(cur => {
//         cur.addEventListener('click', (e) => {

//             if (e.target.id === 'prev_crousel') {
//                 iG--
//                 document.querySelector('#forw').style['pointer-events'] = 'auto'
//                 document.querySelector('#forw').style.opacity = '1'
//                 if (iG !== 0) {
//                     let calcT = iG * 83

//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}vw`
//                         if (iG < 0) { iG = 0 }


//                     })
//                 } else {
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {

//                         document.querySelector('#prev_crousel').style['pointer-events'] = 'none'
//                         document.querySelector('#prev_crousel').style.opacity = '.5'
//                         row1.style.left = `-0vw`
//                     })
//                 }
//             } else {

//                 iG++

//                 document.querySelector('#prev_crousel').style['pointer-events'] = 'auto'
//                 document.querySelector('#prev_crousel').style.opacity = '1'
//                 let togo = Math.round(document.querySelectorAll('.fd_ek_cell_car_recom').length / 5) - 1
//                 if (document.querySelector('#forw') !== null) {
//                     document.querySelector('#forw').style['pointer-events'] = 'auto'
//                     document.querySelector('#forw').style.opacity = '1'
//                 }
//                 if (iG === togo || togo === 0) {
//                     document.querySelector('#forw').style['pointer-events'] = 'none'
//                     document.querySelector('#forw').style.opacity = '.5'

//                 }
//                 if (togo === 0) { togo = 1 }
//                 if (iG <= togo) {
//                     let calcT = iG * 83
//                     document.querySelectorAll('.inner_slide .fd_ek_cell_car_recom').forEach(row1 => {
//                         row1.style.left = `-${calcT}vw`

//                         if (iG === 0) { row1.style.left = `-0vw` }



//                     })
//                 }
//             }
//             console.log(iG)

//         })
//     })
// }



// krick page

var waypoint = new Waypoint({
    element: document.querySelector("#ek_res_ev")
    , handler: function (e) {
        document.querySelector(".ct_nav_erak .mai_ul")
            .getBoundingClientRect()
            .width;
        if ("down" === e) {
            let e = document.querySelector(".for_nav_main")
                .getBoundingClientRect()
                .height - 8;
            if (
                (window.screen.width <= 740 && ((document.querySelector(".for_nav_main")
                    .style.height = "63px"), (e = 63)), window.screen.width <= 1100 && ((document.querySelector(".for_mobile_search")
                    .style.display = "none"), window.screen.width <= 740 && (null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.top = e + "px"), (document.querySelector(".ct_nav_erak .mai_ul")
                    .style.width = "63px")), null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.position = "fixed"), window.screen.width <= 740))) {
                if (((document.querySelector(".ct_nav_erak .ct_bx_search")
                            .style.display = "block"), (document.querySelector(".ct_nav_erak .ct_bx_search")
                            .style.display = "flex"), (document.querySelector(".for_ain_home_logo")
                            .style.display = "none"), (document.querySelector(".ct_bx_matched_itm")
                            .style.marginLeft = "0"), (document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                            .style.paddingBottom = "0px"), window.screen.width <= 400 && ((document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                            .style.marginTop = "12px"), (document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                            .style.marginLeft = "0")), 0 !== document.querySelectorAll(".ct_nav_erak .ct_bx_matched_itm li")
                        .length)) {
                    let e = document.querySelector(".ct_nav_erak .ct_bx_search")
                        .getBoundingClientRect()
                        .width;
                    (document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                        .style.width = e + "px"), (document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                        .style.display = "block");
                }
            }(document.querySelector(".for_nav_main")
                .style.top = "0"), (document.querySelector(".for_nav_main")
                .style.position = "fixed"), (document.querySelector(".for_mobile_search")
                .style.position = "fixed"), null !== document.querySelector(".for_seravh_in_nav.active") && ((document.querySelector(".ct_field_small_size_bx")
                .style.display = "none"), (document.querySelector(".mai_ul")
                .style.display = "none"), (document.querySelector(".ct_inner_nav")
                .style.padding = "10px 0"));
        } else if ("up" === e) {
            window.screen.width <= 400 && ((document.querySelector(".mai_ul")
                .style.display = "block"), (document.querySelector(".ct_field_small_size_bx")
                .style.display = "block"), (document.querySelector(".ct_inner_nav")
                .style.padding = "4px px"));
            let e = document.querySelector(".for_nav_main")
                .getBoundingClientRect()
                .height - 8;
            if (window.screen.width <= 1100 && (window.screen.width <= 740 && window.screen.width > 470 && (document.querySelector(".ct_nav_erak .mai_ul")
                    .style.width = "100%"), window.screen.width <= 1100 && window.screen.width > 470 && null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.top = e + "px"), window.screen.width <= 740 && null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.top = e + "px"), window.screen.width <= 470 && window.screen.width > 400 && (document.querySelector(".ct_nav_erak .mai_ul")
                    .style.width = "auto"), window.screen.width <= 470 && window.screen.width > 400 ? null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.top = e + "px") : window.screen.width > 1200 && null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.top = e + "px"), null !== document.querySelector(".yt-loader") && (document.querySelector(".yt-loader")
                    .style.position = "absolute"), window.screen.width <= 740)) {
                (document.querySelector(".for_mobile_search")
                    .style.display = "block"), (document.querySelector(".ct_inner_nav .ct_bx_search")
                    .style.display = "none"), (document.querySelector(".for_ain_home_logo")
                    .style.display = "block"), "" !== document.querySelector(".for_nav_main .ct_bx_search input")
                    .value && document.querySelectorAll(".for_mobile_search .ct_bx_matched_itm li")
                    .length > 0 && (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                        .style.display = "block")
                    , (document.querySelector(".ct_nav_erak .ct_bx_matched_itm")
                        .style.display = "none")
                    , window.screen.width <= 360 && (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                        .style.marginTop = "-2px");
                let e = document.querySelector(".for_mobile_search .ct_bx_search input")
                    .getBoundingClientRect()
                    .width;
                document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                    .style.width = `${e}px`;
            }
            window.screen.width, window.screen.width <= 740 && (document.querySelector(".for_nav_main")
                .style.height = "78px"), (document.querySelector(".for_nav_main")
                .style.position = "absolute"), (document.querySelector(".for_nav_main")
                .style.top = "0"), (document.querySelector(".for_mobile_search")
                .style.position = "absolute");
        }
    }
, });

function getCookie(e) {
    for (var n = e + "=", t = decodeURIComponent(document.cookie)
            .split(";"), o = 0; o < t.length; o++) {
        for (var c = t[o];
            " " == c.charAt(0);) c = c.substring(1);
        if (0 == c.indexOf(n)) return c.substring(n.length, c.length);
    }
    return "";
}

function checkChar(e, n = 10) {
    return e.length <= n ? e : e.length > n ? (e = `${(e = e.split("").slice(0, n).join(""))}..`) : void 0;
}
null === localStorage.getItem("foodsAdded") && localStorage.setItem("foodsAdded", "[]")
    , null === localStorage.getItem("dislikes") && localStorage.setItem("dislikes", "[]")
    , null === localStorage.getItem("likes") && localStorage.setItem("likes", "[]")
    , document.querySelector("html")
    .addEventListener("click", (e) => {
        null !== e.target.closest(".ct_field_small_size") ? (document.querySelector(".ct_bx_slide_bx")
            .classList.value.split(" ")
            .includes("active") || document.querySelector(".ct_bx_slide_bx")
            .classList.add("active"), (document.querySelector(".ct_bx_ov_lay")
                .style.display = "block")) : (document.querySelector(".ct_bx_slide_bx")
            .classList.remove("active"), (document.querySelector(".ct_bx_ov_lay")
                .style.display = "none"));
    });
let user = getCookie("user")
    , dS = document.querySelector(".acc_set_main_nav a")
    , ds2 = document.querySelector(".ct_bx_erak_logo a");
if ("" !== user && null !== dS) {
    let e = JSON.parse(user);
    ds2.setAttribute("href", `/account?user=${e.rootAutyh}`), dS.setAttribute("href", `/account?user=${e.rootAutyh}`);
}
if ("" !== user) {
    let e = JSON.parse(user);
    if ((document.querySelector(".ct_bx_matched_itm"), null !== document.querySelector(".ct_acc_dt_ov h3"))) {
        if (
            ((document.querySelector(".slides_ul .login")
                    .style.display = "none")
                , (document.querySelector(".slides_ul .signup")
                    .style.display = "none"), window.screen.width <= 1200 && null !== document.querySelector(".ct_bx_slide_bx .ct_acc_dt_ov"))) {
            document.querySelectorAll(".ct_bx_slide_bx .ct_acc_dt_ov p")
                .forEach((n) => {
                    console.log(n), (n.innerText = "Hello " + e.n.split(" ")
                        .join(""));
                });
            let n = document.querySelectorAll(".ct_bx_slide_bx .ct_acc_dt_ov a");
            "" !== user && null !== n && (n.forEach((n) => {
                    n.setAttribute("href", `/account?user=${e.rootAutyh}`);
                }), document.querySelector(".account_nav")
                .setAttribute("href", `/account?user=${e.rootAutyh}#orders`), document.querySelector(".account_nav2")
                .setAttribute("href", `/account?user=${e.rootAutyh}#account`));
        }
        window.screen.width < 1200 && (document.querySelector(".ct_bx_slide_bx .ct_acc_dt_ov p")
                .innerText = "Hello " + e.n.split(" ")
                .join(""))
            , window.screen.width <= 1200 && window.screen.width <= 740 && (document.querySelector(" .acc_set_main_nav")
                .style.display = "none"), window.screen.width > 1200 && (document.querySelector(".acc_set_main_nav")
                .style.display = "flex")
            , document.querySelectorAll(".display_on_no_acc")
            .forEach((e) => (e.style.display = "none"));
    }!0 === e.admin ? (document.querySelectorAll(".mekuud a")
        .forEach((n) => n.setAttribute("href", `/admin?authUser=${e.rootAutyh}`)), window.screen.width > 1200 && null != document.querySelector(".mai_ul") && document.querySelectorAll(".dash_board")
        .forEach((e) => (e.style.display = "block")), window.screen.width <= 1e3 && document.querySelectorAll(".slides_ul .dash_board")
        .forEach((e) => (e.style.display = "block"))) : !0 === e.deliv && (document.querySelectorAll(".display_on_no_acc")
        .forEach((e) => (e.style.display = "block")), document.querySelectorAll(".mekuud a")
        .forEach((n) => n.setAttribute("href", `/delivery?authUser=${e.rootAutyh}`)), window.screen.width > 1e3 && document.querySelectorAll(".dash_board")
        .forEach((e) => (e.style.display = "block")), window.screen.width <= 1e3 && document.querySelectorAll(".slides_ul .dash_board")
        .forEach((e) => (e.style.display = "block")), window.screen.width > 1e3 && document.querySelectorAll(".dash_board")
        .forEach((e) => (e.style.display = "block")));
} else null !== document.querySelector(".sign_UP_btn a") && ((document.querySelector(".sign_UP_btn a")
        .style.display = "block")
    , (document.querySelector(".log_in_btn_pk1")
        .style.display = "block")
    , (document.querySelector(".account_nav")
        .style.display = "none")
    , (document.querySelector(".account_nav2")
        .style.display = "none"), window.screen.width <= 1200 && (document.querySelectorAll(".display_on_no_acc")
        .forEach((e) => (e.style.display = "none")), null !== document.querySelector(".ct_bx_slide_bx .ct_acc_dt_ov") && ((document.querySelector(".ct_bx_slide_bx .ct_acc_dt_ov p")
                .innerText = "Hello, Sign in"), document.querySelector(".ct_bx_slide_bx a")
            .setAttribute("href", "/login"))));

function base64url(e) {
    let n = CryptoJS.enc.Base64.stringify(e);
    return (n = (n = n.replace(/=+$/, ""))
            .replace(/\+/g, "-"))
        .replace(/\//g, "_");
}

function secret(e) {
    var n = e.split(".")[1];
    if (void 0 !== n) {
        var t = n.replace(/-/g, "+")
            .replace(/_/g, "/")
            , o = decodeURIComponent(atob(t)
                .split("")
                .map(function (e) {
                    return "%" + ("00" + e.charCodeAt(0)
                            .toString(16))
                        .slice(-2);
                })
                .join(""));
        return JSON.parse(o);
    }
    return null;
}

function is_touch_enabled() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
document.querySelectorAll(".ct_bx_search input")
    .forEach((e) => {
        e.addEventListener("keyup", (n) => {
            console.log(e.value);
            let t = e.value.toLowerCase();
            if ("" !== t)
                (async () => {
                    let o = db.collection("searchFd")
                        , c = (await o.get())
                        .docs.filter((e) => e.data()
                            .name.toLowerCase()
                            .startsWith(t));
                    if ((c.length, 0 !== c.length)) {
                        document.querySelectorAll(".ct_bx_matched_itm ul")
                            .forEach((e) => {
                                e.style.display = "block";
                            });
                        let t = document.querySelectorAll(".ct_bx_search input")[0].getBoundingClientRect()
                            .width;
                        (document.querySelectorAll(".ct_bx_matched_itm")[0].style.width = t + "px")
                        , document.querySelectorAll(".ct_bx_error")
                            .forEach((e) => {
                                e.style.display = "none";
                            });
                        var l = {
                            alg: "HS256"
                            , typ: "JWT"
                        };
                        let o = c.map((e) => {
                            let n = e.data()
                                .name;
                            var t = base64url(CryptoJS.enc.Utf8.parse(JSON.stringify(l))) + "." + base64url(CryptoJS.enc.Utf8.parse(JSON.stringify(n)));
                            let o
                                , c
                                , r
                                , i = e.data()
                                .offer;
                            return (void 0 !== i ? ((c = e.data()
                                    .price), (o = "₹" + (o = (c = parseFloat(c)) - c * ((i = parseFloat(i)) / 100))
                                    .toLocaleString())) : (o = ""), e.data()
                                .img
                                , (c = e.data()
                                    .price), "fd" === e.data()
                                .typ ? (window.location.pathname
                                    , (r = `<li>\n <a href='/product?item=${e.data().id}&qt=1&cid=${
                                      e.data().catId
                                  }'>\n <ion-icon name="search-outline"></ion-icon>\n\n <p>${n}</p>\n\n \n </a>\n \n </li>`)) : (r = `<li>\n <a href='/grocery?q=${e.data().id}&cid=${
                                      e.data().catId
                                  }&typ=groc&itm=${t}'>\n <ion-icon name="search-outline"></ion-icon>\n\n <div class="ct_bx_inner">\n <p>${n}</p>\n\n \n \n </div>\n </a>\n `), r);
                        });
                        if (
                            (document.querySelectorAll(".xclose_icon")
                                .forEach((e) => {
                                    e.style.display = "flex";
                                }), n.target.parentElement.parentElement.classList.value.split(" ")
                                .includes("for_mobile_search"))) {
                            let t;
                            (document.querySelector(".for_nav_search .ct_bx_search input")
                                .value = e.value)
                            , (t = window.screen.width <= 920 ? document.querySelector(".for_mobile_search .ct_bx_search")
                                .getBoundingClientRect()
                                .width : n.target.parentElement.getBoundingClientRect()
                                .width()), (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                                .style.width = t + "px"), (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                                .style.display = "block");
                        } else {
                            document.querySelector(".for_mobile_search .ct_bx_search input")
                                .value = e.value;
                            let t = n.target.parentElement.getBoundingClientRect()
                                .width;
                            (document.querySelector(".for_nav_search .ct_bx_matched_itm")
                                .style.width = t + "px"), (document.querySelector(".for_nav_search .ct_bx_matched_itm")
                                .style.display = "block");
                        }
                        document.querySelectorAll(".ct_content_all_searched ul")
                            .forEach((e) => {
                                e.innerHTML = o.join("");
                            });
                    } else {
                        if (
                            (document.querySelectorAll(".ct_bx_matched_itm li")
                                .forEach((e) => {
                                    e.remove();
                                }), document.querySelectorAll(".xclose_icon")
                                .forEach((e) => {
                                    e.style.display = "flex";
                                })
                                , (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                                    .style.display = "block")
                                , (document.querySelector(".for_mobile_search .ct_bx_error")
                                    .style.display = "block")
                                , (document.querySelector(".for_mobile_search .ct_bx_error p")
                                    .innerText = `no result found for " ${t} "`), n.target.parentElement.parentElement.classList.value.split(" ")
                                .includes("for_mobile_search"))) {
                            let t;
                            (t = window.screen.width <= 920 ? document.querySelector(".for_mobile_search .ct_bx_search")
                                .getBoundingClientRect()
                                .width : n.target.parentElement.getBoundingClientRect()
                                .width()), (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                                .style.width = t + "px"), (document.querySelector(".for_nav_search .ct_bx_search input")
                                .value = e.value);
                        } else {
                            document.querySelector(".for_mobile_search .ct_bx_search input")
                                .value = e.value;
                            let t = n.target.parentElement.getBoundingClientRect()
                                .width;
                            (document.querySelector(".for_nav_search .ct_bx_matched_itm")
                                .style.width = t + "px"), (document.querySelector(".for_nav_search .ct_bx_matched_itm")
                                .style.display = "block");
                        }
                        document.querySelectorAll(".ct_bx_matched_itm ul")
                            .forEach((e) => {
                                e.style.display = "none";
                            })
                            , (document.querySelector(".ct_bx_error")
                                .style.display = "block")
                            , (document.querySelector(".ct_bx_error p")
                                .innerText = `no result found for " ${t} "`);
                    }
                })();
            else {
                let e = document.querySelectorAll(".ct_bx_matched_itm li");
                if (
                    (console.log(e), e.forEach((e) => {
                            e.remove();
                        })
                        , (document.querySelector(".ct_content_all_searched ul")
                            .innerHTML = ""), !n.target.parentElement.parentElement.classList.value.split(" ")
                        .includes("for_mobile_search"))) return (document.querySelector(".for_nav_search .ct_content_all_searched ul")
                    .innerHTML = ""), void(document.querySelector(".for_nav_search .ct_bx_matched_itm")
                    .style.display = "none");
                (document.querySelector(".for_mobile_search .ct_bx_matched_itm")
                    .style.display = "none")
                , (document.querySelector(".for_mobile_search .ct_content_all_searched ul")
                    .innerHTML = "")
                , (document.querySelector(".ct_bx_error")
                    .style.display = "none")
                , (allReady = 0)
                , (numenator = 0)
                , (denomenator = 0)
                , null !== document.querySelector("#search") && document.querySelector("#search")
                    .remove()
                    , null !== document.querySelector(".bodyessestials") ? (functionAddItm2(), location.replace("/grocery")) : null !== document.querySelector(".erak_fd_body") && (functionAddItm(), "" !== window.location.search && location.replace("/foods"));
            }
        });
    })
    , null !== document.querySelector(".xclose_icon") && document.querySelectorAll(".xclose_icon")
    .forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelectorAll(".xclose_icon")
                .forEach((e) => {
                    e.style.display = "none";
                })
                , document.querySelectorAll(".ct_bx_search input")
                .forEach((e) => {
                    e.value = "";
                    let n = document.querySelectorAll(".ct_bx_matched_itm li");
                    console.log(n)
                        , n.forEach((e) => {
                            e.remove();
                        })
                        , (document.querySelector(".ct_content_all_searched ul")
                            .innerHTML = "")
                        , document.querySelectorAll(" .ct_bx_matched_itm")
                        .forEach((e) => {
                            e.style.display = "none";
                        })
                        , document.querySelectorAll(".ct_content_all_searched ul")
                        .forEach((e) => {
                            e.innerHTML = "";
                        })
                        , (document.querySelector(".ct_bx_error")
                            .style.display = "none")
                        , null !== document.querySelector("#search") && document.querySelector("#search")
                        .remove()
                        , null !== document.querySelector(".bodyessestials") ? (functionAddItm2(), "" !== window.location.search && location.replace("/grocery")) : null !== document.querySelector(".erak_fd_body") && (document.querySelector(".for_nav_search .ct_bx_matched_itm")
                            .style.display = "none");
                });
        });
    })
    , window.screen.width <= 400 && null !== document.querySelector(".for_nav_search") && (document.querySelector(".for_nav_search input")
        .addEventListener("click", (e) => {
            (document.querySelector(".ct_field_small_size_bx")
                .style.display = "none")
            , (document.querySelector(".mai_ul")
                .style.display = "none")
            , (document.querySelector(".ct_nav_erak .for_seravh_in_nav")
                .style.margin = "0")
            , (document.querySelector(".icon_search_bx")
                .style.display = "none")
            , document.querySelector(".ct_bx_go_back_nav")
                .classList.add("appear")
                , (document.querySelector(".ct_bx_matched_itm")
                    .style.transform = "translate(0,6px)")
                , (document.querySelector(".ct_inner_nav")
                    .style.padding = "10px 0")
                , setTimeout(() => {
                    document.querySelector(".ct_nav_erak .ct_inner_nav .for_big_scr_only .ct_bx_search")
                        .style.boxShadow = "none";
                }, 200)
                , document.querySelector(".for_big_scr_only")
                .classList.remove("active2")
                , document.querySelector(".for_big_scr_only ")
                .classList.add("active");
        }), document.querySelector(".ct_bx_go_back_nav")
        .addEventListener("click", (e) => {
            (document.querySelector(".ct_field_small_size_bx")
                .style.display = "block")
            , (document.querySelector(".ct_nav_erak .for_seravh_in_nav")
                .style.margin = "5px 0 0 0")
            , (document.querySelector(".mai_ul")
                .style.display = "block")
            , window.screen.width <= 360 && (document.querySelector(".ct_nav_erak .for_seravh_in_nav")
                    .style.margin = "5px 0 0 0"), window.screen.width <= 330 && (document.querySelector(".ct_nav_erak .for_seravh_in_nav")
                    .style.margin = "5px 0 0 0"), (document.querySelector(".icon_search_bx")
                    .style.display = "block"), document.querySelector(".ct_bx_go_back_nav")
                .classList.remove("appear"), (document.querySelector(".xclose_icon")
                    .style.display = "none"), (document.querySelector(".for_big_scr_only input")
                    .value = ""), (document.querySelector(".ct_bx_matched_itm")
                    .style.transform = "translate(0,6px)"), (document.querySelector(".ct_inner_nav")
                    .style.padding = "6px 9px"), (document.querySelector(".ct_nav_erak .ct_inner_nav .for_big_scr_only .ct_bx_search")
                    .style.boxShadow = "0 4px 10px #00000036"), document.querySelector(".for_big_scr_only")
                .classList.remove("active"), document.querySelector(".for_big_scr_only ")
                .classList.add(" active2");
        }));






var addedSelected
, fdItm
, fdGroup
, groping = 1
, notS = null
, addGroup = 0
, addedItmUni = 0
, forC = !1;
window.onload = () => {
const e = async (e, n, t) => {
    if (null !== document.querySelector(".bodyessestials")) {
        if (null === notS)
            if (
                ((await db.collection("grocery")
                        .get())
                    .docs.forEach((e) => {
                        e.data()
                            .name.forEach((e) => {
                                groupedItm2.push(e);
                            });
                    }), "" !== window.location.search))
                if ("cat" === window.location.search.split("?")[1].split("=")[0]) {
                    var o = window.location.search.split("?")[1].split("=")[1];
                    (o = parseFloat(o)), (forC = !0), functionAddItm2(!0, o);
                }
        else functionAddItm2();
        else functionAddItm2();
    } else null === notS && ((await db.collection("foods")
            .get())
        .docs.forEach((e) => {
            e.data()
                .name.forEach((e) => {
                    groupedItm.push(e)
                        , null === actCl ? ((actCl = !0), (html = ` <a class="active_a_cat_ck_fd" href="#${e.name.split(" ").join("")}">${e.name} &mdash; (${e.item} )</a>\n `)) : (html = ` <a class="not_active_a_cat" href="#${e.name.split(" ").join("")}">${e.name} &mdash; (${e.item} )</a>\n `)
                        , null !== document.querySelector(".ct_loading_bx_categories") && (document.querySelector(".ct_loading_bx_categories")
                            .style.display = "none");
                });
        }), functionAddItm());
};
var n;
if ("" !== window.location.search) {
    if (((n = window.location.search.split("&")), ("q" === window.location.search.split("?")[1].split("=")[0] && "" !== window.location.search) || e(), "q" === window.location.search.split("?")[1].split("=")[0]))
        if (null !== secret(n[0].split("=")[1]) && "fd" === n[2].split("=")[1]) {
            var t = n[0].split("=")[1];
            n[1].split("=")[1], n[2].split("=")[1], (t = decodeURIComponent(t)), e();
        }
    else(t = n[0].split("=")[1]), n[1].split("=")[1], n[2].split("=")[1], (t = decodeURIComponent(t)), e();
} else e();
};
const giveChtml = async (e, n, t, o, c, l, r, i, a, s, d, u, _, m, y, p = !1, f = !1, h = 0) => {
let g = ""
    , S = !0;
var b, v;
JSON.parse(localStorage.getItem("foodsAdded"))
    .forEach((e) => {
        e.id === m && (S = !1);
    })
    , ("0" !== c && 0 !== c) || ((r = 0), (c = 0), (a = null))
    , p ? ((allReady = 0), (fdGrgoup = p)) : (fdGroup = fdGroup), !0 === f && (fdGroup = h);
let w = "";
if ("" !== getCookie("user") && !0 !== n) {
    let e = JSON.parse(getCookie("user"))
        .business
        , t = JSON.parse(getCookie("user"))
        .rootAutyh
        , o = window.location.search.split("&")[0].split("=")[1];
    if (window.location.pathname.split("/")
        .includes(""))
        if (e && void 0 !== o) {
            if (t === o) {
                null !== a && "Free" !== a && (b = `\n <div class="ct_offer_box">\n <span>${a}% off</span>\n </div>\n `)
                    , void 0 !== n ? n ? null !== a && "Free" !== a ? ((v = `\n <a class='commSoon' \n>\n <span class="hidden">${m}</span>\n <span class="hidden">${y}</span>\n <span class="hidden">${groping}</span>\n\n <div class="ct_offer_box" style=filter:grayscale(1)>\n <span>${a}% off</span>\n </div>\n\n `)
                        , (w = "style=filter:grayscale(1)")) : ((v = `\n <a class='commSoon'>\n <span class="hidden">${m}</span>\n <span class="hidden">${y}</span>\n <span class="hidden">${groping}</span>\n\n `)
                        , (w = "style=filter:grayscale(1)")) : (v = `\n <a>\n <span class="hidden">${m}</span>\n <span class="hidden">${y}</span>\n <span class="hidden">${groping}</span>\n\n `) : (v = `\n <a>\n <span class="hidden">${m}</span>\n <span class="hidden">${y}</span>\n <span class="hidden">${groping}</span>\n\n \n `);
                let e = [];
                null !== localStorage.getItem("krBusiness") ? JSON.parse(localStorage.getItem("krBusiness"))
                    .length ? (JSON.parse(localStorage.getItem("krBusiness"))
                        .forEach((n) => {
                            e.push(n.id);
                        })
                        , (g = e.includes(m) ? ' <button class="gotocartkr">Go to Cart <ion-icon name="chevron-forward-outline" role="img" class="md hydrated" aria-label="chevron forward outline"></ion-icon></button>\n <button style=\'display:none\' class="Addtocartkrick">Add to Cart</button>' : ' <button style=\'display:none\' class="gotocartkr">Go to Cart <ion-icon name="chevron-forward-outline" role="img" class="md hydrated" aria-label="chevron forward outline"></ion-icon></button>\n <button class="Addtocartkrick">Add to Cart</button>')) : (g = ' <button style=\'display:none\' class="gotocartkr">Go to Cart <ion-icon name="chevron-forward-outline" role="img" class="md hydrated" aria-label="chevron forward outline"></ion-icon></button>\n <button class="Addtocartkrick">Add to Cart</button>') : (g = ' <button style=\'display:none\' class="gotocartkr">Go to Cart <ion-icon name="chevron-forward-outline" role="img" class="md hydrated" aria-label="chevron forward outline"></ion-icon></button>\n <button class="Addtocartkrick">Add to Cart</button>');
            }
        }
    else null !== a && "Free" !== a && (b = `\n <div class="ct_offer_box">\n <span>${a}% off</span>\n </div>\n `)
        , void 0 !== n ? n ? null !== a && "Free" !== a ? ((v = "\n <a class='commSoon' \n>\n \n "), (w = "style=filter:grayscale(1)")) : ((v = "\n <a class='commSoon'>\n "), (w = "style=filter:grayscale(1)")) : (v = `\n <a \n href="/product?item=${m}&qt=1&catId=${groping}">\n \n `) : (v = `\n <a\n href="/product?item=${m}&qt=1&catId=${groping}">\n \n `);
} else null !== a && "Free" !== a && (b = `\n <div class="ct_offer_box">\n <span>${a}% off</span>\n </div>\n `)
    , void 0 !== n ? n ? null !== a && "Free" !== a ? ((v = "\n <a class='commSoon' \n>\n \n "), (w = "style=filter:grayscale(1)")) : ((v = "\n <a class='commSoon'>\n "), (w = "style=filter:grayscale(1)")) : (v = `\n <a \n href="/product?item=${m}&qt=1&catId=${groping}">\n \n `) : (v = `\n <a \n href="/product?item=${m}&qt=1&catId=${groping}">\n \n `);
var q
    , x
    , k = !0
    , A = 0
    , I = 0;
if (
    (null !== u && 0 !== u.length && u.forEach((e) => {
        (A += e.star * e.ratings), (I += e.ratings), 0 !== e.ratings && (k = !1);
    }), k)) q = ' <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>';
else {
    var $ = parseFloat((A / I)
            .toFixed(2)
            .split(".")[0])
        , C = parseFloat((A / I)
            .toFixed(2)
            .split(".")[1].split("")[0]);
    5 === $ ? (q = ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>') : 4 === $ ? (q = C > 1 ? ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>\n </span>' : ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>') : 3 === $ ? (q = C > 1 ? ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>' : ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>') : 2 === $ ? (q = C > 1 ? ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>' : ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>') : 1 === $ && (q = C > 1 ? ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>' : ' <span>\n <ion-icon class="filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star-half"></ion-icon>\n </span>\n \n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>\n \n <span>\n <ion-icon class="not_filed_rating_itm" name="star"></ion-icon>\n </span>');
}
if (p) {
    if (((fdGroup = "search"), 0 == (allReady = 0))) {
        var E = ` <div class="list_food_at_ov groc_list for_erak_list" id='${fdGroup.split(" ").join("")}'>\n\n<h3>search result found for " ${p} "</h3>\n\n\n<div class="ct_cat_by_list">\n\n</div>\n</div>\n\n`;
        document.querySelector(".ct_all_list_food")
            .insertAdjacentHTML("beforeend", E);
    }
} else(fdGroup = fdGroup)
    , 0 === allReady && ((E = ` <div class="list_food_at_ov groc_list for_erak_list" id='${fdGroup.split(" ").join("")}'>\n\n<h3>${fdGroup}</h3>\n\n\n<div class="ct_cat_by_list">\n\n</div>\n</div>\n\n`), document.querySelector(".ct_all_list_food")
        .insertAdjacentHTML("beforeend", E));
if (((allReady += 1), null !== a)) {
    "Free" === a && (b = "");
    let e = "";
    ("0" === (c = (c = parseFloat(c))
        .toLocaleString()) && 0 === c) || (e = "hasPrice");
    let o = ` <p class="price">₹ ${Math.round(r).toLocaleString()}</p>\n<del class="price">₹ ${c.toLocaleString()}</del>`;
    n && ((o = ' <p class="price commingSoonp">Comming soon.</p>\n'), (b = ""))
        , (x = `<div class="ct_bx_fooditm">\n \n ${v}\n <div class="ct_bx_flex">\n <img class="main_im" ${w} src="../img/${i}">\n\n <div class="ct_bx_inner_food_groc">\n \n <h4 ${w}>${t}</h4>\n <div class="ct_bx_ratings">\n ${q}\n \n </div>\n \n <div class="ct_bx_price_fd ${e}" style=margin-top:12px>\n ${o} \n ${b}\n </div>\n ${g}\n\n </div>\n </div>\n </a>\n\n </div>`);
} else {
    let e = "";
    ("0" === c && 0 === c) || (e = "hasPrice");
    let o = `<p class="price">₹ ${c.toLocaleString()}</p>`;
    n && (o = '<p class="price commingSoonp">Comming soon.</p>')
        , (x = `<div class="ct_bx_fooditm">\n \n ${v}\n\n <div class="ct_bx_flex">\n <img class="main_im" ${w} src="../img/${i}">\n\n <div class="ct_bx_inner_food_groc">\n \n <h4 ${w}>${t}</h4>\n <div class="ct_bx_ratings">\n ${q}\n \n </div>\n \n <div class="ct_bx_price_fd ${e}">\n ${o}\n </div>\n </div>\n ${g}\n\n </div>\n\n \n\n </div>\n </a>\n\n </div>`);
}
document.querySelector(`#${fdGroup.split(" ").join("")} .ct_cat_by_list`)
    .insertAdjacentHTML("beforeend", x)
    , (document.querySelector(".for_ek_fd_full_load")
        .style.display = "none")
    , window.screen.width > 550 && (window.screen.width <= 650 && (document.querySelectorAll(".ct_inner_fd1_dt_grid ")
            .forEach((e) => {
                e.style.transform = " translate(54px,0px)";
            }), document.querySelectorAll(".erak_fd_body .itm_food_list_ek .ct_img_res_main img ")
            .forEach((e) => {
                (e.style.height = " 193px"), (e.style.width = "41vw");
            })), window.screen.width <= 600 && (document.querySelectorAll(".ct_img_res_main img")
            .forEach((e) => {
                e.style.height = "193px";
            }), document.querySelectorAll(".ct_img_res_main img")
            .forEach((e) => {
                e.style.width = "45vw";
            })), window.screen.width <= 550 && document.querySelectorAll(".erak_fd_body .itm_food_list_ek .ct_img_res_main img ")
        .forEach((e) => {
            (e.style.width = " 49vw"), (e.style.height = "179px");
        })), window.screen.width < 470 && window.screen.width > 400 && (document.querySelectorAll(".erak_fd_body .itm_food_list_ek .ct_img_res_main img ")
        .forEach((e) => {
            (e.style.height = "156px"), (e.style.width = "50vw"), (e.style.marginLeft = "-21px");
        }), document.querySelectorAll(".ct_cat_by_list .itm_food_list_ek ")
        .forEach((e) => {
            e.style.marginLeft = "10px";
        }), document.querySelectorAll(".itm_food_list_ek .ct_dt_tm_food_res h4 ")
        .forEach((e) => {
            e.style.width = "70%";
        }));
};
var numItm
, html
, addedNames = []
, allReady = 0
, addedItm = 0
, groupedItm = []
, groupedItm2 = []
, actCl = null
, hasCat = null;

const functionAddItm = async (e = !1, n = 1, t = 0) => {
var o = JSON.parse(localStorage.getItem("foodsAdded"));
if ((0 !== addGroup && (groping = addGroup + 1), 0 !== groupedItm.length)) {
    if (void 0 !== groupedItm[groping - 1]) {
        if (void 0 === groupedItm[groping - 1]) return;
        fdGroup = groupedItm[groping - 1].name;
    } else {
        if (void 0 === groupedItm[1]) return;
        fdGroup = groupedItm[1].name;
    }
    var c = 0
        , l = 1;
    if (void 0 !== groupedItm[groping - 1]) {
        (numItm = parseFloat(groupedItm[groping - 1].item) + 1)
        , groupedItm.forEach((e) => {
                (c = parseFloat(e.item)), (l += c);
            })
            , document.querySelector(".ct_sep_bx")
            .getBoundingClientRect()
            .height < window.screen.height && (document.querySelector(".for_ek_fd_full_load")
                .style.displa = "block");
        var r = document.querySelectorAll(`#${fdGroup.split(" ").join("")} .ct_bx_fooditm`)
            .length;
        if (" none" === document.querySelector(".for_ek_fd_full_load")
            .style.display || "" === document.querySelector(".for_ek_fd_full_load")
            .style.display) {
            var i = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`);
            document.querySelectorAll(".ct_bx_fooditm")
                .length < l ? ((document.querySelector(".for_ek_fd_full_load")
                        .style.display = "block"), i.orderBy("item")
                    .get()
                    .then((e) => {
                        var n;
                        if (addedItm > 0) {
                            n = addedItm + 1 !== numItm - addedSelected ? e.docs[r - 1].data()
                                .item : 0 !== r && r + 1 !== numItm - addedSelected ? e.docs[r - 1].data()
                                .item : e.docs[2].data()
                                .item;
                            var t = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`)
                                , c = 8;

                            function l(e) {
                                e.matches && (c = 8);
                            }
                            l((i = window.matchMedia("(max-width: 1050px)")))
                                , i.addEventListener("change", l)
                                , t.orderBy("item")
                                .startAfter(n)
                                .limit(c)
                                .get()
                                .then((e) => {
                                    console.log(e.docs.length)
                                        , 0 === e.docs.length ? (groping++, (addedItm = 0), (allReady = 0), (document.querySelector(".for_ek_fd_full_load")
                                            .style.display = "none"), functionAddItm()) : e.docs.forEach((e) => {
                                            var n = e.data()
                                                .item;
                                            const t = n.name;
                                            n.type, n.cook, n.time;
                                            var c = n.initUnit;
                                            (c += n.unitUni), n.fdInside;
                                            const l = n.img
                                                , i = n.id
                                                , a = n.commSoon;
                                            let s
                                                , d = n.offer
                                                , u = n.price;
                                            if (((u = parseFloat(u)), null !== d)) s = u - u * ((d = parseFloat(d)) / 100);
                                            else if ("" !== getCookie("user")) {
                                                if (JSON.parse(getCookie("user"))
                                                    .fstPurchase) {
                                                    let e = 0;
                                                    n.fdInside.forEach((n) => {
                                                            void 0 !== n.price && "currysauce" !== n.name.split(" ")
                                                                .join("")
                                                                .toLowerCase() && (e += parseFloat(n.price));
                                                        })
                                                        , (s = u - e)
                                                        , (d = "Free");
                                                }
                                            } else {
                                                let e = 0;
                                                n.fdInside.forEach((n) => {
                                                        void 0 !== n.price && "currysauce" !== n.name.split(" ")
                                                            .join("")
                                                            .toLowerCase() && (e += parseFloat(n.price));
                                                    })
                                                    , (s = u - e)
                                                    , (d = "Free");
                                            }
                                            n.stock;
                                            const _ = n.ratings;
                                            if (r + 1 < numItm && r + 1 < numItm)
                                                if (null !== o)
                                                    if (addedSelected !== o.length) {
                                                        for (var m = 0; m < o.length; m++) {
                                                            var y = o[m];
                                                            if (parseFloat(y.catId) === groping && y.name === t && !addedNames.includes(t)) {
                                                                giveChtml(0, a, t, 0, u, 0, s, l, d, 0, 0, _, 0, i, c), addedSelected++, addedNames.push(y.name);
                                                                break;
                                                            }
                                                        }
                                                        addedNames.includes(t) || (addedItm++, giveChtml(0, a, t, 0, u, 0, s, l, d, 0, 0, _, 0, i, c));
                                                    } else addedNames.includes(t) || (addedItm++, giveChtml(0, a, t, 0, u, 0, s, l, d, 0, 0, _, 0, i, c));
                                            else addedNames.includes(t) || (addedItm++, giveChtml(0, a, t, 0, u, 0, s, l, d, 0, 0, _, 0, i, c));
                                            else groping < 3 && (groping++, (addedItm = 0 !== addedSelected ? -1 : 0), (allReady = 0), (document.querySelector(".for_ek_fd_full_load")
                                                .style.display = "none"));
                                        });
                                });
                        } else {
                            var i;

                            function l(e) {
                                e.matches && (c = 8);
                            }(t = db.collection(`foods/sYNT0aiTqEnZ0I7IVmd7/group${groping}`)), (c = 8), l((i = window.matchMedia("(max-width: 1050px)"))), i.addEventListener("change", l), t.orderBy("item")
                                .limit(c)
                                .get()
                                .then((e) => {
                                    e.forEach((e) => {
                                        var n = e.data()
                                            .item;
                                        const t = n.name;
                                        n.type, n.cook, n.time;
                                        var c = n.initUnit;
                                        c += n.unitUni;
                                        const l = n.commSoon
                                            , i = (n.fdInside, n.img);
                                        let a
                                            , s = n.offer
                                            , d = n.price;
                                        if (((d = parseFloat(d)), null !== s)) a = d - d * ((s = parseFloat(s)) / 100);
                                        else if ("" !== getCookie("user")) {
                                            if (JSON.parse(getCookie("user"))
                                                .fstPurchase) {
                                                let e = 0;
                                                n.fdInside.forEach((n) => {
                                                        void 0 !== n.price && "currysauce" !== n.name.split(" ")
                                                            .join("")
                                                            .toLowerCase() && (e += parseFloat(n.price));
                                                    })
                                                    , (a = d - e)
                                                    , (s = "Free");
                                            }
                                        } else {
                                            let e = 0;
                                            n.fdInside.forEach((n) => {
                                                    void 0 !== n.price && "currysauce" !== n.name.split(" ")
                                                        .join("")
                                                        .toLowerCase() && (e += parseFloat(n.price));
                                                })
                                                , (a = d - e)
                                                , (s = "Free");
                                        }
                                        n.stock;
                                        const u = n.id
                                            , _ = n.ratings;
                                        if (r + 1 < numItm)
                                            if (null !== o)
                                                if (addedSelected !== o.length) {
                                                    for (var m = 0; m < o.length; m++) {
                                                        var y = o[m];
                                                        if (parseFloat(y.catId) === groping && y.name.split(" ")
                                                            .join("") === t.split(" ")
                                                            .join("") && !addedNames.includes(t)) {
                                                            giveChtml(0, l, t, 0, d, 0, a, i, s, 0, 0, _, 0, u, c), addedSelected++, addedNames.push(y.name);
                                                            break;
                                                        }
                                                    }
                                                    addedNames.includes(t) || (addedItm++, giveChtml(0, l, t, 0, d, 0, a, i, s, 0, 0, _, 0, u, c));
                                                }
                                        else addedNames.includes(t) || (addedItm++, giveChtml(0, l, t, 0, d, 0, a, i, s, 0, 0, _, 0, u, c));
                                        else addedNames.includes(t) || (addedItm++, giveChtml(0, l, t, 0, d, 0, a, i, s, 0, 0, _, 0, u, c));
                                        else groping < 3 && (groping++, (addedItm = 0 !== addedSelected ? -1 : 0), (allReady = 0), (document.querySelector(" .for_ek_fd_full_load")
                                            .style.display = "none"));
                                    });
                                });
                        }
                    })) : (document.querySelector(".for_ek_fd_full_load")
                    .style.display = "none");
        }
    }
}
};





// from page items
const addLoadedItm = async () => {
    window.scrollTo(0, 0)

    if (window.screen.width >= 1550) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '650px'
        })
    }
    if (window.screen.width <= 1550) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '550px'
        })
    }

    if (window.screen.width <= 1200) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '40vw'
        })
    }
    if (window.screen.width <= 1100) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '42vw'
        })
    }
    if (window.screen.width <= 935) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '100vw'
        })
        document.querySelectorAll('.ct_bx_img_itm').forEach(cur => {
            cur.style.width = '100vw'
        })
    }
    if (window.screen.width <= 800) {
        document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
            cur.style.width = '100vw'
        })
    }

    let vHeight = window.screen.height / 1.6
    let width = window.screen.width / 1.6
    document.querySelector('.ct_inner_video iframe').style.height = Math.round(vHeight) + 'px'
    document.querySelector(".ct_video_box iframe").style.width = (Math.round(width)) + 'px'
    if (window.screen.height >= window.screen.width) {
        let hm = (window.screen.height) / 2
        document.querySelector(".ct_video_box iframe").style.height = Math.round(hm) + 'px'

    }
    if (window.screen.width <= 1000) {
        let widthM = window.screen.width - 40

        document.querySelector(".ct_video_box iframe").style.width = (Math.round(widthM)) + 'px'
        document.querySelector(".ct_inner_video").style.width = 'auto'
        document.querySelector(".ct_video_box iframe").style.width = (Math.round(widthM)) + 'px'
    }
    document.querySelector('html').style.overflowY = 'hidden'
    document.querySelector('.yt-loader').style.position = 'fixed'
    let dbCollection = db.collection(`items`)
    let res = await dbCollection.get()

    console.log(performance.now(), ' after await performance')

    let matchedOne = 0
    document.querySelector('.ct_bx_form_rating').style.opacity = 1
    document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'auto';
    document.querySelector('.for_submit_form_rev').style.opacity = 1
    document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'auto';
    if (res.docs.length === 0) {
        window.location.replace('/')
    }
    let matched = false
    let timesSameBuy = 0
    res.docs.forEach(el => {
        let item = el.data().item
        let maxqt = el.data().maxqt
        console.log(item.id, token)
        if (item.id === token) {
            document.querySelectorAll('.ct_bx_img_itm img').forEach(cur => {
                cur.src = item.img
            })
            document.querySelector(".ct_video_box iframe").src = item.video

            console.log(performance.now(), ' after getting item performance')

            matched = true
            document.cookie = "cookingImages" + "=" + JSON.stringify(item.cook) + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/";
            document.querySelector('title').innerText = item.name + ' | KRICK'
            let price2 = parseFloat(item.price)
            let numU = item.initUnit
            numU = parseFloat(numU)
            let stk = item.netweight
            document.querySelector('.ct_bx_fex_fd_dt_ov').style.height = 'auto'

            document.querySelectorAll('.for_banner').forEach(cur => cur.src = item.imgBanner)
            document.querySelector('.ct_bx_img_itm').style.visibility = 'visible'
            let fds = JSON.parse(localStorage.getItem('foodsAdded'))
            document.querySelector('.ct_overfow_for_load').style.display = 'none'
            document.querySelector('.yt-loader').style.display = 'none'
            document.querySelector('html').style.overflowY = 'scroll'
            if (getCookie('user') !== '') {
                if (maxqt.length > 0) {
                    let has2qty = false
                    maxqt.forEach(m => {
                        let id = m.id
                        let qty = m.qt

                        if (id === JSON.parse(getCookie('user')).rootAutyh) {
                            if (parseFloat(qty) >= 2) {
                                has2qty = true
                            } else {
                                timesSameBuy += 1
                            }
                        }
                    })
                    if (timesSameBuy >= 2 || has2qty) {
                        document.querySelectorAll('.ct_bx_item_stock p').forEach(cur => {
                            cur.style.display = 'none'
                        })
                        document.querySelectorAll('.ct_sbout_this_itm').forEach(cur => {
                            cur.style['pointer-events'] = 'none'
                        })
                        fds.forEach((cur, indx) => {
                            if (cur.id === token) {
                                fds.splice(indx, 1)
                                localStorage.setItem('foodsAdded', JSON.stringify(fds))

                            }
                        })
                        document.querySelectorAll('.ct_bx_item_stock .inStk').forEach(cur => {
                            cur.style.display = 'none'
                        })

                        document.querySelectorAll('.ct_bx_item_stock .outStk').forEach(cur => {
                            cur.style.display = 'block'
                        })
                        document.querySelectorAll('.bx_op').forEach(cur => {
                            cur.style['pointer-events'] = 'none'
                        })
                        document.querySelector('.inStk').style.display = 'none'

                        document.querySelector('.outStk').style.display = 'block'

                        document.querySelector('.ct_bx_img_itm').style.filter = 'grayscale(1)'
                        document.querySelectorAll('.ct_sbout_this_itm').forEach(cur => {
                            cur.style.filter = 'grayscale(1)'
                        })

                        if (window.screen.width <= 920) {
                            document.querySelectorAll('.ct_bx_items_qt_actions>*:not(:nth-child(2))').forEach(cur => {
                                cur.style.filter = 'grayscale(1)'
                            })
                        } else {
                            document.querySelectorAll('.ct_bx_items_qt_actions ').forEach(cur => {
                                cur.style.filter = 'grayscale(1)'
                            })
                        }
                        // document.querySelector('.ct_x_fd_dt_itm >:not(:nth-child(9))').style.filter = 'grayscale(1)'

                        document.querySelectorAll('.ct_bx_items_qt_actions').forEach(cur => { cur.style['pointer-events'] = 'none' })
                        document.querySelectorAll('.ct_bx_item_stock').forEach(cur => { cur.style.filter = 'grayscale(0)' })



                    }
                }
            }
            document.querySelectorAll('.ct_bx_Time2 p strong').forEach(cu => {
                cu.innerText = item.deliveryTime
            })
            document.querySelectorAll('.ct_bx_Time1 p strong').forEach(cu => {
                cu.innerText = item.cookingTime
            })

            document.querySelector('.ct_overfow_for_load').style.display = 'none'
            document.querySelector('.yt-loader').style.display = 'none'
            document.querySelector('html').style.overflowY = 'scroll'
            document.querySelector('.ct_bx_form_rating').style.opacity = 1
           // let numenator = 0
            //let denomenator = 0
            document.querySelector('.stock2').innerText = item.netweight
            document.querySelector('.ct_bx_acct_cart').style.display = 'block'
            document.querySelector('.ct_bx_acct_cart').style.visibility = 'visible'
            document.querySelector('.ct_x_fd_dt_itm').style.visibility = 'visible'
            document.querySelector('.ct_x_fd_dt_itm').style.display = 'block'
            document.querySelector('.fd_name_dt_itm').innerHTML = item.name
            if (item.offer !== null) {
                document.querySelector('.ct_offer_box_cook2 span').innerText = item.offer + "%"
            }
            document.querySelector('.ct_bx_mrp del').innerText = '₹' + price2
            let offer2 = item.offer

            let nNum = parseFloat(item.netweight)
            let posOthelem2 = 1
            let uStab = false
            let allItm = JSON.parse(localStorage.getItem('foodsAdded'))
            let token11 = window.location.pathname.split('/')[1]

            let gIunit = false
            let priceUnit = 0
            let gIunit3 = false
            if (item.unitInit !== null) {
                if (item.unitInit[0].name !== undefined) {

                    item.unitInit.forEach(cm => {
                        let untM = `${cm.unitNum} ${cm.unitU}`
                        let nomatch = false
                        let untMSel = `${item.initUnit} ${item.unitUni}`
                        allItm.forEach(curItm => {
                            if (curItm.id === item.id) {
                                nomatch = true
                                for (let i = 0; i < curItm.unitInit.length; i++) {
                                    let cu = curItm.unitInit[i]
                                    if (cm.name !== undefined) {
                                        if (cu.name === cm.name) {
                                            if (cu.added) {
                                                priceUnit += parseFloat(cm.price)
                                            }
                                            cu.price = "₹" + cm.price.toLocaleString()
                                        }
                                    }
                                }
                            }
                        })
                        if (!nomatch) {
                            if (cm.name !== undefined) {
                                priceUnit += parseFloat(cm.price)
                            }
                        }
                        console.log(untM.split(' ').join(''), untMSel.split(' ').join(''), '90999999999999999999999999999')
                        if (untM.split(' ').join('') === untMSel.split(' ').join('')) {
                            priceUnit = cm.price

                        }
                    })
                }
                for (let i = 0; i < item.unitInit.length; i++) {
                    let cur = item.unitInit[i]
                    let untMSel = `${item.initUnit} ${item.unitUni}`
                    let untM = `${cur.unitNum} ${cur.unitU}`

                    if (untM.split(' ').join('') === untMSel.split(' ').join('')) {
                        priceUnit = cur.price

                    }

                }
            }
            console.log(performance.now(), ' after unbitInit--------------------------------------------')

            if (priceUnit !== 0) { priceUnit = priceUnit.toLocaleString() }
            let checkdedIn = false

            let unitsIn2 = null

            let unitsIn = ``
            if (item.unitInit !== null) {
                unitsIn = item.unitInit.map((cur1, ind) => {
                    let html
                    if (cur1.name === undefined) {
                        if (cur1.price !== null) {
                            cur1.price = parseFloat(cur1.price).toLocaleString()
                            let uNum = parseFloat(item.unitUni)
                            let fUnn = `${cur1.unitNum}${cur1.unitU}`
                            if (item.unitUni === '') {
                                fUnn = item.fdInside[0].name + ` (${uNum})`
                            }
                            html = `<li>
    <span>${fUnn}</span>
    <am>₹ ${cur1.price}</am>
    <span class='hidden'>${cur1.stock}</span>
    <span class='hidden count'>${cur1.count}</span>

</li>`
                        } else {

                            html = `<li class='othUn'>
<span>${cur1.unit}</span>
<am></am>
<span class='hidden'>${cur1.stock}</span>
<span class='hidden count'>${cur1.count}</span>

</li>`
                        }
                    } else {
                        let removedClass = `class="alreadyselected"`
                        let htmBtns = `<button class="add_base_itm">Add</button>
                        <button class="remove_base_itm">Remove</button>`
                        let priceM = cur1.price
                        if (cur1.price !== null) {
                            allItm.forEach(cu => {
                                if (cu.id === item.id) {
                                    cu.unitInit.forEach(cuItm => {
                                        priceM = parseFloat(cur1.price) * parseFloat(cu.qt)
                                        if (cuItm.name === cur1.name) {
                                            if (!cuItm.added) {
                                                removedClass = ``
                                                htmBtns = `<button class="add_base_itm">Add</button>
                                                <button class="remove_base_itm" style='none'>Remove</button>`
                                            }
                                        }
                                    })
                                }


                            })
                            html = `<li ${removedClass}>
<div class="ct_inner_inside_bs">
<p>${cur1.name}</p>
<span>₹${priceM}</span>
</div>
${htmBtns}
</li>`
                        }
                    }
                    return html
                })
                unitsIn = unitsIn.join('')

            }


            document.querySelector('.recomended_cart').style.marginTop = '20px'

            document.querySelectorAll('.ct_bx_items_qt_actions').forEach(cur => {
                cur.style.visibility = 'visible'

            })

            document.querySelectorAll('.ct_bx_download_btn').forEach(cur => {
                cur.style.visibility = 'visible'

            })

            document.querySelectorAll('.ct_bx_acct_cart, .ct_x_fd_dt_itm').forEach(cur => {
                cur.style.visibility = 'visible'
                cur.style.display = 'block'

            })
            document.querySelector('.ct_x_fd_dt_itm').style.display = 'block'

            document.querySelector('.ct_x_fd_dt_itm').style.visibility = 'visible'

            let gIunit2 = false
            let allItm_m1 = JSON.parse(localStorage.getItem('foodsAdded'))
            if (allItm_m1 !== null) {
                allItm_m1.forEach((cur, i) => {
                    if (cur.id.trim() === token.trim()) {
                        document.querySelectorAll('.ct_bx_for_added_itm').forEach(cur1 => {
                            cur1.style.display = 'block'
                            if (window.screen.width > 920) {
                                cur1.style.marginTop = '19px'

                            }
                        })
                        document.querySelectorAll('.ct_x_added_Itm_date p').forEach(cur1 => {
                            cur1.innerText = `You have  addded this item to the cart on ${cur.date} `
                        })
                        document.querySelectorAll('.bx_add_t_cart_btn_itm_dt').forEach(cur1 => {
                            cur1.style.display = 'none'

                        })

                    } else {
                        if (item.unitInit !== null) {
                            if (item.unitInit.length > 0) {

                                document.querySelector('.stock').innerText = item.unitInit[0].stock
                            }
                        }
                    }
                })
            }
            let deductedPrice = 0
            let tSelp = 0
            //for first purchase

            if (item.fdInside.length > 1 && item.offer === null) {
                let fd = JSON.parse(localStorage.getItem('foodsAdded'))
                if (fd.length > 0 && getCookie('firstpurchase') !== '') {
                    if (JSON.parse(getCookie('firstpurchase')) === window.location.pathname.split('/')[1]) {
                        if (JSON.parse(getCookie('user')).fstPurchase) {

                            let fdIns = item.fdInside
                            let fdP = 0
                            fdIns.forEach(cur => {
                                if (cur.price !== undefined && cur.name.split(' ').join('').toLowerCase() !== 'tastemakers') {
                                    let p = parseFloat(cur.price)
                                    fdP += p
                                }

                            })
                            deductedPrice = fdP
                            let selUp = 0
                            if (item.unitInit !== null) {
                                let m1 = 0
                                item.unitInit.forEach(cu => {
                                    if (cu.price !== null) {
                                        let unitName = cu.unitNum + cu.unitU
                                        fd.forEach(cuItm => {
                                            if (cuItm.id === item.id) {

                                                let baseU = cuItm.baseU.split(' ').join('').toLowerCase()
                                                if (baseU !== 'notselected') {
                                                    let fUnit = `${cu.unitNum}${cu.unitU}`.split(' ').join('').toLowerCase()
                                                    if (fUnit === baseU) {
                                                        m1 = parseFloat(cu.price) * parseFloat(cu.count)

                                                    }
                                                }
                                                selUp = m1 + fdP
                                                cuItm.selU = selUp
                                            }

                                        })

                                    }

                                })
                            }
                            localStorage.setItem('foodsAdded', JSON.stringify(fd))
                        }
                    }
                } else {
                    let freePur = false
                    if (getCookie('user') !== '') {


                        if (JSON.parse(getCookie('user')).fstPurchase) {

                            let fdIns = item.fdInside
                            let fdP = 0
                            fdIns.forEach(cur => {
                                console.log(cur.name, 'currysauce', 'kaiiis')
                                if (cur.price !== undefined && cur.name.split(' ').join('').toLowerCase() !== 'currysauce') {
                                    let p = parseFloat(cur.price)
                                    fdP += p
                                }

                            })
                            let id = false
                            if (getCookie('firstpurchase') !== '') {
                                id = JSON.parse(getCookie('firstpurchase'))
                            }
                            if (fd.length > 0) {
                                fd.forEach(cu => {
                                    if (cu.id === window.location.pathname.split('/')[1]) {
                                        cu.permGroup.forEach(m => {
                                            if (m.price === 'Free') {
                                                freePur = true
                                            }
                                        })
                                    }

                                })
                            } else {
                                if (!id) {
                                    freePur = true

                                }

                            }
                            if (freePur) {
                                price2 -= fdP
                                deductedPrice = fdP
                            } else {
                                if (id === window.location.pathname.split('/')[1]
                                ) {
                                    price2 -= fdP
                                    deductedPrice = fdP
                                }
                            }

                        }
                    } else {
                        if (item.offer == null) {
                            let fdIns = item.fdInside
                            let fdP = 0
                            fdIns.forEach(cur => {
                                console.log(cur.name, 'currysauce', 'kaiiis')
                                if (cur.price !== undefined && cur.name.split(' ').join('').toLowerCase() !== 'currysauce') {
                                    let p = parseFloat(cur.price)
                                    fdP += p
                                }

                            })
                            let id = false
                            if (getCookie('firstpurchase') !== '') {
                                id = JSON.parse(getCookie('firstpurchase'))
                            }
                            if (fd.length > 0) {
                                fd.forEach(cu => {
                                    if (cu.id === window.location.pathname.split('/')[1]) {
                                        cu.permGroup.forEach(m => {
                                            if (m.price === 'Free') {
                                                freePur = true
                                            }
                                        })
                                    }

                                })
                            } else {
                                if (!id) {
                                    freePur = true

                                }

                            }
                            if (freePur) {
                                price2 -= fdP
                                deductedPrice = fdP
                            } else {
                                if (id === window.location.pathname.split('/')[1]
                                ) {
                                    price2 -= fdP
                                    deductedPrice = fdP
                                }
                            }

                        }

                    }
                }


            }
            //-----------------------------//

            let countNumber = 1
            let unitQtybase = `${item.initUnit}${item.unitUni}`
            if (item.unitInit !== null) {

                if (item.unitInit[0].name === undefined) {
                    let unitNum = item.unitInit[0].unitNum
                    let unitu = item.unitInit[0].unitU
                    let fUnit = `${unitNum}${unitu}`
                    if (fUnit !== `${item.initUnit}${item.unitUni}`) {
                        unitQtybase = fUnit
                        totUStk = item.unitInit[0].stock
                        countNumber = parseFloat(item.unitInit[0].count)

                        if (item.unitInit[0].price !== null) {
                            priceUnit = item.unitInit[0].price.toLocaleString()
                        } else { priceUnit = 0; unitQtybase = ``; countNumber = 1 }
                    }
                }
            }

            if (item.itemsOthers !== null) {
                item.itemsOthers.forEach(cur => {
                    console.log(parseFloat(cur.price, countNumber), '------------------------------------------------------------------------')
                    cur.price = parseFloat(cur.price) * countNumber
                    console.log(parseFloat(cur.price, countNumber), '------------------------------------------------------------------------')

                })
            }
            if (uStab) {

                let allPOth = 0

                if (item.unitInit.length !== 0 && item.unitInit[0].name === undefined) {
                    if (item.unitInit[0].price !== null) {
                        if (item.unitInit[0].name !== undefined) {
                            gIunit = item.unitInit[0].name

                        } else {
                            gIunit = `${item.unitInit[0].unitNum} ${item.unitInit[0].unitU}`
                        }


                        allItm.forEach((cur, i) => {
                            let id = cur.id.trim()
                            if (id === token11.trim()) {
                                item.unitInit.forEach(cp => {
                                    if (cp.price !== null) {
                                        if (cur.baseU === cp.name) {
                                            checkdedIn = true
                                        }
                                    } else {
                                        if (cur.selU2 === 0) {
                                            checkdedIn = true

                                        }

                                    }

                                })


                                if (!checkdedIn) {
                                    cur.baseU = gIunit
                                    cur.selU2 = item.unitInit[0].price
                                    cur.selU = parseFloat(item.restPrice)
                                    cur.selU = parseFloat(item.restPrice)

                                    allItm.splice(i, cur)
                                    localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                                }



                            }

                        })


                        let p = parseFloat(item.unitInit[0].price) + allPOth + parseFloat(item.restPrice)

                        // price2 = p
                    } else {

                        gIunit = `not selected`
                        allItm.forEach((cur, i) => {
                            let id = cur.id.trim()
                            if (id === token11.trim()) {
                                item.unitInit.forEach(cp => {
                                    if (cp.price !== null) {
                                        if (cur.baseU === cp.name) {
                                            checkdedIn = true
                                        }
                                    } else {
                                        checkdedIn = true

                                    }

                                })

                                if (!checkdedIn) {
                                    cur.baseU = gIunit
                                    cur.selU2 = item.unitInit[0].price


                                    cur.selU = parseFloat(item.restPrice)
                                    allItm.splice(i, cur)
                                    localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                                }



                            }

                        })


                    }


                }


            }
            let fstPurN = false

            if (getCookie('user') !== '') {
                if (JSON.parse(getCookie('user')).fstPurchase) {
                    document.querySelectorAll('.ct_bx_qty').forEach(cur => {
                        cur.classList.add('for_fst_pur')
                    })
                }
                if (getCookie('firstpurchase') !== '') {

                    if (JSON.parse(getCookie('firstpurchase')) === window.location.pathname.split('/')[1]) {
                        fstPurN = JSON.parse(getCookie('user')).fstPurchase

                    } else {
                        document.querySelectorAll('.ct_bx_qty').forEach(cur => {
                            cur.classList.remove('for_fst_pur')
                        })
                    }
                } else {
                    fstPurN = JSON.parse(getCookie('user')).fstPurchase


                }
            }
            let pff = parseFloat(item.profit)
            if (item.fdInside !== null) {
                let otherItems
                let matchedFd = false
                let totUStk
                let initalUnit = item.initUnit + item.unitUni
                let tm = 0;
                let tm2 = 0;
                let tm3 = 0;
                item.fdInside.forEach(cur => {
                    if (cur.price !== undefined) {
                        let pr = parseFloat(cur.price);
                        if (fstPurN) {
                            if (cur.name.split(' ').join('').toLowerCase() !== 'tastemakers') {
                                pr = pr + (pr * (pff / 100))
                                cur.price = pr
                                tm2 += (pr * countNumber);
                            }
                        } else {
                            pr = pr + (pr * (pff / 100))
                            cur.price = pr
                            tm2 += (pr * countNumber);
                        }

                    };
                });
                let maip

                if (item.unitInit !== null) {

                    if (item.unitInit[0].name !== undefined) {
                        item.unitInit.forEach(cur => {
                            if (cur.price !== undefined && cur.price !== null) {
                                let pr = parseFloat(cur.price)
                                tm += pr
                            }

                        })
                    } else {
                        for (let i = 0; i < item.unitInit.length; i++) {
                            let cur = item.unitInit[i]
                            if (cur.price !== null) {
                                let fUnn = cur.unitNum + cur.unitU
                                if (fUnn.split(' ').join('') === initalUnit.split(' ').join('')) {
                                    let pr = parseFloat(cur.price)
                                    tm += pr
                                    break
                                }
                            }

                        }
                    }

                    if (item.itemsOthers !== null) {
                        item.itemsOthers.forEach(cur => {
                            if (cur.price !== undefined) {
                                let pr = parseFloat(cur.price)
                                tm3 += (pr);
                            }
                        })
                    }
                    maip = tm3 + tm + tm2
                } else {
                    maip = item.price
                }

                maip = parseFloat(maip)
                maip = maip
                document.querySelector('.ct_bx_pf1390').innerText = pff
                if (offer2 !== null) {
                    offer2 = parseFloat(offer2)
                    document.querySelector('.mrp_ammount del').innerText = '₹ ' + maip.toLocaleString()
                    let ffp
                    ffp = maip - (maip * (offer2 / 100))
                    ffp = Math.round(ffp)
                    ffp = ffp.toLocaleString()
                    document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => {
                        cur.innerText = `₹ ${ffp}`
                    })
                    document.querySelector('.ct_offer_box_cook2').style.display = 'block'
                    if (item.id !== '732181744-54da-4243-b0h5-a79898eb60298' && item.id !== '96681744-54da-4243-b0h5-a79898ec160099') {
                        document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                            cur.innerText = (ffp)
                        })
                    } else {
                        document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                            cur.innerText = `${ffp}`
                        })
                        document.querySelectorAll('.ct_bx_price pr').forEach(cur => {
                            cur.innerText = `/piece`
                        })
                    }
                } else {
                    let ffp = maip
                    document.querySelector('.ct_offer_box_cook2').style.display = 'none'
                    document.querySelector('.mrp_ammount').style.display = 'none'
                    price2 = maip.toLocaleString()

                    document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => {
                        cur.innerText = `₹ ${ffp}`
                    })
                    document.querySelector('.ct_offer_box_cook2').style.display = 'none'
                    if (item.id !== '732181744-54da-4243-b0h5-a79898eb60298' && item.id !== '96681744-54da-4243-b0h5-a79898ec160099') {
                        document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                            cur.innerText = (ffp)
                        })
                    } else {
                        document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                            cur.innerText = `${ffp}`
                        })
                        document.querySelectorAll('.ct_bx_price pr').forEach(cur => {
                            cur.innerText = `/piece`
                        })
                    }
                }
                if (item.itemsOthers !== null) {
                    let hm
                    let fds = JSON.parse(localStorage.getItem('foodsAdded'))
                    if (fds !== null) {
                        fds.forEach((curI) => {
                            let id = window.location.pathname.split('/')[1]
                            if (curI.id.trim() === id.trim()) {



                                let itmIn = curI.itemsOthers
                                otherItems = itmIn.map(cur1 => {
                                    console.log(cur1.unselect !== false, 'jiiioo')
                                    if (cur1.unselect === false) {
                                        console.log(cur1.name, 11455)

                                        let priceMn = cur1.price.split('₹')[1].split(',').join('')
                                        priceMn = parseFloat(priceMn)

                                        hm = `  <li>
                
                <div class="ct__inner_inner">
                <p>${cur1.name}</p>
                <span>₹ ${priceMn}</span>
                </div>
                <div class="ct_bx_add_btn" style="display:none">
                <span>
                    Add
                </span>
            </div>
            <div class="ct_bx_remove_btn">
                                        <span>
                                            REMOVE
                                        </span>
                                    </div>
                </li>`
                                    } else {


                                        let priceMn = cur1.price.split('₹')[1].split(',').join('')
                                        priceMn = parseFloat(priceMn)
                                        hm = `  <li class="unselect_other">
          
                <div class="ct__inner_inner">
                <p>${cur1.name}</p>
                <span>₹ ${priceMn}</span>
                </div>
                <div class="ct_bx_add_btn ">
                <span>
                    Add
                </span>
            </div>
            <div class="ct_bx_remove_btn" style="display:none">
                                        <span>
                                            REMOVE
                                        </span>
                                    </div>
                </li>`
                                    }
                                    return hm
                                })

                            } else {
                                document.querySelectorAll('.inner .unit_fds').forEach(cur => {
                                    cur.style.fontFamily = 'Open Sans'
                                    cur.style.fontSize = '13px'
                                    cur.style.color = 'rgb(74 71 71)'
                                })
                                otherItems = item.itemsOthers.map((elem) => {


                                    hm = `  <li>
                                 
                                    <div class="ct__inner_inner">
                                        <p>${elem.name}</p>
                                        <span>₹ ${elem.price}</span>
                                    </div>
                                    <div class="ct_bx_add_btn" style='display:none'>
                                        <span>
                                            Add
                                        </span>
                                    </div>
                                <div class="ct_bx_remove_btn">
                                    <span>
                                    REMOVE
                                    </span>
                                </div>
          

                                    </li>`


                                    return hm


                                })
                            }
                        })


                    } else {

                        otherItems = item.itemsOthers.map((elem) => {
                            hm = `  <li>
                       
                            <div class="ct__inner_inner">
                            <p>${elem.name} <sm></sm></p>
                            <span>₹ ${elem.price}</span>
                            </div>
                            
                            <div class="ct_bx_add_btn" style='display:none'>
                                        <span>
                                            Add
                                        </span>
                                    </div>
                            <div class="ct_bx_remove_btn">
                                        <span>
                                            REMOVE
                                        </span>
                            </div>
                            </li>`


                            return hm


                        })

                    }


                } else {
                    let id = window.location.pathname.split('/')[1]
                    otherItems = null

                    document.querySelectorAll('.ct_bx_what_erak_foods p').forEach(cur => {
                        cur.style.display = 'none'
                    })


                }
                let slcPrice = 0
                let selUn
                let qtmain = 1
                if(allItm!==null){
                allItm.forEach((cur, i) => {
                    let id = cur.id.trim()
                    if (id === token11.trim()) {
                        qtmain = parseFloat(cur.qt)
                    }
                })
                }
                const insideFd = item.fdInside.map((dt) => {
                    let ht
                    if (gIunit) {
                        selUn = gIunit

                    } else {
                        selUn = `${item.initUnit}${item.unitUni}`

                    }
                    dt.price = parseFloat(dt.price) * countNumber
                    dt.price = dt.price.toLocaleString()
                    slcPrice = slcPrice * countNumber
                    if (item.unitInit !== null) {
                        if (item.unitInit.length > 0) {
                            item.unitInit.forEach(cu => {
                                if (cu.unit === undefined && cu.name === undefined) {
                                    let numU = String(cu.unitNum)
                                    let unitU = String(cu.unitU)
                                    let fUnit = `${numU.trim()}${unitU.trim()}`
                                    if (fUnit.split(' ').join('') === selUn.split(' ').join('')) {
                                        slcPrice = cu.price
                                    }

                                }
                            })

                        }
                    }
                    let listIng
                    let textAb
                    if (dt.about !== undefined) {
                        textAb = dt.about
                        if (dt.about.ing !== undefined) {
                            textAb = dt.about.text
                            let listIngM = dt.about.ing.map(em => {
                                let htm = `    <li>
                                <span>${em}</span>
                                </li>`
                                return htm
                            })
                            listIngM = listIngM.join('')
                            listIng = `<h5>Ingredients</h5>
                            <ul>
                            ${listIngM}

                            </ul>`
                        } else {
                            listIng = ``
                        }
                    }
                    // <ion-icon name="information-circle-outline"></ion-icon> 
                    let hmOTH
                    let itmAbout = item.about.map((cu) => {
                        console.log(cu)
                        let htmlM = `  <li>
                            <p>${cu}</p>
                        </li>`
                        return htmlM
                    })
                    document.querySelectorAll('.ct_bx_what_erak_foods ul').forEach(cur => { cur.innerHTML = itmAbout.join('') })
                    let styleBase = ``
                    if (window.screen.width < 1550 && window.screen.width > 470) {
                        let widthScreen = window.screen.width
                        let width2 = 405
                        twidth = (widthScreen - width2) / 2
                        twidth = Math.round(twidth)
                        styleBase = `style=left:${twidth}px`
                    }
                    if (otherItems !== null) {
                        hmOTH = `<div class="ct_bx_ins_items nottog for_otherItems ">
<div class="selc">
<div class='inner'>

<p>Goceries</p>
<span>See available options.</span>

</div>
<div class="ct_down_nav">
<ion-icon name="chevron-down-outline"></ion-icon>
</div>
<div class="ct_up_nav">
<ion-icon name="chevron-up-outline"></ion-icon>
</div>
                                

</div>

<div class="ct_list_other_item"  ${styleBase}>
<div class='iconBx'><ion-icon name="close-outline"></ion-icon></div>
<div>
<h5>
Groceries
</h5>
</div>
<ul>
${otherItems.join('')}
</ul>
</div>
</div>`
                    } else {
                        hmOTH = ``
                    }


                    if (dt.selUn !== undefined) {
                        let classD2 = ``
                        let dropUn = `  <div class="ct_bx_units_item">
                        <ul>
                        
                        ${unitsIn}

                        </ul>
                    </div>`
                        let selUn = ``
                        console.log(gIunit, '1290q')
                        if (gIunit) {
                            selUn = gIunit
                            // 1901
                        } else {
                            if (item.unitInit !== null) {

                                if (item.unitInit.length > 0) {
                                    let unitM = `${item.initUnit}${item.unitUni}`
                                    selUn = unitM
                                }
                            }
                        }

                        let innerY = `   <div class='inner'>
                        <p>${dt.name} &mdash; ${unitQtybase}</p>
                        <span class='unit_fds'>₹${priceUnit}</span>
<span class='hidden stk_itm'>${totUStk}</span>
<span class='hidden tm'>${dt.tm}</span>

</div>`
                        if (unitQtybase === '') {
                            innerY = `   <div class='inner'>
<p>${dt.name}</p>
<span class='unit_fds'>not selected</span>
<span class='hidden stk_itm'>${totUStk}</span>
<span class='hidden tm'>${dt.tm}</span>

</div>`
                        }
                        slcPrice = slcPrice.toLocaleString()
                        if (item.unitInit !== null) {

                            if (item.unitInit[0].name !== undefined) {
                                innerY = `   <div class='inner'>
                        <p>${dt.name}</p>
                        <span class='unit_fds'>₹${priceUnit}</span>
<span class='hidden stk_itm'>${totUStk}</span>
<span class='hidden tm'>${dt.tm}</span>

</div>`

                            }
                        }
                        let htm = ``

                        let twidth = 0
                        let styleBase = ``
                        if (window.screen.width < 1550 && window.screen.width > 550) {
                            let widthScreen = window.screen.width
                            let width2 = 430
                            twidth = (widthScreen - width2) / 2
                            twidth = Math.round(twidth)
                            styleBase = `style=left:${twidth}px`
                        }

                        if (item.id !== '732181744-54da-4243-b0h5-a79898eb60298' && item.id !== '96681744-54da-4243-b0h5-a79898ec160099') {
                            if (item.unitInit !== null) {

                                if (item.unitInit[0].name !== undefined) {
                                    ht = ` <div class="ct_bx_ins_items ct_bx_qty_inner nottog ${classD2}">
                                <div class="selc ">
                             
                                    ${innerY}
                                    <div class='iconup'><ion-icon name="chevron-down-outline"></ion-icon>
                                    </div>
                                    <div class='icondwn'><ion-icon name="chevron-up-outline"></ion-icon>
                                    </div>
                                </div>
                                <span class="seleted_unit_price2 hidden">${item.restPrice}</span>

                                <span class="seleted_unit_price">${slcPrice} </span>
                                 ${htm}
                                <div class="ct_bx_inside_base" ${styleBase}>
                                <h5>${dt.name} </h5>
                                <ul>
                                ${unitsIn}
                                  
                                </ul>
                                </div>
${hmOTH}
                                
                            </div>
`
                                } else {
                                    ht = ` <div class="ct_bx_ins_items ct_bx_qty_inner nottog ${classD2}">
                                <div class="selc ">
                             
                                    ${innerY}
                                    <div class='iconup'><ion-icon name="chevron-down-outline"></ion-icon>
                                    </div>
                                    <div class='icondwn'><ion-icon name="chevron-up-outline"></ion-icon>
                                    </div>
                                </div>
                                <span class="seleted_unit_price2 hidden">${item.restPrice}</span>

                                <span class="seleted_unit_price">${slcPrice} </span>
                                 ${htm}
                              ${dropUn}
                              </div>

${hmOTH}
                                
                            </div>
`
                                }
                            }

                        } else {
                            document.querySelector('.ct_sbout_this_itm').style.display = 'none'
                            document.querySelectorAll('.ct_bx_img_itm button').forEach(cur => {
                                cur.style.display = 'none'
                            })
                            ht = ` <div class="ct_bx_ins_items ct_bx_qty_inner nottog ${classD2}" style='display=none'>
                        <div class="selc ">
                     
                            ${innerY}
                            <div class='iconup'><ion-icon name="chevron-down-outline"></ion-icon>
                            </div>
                            <div class='icondwn'><ion-icon name="chevron-up-outline"></ion-icon>
                            </div>
                        </div>
                        <span class="seleted_unit_price2 hidden">${item.restPrice}</span>

                        <span class="seleted_unit_price">${slcPrice} </span>
                         ${htm}
                      ${dropUn}
                        </div>
${hmOTH}
                        
                    </div>
`
                        }

                    } else {
                        let haveDeduction = false

                        let priceBox
                        let freePur = false
                        let fd = JSON.parse(localStorage.getItem('foodsAdded'))

                        let id = false
                        if (getCookie('firstpurchase') !== '') {
                            id = JSON.parse(getCookie('firstpurchase'))
                        }
                        if (fd !==null) {
                            fd.forEach(cu => {
                                if (cu.id === window.location.pathname.split('/')[1]) {
                                    cu.permGroup.forEach(m => {
                                        if (m.price === 'Free!') {
                                            freePur = true
                                        }
                                    })
                                }

                            })
                        } else {
                            if (!id) {
                                haveDeduction = true

                            }

                        }
                        if (freePur) {
                            haveDeduction = true

                        } else {
                            if (id === window.location.pathname.split('/')[1]) {
                                haveDeduction = true
                            }
                        }

                        if (getCookie('user') !== '') {
                            if (JSON.parse(getCookie('user')).fstPurchase !== undefined && item.offer === null) {
                                if (JSON.parse(getCookie('user')).fstPurchase) {
                                    let fd = JSON.parse(localStorage.getItem('foodsAdded'))
                                    if (fd.length > 0 && getCookie('firstpurchase') !== '') {
                                        if (JSON.parse(getCookie('firstpurchase')) === window.location.pathname.split('/')[1]) {
                                            priceBox = ` <span > <del>₹ ${dt.price}</del><pr>Free!</pr>
                                    `
                                        } else {
                                            priceBox = ` <span> ₹ ${dt.price} </span>`
                                        }
                                    } else {
                                        priceBox = ` <span > <del>₹ ${dt.price}</del><pr>Free!</pr> </span>
                                            `

                                    }
                                } else {
                                    priceBox = ` <span> ₹ ${dt.price} </span>`
                                }

                            } else {
                                priceBox = ` <span> ₹ ${dt.price} </span>
`
                            }
                        } else {

                            priceBox = ` <span> ₹ ${dt.price} </span>
                                `


                        }
                        if (dt.name.split(' ').join('').toLowerCase() === 'currysauce') {
                            priceBox = ` <span> ₹ ${dt.price} </span>
                    `
                        }
                        if (dt.name.split(' ').join('').toLowerCase() === 'tastemakers' && item.id === '82181744-54da-4243-b0h5-a79898eb60008') {

                            ht = ` <div class="ct_bx_ins_items perm ${dt.name.toLowerCase().split(' ').join('_')}" style='height:max-content;align-items: center;
                            display: none;'>
                            <div class='inner'>
                            <div class="ct_inner__inside_ths">
                            <p>${dt.name}</p>
                            ${priceBox}
                            </div>
                         
                            <div class="ct_bx_icon_show_info nottog" style='cursor:pointer'>
                                <ion-icon name="information-circle-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="t_bx_about_ins">
                        <div class="t_bx_about_ins_inside">
                        <h4>What is ${dt.name} ?</h4>
                                                        <span>${textAb}</span>
                                                    ${listIng}
                                                        </div>
                        
                            <div class="ct_remove_ns_about">
                                <ion-icon name="close"></ion-icon>

                            </div>
                        </div>
                           
                        </div>`
                        } else {
                            ht = ` <div class="ct_bx_ins_items perm ${dt.name.toLowerCase().split(' ').join('_')}" style='height:max-content;align-items: center;
                            display: flex;'>
                            <div class='inner'>
                            <div class="ct_inner__inside_ths">
                            <p>${dt.name}</p>
                            ${priceBox}
                            </div>
                         
                            <div class="ct_bx_icon_show_info nottog" style='cursor:pointer'>
                                <ion-icon name="information-circle-outline"></ion-icon>
                            </div>
                        </div>
                        <div class="t_bx_about_ins">
                        <div class="t_bx_about_ins_inside">
                        <h4>What is ${dt.name} ?</h4>
                                                        <span>${textAb}</span>
                                                    ${listIng}
                                                        </div>
                        
                            <div class="ct_remove_ns_about">
                                <ion-icon name="close"></ion-icon>

                            </div>
                        </div>
                           
                        </div>`
                        }




                    }
                    return ht

                })


                document.querySelectorAll('.contianer_items_inside').forEach(cur => {
                    cur.innerHTML = insideFd.join('')
                    if (window.screen.width <= 400) {
                        let length = document.querySelectorAll('.itemacc_1 .ct_bx_ins_items').length
                        cur.style.width = (220 * length + 60) + 'px'
                    }
                })
                if (item.id === '82181744-54da-4243-b0h5-a79898eb60008' || item.id === `72181744-54da-4243-b0h5-a79898ec160099`) {
                    if (window.screen.width <= 1100) {
                        document.querySelectorAll('.contianer_items_inside').forEach(cur => cur.style.width = '800px')

                    }
                    if (window.screen.width <= 400) {
                        document.querySelectorAll('.contianer_items_inside').forEach(cur => cur.style.width = '700px')

                    }
                }
                if (item.unitInit !== null) {

                    if (item.unitInit !== null) {

                        if (item.unitInit[0].name !== undefined) {
                            if (document.querySelector('.ct_sbout_this_itm .ct_bx_ins_items:nth-of-type(4)   .ct_bx_icon_show_info ') !== null) {
                                document.querySelector('.ct_sbout_this_itm .ct_bx_ins_items:nth-of-type(4)   .ct_bx_icon_show_info ').style.transform = 'translate(2px, -3px)'
                                document.querySelector('.itemacc_1 .ct_bx_ins_items:nth-of-type(4)  .ct_bx_icon_show_info ').style.transform = 'translate(2px, -3px)'
                            }

                        }
                    }
                }
                // if (item.price !== '0') {
                //     document.querySelectorAll('.ct_sbout_this_itm').forEach(cur => { cur.style.display = 'none' })
                // }
                if (document.querySelector('.for_curry') !== null) {


                    document.querySelectorAll('.for_curry  .inner').forEach(cur => {
                        cur.style.marginTop = `10px`

                    })
                    document.querySelectorAll('.for_curry .ct_bx_icon_show_info').forEach(cur => {
                        cur.style.position = 'absolute'

                        cur.style.transform = `translate(-5px,-6px)`

                    })

                }
                if (window.screen.width <= 370) {
                    if (document.querySelector('.ct_list_other_item') !== null) {
                        document.querySelector('.ct_list_other_item').style.transform = 'translate(40px, 0px)'

                    }

                }
                posOthelem2 += 1
                let fstPur = false
                let totPermP = 0
                if (getCookie('user') !== '') {
                    fstPur = JSON.parse(getCookie('user')).fstPurchase
                }
                console.log(item.fdInside, '9999999999999999999999999ssidgfdfffffffffffffff')

                item.fdInside.forEach(cm => {
                    if (fstPur) {
                        if (cm.name !== 'Taste makers' && cm.price !== undefined && cm.price !== 'NaN') {
                            let pr1 = parseFloat(cm.price)

                            totPermP += pr1
                        }
                    } else {
                        if (cm.price !== undefined && cm.price !== 'NaN') {
                            let pr1 = parseFloat(cm.price)

                            totPermP += pr1
                        }
                    }

                })

                let sP = document.querySelector('.seleted_unit_price2').innerText
                if (document.querySelector('.seleted_unit_price2') !== null) {
                    document.querySelector('.seleted_unit_price2').innerText = totPermP
                } else {
                    sP = 0
                }
                sP = parseFloat(sP)
                let fstPurN2 = false

                //change the perm price when fst is false
                if (allItm !== null) {

                allItm.forEach((cur, i) => {
                    let id = cur.id.trim()
                    if (id === token11.trim()) {

                        if (getCookie('user') !== '') {
                            if (getCookie('firstpurchase') !== '') {
                                if (JSON.parse(getCookie('firstpurchase')) === id) {
                                    fstPurN2 = JSON.parse(getCookie('user')).fstPurchase
                                    cur.qt = 1

                                }
                            }
                        }
                        item.fdInside.forEach(cm => {
                            if (!fstPurN2) {
                                cur.permGroup.forEach(cm2 => {
                                    if (cm2.name === cm.name) {
                                        cm2.price = '₹' + cm.price
                                        cm2.eprice = false

                                    }
                                })
                                let pr = parseFloat(cm.price.split('₹')[1])
                                totPermP += pr
                            }

                        })
                    }
                })
                localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                }
                //from the localstorage 
                if (allItm !== null) {
                    if (allItm.length !== 0) {
                        allItm.forEach((cur, i) => {
                            let id = cur.id.trim()
                            if (id === token11.trim()) {

                                let selU = parseFloat(cur.selU)
                                let selU2 = parseFloat(cur.selU2)
                                let priceB = 0
                                if (item.unitInit !== null) {
                                    if (cur.unitInit.length !== 0) {
                                        cur.unitInit.forEach(cur22 => {
                                            let fUn
                                            let selUn = cur.baseU.split(' ').join('')
                                            if (cur22.price !== null) {

                                                fUn = `${cur22.unitNum}${cur22.unitU}`
                                                console.log(fUn, selUn, 'llololsos')
                                                if (fUn === selUn) {

                                                    priceB = cur22.price
                                                    priceB = parseFloat(priceB)
                                                }
                                            } else {
                                                fUn = `${cur22.unit}`
                                            }
                                            // if()
                                        })
                                    }
                                } else {
                                    priceB = parseFloat(item.price)
                                }

                                let totAm
                                let pr = price2
                                let othp = 0
                                totAm = selU2
                                let finalSelu = parseFloat(cur.selU2) * parseFloat(cur.qt)


                                document.querySelector('.seleted_unit_price').innerText = selU2
                                if (parseFloat(cur.selU2) !== 0) {
                                    if (cur.unitInit.length !== 0) {

                                        if (cur.unitInit[0].name !== undefined) {
                                            let tUNpr = 0
                                            cur.unitInit.forEach(cu => {
                                                if (cu.added) {

                                                    tUNpr += parseFloat(cu.price.split('₹')[1].split(',').join(''))
                                                }
                                            })
                                            finalSelu = parseFloat(selU2) * parseFloat(cur.qt)

                                        }
                                    } else {

                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[3].innerText = '₹ ' + finalSelu.toLocaleString()
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText = '₹ ' + finalSelu.toLocaleString()
                                    }

                                    if (document.querySelector('.taste_makers') !== null && !fstPurN2) {
                                        item.fdInside.forEach(cu => {

                                            if (cu.name.split(' ').join('').toLowerCase() === 'tastemakers') {
                                                let pr = parseFloat(cu.price) * parseFloat(cur.qt)

                                                document.querySelectorAll('.taste_makers .ct_inner__inside_ths span').forEach(cuItm => {
                                                    cuItm.innerText = '₹ ' + pr.toLocaleString()
                                                })
                                            }
                                        })
                                    }
                                    if (document.querySelector('.curry_sauce') !== null) {
                                        item.fdInside.forEach(cu => {

                                            if (cu.name.split(' ').join('').toLowerCase() === 'currysauce') {
                                                let pr = parseFloat(cu.price) * parseFloat(cur.qt)
                                                document.querySelectorAll('.curry_sauce .ct_inner__inside_ths span').forEach(cuItm => {
                                                    cuItm.innerText = '₹ ' + pr.toLocaleString()

                                                })
                                            }
                                        })
                                    }
                                    if (cur.baseU.split(' ').join('') !== 'notselected') {
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[3].innerText = '₹ ' + finalSelu.toLocaleString()
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText = '₹ ' + finalSelu.toLocaleString()
                                        if (cur.unitInit[0].name === undefined) {
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain + '—' + cur.baseU
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain + '—' + cur.baseU
                                        } else {
                                            if (finalSelu === 0) {
                                                document.querySelectorAll('.ct_bx_qty_inner .unit_fds').forEach(cur => {
                                                    cur.innerText = 'See available options.';
                                                    cur.style.color = 'black';
                                                    cur.style.fontFamily = 'Open Sans';

                                                })
                                            }
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain
                                        }

                                    } else {
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[3].innerText = cur.baseU
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText = cur.baseU
                                    }
                                } else {
                                    if (cur.unitInit.length !== 0) {
                                        if (cur.unitInit[0].name !== undefined) {
                                            let tUNpr = 0
                                            cur.unitInit.forEach(cu => {
                                                if (cu.added) {
                                                    tUNpr += parseFloat(cu.price.split('₹')[1].split(',').join(''))

                                                }
                                            })
                                            finalSelu = parseFloat(selU2) * parseFloat(cur.qt)

                                        }
                                    }
                                    if (document.querySelector('.taste_makers') !== null && !fstPurN2) {
                                        item.fdInside.forEach(cu => {

                                            if (cu.name.split(' ').join('').toLowerCase() === 'tastemakers') {
                                                let pr = parseFloat(cu.price) * parseFloat(cur.qt)
                                                document.querySelectorAll('.taste_makers .ct_inner__inside_ths span').forEach(cuItm => {
                                                    cuItm.innerText = '₹ ' + pr.toLocaleString()
                                                })
                                            }
                                        })
                                    }
                                    if (document.querySelector('.curry_sauce') !== null) {
                                        item.fdInside.forEach(cu => {

                                            if (cu.name.split(' ').join('').toLowerCase() === 'currysauce') {
                                                let pr = parseFloat(cu.price) * parseFloat(cur.qt)
                                                document.querySelectorAll('.curry_sauce .ct_inner__inside_ths span').forEach(cuItm => {
                                                    cuItm.innerText = '₹ ' + pr.toLocaleString()

                                                })
                                            }
                                        })
                                    }
                                    if (cur.baseU.split(' ').join('') !== 'notselected') {
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[3].innerText = '₹ ' + finalSelu.toLocaleString()
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText = '₹ ' + finalSelu.toLocaleString()
                                        if (cur.unitInit[0].name === undefined) {

                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain + '—' + cur.baseU
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain + '—' + cur.baseU
                                        } else {
                                            if (finalSelu === 0) {
                                                document.querySelectorAll('.ct_bx_qty_inner .unit_fds').forEach(cur => {
                                                    cur.innerText = 'See available options.';
                                                    cur.style.color = 'black';
                                                    cur.style.fontFamily = 'Open Sans';

                                                })
                                            }
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain
                                            document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain
                                        }

                                    } else {

                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[1].innerText = cur.baseMain
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner p')[0].innerText = cur.baseMain
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[3].innerText = cur.baseU
                                        document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText = cur.baseU
                                    }

                                }
                                //calculating the grocery price
                                if (cur.itemsOthers !== null) {
                                    cur.itemsOthers.forEach(cur => {
                                        let pr = cur.price.split('₹')[1]
                                        if (!cur.unselect) {
                                            othp += parseFloat(pr)
                                        }
                                        let otherItms = 0
                                        if (document.querySelectorAll('.for_otherItems')[1] !== undefined) {
                                            if (window.screen.width <= 740) {
                                                otherItms = document.querySelectorAll('.for_otherItems')[1].childNodes[3].childNodes[5].childNodes
                                            } else {
                                                otherItms = document.querySelectorAll('.for_otherItems')[0].childNodes[3].childNodes[5].childNodes

                                            }
                                        }

                                        if (otherItms !== 0) {
                                            otherItms.forEach(cu => {
                                                if (cu.classList !== undefined) {

                                                    let name = cu.childNodes[1].childNodes[1].innerText.split('x')[0].split(' ').join('')
                                                    console.log(name, cur.name.split(' ').join(''), 'looosd')
                                                    if (name === cur.name.split(' ').join('')) {
                                                        cu.childNodes[1].childNodes[3].innerText = cur.price
                                                    }




                                                }
                                            })
                                        }

                                    })
                                }
                                let totPermP = 0
                                //calculating the price of curry sauce and tastemaker 
                                if (cur.permGroup !== undefined) {
                                    cur.permGroup.forEach(cm => {
                                        ///fstPurN for first purchase discount -> bolean
                                        if (fstPurN) {
                                            if (!cm.eprice) {
                                                let pr = parseFloat(cm.price.split('₹')[1])
                                                totPermP += pr
                                            }

                                        } else {
                                            if (!cm.eprice) {
                                                let pr = parseFloat(cm.price.split('₹')[1])
                                                totPermP += pr
                                            }
                                        }

                                    })
                                }
                                let countNum = 1
                                let baseSelected = cur.baseU.split(' ').join('')
                                let prBase = 0
                                item.unitInit.forEach(cu => {
                                    if (cu.name === undefined) {
                                        if (cu.price !== null) {
                                            let fUnn = cu.unitNum + cu.unitU
                                            fUnn = fUnn.split(' ').join('')
                                            if (fUnn === baseSelected) {
                                                countNum = parseFloat(cu.count)
                                            }
                                        }
                                    }
                                })
                                cur.unitInit.forEach(cu => {
                                    if (cu.name !== undefined) {
                                        if (cu.added) {
                                            let prB = parseFloat(cu.price.split('₹')[1].split(',').join(''))
                                            prBase += prB
                                        }
                                    }
                                })
                                totPermP = totPermP
                                totPermP *= countNum
                                //othp*=countNum
                                //calculating the selected unit price
                                let pff = parseFloat(item.profit)
                                //totPermP=totPermP+(totPermP*pff/100)
                                if (item.unitInit[0].name === undefined && item.unitInit !== null) {
                                    totAm = (totAm) * parseFloat(cur.qt)
                                    totAm += totPermP * parseFloat(cur.qt)
                                    totAm += othp

                                } else {
                                    totAm += totPermP
                                    totAm += othp
                                    totAm = (totAm) * parseFloat(cur.qt)
                                }

                                document.querySelectorAll('.mrp_ammount del').forEach(cur => {
                                    cur.innerText = '₹  ' + totAm.toLocaleString()
                                })
                                if (item.offer !== null) {
                                    let off = parseFloat(item.offer)
                                    totAm = totAm - (totAm * (off / 100))
                                    totAm = Math.round(totAm)

                                }

                                document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => {
                                    cur.innerText = "₹ " + totAm
                                })
                                if (document.querySelector('.seleted_unit_price2') !== null) {
                                    document.querySelector('.seleted_unit_price2').innerText = totPermP
                                }
                                totAm = Math.round(totAm)
                                totAm = totAm.toLocaleString()

                                if (item.id !== '732181744-54da-4243-b0h5-a79898eb60298' && item.id !== '96681744-54da-4243-b0h5-a79898ec160099') {
                                    document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                                        cur.innerText = (totAm)
                                    })
                                } else {
                                    document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                                        cur.innerText = `${totAm}`
                                    })
                                    document.querySelectorAll('.ct_bx_price pr').forEach(cur => {
                                        cur.innerText = `/piece`
                                    })
                                }


                                document.querySelectorAll('.ct_bx_qt_foods input').forEach(cur1 => {
                                    cur1.value = cur.qt
                                })

                                document.querySelectorAll('.ct_bx_weight_qt span').forEach(cur1 => {
                                    cur1.innerText = cur.itemUnit
                                })
                            }
                        })
                    } else {

                        document.querySelectorAll('.ct_bx_weight_qt span').forEach(cur1 => {
                            cur1.innerText = item.initUnit + " " + item.unitUni
                        })
                    }
                }


            }
            if (document.querySelector('.for_reg_base') !== null) {
                if (document.querySelectorAll('.ct_bx_ins_items .ct_bx_icon_show_info')[1] !== null) {
                    document.querySelectorAll('.ct_bx_ins_items .ct_bx_icon_show_info')[1].style.transform = 'translate(0,-3px)'

                }
            }

            document.querySelector('.ct_bx_first_icon').style.display = 'none'
            let user = {}
            console.log(item.name, 'hey')
            item.review.forEach(cur1 => {
                matchedOne++


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

                let html = `       <div class="ct_bx_revies">
                    <div class="ct_person_dt">
                    <img alt='account icon' src="../img/acc.jpg">                                <h4>${userN}</h4>
     
                    </div>
                    ${stars}
                    <span class="date_rev"><pr>Posted on:</pr> ${time}</span>

                    <div class="ct_bx_dt_rv">
     
                        <h5>${headLine}</h5>
                        <p>${subHead}</p>

                        <span class="idUser">${user.userId}</span>             
                    </div>
     
     
     
                </div>`

                addedNamesRat.push(user.userId)
                document.querySelector('.ct_bx_revies_all').insertAdjacentHTML('beforeend', html)

                document.querySelectorAll('.ct_bx_revies').forEach(cu => {
                    Array.from(cu.childNodes).forEach(cu1 => {
                        console.log(cu1.childNodes)
                        if (cu1.classList !== undefined) {
                            if (cu1.classList.value.split(' ').includes('ct_bx_dt_rv')) {
                                if (cu1.childNodes[5].innerText === user.userId) {
                                    console.log(cu1.childNodes, 'cList')
                                    let alreadyadded = false
                                    let actualHeight = cu1.childNodes[3].getBoundingClientRect().height
                                    if (cu1.childNodes[3].getBoundingClientRect().height > 302) {
                                        cu1.childNodes[3].style.height = '200px'
                                        cu1.childNodes[3].style.overflow = 'hidden'
                                        cu1.childNodes.forEach(elm => {
                                            if (elm.classList !== undefined) {
                                                if (elm.classList !== undefined) {
                                                    if (elm.classList.value.split(' ').includes('rd_more')) {
                                                        alreadyadded = true
                                                    }
                                                }
                                            }
                                        })
                                        if (!alreadyadded) {
                                            cu1.childNodes[5].insertAdjacentHTML('afterend', `<rd class="rd_more nottog"><p class='hidden'>${actualHeight}</p> <div class='show_m'><ion-icon name="chevron-down-outline" role="img" class="md hydrated" aria-label="chevron down outline"></ion-icon> Read more </div> 
                                                    <div class='show_l'> <ion-icon name="chevron-up-outline" role="img" class="md hydrated" aria-label="chevron up outline"></ion-icon> Read less </div>
                                                    </rd>`)

                                        }
                                    }

                                }
                            }
                        }
                    })

                })

            })

        }

    })
    if (!matched) {
        //window.location.replace('/')
    }
    if (matchedOne === 0) {
        document.querySelector('.ct_bx_first_icon').style.display = 'block'
    }
    addReccom([window.location.pathname.split('/')[1]], '.ct_slider_inner', 'fd', 1)
}








if (window.location.pathname.split('/')[1] === undefined) {
    let token = window.location.pathname.split('/')[1]
    let jwt = secret(token)
    let addedItems = JSON.parse(localStorage.getItem('foodsAdded'))
    document.querySelector('html').addEventListener('click', (e) => {
        let cBtn = e.target.closest('.bx_add_t_cart_btn_itm_dt')
        let qt1 = document.querySelectorAll('.ct_bx_qt_foods input')[1].value
        if (cBtn !== null) {
            let arrFd = []
            if (JSON.parse(localStorage.getItem("foodsAdded")) !== null) {
                arrFd = JSON.parse(localStorage.getItem("foodsAdded"))
            }
            let arrOthers = []
            let otherItms
            let permGroup = []
            let img = document.querySelector('.ct_bx_img_itm img').src
            if (document.querySelector('.ct_sbout_this_itm .ct_bx_ins_items.perm') !== null) {
                document.querySelectorAll('.ct_sbout_this_itm  > .contianer_items_inside .ct_bx_ins_items.perm').forEach(cur => {
                    let name = cur.childNodes[1].childNodes[1].childNodes[1].innerText
                    let price
                    console.log(cur.childNodes[1].childNodes[1].childNodes, cur.childNodes[1].childNodes[1].childNodes[3].childNodes[2])
                    let ep = false
                    if (cur.childNodes[1].childNodes[1].childNodes[3].childNodes[2] !== undefined) {
                        ep = cur.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText
                        console.log(cur.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText, '10261')
                        price = cur.childNodes[1].childNodes[1].childNodes[3].childNodes[2].innerText
                        if (getCookie('user') !== '') {
                            if (JSON.parse(getCookie('user')).fstPurchase && getCookie('firstpurchase') === '') {
                                document.cookie = "firstpurchase" + "=" + JSON.stringify(window.location.pathname.split('/')[1]) + ";" + "expires=18 Dec 9999 12:00:00 UTC;path=/" + ' ';

                            }
                        }

                    } else {
                        console.log(cur.childNodes[1].childNodes[1].childNodes)
                        price = cur.childNodes[1].childNodes[1].childNodes[3].innerText

                    }
                    permGroup.push({ name: name, price: price, eprice: ep })

                })
            } else {
                permGroup = undefined
            }



            if (document.querySelectorAll('.for_otherItems')[0] !== undefined) {
                if (window.screen.width <= 740) {
                    otherItms = document.querySelectorAll('.for_otherItems')[1].childNodes[3].childNodes[5].childNodes
                } else {
                    otherItms = document.querySelectorAll('.for_otherItems')[0].childNodes[3].childNodes[5].childNodes

                }
            } else { otherItms = 0 }

            if (otherItms !== 0) {
                otherItms.forEach(cu => {
                    if (cu.classList !== undefined) {
                        let name = cu.childNodes[1].childNodes[1].innerText.split('x')[0]
                        let price = cu.childNodes[1].childNodes[3].innerText
                        if (!cu.classList.value.split(' ').includes('unselect_other')) {

                            arrOthers.push({
                                name: name,
                                unselect: false,
                                price: price
                            })
                        } else {
                            arrOthers.push({
                                name: name,
                                unselect: true,
                                price: price
                            })
                        }

                    }
                })
            } else {
                arrOthers = null
            }
            console.log(JSON.parse(localStorage.getItem('foodsAdded')))
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
            let baseU = ``
            let baseMain = ``
            if (document.querySelector('.ct_bx_qty_inner p').innerText.split('—')[1] !== undefined) {
                baseMain = document.querySelector('.ct_bx_qty_inner p').innerText.split('—')[0]
                if (document.querySelector('.ct_bx_inside_base') === null) {

                    baseU = document.querySelector('.ct_bx_qty_inner p').innerText.split('—')[1]
                }
            } else {
                baseMain = document.querySelector('.ct_bx_qty_inner p').innerText
                if (document.querySelector('.ct_bx_inside_base') === null) {

                    baseU = document.querySelectorAll('.ct_bx_qty_inner .selc .inner span')[0].innerText
                }
            }

            let unitInU = document.querySelectorAll('.ct_bx_units_item ul')[0]

            let unitInit = []
            let unitInit2 = []
            if (document.querySelector('.ct_bx_inside_base') !== null) {
                if (window.screen.width <= 800) {
                    Array.from(document.querySelectorAll('.cont2_itemskr .ct_bx_inside_base li')).forEach(cur => {
                        let name = cur.childNodes[1].childNodes[1].innerText
                        let price = cur.childNodes[1].childNodes[3].innerText
                        let added = false

                        if (cur.classList.value === 'alreadyselected') {
                            added = true
                        }
                        unitInit.push({ name: name, price: price, added: added })
                    })
                } else {
                    Array.from(document.querySelectorAll('.cont1_itemskr .ct_bx_inside_base li')).forEach(cur => {
                        let name = cur.childNodes[1].childNodes[1].innerText
                        let price = cur.childNodes[1].childNodes[3].innerText
                        let added = false

                        if (cur.classList.value === 'alreadyselected') {
                            added = true
                        }
                        unitInit.push({ name: name, price: price, added: added })
                    })
                }

            } else {
                Array.from(unitInU.childNodes).forEach(cur => {
                    if (cur.tagName !== undefined) {
                        if (cur.tagName === 'LI') {
                            let unit
                            let unitNum
                            let price
                            let unitU
                            if (!cur.classList.value.split(' ').includes('othUn')) {
                                unitNum = cur.childNodes[1].innerText.split(' ')[0]
                                unitU = cur.childNodes[1].innerText.split(' ')[1]
                                unit = null
                                price = cur.childNodes[3].innerText.split('₹')[1].split(',').join('')
                            } else {
                                price = null
                                unit = cur.childNodes[1].innerText
                                unitU = null
                                unitNum = null

                            }
                            unitInit.push({ unitNum: unitNum, unit: unit, price: price, unitU: unitU })
                        }
                    }
                })
            }
            let name = document.querySelector('.fd_name_dt_itm').innerText
            qt1 = parseFloat(qt1)

            let price = parseFloat(document.querySelector('.ct_bx_mrp del').innerText.split('₹')[1].split(',').join(''))
            if (document.querySelector('.ct_offer_box_cook2 span').innerText !== '') {
                price = parseFloat(document.querySelector('.ct_bx_price span').innerText)
            }
            price *= parseFloat(document.querySelectorAll('.ct_bx_qt_foods input')[1].value)
            price = "₹" + price
            let dtime = document.querySelectorAll('.ct_bx_Time p strong')[1].innerText
            let off = document.querySelector('.ct_offer_box_cook2 span').innerText.split('%')[0]
            if (document.querySelector('.ct_offer_box_cook2 span').innerText === '') { off = null }
            let initU = document.querySelector('.int_unit').innerText
            let selU2 = document.querySelector('.seleted_unit_price').innerText
            let selU = document.querySelector('.seleted_unit_price2').innerText
            if (localStorage.length !== 0) {
                let dateFull = moment().format('LL')
                if (unitInit.length !== 0) {
                    if (unitInit[0].name !== undefined) {
                        if (document.querySelector('.unit_fds').innerText.split(' ').join('').toLowerCase() !== 'seeavailableoptions.') {
                            selU2 = parseFloat(document.querySelector('.unit_fds').innerText.split('₹')[1].split(',').join(''))

                        }
                    }
                }

                if (addedItems !== null) {
                    arrFd.push({ img: img, dTime: dtime, permGroup: permGroup, itemsOthers: arrOthers, baseMain: baseMain, baseU: baseU, date: dateFull, selU: selU, selU2: selU2, initU: initU, offer: off, id: token, name: name, price: price, unitInit: unitInit, qt: qt1, catId: catId })

                    localStorage.setItem('foodsAdded', JSON.stringify(arrFd))
                }
                document.querySelectorAll('.bx_add_t_cart_btn_itm_dt').forEach(cur => {
                    cur.style.display = 'none'

                })
                document.querySelector('.ct_bx_no_base_selected').style.display = 'none'

                document.querySelectorAll('.ct_bx_for_added_itm').forEach(cur => {
                    cur.style.display = 'block'
                    cur.style.marginTop = '19px'
                })
                document.querySelectorAll('.ct_x_added_Itm_date p').forEach(cur => {
                    cur.innerText = `You have added  this item to the cart on ${dateFull} `
                })

            }

        }

    })




    let myRating = null

    let catId = oQ[2].split('=')[1]
    if (getCookie('myRatings') !== '') {
        myRating = JSON.parse(getCookie('myRatings'))
    }

    if (myRating !== null) {
        document.querySelector('.ct_bx_form_rating').style.opacity = .5
        document.querySelector('.ct_bx_form_rating').style['pointer-events'] = 'none';

        let token = window.location.search.split('?')[1].split('=')[1].split('&')[0]

        document.querySelector('.for_submit_form_rev').style.opacity = .5
        document.querySelector('.for_submit_form_rev').style['pointer-events'] = 'none';
        myRating.forEach(cur => {
            console.log(cur.rate.id, token)
            if (myRating !== null && cur.rate.id === token) {
                document.querySelector('.ct_bx_btn_show_rev').style.display = 'none'
                document.querySelector('.ct_bx_hideandshow_revbox').style.display = 'block'
                document.querySelector('.ct_Remove_edit_bx').style.display = 'block'
                document.querySelector('.closeReview').style.display = 'none'
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
                document.querySelectorAll('.rated_success .rat_star').forEach(cur => {
                    cur.style.display = 'none'
                })
                document.querySelector('.ct_rate_star_wrapper').style.transform = `translate(-110px, -17px)`
                document.querySelector('.rated_success').insertAdjacentHTML('beforeend', stars)

            }
        })
    }




}










document.querySelector('html').addEventListener('click', (e) => {
    //btn elements
    let bx = e.target.closest('.ct_bx_qty_inner')
    let bxA = e.target.closest('.ct_bx_units_item li')
    let showInfoItm = e.target.closest('.ct_bx_icon_show_info')
    let remShowiim = e.target.closest('.ct_remove_ns_about')
    let elemFdOthers = e.target.closest('.for_otherItems')
    let showReviews = e.target.closest('.ct_bx_btn_show_rev')
    let removeBsitm = e.target.closest('.remove_base_itm')
    let closeReviews = e.target.closest('.closeReview')
    let removebaseItm = e.target.closest('.ct_overfow_for_baseitm')
    let elemOthLi = e.target.closest('.ct_list_other_item ul li')
    let slide = e.target.closest('.ct_field_small_size')
    let addBsitm = e.target.closest('.add_base_itm')
    let rdM = e.target.closest('.rd_more')
    if (rdM !== null) {
        if (rdM.classList.value.split(' ').includes('nottog')) {
            console.log(rdM.parentElement.childNodes)
            let h = parseFloat(rdM.childNodes[0].innerText)
            rdM.classList.remove('nottog')
            rdM.classList.add('tog')

            rdM.parentElement.childNodes[3].style.height = `${h}px`
            rdM.childNodes[2].style.display = 'none'
            rdM.childNodes[4].style.display = 'flex'
        } else {
            rdM.classList.add('nottog')
            rdM.classList.remove('tog')

            rdM.parentElement.childNodes[3].style.height = `302px`
            rdM.childNodes[2].style.display = 'flex'
            rdM.childNodes[4].style.display = 'none'
        }

    }
    if (slide !== null) {
        if (slide !== null) {
            if (!document.querySelector('.ct_bx_slide_bx').classList.value.split(' ').includes('active'))
                document.querySelector('.ct_bx_slide_bx').classList.add('active')
            document.querySelector('.ct_bx_ov_lay').style.display = 'block'
        } else {
            document.querySelector('.ct_bx_ov_lay').style.display = 'none'
            document.querySelector('.ct_bx_slide_bx').classList.remove('active')

        }
    } else {
        if (e.target.closest('.essentials') !== null) {
            return
        }
        if (document.querySelector('.ct_bx_slide_bx.active') !== null) {
            document.querySelector('.ct_bx_slide_bx.active').classList.remove('active')
            document.querySelector('.ct_bx_ov_lay').style.display = 'none'

        }

    }
    if (showReviews !== null) {
        showReviews.style.display = 'none'

        document.querySelectorAll('.ct_bx_hideandshow_revbox').forEach(cur => {
            cur.classList.add('openBoxrev')
            cur.classList.remove('ct_bx_hideandshow_revbox')
        })

    }
    if (closeReviews !== null) {
        document.querySelector('.ct_bx_btn_show_rev').style.display = 'flex'

        document.querySelectorAll('.openBoxrev').forEach(cur => {
            cur.classList.remove('openBoxrev')
            cur.classList.add('ct_bx_hideandshow_revbox')
        })

    }
    if (removeBsitm !== null) {
        document.querySelectorAll('.unit_fds').forEach(cu => {
            cu.style.fontFamily = 'Montserrat'
            cu.style.color = 'rgb(152 16 16)'
        })
        let price = document.querySelector('.ct_bx_price span').innerText
        let qt = document.querySelector('.ct_bx_qt_foods input').value
        qt = parseFloat(qt)
        let off = document.querySelector('.ct_offer_box_cook2 span')
        if (off.innerText !== '') {

            if (document.querySelector('.mrp_ammount del').innerText !== '') { price = document.querySelector('.mrp_ammount del').innerText.split('₹')[1].split(',').join('') }
        }
        price = parseFloat(price)
        let mPrice = removeBsitm.parentElement.childNodes[1].childNodes[3].innerText.split('₹')[1].split(',').join('')
        mPrice = parseFloat(mPrice)
        let tPr = price - mPrice
        let basePrice = document.querySelector('.unit_fds').innerText.split('₹')[1].split(',').join('')
        basePrice = parseFloat(basePrice)
        if (off.innerText !== '') {
            off = off.innerText.split('%')[0]
            document.querySelector('.mrp_ammount del').innerText = '₹' + tPr.toLocaleString()
            off = parseFloat(off)
            tPr = tPr - (tPr * (off / 100))
            tPr = Math.round(tPr)
            tPr = tPr.toLocaleString()
            document.querySelector('.ct_bx_price span').innerText = tPr
        } else {
            document.querySelector('.ct_bx_price span').innerText = tPr
        }
        removeBsitm.parentElement.classList.remove('alreadyselected')
        removeBsitm.parentElement.childNodes[3].style.display = 'block'
        removeBsitm.parentElement.childNodes[5].style.display = 'none'
        let bsPr = basePrice - mPrice
        if (bsPr <= 0) {
            bsPr = 0
            document.querySelectorAll('.unit_fds').forEach(cu => {
                cu.style.fontFamily = 'Open Sans'
                cu.style.color = 'rgb(74 71 71)'
                cu.innerText = 'See available options.'
            })

        } else {
            document.querySelectorAll('.unit_fds').forEach(cu => cu.innerText = '₹' + bsPr)

        }
        let name = removeBsitm.parentElement.childNodes[1].childNodes[1].innerText
        let searchUrl = window.location.pathname.split('/')[1]
        let fdLocal = JSON.parse(localStorage.getItem('foodsAdded'))
        fdLocal.forEach(cur => {
            if (cur.id === searchUrl) {
                cur.selU2 = bsPr

                cur.unitInit.forEach(cu => {
                    if (cu.name === name) {
                        cu.added = false
                        cu.price = '₹' + mPrice.toLocaleString()
                    }
                })
            }
        })
        localStorage.setItem('foodsAdded', JSON.stringify(fdLocal))
        document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => cur.innerText = '₹ ' + tPr)
        removeBsitm.parentElement.childNodes[3].style.display = 'block'
    }
    if (addBsitm !== null) {
        let price = document.querySelector('.ct_bx_price span').innerText
        let qt = document.querySelector('.ct_bx_qt_foods input').value
        qt = parseFloat(qt)
        document.querySelectorAll('.unit_fds').forEach(cu => {
            cu.style.fontFamily = 'Montserrat'
            cu.style.color = 'rgb(152 16 16)'
        })
        let off = document.querySelector('.ct_offer_box_cook2 span')
        if (off.innerText !== '') {

            if (document.querySelector('.mrp_ammount del').innerText !== '') { price = document.querySelector('.mrp_ammount del').innerText.split('₹')[1].split(',').join('') }
        }
        price = parseFloat(price)
        let mPrice = addBsitm.parentElement.childNodes[1].childNodes[3].innerText.split('₹')[1].split(',').join('')
        mPrice = parseFloat(mPrice)
        let tPr = price + mPrice
        console.log(price, mPrice, tPr)

        let basePrice = 0
        if (document.querySelector('.unit_fds').innerText.split(' ').join('').toLowerCase() !== 'seeavailableoptions.') {
            basePrice = document.querySelector('.unit_fds').innerText.split('₹')[1].split(',').join('')
        }
        basePrice = parseFloat(basePrice)
        if (off.innerText !== '') {
            document.querySelector('.mrp_ammount del').innerText = '₹' + tPr.toLocaleString()
            off = off.innerText.split('%')[0]
            off = parseFloat(off)
            tPr = tPr - (tPr * (off / 100))
            tPr = Math.round(tPr)
            tPr = tPr.toLocaleString()
            console.log(tPr)

            document.querySelector('.ct_bx_price span').innerText = tPr
        } else {
            document.querySelector('.ct_bx_price span').innerText = tPr
        }

        addBsitm.parentElement.classList.add('alreadyselected')
        addBsitm.parentElement.childNodes[3].style.display = 'none'
        addBsitm.parentElement.childNodes[5].style.display = 'block'
        let bsPr = basePrice + mPrice
        let name = addBsitm.parentElement.childNodes[1].childNodes[1].innerText
        let searchUrl = window.location.pathname.split('/')[1]
        let fdLocal = JSON.parse(localStorage.getItem('foodsAdded'))
        fdLocal.forEach(cur => {
            if (cur.id === searchUrl) {
                cur.selU2 = bsPr
                cur.unitInit.forEach(cu => {
                    if (cu.name === name) {
                        cu.added = true
                        cu.price = '₹' + mPrice.toLocaleString()

                    }
                })
            }
        })
        localStorage.setItem('foodsAdded', JSON.stringify(fdLocal))
        document.querySelectorAll('.unit_fds').forEach(cu => cu.innerText = '₹' + bsPr)
        document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => cur.innerText = '₹ ' + tPr)
    }
    if (removebaseItm !== null) {
        document.querySelectorAll('.tog .ct_bx_inside_base').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.tog .ct_list_other_item').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.tog .icondwn').forEach(cur => {
            cur.style.display = 'none'
        })

        document.querySelectorAll('.tog .iconup').forEach(cur => {
            cur.style.display = 'block'
        })
        document.querySelectorAll('.tog .ct_down_nav').forEach(cur => {
            cur.style.display = 'block'
        })
        document.querySelectorAll('.tog .ct_up_nav').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.tog').forEach(cur => {
            cur.classList.add('nottog')
            cur.classList.remove('tog')

        })
        removebaseItm.style.display = 'none'
    }
    if (elemFdOthers !== null) {
        if (elemFdOthers.classList.value.split(' ').includes('nottog')) {
            document.querySelector('.ct_overfow_for_baseitm').style.display = 'block'
            if (window.screen.width <= 650) {
                document.querySelectorAll('.ct_list_other_item ')[1].style.transform = 'translate(0)'
            }
            elemFdOthers.childNodes[3].style.display = 'block'
            elemFdOthers.classList.add('tog')
            document.querySelectorAll('.ct_up_nav').forEach(cur => {
                cur.style.display = 'block'
            })
            document.querySelectorAll('.ct_down_nav').forEach(cur => {
                cur.style.display = 'none'
            })
            elemFdOthers.classList.remove('nottog')
        } else if (e.target.closest('.ct_list_other_item') === null) {
            document.querySelector('.ct_overfow_for_baseitm').style.display = 'none'

            elemFdOthers.childNodes[3].style.display = 'none'

            elemFdOthers.classList.remove('tog')
            elemFdOthers.classList.add('nottog')
            document.querySelectorAll('.ct_up_nav').forEach(cur => {
                cur.style.display = 'none'
            })
            document.querySelectorAll('.ct_down_nav').forEach(cur => {
                cur.style.display = 'block'
            })

        }


    } else {

        if (document.querySelector('.tog.for_otherItems') !== null) {
            document.querySelectorAll('.for_otherItems').forEach(cur => {
                cur.classList.add('nottog')
            })
            document.querySelectorAll('.for_otherItems').forEach(cur => {
                cur.classList.remove('tog')
            })
            document.querySelectorAll('.ct_up_nav').forEach(cur => {
                cur.style.display = 'none'
            })
            document.querySelectorAll('.ct_down_nav').forEach(cur => {
                cur.style.display = 'block'
            })
            document.querySelectorAll('.for_otherItems .ct_list_other_item').forEach(cur => {
                cur.style.display = 'none'
            })
            document.querySelector('.ct_overfow_for_baseitm').style.display = 'none'
        }
    }
    if (elemOthLi !== null) {
        let totP
        let off = document.querySelector('.ct_bx_fex_fd_dt_ov .ct_offer_box_cook2 span').innerText
        if (off !== '') {
            off = parseFloat(off.split('%')[0])
            let price = document.querySelectorAll('.ct_bx_total_ammount span')[1].innerText
            price = parseFloat(price.split('₹')[1].split(',').join(''))
            let price2 = elemOthLi.childNodes[1].childNodes[3].innerText
            price2 = parseFloat(price2.split('₹')[1].split(',').join(''))
            let itemOhE = elemOthLi
            let anP
            if (itemOhE.classList.value.split(' ').includes('unselect_other')) {
                let offerObP = 0

                document.querySelectorAll('.mrp_ammount del').forEach(cur => {
                    let pr = parseFloat(cur.innerText.split('₹')[1].split(',').join(''))
                    offerObP = pr + price2

                    cur.innerText = '₹  ' + (pr + price2).toLocaleString()
                })
                anP = offerObP
                elemOthLi.childNodes[5].style.display = 'block'
                elemOthLi.childNodes[3].style.display = 'none'

                itemOhE.classList.remove('unselect_other')
                console.log(anP, price2, anP - (anP * (off / 100)))

                totP = anP - (anP * (off / 100))
            } else {
                elemOthLi.childNodes[5].style.display = 'none'
                elemOthLi.childNodes[3].style.display = 'block'
                itemOhE.classList.add('unselect_other')
                let offerObP = 0
                document.querySelectorAll('.mrp_ammount del').forEach(cur => {
                    let pr = parseFloat(cur.innerText.split('₹')[1].split(',').join(''))
                    offerObP = pr - price2
                    cur.innerText = '₹  ' + (pr - price2).toLocaleString()
                })
                anP = offerObP

                console.log(anP, price2, anP - (anP * (off / 100)))


                totP = anP - (anP * (off / 100))
            }

        } else {

            let price = document.querySelectorAll('.ct_bx_total_ammount span')[1].innerText
            price = parseFloat(price.split('₹')[1].split(',').join(''))
            let price2 = elemOthLi.childNodes[1].childNodes[3].innerText
            price2 = parseFloat(price2.split('₹')[1].split(',').join(''))
            let itemOhE = elemOthLi
            let anP
            if (itemOhE.classList.value.split(' ').includes('unselect_other')) {
                anP = price + price2
                elemOthLi.childNodes[5].style.display = 'block'
                elemOthLi.childNodes[3].style.display = 'none'
                itemOhE.classList.remove('unselect_other')

            } else {
                elemOthLi.childNodes[5].style.display = 'none'
                elemOthLi.childNodes[3].style.display = 'block'
                itemOhE.classList.add('unselect_other')
                anP = price - price2
            }
            totP = anP
        }
        totP = Math.round(totP)
        totP = totP.toLocaleString()
        console.log(elemOthLi.parentElement.childNodes)

        let fds = JSON.parse(localStorage.getItem('foodsAdded'))
        fds.forEach((curI, index) => {
            let id = window.location.pathname.split('/')[1]
            if (curI.id.trim() === id.trim()) {
                let arrOthers = []
                elemOthLi.parentElement.childNodes.forEach(cu => {
                    if (cu.classList !== undefined) {
                        let name = cu.childNodes[1].childNodes[1].innerText
                        let price = cu.childNodes[1].childNodes[3].innerText
                        if (!cu.classList.value.split(' ').includes('unselect_other')) {

                            arrOthers.push({
                                name: name,
                                unselect: false,
                                price: price
                            })
                        } else {
                            arrOthers.push({
                                name: name,
                                unselect: true,
                                price: price
                            })
                        }

                    }
                })

                console.log(arrOthers, 'kaioos')
                curI.itemsOthers = arrOthers
                fds.splice(index, 1)
                fds.push(curI)

                localStorage.setItem('foodsAdded', JSON.stringify(fds))

            }
        })

        document.querySelectorAll('.ct_bx_price span').forEach(cu => cu.innerText = totP)
        document.querySelectorAll('.ct_bx_total_ammount span').forEach(cu => cu.innerText = "₹ " + totP)
        document.querySelectorAll('.for_otherItems').forEach(cur => {
            cur.classList.add('tog')
        })
        document.querySelectorAll('.for_otherItems').forEach(cur => {
            cur.classList.remove('nottog')
        })
        document.querySelectorAll('.ct_up_nav').forEach(cur => {
            cur.style.display = 'block'
        })
        document.querySelectorAll('.ct_down_nav').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.for_otherItems .ct_list_other_item').forEach(cur => {
            cur.style.display = 'block'
        })
    }
    if (remShowiim !== null) {
        document.querySelector('.ct_overfow_for_info').style.display = 'none'

        console.log(remShowiim.parentElement.parentElement.childNodes)
        remShowiim.parentElement.parentElement.childNodes.forEach(cur => {
            if (cur.classList !== undefined) {
                if (cur.classList.value === 't_bx_about_ins') {
                    cur.style.display = 'none'

                }
            }
        })
        document.querySelector('.tog.ct_bx_icon_show_info').classList.add('nottog')

        document.querySelector('.tog.ct_bx_icon_show_info').classList.remove('tog')
    }
    if (showInfoItm !== null) {
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector('.ct_overfow_for_info').style.display = 'block'
        if (document.querySelector('.tog.ct_bx_icon_show_info') !== null) {

            document.querySelector('.tog.ct_bx_icon_show_info').parentElement.parentElement.childNodes.forEach(cur => {
                if (cur.classList !== undefined) {
                    if (cur.classList.value === 't_bx_about_ins') {
                        cur.style.display = 'none'

                    }
                }
            })
            document.querySelector('.tog.ct_bx_icon_show_info').classList.add('nottog')


        }
        if (showInfoItm.classList.value.split(' ').includes('nottog')) {
            let left = showInfoItm.parentElement.parentElement.getBoundingClientRect().left - 140
            showInfoItm.parentElement.parentElement.childNodes.forEach(cur => {
                if (cur.classList !== undefined) {

                    if (cur.classList.value === 't_bx_about_ins') {
                        cur.style.display = 'flex'
                        let m = cur.getBoundingClientRect().top
                        let perH = (window.screen.height + m) / 2
                        cur.style.maxHeight = perH + 'px'

                    }
                }
            })
            showInfoItm.classList.add('tog')
            showInfoItm.classList.remove('nottog')

        } else {
            showInfoItm.parentElement.parentElement.childNodes.forEach(cur => {
                if (cur.classList !== undefined) {
                    if (cur.classList.value === 't_bx_about_ins') {
                        cur.style.display = 'none'
                        document.querySelector('.ct_overfow_for_info').style.display = 'none'

                    }
                }
            })
            showInfoItm.classList.remove('tog')
            showInfoItm.classList.add('nottog')
        }
    } else {

        if (document.querySelector('.tog.ct_bx_icon_show_info') !== null) {
            document.querySelector('.ct_overfow_for_info').style.display = 'none'

            document.querySelector('.tog.ct_bx_icon_show_info').parentElement.parentElement.childNodes[3].style.display = 'none'
            document.querySelector('.tog.ct_bx_icon_show_info').classList.add('nottog')

            document.querySelector('.tog.ct_bx_icon_show_info').classList.remove('tog')

        }
    }
    if (bxA !== null) {
        let unitPrice
        if (document.querySelector('.itm_dt_body') !== null) {
            document.querySelectorAll('.bx_add_t_cart_btn_itm_dt').forEach(cur => {
                cur.style['pointer-events'] = 'auto'
                cur.style.opacity = '1'

            })
            document.querySelectorAll('.ct_bx_total_ammount.totam2').forEach(cur => {
                cur.style.display = 'block'
            })
            document.querySelectorAll('.ct_bx_qty').forEach(cur => {
                cur.style.display = 'flex'
            })
            document.querySelector('.ct_bx_no_base_selected').style.display = 'none'
            document.querySelectorAll('.ct_bx_acct_cart').forEach(cu => {
                cu.style['pointer-events'] = 'auto'
            })
        }
        if (bxA.classList.value === 'Add_c_unit') {
            let bxUl = bxA.parentElement.parentElement
            bxUl.style.width = '200px'
            bxUl.classList.add('add_c_un')
            bxUl.style.maxHeight = 'initial'

            bxUl.style.overflowX = 'hidden'

            bxA.parentElement.parentElement.childNodes[3].style.display = 'none'
            bxA.parentElement.parentElement.childNodes[5].style.display = 'block'
            console.log(bxA.parentElement.parentElement.childNodes[5].childNodes)
            return
        }
        let unit = bxA.childNodes[1]
        let unitPriceN = bxA.childNodes[3]

        let stoc
        let lqt

        if (document.querySelector('.tog') !== null) {


            if (document.querySelector('.tog .ct_bx_weight_qt') !== null) {
                document.querySelector('.tog .ct_bx_weight_qt .ct_bx_dwn').style.display = 'block'

                document.querySelector('.tog  .ct_bx_weight_qt .ct_bx_up').style.display = 'none'
            } else {
                document.querySelector('.tog .icondwn').style.display = 'none'

                document.querySelector('.tog .iconup').style.display = 'block'
            }
            document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                cur.style.display = 'none'
            })
            document.querySelector('.tog').classList.add('nottog')

            document.querySelector('.tog').classList.remove('tog')


        }

        //quantitity selection box for krick item page
        document.querySelectorAll('.ct_err_max_stock2').forEach(cur => {
            cur.style.display = 'none'
        })
        document.querySelectorAll('.ct_err_max_stock').forEach(cur => {
            cur.style.display = 'none'
        })
        let mUnit = ``
        let mUnit2 = ``
        if (bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText.split('—')[1] !== undefined) {
            mUnit = bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText.split('—')[1]
            mUnit2 = bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText.split('—')[0]
        } else {
            mUnit = ''
            mUnit2 = bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText
        }


        let countNumer = bxA.childNodes[7].innerText
        countNumer = parseFloat(countNumer)
        unit = bxA.childNodes[1].innerText

        let token11 = window.location.search.split('?')[1].split('=')[1].split('&')[0]
        let sel2
        let allItm = JSON.parse(localStorage.getItem('foodsAdded'))
        let selPM2 = document.querySelector('.seleted_unit_price2').innerText

        if (document.querySelector('.seleted_unit_price2') === null) { selPM2 = 0 }

        let selP = document.querySelector('.seleted_unit_price').innerText
        let relP = document.querySelector('.mrp_ammount del').innerText.split('₹')[1].split(',').join('')
        relP = parseFloat(relP)
        let stock
        let stockT = false
        if (!bxA.classList.value.split(' ').includes('othUn')) {
            let Mqt = document.querySelectorAll('.ct_bx_qt_foods input')[1].value
            Mqt = parseFloat(Mqt)
            let qt = document.querySelectorAll('.ct_bx_qt_foods input')[1].value
            qt = parseFloat(qt)
            selP = parseFloat(selP)
            let fdP = parseFloat(bxA.childNodes[3].innerText.split('₹')[1].split(',').join(''))
            selP = parseFloat(document.querySelector('.seleted_unit_price').innerText)
            let priceMain = document.querySelectorAll('.ct_bx_total_ammount span')[1].innerText
            priceMain = parseFloat(priceMain.split('₹')[1].split(',').join(''))
            let pBase = bxA.childNodes[3].innerText.split('₹')[1]
            pBase = parseFloat(pBase) * qt
            bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].innerText = '₹' + pBase.toLocaleString()

            if (bxA.parentElement.parentElement.parentElement.classList.value.includes('for_reg_base')) {
                bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].innerText = '₹' + pBase.toLocaleString()

            }
            if (bxA.childNodes[1].innerText.split('(') !== undefined) {
                let unitNum = bxA.childNodes[1].innerText.split('(')[1].split(')')[0]
                bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerHTML = mUnit2 + ' &mdash; ' + unitNum
            } else {
                bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerHTML = mUnit2 + ' &mdash; ' + bxA.childNodes[1].innerText
            }

            let off = document.querySelector('.ct_bx_fex_fd_dt_ov .ct_offer_box_cook2 span').innerText
            if (document.querySelector('.ct_bx_fex_fd_dt_ov .ct_offer_box_cook2').style.display === 'none') { off = '' }
            let fnPr
            let placeQt = 1
            let placeQt1 = 1
            document.querySelectorAll('.ct_bx_units_item')[0].childNodes[1].childNodes.forEach((cu, i) => {

                if (cu.classList !== undefined) {
                    console.log(cu.childNodes[1].innerText.split(' ').join('').trim() === mUnit.split(' ').join('').trim(), mUnit.split(' ').join('').trim(), parseFloat(cu.childNodes[7].innerText), 'pooopssa')
                    if (cu.childNodes[1].innerText.split(' ').join('').trim() === mUnit.split(' ').join('').trim()) {
                        placeQt1 = parseFloat(cu.childNodes[7].innerText)
                        checkUn = true
                    }
                    if (cu.childNodes[1].innerText.split(' ').join('').trim() === unit.split(' ').join('').trim()) {
                        placeQt = i
                    }
                }
            })
            unit = unit
            selPM2 = parseFloat(selPM2)
            console.log(placeQt1, placeQt, '12455e3')
            let selU1 = document.querySelector('.seleted_unit_price2').innerText
            if (document.querySelector('.seleted_unit_price2') === null) { selU1 = 0 }

            selU1 = parseFloat(selU1)
            selU1 = (selU1 / (placeQt1)) * placeQt
            document.querySelectorAll('.ct_x_fd_dt_itm .ct_bx_ins_items.perm').forEach(cur => {
                let span = cur.childNodes[1].childNodes[1].childNodes[3].innerText.split('₹')[1]
                console.log(span, 123456)
                span = parseFloat(span)
                let newSp = (span / (placeQt1)) * countNumer
                console.log(newSp, 123456)
                if (cur.childNodes[1].childNodes[1].childNodes[3].childNodes[3] !== undefined) {
                    cur.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText = '₹ ' + newSp
                } else {
                    cur.childNodes[1].childNodes[1].childNodes[3].innerText = '₹ ' + newSp
                }
            })
            console.log(placeQt1, placeQt, 'kaiiiiiiiiii')
            selPM2 = (selPM2 / placeQt1) * placeQt
            if (document.querySelector('.seleted_unit_price2') !== null) {

                document.querySelector('.seleted_unit_price2').innerText = selPM2
            }
            let priceOvOther = 0
            let otherItms
            if (document.querySelectorAll('.for_otherItems')[0] !== undefined) {
                if (window.screen.width <= 740) {
                    otherItms = document.querySelectorAll('.for_otherItems')[1].childNodes[3].childNodes[5].childNodes
                } else {
                    otherItms = document.querySelectorAll('.for_otherItems')[0].childNodes[3].childNodes[5].childNodes


                }
            } else {
                otherItms = 0
            }

            if (otherItms !== 0) {
                otherItms.forEach(cu => {
                    if (cu.classList !== undefined) {
                        let name = cu.childNodes[1].childNodes[1]
                        let price = cu.childNodes[1].childNodes[3].innerText

                        price = parseFloat(price.split('₹')[1].split(',').join(''))
                        price = Math.round((price / (Mqt)))

                        price = (price / (placeQt1)) * countNumer
                        price *= qt
                        console.log(price, 'yelloosdhsjff')
                        if (cu.classList.value !== 'unselect_other') {
                            priceOvOther += price
                        }
                        price = price.toLocaleString()
                        allItm.forEach((cu1, ind) => {
                            if (cu1.id === token11) {
                                cu1.itemsOthers.forEach(cup => {
                                    console.log(cu.childNodes[1].childNodes, 'yelloosdhsjff')
                                    let n = cu.childNodes[1].childNodes[1].innerText.split(' ').join('').trim().toLowerCase()
                                    let n1 = cup.name.split(' ').join('').trim().toLowerCase()
                                    if (n1 === n) {
                                        cup.price = "₹ " + price
                                    }
                                })
                            }

                            allItm.splice(ind, 1)
                            allItm.push(cu1)


                        })
                        localStorage.setItem('foodsAdded', JSON.stringify(allItm))

                        cu.childNodes[1].childNodes[3].innerText = "₹ " + price
                    }

                })
            }
            fnPr = Math.round(fnPr)
            document.querySelectorAll('.seleted_unit_price').forEach(cur => {
                cur.innerText = fdP
            })
            let pff = document.querySelector('.ct_bx_pf1390').innerText
            pff = parseFloat(pff)

            let dropDwn2p = 0
            if (off !== '') {
                off = parseFloat(off)
                sel2 = fdP * qt
                //selPM2 = selPM2 + (selPM2 * (selPM2 / 100))   
                fnPr = (fdP * qt) + (selPM2 * qt)
                fnPr += priceOvOther

                document.querySelectorAll('.mrp_ammount del').forEach(cur => {
                    cur.innerText = '₹  ' + fnPr.toLocaleString()
                })
                fnPr = fnPr - (fnPr * (off / 100))
                fnPr = Math.round(fnPr)
            } else {
                sel2 = fdP * qt
                //selPM2 = selPM2 + (selPM2 * (selPM2 / 100))   

                fnPr = (fdP * qt) + priceOvOther + (selPM2 * qt)
                fnPr = Math.round(fnPr)
            }
            fnPr = Math.round(fnPr)
            fnPr = fnPr.toLocaleString()
            let searchUrl = window.location.pathname.split('/')[1]
            if (searchUrl !== '732181744-54da-4243-b0h5-a79898eb60298' && searchUrl !== '96681744-54da-4243-b0h5-a79898ec160099') {
                document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                    cur.innerText = (fnPr)
                })
            } else {
                document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                    cur.innerText = `${fnPr}`
                })
                document.querySelectorAll('.ct_bx_price pr').forEach(cur => {
                    cur.innerText = `/piece`
                })
            }

            document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => {
                cur.innerText = '₹  ' + (fnPr)
            })
            if (allItm !== null) {

                if (allItm.length !== 0) {
                    allItm.forEach((cur, i) => {
                        let id = cur.id
                        console.log(token11, 'loo2222o')
                        if (id === token11) {

                            cur.permGroup.forEach(cu => {
                                let pr = cu.price.split('₹')[1]
                                pr = parseFloat(pr)
                                let newP = (pr / (placeQt1)) * placeQt
                                cu.price = "₹ " + newP
                            })
                            cur.selP = bxA.childNodes[3].innerText.split('₹')[1].split(',').join('')


                            cur.selU = selPM2
                            if (bxA.parentElement.parentElement.parentElement.classList.value.includes('for_reg_base')) {
                                cur.baseU2 = unit

                            } else {
                                cur.baseU = unit

                            }
                            if (document.querySelector('.for_reg_base') !== null) {
                                if (bxA.parentElement.parentElement.parentElement.classList.value.includes('for_reg_base')) {

                                    cur.selU2 = sel2 / qt
                                }
                            } else {
                                cur.selU2 = sel2 / qt

                            }
                            // }
                            localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                        }
                    })
                }


            }

        } else {
            let stockT = false
            bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[3].innerText = `not selected`
            let allItm = JSON.parse(localStorage.getItem('foodsAdded'))
            let qt = document.querySelectorAll('.ct_bx_qt_foods input')[1].value
            qt = parseFloat(qt)
            let fdP = 0
            let off = document.querySelector('.ct_bx_fex_fd_dt_ov .ct_offer_box_cook2 span').innerText
            qt = parseFloat(qt)
            selP = parseFloat(document.querySelector('.seleted_unit_price').innerText)
            document.querySelectorAll('.seleted_unit_price').forEach(cur => {
                cur.innerText = 0
            })

            bxA.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].childNodes[1].innerText = mUnit2
            let placeQt1 = 1
            let placeQt = 1
            let fnPr
            let priceMain = document.querySelectorAll('.ct_bx_total_ammount span')[1].innerText
            priceMain = parseFloat(priceMain.split('₹')[1].split(',').join(''))

            let checkUn = null
            document.querySelectorAll('.ct_bx_units_item')[0].childNodes[1].childNodes.forEach((cu, i) => {
                if (cu.classList !== undefined) {
                    if (cu.childNodes[1].innerText.split(' ').join('').trim() === mUnit.split(' ').join('').trim()) {
                        placeQt1 = i
                        checkUn = true
                    }
                    if (cu.childNodes[1].innerText.split(' ').join('').trim() === unit.split(' ').join('').trim()) {
                        placeQt = 1
                    }
                }
            })
            if (checkUn === null) {
                placeQt1 = 1
            }
            let selPM2 = document.querySelector('.seleted_unit_price2').innerText
            selPM2 = parseFloat(selPM2)
            selPM2 = (selPM2 / placeQt1) * placeQt
            if (document.querySelector('.seleted_unit_price2') !== null) {
                document.querySelector('.seleted_unit_price2').innerText = selPM2

            }
            document.querySelectorAll('.ct_x_fd_dt_itm .ct_bx_ins_items.perm').forEach(cur => {
                let span = cur.childNodes[1].childNodes[1].childNodes[3].innerText.split('₹')[1]
                console.log(cur.childNodes[1].childNodes[1].childNodes, 123456)
                span = parseFloat(span)
                let newSp = (span / (placeQt1)) * placeQt
                if (cur.childNodes[1].childNodes[1].childNodes[3].childNodes[3] !== undefined) {
                    cur.childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText = '₹ ' + newSp
                } else {
                    cur.childNodes[1].childNodes[1].childNodes[3].innerText = '₹ ' + newSp
                }
            })
            let priceOvOther = 0
            let otherItms = 0
            if (document.querySelectorAll('.for_otherItems')[1] !== undefined) {

                if (window.screen.width <= 740) {
                    otherItms = document.querySelectorAll('.for_otherItems')[1].childNodes[3].childNodes[5].childNodes
                } else {
                    otherItms = document.querySelectorAll('.for_otherItems')[0].childNodes[3].childNodes[5].childNodes


                }
            }
            if (otherItms !== 0) {
                otherItms.forEach(cu => {

                    if (cu.classList !== undefined) {
                        let price = cu.childNodes[1].childNodes[3].innerText
                        price = parseFloat(price.split('₹')[1])
                        price = Math.round((price / (qt)))
                        price = (price / (placeQt1)) * placeQt
                        price *= qt
                        console.log(price, placeQt1, placeQt, qt, '--------------------------------------------------------------------------------------------------------')
                        allItm.forEach((cu1, ind2) => {
                            console.log(cu1.id, token11)
                            if (cu1.id === token11) {
                                cu1.itemsOthers.forEach(cup => {
                                    let n = cu.childNodes[3].childNodes[1].innerText.split('x')[0].split(' ').join('').trim().toLowerCase()
                                    let n1 = cup.name.split(' ').join('').trim().toLowerCase()
                                    if (n1 === n) {
                                        cup.price = "₹ " + price


                                    }
                                })
                                allItm.splice(ind2, 1)
                                allItm.push(cu1)
                            }



                            localStorage.setItem('foodsAdded', JSON.stringify(allItm))

                        })


                        if (cu.classList.value !== 'unselect_other') {
                            priceOvOther += price
                        }
                        price = price.toLocaleString()

                        cu.childNodes[1].childNodes[3].innerText = "₹ " + price


                    }
                })
            }
            console.log((fdP * qt), priceOvOther, (selPM2 * qt))
            fnPr = (fdP * qt) + priceOvOther + (selPM2 * qt)
            fnPr = Math.round(fnPr)

            if (off !== '') {
                //getting the real price from offer
                off = parseFloat(off.split('%')[0])
                //removing the earlier selected price 

                document.querySelectorAll('.mrp_ammount del').forEach(cur => {
                    cur.innerText = '₹  ' + fnPr.toLocaleString()
                })

                fnPr = fnPr - (fnPr * (off / 100))
                fnPr = Math.round(fnPr)

            }


            fnPr = fnPr.toLocaleString()
            document.querySelectorAll('.ct_bx_total_ammount span').forEach(cur => {
                cur.innerText = '₹  ' + (fnPr)
            })
            let searchUrl = window.location.pathname.split('/')[1]

            if (searchUrl !== '732181744-54da-4243-b0h5-a79898eb60298' && searchUrl !== '96681744-54da-4243-b0h5-a79898ec160099') {
                document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                    cur.innerText = (fnPr)
                })
            } else {
                document.querySelectorAll('.ct_bx_price span').forEach(cur => {
                    cur.innerText = `${fnPr}`
                })
                document.querySelectorAll('.ct_bx_price pr').forEach(cur => {
                    cur.innerText = `/piece`
                })
            }
            if (allItm !== null) {
                if (allItm.length !== 0) {
                    allItm.forEach((cur, i) => {
                        let id = cur.id

                        if (id === token11) {
                            cur.selP = 0
                            cur.permGroup.forEach(cu => {
                                let pr = cu.price.split('₹')[1]
                                pr = parseFloat(pr)
                                let newP = (pr / (placeQt1)) * placeQt
                                cu.price = "₹ " + newP
                            })

                            cur.qt = qt
                            cur.baseU = 'not selected'


                            cur.selU2 = 0
                            cur.selU = selPM2


                            // }
                            localStorage.setItem('foodsAdded', JSON.stringify(allItm))
                        }
                    })
                }
            }

        }
        return
    }

    if (bx !== null) {
        if (e.target.closest('.ct_bx_inside_base') !== null) { return }


        if (e.target.closest('.ct_bx_icon_show_info ')) { return }

        if (e.target.closest('.t_bx_about_ins ')) { return }

        if (document.querySelector('.tog') !== null) {
            if (document.querySelector('.body_cart') !== null) {
                if (!e.target.closest('.add_c_un')) {
                    document.querySelectorAll('.tog .ct_bx_units_item ul').forEach(cur => {
                        cur.style.display = 'none'
                    })

                    document.querySelectorAll('.tog .ct_bx_dwn').forEach(cur => {
                        cur.style.display = 'block'
                    })

                    document.querySelectorAll('.tog .ct_bx_up').forEach(cur => {
                        cur.style.display = 'none'
                    })
                    document.querySelectorAll('.tog').forEach(cur => {
                        cur.classList.add('nottog')
                        cur.classList.remove('tog')

                    })
                }

            }
            if (document.querySelector('.itm_dt_body') !== null) {
                if (document.querySelector('.tog .ct_bx_units_item') !== null) {
                    document.querySelectorAll('.tog .ct_bx_units_item ul').forEach(cur => {
                        cur.style.display = 'none'
                    })
                } else {

                    document.querySelectorAll('.tog .ct_bx_inside_base').forEach(cur => {
                        cur.style.display = 'none'
                    })
                    document.querySelector('.ct_overfow_for_baseitm').style.display = 'none'

                }
                document.querySelectorAll('.tog .icondwn').forEach(cur => {
                    cur.style.display = 'none'
                })

                document.querySelectorAll('.tog .iconup').forEach(cur => {
                    cur.style.display = 'block'
                })
                document.querySelectorAll('.tog').forEach(cur => {
                    cur.classList.add('nottog')
                    cur.classList.remove('tog')

                })


            }
            return
        }
        //bx_ct_bx_qty_inner 
        if (bx.classList.value.split(' ').includes('not_tog_me')) { return }
        if (bx.classList.value.split(' ').includes('nottog')) {
            let x = bx.getBoundingClientRect().left
            bx.classList.add('tog')
            bx.classList.remove('nottog')
            bx.style.display = 'block'
            if (bx.childNodes[7] !== undefined) {
                if (bx.childNodes[7].classList.value.split(' ').includes('ct_bx_units_item')) {
                    bx.childNodes[7].childNodes[1].style.display = 'block'
                    if (window.screen.width <= 740) {
                        bx.childNodes[7].childNodes[1].style.left = x
                    }
                    bx.childNodes[1].childNodes[5].style.display = 'block'

                    bx.childNodes[1].childNodes[3].style.display = 'none'


                } else {
                    if (bx.childNodes[9] !== undefined) {
                        bx.childNodes[9].childNodes[1].style.display = 'block'
                        bx.childNodes[1].childNodes[7].style.display = 'block'
                        bx.childNodes[1].childNodes[5].style.display = 'none'

                    } else {
                        bx.childNodes[7].style.display = 'block'
                        bx.childNodes[1].childNodes[5].style.display = 'block'
                        document.querySelector('.ct_overfow_for_baseitm').style.display = 'block'
                        bx.childNodes[1].childNodes[3].style.display = 'none'
                    }
                }
            } else {
                console.log(bx.childNodes[1].childNodes)

                bx.childNodes[3].childNodes[1].style.display = 'block'
                bx.childNodes[1].childNodes[3].style.display = 'block'

                bx.childNodes[1].childNodes[5].style.display = 'none'

            }


        } else {
            if (e.target.closest('.add_c_un')) {
                return
            }
            bx.classList.add('nottog')

            bx.classList.remove('tog')
            if (bx.childNodes[7] !== undefined) {
                if (bx.childNodes[7].classList.value.split(' ').includes('ct_bx_units_item')) {
                    bx.childNodes[7].childNodes[1].style.display = 'none'
                    bx.childNodes[1].childNodes[3].style.display = 'block'

                    bx.childNodes[1].childNodes[5].style.display = 'none'
                } else {
                    bx.childNodes[9].childNodes[1].style.display = 'none'
                    bx.childNodes[1].childNodes[7].style.display = 'none'

                    bx.childNodes[1].childNodes[5].style.display = 'block'
                }

            } else {
                bx.childNodes[3].childNodes[1].style.display = 'none'
                bx.childNodes[1].childNodes[3].style.display = 'none'

                bx.childNodes[1].childNodes[5].style.display = 'block'

            }


        }

    } else {
        if (e.target.closest('.ct_bx_inside_base') !== null) { return }
        if (document.querySelector('.tog') === null) {
            return
        }

        if (document.querySelector('.tog .ct_bx_weight_qt') !== null) {
            document.querySelector('.tog .ct_bx_weight_qt .ct_bx_dwn').style.display = 'block'

            document.querySelector('.tog  .ct_bx_weight_qt .ct_bx_up').style.display = 'none'

            document.querySelector('.tog').classList.add('nottog')

            document.querySelector('.tog').classList.remove('tog')

            document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                cur.style.display = 'none'
            })
        } else {
            if (document.querySelector('.ct_bx_qty_inner.tog') === null) { return }
            document.querySelector('.tog .selc  .iconup').style.display = 'block'

            document.querySelector('.tog  .selc .icondwn').style.display = 'none'

            document.querySelector('.tog.ct_bx_qty_inner').classList.add('nottog')

            document.querySelector('.tog.ct_bx_qty_inner').classList.remove('tog')

            document.querySelectorAll('.ct_bx_units_item ul').forEach(cur => {
                cur.style.display = 'none'
            })

        }



    }
})

