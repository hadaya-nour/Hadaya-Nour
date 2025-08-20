$(document).ready(function(){
  //getting ready...
  $('div.background').hide()
  $('div.calling-information').hide()
  $('div.location-information').hide()
  $('svg').hide()
  $('img').hide()
  $('strong.shopName').hide()
  $('span#sh').hide()
  $('span#bioText').hide()
  $('div.LocationXCalling').hide()
  $('.links').hide()
  $('svg').slideDown(1000)
  //animation
  setTimeout(()=>{
    $('img').show(700)
    setTimeout(()=>{
      $('strong.shopName').fadeIn(1000)
      setTimeout(()=>{
        $('span#sh').slideDown(550)
        setTimeout(()=>{
          $('span#bioText').slideDown(550)
          setTimeout(()=>{
            $('div.LocationXCalling').slideDown(1000)
            setTimeout(()=>{
              $('.links').slideDown(1500)
            },1250)
          },750)
        },800)
      },700)
    },1250)
  },1010)
});

function call(command) {
  switch(command) {
    case 'information':
      $('div.background').show()
      $('div.calling-information').slideToggle(1200)
      break;
      case 'number':
  if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert('Please call +1 (234) 567-890 from your phone');
     return false;
    
  }
      break;
}
}

function showLocation() {
  $('div.background').show()
      $('div.location-information').slideToggle(1200)
}

function closePopUpWindows() {
  $('div.calling-information').slideUp(1200)
  $('div.location-information').slideUp(1200)
  setTimeout(function(){
    $('div.background').hide()
  },1210)
}
