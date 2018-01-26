<template>
   <div id="footer">
      
        <a href="https://twitter.com/?lang=es" target="_blank">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
      
        <a href="https://plus.google.com/?hl=es" target="_blank">
          <i class="fa fa-google-plus-official" aria-hidden="true"></i>
        </a>
      
        <a href="https://www.facebook.com/" target="_blank">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>

        <a href="https://mail.google.com/" target="_blank">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </a>
        
        <a href="https://www.paypal.com/es/signin" target="_blank">
          <i class="fa fa-paypal" aria-hidden="true"></i>
        </a>
        
        <a href="https://www.instagram.com/?hl=es" target="_blank">
          <i class="fa fa-instagram" aria-hidden="true"></i>
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
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    a {
      padding-right: 30px;
      &:last-child{
        padding-right: 0px;
      }    
    }
  }
}
</style>
