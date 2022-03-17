function loginLink(){
    location.href = "";
}
function closeLink(){
    location.href = "";
}
function regiLink(){
    location.href = "";
}
function searchLink(){
    location.href = "";
}
function googleLink() {
    location.href='https://www.google.com';
  }
  
  function facebookLink() {
    location.href="https://www.facebook.com/";
  }
  
  function naverLink() {
    location.href="https://www.naver.com/";
  }
  
  function kakaoLink() {
    location.href="https://www.kakaocorp.com/page/service/service/KakaoTalk";
  }

var toggle = false;
function changeImg(){
    toggle = !toggle;
	if(toggle){
        document.querySelector(".check_img").src = "./LCH_LION_img/icon_check.png";
        document.querySelector(".img_control").style.color = "#2f80ed";
    }else{
        document.querySelector(".check_img").src = "./LCH_LION_img/icon_check_empty.png";
        document.querySelector(".img_control").style.color = "#a7a7a7";

        
    }
	
}