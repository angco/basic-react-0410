import React from 'react'
import Enzyme, { render, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CommentList from '../components/comment-list'

Enzyme.configure({ adapter: new Adapter() })

const comments = [
  {
    id: 'test-comment-id1',
    user: 'test-user1',
    text:
      'Lorem ipsum dolor sit amet, quodsi delectus intellegat eu mel, vix ne purto reprimique intellegebat. Eos possit aliquid vivendo et, sed an virtute senserit, ne reque euismod mediocrem sea. Suavitate concludaturque ut mel, sea cu vide iisque.'
  },
  {
    id: 'test-comment-id2',
    user: 'test-user2',
    text:
      'Lorem ipsum dolor sit amet, quodsi delectus intellegat eu mel, vix ne purto reprimique intellegebat. Eos possit aliquid vivendo et, sed an virtute senserit, ne reque euismod mediocrem sea. Suavitate concludaturque ut mel, sea cu vide iisque.'
  },
  {
    id: 'test-comment-id3',
    user: 'test-user3',
    text:
      'Lorem ipsum dolor sit amet, quodsi delectus intellegat eu mel, vix ne purto reprimique intellegebat. Eos possit aliquid vivendo et, sed an virtute senserit, ne reque euismod mediocrem sea. Suavitate concludaturque ut mel, sea cu vide iisque.'
  }
]

describe('CommentList', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(<CommentList comments={comments} />)
  })

  it('should display no comments', () => {
    expect(wrapper.find('[data-hook="comment-item"]').length).toBe(0)
  })

  it('the comment list button should display `show comments`', () => {
    expect(
      wrapper.find('[data-hook="comment-list-toggle-button"]').text()
    ).toBe('show comments')
  })

  describe('the user presses the comment list', () => {
    beforeEach(() => {
      wrapper.find('[data-hook="comment-list-toggle-button"]').simulate('click')
    })

    it('should display 3 comments', () => {
      expect(wrapper.find('[data-hook="comment-item"]').length).toBe(3)
    })

    it('the comment list button should display `hide comments`', () => {
      expect(
        wrapper.find('[data-hook="comment-list-toggle-button"]').text()
      ).toBe('hide comments')
    })

    describe('the user presses the comment list again', () => {
      beforeEach(() => {
        wrapper
          .find('[data-hook="comment-list-toggle-button"]')
          .simulate('click')
      })

      it('should display no comments', () => {
        expect(wrapper.find('[data-hook="comment-item"]').length).toBe(0)
      })

      it('the comment list button should display `show comments`', () => {
        expect(
          wrapper.find('[data-hook="comment-list-toggle-button"]').text()
        ).toBe('show comments')
      })
    })
  })
})
