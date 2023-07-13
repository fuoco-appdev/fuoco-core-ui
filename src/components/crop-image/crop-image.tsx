import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Modal, ModalProps, ModalClasses } from '../modal'
import AvatarEditor, { AvatarEditorProps } from 'react-avatar-editor'
import { Overlay, OverlayClasses } from '../overlay'

// @ts-ignore
import styles from './crop-image.module.scss'
import { Typography } from '../typography'
import { Close } from '../icon/icons/line'
import { Button } from '../button'
import { ButtonClasses } from '../button/button'
import { RipplesProps } from 'react-ripples'

export interface CropClasses {
  topBar?: string
  topBarTitle?: string
  closeButton?: ButtonClasses
  saveButtonContainer?: string
  saveButton?: ButtonClasses
  modal?: ModalClasses
  overlay?: OverlayClasses
  avatarEditorContainer?: string
}

export interface CropProps {
  src: FileList
  strings?: {
    title?: string
    confirmText?: string
  }
  classNames?: CropClasses
  closeRippleProps?: RipplesProps
  anchorRef?: React.RefObject<any>
  isVisible?: boolean
  touchScreen?: boolean
  modalProps?: ModalProps
  editorProps?: AvatarEditorProps
  cropRatio?: [number, number]
  onConfirmed?: (index: number) => void
  onCanceled?: () => void
  onChange?: (index: number, blob: Blob) => void
}

export default function CropImage({
  src,
  strings = {
    title: 'Crop image',
    confirmText: 'Save',
  },
  classNames,
  closeRippleProps,
  anchorRef,
  isVisible,
  touchScreen = false,
  modalProps = {
    visible: false,
    confirmText: 'Save',
  },
  editorProps,
  cropRatio = [1, 1],
  onConfirmed,
  onCanceled,
  onChange,
}: CropProps): JSX.Element {
  const cropRef = useRef<HTMLDivElement | null>(null)
  const editorRef = useRef<any | null>(null)
  let cursorPosition: { x: number; y: number } = { x: 0, y: 0 }
  let scale = 1.0
  const [cropScale, setCropScale] = useState<number>(scale)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const onMouseMove = (event: MouseEvent) => {
    cursorPosition.x = event.clientX
    cursorPosition.y = event.clientY
  }

  const onCropScroll = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      scale += 0.15
    } else {
      scale -= 0.15
    }

    scale = Math.max(scale, 1.0)
    setCropScale(scale)
  }

  const onCropConfirmed = () => {
    if (editorRef?.current) {
      const canvas = editorRef?.current.getImage().toDataURL()
      fetch(canvas)
        .then((res) => res.blob())
        .then((blob) => onChange?.(selectedIndex, blob))
    }

    onConfirmed?.(selectedIndex)

    if (selectedIndex < src.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const onCropCanceled = () => {
    onCanceled?.()
  }

  let hypo: number = 0
  let prevHypo: number = 0
  const onCropTouchMove = (event: TouchEvent) => {
    if (event.targetTouches.length === 2) {
      hypo = Math.hypot(
        event.targetTouches[0].pageX - event.targetTouches[1].pageX,
        event.targetTouches[0].pageY - event.targetTouches[1].pageY
      )

      if (prevHypo < hypo) {
        scale += 0.05
      } else {
        scale -= 0.05
      }

      scale = Math.max(scale, 1.0)
      setCropScale(scale)
      prevHypo = hypo
    }
  }

  const onCropTouchEnd = (event: TouchEvent) => {
    prevHypo = hypo
  }

  useLayoutEffect(() => {
    cropRef.current?.addEventListener('mousemove', onMouseMove, false)
    cropRef.current?.addEventListener('wheel', onCropScroll, false)
    cropRef.current?.addEventListener('touchmove', onCropTouchMove, false)
    cropRef.current?.addEventListener('touchend', onCropTouchEnd, false)

    return () => {
      cropRef.current?.removeEventListener('mousemove', onMouseMove)
      cropRef.current?.removeEventListener('wheel', onCropScroll)
      cropRef.current?.removeEventListener('touchmove', onCropTouchMove)
      cropRef.current?.removeEventListener('touchend', onCropTouchEnd)
    }
  }, [])

  return touchScreen ? (
    <Overlay
      classNames={classNames?.overlay}
      touchScreen={true}
      visible={isVisible ?? false}
      hideCloseButton={true}
      anchorRef={anchorRef}
    >
      <div className={[styles['top-bar'], classNames?.topBar].join(' ')}>
        <div
          className={[styles['top-bar-title'], classNames?.topBarTitle].join(
            ' '
          )}
        >
          {strings?.title}
        </div>
        <div>
          <Button
            classNames={{
              container: styles['exit-button-container'],
              button: styles['exit-button'],
              ...classNames?.closeButton,
            }}
            touchScreen={touchScreen}
            icon={<Close stroke={'#fff'} size={24} />}
            type={'text'}
            size={'small'}
            onClick={onCanceled}
            rippleProps={{
              color: 'rgba(255, 255, 255, 0.35)',
              ...closeRippleProps,
            }}
          />
        </div>
      </div>
      <div
        className={[styles['avatar-editor-container']].join(' ')}
        ref={cropRef}
      >
        <AvatarEditor
          width={window.innerWidth}
          height={(window.innerWidth / cropRatio[1]) * cropRatio[0]}
          border={0}
          borderRadius={window.innerWidth}
          color={[0, 0, 0, 0.35]}
          backgroundColor={'#000'}
          ref={editorRef}
          scale={cropScale}
          rotate={0}
          {...editorProps}
          image={src[selectedIndex]}
        />
      </div>
      <div
        className={[
          styles['save-button-container'],
          classNames?.saveButtonContainer,
        ].join(' ')}
      >
        <Button
          block={true}
          touchScreen={touchScreen}
          type={'primary'}
          size={'large'}
          onClick={onCropConfirmed}
          classNames={classNames?.saveButton}
        >
          {strings?.confirmText}
        </Button>
      </div>
    </Overlay>
  ) : (
    <Modal
      {...modalProps}
      visible={isVisible ?? false}
      onConfirm={onCropConfirmed}
      onCancel={onCropCanceled}
      classNames={{
        footerContainer: styles['modal-footer-container'],
        ...classNames?.modal,
      }}
    >
      <div className={[styles['top-bar'], classNames?.topBar].join(' ')}>
        <div
          className={[styles['top-bar-title'], classNames?.topBarTitle].join(
            ' '
          )}
        >
          {strings?.title}
        </div>
      </div>
      <div
        className={[
          styles['avatar-editor-container'],
          classNames?.avatarEditorContainer,
        ].join(' ')}
        ref={cropRef}
      >
        <AvatarEditor
          rotate={0}
          {...editorProps}
          ref={editorRef}
          image={src[selectedIndex]}
          scale={cropScale}
        />
      </div>
    </Modal>
  )
}
