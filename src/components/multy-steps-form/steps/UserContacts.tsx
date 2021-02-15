import React from "react"
import { TextField } from "../fields/TextField"
import { UpdateFormData } from "../MultyStepsForm"

interface IProps {
  toNextStep: () => void
  updateFormData: (data: UpdateFormData) => void
  phone: string
  email: string
}

export const UserContacts: React.FC<IProps> = ({toNextStep, updateFormData, email, phone}) => {
  const udpatePhone = (value: string) => updateFormData({phone: value})
  const udpateEmail = (value: string) => updateFormData({email: value})

  return (
    <div className="user-contacts-step form-step">
    <TextField
      className="phone-field field"
      labelContent="Phone"
      onInputChange={udpatePhone}
      inputValue={phone}
      alertContent="Phone is required"/>
    <TextField
      className="email-field field"
      labelContent="Email"
      onInputChange={udpateEmail}
      inputValue={email}
      alertContent="Email is required"/>
    </div>
  )
}