import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#FF5722',
    secondary: '#FF9800',
    accent: '#FF3D00',
    error: '#D50000',
    warning: '#FDD835',
    info: '#81D4FA',
    success: '#00E676'
  }
});
