    var equipmentdata = [];
    var equipmentid = null;
    $.getJSON('./js/equipments.json', (data)=>{
        bindEquipment(data);
        equipmentdata = data;
    });
    function bindEquipment(data){
        data.forEach((equipments)=>{
            var equipment = '<div class="col-md-4 product" ><div class="card" ><div class="ccc">'+
                '<p class="text-center"><img src="'+equipments.img+'" class="imw"></p></div><div class="card-body">'+
                '<h5  class="text-center">'+equipments.title+'</h5>'+ '<p  class="text-center">Price: '+ equipments.price+'</p>'+
                '<p class="text-center"><input type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="viewReserve(\'' + equipments.id + '\')" name="Save" value="View and reserve" class=" cc1"></p>'+
            '</div></div></div>';
            $('.equipments').append(equipment);
        });  
    }
    // Search functionlity
    function SearchBtn(){
        var results = [];
        var searchField = "title";
        var searchVal = document.getElementById("searchText").value ;
        results = equipmentdata.filter(element => element.title.includes(searchVal.toUpperCase()));
        $('.equipments').empty();
        bindEquipment(results);
    }
    // View popup content
    function viewReserve(id){
        equipmentid = parseInt(id);
        var equipments=equipmentdata.filter(x => x.id === equipmentid);
        var equipment ='<h5  class="text-center">'+equipments[0].title+'</h5><br/><div class="text-center"><img src="'
                            +equipments[0].img+'" class="img-fluid img-thumbnail"></div><br/><p>'+equipments[0].description+'</p>';
        $('.equipmentdetails').empty();
        $('.equipmentdetails').append(equipment);
    }
    
    // clear function
    function Clear(){
        document.getElementById("txtname").value = "";
        document.getElementById("txtemail").value = "";
        document.getElementById("txtpnum").value = "";
    }
//on reserve click
    function Reserve() {
        if (isform_validate()) {
            var formData = readFormData();
            insertNewRecord(formData);
            Clear();
            alert('Reserved Successfully');
        }
    }
    // read the input form
function readFormData() {
    var formData = {};
    formData["txtname"] = document.getElementById("txtname").value;
    formData["txtemail"] = document.getElementById("txtemail").value;
    formData["txtpnum"] = document.getElementById("txtpnum").value;
    formData["equipmentid"] =equipmentid;
    formData["title"] =equipmentdata.filter(x => x.id === equipmentid)[0].title;

    return formData;
}
    // this function is  to validate the submit form
function isform_validate(){
    isValid = true;
    var txtname = document.getElementById("txtname");
    var txtemail = document.getElementById("txtemail");
    var txtpnum = document.getElementById("txtpnum");
    var emailvaild =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;   
    if (txtname.value == "" || txtname.value.length >=12 || txtname.value.length <= 3 ) {
        if(txtname.value == ""){
          alert("*name should not be empty");}
        else{
          alert("*name should be min 3 or max 12 words");
        }
        isValid = false;
    }
    else if (emailvaild.test(txtemail.value) == false)
    {
    alert("*Invalid email id");
    isValid = false;
    }
    else if (!(txtpnum.value.match(phoneno))) {
        alert("*must be 10 digit number");
        isValid = false;
    }
    else{
    isValid = true;
    return isValid;}
}
function insertNewRecord(data) {
    var table = document.getElementById("tblrecords").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(0);
    var records = [data.txtname,data.txtemail,data.txtpnum,data.title];
    for (var i=0;i<records.length;i++){
        cell = newRow.insertCell(i);
        cell.innerHTML = records[i];
    }
}
// navgation bar 
var toggleButton = document.getElementsByClassName('navbar-toggle')[0];
var navbarLinks = document.getElementsByClassName('navbar-links');
toggleButton.addEventListener('click',function() {
    for(var i=0; i<navbarLinks.length; i++)
    navbarLinks[i].classList.toggle('active');
});

