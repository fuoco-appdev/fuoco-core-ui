import CropImage from './crop-image'
import React from 'react'

export default {
  title: 'General/Crop Image',
  component: CropImage,
}

export function Default() {
  const [files, setFiles] = React.useState<FileList | undefined>(undefined)
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setFiles(e.currentTarget.files ?? undefined)
        }}
      />
      <CropImage isVisible={true} src={files} />
    </>
  )
}

export function TouchScreen() {
  const [files, setFiles] = React.useState<FileList | undefined>(undefined)
  return (
    <>
      <input
        type="file"
        onChange={(e) => {
          setFiles(e.currentTarget.files ?? undefined)
        }}
      />
      <CropImage isVisible={true} src={files} touchScreen={true} />
    </>
  )
}
