"use strict";
//Global functions
var productImages = document.getElementById('productImages');

var firstProductImg = document.getElementById('firstProductImg');
var secondProductImg = document.getElementById('secondProductImg');
var thirdProductImg = document.getElementById('thirdProductImg')
function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
}
Product.arrayImg = [];

Product.arrayImg.push(new Product('Bag', 'img/bag.jpg'));
Product.arrayImg.push(new Product('Banana', 'img/banana.jpg'));
Product.arrayImg.push(new Product('Bathroom', 'img/bathroom.jpg'));
Product.arrayImg.push(new Product('Boots', 'img/boots.jpg'));
Product.arrayImg.push(new Product('Breakfast', 'img/breakfast.jpg'));
Product.arrayImg.push(new Product('Bubble Gum', 'img/bubblegum.jpg'));
Product.arrayImg.push(new Product('Chair', 'img/chair.jpg'));
Product.arrayImg.push(new Product('Cthulhu', 'img/ctulhu.jpg'));
Product.arrayImg.push(new Product('Dog Duck', 'img/dog-duck.jpg'));
Product.arrayImg.push(new Product('Dragon', 'img/dragon.jpg'));
Product.arrayImg.push(new Product('Pen', 'img/pen.jpg'));
Product.arrayImg.push(new Product('Pet Sweep', 'img/pet-sweep.jpg'));
Product.arrayImg.push(new Product('Scissors', 'img/scissors.jpg'));
Product.arrayImg.push(new Product('Shark', 'img/shark.jpg'));
Product.arrayImg.push(new Product('Sweep', 'img/sweep.png'));
Product.arrayImg.push(new Product('Tauntaun', 'img/tauntaun.jpg'));
Product.arrayImg.push(new Product('Unicorn', 'img/unicorn.jpg'));
Product.arrayImg.push(new Product('USB', 'img/usb.jpg'));
Product.arrayImg.push(new Product('Water Can', 'img/water-can.jpg'));
Product.arrayImg.push(new Product('Wine Glass', 'img/wine-glass.jpg'));
// Product.arrayImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

Product.prototype.getThreeRandomImg = function() {
    var arrThreeImg = [];
    var areDuplicates = false;
    for(var i = 0; i < 3; i++) {
        arrThreeImg.push(Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())]);
       
        // var imgOne = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
        // var imgTwo = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
        // var imgThree = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
    }

    arrThreeImg.map(function(product){
        return product.name;
    }).forEach(function(element,  index, arr){
        if(arr.indexOf(element) !== index) {
            areDuplicates = true;
            if(areDuplicates) {
                Product.prototype.getThreeRandomImg();
            }
            
        }
    });
       return arrThreeImg;
}
;

firstProductImg.setAttribute('src', Product.prototype.getThreeRandomImg()[0].imgUrl);
secondProductImg.setAttribute('src', Product.prototype.getThreeRandomImg()[1].imgUrl);
thirdProductImg.setAttribute('src', Product.prototype.getThreeRandomImg()[2].imgUrl);


// for(var i = 0; i < Product.prototype.getThreeRandomImg().length; i++){
    
//     li.textContent = Product.prototype.getThreeRandomImg()[i].imgUrl;
// }
