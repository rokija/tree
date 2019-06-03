import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Leaf from '.'

describe('Leaf', () => {
  const wrapper = shallow(<Leaf />)

  it('renders properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
