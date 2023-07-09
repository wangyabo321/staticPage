/**
 * Created by Administrator on 17-11-2.
 */
window.onLoad = function(){
    function g(id){
        return document.getElementById(id);
    }
    var mouseOffsetX = 0;
    var mouseOffsetY = 0;
    var isDraging= false;
    g("dialogTitle").addEventListener('MouseDown',function(e){
        var e =e || window.event;
        mouseOffsetX = e.pageX-g('dialog').offsetLeft;
        mouseOffsetY = e.pageY-g('dialog').offsetTop;
        isDraging = true;
    });
    document.onMouseMove =function(e){
        var e =e || window.event;
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var moveX = 0;
        var moveY = 0;
        if(isDraging==true){
            moveX =  moveX- mouseOffsetX;
            moveY =  moveY- mouseOffsetY;
            g('dialog').style.Left =  moveX+'px';
            g('dialog').style.Top =  moveY+'px';
        }
    }
    Document.onMouseUp = function(){
        isDraging = false;
    }
}