export function goToContact(e, section) {
  e.preventDefault();

  let el = document.getElementById(section);
  console.log(el)
  el && window.scrollTo({
    top: el.offsetTop - 50,
    left: 0,
    behavior: "smooth",
  });
}