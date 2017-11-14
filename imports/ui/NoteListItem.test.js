import React from 'react';
import expect from 'expect';
import  { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import { notes } from '../fixtures/fixtures';
import { NoteListItem } from './NoteListItem';

if(Meteor.isClient){

    let Session;

    beforeEach(()=>{
        Session = {
            set: expect.createSpy()
        }
    });

    describe('NoteListItem', function (){
        it('should render title and time stamp', function (){
            const wrapper = mount(<NoteListItem note={notes[0]} Session={Session} />)

            expect(wrapper.find('h5').text()).toBe(notes[0].title);
            expect(wrapper.find('p').text()).toBe('11/13/17');
        });
        it('should set default title if no title set', function (){
             const wrapper = mount(<NoteListItem note={notes[1]} Session={Session} />)

            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });

        it('should call set on click', function(){
            const wrapper = mount(<NoteListItem note={notes[0]} Session={Session} />);
            wrapper.find('div').simulate('click');

            expect(Session.set).toHaveBeenCalledWith('selectedNoteId',notes[0]._id);;
        })
    });
}