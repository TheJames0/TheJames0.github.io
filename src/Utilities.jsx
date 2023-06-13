import React from "react";



class Utilities
{
  static propAdd(Component, extraProps) 
  {
    return <Component.type {...Component.props} {...extraProps.reduce((acc, prop) => ({ ...acc, ...prop }), {})} />;
  }
  static getCanvasTranslation()
  {
    const viewport = document.getElementById('transformable');
    var computedStyle = window.getComputedStyle(viewport);
    var transformMatrix = new DOMMatrix(computedStyle.transform);
    var OppositeTranslationX = -transformMatrix.m41;
    var OppositeTranslationY = -transformMatrix.m42;
    return [(OppositeTranslationX-20) , (OppositeTranslationY-200)];

  }
  static getElementOffset()
  {
    const widthOutput = window.innerWidth;
    const heightOutput = window.innerHeight;

    return [(widthOutput/2),(heightOutput/2)];
    
  }
  
  static setCanvasTranslation(translation)
  {
    const event = new CustomEvent('setTranslation', { detail: [translation[0],translation[1]] });
    window.dispatchEvent(event);
    

  }
}
export default Utilities;