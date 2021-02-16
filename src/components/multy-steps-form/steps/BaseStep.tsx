interface IProps {
  stepClassName: string
  fields: JSX.Element[]
  buttons: JSX.Element[]
}

export const BaseStep: React.FC<IProps> = ({stepClassName, fields, buttons}) => {
  const className = [stepClassName, 'form-step'].join(' ')

  return (
    <div className={className}>
      <div className="fields">
        {fields}
      </div>
      <div className="buttons">
        {buttons}
      </div>
    </div>
  )
}