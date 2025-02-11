import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import PersonalStatement from './PersonalStatement';

const meta: ComponentMeta<typeof PersonalStatement> = {
    title: 'Personal Statement',
    component: PersonalStatement,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
};

export default meta;

const Template: ComponentStory<typeof PersonalStatement> = (args) => (
    <PersonalStatement {...args} />
);

export const Default = Template.bind({});
