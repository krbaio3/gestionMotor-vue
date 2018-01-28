<template>
  <div class="mb-2">
      <div class="input-group">
        <input type="text" class="form-control" :placeholder="placeholder" />
        <span class="input-group-btn">
          <button class="btn btn-info" type="button" onClick={onSearch}>
            <i :class="icono" aria-hidden="true" />
          </button>
        </span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'InputPerformance',
  props: {
    placeholder: { type: String, required: true },
    icono: { type: String, required: false },
  },
};
</script>
