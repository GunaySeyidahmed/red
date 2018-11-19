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
});