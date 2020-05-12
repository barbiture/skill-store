import React from 'react'
import './example-component.css'

export interface Props {
  user: string
}

export const exampleComponent: React.FC<Props> = ({ user }) => (
  <>
    <h5>
      hello <span>{user}!</span>
      <button>click</button>
    </h5>
  </>
)
