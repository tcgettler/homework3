const $ = function (selector) {
  const nodeList = document.querySelectorAll(selector);
  
  //Writes text inside of an html element.
  const text = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;
    }
  }
  
  //Writes html inside of an element.
  const html = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  //adds css to specific elements
  const addClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }

  //removes css from elements
  const removeClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(className);
    }
  }

  //toggles css styling to elements
  const toggleClass = function(className){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  //removes text from an element
  const empty = function(){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = '';
    }
  }

  //adds html elements to the end of the nodeList.
  const append = function(content,key){;
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content[i][key];
    }
  }

  //adds html elements to the beginning of the nodelist.
  const prepend = function(content){
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;
    }
  }

  //confirms if there is content in the element selected.
  const val = function (content) {
      if(content === undefined){
        return nodeList[0].value; 
      } else {
        nodeList[0].value = content;
      }     
  }


  const duplicate = function(index){
    const card = document.querySelector('.card');
    const destination = document.querySelector('.carddeck');

    const copy = card.cloneNode(true);
    destination.appendChild(copy);
  };

  //Event listener function to run actions created on pages.
  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  return {
    text: text,
    html: html,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    on: on,
    val: val,
    duplicate: duplicate
  };
}
