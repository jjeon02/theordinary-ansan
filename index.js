// GOBACK BUTTON
  function goBack() {
      window.history.back();
  }

//NAVIGATION
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background= rgba(255,255,255,0);
  } else {
    document.getElementById("navbar").style.background= rgba(255,255,255,1);
  }
}