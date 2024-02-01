<template>
    <div>
      <h1 class="welcomeTxt mt-5">Resume</h1>
    </div>
    <div class="container-fluid ">
<!-- EDUCATION div starts below -->
      <div>
        <h3 class="">Education</h3>
        <div class="row d-flex justify-content-between mx-5">
                    <!-- NSC starts here -->
          <div class="col-4 d-flex align-items-center justify-content-center mt-5">
            <div>
              <p class=""><span class="">Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p class=""><span class="">Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p class=""><span class="">Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- NSC ends here -->
                    <!-- BEng starts here -->
                    <div class="col-4 d-flex align-items-center justify-content-center mt-5">
            <div>
              <p class=""><span class="">Year: </span>{{ this.$store.state.education[0].year}}</p>
              <p class=""><span class="">Qualification: </span>{{ this.$store.state.education[0].qualification}}</p>
              <p class=""><span class="">Institute: </span>{{ this.$store.state.education[0].institute}}</p>
            </div>
          </div>
                    <!-- BEng ends here -->
                    <!-- LCA starts here -->
                    <div class="col-4 d-flex align-items-center justify-content-center mt-5 ">
            <div>
              <p class=""><span class="">Year: </span>{{ this.$store.state.education[1].year}}</p>
              <p class=""><span class="">Qualification: </span>{{ this.$store.state.education[1].qualification}}</p>
              <p class="mb-2"><span class="">Institute: </span>{{ this.$store.state.education[1].institute}}</p>
            </div>
          </div>
                    <!-- LCA ends here -->
        </div>
      </div>
<!-- EDUCATION div ends above here -->

<!-- WORK EXPERIENCE div starts below -->

      <div>
        <h3 class="">Work Experience</h3>
        <div class="row">
          <div class="col-4 " v-for="workExperienceSum in this.$store.state.workExperienceSummary" :key="workExperienceSum.id">
            <div class="">
              <p><span class="">Year: </span>{{ workExperienceSum.year }}</p>
              <p><span class="">Role: </span>{{ workExperienceSum.role }}</p>
              <p><span class="">Employer: </span>{{ workExperienceSum.employer }}</p>
            </div>
          </div>
        </div>
        <div class="row  mt-5">
          <div class="col-12">
            <div>
              <h6>{{ this.$store.state.workExperienceDescr[0].desc1 }}</h6>
              <h6>{{ this.$store.state.workExperienceDescr[0].desc2 }}</h6>

            </div>
          </div>
        </div>
      </div>
<!-- WORK EXPERIENCE div ends above here -->

<!-- SKILLS div starts below -->

      <div>
        <h3 class=" ">Skills</h3>
        <div class="row d-flex justify-content-between mx-5">
<!-- NOTE TO SELF: row and v-for CANNOT be the same div. row div first and then v-for/loop div -->
          <div class=" checkWidth " v-for="skillItem in this.$store.state.technicalSkills" :key="skillItem.id">
            <h6 class="boldTxt">{{ skillItem.name }}</h6>
            <img class="skillImg" :src="skillItem.img" alt="">
            <p class="skillMastery boldTxt ">Mastery</p>
            <p>{{ skillItem.mastery }}</p>
        </div>
        </div>
      </div>
<!-- SKILLS div ends above here -->


    </div>
  </template>

<style>
.skillImg{
  width: 100px;
  height: 115px;
  box-shadow: 0px 0px 30px 10px #2c3e50;
  padding: 5px;
}

.checkWidth{
  border: dotted;
  border-color: aqua;
  text-align: center;
}

.skillMastery{
    margin-bottom: 0px;
    margin-top: 10px;
}
  </style>