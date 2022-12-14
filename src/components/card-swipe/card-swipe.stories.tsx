import { useRef, useState } from 'react'
import { CardSwipe } from '.'
import { Button } from '../button'
import { CropImage } from '../crop-image'

export default {
  title: 'Displays/Card Swipe',
  component: CardSwipe,
}

export const Horizontal = (args: any) => (
  <div style={{ height: '50vh', width: '50vw' }}>
    <CardSwipe
      {...args}
      items={[
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg'
          }
        />,
      ]}
    ></CardSwipe>
  </div>
)

export const Vertical = (args: any) => (
  <div style={{ height: '50vh', width: '50vw' }}>
    <CardSwipe
      {...args}
      items={[
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg'
          }
        />,
      ]}
    ></CardSwipe>
  </div>
)

export const Scale = (args: any) => (
  <div style={{ height: '50vh', width: '50vw' }}>
    <CardSwipe
      {...args}
      items={[
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg'
          }
        />,
        <img
          style={{ height: 'inherit', width: 'inherit', objectFit: 'contain' }}
          src={
            'https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie.jpg'
          }
        />,
      ]}
    ></CardSwipe>
  </div>
)

export const WithCrop = (args: any) => {
  const coverImageFileRef = useRef<HTMLInputElement | null>(null)
  const [selectedImages, setSelectedImages] = useState<FileList | null>(null)
  const [isCropModalVisible, setIsCropModalVisible] = useState<boolean>(false)
  const [coverImages, setCoverImages] = useState<React.ReactElement[]>([])
  const onCoverImageFileChanged = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files && event.target.files
    if (!files || (files && files?.length <= 0)) {
      return
    }

    setSelectedImages(files)
    setIsCropModalVisible(true)
  }
  const onCropConfirmed = (index: number) => {
    if (selectedImages && index >= selectedImages?.length - 1) {
      setIsCropModalVisible(false)
      setSelectedImages(null)
    }
  }

  const onCropCanceled = () => {
    setIsCropModalVisible(false)
    setSelectedImages(null)
  }

  const onCoverChanged = (index: number, blob: Blob) => {
    const url = URL.createObjectURL(blob)
    if (index <= 0) {
      const images = [
        <img
          style={{
            height: 'inherit',
            width: 'inherit',
            objectFit: 'contain',
            borderRadius: '6px',
          }}
          src={url}
        />,
      ]
      setCoverImages(images)
    } else {
      const images = coverImages.concat([
        <img
          style={{
            height: 'inherit',
            width: 'inherit',
            objectFit: 'contain',
            borderRadius: '6px',
          }}
          src={url}
        />,
      ])
      setCoverImages(images)
    }
  }

  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <div
        style={{
          position: 'relative',
          borderRadius: '6px',
          backgroundColor: 'grey',
          height: 'calc((383px / 3) * 2)',
          width: '383px',
          userSelect: 'none',
        }}
      >
        <CardSwipe items={coverImages} />
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            padding: '8px',
            pointerEvents: 'none',
            top: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'end',
              flexDirection: 'row',
            }}
          >
            <input
              ref={coverImageFileRef}
              type="file"
              accept=".png, .jpg, .jpeg, .svg"
              style={{ display: 'none' }}
              multiple={true}
              onChange={onCoverImageFileChanged}
            />
            <Button
              type={'default'}
              size={'tiny'}
              onClick={() => coverImageFileRef?.current?.click()}
            >
              <span
                style={{
                  fontWeight: '600',
                  fontSize: '12px',
                }}
              >
                Import Images
              </span>
            </Button>
          </div>
        </div>
      </div>
      {selectedImages && (
        <CropImage
          src={selectedImages}
          isVisible={isCropModalVisible}
          onChange={onCoverChanged}
          onConfirmed={onCropConfirmed}
          onCanceled={onCropCanceled}
          editorProps={{
            image: '',
            width: 600,
            height: 400,
            border: 50,
            borderRadius: 4,
            color: [0, 0, 0, 0.6],
          }}
        />
      )}
    </div>
  )
}

Horizontal.args = {
  orientation: 'horizontal',
}

Vertical.args = {
  orientation: 'vertical',
}

Scale.args = {
  allowScale: true,
}

WithCrop.args = {}
