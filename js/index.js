'use strict';

function mainSecAnimation(){

    if($(window).width() >= 767){

            $('.imgSection>ul>li>img').css('transition','all 3s')
            $('.imgSection>ul>li>img').eq(0).css({'transform':'translate(-50%,-10%) scale(1.2)'})
            $('.imgSection>ul>li>img').eq(1).css({'transform':'translate(0%,-30%) scale(1.2)'})
            $('.imgSection>ul>li>img').eq(2).css({'transform':'translate(50%,-10%) scale(1.2)'})
            

    }
    
    else{
        $('.imgSection>ul>li>img').css('transition','all 3s')
        $('.imgSection>ul>li>img').eq(0).css({'transform':'none'})
        $('.imgSection>ul>li>img').eq(1).css({'transform':'none'})
        $('.imgSection>ul>li>img').eq(2).css({'transform':'none'})
        
    }
}

$(window).on('load',()=>{
    mainSecAnimation();
})

$(window).on('resize',()=>{
    mainSecAnimation();

})


// $('.section.sec1').tilt();

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            767:{
                items:4,
                nav:false
            },
            1000:{
                items:8,
                nav:false,

            }
        }
    })
})

let videoList = {
    Excalibur : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Excalibur.webm",
    Hildrin : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/HILDRYN.webm",
    Nekros : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Nekros.webm",
    Atlas : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Atlas.webm",
    Hydroid : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Hydroid.webm",
    Sevagoth : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Sevagoth.webm",
    Octabia : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Octavia.webm",
    Rymbo : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Limbo.webm",
    Ryno : "http://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Rhino.webm",
    Zephyr : "https://n9e5v4d8.ssl.hwcdn.net/uploads/warframes/videos/Zephyr.webm"
}
 

let warframeDesc = {
    Excalibur  : "검과 총, 그리고 균형잡힌 기동력. 엑스칼리버는 가장 기본이자 완성형 워프레임입니다",
    Hildrin : "최선의 방어는 공격이죠. 힐드린은 실드를 자원으로 적에게 파괴적인 공격을 퍼붓습니다",
    Nekros :"죽음의 지배자 네크로스는 죽은 자들을 일으켜 아군이었던 자들의 목에 칼을 꽃게 합니다",
    Atlas : "땅의 왕이자 돌 거인인 아틀라스는 무자비한 주먹으로 적을 산산조각 냅니다",
    Hydroid :"심연에서 솟아오른 하이드로이드는 바다의 물결에서 파괴적인 힘을 이끌어낼 수 있습니다",
    Sevagoth : "보이드의 심연에서 세바고스가 돌아왔습니다. 이제 그의 그림자를 보내 모든 생명을 수확합니다",
    Octabia : "옥타비아의 노래는 아군에겐 희망을, 적군에게는 절망을 들려줍니다",
    Rymbo : "림보는 리프트의 힘을 자유자재로 다루어 적들을 다른 차원으로 추방합니다",
    Ryno : "라이노는 가장 육중한 워프레임입니다. 공방일체란 이 워프레임을 두고 하는 말일테죠",
    Zephyr : "공중 공격과 기동성에 특화된 제피르는 그야말로 하늘의 지배자입니다."
}


$('.warframe').on('click',(event)=>{
    let _target = event.target
    $('.warframe').removeClass('.selected')
    $('.warframeVideo').animate({opacity:'0'},500)
    // _target.siblings().addClass('selected')
    setTimeout(() => {

        $('.warframeVideo>video').attr("src",videoList[_target.alt])
        $('h3.warframeName').html(_target.alt)
        $('p.warframeDesc').html(warframeDesc[_target.alt])
        $('.warframeVideo').animate({opacity:'1'},500)
    }, 1200);

    //evnet.target에 $()를 씌워주어야 jquery 객체로 적용이 된다.
    // $('.warframe>img').animate({opacity:'1'},1000)
    $('.warframe>img').removeClass('selected')
    $(event.target).addClass('selected')    

}
)


$('.warframeMobile').on('click',(event)=>{
    let _target = event.target;
    $('.warframeListDescBox').css({'z-index' : '5'})
    $('.top').css({'transform' : 'translateY(0)'})
    $('.bottom').css({'transform' : 'translateY(0)'})
    $('.top>.warframeImg>img').css('opacity','1')
    $('.top>.warframeName>h3').html(_target.alt)
    $('.top>.warframeImg>img').attr('src',_target.src)
    $('.warframeDescBox').html(warframeDesc[_target.alt])
})

$('.warframeListDescBox').on('click',()=>{
    $('.top').css({'transform' : 'translateY(-100%)'})
    $('.bottom').css({'transform' : 'translateY(100%)'})
    $('.top>.warframeImg>img').css('opacity','0')
    setTimeout(() => {
        $('.warframeListDescBox').css({'z-index' : '-1'})
        $('.top>.warframeName>h3').html("")
        $('.top>.warframeImg>img').attr({'src':""})
        $('.warframeDescBox').html("")
    }, 1000);
})



$('.section.sec1').ripples({
    resolution: 500,
	dropRadius: 80,
	perturbance: 0.015,
});




$(window).on('scroll',()=>{
    if($(window).scrollTop() >= $('.section.sec3').offset().top){
        $('.mesaImg').animate({left:'10%'},1500)
    }
})





$(function(){
    $('.lazy').Lazy();
})
