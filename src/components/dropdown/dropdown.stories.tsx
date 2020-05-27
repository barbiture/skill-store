import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { text, object } from '@storybook/addon-knobs'
import { Dropdown } from '.'
const stories = storiesOf('UI|Dropdown', module)
const periodMock = object('period', [
  {
    id: 0,
    title: '3 месяца',
    selected: true,
  },
  {
    id: 1,
    title: '6 месяцев',
    selected: false,
  },
  {
    id: 2,
    title: '12 месяцев',
    selected: false,
  },
])
stories.add(
  'Period dropdown',
  withInfo({ inline: true })(() => (
    <div style={{ width: '218px' }}>
      <Dropdown labelName={text('labelNanme', 'Срок')} period={periodMock} />
    </div>
  ))
)
