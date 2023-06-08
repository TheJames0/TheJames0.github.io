var viewport;
var last_position_x = 0;
var last_position_y = 0;
var prevscale = 1;
var scale = 1;
var mouse_down;
let translated = { x: 0, y: 0 };
window.addEventListener("DOMContentLoaded", (event) => {
    viewport = document.getElementById('transformable');
    //Add mouse event listeners
    mouse_down = false;
    window.addEventListener('mousedown', mouseDragStart);
    window.addEventListener('mousemove', translateCanvas);
    window.addEventListener('mouseup', mouseDragEnd);
    //Zoom function event listner
    //window.addEventListener('wheel',scaleCanvas);
    window.addEventListener('reset', recenterCanvas);
    //setTranslation event listener
    window.addEventListener('setTranslation',setTranslationEvent)
    console.log("website loaded");

});
function scaleCanvas(event)
{
    
    //Scale Logic
    scale -= event.deltaY/1000;

    const minimum_scale = 0.3;
    const maximum_scale = 2;

    scale = Math.max(minimum_scale,Math.min(maximum_scale,scale));

    
    transformOrigin()
    translate(0,0,scale,false);
    console.log(scale);
    prevscale = scale;
}
function transformOrigin(x,y)
{
    var centerscreenx = window.innerWidth/2;
    var centerscreeny = window.innerHeight/2;
    var translationlocalcenterx = translated.x - centerscreenx;
    var translationlocalcentery = translated.y - centerscreeny;
    console.log(translationlocalcenterx);
    console.log(translationlocalcentery);

    viewport.style.transformOrigin = `${translationlocalcenterx}px ${translationlocalcentery}px`;
}
function recenterCanvas()
{
    scale = 0.5;
    translate(0,0,scale,true)
    last_position_x = 0;
    last_position_y = 0;
    
    
}
function translateCanvas(event)
{
    var difference_x;
    var difference_y;
    if(mouse_down)
    {
        
        difference_x = event.clientX - last_position_x;
        difference_y = event.clientY - last_position_y;
        
        translate(difference_x,difference_y,scale,false);
    }

    last_position_x = event.clientX;
    last_position_y = event.clientY;
    
}
function mouseDragStart(event) 
{
    console.log("started drag");
    mouse_down = true;
    last_position_x = event.clientX;
    last_position_y = event.clientY;
}
function mouseDragEnd(event)
{
    console.log("ended drag");
    mouse_down = false;
}

function translate( deltaX, deltaY,scale, reset) 
{
    var computedStyle = window.getComputedStyle(viewport);

    // Get the transform value as a matrix
    var transformMatrix = new DOMMatrix(computedStyle.transform);

    // Extract specific transform components
    var translationX = transformMatrix.m41;
    translated.x = translationX;
    var translationY = transformMatrix.m42;
    translated.y = translationY;
    var final_transform;
    //Is reset true?
    if(reset)
    {
        final_transform = 'translate(' + (window.innerWidth-1000) + 'px, ' + (window.innerHeight-600) + 'px)';
        console.log("canvas recentered");
    }
    else
    {
        final_transform = 'translate(' + (translationX + deltaX) + 'px, ' + (translationY + deltaY) + 'px)';
    }
    viewport.style.transform = final_transform;
}

function setTranslationEvent(event)
{
    viewport.style.transform = 'translate(' + (event.detail[0]) + 'px, ' + (event.detail[1]) + 'px) ';
}