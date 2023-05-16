$(function(){
    mainInit()
    $(document).on('click','a[href="#"]',function(e){
        e.preventDefault()
    })
})
function mainInit(){
    allMenu()
    sub_tab()
    sub2_popUp1()
    sub2_popUp2()
}
function allMenu(){
    var $all = $('#wrap .all-menu')
    var $btnMenu = $ ('#wrap .btn-all-menu i')
    var $btnClose = $('#wrap .all-menu .btn-close i')

    $all.hide();
    $btnMenu.on('click',function(){
        $(this).fadeOut()
        $all.fadeIn()
    })
    $btnClose.on('click',function(){
        $btnMenu.fadeIn()
        $all.fadeOut()
    })
}
function sub_tab(){
    var swiper = new Swiper('.sub_tab', {
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 0,
        breakpoints: {
            480: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1900: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
        },
      });

    $('.sub_web .pc-site').on('click',function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url);
    })
    var $mobileSite = $('.sub_web .sub_tab .swiper-wrapper .swiper-slide .tab .txt ul .mobile-site')
    $mobileSite.on('click',function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        window.open(url,'mobile','width=360,height=720,top:200,left=250');
    })
}
function sub2_popUp1(){
    var $pop1btn = $('.sub_web .sub2 .swiper-wrapper .swiper-slide .tab .img .blur .popup1')
    var $popClose = $('.popupImg a i')
    var $bg =$('.popBg')
    var $pop = $('.popupImg')
    $bg.hide()
    $pop.hide()
    $pop1btn.on('click',function(e){
        var url = $(this).attr('href')
        $bg.fadeIn(300)
        $pop.fadeIn(300);
        $pop.find('img').attr('src',url)
        e.preventDefault()
        console.log(url)
    })
    $('.popupImg a i, .popBg').on('click',function(){
        $bg.fadeOut(300)
        $pop.fadeOut(300)
    })
    
}
function sub2_popUp2(){
    var $imgli = $('.other03  ul li');
    var $imgli2 = $('.other04  ul li');
    var $viewimg = $('.other03 .big-img img');
    var $viewimg2 = $('.other04 .big-img img');
    var $pop2btn = $('.sub_web .sub2 .swiper-wrapper .swiper-slide .tab .img .blur .popup2')
    var $pop2btn2 = $('.sub_web .sub2 .swiper-wrapper .swiper-slide .tab .img .blur .popup3')
    var $bg =$('.gallery-bg')
    var $pop = $('.other03')
    var $pop2 = $('.other04')

    $bg.hide()
    $pop.hide()
    $pop2.hide()
    $pop2btn.on('click',function(){
        $bg.fadeIn(300)
        $pop.fadeIn(300)
    })
    $pop2btn2.on('click',function(){
        $bg.fadeIn(300)
        $pop2.fadeIn(300)
    })
    $('.gallery-bg , .popGallery .big-img a').on('click',function(){
        $bg.fadeOut(300)
        $pop.fadeOut(300)
        $pop2.fadeOut(300)
    })
    $imgli.click(function(){
        imgurl = $(this).find('img').attr('src')
        $viewimg.attr('src',imgurl).hide().fadeIn();
        
        $imgli.removeClass('on')
        $(this).addClass('on')
    })
    $imgli2.click(function(){
        imgurl = $(this).find('img').attr('src')
        $viewimg2.attr('src',imgurl).hide().fadeIn();
        
        $imgli2.removeClass('on')
        $(this).addClass('on')
    })

}
