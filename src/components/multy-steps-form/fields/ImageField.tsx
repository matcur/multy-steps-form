import { ReactElement, useState } from "react"
import { BaseField } from "./BaseField"

interface IProps {
  uploadFiles: (files: FileList) => string[]
  className: string
  imgPaths: string[]
  labelContent?: string
  alertContent?: string
  imgClass?: string
}

export const ImageField = (props: IProps) => {
  const onFilesSelected = (files: FileList) => {
    props.uploadFiles(files)
  }

  const images = props.imgPaths.length > 0? (
    <div className="images">
      {props.imgPaths.map(p => <img src={p} />)}
    </div>
  ): ''
  
  const input = (
    <div>
      {images}
      <input
        type="file"
        onChange={e => onFilesSelected(e.target.files as FileList)}
        required/>
    </div>
  )

  return (
    <BaseField {...props} input={input} />
  )
}