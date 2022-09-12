const wrapper= document.querySelector(".sliderWrapper");

const menuItems=document.querySelectorAll('.menuItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      description: "The Air Force is a range of athletic shoes made by Nike that began with the Air Force 1 and went on to include the Air Force 2, Air Force 3, Air Force STS, Air Force 5, Air Force XXV and Air Force 09. The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      description:"Air Jordan is a line of basketball shoes and athletic clothing produced by American corporation Nike. The first Air Jordan shoe was produced for Hall of Fame former basketball player Michael Jordan during his time with the Chicago Bulls in late 1984 and released to the public on April 1, 1985.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      description:"The Nike Blazer was only the third shoe released under the newly-named sports brand Nike in 1973, originally developed as a basketball shoe.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      description: "At Nike, a journey toward a more sustainable future means transforming trash into shoes that tread a little lighter and take a little less. Crater Impact is a step on that journey. Built on our recycling ethos, Crater Impact uses waste covertly, threading in recycled content and lower impact material inconspicuously.",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      description:'Space Hippie is a story of trash transformed. Combining its airy Space Waste Yarn upper with its ultra-soft Crater foam midsole, the Space Hippie 01 delivers a futuristic look that feels as light as mountain air.',
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
 
  products.forEach((item,index)=>{
    let element=`
    <div class="sliderItem">
    <img src="${item.colors[0].img}" alt="${item.title}" class="sliderImg">
    <div class="slideBg"></div>
    <h1 class="sliderTitle">${item.title} <br> NEW <br> SEASON</h1>
    <h2 class="sliderPrice">$${item.price}</h2>
    <a href="#productId">
    <button class="buyButton">BUY NOW</button>
</a>
</div>
    `
    wrapper.innerHTML= wrapper.innerHTML+ element;
  });

  let choosenProduct =products[0];
  const currentProductImg=document.querySelector(".productImg");
  const currentProductTitle=document.querySelector(".productTitle");
  const currentProductPrice=document.querySelector(".productPrice");
  const currentProductColors=document.querySelectorAll(".color");
  const currentProductSizes=document.querySelectorAll(".size");
  const currentProductDescr=document.querySelector(".productDesc");
  const productButton =document.querySelector(".productButton");
  currentProductTitle.textContent=choosenProduct.title;
  currentProductPrice.textContent="$"+choosenProduct.price;
  currentProductDescr.textContent=choosenProduct.description;
  currentProductImg.src=choosenProduct.colors[0].img;
  currentProductColors.forEach((color,index)=>{
      color.style.backgroundColor=choosenProduct.colors[index].code;
  })

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform=`translateX(${-100 * index}vw)`
    choosenProduct=products[index];

    // chjange text of current product
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$"+choosenProduct.price;
    currentProductDescr.textContent=choosenProduct.description;
    currentProductImg.src=choosenProduct.colors[0].img;
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code;
        productButton.style.backgroundColor=choosenProduct.colors[index].code;
    })
    })
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img;
        productButton.style.backgroundColor=choosenProduct.colors[index].code;
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
});

const payment=document.querySelector(".payment");
const closet = document.querySelector(".close");


productButton.addEventListener("click", ()=>{
    payment.style.display="flex";
})
closet.addEventListener("click", ()=>{
    payment.style.display="none";
})

