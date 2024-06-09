import { shallowMount } from '@vue/test-utils'
import ExampleComponent from '@/components/ExampleComponent.vue'

describe('ExampleComponent.vue', () => {
  it('renders message when component is created', () => {
    const wrapper = shallowMount(ExampleComponent)
    expect(wrapper.text()).toMatch('Hello, Vue!')
  })

  it('has the correct name', () => {
    const wrapper = shallowMount(ExampleComponent)
    expect(wrapper.vm.$options.name).toMatch('ExampleComponent')
  })

  it('has a message data property', () => {
    const wrapper = shallowMount(ExampleComponent)
    expect(wrapper.vm.message).toBe('Hello, Vue!')
  })

  it('matches the snapshot', () => {
    const wrapper = shallowMount(ExampleComponent)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders the correct markup', () => {
    const wrapper = shallowMount(ExampleComponent)
    expect(wrapper.html()).toContain('<p>Hello, Vue!</p>')
  })
})
