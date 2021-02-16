import React from "react"
import { IStepProps } from "../../../interfaces/IStepProps"
import { ImageField } from "../fields/ImageField"
import { BaseStep } from "./BaseStep"

export const UserAvatar: React.FC<IStepProps> = ({toNextStep, updateFormData, avatar}) => {
  const updateAvatar = (value: string) => updateFormData({avatar: value})
  const uploadFiles = (files: FileList) => {
    updateAvatar('/cats/index.jpg')
    return ['/cats/index.jpg']
  }

  const fields = [
    <ImageField
      imgPaths={[avatar]}
      className="avatar-field field"
      labelContent="Avatar"
      uploadFiles={uploadFiles}/>
  ]
  const buttons = [
    <button onClick={() => toNextStep()}>
      Click
    </button>
  ]

  return (
    <BaseStep
      fields={fields}
      buttons={buttons}
      stepClassName="user-avatar-step"/>
  )
}