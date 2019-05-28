// console.log(word('I Love javascript!!'));

// 只取单词，不取感叹号
const word = (str, pattern=/[^a-zA-Z-]+/) => str.split(pattern);
console.log(word('I Love javascript!!'));