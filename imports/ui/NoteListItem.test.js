import React from 'react';
import expect from 'expect';
import  { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';

import NoteListItem from './NoteListItem';

if(Meteor.isClient){
    describe('NoteListItem', function (){
        it('should render title and time stamp', function (){
            const title = 'my title';
            const updateAt = 1510584394273;
            const wrapper = mount(<NoteListItem note={{title, updateAt}} />)

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('11/13/17');
        });
        it('should set default title if no title set', function (){
            const title = '';
            const updateAt = 1510584394273;
            const wrapper = mount(<NoteListItem note={{title, updateAt}} />)

            expect(wrapper.find('h5').text()).toBe('Untitled note');
        });
    });
}