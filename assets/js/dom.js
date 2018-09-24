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

 //duplicate cards
  const duplicate = function(){
    const card = document.querySelector('.card');
    const destination = document.querySelector('.carddeck');

    const copy = card.cloneNode(true);
    copy.classList.add('clone')
    destination.appendChild(copy);
  };

  //create a card for employee information to be displayed.
  const card = function(){
    document.getElementById("viewpage").innerHTML= (`<div class="card col-md-8">
                                                      <div class="row">
                                                        <div class="col-md-2">
                                                          <h5>First Name:</h5>
                                                        </div>
                                                        <div class="col-md-3">
                                                          <p id="fName"></p>
                                                        </div>
                                                        <div class="col-md-2">
                                                          <h5>Last Name:</h5>
                                                        </div>
                                                        <div class="col-md-3">
                                                          <p id="lName"></p>
                                                        </div>
                                                      </div>
                                                      <div class="row">
                                                        <div class="col-md-2">
                                                            <h5>Office:</h5>
                                                          </div>
                                                          <div class="col-md-10">
                                                            <p id="officeNum"></p>
                                                          </div>
                                                      </div>
                                                      <div class="row">
                                                          <div class="col-md-2">
                                                          <h5>Phone:<h5>
                                                          </div>
                                                          <div class="col-md-10">
                                                            <p id="phoneNum"></p>
                                                          </div>
                                                      </div>
                                                      </div>`);
  };

//Reset all pages and tabs to allow clicked pages to become active
const menuchange = function(){
  const searchtab = document.getElementById('search');
  const viewtab = document.getElementById('view');
  const addtab = document.getElementById('add');
  const updatetab = document.getElementById('update');
  const deletetab = document.getElementById('delete');
  const addpage = document.getElementById('addpage');
  const searchbar = document.getElementById('searchpage');
  searchtab.classList.remove('active');
  viewtab.classList.remove('active');
  addtab.classList.remove('active');
  updatetab.classList.remove('active');
  deletetab.classList.remove('active');
  addpage.classList.add('invisible');
  searchbar.classList.remove('d-inline');
  searchbar.classList.add('d-none');
  $('#deletepage').empty();
  $('#updatepage').empty();
};

  //Event listener function to run actions created on pages.
  const on = function (action, cb) {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  };

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
    duplicate: duplicate,
    card: card,
    menuchange: menuchange
  };
}
