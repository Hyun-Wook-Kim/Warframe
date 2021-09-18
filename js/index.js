'use strict';

$(window).on('load',()=>{
    $('.imgSection>ul>li>img').css('transition','all 3s')
    $('.imgSection>ul>li>img').eq(0).css({'transform':'translate(-50%,-10%) scale(1.2)'})
    $('.imgSection>ul>li>img').eq(1).css({'transform':'translate(0%,-30%) scale(1.2)'})
    $('.imgSection>ul>li>img').eq(2).css({'transform':'translate(50%,-10%) scale(1.2)'})

})