$('#sidebar-toggle').toggle(
    function () {
        $('.sidebar').animate({ 'width': '0px' }, 'slow');
        $('.content').animate({ 'width': '100%' }, 'slow');
    },
    function () {
        $('.sidebar').animate({ 'width': '30%' }, 'slow');
        $('.content').animate({ 'width': '70%' }, 'slow');
    }
)