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
    var OppositeTranslationX = -transformMatrix.m41*2;
    var OppositeTranslationY = -transformMatrix.m42*2;
    return [(OppositeTranslationX) +2880, (OppositeTranslationY) + 1380];

  }
  static setCanvasTranslation(translation)
  {
    const event = new CustomEvent('setTranslation', { detail: [translation[0],translation[1]] });
    window.dispatchEvent(event);
    

  }
}
export default Utilities;