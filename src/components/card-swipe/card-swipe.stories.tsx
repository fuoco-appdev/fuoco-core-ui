import { CardSwipe } from '.'

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
      ]}
    ></CardSwipe>
  </div>
)

Horizontal.args = {
  orientation: 'horizontal',
}

Vertical.args = {
  orientation: 'vertical',
}

Scale.args = {
  allowScale: true,
}
