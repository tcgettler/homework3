/*
Render view list upon page load
****************************************
****************************************
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
    employeeList.sort(function(a, b){
        return a.lName > b.lName;
    });
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
    /*add the new contact to the object*/
    let firstname = $('#firstname').val();
    let lastname = $('#lastname').val();
    firstname = $().cap(firstname);
    lastname = $().cap(lastname);
    let officenumber = $('#officenumber').val();
    officenumber = ('000' + officenumber).substr(-3);
    console.log(officenumber);
    const phonenumber = $('#phonenumber').val();
    if ((firstname === "") || (firstname === " ")|| ($().isNumber(firstname) === true)){
        alert('You must enter a valid first name!');
        return;
    } else if ((lastname === "") || (lastname === " ") || ($().isNumber(lastname) === true)) {
        alert('You must enter a valid last name!');
        return;
    } else if (officenumber === "000"){
        alert('You must enter a valid office number!');
        return;
    } else if ($().isPhone(phonenumber) === false) {
        alert('You must enter a valid phone number');
        return;
    } else {
        employeeList.push({fName:firstname, lName:lastname, officeNum: officenumber, phoneNum:phonenumber});
        //sort the list again
        employeeList.sort(function(a, b){
            return a.lName > b.lName;
        });
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
        /*reset the form in case user wants to make another entry*/
        alert("You have successfully added " + firstname + " " + lastname + " to the registry! Select the view tab to view new entry!")
        document.getElementById("addform").reset();
    };
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
    let counter = 0;
    for (i=0; i<employeeList.length; i++){
        if (searchvalue === "officeNum"){
            if (Number(searchcriteria) === employeeList[i][searchvalue]){
                index.push(employeeList[i]);
                counter++;
            };
        }else if (searchcriteria.toLowerCase() === employeeList[i][searchvalue].toLowerCase()){
                index.push(employeeList[i]);
                counter++;
        };
    };
    if (counter===0){
        alert("Your search did not yield any results!");
    }
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
    const updatepage = document.getElementById('updatepage');
    $().menuchange();
    update.classList.add('active');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<input type="text" class="form-control" placeholder="First Name" id="firstnameup">`);
    $('#lName').html(`<input type="text" class="form-control" placeholder="Last Name" id="lastnameup">`);
    updatepage.classList.remove('d-none');
    updatepage.classList.add('d-inline');
});

document.getElementById('resetupdate').addEventListener('click', function(){
    //Can't get input fields to reset, so I just delete the form and rebuild it.
    const confirm = document.getElementById('updateconfirm');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<form><input type="text" class="form-control" placeholder="First Name" id="firstnameup"></form>`);
    $('#lName').html(`<form><input type="text" class="form-control" placeholder="Last Name" id="lastnameup"></form>`);
    confirm.classList.remove('d-inline');
    confirm.classList.add('d-none');
});

document.getElementById('updatecontact').addEventListener('click', function(){
    let firstname = document.getElementById('firstnameup').value;
    let lastname = document.getElementById('lastnameup').value;
    const confirm = document.getElementById('updateconfirm');
    firstname = $().cap(firstname);
    lastname = $().cap(lastname);
    let location = 0;
    let counter=0;
    for (let i = 0; i < employeeList.length; i++){
        if (firstname === employeeList[i]['fName'] && lastname === employeeList[i]['lName']){
            location = i;
            confirm.classList.remove('d-none');
            confirm.classList.add('d-inline');
            $('#officeNum').html(`<input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="form-control" placeholder="Office number" id="officenumberup" type = "number" maxlength = "3" required/>`);
            $('#phoneNum').html(`<input type="tel" class="form-control" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="12" required id="phonenumberup"/>`);
            counter++;
        };
    }; 
    if(counter===0){
    alert(firstname + " " + lastname + " does not exist!");
    };
    document.getElementById('updateconfirm').addEventListener('click', function(event){
        let officenum = document.getElementById('officenumberup').value;
        officenum = ('000' + officenum).substr(-3);
        const phonenum = document.getElementById('phonenumberup').value;
        if ((firstname === "") || (firstname === " ")|| ($().isNumber(firstname) === true)){
            alert('You must enter a valid first name!');
            return;
        } else if ((lastname === "") || (lastname === " ") || ($().isNumber(lastname) === true)) {
            alert('You must enter a valid last name!');
            return;
        } else if (officenum === "000"){
            console.log(officenum);
            alert('You must enter a valid office number!');
            return;
        } else if ($().isPhone(phonenum) === false) {
            alert('You must enter a valid phone number');
            return;
        } else {
            alert("You have successfully updated " + firstname + " " + lastname);
            employeeList.splice(location, 1, {
                fName: firstname,
                lName: lastname,
                officeNum: officenum,
                phoneNum: phonenum
            });
            employeeList.sort(function(a, b){
                return a.lName > b.lName;
            });
            $('viewpage').empty();
            $().card();
            $('#fName').html(`<form><input type="text" class="form-control" placeholder="First Name" id="firstnameup"></form>`);
            $('#lName').html(`<form><input type="text" class="form-control" placeholder="Last Name" id="lastnameup"></form>`);
            $('#officeNum').html(`<input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="form-control" placeholder="Office number" id="officenumberup" type = "number" maxlength = "3" required/>`);
            $('#phoneNum').html(`<input type="tel" class="form-control" name="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="12" required id="phonenumberup"/>`);
            confirm.classList.remove('d-inline');
            confirm.classList.add('d-none');
        };
    });
});

/****************************************************End of Update Tab *****************************************************************************/

/****************************************************Start of Delete Tab ***************************************************************************/
//initial actions when clicking the delete tab to show the form.
document.getElementById('delete').addEventListener('click', function(event){
    const deletetab = document.getElementById('delete');
    const deletepage = document.getElementById('deletepage');
    $().menuchange();
    deletetab.classList.add('active');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<input type="text" class="form-control" placeholder="First Name" id="firstnamedel">`);
    $('#lName').html(`<input type="text" class="form-control" placeholder="Last Name" id="lastnamedel">`);
    deletepage.classList.remove('d-none');
    deletepage.classList.add('d-inline');
});

/*Reset the form when clicking reset*/
document.getElementById('resetdelete').addEventListener('click', function(event){
    //Can't get input fields to reset, so I just delete the form and rebuild it.
    const confirm = document.getElementById('deleteconfirm');
    $('viewpage').empty();
    $().card();
    $('#fName').html(`<form><input type="text" class="form-control" placeholder="First Name" id="firstnamedel"></form>`);
    $('#lName').html(`<form><input type="text" class="form-control" placeholder="Last Name" id="lastnamedel"></form>`);
    confirm.classList.remove('d-inline');
    confirm.classList.add('d-none');
});


document.getElementById('deletecontact').addEventListener('click', function(event){
    let firstname = document.getElementById('firstnamedel').value;
    console.log(firstname);
    let lastname = document.getElementById('lastnamedel').value;
    const confirm = document.getElementById('deleteconfirm');
    firstname = $().cap(firstname);
    lastname = $().cap(lastname);
    let location = 0;
    let counter=0;
    for (let i = 0; i < employeeList.length; i++){
        if (firstname === employeeList[i]['fName'] && lastname === employeeList[i]['lName']){
            $().card();
            location = i;
            $('#fName').html(`<p>${employeeList[i]['fName']}</p>`);
            $('#lName').html(`<p>${employeeList[i]['lName']}</p>`);
            $('#officeNum').html(`<p>${employeeList[i]['officeNum']}</p>`);
            $('#phoneNum').html(`<p>${employeeList[i]['phoneNum']}</p>`);
            confirm.classList.remove('d-none');
            confirm.classList.add('d-inline');
            counter++;
        } 
        
    };
    if(counter===0){
        alert(firstname + " " + lastname + " does not exist!");
    };
    //actually delete the entry when user clicks confirm
    document.getElementById('deleteconfirm').addEventListener('click', function(event){
        employeeList.splice(location,1);
        alert("You have successfully deleted " + firstname + " " + lastname);
        $('viewpage').empty();
        $().card();
        $('#fName').html(`<form><input type="text" class="form-control" placeholder="First Name"  id="firstnamedel"></form>`);
        $('#lName').html(`<form><input type="text" class="form-control" placeholder="Last Name" id="lastnamedel"></form>`);
    });
});

