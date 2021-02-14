import { ReactElement } from "react"

interface IProps {
  className: string
  labelContent?: string
  alertContent?: string
  input: ReactElement
}

export const BaseField: React.FC<IProps> = ({className, labelContent, alertContent, input}) => {
  return (
    <div className={className}>
      <label>{labelContent}</label>
      {input}
      <span className="form-input-alert">{alertContent}</span>
    </div>
  )
}