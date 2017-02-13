
function  getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('div.target')
}

const rList = document.querySelectorAll('ul.ranked-list li')
function increaseRankBy(n){
  for(let i = 0; i < rList.length; i++){
var x = parseInt(`${rList[i].innerHTML}`,10)
rList[i].innerHTML = (x += n).toString()
}
}

const div = document.querySelector('#grand-node div div div div')
function deepestChild(){
return div
}
