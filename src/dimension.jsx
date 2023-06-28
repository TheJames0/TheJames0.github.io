import React, {useRef,useState,useEffect} from 'react';

   const useWindowDimensions = () =>{
    
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

  return getWindowDimensions();
}
export default useWindowDimensions