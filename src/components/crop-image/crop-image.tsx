import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Modal, ModalProps, ModalClasses } from '../modal'
import ReactCrop, {
  ReactCropProps,
  Crop,
  centerCrop,
  makeAspectCrop,
  convertToPixelCrop,
  PixelCrop,
  PercentCrop,
} from 'react-image-crop'
import { Overlay, OverlayClasses } from '../overlay'

// @ts-ignore
import styles from './crop-image.module.scss'
import { Typography } from '../typography'
import { Close } from '../icon/icons/line'
import { Button } from '../button'
import { ButtonClasses } from '../button/button'
import { RipplesProps } from 'react-ripples'
import { Line } from '../icon'
import 'react-image-crop/src/ReactCrop.scss'

export interface CropClasses {
  root?: string
  topBar?: string
  topBarTitle?: string
  closeButton?: ButtonClasses
  saveContainer?: string
  save?: string
  saveButton?: ButtonClasses
  modal?: ModalClasses
  overlay?: OverlayClasses
  avatarEditorContainer?: string
}

export interface CropProps {
  src?: FileList
  strings?: {
    title?: string
    confirmText?: string
  }
  loading?: boolean
  loadingComponent?: JSX.Element
  classNames?: CropClasses
  closeRippleProps?: RipplesProps
  anchorRef?: React.RefObject<any>
  isVisible?: boolean
  touchScreen?: boolean
  modalProps?: ModalProps
  editorProps?: ReactCropProps
  onConfirmed?: (index: number) => void
  onCanceled?: () => void
  onChange?: (index: number, blob: Blob) => void
  onLoading?: (loading: boolean) => void
}

export default function CropImage({
  src,
  strings = {
    title: 'Crop image',
    confirmText: 'Crop',
  },
  loading,
  loadingComponent,
  classNames,
  closeRippleProps,
  anchorRef,
  isVisible,
  touchScreen = false,
  modalProps = {
    visible: false,
    confirmText: 'Crop',
  },
  editorProps,
  onConfirmed,
  onCanceled,
  onChange,
  onLoading,
}: CropProps): JSX.Element {
  const cropRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [images, setImages] = useState<string[]>([])
  const [crop, setCrop] = useState<Crop>({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  })
  const [pixelCrop, setPixelCrop] = useState<PixelCrop | null>(null)

  const onCropConfirmed = () => {
    if (!src) {
      return
    }

    onLoading?.(true)
    const image = imageRef.current
    if (pixelCrop && image) {
      const canvas = document.createElement('canvas')
      const scaleX = image.naturalWidth / image.width
      const scaleY = image.naturalHeight / image.height
      canvas.width = crop.width
      canvas.height = crop.height
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        return
      }

      const pixelRatio = window.devicePixelRatio
      canvas.width = crop.width * pixelRatio
      canvas.height = crop.height * pixelRatio
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      ctx.imageSmoothingQuality = 'high'

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      )

      // Converting to base64
      canvas.toBlob((blob: Blob | null) => {
        if (!blob) {
          return
        }

        onChange?.(selectedIndex, blob)
      })
    }

    onConfirmed?.(selectedIndex)

    if (selectedIndex < src.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const onCropCanceled = () => {
    onLoading?.(false)
    onCanceled?.()
  }

  const onImageLoad = (e) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget

    const crop = centerCrop(
      makeAspectCrop(
        {
          // You don't need to pass a complete crop into
          // makeAspectCrop or centerCrop.
          unit: '%',
          width: 90,
        },
        1,
        width,
        height,
      ),
      width,
      height,
    )

    setCrop(crop)
  }

  useEffect(() => {
    if (!src) {
      return
    }

    const urls: string[] = []
    for (let i = 0; i < src.length; i++) {
      const file = src[i]
      const url = URL.createObjectURL(file)
      urls.push(url)
    }

    setImages(urls)
  }, [src])

  if (!src) {
    return <></>
  }

  return touchScreen ? (
    <Overlay
      classNames={classNames?.overlay}
      touchScreen={true}
      visible={isVisible ?? false}
      hideCloseButton={true}
      anchorRef={anchorRef}
    >
      <div className={[styles['root'], classNames?.root].join(' ')}>
        <div className={[styles['top-bar'], classNames?.topBar].join(' ')}>
          <div
            className={[styles['top-bar-title'], classNames?.topBarTitle].join(
              ' ',
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
              icon={<Close size={21} />}
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
          {src && (
            <ReactCrop
              ruleOfThirds={true}
              circularCrop={true}
              aspect={1}
              {...editorProps}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(crop: PixelCrop, percentCrop: PercentCrop) =>
                setPixelCrop(crop)
              }
            >
              <img
                style={{
                  objectFit: 'contain',
                }}
                ref={imageRef}
                src={images[selectedIndex]}
                onLoad={onImageLoad}
              />
            </ReactCrop>
          )}
        </div>
        <div
          className={[
            styles['save-container-touchscreen'],
            classNames?.saveContainer,
          ].join(' ')}
        >
          <div
            className={[styles['save-touchscreen'], classNames?.save].join(' ')}
          >
            <Button
              block={true}
              touchScreen={touchScreen}
              type={'primary'}
              size={'medium'}
              onClick={onCropConfirmed}
              classNames={{
                root: [styles['save-button-root']].join(' '),
                button: [styles['save-button']].join(' '),
                ...classNames?.saveButton,
              }}
              icon={<Line.Transform size={24} />}
              loading={loading}
              loadingComponent={loadingComponent}
            >
              {strings?.confirmText}
            </Button>
          </div>
        </div>
      </div>
    </Overlay>
  ) : (
    <Modal
      hideFooter={true}
      {...modalProps}
      visible={isVisible ?? false}
      onConfirm={onCropConfirmed}
      onCancel={onCropCanceled}
      classNames={{
        footerContainer: styles['modal-footer-container'],
        ...classNames?.modal,
      }}
    >
      <div
        className={[
          styles['avatar-editor-container'],
          classNames?.avatarEditorContainer,
        ].join(' ')}
        ref={cropRef}
      >
        {src && (
          <ReactCrop
            ruleOfThirds={true}
            circularCrop={true}
            aspect={1}
            {...editorProps}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(crop: PixelCrop, percentCrop: PercentCrop) =>
              setPixelCrop(crop)
            }
          >
            <img
              ref={imageRef}
              style={{
                objectFit: 'contain',
              }}
              src={images[selectedIndex]}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
      </div>
      <div
        className={[styles['save-button-container'], classNames?.save].join(
          ' ',
        )}
      >
        <Button
          block={true}
          touchScreen={touchScreen}
          type={'primary'}
          size={'large'}
          onClick={onCropConfirmed}
          classNames={{
            button: [styles['save-button']].join(' '),
            ...classNames?.saveButton,
          }}
          icon={<Line.Transform size={24} />}
          loading={loading}
          loadingComponent={loadingComponent}
        >
          {strings?.confirmText}
        </Button>
      </div>
    </Modal>
  )
}
