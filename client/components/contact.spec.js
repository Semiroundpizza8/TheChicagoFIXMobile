/* global describe beforeEach it */

import { expect } from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Contact } from './contact'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Contact', ()=> {
  let contact

  beforeEach(() => {
    contact = shallow(<Contact />)
  })

  it('renders an h1 element', () => {
    expect(contact.find('h1').text()).to.be.equal('Aliens are Real')
  })
})
