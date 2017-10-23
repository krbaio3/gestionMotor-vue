<template>
  <div class="container">
    <div class="jumbotron">
      <span class="display-3" v-decorar:peque.italica.negrilla="{tipoLetra: 'helvetica', color: 'blue'}">Aprende Vue2 fácilmente</span>
      <hr>
      <span v-decorar-local:grande.negrilla.italica="{tipoLetra: 'serif', color: 'yellow'}">Esty con directives locales </span>
    </div>
  </div>
</template>
<script>
export default {
  directives : {
    'decorar-local': {
      bind(el, binding, vnode) {
        el.style.fontFamily = binding.value.tipoLetra;
        el.style.color = binding.value.color;
        if(binding.arg === 'grande'){
          el.style.fontSize = '50px';
        }
        if (binding.arg === 'peque') {
          el.style.fontSize = '10px';
        }
        if(binding.modifiers['negrilla']){
          el.style.fontWeight = 'bold';
        }
        if (binding.modifiers['italica']){
          el.style.fontStyle = 'italic';
        }
      },
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap';
</style>
