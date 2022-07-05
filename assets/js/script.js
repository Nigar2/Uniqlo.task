var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const burger=document.querySelector(".clickicon")
if(burger){
    burger.addEventListener("click", function(){
        const menu_list = document.querySelector(".menu_list")
        if( menu_list.style.transform === "translateX(1300px)"){
            menu_list.style.transform = "translateX(0px)";
        }
        else {
            menu_list.style.transform = "translateX(1300px)";
        }
        

    })
}