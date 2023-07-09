import React, { useRef, useState } from 'react'
// @ts-ignore
import styles from './avatar.module.scss'
import Ripples, { RipplesProps } from 'react-ripples'
import { Line } from '../icon/icons'
import { ModalProps } from '../modal'
import { CropImage } from '../crop-image'
import { Button } from '../button'
import { ButtonClasses } from '../button/button'

export interface AvatarClasses {
  container?: string
  editImageButton?: string
  button?: ButtonClasses
}

export interface AvatarProps {
  children?: React.ReactNode
  src?: string
  style?: React.CSSProperties
  touchScreen?: boolean
  classNames?: AvatarClasses
  alt?: string
  text?: string
  editMode?: boolean
  size?: 'custom' | 'small' | 'medium' | 'large'
  avatarIcon?: JSX.Element
  rippleProps?: RipplesProps
  modalProps?: ModalProps
  onChange?: (index: number, blob: Blob) => void
}

export default function Avatar({
  src,
  style,
  touchScreen = false,
  classNames,
  alt,
  text,
  editMode = false,
  size = 'large',
  avatarIcon,
  children,
  rippleProps,
  modalProps = {
    visible: false,
    confirmText: 'Crop',
  },
  onChange,
}: AvatarProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImages, setSelectedImages] = useState<FileList | undefined>()
  const classes = [
    styles['avatar'],
    styles[`avatar-size-${size}`],
    classNames?.container,
  ]

  if (src) {
    classes.push(styles['avatar-image'])
  } else if (avatarIcon) {
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
    const files = event.target.files && event.target.files
    if (!files || (files && files.length <= 0)) {
      return
    }

    setSelectedImages(files)
    setIsModalVisible(true)
  }

  const onCropConfirmed = () => {
    setIsModalVisible(false)
    setSelectedImages(undefined)
  }

  const onCropCanceled = () => {
    setSelectedImages(undefined)
    setIsModalVisible(false)
  }

  return (
    <div>
      <div className={classes.join(' ')}>
        {!src && avatarIcon}
        {!src && text && <p>{text[0]}</p>}
        {src && <img className={classes.join(' ')} src={src} alt={alt} />}
        {children && children}
        {editMode && (
          <div
            className={[
              styles['edit-image-button'],
              styles[`edit-image-button-size-${size}`],
              classNames?.editImageButton,
            ].join(' ')}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".png, .jpg, .jpeg, .svg"
              style={{ display: 'none' }}
              onChange={onFileChanged}
            />
            <Button
              ref={buttonRef}
              block={true}
              classNames={{
                container: styles['edit-image-button-ripple'],
                button: styles['edit-image-button'],
                ...classNames?.button,
              }}
              rippleProps={rippleProps}
              icon={<Line.Add stroke={'#fff'} size={24} />}
              onClick={onEditFileClick}
            />
          </div>
        )}
      </div>
      {editMode && selectedImages && (
        <CropImage
          src={selectedImages}
          isVisible={isModalVisible}
          onChange={onChange}
          onConfirmed={onCropConfirmed}
          onCanceled={onCropCanceled}
          modalProps={modalProps}
          touchScreen={touchScreen}
          anchorRef={buttonRef}
        />
      )}
    </div>
  )
}
