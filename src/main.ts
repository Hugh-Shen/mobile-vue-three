import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Search, Tab, Tabs, Rate, Tabbar, TabbarItem } from 'vant'

createApp(App).use(store).use(router).use(Search).use(Tab).use(Tabs).use(Rate).use(Tabbar).use(TabbarItem).mount('#app')
