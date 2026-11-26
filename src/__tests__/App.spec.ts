import { describe, it, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'

import App from '../App.vue'
import router from '../router'

describe('App', () => {
  it('renders the customer layout and switches pages', async () => {
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.get('h1').text()).toBe('ReserveHub')

    await router.push({ name: 'restaurants' })
    await flushPromises()

    expect(wrapper.get('h1').text()).toBe('探索餐廳')
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)

    wrapper.unmount()
  })
})
