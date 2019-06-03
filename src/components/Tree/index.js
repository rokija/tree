import React, { Component, Fragment } from 'react'
import Leaf from '../Leaf'

class Tree extends Component {
    state = {
      inputValue: '',
      selectedNodeIndex: null,
      children: [{
        id: 1,
        parentId: 0,
        value: 'root leaf',
        paddingLeft: 10,
      }],
    }

    onInputChange = e => this.setState({ inputValue: e.target.value })

    onOpenInput = index => this.setState({ selectedNodeIndex: index })

    onAddNode = (id) => {
      const { children, inputValue } = this.state
      const parentElement = children.find(child => child.id === id)

      this.setState({
        children: [...children, {
          id: id + 1, parentId: id, value: inputValue, paddingLeft: parentElement.paddingLeft + 10,
        }],
        inputValue: '',
        selectedNodeIndex: null,
      })
    }

    render() {
      const { children, selectedNodeIndex } = this.state

      return (
        <div>
          {children.map((leaf, i) => (
            <div key={`leaf-${i}`}>
              <Leaf
                index={i}
                paddingLeft={leaf.paddingLeft}
                value={leaf.value}
                onOpenInput={this.onOpenInput}
              />
              {selectedNodeIndex === i && (
                <Fragment>
                  <input onChange={this.onInputChange} />
                  <button onClick={() => this.onAddNode(leaf.id)}>+</button>
                </Fragment>
              )}
            </div>
          ))}
        </div>
      )
    }
}

export default Tree
