import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tree from '.'

describe('Tree', () => {
  const wrapper = shallow(<Tree />)
  const wrapperInstance = wrapper.instance()

  it('renders properly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('sets value in state when calling onInputChange', () => {
    wrapperInstance.onInputChange({ target: { value: 'new value' } })
    expect(wrapper.state().inputValue).toEqual('new value')
  })

  it('calls onOpenInput and sets provided index in state', () => {
    wrapperInstance.onOpenInput(4)
    expect(wrapper.state().selectedNodeIndex).toEqual(4)
  })

  it('calls onAddNode and adds a new object in children array in state', () => {
    const defaultState = {
      children: [{
        id: 1,
        parentId: 0,
        value: 'root leaf',
        paddingLeft: 10,
      }],
    }

    wrapperInstance.onAddNode(1)
    expect(wrapper.state().children).toEqual([...defaultState.children, {
      id: 2, paddingLeft: 20, parentId: 1, value: 'new value',
    }])
  })
})
