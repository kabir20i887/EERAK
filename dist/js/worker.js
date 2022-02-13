onmessage = (e) => {
    let allR = 0
    let rateNO = true
    let numenator = 0
    let denomenator = 0
    let item = e.data
    let html1

    item.ratings.forEach(cur1 => {
        let r = cur1.ratings
        r = parseFloat(r)
        cur1.ratings = parseFloat(cur1.ratings)

        if (cur1.ratings !== 0) {
            rateNO = false
        }
        allR += r
        numenator += cur1.star * cur1.ratings
        denomenator += cur1.ratings
    })
    let ratedFront = null
    let ratedBack = null
    if (!rateNO) {
        ratedFront = parseFloat((numenator / denomenator).toFixed(2).split('.')[0])
        ratedBack = parseFloat((numenator / denomenator).toFixed(2).split('.')[1].split('')[0])
        if (ratedBack > 5) {
            ratedFront++
        }

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
    let obj = { numenator: numenator, denomenator: denomenator, allR: allR,html:html1 }
    postMessage(obj)
}
workerObj.postMessage(item)
workerObj.onmessage = (obj) => {
    let objM = obj.data
    document.querySelector('.ct_bx_ratings_info a').innerHTML = objM.html

    let star5 = parseFloat(item.ratings[0].ratings)
    let star4 = parseFloat(item.ratings[1].ratings)

    let star3 = parseFloat(item.ratings[2].ratings)

    let star2 = parseFloat(item.ratings[3].ratings)

    let star1 = parseFloat(item.ratings[4].ratings)

    if (star5 !== 0) {
        let rate5 = Math.round((star5 / objM.allR) * 100)
        document.querySelector('.star5th .ct_level').style.width = `${rate5}%`
        document.querySelector('.star5th .bx_star_dis span').innerText = `${rate5}%`

    } else {
        document.querySelector('.star5th .ct_level').style.width = `0%`
        document.querySelector('.star5th span').innerHTML = `&mdash;`
    }
    if (star4 !== 0) {
        let rate5 = Math.round((star4 / objM.allR) * 100)
        document.querySelector('.star4th .ct_level').style.width = `${rate5}%`
        document.querySelector('.star4th  span').innerText = `${rate5}%`
    } else {
        document.querySelector('.star4th .ct_level').style.width = `0%`
        document.querySelector('.star4th  span').innerHTML = `&mdash;`
    }
    if (star3 !== 0) {
        let rate5 = Math.round((star3 / objM.allR) * 100)
        document.querySelector('.star3th .ct_level').style.width = `${rate5}%`
        document.querySelector('.star3th  span').innerText = `${rate5}%`
    } else {
        document.querySelector('.star3th .ct_level').style.width = `0%`
        document.querySelector('.star3th  span').innerHTML = `&mdash;`
    }
    if (star2 !== 0) {
        let rate5 = Math.round((star2 / objM.allR) * 100)
        document.querySelector('.star2th .ct_level').style.width = `${rate5}%`
        document.querySelector('.star2th  span').innerText = `${rate5}%`
    } else {
        document.querySelector('.star2th .ct_level').style.width = `0%`
        document.querySelector('.star2th  span').innerHTML = `&mdash;`
    }
    if (star1 !== 0) {
        let rate5 = Math.round((star1 / objM.allR) * 100)
        document.querySelector('.star1th .ct_level').style.width = `${rate5}%`
        document.querySelector('.star1th  span').innerText = `${rate5}%`
    } else {
        document.querySelector('.star1th .ct_level').style.width = `0%`
        document.querySelector('.star1th  span').innerHTML = `&mdash;`
    }
}