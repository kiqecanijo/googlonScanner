import React from 'react'
import App, {
  alphabet,
  fooLetters,
  order,
  orderText,
  getPrepos,
  getVerbs,
  getSubjuntives,
  getValues,
  getPrettyUniques
} from './App'
import renderer from 'react-test-renderer'

test('Defined variables', () => {
  expect(alphabet).toBeDefined()
  expect(fooLetters).toBeDefined()
})
test('correct functions', () => {
  expect(order('sxoce', 'sxocs')).toBe(1)
  expect(orderText(['sxocs', 'sxoce', 'sxace'])).toEqual([
    'sxace',
    'sxocs',
    'sxoce'
  ])
  expect(getPrepos(['iygsex', 'goi', 'ylnxequr', 'rsogxd'])).toEqual([
    'iygsex',
    'rsogxd'
  ])

  expect(
    getVerbs([
      'podciy',
      'dgsloqe',
      'iygsex',
      'qdrulxogji',
      'qinhmjul',
      'ylnxequr'
    ])
  ).toEqual(['podciy', 'dgsloqe', 'qdrulxogji', 'qinhmjul', 'ylnxequr'])

  expect(
    getSubjuntives(['podciy', 'dgsloqe', 'qdrulxogji', 'qinhmjul', 'ylnxequr'])
  ).toEqual(['qdrulxogji', 'qinhmjul', 'ylnxequr'])

  expect(getValues(['gxjrc'])).toEqual([605637])

  expect(getPrettyUniques([81827, 99933, 645342, 'fwerpnxogs'])).toEqual([
    99933,
    645342
  ])
})
test('Render component', () => {
  const component = renderer.create(<App />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
