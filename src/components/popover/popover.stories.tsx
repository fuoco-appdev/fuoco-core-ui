import { Button } from '../button'
import { Divider } from '../divider'
import { ExpandMore, Login } from '../icon/icons/line'
import { Typography } from '../../index'
import { Popover } from '.'
import { Input } from '../input'

export default {
  title: 'Navigation/Popover',
  component: Popover,
}

export const Default = (args: any) => (
  <div className="flex justify-center">
    <Popover
      {...args}
      side="bottom"
      align="center"
      portalled
      showClose
      className="w-96"
      overlay={[
        <>
          <div className="p-3 px-4">
            <Typography.Title className="mt-0" level={5}>
              Title is here
            </Typography.Title>
            <Input
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
            <Input
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
            <Input
              label="Width"
              defaultValue="100%"
              descriptionText="Set the width of something"
              layout="horizontal"
            />
          </div>
        </>,
      ]}
    >
      <Button as="span" type="outline" iconRight={<ExpandMore size={24} />}>
        Click for Popover
      </Button>
    </Popover>
  </div>
)

Default.args = {}
