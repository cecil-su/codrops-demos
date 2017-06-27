import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const folderPreviewIdeas = r => require.ensure([], () => r(require('./folder-preview-ideas/index.vue')))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/FolderPreviewIdeas',
      component: folderPreviewIdeas
    }
  ]
})
