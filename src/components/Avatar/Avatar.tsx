import React, { useRef, useState } from 'react'
import { Icon } from '../icon/icon-import-handler'
// @ts-ignore
import styles from './avatar.module.scss'
import Ripples, { RipplesProps } from 'react-ripples'
import { IconCamera } from '../icon'
import { ModalProps } from '../modal'
import { CropImage } from '../crop-image'

export interface AvatarProps {
  children?: React.ReactNode
  src?: string
  style?: React.CSSProperties
  className?: string
  alt?: string
  text?: string
  editMode?: boolean
  AvatarIcon?: Icon
  rippleProps?: RipplesProps
  modalProps?: ModalProps
  onChange?: (blob: Blob) => void
}

export default function Avatar({
  src,
  style,
  className,
  alt,
  text,
  editMode = false,
  AvatarIcon,
  children,
  rippleProps,
  modalProps = {
    visible: false,
    confirmText: 'Crop',
  },
  onChange,
}: AvatarProps) {
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<File | undefined>()
  const classes = [styles['avatar']]
  classes.push(className)

  if (src) {
    classes.push(styles['avatar-image'])
  } else if (AvatarIcon) {
    classes.push(styles['avatar-icon'])
  } else if (text) {
    classes.push(styles['avatar-text'])
  } else if (children) {
    classes.push(styles['avatar-children'])
  }

  const onEditFileClick = () => {
    fileRef?.current?.click()
  }

  const onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (!file) {
      return
    }

    setSelectedImage(file)
    setIsModalVisible(true)
  }

  const onCropConfirmed = () => {
    setIsModalVisible(false)
    setSelectedImage(undefined)
  }

  const onCropCanceled = () => {
    setSelectedImage(undefined)
    setIsModalVisible(false)
  }

  return (
    <div>
      <div className={classes.join(' ')}>
        {!src && AvatarIcon && <AvatarIcon strokeWidth={2} />}
        {!src && text && <p>{text[0]}</p>}
        {src && <img className={classes.join(' ')} src={src} alt={alt} />}
        {children && children}
        {editMode && (
          <div className={styles['edit-image-button']}>
            <input
              ref={fileRef}
              type="file"
              accept=".png, .jpg, .jpeg, .svg"
              style={{ display: 'none' }}
              onChange={onFileChanged}
            />
            <Ripples
              {...rippleProps}
              className={styles['edit-image-button-ripple']}
              onClick={onEditFileClick}
            >
              <IconCamera strokeWidth={2} stroke={'#fff'} size={'tiny'} />
            </Ripples>
          </div>
        )}
      </div>
      {editMode && selectedImage && (
        <CropImage
          src={selectedImage}
          isVisible={isModalVisible}
          onChange={onChange}
          onConfirmed={onCropConfirmed}
          onCanceled={onCropCanceled}
          modalProps={modalProps}
        />
      )}
    </div>
  )
}
