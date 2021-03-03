import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './styles.css';

// import { TroisJSVuePlugin } from 'troisjs';
// import * as Examples from '/components/index.js';
import Dyn from '/Dyn.vue';
import chroma from 'chroma-js';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Dyn', Dyn);

    // app.use(TroisJSVuePlugin);
    // Object.entries(Examples).forEach(([key, value]) => {
    //   app.component(key, value);
    // });

    if (typeof window !== 'undefined') {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-178028522-1', 'auto');
      ga('send', 'pageview');
      siteData.$ga = ga;       
    }
  }
};
