import React, { Component } from 'react'
import './Tree.less'

// if nested data is given
const rootTree = {
  name: 'Lorem',
  id: 'root',
  children: [
    {
      name: 'Ipsum',
      id: 'root-child',
      children: [
        { name: 'Sit', id: 'root-child-child', children: [] },
      ],
    },
    { name: 'Dolor', id: 'root-child-2', children: [] },
  ],
}

class Tree extends Component {
    state = {
      tree: rootTree,
      showInput: false,
      value: null,
      selectedId: null,
    }

  renderTree = (leaf) => {
    const DEEPER = 'DEEPER'
    const SHALLOWER = 'SHALLOWER'
    const nodes = [leaf]
    const markup = []
    let level = 0

    while (nodes.length) {
      const current = nodes.shift()

      if (current === DEEPER) {
        level += 1
      } else if (current === SHALLOWER) {
        level -= 1
      } else {
        markup.push((
          <div data-id={current.id} style={{ paddingLeft: level * 10 }}>
            {current.name}
          </div>
        ))

        nodes.unshift(DEEPER, ...current.children, SHALLOWER)
      }
    }

    return markup
  }

  addLeaf = (leaf, id) => {
    const { tree } = this.state

    const traverseTree = (node) => {
      if (node.id === id) {
        node.children.push(leaf)
      }
      if (!node.children.length) {
        return tree
      }

      node.children.forEach(child => traverseTree(child))
      return node
    }

    this.setState({ tree: traverseTree(tree), showInput: false, value: null })
  }

  onInputChange = e => this.setState({ value: e.target.value })

  onTreeClick = (event) => {
    event.persist()
    this.setState(prevState => ({ showInput: !prevState.showInput, selectedId: event.target.dataset.id }))
  }

  render() {
    const {
      tree, showInput, value, selectedId,
    } = this.state

    const newLeaf = { name: value, id: `${(new Date()).getTime()}`, children: [] }

    return (
      <div className="Tree">
        <ul onClick={this.onTreeClick}>
          {this.renderTree(tree)}
        </ul>
        {showInput && (
          <div>
            <h2>Leaf Title</h2>
            <input onChange={this.onInputChange} />
            <button onClick={() => this.addLeaf(newLeaf, selectedId)}>+</button>
          </div>
        )}
      </div>
    )
  }
}

export default Tree
