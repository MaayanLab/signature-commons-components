import React from 'react'
import ChipInput from '../src/index'

export default class Demo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input: []
    }
  }

  onSubmit = (value) => {
    this.setState((prevState)=>({
      input: [...prevState.input, value]
    }))
  }

  onDelete = (value) => {
    this.setState((prevState) =>({
      input: prevState.input.filter(i=>i!==value)
    }))
  }

  render = () => (
    <ChipInput
      input={this.state.input}
      onDelete={this.onDelete}
      onSubmit={this.onSubmit}
    />
  )
}
