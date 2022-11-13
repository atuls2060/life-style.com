const navi = () => {
    return `
<div id="nav_top">
  <div class="dropdown">
      <button class="dropbtn"> 
        Support Center
        <i class="fa-solid fa-caret-down" id="search_box_down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#"><i class="fa-regular fa-comment-dots"> L I V E  C H A T</i></a>
        <a href="#"><i class="fa-solid fa-ticket"> T i c k e t</i></a>
        <a href="#"><i class="fa-solid fa-question"> H e l p  C e n t e r</i></a>
      </div>
      </div>
  <div class="dropdown">
      <button class="dropbtn"> 
        Language
        <i class="fa-solid fa-caret-down" id="search_box_down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">English</a>
        <a href="#">Italiano</a>
        <a href="#">Deutsch</a>
        <a href="#">Español</a>
        <a href="#">Français</a>
        <a href="#">Português</a>
        <a href="#">Slovenčina</a>
        <a href="#">Ελληνικά</a>
        <a href="#">עברית</a>
        <a href="#">Polskie</a>
      </div>
    </div>
      
</div>

<div id="nav_mid">
    <img src="./images/logo.png" alt="Company Logo">
    <div>
      <div class="dropdown-2">
      <button class="dropbtn-2"> 
        All Categories
        <i class="fa-solid fa-caret-down" id="search_box_down"></i>
      </button>
      <div class="dropdown-content-2">
        <a href="#">Local Warehouses</a>
        <a href="#">Sports & Outdoors</a>
        <a href="#">Smart Home & Garden</a>
        <a href="#">Consumer Electronics</a>
        <a href="#">Generators & Portable Power</a>
        <a href="#">Computers Tablets & Accessories</a>
        <a href="#">TV Boxes & Mini PCs</a>
        <a href="#">Toys & Hobbies</a>
        <a href="#">Phones & Accessories</a>
        <a href="#">Automobiles & Motorcycles</a>
        <a href="#">Security Systems</a>
        <a href="#">Wearable Devices</a>
      </div>
      </div>
      <input type="text" id="search_box" placeholder="Search by keywords">
      <i class="fa-solid fa-magnifying-glass fa-2x"></i>
    </div>
    <div>
      <div class="dropdown-3">
      <button class="dropbtn-3">
        <i class="fa-solid fa-user fa-2x"></i>
        <p>Sign In</p>
      </button>
      <div class="dropdown-content-3">
        <p class="welcome">Welcome to The Gadget Factory</p>
        <div>
          <button><a href="./create_account.html">Join</a></button>
         <a href="./login.html"> <button>Sign In </button></a>
        </div>
      </div>
    </div>
    </div>
    <span id="cart">
      <i class="fa-solid fa-cart-shopping fa-2x"></i>
      <p id="cart_count">0</p>
    </span>
</div>

<div class="nav_bottom">
    <div class="dropdown">
      <button class="dropbtn"> 
        <i class="fa-solid fa-bars" id="hamburg"></i>
        <span>Categories</span>
      </button>
      <div class="dropdown-content">
        <a href="#">Local Warehouses</a>
        <a href="#">Sports & Outdoors</a>
        <a href="#">Smart Home & Garden</a>
        <a href="#">Consumer Electronics</a>
        <a href="#">Generators & Portable Power</a>
        <a href="#">Computers Tablets & Accessories</a>
        <a href="#">TV Boxes & Mini PCs</a>
        <a href="#">Toys & Hobbies</a>
        <a href="#">Phones & Accessories</a>
        <a href="#">Automobiles & Motorcycles</a>
        <a href="#">Security Systems</a>
        <a href="#">Wearable Devices</a>
      </div>
    </div>  
    <a href="">New</a>
    <a href="">Bestselling</a>
    <a href="">Brand</a>
    <a href="">Clearance</a>
    <a href="">Deals</a>
    <a href="">Coupon</a>
    <a href="">App Only</a>
    <img src="./images/whatgeeks.png" class="beat_logo" alt="offer" href=""> 
</div>`
}

export default navi