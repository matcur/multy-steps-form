import { ReactElement } from "react"
import { BaseField } from "./BaseField"

interface IProps {
  onInputChange: (value: string) => void
  inputValue: string
  className: string
  labelContent?: string
  alertContent?: string
}

export const TextField = (props: IProps) => {
  const input = (
    <input
      onChange={e => props.onInputChange(e.target.value)}
      value={props.inputValue}
      required/>
  )

  return (
    <BaseField {...props} input={input} />
  )
}