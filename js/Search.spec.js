import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search snap shot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
