    var equipmentdata = [];
    var equipmentid = null;
    $.getJSON('./js/equipments.json', (data)=>{
        bindEquipment(data);
        equipmentdata = data;
    });
    function bindEquipment(data){
        data.forEach((equipments)=>{
            var equipment = '<div class="col-md-4" ><div class="card" ><div class="ccc">'+
                '<p class="text-center"><img src="'+equipments.img+'" class="imw"></p></div><div class="card-body">'+
                '<h5  class="text-center">'+equipments.title+'</h5>'+
                '<p class="text-center"><input type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="viewReserve(\'' + equipments.id + '\')" name="Save" value="View and reserve" class=" cc1"></p>'+
            '</div></div></div>';
            $('.equipments').append(equipment);
        });  
    }
    function SearchBtn(){
        var results = [];
        var searchField = "title";
        var searchVal = document.getElementById("searchText").value ;
        results = equipmentdata.filter(element => element.title.includes(searchVal.toUpperCase()));
        $('.equipments').empty();
        bindEquipment(results);
    }
    function viewReserve(id){
        equipmentid = parseInt(id);
        var equipments=equipmentdata.filter(x => x.id === equipmentid);
        var equipment ='<h5  class="text-center">'+equipments[0].title+'</h5><br/><p>'+equipments[0].description+'</p>';
        $('.equipmentdetails').empty();
        $('.equipmentdetails').append(equipment);
    }

    
