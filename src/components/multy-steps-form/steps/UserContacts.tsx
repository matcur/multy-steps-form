import React from "react"
import { IStepProps } from "../../../interfaces/IStepProps"
import { TextField } from "../fields/TextField"

export const UserContacts: React.FC<IStepProps> = ({toNextStep, updateFormData, email, phone}) => {
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
      <button onClick={() => toNextStep()}>
        Click
      </button>
    </div>
  )
}