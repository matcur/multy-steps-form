import React from "react"
import { IStepProps } from "../../../interfaces/IStepProps"
import { TextField } from "../fields/TextField"
import { BaseStep } from "./BaseStep"

export const UserContacts: React.FC<IStepProps> = ({toNextStep, updateFormData, email, phone}) => {
  const udpatePhone = (value: string) => updateFormData({phone: value})
  const udpateEmail = (value: string) => updateFormData({email: value})

  const steps = [
    <>
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
    </>
  ]
  const buttons = [
    <div className="user-contacts-step ">
      <button onClick={() => toNextStep()}>
        Click
      </button>
    </div>
  ]

  return (
    <BaseStep
      fields={steps}
      buttons={buttons}
      stepClassName="user-contacts-step"/>
  )
}