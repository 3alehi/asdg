let product = [
    {id:1 , name:"persil" , img:"2.jpg" , price:1_000_000 , filter:10},
    {id:2 , name:"peril" , img:"6.jpg" , price:2_000_000 , filter:20},
    {id:3 , name:"man" , img:"5.jpg" , price:3_000_000 , filter:40},
    {id:4 , name:"gol" , img:"4.jpg" , price:4_000_000 , filter:30},
    {id:5 , name:"jam" , img:"3.jpg" , price:5_000_000 , filter:20},
]
let productadd = document.getElementById('product')


product.forEach(product =>{

productadd.innerHTML += `
<div class="container mt-3">
<div class="card" style="width:400px">
  <img class="card-img-top" src="5.jpg" alt="Card image" style="width:100%">
  <div class="card-body">
    <h4 class="card-title">John Doe</h4>
    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
    <a href="#" class="btn btn-primary">See Profile</a>
  </div>
</div>`

})