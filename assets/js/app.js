/*
Render view list upon page load
*******************************
*******************************
*/
window.addEventListener('load',function(event){
    $().card();
    for (i=1; i < employeeList.length; i++){
        $().duplicate();
    };
        $('#fName').append(employeeList, 'fName');
        $('#lName').append(employeeList, 'lName');
        $('#officeNum').append(employeeList, 'officeNum');
        $('#phoneNum').append(employeeList, 'phoneNum');
});

/*
Render the employeeList upon clicking view
******************************************
******************************************
*/
document.getElementById('view').addEventListener('click', function(event){
    const view = document.getElementById('view');
    $().menuchange();
    view.classList.add('active');

    $('viewpage').empty();
    $().card();
        for (i=1; i < employeeList.length; i++){
            $().duplicate();
        };
        $('#fName').append(employeeList, 'fName');
        $('#lName').append(employeeList, 'lName');
        $('#officeNum').append(employeeList, 'officeNum');
        $('#phoneNum').append(employeeList, 'phoneNum');
});

/****************************** Start of Add Tab ******************************************************************/

/*Display add form when clicking button*/
document.getElementById('add').addEventListener('click', function(event){
    const add = document.getElementById('addpage');
    const addmenu = document.getElementById('add');
    $().menuchange();
    add.classList.remove('invisible');
    addmenu.classList.add('active');
});

/*Add user to employeeList form when clicking add.*/
document.getElementById('addcontact').addEventListener('click', function(event){
    /*obtain elements to add and remove stylings */
    const add = document.getElementById('addpage');
    const addtab = document.getElementById('add');
    const viewtab = document.getElementById('view');

    /*add the new contact to the object*/
    const firstname = $('#firstname').val();
    const lastname = $('#lastname').val();
    const officenumber = $('#officenumber').val();
    const phonenumber = $('#phonenumber').val();
    employeeList.push({fName:firstname, lName:lastname, officeNum: officenumber, phoneNum:phonenumber});
   
    /*empty the current list of ids content*/
    $('#fName').empty();
    $('#lName').empty();
    $('#officeNum').empty();
    $('#phoneNum').empty();
    /*add another card to the list*/
    $().duplicate();
    /*repopulate all the cards with the new person added at the end*/
    $('#fName').append(employeeList, 'fName');
    $('#lName').append(employeeList, 'lName');
    $('#officeNum').append(employeeList, 'officeNum');
    $('#phoneNum').append(employeeList, 'phoneNum');
    /*reset the form and make it disappear*/
    document.getElementById("addform").reset();
    add.classList.add('invisible');
    addtab.classList.remove('active');
    viewtab.classList.add('active');
});

/*Reset the form when clicking reset*/
document.getElementById('resetcontact').addEventListener('click', function(event){
    document.getElementById("addform").reset();
});

/*Remove the add form when clicking cancel*/
document.getElementById('cancelcontact').addEventListener('click', function(event){
    const add = document.getElementById('addpage');
    add.classList.add('invisible');
});

/****************************************end of add tab *****************************************************/

/****************************************Start of search tab ************************************************/
document.getElementById('search').addEventListener('click', function(event){
    const search = document.getElementById('searchpage');
    const clicked = document.getElementById('search');
    $().menuchange();
    search.classList.remove('d-none');
    search.classList.add('d-inline');
    clicked.classList.add('active');
});

document.getElementById('searchbutton').addEventListener('click', function(event){
    const searchvalue = $(".custom-select").val();
    const searchcriteria = $("#searchbar").val();
    const index = [];
    for (i=0; i<employeeList.length; i++){
        if (searchvalue === "officeNum"){
            if (Number(searchcriteria) === employeeList[i][searchvalue]){
                index.push(employeeList[i]);
            };
        }else if (searchcriteria.toLowerCase() === employeeList[i][searchvalue].toLowerCase()){
                index.push(employeeList[i]);
        } else {
            
        };
    };
    if (index.length > 0){
        $('viewpage').empty();
        $().card();
        for (let i = 1; i < index.length; i++){
            $().duplicate();
        };
        $('#fName').append(index, 'fName');
        $('#lName').append(index, 'lName');
        $('#officeNum').append(index, 'officeNum');
        $('#phoneNum').append(index, 'phoneNum');
    };
});

/***************************************************End of Search Tab ******************************************************************************/

/****************************************************Start of Update Tab ***************************************************************************/
//Initial actions when clicking the delete tab to show the form.
document.getElementById('update').addEventListener('click', function(event){
    const update = document.getElementById('update');
    $().menuchange();
    update.classList.add('active');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<input type="text" class="form-control" placeholder="First Name" id=firstname>`);
    $('#lName').html(`<input type="text" class="form-control" placeholder="Last Name" id=lastname>`);
    $('#officeNum').html(`<input type="text" class="form-control inputstyle" placeholder="Office Number" id=officenumber>`);
    $('#phoneNum').html(`<input type="text" class="form-control inputstyle" placeholder="Phone Number" id=phonenumber>`);
    $('#updatepage').html(`<div class="col-sm-10 buttongroup"> <button type="submit" class="btn btn-primary " id="updatecontact">Update</button> <button type="submit" class="btn btn-primary" id="resetcontact">Reset</button> </div>`);
});

/****************************************************End of Update Tab *****************************************************************************/

/****************************************************Start of Delete Tab ***************************************************************************/
//initial actions when clicking the delete tab to show the form.
document.getElementById('delete').addEventListener('click', function(event){
    const deletetab = document.getElementById('delete');
    $().menuchange();
    deletetab.classList.add('active');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<input type="text" class="form-control" placeholder="First Name" id=firstname>`);
    $('#lName').html(`<input type="text" class="form-control" placeholder="Last Name" id=lastname>`);
    $('#officeNum').html(`<input type="text" class="form-control inputstyle" placeholder="Office Number" id=officenumber>`);
    $('#phoneNum').html(`<input type="text" class="form-control inputstyle" placeholder="Phone Number" id=phonenumber>`);
    $('#deletepage').html(`<div class="col-sm-10 buttongroup"> <button type="submit" class="btn btn-primary " id="deletecontact">Delete</button> <button type="submit" class="btn btn-primary" id="reset">Reset</button> </div>`);
});

/*Reset the form when clicking reset*/
document.getElementById('deletepage').addEventListener('click', function(event){
    let reset = event.target.getAttribute('id');
    console.log(reset);
    if (reset.getElementById === "reset"){
        $('#deletepage').empty();
    }
});