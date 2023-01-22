import React, { useRef, useState } from 'react'
import { Overlay } from '.'
import { Card } from '../card'

export default {
  title: 'Overlays/Overlay',
  component: Overlay,
}

export const Default = (args: any) => {
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <Card
        style={{ width: '10vw', height: '10vh' }}
        clickable={true}
        onClick={() => setOpenOverlay(true)}
      ></Card>
      <Overlay
        visible={openOverlay}
        onClose={() => setOpenOverlay(false)}
      ></Overlay>
    </div>
  )
}

export const WithAnchor = (args: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <Card
        ref={cardRef}
        style={{ width: '10vw', height: '10vh' }}
        clickable={true}
        onClick={() => setOpenOverlay(true)}
      ></Card>
      <Overlay
        anchorRef={cardRef}
        visible={openOverlay}
        onClose={() => setOpenOverlay(false)}
      ></Overlay>
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [openOverlay, setOpenOverlay] = useState<boolean>(false)

  return (
    <div style={{ height: '80vh', width: '80vw' }}>
      <Card
        ref={cardRef}
        style={{ width: '10vw', height: '10vh' }}
        clickable={true}
        onClick={() => setOpenOverlay(true)}
      ></Card>
      <Overlay
        touchScreen={true}
        anchorRef={cardRef}
        visible={openOverlay}
        onClose={() => setOpenOverlay(false)}
      ></Overlay>
    </div>
  )
}

Default.args = {}

WithAnchor.args = {}

TouchScreen.args = {}
