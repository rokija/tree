import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tree from '.'

describe('Tree', () => {
  const wrapper = shallow(<Tree />)

  it('renders properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
