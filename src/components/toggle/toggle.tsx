import React, { FC, useState, ReactElement, ChangeEvent } from 'react'
import './toggle.css'
export interface ToggleProps {
  toggleVal: boolean
  toggleId: string
  labelText: string
  labelState: {
    on: string
    off: string
  }
}
export const Toggle: FC<ToggleProps> = ({
  toggleVal,
  toggleId,
  labelText,
  labelState,
}): ReactElement => {
  const [value, setValue] = useState<boolean>(toggleVal)

  const handleCheck = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    console.log(target.checked)
    setValue(target.checked)
  }
  return (
    <>
      <input type="checkbox" name="" checked={value} id={toggleId} onChange={handleCheck} />
      <label htmlFor={toggleId}>
        <div className="toggle"></div>
        <p>
          <span>{value ? labelState.on : labelState.off} </span>
          {labelText}
        </p>
      </label>
    </>
  )
}
Toggle.defaultProps = {
  toggleVal: false,
  toggleId: '1',
  labelText: 'налоговый вычет (ИИС)',
  labelState: {
    on: 'Включен',
    off: 'Выключе',
  },
}
export default Toggle
