import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, object } from '@storybook/addon-knobs'

import { Toggle } from '.'
const stories = storiesOf('UI|Toggle', module)

stories.add(
  'Simple toggle',
  () => {
    return (
      <div style={{ width: '218px' }}>
        <Toggle
          toggleId="1"
          toggleVal={boolean('on', false)}
          labelText={text('labelText', 'налоговый вычет (ИИС)')}
          labelState={object(
            'labelState',
            { on: 'Включен', off: 'Выключен' },
            boolean('on', false) ? 'Выключен' : 'Включен'
          )}
        />
      </div>
    )
  },
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
