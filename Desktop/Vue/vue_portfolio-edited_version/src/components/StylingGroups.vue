<style>
/* NOTE: styles defined in app.vue are 'global-styles' and can be called w/out being redefined in the views and components */
/* NOTE: styles defined in a particular view or component cannot be 'called' globally */

/* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
/* Animation explained: 
    if it is 2 colors - starts w/ 2nd color, blends into 1st color and blends back into 2nd colors
    if it is 3 colors - starts w/ a blend of the last 2 colors, blends into the first color and ends as a blend of the last 2 colors */

    .Body{
        background: linear-gradient(-45deg, #654A33, #EDB5A2);
        background-size: 200% 200%;
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
/* NavBar Styling STARTS HERE */
/* below is done/used */
.navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

/* below is done/used */
.nav-item{
    margin-top: 0.5%;
}

/* below is done/used */
nav a {
  font-weight: bold;
  color: #4A351D;
  padding: 20px;
}

/* below is done/used */
nav a.router-link-exact-active {
  color: #2c3e50;
}

/* below is done/used */
/* nav {
  padding: 30px;
} */

/* below is done/used */
.logoImg{
        max-height: 40px;
        margin-top: 20%;
}

/* NavBar Styling ENDS HERE */


/* Text Styling STARTS HERE*/
.brownTxt{
    color: #4A351D;
    font-weight: 700;
    /* This style is NOT necessary because brown = automatic txt color in the #app id in the App.view */
}

.blueTxt{
    color: #2c3e50;
}

.boldTxt{
font-weight: 700;
}

.brownTxtShadow{
      text-shadow: 1px 1px 8px #4A351D;
      /* 1st number = x offset. 2nd number = y offset. 3rd number = how blurry*/
} 

.txtBorder{
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 45px;
    background-color: #F5E9DB;
}

.welcomeTxt{
    background-color: #EDB5A2;
    border: solid 2px #6C666B;
    width: fit-content;
    margin-inline: auto;
    border-radius:20px ;
    padding: 10px;
    box-shadow: 0px 0px 20px 10px #6C666B;
}
/* Text Styling ENDS HERE*/

/* Button Styling STARTS HERE */
.projectBtn{
      /* The btn had the same styling as the desc but i needed them separate so I'm making the btn have its own styling */
      margin-bottom: 15px;
      /* NOTE: btn only had a margin bottom */
      
}

.btnStyling{ 
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 8px #2c3e50;
    height: 70px;
    width: 100px;
}

.arrowBtns{
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    max-height: 100px;
    width: 100px;
    margin-top: 25%;
}

.btnRounding{
            border: 3px solid #4A351D;
            border-radius:10px;
            background-color: #F1CFBF;
}

/* Button Styling ENDS HERE */

/* Background styling STARTS HERE */
.brownBg{
    background-color: #4A351D;
    margin: 3px;
}

.mainPeachBg{
    background-color: #EDB5A2;
}
body{
  background: #ffe7df;
}
/* Background styling ENDS HERE */


/* Image Styling STARTS HERE */
.logoImg{
        max-height: 40px;
        margin-top: 20%;
}
.homePgImg{
    min-width: 195px;
    max-width: 290px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}
.aboutPgImg{
    min-width: 195px;
    max-width: 290px;
    max-height: 300px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}

.img1{
    max-height: 200px;
    max-width: 100px;
    align-content: center;
    display: flex;
    justify-content: center;
    margin: auto;
}

.carouselImg {
      max-height: 300px;
      align-items: center;
}
.skillImg{
    width: 100px;
    height: 115px;
}

/* NOTE: projectDivImg is perfect as is */
.projectDivImg{
  max-width: 228px;
  /* reducing the max-width fr 250px to 228 makes the image fit the projectDiv */
  margin-bottom: 15px;
}
/* NOTE: .loopDiv is the parent holding EACH INDIVIDUAL PROJECT. projectDiv is holding the actual projects. */

/* Image Styling ENDS HERE */

/* Icon Styling STARTS HERE */
.iconStyling{
  color: #2c3e50;
  font-size: 50px;
  box-shadow: 0px 0px 30px 10px #2c3e50;
}
/* Icon Styling ENDS HERE */


</style>