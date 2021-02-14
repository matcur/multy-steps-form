import { IFormData } from "../MultyStepsForm"

export const TotalInfo: React.FC<IFormData> = ({name, lastName, email, phone}) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>lastName: {lastName}</div>
      <div>email: {email}</div>
      <div>phone: {phone}</div>
    </div>
  )
}