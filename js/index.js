window.onload = function () {
    window.setTimeout(function (){
        document.getElementById("depth2").classList.add("noDisplay");
        document.getElementById("depth3").classList.add("noDisplay");
    },100);
}
var updatingCSS =false;
function diveIN()
{  
    if(!updatingCSS)
    {
        document.getElementById("diveIn").classList.add("noClick");
        updatingCSS=true;

        var depth1=(document.getElementById("depth1").classList.contains("ontop"));
        var depth2=(document.getElementById("depth2").classList.contains("ontop"));
        var depth3=(document.getElementById("depth3").classList.contains("ontop"));
        if(!depth1 && !depth2 && !depth3)
        {   
            // document.getElementById("go").classList.add("noDisplay");
            document.getElementById("depth1").classList.add("ontop");
            document.getElementById("depth2").classList.remove("ontop");
            document.getElementById("depth3").classList.remove("ontop");            
            $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#0da3d5"; 
                document.getElementById("surface").classList.add("noDisplay"); 
                document.getElementById("diveOut").classList.remove("noDisplay");               
                document.getElementById("diveIn").classList.remove("noClick");
                document.getElementById("diveIn").classList.remove("noDisplay");
                updatingCSS=false;
            },1500);
            
        }
        if(depth1 && !depth2 && !depth3)
        {
            document.getElementById("depth2").classList.remove("noDisplay");        
            document.getElementById("depth2").classList.add("ontop");        
            document.getElementById("depth1").classList.remove("ontop");
            document.getElementById("depth3").classList.remove("ontop");
            $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#0568A6";
                document.getElementById("depth1").classList.add("noDisplay"); 
                document.getElementById("diveIn").classList.remove("noClick");
                updatingCSS=false;           
            },1500);
        }
        if(!depth1 && depth2 && !depth3)
        {
            document.getElementById("depth3").classList.remove("noDisplay");
            document.getElementById("depth3").classList.add("ontop");
            document.getElementById("depth1").classList.remove("ontop");
            document.getElementById("depth2").classList.remove("ontop");
            document.getElementById("diveIn").classList.add("noDisplay");
            $('html, body').animate({scrollTop: $("#depth3").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#022340";
                document.getElementById("depth2").classList.add("noDisplay"); 
                document.getElementById("diveIn").classList.remove("noClick");
                updatingCSS=false;
            },1500);
        }
    }
    
}
function diveOUT()
{
    if(!updatingCSS)
    {
        document.getElementById("diveOut").classList.add("noClick");
        updatingCSS=true;

        var depth1=(document.getElementById("depth1").classList.contains("ontop"));
        var depth2=(document.getElementById("depth2").classList.contains("ontop"));
        var depth3=(document.getElementById("depth3").classList.contains("ontop"));
        if(!depth1 && !depth2 && !depth3)
        {
        }
        if(depth1 && !depth2 && !depth3)
        {
            document.getElementById("surface").classList.remove("noDisplay");            
            document.getElementById("depth1").classList.remove("ontop");
            document.getElementById("depth2").classList.remove("ontop");
            document.getElementById("depth3").classList.remove("ontop");
            document.getElementById("diveOut").classList.add("noDisplay");
            document.getElementById("diveIn").classList.add("noDisplay");
            // document.getElementById("diveIn").classList.remove("noDisplay");
            $('html, body').animate({scrollTop: $("#surface").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#010825";
                document.getElementById("diveOut").classList.remove("noClick");
                updatingCSS=false;
            },1500);
        
        }
        if(!depth1 && depth2 && !depth3)
        {
            document.getElementById("depth1").classList.remove("noDisplay");
            document.getElementById("depth1").classList.add("ontop");
            document.getElementById("depth2").classList.remove("ontop");
            document.getElementById("depth3").classList.remove("ontop");
            $('html, body').animate({scrollTop: $("#depth1").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#0da3d5"; 
                document.getElementById("depth2").classList.add("noDisplay");
                document.getElementById("depth3").classList.add("noDisplay");
                document.getElementById("diveOut").classList.remove("noClick");
                updatingCSS=false;
            },1500);
        }
        if(!depth1 && !depth2 && depth3)
        {
            document.getElementById("depth2").classList.remove("noDisplay")
            document.getElementById("depth2").classList.add("ontop");
            document.getElementById("depth3").classList.remove("ontop");
            document.getElementById("depth1").classList.remove("ontop");
            document.getElementById("diveIn").classList.remove("noDisplay");
            $('html, body').animate({scrollTop: $("#depth2").offset().top}, 1500);
            window.setTimeout(function (){
                document.getElementsByTagName('meta')["theme-color"].content = "#0568A6"; 
                document.getElementById("depth1").classList.add("noDisplay");
                document.getElementById("depth3").classList.add("noDisplay");
                document.getElementById("diveOut").classList.remove("noClick");
                updatingCSS=false;
            },1500);
        }   
    }
}