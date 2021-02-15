import { useState } from "react"
import { Nullable } from "../../interfaces/Nullable"
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

export type UpdateFormData = Nullable<IFormData>

export type StepNames = 'Bio' | 'Contacts' | 'Avatar'

export const MultyStepsForm = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    lastName: '',
    phone: '',
    avatar: '',
    email: '',
  })

  const toNextStep = () => setCurrentStepIndex(currentStepIndex + 1)
  const goToStepByIndex = (i: number) => setCurrentStepIndex(i)
  const updateFormData = (newData: UpdateFormData) => {
    setFormData({
      ...formData,
      ...newData,
    })
  }
  const isFinalStep = (step: number) => step === Object.values(steps).length - 1
  const getStepByIndex = (i: number) => Object.values(steps)[i]

  const stepProps = {
    toNextStep,
    updateFormData,
    ...formData,
  }

  const steps = {
    'Bio': <UserBio {...stepProps}/>, 
    'Contacts': <UserContacts {...stepProps}/>,
    'Avatar': <UserAvatar {...stepProps}/>,
  }

  return (
    <div className="multy-steps-form">
      {isFinalStep(currentStepIndex)? 
        <TotalInfo
          {...formData}
          stepNames={Object.keys(steps)}
          goToStepByIndex={goToStepByIndex}/>:
        getStepByIndex(currentStepIndex)}
    </div>
  )
}