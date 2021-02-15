import { ImageField } from "../fields/ImageField"
import { UpdateFormData } from "../MultyStepsForm"

interface IProps {
  toNextStep: () => void
  updateFormData: (data: UpdateFormData) => void
  avatar: string
}

export const UserAvatar: React.FC<IProps> = ({toNextStep, updateFormData, avatar}) => {
  const updateAvatar = (value: string) => updateFormData({avatar: value})
  const uploadFiles = (files: FileList) => {
    updateAvatar('/cats/index.jpg')
    return ['/cats/index.jpg']
  }

  return (
    <div className="user-avatar-step form-step">
      <ImageField
        imgPaths={[avatar]}
        className="avatar-field field"
        labelContent="Avatar"
        uploadFiles={uploadFiles}/>
    </div>
  )
}