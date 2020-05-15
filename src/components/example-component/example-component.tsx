/**
 * @class ExampleComponent
 *
 */

import React, { ReactElement } from 'react'

import './example-component.css'

export interface Props {
  /**
   * Simple text prop
   **/
  text: string
}

/** My First component */
export class ExampleComponent extends React.Component<Props> {
  render(): ReactElement {
    const { text } = this.props

    return (
      <h5 className="test">
        Example Component: {text}
        <span>Coool!</span>
      </h5>
    )
  }
}

export default ExampleComponent
