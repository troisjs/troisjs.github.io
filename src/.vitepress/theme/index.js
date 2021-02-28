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

    // const GA_ID = 'UA-178028522-1';
    // if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    //   (function (i, s, o, g, r, a, m) {
    //     i['GoogleAnalyticsObject'] = r
    //     i[r] = i[r] || function () {
    //       (i[r].q = i[r].q || []).push(arguments)
    //     }
    //     i[r].l = 1 * new Date()
    //     a = s.createElement(o)
    //     m = s.getElementsByTagName(o)[0]
    //     a.async = 1
    //     a.src = g
    //     m.parentNode.insertBefore(a, m)
    //   })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
  
    //   ga('create', GA_ID, 'auto')
    //   ga('set', 'anonymizeIp', true)
  
    //   router.afterEach(function (to) {
    //     ga('set', 'page', router.app.$withBase(to.fullPath))
    //     ga('send', 'pageview')
    //   })
    // }
  }
};
