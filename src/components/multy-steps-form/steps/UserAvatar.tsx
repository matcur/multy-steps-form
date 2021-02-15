import { IStepProps } from "../../../interfaces/IStepProps"
import { ImageField } from "../fields/ImageField"

export const UserAvatar: React.FC<IStepProps> = ({toNextStep, updateFormData, avatar}) => {
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
      <button onClick={() => toNextStep()}>
        Click
      </button>
    </div>
  )
}