<template>
    <form action="" class="form">
        <!-- <h3>{{titulo}}</h3> -->
        <slot name="titulo"></slot>
        <slot name="elementos"></slot>
        <slot name="boton"></slot>
                
  </form>
</template>
<script>
export default {
    props: ['titulo'],
}
</script>
<style lang="scss" scoped>
h3{
    color: greenyellow;
}

</style>