$(document).ready(function () {
  let sidenavsElems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenavsElems);
  let modelsElems = document.querySelectorAll(".modal");
  M.Modal.init(modelsElems);
});
