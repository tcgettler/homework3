window.addEventListener('load',function(event){
    for (i=1; i < employeeList.length; i++){
        $().duplicate(i);
    };
        $('#fName').append(employeeList, 'fName');
        $('#lName').append(employeeList, 'lName');
        $('#officeNum').append(employeeList, 'officeNum');
        $('#phoneNum').append(employeeList, 'phoneNum');
});

document.getElementById('view').addEventListener('click', function(event){
    let view = document.getElementById('view');
    if (view.className('disabled') === true){
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

document.getElementById('add').addEventListener('click', function(event){
    const add = document.getElementById('addpage');
    add.classList.remove('invisible');
});