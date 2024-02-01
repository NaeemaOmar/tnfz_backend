<template>
  <NavBar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default{
  components:{
    NavBar,
    Footer
  },
  computed:{
    getInfo(){
      this.$store.dispatch('getInfo');
    },
    getProjectsInfo(){
      this.$store.dispatch('getProjectsInfo');
    },
    getResumeInfo(){
      this.$store.dispatch('getResumeInfo');
    }
  },
  mounted(){
    this.getInfo,
    this.getProjectsInfo
    this.getResumeInfo
  }
}

</script>

<style>
/* NOTE: styles defined in app.vue are 'global-styles' and can be called w/out being redefined in the views and components */
/* NOTE: styles defined in a particular view or component cannot be 'called' globally */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* Here is the styling that automatically makes my text centered */
  color: #4A351D;
  /* Here is the styling that automatically makes my text brown */
}

/* Below is the styling for the first text of each pg */
.welcomeTxt{
    background-color: #EDB5A2;
    width: fit-content;
    margin-inline: auto;
    border-radius:20px ;
    padding: 10px;
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
}

.brownTxtShadow{
      text-shadow: 1px 5px 8px #4A351D;
      /* 1st number = x offset. 2nd number = y offset. 3rd number = how blurry*/
} 

.txtBorder{
    border: 5px solid #2c3e50;
    box-shadow: 0px 0px 30px 10px #2c3e50;
    border-radius: 45px;
    background-color: #EDB5A2;
    margin-left: 20px;
}

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

.subHeading{
  font-size: larger;
  font-weight: bold;
  text-shadow: 1px 1px 8px #2c3e50;
}

.btnStyling{ 
    background-color: #EDB5A2;
    border: 5px solid #2c3e50;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 8px #2c3e50;
    height: 70px;
    width: 100px;
}

body{
  background: #ffe7df;
  /* background-color: #000000; */
  /* Black background is an interesting vibe but requires brighter colors to contrast well */
}

</style>
