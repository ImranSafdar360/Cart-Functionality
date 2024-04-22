const products = [
  {
    name: "Wallet",
    title: "Mini style thin wallet <br> card holder men's",
    price: "800",
    image:
      "https://static-01.daraz.pk/p/f99aeb2b35cfaeb2f5b90d8d4a6dcc0b.jpg_200x200q90-product.jpg_.webp",
  },
  {
    name: "Smart Watch",
    title: "Y20 smart watch <br> with straps",
    price: "4000",
    image:
      "https://static-01.daraz.pk/p/b2c96f2d623abd490dbb3fb46a962d81.jpg_200x200q90-product.jpg_.webp",
  },
  {
    name: "Men's sneaker",
    title: "Hiking Men's <br> Sneaker",
    price: "3500",
    image:
      "https://pk-live-21.slatic.net/kf/Se4e9498e57fa4a05ac95055f5481b54eZ.jpg",
  },
  {
    name: "Mouse pad",
    title: "Mouse Pad Gaming <br> and normal Use",
    price: "1000",
    image:
      "https://static-01.daraz.pk/p/5b6d7af8f9d5e353772b6b0d1a15189d.jpg_200x200q90-product.jpg_.webp",
  },
  {
    name: "Mobile Cover",
    title: "CrashStar Leather <br> Mobile Cover",
    price: "800",
    image:
      "https://static-01.daraz.pk/p/5b66783731bbe1a7fabe8eedf1ed6beb.jpg_200x200q90-product.jpg_.webp",
  },
];

const populars = [
  {
    name: "Samsung Mobile",
    title: "Samsung Galaxy A24",
    price: "36,999",
    image: "https://static-01.daraz.pk/p/30d04fea6e8045b5c7a9cb7de6b057f7.jpg",
  },
  {
    name: "Flip 5 8GB + 512GB",
    title: "Samsung Galaxy Flip 5",
    price: "325,000",
    image:
      "https://static-01.daraz.pk/p/e88e377dc60857482fb1decaf1c76db3.jpg_300x0q75.webp",
  },
  {
    name: "Samsung TV",
    title: "Samsung Smart TV",
    price: "250,000",
    image:
      "https://static-01.daraz.pk/p/eb11cacb89659fb5b4bf80d7816a9d7f.jpg_300x0q75.webp",
  },
];

const showTheProducts = () => {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
        <img class = "w-full h-full object-cover" src="${product.image}"/>
        </div>
        <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
            <div class="flex justify-between w-full items-center mt-2">
                <div class="w-1/2">
                    <h3 class="font-semibold opacity-20">${product.title}</h3>
                    <h4 class="font-semibold mt-2">Rs: ${product.price}</h4>
                </div>
                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                        class="add ri-add-line"></i></button>
            </div>
        </div>
    </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
};

const cart = [];

const showThePopulars = () => {
  var clutter = "";
  populars.forEach(function (product) {
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover"
                src="${product.image}">
        </div>
        <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.title}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">Rs: ${product.price}</h4>
        </div>
    </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
};
const addToCart = () => {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains('add')) {
        cart.push(products[details.target.dataset.index]);
      }
      showCart();
    });
};

const showCart = () => {
    document.querySelector(".carticon").addEventListener(
        "click", function(){
            document.querySelector(".cartexpnd").style.display = "block";
            var clutter = "";
            cart.forEach(function(prod, index){
                clutter += ` <div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg">
                <img src="${prod.image}"/>
                </div>
                <div>
                <h3 class="font-semibold">${prod.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">Rs: ${prod.price}</h5>
                </div>
                </div>`;
            })
            document.querySelector(".cartexpnd").innerHTML = clutter;
        })
}
// showCart();
addToCart();
showTheProducts();
showThePopulars();
