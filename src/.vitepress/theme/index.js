import defaultTheme from 'vitepress/dist/client/theme-default/index'
import Layout from './Layout.vue'
import Dyn from '/Dyn.vue';
import './style.css'

export default {
  ...defaultTheme,
  Layout,
  // NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.component('Dyn', Dyn);

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
}
