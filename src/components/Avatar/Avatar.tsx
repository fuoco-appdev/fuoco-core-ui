import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '../icon/icon-import-handler'
// @ts-ignore
import styles from './avatar.module.scss'
import Ripples, { RipplesProps } from 'react-ripples'
import { IconCamera } from '../icon'
import { Modal, ModalProps } from '../modal'
import AvatarEditor from 'react-avatar-editor'

interface AvatarProps {
  children?: React.ReactNode
  src?: string | undefined
  style?: React.CSSProperties
  className?: string
  alt?: string
  text?: string
  editMode?: boolean
  AvatarIcon?: Icon
  rippleProps?: RipplesProps
  modalProps?: ModalProps
  onChange?: (url: string) => void
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
  let cursorPosition: { x: number; y: number } = { x: 0, y: 0 }
  const fileRef = useRef<HTMLInputElement | null>(null)
  const cropRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<any | null>(null)
  let scale = 1.0
  const [cropScale, setCropScale] = useState<number>(scale)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string | File>('')
  const [imageURL, setImageURL] = useState<string | null>(null)
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

    const url = URL.createObjectURL(file)
    setSelectedImage(url)
    setIsModalVisible(true)
  }

  const onMouseMove = (event: MouseEvent) => {
    cursorPosition.x = event.clientX
    cursorPosition.y = event.clientY
  }

  const onCropScroll = (event: WheelEvent) => {
    const cropElement = cropRef.current
    if (
      cropElement &&
      cursorPosition.x >= cropElement.offsetLeft &&
      cursorPosition.x <= cropElement.offsetLeft + cropElement.offsetWidth &&
      cursorPosition.y >= cropElement.offsetTop &&
      cursorPosition.y <= cropElement.offsetTop + cropElement.offsetHeight
    ) {
      if (event.deltaY < 0) {
        scale += 0.15
      } else {
        scale -= 0.15
      }

      scale = Math.max(scale, 1.0)
      setCropScale(scale)
    }
  }

  const onCropConfirmed = () => {
    setIsModalVisible(false)
    setSelectedImage('')

    if (editorRef?.current) {
      const canvas = editorRef?.current.getImage().toDataURL()
      fetch(canvas)
        .then((res) => res.blob())
        .then((blob) => setImageURL(URL.createObjectURL(blob)))
    }
  }

  const onCropCanceled = () => {
    setSelectedImage('')
    setIsModalVisible(false)
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('wheel', onCropScroll)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('wheel', onCropScroll)
    }
  }, [])

  useEffect(() => {
    if (imageURL) {
      onChange?.(imageURL)
    }
  }, [imageURL])

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
      {editMode && (
        <Modal
          {...modalProps}
          visible={isModalVisible}
          onConfirm={onCropConfirmed}
          onCancel={onCropCanceled}
        >
          <div ref={cropRef}>
            <AvatarEditor
              ref={editorRef}
              image={selectedImage}
              width={250}
              height={250}
              border={50}
              borderRadius={250}
              color={[0, 0, 0, 0.6]}
              scale={cropScale}
              rotate={0}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
