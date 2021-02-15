import { IStepProps } from "../../../interfaces/IStepProps"
import { IFormData, StepNames } from "../MultyStepsForm"
import { StepNavigation } from "../StepNavigation"

interface IProps extends IFormData {
  goToStepByIndex: (i: number) => void
  stepNames: string[]
}

export const TotalInfo: React.FC<IProps> = ({goToStepByIndex, name, lastName, email, phone, stepNames}) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>lastName: {lastName}</div>
      <div>email: {email}</div>
      <div>phone: {phone}</div>
      <StepNavigation 
        stepNames={stepNames}
        goToStepByIndex={goToStepByIndex}/>
    </div>
  )
}