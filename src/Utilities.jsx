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
}
export default Utilities;