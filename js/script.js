// Changing Background of Login Page
var i = 0;

function change() {
  var background = document.getElementById("login-background-design");
  var heading = document.getElementById("login-heading");
  var img = document.getElementById("hero-img");

  var colors = [
    "rgba(89, 204, 214, 0.2)",
    "rgba(254, 223, 92, 0.2)",
    "rgba(111, 122, 248, 0.2)",
  ];

  var headings = [
    "Security & Safety For All Information",
    "Professional & Custom Invoices",
    "Business Inventory Tracking",
  ];

  background.style.backgroundColor = colors[i];
  img.src = `../img/hero${i + 1}.png`;
  heading.innerHTML = headings[i];

  i = (i + 1) % colors.length;
}

setInterval(change, 1000);

const linkItems = document.querySelectorAll(".link-item");

linkItems.forEach((linkItem, index) => {
  linkItem.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    linkItem.classList.add("active");

    const indicator = document.querySelector(".indicator");

    indicator.style.left = `${index * 95 + 48}px`;
  });
});
