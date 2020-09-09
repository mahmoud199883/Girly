


let abotsection =$(".info").offset().top;
$(window).scroll(function()
{
  let myscroll =$(window).scrollTop();


  if(myscroll>abotsection)
  {
    $(".navbar").css("backgroundColor","rgba(0,0,0,0.5)")
    $(".scrolltopbtn").fadeIn(1000);

  }
  else
  {
    $(".navbar").css("backgroundColor","transparent")
    $(".scrolltopbtn").fadeOut(1000);
  }
})

$(".scrolltopbtn").click(function()
{
  $("html,body").animate({scrollTop:"0"},3000)
})



$("a").click(function()
{
  let attrref =$(this).attr("href");
  let sectionoffset=$(attrref).offset().top;
  $("html,body").animate({scrollTop:sectionoffset},2000)
})



$('.carousel').carousel({
  interval: 2000
})