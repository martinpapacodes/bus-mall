"use strict";
//Global functions
var productImages = document.getElementById('productImages');

var firstProductImg = document.getElementById('firstProductImg');
var secondProductImg = document.getElementById('secondProductImg');
var thirdProductImg = document.getElementById('thirdProductImg');

var firstProductLbl = document.getElementById('firstProductLbl');
var secondProductLbl = document.getElementById('secondProductLbl');
var thirdProductLbl = document.getElementById('thirdProductLbl');


function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.numOfClicks = 0;
    this.numOfTimesShown = 0;
}

Product.arrayImages = [];

Product.arrayImages.push(new Product('Bag', 'img/bag.jpg'));
Product.arrayImages.push(new Product('Banana', 'img/banana.jpg'));
Product.arrayImages.push(new Product('Bathroom', 'img/bathroom.jpg'));
Product.arrayImages.push(new Product('Boots', 'img/boots.jpg'));
Product.arrayImages.push(new Product('Breakfast', 'img/breakfast.jpg'));
Product.arrayImages.push(new Product('Bubble Gum', 'img/bubblegum.jpg'));
Product.arrayImages.push(new Product('Chair', 'img/chair.jpg'));
Product.arrayImages.push(new Product('Cthulhu', 'img/ctulhu.jpg'));
Product.arrayImages.push(new Product('Dog Duck', 'img/dog-duck.jpg'));
Product.arrayImages.push(new Product('Dragon', 'img/dragon.jpg'));
Product.arrayImages.push(new Product('Pen', 'img/pen.jpg'));
Product.arrayImages.push(new Product('Pet Sweep', 'img/pet-sweep.jpg'));
Product.arrayImages.push(new Product('Scissors', 'img/scissors.jpg'));
Product.arrayImages.push(new Product('Shark', 'img/shark.jpg'));
Product.arrayImages.push(new Product('Sweep', 'img/sweep.png'));
Product.arrayImages.push(new Product('Tauntaun', 'img/tauntaun.jpg'));
Product.arrayImages.push(new Product('Unicorn', 'img/unicorn.jpg'));
Product.arrayImages.push(new Product('USB', 'img/usb.jpg'));
Product.arrayImages.push(new Product('Water Can', 'img/water-can.jpg'));
Product.arrayImages.push(new Product('Wine Glass', 'img/wine-glass.jpg'));
// Product.arrayImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

// Product.prototype.getThreeRandomImg = function() {
//     var arrThreeImg = [];
//     var areDuplicates = false;
//     for(var i = 0; i < 3; i++) {
//         arrThreeImg.push(Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())]);
       
//         // var imgOne = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
//         // var imgTwo = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
//         // var imgThree = Product.arrayImg[Math.floor(Product.arrayImg.length * Math.random())];
//     }

//     arrThreeImg.map(function(product){
//         return product.name;
//     }).forEach(function(element,  index, arr){
//         if(arr.indexOf(element) !== index) {
//             areDuplicates = true;
//             if(areDuplicates) {
//                 Product.prototype.getThreeRandomImg();
//             }
            
//         }
//     });
//        return arrThreeImg;
// };

function displayProductImgs(firstImg, secondImg, thirdImg) {
    firstProductImg.src = Product.arrayImages[firstImg].imgUrl;
    secondProductImg.src = Product.arrayImages[secondImg].imgUrl;
    thirdProductImg.src = Product.arrayImages[thirdImg].imgUrl;

    firstProductLbl.textContent = Product.arrayImages[firstImg].name;
    secondProductLbl.textContent = Product.arrayImages[secondImg].name;
    thirdProductLbl.textContent = Product.arrayImages[thirdImg].name;
}

function getThreeRandomImg() {
    var firstProductImg = Math.floor(Product.arrayImages.length * Math.random());
    var secondProductImg = Math.floor(Product.arrayImages.length * Math.random());
}
// for(var i = 0; i < Product.prototype.getThreeRandomImg().length; i++){
    
//     li.textContent = Product.prototype.getThreeRandomImg()[i].imgUrl;
// }
