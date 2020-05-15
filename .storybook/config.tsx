import { makeDecorator } from '@storybook/addons'

import * as React from 'react'
import { GlobalStyle } from '../src/shared/global'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(withInfo)
addDecorator(withKnobs)

const withGlobal = makeDecorator({
  name: 'withGlobalStyle',
  parameterName: '',
  wrapper: (getStory, context) => {
    return (
      <>
        <GlobalStyle />
        {getStory(context)}
      </>
    )
  },
})

addDecorator(withGlobal)
configure(loadStories, module)
// configure(
//   require.context('../stories', true, /\.stories\.tsx?$/),
//   module
// )
