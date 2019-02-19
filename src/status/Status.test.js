import React from 'react'
import Status from './Status'
import renderer from 'react-test-renderer'

test('Correct rendered status', () => {
  const component = renderer.create(<Status />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
