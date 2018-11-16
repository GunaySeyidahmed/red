$( document ).ready(function() {
    $('#search').click(function () {
        var search=$('.search-result');
        search.toggleClass('d-none');
        $("#search i").toggleClass('search-active');
    });
    $('.remove').click(function () {
        $(".search .search-input").val("");
    })
});