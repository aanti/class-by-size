import React from 'react'
import { render} from 'react-dom'
import MyComponent from '../../src'

const App = () => (
  <MyComponent>
    I'm in the container
  </MyComponent>
)
render(<App />, document.getElementById("root"))