function fundShort(str){
    const arr = str.split(' ');
    const Arr = arr.map(w => w.length);
    return Arr.sort((a,b) => {
        return a-b;
    })[0];
}
function fundShort(str){
    return Math.min(...str.split(' ').map(w => w.length));
}
console.log(fundShort('briaksdbfk asdbjas asmhdbj ajsd asmhdbasdh'));