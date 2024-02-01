<style>
/* STYLING FROM FOOTER.VUE (THERE ARE ..4.. IN TOTAL) STARTS HERE*/
/* 1 */
.Body{
        background: linear-gradient(-45deg, #EDB5A2 , #F1CFBF);
        background-size: 4000% 400%;
        animation: gradient 15s ease 1;
        height: fit-content;
    }

/* 2 */
/* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
/* Animation explained: 
    if it is 2 colors - starts w/ 2nd color, blends into 1st color and blends back into 2nd colors
    if it is 3 colors - starts w/ a blend of the last 2 colors, blends into the first color and ends as a blend of the last 2 colors */
      
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

/* 3 */
.shadow{
    color: #4A351D ;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    }

/* 4 */
.footer{
    position: sticky;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
}

/* list of custom-made styles used @ bootstrap (ie, by the class) = footer, shadow, Body */

/* STYLING FROM FOOTER.VUE (THERE ARE ..4.. IN TOTAL) ENDS HERE*/

/* STYLING FROM NAVBAR.VUE (THERE ARE ..6.. IN TOTAL) STARTS HERE*/
/* 1*/
/*  NOTE - this is more correct than the one from the footer.vue since the 2 parts aren't split  */
      /* Animation (from the following open-source https://codepen.io/P1N2O/pen/pyBNzX) starts here  */
      .Body{
        background: linear-gradient(-45deg, #F1CFBF, #EDB5A2);
        background-size: 4000% 400%;
        animation: gradient 15s ease 1;
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

/* 2 */
.brownBg{
        background-color: #4A351D;
        margin: 3px;
        }

/* 3 */
.shadow{
    color: #4A351D ;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    }

/* 4 */
.logoImg{
        max-height: 40px;
        margin-top: 20%;
}

/* 5 */
.navbar-nav{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

/* 6 */
.nav-item{
        margin-top: 0.5%;
    }

/* list of custom-made styles used @ bootstrap (ie, by the class) =  Body, shadow, logoImg */
/* STYLING FROM NAVBAR.VUE (THERE ARE ..6.. IN TOTAL) ENDS HERE*/


/* STYLING FROM TESTIMONIALSVIEW.VUE (THERE ARE ..6.. IN TOTAL) STARTS HERE*/
/* 1 */
.aboutPgImg{
    min-width: 195px;
    max-width: 290px;
    max-height: 300px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}

/* 2 */
.img1{
    max-height: 200px;
    max-width: 100px;
    align-content: center;
    display: flex;
    justify-content: center;
    margin: auto;
}

/* 3 */
#testimonialsCarousel{
    max-width: 400px;
    margin: 0 auto;
  }

/* 4 */
.carouselImg {
      max-height: 300px;
      align-items: center;
}

/* 5 */
.arrowBtns{
    max-height: 100px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    margin-top: 25%;
    width: 100px;
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
}

/* 6 */
.brownTxt{
    color: #4A351D;
  }

/* list of custom-made styles used @ bootstrap (ie, by the class) = welcome, carouselImg, balthazar, aboutPgBorder (actually an ID), arrowBtns, brownTxt  */

/* STYLING FROM TESTIMONIALSVIEW.VUE (THERE ARE ..6.. IN TOTAL) ENDS HERE*/


/* STYLING FROM RESUMEVIEW.VUE (THERE ARE ..12.. IN TOTAL) STARTS HERE*/
/* 1 */
.mainBrownHeading{
    width: 250px;
    background-color: #F1CFBF;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    margin-inline: auto;
    margin-top: 70px;
    margin-bottom: 50px;
  }

/* 2 */
.educationSummary{
    margin-bottom: 0px;
  }

/* 3 */
.educationCol{
    max-width: 150px;
    background-color: #F1CFBF;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
  }

/* 4 */
.boldTxt{
    font-weight: 700;
  }

/* 5 */
.workExperienceLoop{
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
  }

/* 6 */
.workExperienceLoopItem{
    display: flex;
    align-items: center;
    height: 220px;
  }

/* 7 */
.itemMargin{
    margin-top: 10px;
  }

/* 8 */
.workExpDescr{
    border-radius: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    background-color: #F1CFBF;
  }

/* 9 */
.skillImg{
    width: 100px;
    height: 115px;
}

/* 10 */
.skillItemDiv{
    max-width: 132px;
    height: 220px;
    margin-top: 20px;
    box-shadow: 0px 0px 30px 10px #4A351D ;
    border-radius: 20px;
  }

/* 11 */
.skillMastery{
    margin-bottom: 0px;
    margin-top: 10px;
  }

/* 12 */
.noMargin{
    margin-top: 0px;
    margin-bottom: 0px;
  }

/* list of custom-made styles used @ bootstrap (ie, by the class) = welcome, mainDiv, mainBrownHeading, educationCol, educationSummary, boldTxt, itemMargin, workExperienceLoop, workExperienceLoopItem, workExpDescr, skillItem, skillItemDiv, skillImg, skillMastery,  */
/* STYLING FROM RESUMESVIEW.VUE (THERE ARE ..12.. IN TOTAL) ENDS HERE*/


/* STYLING FROM PROJECTSVIEW.VUE (THERE ARE ..9.. IN TOTAL) STARTS HERE*/
/* 1 */
.brownTxtShadow{
      text-shadow: 1px 1px 8px #4A351D;
      /* 1st number = x offset. 2nd number = y offset. 3rd number = how blurry*/
    }

/* 2 */
.brownBoxShadow{
      box-shadow: 0px 0px 30px 10px #4A351D;
      border-radius: 20px;  
    }

/* 3 */
/* NOTE: projectDivImg is perfect as is */
.projectDivImg{
  max-width: 228px;
  /* reducing the max-width fr 250px to 228 makes the image fit the projectDiv */
  margin-bottom: 15px;
}
/* NOTE: .loopDiv is the parent holding EACH INDIVIDUAL PROJECT. projectDiv is holding the actual projects. */

/* 4 */
.loopDiv{
      max-width: 250px;
      /* 260px is the biggest the max-width can get to have 5 projects in the first row */
      margin-inline: 23px;
      /* NOTE: Removing the margin-inline still left a margin at the start due to the margin-inline of the projectDiv */
      /* This margin-inline also adds space between the projects */
      /* NOTE: including this margin-inline applied 23px margin to the left AND right but it was unequal because the row div has a margin at the end somehow */
      } 

/* 5 */
.projectDiv{
      width: 250px;
      margin-top: 50px;
      /* margin-inline: 50px; */
      /* NOTE: removing this div removed all margin on the start */
      /* NOTE: including this margin-inline ONLY adds a margin to the start */
    }

/* 6 */
.projectRowMargin{
      max-width: 1505px;
      /* NOTE: appling a max-width of 1505px makes the div fit the page w/out stretching the navBar and footer */
      margin-inline: 2px;
      /* NOTE: adding a margin in-line centers the row in the page at all breakpoints (300px, 700px, 1000px, 1500px)*/
      /* NOTE: adding margin-left = 25px centers the 700px view */
    }

/* 7 */
.projectDesc{
      height: 250px;
      margin-bottom: 15px;
      /* height: 250px; */
      /* NOTE: I thought making the desc have a fixed width would align my buttons but I need both the heading AND the desc to have a fixed width */
    }

/* 8 */
.projectName{
      height:165px;
    }

/* 9 */
.projectBtn{
      /* The btn had the same styling as the desc but i needed them separate so I'm making the btn have its own styling */
      margin-bottom: 15px;
      /* NOTE: btn only had a margin bottom */
      
}


/* OLD STYLING START HERE */
       /* .projectDiv{
      width: 250px;
      margin-top: 50px;
      margin-inline: 50px;
    }
    
    .projectDesc{
      margin-bottom: 15px;
    }
    .projectRowMargin{
      max-width: 1000px;
    }
    */
  
      /* Below is the original styling that I can revert to if the new manipulations do not work */
    /* @media (max-width: 1250px){
      .loopDiv{
        max-width: 190px;
        margin-inline: 30px;
        display: flex;
        justify-content: ;
      }
      .projectDiv{
        width: 250px;
        margin-top: 50px;
        margin-inline: 100px;
  
      }
    } */
  
    /* The following styling works flawlessly @1000px and 700px and only needs a little tweaking at 300px
      .projectDiv{
      width: 250px;
      margin-top: 50px;
      margin-inline: 50px;
    }
    .projectDivImg{
      max-width: 250px;
      margin-bottom: 15px;
    }
    .projectDesc{
      margin-bottom: 15px;
    }
    .projectRowMargin{
      max-width: 1000px;
    }
    .loopDiv{
      max-width: 250px;
      margin-inline: 23px;
      }
    */
/* OLD STYLING ENDS HERE */


/* list of custom-made styles used @ bootstrap (ie, by the class) = firstDivsChild, welcome, brownTxtShadow, projectRowMargin, loopDiv, brownBoxShadow, projectDiv, projectName, projectDivImg, projectDesc, projectBtn, btnStyling*/
/* STYLING FROM PROJECTSVIEW.VUE (THERE ARE ..9.. IN TOTAL) ENDS HERE*/

/* STYLING FROM HOMEVIEW.VUE (THERE ARE ..10.. IN TOTAL) STARTS HERE*/
/* 1 */
.welcome{
    background-color: #F5E9DB;
    width: fit-content;
    margin-inline: auto;
    border-radius:20px ;
    padding: 3px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
}

/* 2 */
/* .mainSquares{
    display: flex;
    justify-content: center;
  } */

/* 3 */
.homePgImg{
    min-width: 195px;
    max-width: 290px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}

/* 4 */
.blueTxt{
    color: #2c3e50;
  }

/* 5 */
.bold{
    font-weight: 700;
  }

/* 6 */
.txtMaxWidth{
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 45px;
    background-color: #F5E9DB;
  }

/* 7 */
.brownTxt{
    color: #4A351D;
    font-weight: 700;
  }

/* 8 */
.btnStyling{ 
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 8px #2c3e50;
    height: 70px;
    width: 100px;
}

/* 9 */
.rowWidth{
    max-width: 100%;
  }

/* 10 */
.firstDiv{
    display: flex;
    justify-content: center;
  }

/* list of custom-made styles used @ bootstrap (ie, by the class) = firstDiv, firstDivsChild, welcome, rowWidth, homePgImg, txtMaxWidth, blueTxt, bold, btnStyling, brownTxt */
/* STYLING FROM HOMEVIEW.VUE (THERE ARE ..10.. IN TOTAL) ENDS HERE*/


/* STYLING FROM CONTACTVIEW.VUE (THERE ARE ..6.. IN TOTAL) STARTS HERE*/
/* 1 */
.iconStyling{
  color: #2c3e50;
  font-size: 50px;
  box-shadow: 0px 0px 30px 10px #2c3e50;
}

/* 2 */
.bottomRowMargin{
            margin-bottom: 100px;
            margin-top: 50px;
            margin-inline-start: 20%;
        }

/* 3 */
.inputWidth{
            width: 100%;
            background-color: #F1CFBF;
            border: 3px solid #4A351D;
            border-radius: 8px;
        }

/* 4 */
.iconSpacing{
            margin-top: 100px;
            margin-inline-start: 20%;
        }

/* 5 */
.noBorder{
            border: none;
        }

/* 6 */
.btnRounding{
            border: 3px solid #4A351D;
            border-radius:10px;
            background-color: #F1CFBF;
}

/* list of custom-made styles used @ bootstrap (ie, by the class) = Body, welcome, btnRounding, noBorder, iconStyling, btnHeight, inputWidth, productBorder, fixColumnWidth, boldText, iconSpacing, bottomRowMargin, iconStyling*/
/* STYLING FROM CONTACTVIEW.VUE (THERE ARE ..6.. IN TOTAL) ENDS HERE*/

/* STYLING FROM ABOUTVIEW.VUE (THERE ARE ..10.. IN TOTAL) STARTS HERE*/
/* 1 */
.welcome{
    background-color: #F5E9DB;
    width: fit-content;
    margin-inline: auto;
    border-radius:20px ;
    padding: 3px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
  }

/* 2 */
/* .mainSquares{
    display: flex;
    justify-content: center;
  } */

/* 3 */
.aboutPgImg{
    min-width: 195px;
    max-width: 290px;
    max-height: 300px;
    background-color: #2c3e50;
    padding: 5px;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 20px;
}

/* 4 */
.blueTxt{
    color: #2c3e50;
  }

/* 5 */
.bold{
    font-weight: 700;
  }

/* 6 */
.txtMaxWidth{
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 45px;
    background-color: #F5E9DB;
  }

/* 7 */
.brownTxt{
    color: #4A351D;
    font-weight: 700;
  }

/* 8 */
.btnStyling{ 
    background-color: #F5E9DB;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 8px #2c3e50;
    height: 50px;
    width: 100px;
}

/* 9 */
.rowWidth{
    max-width: 100%;
  }

/* 10 */
.firstDiv{
    display: flex;
    justify-content: center;
  }
/* list of custom-made styles used @ bootstrap (ie, by the class) = firstDiv, firstDivsChild, welcome, bold, aboutPgImg,  */
/* STYLING FROM ABOUTVIEW.VUE (THERE ARE ..10.. IN TOTAL) ENDS HERE*/


/* STYLING FROM APPVIEW.VUE (THERE ARE ..5.. IN TOTAL) STARTS HERE*/
/* 1 */
body{
  background-color: #EDB5A2;
}

/* 2 */

/* LIST OF COLORS
  main, darker peach #EDB5A2;
  white w/ 1 shade peach tint #FCF3F0
  white w/ 2 shade peach tint #F9E6E0
  The nice blue = #2c3e50
  The nice brown = #4A351D
  Blue btwn nice blue and main peach = #6C666B
  Softer brown = #654A33
  Greyish accent color = #E6D9CB
  softer peach = #F5E9DB
*/

/* 3 */
nav a {
  font-weight: bold;
  color: #4A351D;
  padding: 20px;
}

/* 4 */
nav a.router-link-exact-active {
  color: #2c3e50;
}

/* 5 */
/* nav {
  padding: 30px;
} */


/* list of custom-made styles used @ bootstrap (ie, by the class) =  */
/* STYLING FROM APPVIEW.VUE (THERE ARE ..5.. IN TOTAL) ENDS HERE*/
</style>