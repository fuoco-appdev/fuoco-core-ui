import CropImage from './crop-image'

export default {
  title: 'General/Crop Image',
  component: CropImage,
}

export const Default = (args: any) => {
  return (
    <>
      <CropImage
        {...args}
        isVisible={true}
        src={['https://miro.medium.com/max/1200/1*jIwBKde_hz5cDOVw6tyA4Q.jpeg']}
      />
    </>
  )
}

export const TouchScreen = (args: any) => {
  return (
    <>
      <CropImage
        {...args}
        isVisible={true}
        src={['https://miro.medium.com/max/1200/1*jIwBKde_hz5cDOVw6tyA4Q.jpeg']}
        touchScreen={true}
      />
    </>
  )
}

Default.args = {}

TouchScreen.args = {}
