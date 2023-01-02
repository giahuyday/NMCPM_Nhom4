import React from 'react'
import  ReactDOM  from 'react-dom'
import  ReactDOM  from 'react-dom/client'
import signin from './signin'
// const root = React.createRoot(signin, document.getElementById(root))
// root.render(<singin></singin>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<signin />)