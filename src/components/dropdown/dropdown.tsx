import React, { FC, useState, ReactElement, MouseEvent, useEffect, useRef } from 'react'
import period from '../../../__mocks__/period-select'
import './dropdown.css'
interface Period {
  id: number
  title: string
  selected: boolean
}
const Dropdown: FC = (): ReactElement => {
  const [periodFetch, setFetch] = useState<Array<Period>>([])
  const [periodItem, setItem] = useState<null | Period>(null)
  const [periodList, setList] = useState<Array<Period>>([])
  const [open, setOpen] = useState<boolean>(false)
  const updateDropdown = (): void => {
    const list = periodFetch.filter((item): undefined | Period => {
      if (item.selected) {
        setItem(item)
        return
      }
      return item
    })
    setList(list)
  }
  const ulRef = useRef<HTMLDivElement>(null)
  const handleClickOutside = (): void => {
    const target = event ? event.target : false
    if (null !== ulRef.current && target) {
      if (ulRef.current.contains(target as HTMLDivElement)) {
        return
      }
      // click outside
      setOpen(false)
    }
  }
  const handleSelect = ({ target }: MouseEvent<HTMLDivElement>): void => {
    const { id } = target as HTMLInputElement
    setOpen(!open)
    setFetch(
      periodFetch.map((item) => {
        if (item.id.toString() === id) return { ...item, selected: true }
        return { ...item, selected: false }
      })
    )
    updateDropdown()
  }
  useEffect((): void => {
    // FETCH
    setFetch(period)
  }, [period])
  useEffect((): void => {
    updateDropdown()
  }, [periodFetch])
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside, true)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const list = periodList.map((period) => (
    <div className="di" key={period.id} onClick={handleSelect} id={period.id.toString()}>
      {period.title}
    </div>
  ))

  return (
    <>
      <div className="dd" ref={ulRef}>
        {periodItem && (
          <div className="di" onClick={handleSelect} id={periodItem.id.toString()}>
            {periodItem.title}
          </div>
        )}
        {open && <div className="dl">{list}</div>}
      </div>
    </>
  )
}
export default Dropdown
