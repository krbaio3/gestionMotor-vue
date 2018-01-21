<template>
     <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <input type="mail"
                            class="form-control"
                            placeholder="e-mail"
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            placeholder="password"
                            type="password"
                        />
                    </div>

                    <button class="btn btn-lg btn-success btn-block">
                        Login
                    </button>
                </form>
            </div>
</template>
<script>
export default {
  name: 'Login',
};
</script>
<style lang="scss" scoped> 

</style>
