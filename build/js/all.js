$( document ).ready(function() {
    $('#search').click(function () {
        var search=$('.right-side .search-result');
        search.toggleClass('d-none');
        $("#search i").toggleClass('search-active');
        $(".right-side .title").toggleClass('d-none');
        $('.right-side .overlay').toggleClass('overlay-active');
    });

    $('.remove').click(function () {
        $(".search .search-input").val("");
    })

    $('#menuToggle input').click(function () {
        $('#menu').toggleClass('d-none');
    });

    $(".in").click(function(){
        var img=$(".product-img img");
        img.width(img.width()+50);
        img.height(img.height()+50);
    });
    $(".out").click(function(){
        var img=$(".product-img img");
        img.width(img.width()-50);
        img.height(img.height()-50);
    });

});