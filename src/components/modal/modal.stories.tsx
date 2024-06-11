import { actions } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { Modal } from '.'
import { Typography } from '../../index'
import { Badge } from '../badge'
import { Button } from '../button'
import { Delete, Error, CheckCircle } from '../icon/icons/line'
import { Dropdown } from '../dropdown'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Overlays/Modal',
  component: Modal,
  argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args: any) => (
  <Modal {...args} onCancel={() => console.log('close')}>
    <div style={{ backgroundColor: '#fff', height: '100%' }}>
      <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
        Modal content is inserted here, if you need to insert anything into the
        Modal you can do so via{' '}
        <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
          {'{children}'}
        </Typography.Text>
      </Typography.Text>
    </div>
  </Modal>
)

export const withIcon = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withVerticalLayout = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withCloseButton = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      This Modal has a close button on the top right
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const rightAlignedFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const hideFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const withFooterBackground = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooter = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const customFooterVertical = (args: any) => (
  <Modal {...args}>
    <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via{' '}
      <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
        {'{children}'}
      </Typography.Text>
    </Typography.Text>
  </Modal>
)

export const LongModal = () => (
  <div>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <p>
      Modal content is inserted here, if you need to insert anything into the
      Modal you can do so via
    </p>
    <Modal visible={true}>
      <Typography.Text type="secondary" style={{ color: 'rgb(15,15,15)' }}>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <p>
          Modal content is inserted here, if you need to insert anything into
          the Modal you can do so via
        </p>
        <Typography.Text code style={{ color: 'rgb(15,15,15)' }}>
          {'{children}'}
        </Typography.Text>
      </Typography.Text>
    </Modal>
  </div>
)

export const CustomFooterOneButton = (args: any) => <Modal {...args} />

export const ModalWithDropdowns = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Open</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(!visible)}
        hideFooter
      // className="pointer-events-auto"
      >
        <Button as="span">Trigger dropdown</Button>
        <Dropdown>
          <>
            <Dropdown.Item onClick={() => console.log('item 1 clicked')}>
              Item 1
            </Dropdown.Item>
            <Dropdown.Item onClick={() => console.log('item 2 clicked')}>
              Item 2
            </Dropdown.Item>
          </>
        </Dropdown>
      </Modal>
    </>
  )
}

Default.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

withFooterBackground.args = {
  visible: true,
  footerBackground: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

const icon = <Error />

withIcon.args = {
  visible: true,
  showIcon: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

withCloseButton.args = {
  visible: true,
  closable: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This Modal has a close button on the top right',
  description: 'And i am the description',
}

withVerticalLayout.args = {
  visible: true,
  size: 'small',
  layout: 'vertical',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  icon: icon,
}

rightAlignedFooter.args = {
  visible: true,
  alignFooter: 'right',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

hideFooter.args = {
  visible: true,
  hideFooter: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
}

customFooter.args = {
  visible: true,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  customFooter: [
    <div>
      <div>
        <Badge color="red" dot size="small">
          Proceed with caution
        </Badge>
      </div>
      <Button type="secondary">Cancel</Button>
      <Button danger>Delete</Button>
    </div>,
  ],
}

customFooterVertical.args = {
  visible: true,
  size: 'small',
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'This is the title of the modal',
  description: 'And i am the description',
  layout: 'vertical',
  customFooter: [
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button size="medium" block type="secondary">
        Cancel
      </Button>
      <Button size="medium" block danger icon={<Delete />}>
        Delete
      </Button>
    </div>,
  ],
}

CustomFooterOneButton.args = {
  visible: true,
  size: 'small',
  icon: <CheckCircle />,
  onCancel: action('onCancel'),
  onConfirm: action('onConfirm'),
  title: 'Payment succesful',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
  layout: 'vertical',
  customFooter: [
    <div style={{ width: '100%' }}>
      <Button size="medium" block icon={<CheckCircle />}>
        Confirm
      </Button>
    </div>,
  ],
}
