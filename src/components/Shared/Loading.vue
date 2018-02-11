<template>
<div class="opacity">
    <div class="loading">
        <div class="wBall" id="wBall_1">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_2">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_3">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_4">
            <div class="wInnerBall"></div>
        </div>
        <div class="wBall" id="wBall_5">
            <div class="wInnerBall"></div>
        </div>
    </div>
    <p>{{mensaje}}</p>    
</div>  
</template>
<script lang="ts">
import vue from 'vue';
import vueClassComponent from 'vue-class-component';

@vueClassComponent({
  name: 'Loading',
  props: {
    mensaje: { type: String, required: false },
  },
})

export default class Loading extends vue {
  options = {
    bg: 'rgba(0, 0, 0, 0.46)',
    zIndex: '100',
  };

  mounted() {
    const app = document.getElementById('app');
    if (app != null) {
      app.style.backgroundColor = this.options.bg;
      app.style.zIndex = this.options.zIndex;
      console.log(this.options.zIndex);
      console.log(app.style);
      console.log('app', document.getElementById('app'));
    //   window.alert(app.style.zIndex);
    }
  }
}
</script>   
<style lang="scss" scoped>

.loading {

    position: relative;
	width: 78px;
	height:78px;
    margin:auto;
    opacity: 1;
    top: 30%;
    
    .wBall {
        
        position: absolute;
        width: 74px;
        height: 74px;
        opacity: 0;
        transform: rotate(225deg);
        animation: orbit 6.96s infinite;
        
        .wInnerBall{
            position: absolute;
            width: 10px;
            height: 10px;
            background: rgb(0,0,0);
            left:0px;
            top:0px;
            border-radius: 10px;
        }
    }
#wBall_1 {
	animation-delay: 1.52s;
}

#wBall_2 {
	animation-delay: 0.3s;
}

#wBall_3 {
	animation-delay: 0.61s;
}

#wBall_4 {
	animation-delay: 0.91s;
}

#wBall_5 {
	animation-delay: 1.22s;
}    
    
}

.opacity{
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1000;
}

@keyframes orbit {
	0% {
		opacity: 1;
		z-index:99;
		transform: rotate(180deg);
		animation-timing-function: ease-out;
	}

	7% {
		opacity: 1;
		transform: rotate(300deg);
		animation-timing-function: linear;
		origin:0%;
	}

	30% {
		opacity: 1;
		transform:rotate(410deg);
		animation-timing-function: ease-in-out;
		origin:7%;
	}

	39% {
		opacity: 1;
		transform: rotate(645deg);
		animation-timing-function: linear;
		origin:30%;
	}

	70% {
		opacity: 1;
		transform: rotate(770deg);
		animation-timing-function: ease-out;
		origin:39%;
	}

	75% {
		opacity: 1;
		transform: rotate(900deg);
		animation-timing-function: ease-out;
		origin:70%;
	}

	76% {
	opacity: 0;
		transform:rotate(900deg);
	}

	100% {
	opacity: 0;
		transform: rotate(900deg);
	}
}
</style>