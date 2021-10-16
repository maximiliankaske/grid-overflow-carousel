const gallery = document.getElementById("gallery");
const wrapper = document.getElementById("gallery-wrapper");
console.log(wrapper.childNodes);
const tag = document.getElementById("placeholder");
const element = document.getElementById("t");
const cardWidth = wrapper.childNodes[1].offsetWidth;

let lastIndex = 0;
let activeIndex = 0;

// TODO: inject onclick to `item-${number}` elements

function getPlaceholderWidth() {
  return (
    (window.innerWidth -
      gallery.clientWidth +
      (gallery.clientWidth - cardWidth)) /
    2
  );
}

function setPlaceholderWidth() {
  tag.setAttribute("style", `width: ${getPlaceholderWidth()}px;`);
}

function getScrollX() {
  console.log(cardWidth, gallery.scrollLeft);
  if (gallery.scrollLeft % cardWidth === 0) {
    lastIndex = activeIndex;
    activeIndex = gallery.scrollLeft / cardWidth;
    const activeItem = document.getElementById(`item-${activeIndex}`);
    const lastItem = document.getElementById(`item-${lastIndex}`);
    lastItem.classList.remove("border-2", "border-indigo-600");
    activeItem.classList.add("border-2", "border-indigo-600");
  }
}

function scrollToItem(item) {
  gallery.scrollTo({ left: item * cardWidth, behavior: "smooth" });
}

function scrollToPrev() {
  scrollToItem(activeIndex - 1);
}

function scrollToNext() {
  scrollToItem(activeIndex + 1);
}

window.addEventListener("resize", setPlaceholderWidth);
gallery.addEventListener("scroll", getScrollX);
setPlaceholderWidth();
// add border on load
getScrollX();
