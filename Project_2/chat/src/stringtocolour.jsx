const stringToColour = (str,bordering) =>  {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    var colour2 = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
        colour2 += ('00' + value.toString(8)).substr(-1);
    }
    
    return ({background: `linear-gradient(150deg,  ${colour} 0%,${colour2} 100%)`,overflowX:'wrap'});
}
export default stringToColour