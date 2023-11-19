
    let dropdownIcon = document.getElementById("dropdownMenuToggleIcon");
  let backdrop = document.getElementById("backdrop");
  let defaultMenu = document.getElementById("rightNavSect");
  let smNavBar = document.getElementById("smallScreenNavBar");
  let smNavCloseBtn = document.getElementById("closeSmNav")
  
  dropdownIcon.addEventListener("click", () => {
    backdrop.classList.remove("hidden");
    smNavBar.classList.remove("hidden")
    defaultMenu.classList.add("hidden");
  });
  
  
  smNavCloseBtn.addEventListener("click", ()=>{
      backdrop.classList.add("hidden");
      smNavBar.classList.add("hidden")
  })
  