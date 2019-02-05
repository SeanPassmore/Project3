// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div><b>{props.number} books</b></div>
)

Hello.defaultProps = {
  //number: Product.count
}

Hello.propTypes = {
  number: PropTypes.number
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('books')
  const data = JSON.parse(node.getAttribute('data'))
  Hello.defaultProps = {
    number: data
  }
  ReactDOM.render(
    <Hello props={data} />,
    document.getElementById('Boo'))

//  ReactDOM.render(
//    <Hello name="React" />, document.getElementById('Boo')
//  )
})
