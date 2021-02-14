import { useState } from "react"
import { TotalInfo } from "./steps/TotalInfo"
import { UserAvatar } from "./steps/UserAvatar"
import { UserBio } from "./steps/UserBio"
import { UserContacts } from "./steps/UserContacts"

export interface IFormData {
  name: string
  lastName: string
  phone: string
  avatar: string
  email: string
}

export type UpdateFormData<K extends keyof IFormData> = {
  [P in K]?: IFormData[P]
}

export const MultyStepsForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    lastName: '',
    phone: '',
    avatar: '',
    email: '',
  })

  const toNextStep = () => setCurrentStep(currentStep + 1)
  const updateFormData = (newData: UpdateFormData<keyof IFormData>) => {
    setFormData({
      ...formData,
      ...newData,
    })
  }

  const stepProps = {
    toNextStep,
    updateFormData,
    ...formData,
  }

  const steps = [
    <UserBio {...stepProps}/>, 
    <UserContacts {...stepProps}/>,
    <UserAvatar {...stepProps}/>,
    <TotalInfo {...formData}/>,
  ]

  return (
    <div className="multy-steps-form">
      {steps[currentStep]}
      <button onClick={() => toNextStep()}>
        Click
      </button>
    </div>
  )
}