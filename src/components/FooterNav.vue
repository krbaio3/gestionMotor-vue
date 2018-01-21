<template>
   <div id="footer">
      
        <a href="">
          <i class="fa fa-twitter"></i>
        </a>
      
        <a href="">
          <i class="fa fa-google-plus"></i>
        </a>
      
        <a href="">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
  </div>
</template>
<script>
export default {
  name: 'FooterNav',
};
</script>
<style lang="scss" scoped>
#footer {
  background-color: red;
  li {
    list-style-type: none;
  }
  a {
    color: white;
  }
}
</style>
