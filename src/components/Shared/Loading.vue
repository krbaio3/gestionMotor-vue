<template>
<div class="opacity">
    <div class="loading">
        <!-- <div class="wBall" id="wBall_1">
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
        </div> -->
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
    const body = document.getElementsByTagName('body')[0];
    const app = document.getElementById('app');
    if (app !== null) {
    //   const content = app.innerHTML;
    //   console.log('content', content);
    //   console.log('objeto this', this.$el);
    //   console.log(window.getComputedStyle(this));
      body.style.backgroundColor = this.options.bg;
      body.style.zIndex = this.options.zIndex;
      document.createElement('div');
      document.ad
      console.log(this.options.zIndex);
      console.log(app.style);
      console.log('app', document.getElementById('app'));
      console.log('body', body);
      app.style.display = 'none';
    //   window.alert(app.style.zIndex);
    }
  }

  destroyed() {
    console.log('llamando a destroy', this);
  }
}

</script>   
<style lang="scss" scoped>

// .loading {

//     position: relative;
// 	width: 78px;
// 	height:78px;
//     margin:auto;
//     opacity: 1;
//     top: 30%;
    
//     .wBall {
        
//         position: absolute;
//         width: 74px;
//         height: 74px;
//         opacity: 0;
//         transform: rotate(225deg);
//         animation: orbit 6.96s infinite;
        
//         .wInnerBall{
//             position: absolute;
//             width: 10px;
//             height: 10px;
//             background: rgb(0,0,0);
//             left:0px;
//             top:0px;
//             border-radius: 10px;
//         }
//     }
// #wBall_1 {
// 	animation-delay: 1.52s;
// }

// #wBall_2 {
// 	animation-delay: 0.3s;
// }

// #wBall_3 {
// 	animation-delay: 0.61s;
// }

// #wBall_4 {
// 	animation-delay: 0.91s;
// }

// #wBall_5 {
// 	animation-delay: 1.22s;
// }    
    
// }

// .opacity{
//     position: absolute;
//     top: 0;
//     left: 0%;
//     width: 100%;
//     height: 100%;
//     z-index: 1000;
// }

// @keyframes orbit {
// 	0% {
// 		opacity: 1;
// 		z-index:99;
// 		transform: rotate(180deg);
// 		animation-timing-function: ease-out;
// 	}

// 	7% {
// 		opacity: 1;
// 		transform: rotate(300deg);
// 		animation-timing-function: linear;
// 		origin:0%;
// 	}

// 	30% {
// 		opacity: 1;
// 		transform:rotate(410deg);
// 		animation-timing-function: ease-in-out;
// 		origin:7%;
// 	}

// 	39% {
// 		opacity: 1;
// 		transform: rotate(645deg);
// 		animation-timing-function: linear;
// 		origin:30%;
// 	}

// 	70% {
// 		opacity: 1;
// 		transform: rotate(770deg);
// 		animation-timing-function: ease-out;
// 		origin:39%;
// 	}

// 	75% {
// 		opacity: 1;
// 		transform: rotate(900deg);
// 		animation-timing-function: ease-out;
// 		origin:70%;
// 	}

// 	76% {
// 	opacity: 0;
// 		transform:rotate(900deg);
// 	}

// 	100% {
// 	opacity: 0;
// 		transform: rotate(900deg);
// 	}
// }
/* Center the loader */
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s
}

@-webkit-keyframes animatebottom {
  from { bottom:-100px; opacity:0 } 
  to { bottom:0px; opacity:1 }
}

@keyframes animatebottom { 
  from{ bottom:-100px; opacity:0 } 
  to{ bottom:0; opacity:1 }
}

#myDiv {
  display: none;
  text-align: center;
}
</style>