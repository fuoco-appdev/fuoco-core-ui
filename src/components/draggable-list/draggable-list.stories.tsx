import DraggableList, { DraggableListItem } from './draggable-list'

export default {
  title: 'List/Draggable List',
  component: DraggableList,
}

const items: DraggableListItem[] = [
  {
    id: 'Lorem',
    height: 56,
    element: (
      <div
        style={{
          height: '56px',
          width: '100%',
          backgroundColor: 'blue',
          color: 'white',
          textAlign: 'center',
          lineHeight: '56px',
        }}
      >
        Lorem
      </div>
    ),
  },
  {
    id: 'ipsum',
    height: 56,
    element: (
      <div
        style={{
          height: '56px',
          width: '100%',
          backgroundColor: 'red',
          color: 'white',
          textAlign: 'center',
          lineHeight: '56px',
        }}
      >
        ipsum
      </div>
    ),
  },
  {
    id: 'dolor',
    height: 56,
    element: (
      <div
        style={{
          height: '56px',
          width: '100%',
          backgroundColor: 'yellow',
          color: 'white',
          textAlign: 'center',
          lineHeight: '56px',
        }}
      >
        dolor
      </div>
    ),
  },
  {
    id: 'sit',
    height: 56,
    element: (
      <div
        style={{
          height: '56px',
          width: '100%',
          backgroundColor: 'green',
          color: 'white',
          textAlign: 'center',
          lineHeight: '56px',
        }}
      >
        sit
      </div>
    ),
  },
]

export const Default = (args: any) => {
  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <DraggableList items={items} />
    </div>
  )
}

Default.args = {}
