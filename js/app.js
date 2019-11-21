"use strict";
//Global functions

var maxNumOfClicks = 5;

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
Product.arrayImages.push(new Product('Cthulhu', 'img/cthulhu.jpg'));
Product.arrayImages.push(new Product('Dog Duck', 'img/dog-duck.jpg'));
Product.arrayImages.push(new Product('Dragon', 'img/dragon.jpg'));
Product.arrayImages.push(new Product('Pen', 'img/pen.jpg'));
Product.arrayImages.push(new Product('Pet Sweep', 'img/pet-sweep.jpg'));
Product.arrayImages.push(new Product('Scissors', 'img/scissors.jpg'));
Product.arrayImages.push(new Product('Shark', 'img/shark.jpg'));
Product.arrayImages.push(new Product('Sweep', 'img/sweep.png'));
Product.arrayImages.push(new Product('Tauntaun', 'img/tauntaun.jpg'));
Product.arrayImages.push(new Product('Unicorn', 'img/unicorn.jpg'));
Product.arrayImages.push(new Product('USB', 'img/usb.gif'));
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

    var firstProduct;
    var secondProduct;
    var thirdProduct;

// function getThreeRandomImg() {
    

//     var firstImg = Math.floor(Product.arrayImages.length * Math.random());
//     var secondImg = Math.floor(Product.arrayImages.length * Math.random());

//     do {
//         var thirdImg = Math.floor(Product.arrayImages.length * Math.random());
//     } while (firstImg === secondImg === thirdImg);

//     firstProduct = Product.arrayImages[firstImg]
//     secondProduct = Product.arrayImages[secondImg]
//     thirdProduct = Product.arrayImages[thirdImg]

//     displayProductImgs(firstImg, secondImg, thirdImg);
// };


function showResults() {

    var productList = document.getElementById('productList');
    var ul = document.createElement('ul');
    productList.appendChild(ul);
    
    for(var i = 0; i < Product.arrayImages.length; i++) {
        var li = document.createElement('li')
        ul.appendChild(li);
        li.textContent = `${Product.arrayImages[i].name}:`; 
    }
};

showResults();

function getThreeRandomImg() {

        while(firstImg === secondImg || firstImg === thirdImg || secondImg === thirdImg){
            var firstImg = Math.floor(Product.arrayImages.length * Math.random());
            var secondImg = Math.floor(Product.arrayImages.length * Math.random());
            var thirdImg = Math.floor(Product.arrayImages.length * Math.random());
        }
        

        firstProductImg.src = Product.arrayImages[firstImg].imgUrl;
        secondProductImg.src = Product.arrayImages[secondImg].imgUrl;
        thirdProductImg.src = Product.arrayImages[thirdImg].imgUrl;

        firstProductLbl.textContent = Product.arrayImages[firstImg].name;
        secondProductLbl.textContent = Product.arrayImages[secondImg].name;
        thirdProductLbl.textContent = Product.arrayImages[thirdImg].name;


};

var totalNumOfClicks = 0;

function clickHandler(event) {
    
    if(totalNumOfClicks < maxNumOfClicks) {
        if (event.target.id === 'firstProductImg') {
            totalNumOfClicks++;
            console.log('first image was clicked');
        } else if (event.target.id === 'secondProductImg') {
            totalNumOfClicks++;

            console.log('second image was clicked');
        } else if (event.target.id === 'thirdProductImg') {
            totalNumOfClicks++;
            console.log('third image was clicked');
        }
 
    }

    // if(totalNumOfClicks < maxNumOfClicks) {

    //     if(e.target.id === 'firstProductImg' || e.target.id === 'secondProductImg' || e.target.id === 'thirdProductImg') {
    //         if(e.target.id === 'firstProductImg') {
    //             firstProduct.numOfClicks++;
    //         } else if (e.target.id === 'secondProductImg') {
    //             secondProduct.numOfClicks++;
    //         } else if (e.targe.id === 'thirdProductImg') {
    //             thirdProduct.numOfClicks++;
    //         }

    //         firstProduct.numOfTimesShown++;
    //         secondProduct.numOfTimesShown++;
    //         thirdProduct.numOfTimesShown++;

    //         getThreeRandomImg();
    //     }
    // }

    // totalNumOfClicks++;
    
    // if(totalNumOfClicks === maxNumOfClicks){
    //     productImages.removeEventListener('click', clickHandler);
    //     alert('You have reached the maximum number amount of clicks!');
    // }
}

productImages.addEventListener('click', clickHandler);

getThreeRandomImg();

