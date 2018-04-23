function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}
function increaseRankBy(n) {
  let rankedList = [...document.querySelectorAll(".ranked-list")];
  rankedList.forEach((item)=> {
    let listItems =[...item.querySelectorAll("li")];
    listItems.forEach((listItem) => {
      listItem.innerHTML = parseInt(listItem.innerHTML)+n;
    })
  })
}


function deepestChild() {
  let grandNode = [...document.querySelector("div#grand-node").querySelectorAll("*")];
  return grandNode;
  grandNode.forEach((element)=> {
    if(element.querySelector("*")===null)
    {
      return element;
    }
  })
  
}