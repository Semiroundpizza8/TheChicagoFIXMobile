import { expect } from 'chai'
import React from 'react'
import enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Home } from './home'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home', () => {
  let home

  beforeEach(() => {
    home = shallow(<Home />)
  })

  it('renders an h1 for testing', () => {
    expect(home.find('h1').text()).to.be.equal("Hello World")
  })
})