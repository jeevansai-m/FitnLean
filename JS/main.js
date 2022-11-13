
    var equipmentdata = [];
    $.getJSON('./js/equipments.json', (data)=>{
        // setTimeout(afterload(data,0), 2000);
        data.forEach((equipments)=>{
            // var equipment = '';
            // equipment='<div class="row">';
            var equipment = '<div class="col-md-4" ><div class="card" ><div class="ccc">'+
                '<p class="text-center"><img src="'+equipments.img+'" class="imw"></p></div><div class="card-body">'+
                '<h5  class="text-center">'+equipments.title+'</h5>'+
                '<p class="text-center"><input type="submit" onclick="alert('+"jeevan"+')" name="Save" value="View and reserve" class=" cc1"></p>'+
            '</div></div></div>';
            $('.equipments').append(equipment);
        });    
    });
function afterload(data,num){
    data.forEach((equipments)=>{
        var equipment="";
        if(num==0){
            equipment='<div class="row product">';
        }
        equipment += '<div class="col-md-4"><div class="card"><div class="ccc">'+
            '<p class="text-center"><img src="'+equipments.img+'" class="imw"></p></div><div class="card-body">'+
            '<h5  class="text-center">'+equipments.title+'</h5>'+
            '<p class="text-center"><input type="submit" onclick="alert('+"jeevan"+')" name="Save" value="View and reserve" class=" cc1"></p>'+
        '</div></div></div>';
        if(num==2){
            equipment +='</div>';
            num=0;
        }else{
            num++;
        }
        $('.equipments').append(equipment);
    });
}

//                     <div class="row product">
//                         <div class="col-md-4 ">
//                           <div class="card">
//                             <div class="ccc">
//                               <p class="text-center"><img src="https://raw.githubusercontent.com/rxhack/productImage/main/1.jpg" class="imw"></p> 
// <!--                               <div class="overlay">
//                                 <div class="text">View Details</div>
//                               </div> -->
//                             </div>
//                             <div class="card-body">
//                               <h5  class="text-center">Apple Watch Series 3</h5> 
//                               <p  class="text-center">Price: $550.00</p>
//                               <p class="text-center"><input type="submit" name="Save" value="Buy" class=" cc1"></p>
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-md-4">
//                            <div class="card">
//                             <div class="ccc">
//                               <p class="text-center"><img src="https://raw.githubusercontent.com/rxhack/productImage/main/2.jpg" class="imw"></p> 
// <!--                               <div class="overlay">
//                                 <div class="text">View Details</div>
//                               </div> -->
//                             </div>
//                             <div class="card-body">
//                               <h5  class="text-center">Beat Solo3 Wearless</h5> 
//                               <p  class="text-center">Price: $159.99</p>
//                               <p class="text-center"><input type="submit" name="Save" value="Buy" class=" cc1"></p>
//                             </div>
//                           </div>
//                         </div>
//                          <div class="col-md-4">
//                             <div class="card">
//                             <div class="ccc">
//                               <p class="text-center"><img src="https://raw.githubusercontent.com/rxhack/productImage/main/3.jpg" class="imw"></p> 
// <!--                               <div class="overlay">
//                                 <div class="text">View Details</div>
//                               </div> -->
//                             </div>
//                             <div class="card-body">
//                               <h5  class="text-center">Apple MacBook</h5> 
//                               <p  class="text-center">Price: $2249.00</p>
//                               <p class="text-center"><input type="submit" name="Save" value="Buy" class=" cc1"></p>
//                             </div>
//                           </div>
//                         </div>
//                     </div>
   