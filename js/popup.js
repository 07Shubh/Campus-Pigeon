document.getElementById("button_pop").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})