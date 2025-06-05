// 1. Select the anchor tag
const anchor = document.querySelector("a");
console.log(anchor);

// 2. Use getAttribute(attrName) to check the attribute.
console.log(anchor.getAttribute("href"));

// 3. Select a-two & set "href" attribute
const a_two = document.querySelector(".a-two");

// setAttribute(attrName, value)
a_two.setAttribute("href", "https://www.google.com");
a_two.innerHTML = "Google";

console.log(a_two.getAttribute("href"));
