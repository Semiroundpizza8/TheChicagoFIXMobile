/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Header} from './header'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Header', () => {
  let header

  beforeEach(() => {
    header=shallow(<Header />)
  })

  it('renders and h1 for testing', () => {
    expect(header.find('h1').text()).to.be.equal("I'm Being Helpful!")
  })
})