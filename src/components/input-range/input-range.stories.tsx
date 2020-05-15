import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { InputRange } from '.'
const stories = storiesOf('UI|Input-Range', module)

stories.add(
  'Default',
  () => (
    <InputRange
      value="10000"
      step={text('step', '1000')}
      max={text('max', '10000000')}
      min={text('min', '10000')}
      originCurrency={text('originCurrency', '₽')}
    />
  ),
  {
    info: { inline: true },
    text: `

  ### Notes

  Simple example component

  ### Usage
  ~~~js
  <ExampleComponent
    text="Some text"
  />
  ~~~

`,
  }
)
