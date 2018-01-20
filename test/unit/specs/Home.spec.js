import Vue from 'vue'
import Home from '@/components/Home'
import CommonTester from './common'

describe('Home.vue', () => {
  it('should render correct contents', () => {
    // const Constructor = Vue.extend(Home)
    // const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .toEqual('Welcome to Your Vue.js App')
    CommonTester.vueVerify(Home)
  })
})

export default {
  Vue,
  Home
}
