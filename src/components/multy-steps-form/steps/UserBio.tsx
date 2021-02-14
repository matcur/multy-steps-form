import { TextField } from "../fields/TextField"
import { UpdateFormData } from "../MultyStepsForm"

interface IProps {
  toNextStep: () => void
  updateFormData: (data: UpdateFormData<'name' | 'lastName'>) => void
  name: string
  lastName: string
}

export const UserBio: React.FC<IProps> = ({toNextStep, updateFormData, name, lastName}) => {
  const updateName = (value: string) => updateFormData({name: value})
  const updateLastName = (value: string) => updateFormData({lastName: value})

  return (
    <div className="user-bio-step form-step">
      <TextField
        className="name-field field"
        labelContent="Name"
        onInputChange={updateName}
        inputValue={name}
        alertContent="Name is required"/>
      <TextField
        className="last-name-field field"
        labelContent="Last Name"
        onInputChange={updateLastName}
        inputValue={lastName}
        alertContent="Last name is required"/>
    </div>
  )
}