const products = [
  {id:1,category:"laptop",name:"MacBook Air M4",meta:"Laptop · 13 inch · 16GB / 256GB",price:24990000,old:26990000,image:"https://www.apple.com/v/macbook-air/z/images/meta/macbook_air_mx__ez5y0k5yy7au_og.png?202608191258",officialUrl:"https://www.apple.com/macbook-air/",badge:"Bán chạy"},
  {id:2,category:"phone",name:"iPhone 16",meta:"Điện thoại · 128GB · Màn hình OLED",price:21990000,old:22990000,image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_GEO_US?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1724710494447",officialUrl:"https://www.apple.com/iphone-16/",badge:"Mới"},
  {id:3,category:"audio",name:"Sony WH-1000XM5",meta:"Tai nghe · Chống ồn chủ động · Bluetooth",price:6990000,old:7990000,image:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=80",officialUrl:"https://electronics.sony.com/audio/headphones/headband/p/wh1000xm5-b",badge:"Ưu đãi"},
  {id:4,category:"accessory",name:"Logitech MX Keys Mini",meta:"Bàn phím · Bluetooth · Layout US",price:1990000,old:2290000,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",badge:""},
  {id:5,category:"laptop",name:"ASUS Zenbook 14 OLED",meta:"Laptop · Intel Core Ultra 7 · 16GB / 1TB",price:28990000,old:31990000,image:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=700&q=80",officialUrl:"https://www.asus.com/laptops/for-home/zenbook/asus-zenbook-14-oled-ux3405/",badge:""},
  {id:6,category:"phone",name:"Samsung Galaxy S25",meta:"Điện thoại · 256GB · Dynamic AMOLED 2X",price:21990000,old:23990000,image:"https://images.samsung.com/vn/smartphones/galaxy-s25/images/galaxy-s25-share-image.jpg",officialUrl:"https://www.samsung.com/vn/smartphones/galaxy-s25/",badge:""},
  {id:7,category:"audio",name:"Apple AirPods Pro 2",meta:"Tai nghe · USB-C · Chống ồn chủ động",price:5490000,old:5990000,image:"https://www.apple.com/v/airpods-pro/t/images/meta/og__c0ceegchesom_overview.png?202609132104",officialUrl:"https://www.apple.com/airpods-pro/",badge:"Bán chạy"},
  {id:8,category:"accessory",name:"Anker 737 Power Bank",meta:"Sạc dự phòng · 24000mAh · Công suất 140W",price:2490000,old:2890000,image:"https://cdn.shopify.com/s/files/1/0493/9834/9974/products/A1289011-Anker_737_Power_Bank_PowerCore_24K_1.png?v=1775967275",officialUrl:"https://www.anker.com/products/a1289",badge:""},
  {id:9,category:"laptop",name:"Lenovo IdeaPad Slim 5",meta:"Laptop · Ryzen 7 · 16GB / 512GB",price:16990000,old:18990000,image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",badge:"Giá tốt"},
  {id:10,category:"phone",name:"Google Pixel 9",meta:"Điện thoại · 128GB · Camera AI",price:18990000,old:20990000,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",badge:""},
  {id:11,category:"audio",name:"Sonos Era 100",meta:"Loa thông minh · Wi-Fi · Âm thanh stereo",price:5490000,old:5990000,image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",badge:""},
  {id:12,category:"accessory",name:"Apple Watch SE",meta:"Đồng hồ thông minh · GPS · 40mm",price:6490000,old:6990000,image:"https://www.apple.com/v/apple-watch-se-3/c/images/meta/apple-watch-se-3__d0wwc67lzg02_og.png?202609051846",officialUrl:"https://www.apple.com/apple-watch-se/",badge:""},
  {id:13,category:"laptop",name:"Mac mini M4",meta:"Máy tính để bàn · M4 · 16GB / 256GB",price:14990000,old:15990000,image:"https://www.apple.com/v/mac-mini/ab/images/meta/mac-mini__dvce2jrm11w2_og.jpg?202608211343",officialUrl:"https://www.apple.com/mac-mini/",badge:"Mới"},
  {id:14,category:"phone",name:"Samsung Galaxy S25 Ultra",meta:"Điện thoại · 256GB · S Pen · Camera 200MP",price:33990000,old:35990000,image:"https://images.samsung.com/vn/smartphones/galaxy-s25-ultra/images/galaxy-s25-ultra-share-image.jpg",officialUrl:"https://www.samsung.com/vn/smartphones/galaxy-s25-ultra/",badge:"Cao cấp"},
  {id:15,category:"audio",name:"Apple AirPods 4",meta:"Tai nghe · Spatial Audio · USB-C",price:3490000,old:3990000,image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=700&q=80",officialUrl:"https://www.apple.com/airpods-4/",badge:""},
  {id:16,category:"accessory",name:"iPad Air M3",meta:"Máy tính bảng · 11 inch · Wi-Fi · 128GB",price:16990000,old:17990000,image:"https://www.apple.com/assets-www/en_WW/ipad/og/ipad_og_fc131c68c.png",officialUrl:"https://www.apple.com/ipad-air/",badge:"Bán chạy"},
  {id:17,category:"laptop",name:"Dell XPS 13",meta:"Laptop · Snapdragon X Elite · 16GB / 512GB",price:32990000,old:34990000,image:"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=700&q=80",officialUrl:"https://www.dell.com/en-us/shop/dell-laptops/xps-13-laptop/spd/xps-13-9350-intel-laptop",badge:""},
  {id:18,category:"phone",name:"Google Pixel 9",meta:"Điện thoại · 128GB · Camera AI",price:18990000,old:20990000,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",officialUrl:"https://store.google.com/product/pixel_9",badge:""},
  {id:19,category:"audio",name:"Sonos Era 100",meta:"Loa thông minh · Wi-Fi · Âm thanh stereo",price:5490000,old:5990000,image:"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=700&q=80",officialUrl:"https://www.sonos.com/en-us/shop/era-100",badge:""},
  {id:20,category:"accessory",name:"Samsung Galaxy Watch7",meta:"Đồng hồ thông minh · Bluetooth · 44mm",price:6990000,old:7990000,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",officialUrl:"https://www.samsung.com/vn/watches/galaxy-watch/galaxy-watch7/",badge:""},
];
let currentCategory="all", visibleCount=4, cart=[];
const money = n => new Intl.NumberFormat("vi-VN").format(n)+"đ";
const grid=document.querySelector("#productGrid");
const brands = {
  laptop: { "MacBook Air M4":"Apple", "ASUS Zenbook 14 OLED":"ASUS", "Lenovo IdeaPad Slim 5":"Lenovo", "Mac mini M4":"Apple", "Dell XPS 13":"Dell" },
  phone: { "iPhone 16":"Apple", "Samsung Galaxy S25":"Samsung", "Google Pixel 9":"Google", "Samsung Galaxy S25 Ultra":"Samsung" },
  audio: { "Sony WH-1000XM5":"Sony", "Apple AirPods Pro 2":"Apple", "Apple AirPods 4":"Apple", "Sonos Era 100":"Sonos" },
  accessory: { "Logitech MX Keys Mini":"Logitech", "Anker 737 Power Bank":"Anker", "Apple Watch SE":"Apple", "iPad Air M3":"Apple", "Samsung Galaxy Watch7":"Samsung" }
};
const productSchema = {
  "@context":"https://schema.org",
  "@type":"ItemList",
  "name":"Danh sách sản phẩm NovaTech",
  "numberOfItems":products.length,
  "itemListElement":products.map((p,index)=>({
    "@type":"ListItem",
    "position":index+1,
    "url":"https://tamz11.github.io/novotech/#products",
    "item":{
      "@type":"Product",
      "name":p.name,
      "image":p.image,
      "description":p.meta,
      "category":p.category,
      "sku":`novatech-${p.id}`,
      "brand":{"@type":"Brand","name":brands[p.category]?.[p.name] || p.name.split(" ")[0]},
      "offers":{
        "@type":"Offer",
        "priceCurrency":"VND",
        "price":String(p.price),
        "priceValidUntil":"2026-12-31",
        "availability":"https://schema.org/InStock",
        "url":"https://tamz11.github.io/novotech/#products",
        "seller":{"@type":"Organization","name":"NovaTech","url":"https://tamz11.github.io/novotech/"},
        "shippingDetails":{"@type":"OfferShippingDetails","shippingRate":{"@type":"MonetaryAmount","value":"0","currency":"VND"},"shippingDestination":{"@type":"DefinedRegion","addressCountry":"VN"},"deliveryTime":{"@type":"ShippingDeliveryTime","handlingTime":{"@type":"QuantitativeValue","minValue":0,"maxValue":1,"unitCode":"DAY"},"transitTime":{"@type":"QuantitativeValue","minValue":1,"maxValue":3,"unitCode":"DAY"}}},
        "hasMerchantReturnPolicy":{"@type":"MerchantReturnPolicy","applicableCountry":"VN","returnPolicyCategory":"https://schema.org/MerchantReturnFiniteReturnWindow","merchantReturnDays":7,"returnMethod":"https://schema.org/ReturnByMail","returnFees":"https://schema.org/FreeReturn"}
      }
    }
  }))
};
const productSchemaScript=document.createElement("script");
productSchemaScript.type="application/ld+json";
productSchemaScript.textContent=JSON.stringify(productSchema);
document.head.appendChild(productSchemaScript);
function renderProducts(){
  let list=products.filter(p=>currentCategory==="all"||p.category===currentCategory);
  const sort=document.querySelector(".sort-btn.active")?.dataset.sort;
  if(sort==="price") list=[...list].sort((a,b)=>a.price-b.price);
  grid.innerHTML=list.slice(0,visibleCount).map(p=>`<article class="product-card"><div class="product-image">${p.badge?`<span class="product-badge">${p.badge}</span>`:""}<img src="${p.image}" alt="${p.name}" loading="lazy"><button class="quick-add" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ">+</button></div><div class="product-info"><small>${p.meta}</small><h3>${p.name}</h3><div class="product-price">${money(p.price)} <del>${money(p.old)}</del></div>${p.officialUrl?`<a class="official-link" href="${p.officialUrl}" target="_blank" rel="noopener">Xem trên website hãng ↗</a>`:""}</div></article>`).join("");
  document.querySelector("#showMore").style.display=list.length>visibleCount?"inline-flex":"none";
}
function updateCart(){
  document.querySelector("#cartCount").textContent=cart.length;
  document.querySelector("#drawerCount").textContent=cart.length;
  document.querySelector("#cartTotal").textContent=money(cart.reduce((sum,id)=>sum+products.find(p=>p.id===id).price,0));
  const items=document.querySelector("#cartItems");
  items.innerHTML=cart.length?cart.map(id=>{const p=products.find(x=>x.id===id);return `<div class="cart-line"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)}</p></div></div>`}).join(""):`<div class="empty-cart">Giỏ hàng của bạn đang trống.<br /><a href="#products" id="browseProducts">Khám phá sản phẩm →</a></div>`;
}
function toggleCart(open){document.querySelector("#cartDrawer").classList.toggle("open",open);document.querySelector("#overlay").classList.toggle("show",open)}
renderProducts(); updateCart();
document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  if(add){cart.push(Number(add.dataset.add));updateCart();document.querySelector("#toast").classList.add("show");setTimeout(()=>document.querySelector("#toast").classList.remove("show"),1800)}
  const cat=e.target.closest("[data-category]");
  if(cat){currentCategory=cat.dataset.category;visibleCount=4;document.querySelectorAll(".category-card").forEach(x=>x.classList.toggle("active",x===cat));renderProducts()}
  const sort=e.target.closest("[data-sort]");
  if(sort){document.querySelectorAll(".sort-btn").forEach(x=>x.classList.toggle("active",x===sort));renderProducts()}
  if(e.target.closest("#showMore")){visibleCount=products.length;renderProducts()}
  if(e.target.closest("#cartToggle"))toggleCart(true);
  if(e.target.closest("#closeCart")||e.target.id==="overlay"||e.target.closest("#browseProducts"))toggleCart(false);
  if(e.target.closest("#menuToggle"))document.querySelector("#mobileNav").classList.toggle("show");
  if(e.target.closest("#searchToggle"))document.querySelector("#searchPanel").classList.toggle("show");
});
document.querySelector("#searchInput").addEventListener("input",e=>{
  const q=e.target.value.toLowerCase().trim();
  document.querySelectorAll(".product-card").forEach(card=>card.style.display=card.textContent.toLowerCase().includes(q)?"":"none");
});
