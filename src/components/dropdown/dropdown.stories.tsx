import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Dropdown } from '.'
const stories = storiesOf('UI|Dropdown', module)

stories.add('Dropdown', () => <Dropdown labelName={text('labelNanme', 'Срок')} />, {
  info: { inline: true },
  text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <Dropdown
    text="Some text"
  />
  ~~~

`,
})
