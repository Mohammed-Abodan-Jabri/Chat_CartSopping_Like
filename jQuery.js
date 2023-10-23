$(document).ready(function () {
    $('#child').click(function () {
        $('#child').animate({
            width: '150px',
        }, 1000),
            $('#child').animate({
                width: '300px',
            }, 1000),
            $('.p').hide(100).show(2000)
        let value = parseInt($('#value').html())
        value++;
        console.log(typeof (value))
        $('p:last-of-type').html(value.toString());
        $('#heart').toggleClass('fa-regular fa-heart fa fa-heart')

    })
})