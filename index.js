const gallery = document.getElementById("gallery");
const tag = document.getElementById("placeholder");
const element = document.getElementById("item-0");
const cardWidth = element.offsetWidth;
let lastIndex = 0;
let activeIndex = 0;

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
  if (gallery.scrollLeft % cardWidth === 0) {
    lastIndex = activeIndex;
    activeIndex = gallery.scrollLeft / cardWidth;
    console.log(lastIndex, activeIndex);
    const activeItem = document.getElementById(`item-${activeIndex}`);
    const lastItem = document.getElementById(`item-${lastIndex}`);
    activeItem.classList.add("border-2", "border-indigo-600");
    lastItem.classList.remove("border-2", "border-indigo-600");
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
