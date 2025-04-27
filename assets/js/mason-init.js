let mason;
let projects = document.getElementById("projects");
let options = {
  itemSelector: ".project",
  transitionDuration: "0.3s",
  stagger: 0,
};
imagesLoaded(projects, (_) => {
  mason = new Masonry(projects, options);
});
