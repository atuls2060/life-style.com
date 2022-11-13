import navi from "../components/navi.js"
import footer from "../components/foot.js"

let nav_div = document.getElementById("navbar");
let footer_div = document.getElementById("footer");

nav_div.innerHTML = navi();
footer_div.innerHTML = footer();