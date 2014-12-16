$(function(){

    var $menu = $('.menu_container'),
        $menu_ul = $('ul', $menu),
        $colapser = $('.mobile_collapser', $menu);

    $colapser.on('click', function(){
        $menu_ul.toggleClass('collapsed');
    })

});