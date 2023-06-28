import React from "react";



class Utilities
{
  static propAdd(Component, extraProps) 
  {
    return <Component.type {...Component.props} {...extraProps.reduce((acc, prop) => ({ ...acc, ...prop }), {})} />;
  }
}
export default Utilities;