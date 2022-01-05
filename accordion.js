export default function accordion($accordionItem) {
  const d = document;

  d.addEventListener("click", (e) => {
    const itemsList = d.querySelectorAll($accordionItem);
    itemsList.forEach((el) => {
      if (e.target === el.children[0] || e.target === el.children[1]) {
        console.log(el);
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        } else {
          itemsList.forEach((el) => {
            el.classList.remove("active");
          });
          el.classList.add("active");
        }
      }
    });
  });
}
