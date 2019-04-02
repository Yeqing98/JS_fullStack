function generateHashtag(str){
    // if(str.length > 140){
    //     return false;
    // }
    // if(str == ''){
    //     return false;
    // }
    // str = '#' + str;
    // return str;
    return (str.length > 140  || str =='') ? false: '#' + str.split(' ').map(capitalize).join(' ');
}
function capitalize(w){
    return w.charAt(0).toUpperCase() + w.slice(1);
}

console.log(generateHashtag('How are you'));
console.log(generateHashtag(''));
console.log(generateHashtag('How are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are youHow are you'))