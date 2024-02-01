<template>
    <div class=" container-fluid footerBg">
        <!-- NOTE: removing the 'shadow' style fr the footer does nada. I think this is because the 'Body' styling make the text brown either way. -->
        <!-- NOTE: removing the 'Body' styling removes the background color for the footer -->
            <div class="text-center"> &copy; NaeemaOmar 2024 </div>
        </div>
</template>

<script>
export default {

}
</script>


<style>
.footerShadow{
    box-shadow: 0px 0px 20px 10px #6C666B;
}

.footerBg{
  background: linear-gradient(to top, #EDB5A2, #ffe7df); /* Replace with your desired colors */
  height: 30px;
}


</style>