$('#sidebar-toggle').toggle(
    function() {
        console.log('toggle');
        $('.sidebar').css('width', '0')
        $('.content').css('width', '100%')
    }, function() {
        $('.sidebar').css('width', '30%')
        $('.content').css('width', '70%')
})