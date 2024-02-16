function myFunction() {
    document.getElementById("mydrop").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
      var dropdowns = document.getElementsByClassName("shift");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

//   let age = window.prompt("Enter your age");

// if(age < 18){
//   window.alert("You must be 18+ to visit this site");
//   // window.close();
//   window.prompt("Enter your age");

// }

// else if (age >=18){
//   window.alert("You Are Welcome")
// } 
// else if (age = String){
//   window.alert(`This is not a number`)
//   window.prompt("Enter your age");
//   window.alert("You Are Welcome")
// }

// else if(age > null){
// window.alert("insert you age!");
// window.prompt("Enter your age");
// }
