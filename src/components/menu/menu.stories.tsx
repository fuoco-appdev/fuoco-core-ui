import React from 'react'

import { Divider } from '../divider'
import { Email } from '../icon/icons/line'
import { Typography } from '../../index'

import { Menu } from '.'

export default {
  title: 'Navigation/Menu',
  component: Menu,
}

export const Default = (args: any) => (
  <Menu>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
  </Menu>
)

export const withActiveState = (args: any) => (
  <Menu>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Divider />
    <Menu.Item active icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
  </Menu>
)

export const withRounded = (args: any) => (
  <Menu>
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Divider />
    <Menu.Item rounded active icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
  </Menu>
)

export const withGroupTitles = () => (
  <Menu>
    <Menu.Group title="First group" />
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item rounded icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
  </Menu>
)

export const withActiveBar = () => (
  <Menu>
    <Menu.Group title="First group" />
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Menu.Item active showActiveBar icon={<Email size={24} />}>
      Account settings
    </Menu.Item>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Menu.Group title="Second group" />
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
    <Menu.Item icon={<Email size={24} />}>Account settings</Menu.Item>
  </Menu>
)

Default.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withActiveState.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}

withRounded.args = {
  title: 'I am a title',
  titleExtra: <Typography.Link>Learn more</Typography.Link>,
}
