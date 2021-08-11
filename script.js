//event pada saat link di klik
$('.page-scroll').on('click', function(e){
    //ambil isi href
    var tujuan = $(this).attr('href')
    // console.log(tujuan);
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan.offset().top);
    // console.log($('body').scrollTop());

    // Pindahkan scroll
    // $('body, html').scrollTop(elemenTujuan.offset().top);
    $('body, html').animate({
        scrollTop : elemenTujuan.offset().top - 70
    }, 1250, 'easeInOutExpo');
    e.preventDefault();
})

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll > $('.workingspace').offset().top - 400){
        $('.workingspace .thumbnail').each(function(i){
            setTimeout(function(){
                $('.workingspace .thumbnail').eq(i).addClass('muncul')
            }, 300 * (i+1));
        })
    }
})

var i=0,text;
  text = "Gunakan kasur dengan kualitas terjamin serta bergaransi 15 tahun."

  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,100);
    }
  }
  ketik();