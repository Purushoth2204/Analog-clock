var second = 0;
var minute = 0;
var hour = 0;
var time =new Date();

setInterval(
    function(){
        time=new Date();
        second=time.getSeconds()*6;
        minute=time.getMinutes()*6;
        hour=time.getHours()*30+Math.round(minute/12);
        document.getElementById('second-hand').style.transform = "rotate(" + second +"deg)";
        document.getElementById('minute-hand').style.transform = "rotate(" +minute+"deg)";
        document.getElementById('hour-hand').style.transform = "rotate(" +hour+"deg)";
    },1
)
var icon=document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme"); 
    if(document.body.classList.contains("dark-theme")){
        icon.className="fa-solid fa-sun";
        
    }else{
        icon.className="fa-solid fa-moon";
    }
}