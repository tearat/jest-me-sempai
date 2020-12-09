import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App component', () => {
  const wrapper = mount(App)

  it('shows image', () => {
    expect(wrapper.html()).toContain('img alt="Vue logo"')
  })

  it('shows text Hello', () => {
    expect(wrapper.html()).toContain('Hello')
  })

  it('shows text Welcome to Your Vue.js App', () => {
    expect(wrapper.html()).toContain('Welcome to Your Vue.js App')
  })

  it('button increments count by 1', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})