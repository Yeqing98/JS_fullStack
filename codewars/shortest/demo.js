function fundShort(str){
    const arr = str.split(' ');
    const Arr = arr.map(w => w.length);
    return Arr.sort((a,b) => {
        return a-b;
    })[0];
}
console.log(fundShort('briaksdbfk asdbjas asmhdbj ajsd asmhdbasdh'));