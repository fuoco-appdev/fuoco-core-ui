import React, { useEffect, useRef, useState } from 'react'
import { Modal, ModalProps } from '../modal'
import AvatarEditor, { AvatarEditorProps } from 'react-avatar-editor'

export interface CropProps {
  isVisible?: boolean
  src: File
  modalProps?: ModalProps
  editorProps?: AvatarEditorProps
  onConfirmed?: () => void
  onCanceled?: () => void
  onChange?: (blob: Blob) => void
}

export default function CropImage({
  isVisible,
  src,
  modalProps = {
    visible: false,
    confirmText: 'Crop',
  },
  editorProps = {
    image: '',
    width: 250,
    height: 250,
    border: 50,
    borderRadius: 250,
    color: [0, 0, 0, 0.6],
  },
  onConfirmed,
  onCanceled,
  onChange,
}: CropProps): JSX.Element {
  const cropRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<any | null>(null)
  let cursorPosition: { x: number; y: number } = { x: 0, y: 0 }
  let scale = 1.0
  const [cropScale, setCropScale] = useState<number>(scale)

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
    onConfirmed?.()

    if (editorRef?.current) {
      const canvas = editorRef?.current.getImage().toDataURL()
      fetch(canvas)
        .then((res) => res.blob())
        .then((blob) => onChange?.(blob))
    }
  }

  const onCropCanceled = () => {
    onCanceled?.()
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('wheel', onCropScroll)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('wheel', onCropScroll)
    }
  }, [])

  return (
    <Modal
      {...modalProps}
      visible={isVisible ?? false}
      onConfirm={onCropConfirmed}
      onCancel={onCropCanceled}
    >
      <div ref={cropRef}>
        <AvatarEditor
          {...editorProps}
          ref={editorRef}
          image={src}
          scale={cropScale}
          rotate={0}
        />
      </div>
    </Modal>
  )
}
