import $ from 'jquery'


$(document).ready(()=>{
    $('.collections-bar__list-item').each((i, item)=>{
        if ($(item).children('ul').length){
            $(item).addClass('hasInner')
        }
    })
})



