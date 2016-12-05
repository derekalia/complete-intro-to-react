import React from 'react'
import Search from './Search'
import renderer from 'react-test-renderer'

test('Search snap shot test', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
