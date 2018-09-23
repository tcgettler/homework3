/*
Render view list upon page load
*******************************
*******************************
*/
window.addEventListener('load',function(event){
    for (i=1; i < employeeList.length; i++){
        $().duplicate(i);
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
    let view = document.getElementById('view');
    if (view.className === 'nav-link active'){
        return;
    } else {
        for (i=1; i < employeeList.length; i++){
            $().duplicate(i);
        };
        $('#fName').append(employeeList, 'fName');
        $('#lName').append(employeeList, 'lName');
        $('#officeNum').append(employeeList, 'officeNum');
        $('#phoneNum').append(employeeList, 'phoneNum');
    };
});

/*Display add form when clicking button*/
document.getElementById('add').addEventListener('click', function(event){
    const add = document.getElementById('addpage');
    const view = document.getElementById('view');
    const addtab = document.getElementById('add');
    view.classList.remove('active');
    addtab.classList.add('active');
    add.classList.remove('invisible');
});

/*
Add tab functionality
*********************
*********************
*/
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