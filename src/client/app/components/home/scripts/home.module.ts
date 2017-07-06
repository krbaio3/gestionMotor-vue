import Vue from 'vue';
import Component  from 'vue-class-component';

const templateUrl = require('../views/home.component.html');

@Component({
    template: templateUrl
})

class HomeComponent{}

export default HomeComponent;