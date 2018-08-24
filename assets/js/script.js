/**
 * Created by Roni on 24/04/2018.
 */


$('.thumbnails a').click(function(){
    var country = $(this).data("images");
    window.album = country;
    window.albumSize = $(this).data("images_size");
});


$(function() {
    var sound = new Audio("mp3/perfect-ed-sheeran.mp3");
    sound.play();
    $('#sound').click(function() {
        if ($(this).hasClass("active")) {
            sound.pause();
            $(this).removeClass("active");
            $(this).find('i').addClass('fa-play-circle');
            $(this).find('i').removeClass('fa-pause-circle');
        }else{
            sound.play();
            $(this).addClass("active");
            $(this).find('i').removeClass('fa-play-circle');
            $(this).find('i').addClass('fa-pause-circle');
        }
    });
});
