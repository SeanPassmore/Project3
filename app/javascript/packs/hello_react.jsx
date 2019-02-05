// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>{props.number} books</div>
)

Hello.defaultProps = {
  node = document.getElementById('books')
  data = JSON.parse(node.getAttribute('data')
  number: data
}

Hello.propTypes = {
  number: PropTypes.number
}

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Hello props={data} />,
    document.getElementById('Boo'))

//  ReactDOM.render(
//    <Hello name="React" />, document.getElementById('Boo')
//  )
})
