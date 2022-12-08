import CropImage from './crop-image'

export default {
  title: 'General/Crop Image',
  component: CropImage,
}

export const Default = (args: any) => {
  return (
    <>
      <CropImage {...args} />
    </>
  )
}

Default.args = {
  isVisible: true,
  src: 'https://via.placeholder.com/150',
}
