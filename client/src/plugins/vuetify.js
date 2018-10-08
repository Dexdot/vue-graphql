import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#DDC8C4',
    secondary: '#DDC8C4',
    accent: '#DDC8C4',
    error: '#6B4D57',
    warning: '#896A67',
    info: '#DDC8C4',
    success: '#EFF9F0'
  }
});
