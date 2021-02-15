import { IFormData, UpdateFormData } from "../components/multy-steps-form/MultyStepsForm";

export interface IStepProps extends IFormData {
  toNextStep: () => void
  updateFormData: (data: UpdateFormData) => void
}