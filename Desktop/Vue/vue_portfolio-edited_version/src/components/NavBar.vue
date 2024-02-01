<template>
    <nav class="navbar navbar-expand-lg navbar-light Body">
        <!-- NOTE: navbar-light is the burger icon -->
    <a class="navbar-brand" href="/">
        <img class="img-fluid rounded-circle logoImg" src="https://i.ibb.co/BnLhxLd/Screenshot-2024-01-10-094142.png" 
        alt="logoImage">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ">
          <li class="nav-item ">
              <router-link to="/">Home</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/about">About</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/resume">Resume</router-link>
          </li>
          <li class="nav-item ">
              <router-link to="/projects">Projects</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/testimonials">Testimonials</router-link> 
          </li>
          <li class="nav-item ">
              <router-link to="/contact">Contact</router-link> 
          </li>
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
<style>
nav a {
  font-weight: bold;
  color: #4A351D;
  padding: 20px;
  /* This is the padding that spaces out the individual navItems in the larger screens */
  /* border: dotted; */
  /* The border above is to mark the navbar items including the logo */
}
/* Above is the text styling for the navItems */

nav a.router-link-exact-active {
  color: #2c3e50;
}
/* Above is the styling for the active link */

nav {
  /* border: solid; */
  /* background-color: bisque; */
  /* Bisque is a nice colour and I'll use it some other time IA */
  background-color: #EDB5A2;
  box-shadow: 0px 0px 20px 10px #6C666B;
  margin-bottom: 100px;
}
/* The above styling holds the entire navBar */

.nav-item{
    margin-top: 0.5%;
}
/* The above margin makes a slight gap btwn the nav texts when the navBar is in 300px phone*/

.navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
/* The above styling spaces the navtxts evenly in the larger screens */

.logoImg{
    max-height: 50px;
    width: 70px;
    margin-top: 5%;
    background-color: #654A33;
    padding: 3px;
}
/* The above styling makes the logoImg smaller and the margin-top makes it vertically inline w/ the navTxt */

/* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
/* Animation explained: 
    if it is 2 colors - starts w/ 2nd color, blends into 1st color and blends back into 2nd colors
    if it is 3 colors - starts w/ a blend of the last 2 colors, blends into the first color and ends as a blend of the last 2 colors */

.Body{
    background: linear-gradient(-45deg, #654A33, #EDB5A2);
    background-size: 200% 20%;
    animation: gradient 5s ease 1;
    height: fit-content;
}
@keyframes gradient{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
}

/* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) ends here  */

/* The styling below changes the color of the 3 lines in the hamburger symbol.
Process: choose the color in hex form. convert hex to hsl. HSL gives 3 numbers. use the first number as the angle in hue-rotate. 
NOTE: white = 0deg (no space btwn number and deg) but brown = 27.6 deg (note the space when it's a non-zero number) */
.navbar-toggler-icon{
    filter: brightness(0) invert(1) hue-rotate(27.6 deg);
}

.navbar-toggler{
    border: solid 3px;
    border-radius: 70px;
    border-color: #654A33 !important;
    /* adding the !important is what allowed the color to change */
    width: 70px;
    height: 50px;
}

/* 
The styling below erases the burger symbol when it's removed from the class but it doesn't actually style the burger icon
.navbar-light{
    border: solid;
    background-color: aqua;
    color: aqua;
} */

/* The styling below doesn't style the burger symbol the way I wanted */
/* .aqua{
    background-color: aqua;
    color: red;
    border: solid aqua;
    padding: 10px;
} */

</style>

<!-- 
    NavBar image link
    1)https://i.ibb.co/BnLhxLd/Screenshot-2024-01-10-094142.png
 -->