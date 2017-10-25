<template>
    <form action="" class="form">
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