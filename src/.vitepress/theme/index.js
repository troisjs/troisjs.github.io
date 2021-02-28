import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './styles.css';

import { TroisJSVuePlugin } from 'troisjs';
import * as Examples from '../../components/examples/index.js';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(TroisJSVuePlugin);
    Object.entries(Examples).forEach(([key, value]) => {
      app.component(key, value);
    });
  }
};
