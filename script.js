let listClass = document.querySelector(".header-ul");

function showList() {
  listClass.className = "list-for-mobile";
}
function closeList() {
  let Mblist = document.querySelector(".list-for-mobile");

  console.log(Mblist);
  Mblist.className = "flex list-style-none header-ul";
  console.log(Mblist.className);
}
