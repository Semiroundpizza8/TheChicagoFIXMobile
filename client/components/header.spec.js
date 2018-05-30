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
  // -header
  // -bar
  // -logo
  // -locations?
  // -button
  // -bar
  xit('is surrounded by bars', () => {
    expect(header.find('#header').children().first().is('.bar')).to.equal(true)
    expect(header.find('#header').children().last().is('.bar')).to.equal(true)
  })
  xit('lists out locations', () => {
    expect(header.find('h1').text()).to.be.equal("I'm Being Helpful!")
  })
  xit('has a contact button', () => {
    expect(header.find('h1').text()).to.be.equal("I'm Being Helpful!")
  })
  xit('placeholder', () => true)
})