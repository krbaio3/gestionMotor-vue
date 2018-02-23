<template>
    <div class="panel-body">
        <form role="form">
            <div class="form-group">
                <input type="mail" class="form-control" placeholder="e-mail" />
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="password" />
            </div>
            <button class="btn btn-lg btn-success btn-block" @click="loginApp">Login</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  data() {
    return {
      onCompletado() {
        console.log('se ha completado');
      },
    };
  },
  methods: {
    onComplete() {
      console.log('se ha completado');
    },
    loginApp() {
      console.log('Login');
      this.$router.push({
        name: 'Hola',
      }, this.onCompletado);
    },
  },
  beforeCreate() {
    console.log('llamando a beforeCreate');
    this.$emit('removeHeaders', true);
  },
  created() {
    console.log('llamando a create');
  },
  beforeMount() {
    console.log('llamando a beforeMount');
  },
  mounted() {
    console.log('llamando a Mount');
  },
  beforeUpdate() {
    console.log('llamando a beforeUpdate');
  },
  updated() {
    console.log('llamando a update');
  },
  beforeDestroy() {
    console.log('llamando a beforeDestroy');
    this.$emit('removeHeaders', false);
  },
  destroyed() {
    console.log('llamando a Destroy');
  },
});
</script>
<style lang="postcss" scoped>
.ajuste{
    position: relative;
}
.child-with-unknown-dimensions {
  @include center(400px);
}
</style>
