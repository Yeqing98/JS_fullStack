import { createElement, render, renderDOM } from './element.js';

// ul.list>li.item*3

let virtualDOM = createElement('ul', 
{class: 'list'}, 
[createElement('li', {class: 'item'}, ['1']),
createElement('li', {class: 'item'}, ['2']),
createElement('li', {class: 'item'}, ['3'])]
);

let el = render(virtualDOM);

renderDOM(el, document.getElementById('root'));

console.log(virtualDOM)