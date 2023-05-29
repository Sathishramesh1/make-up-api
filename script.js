var container=document.createElement("div")
container.className="container"
var row=document.createElement("div")
row.classList.add("row","m-3")
container.append(row);


var res=fetch("https://makeup-api.herokuapp.com/api/v1/products.json",);
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    for(var i=0;i<data1.length;i++){
        
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
        <img src="${data1[i].image_link}" class="card-img-top" alt="contry flag">
  
  <div class="card-body">
   <h5>${data1[i].brand}</h5>
   <p>$${data1[i].price}</p>
   <p>${data1[i].name}</p>
   <p>${data1[i].product_link}</p>
  </div>
  <a href=${data1[i].description} class="btn btn-primary" >click to description</a>

</div>
            
        </div>`


    
        
        
    }
}
document.body.append(container)