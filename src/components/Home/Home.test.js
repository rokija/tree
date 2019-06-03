import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from '.'

describe('Home', () => {
  const wrapper = shallow(<Home />)
  it('renders properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
