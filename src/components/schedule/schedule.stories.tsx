import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Schedule from './schedule'

const meta: Meta = {
  title: 'General/Schedule',
  component: Schedule,
}

export default meta

type Story = StoryObj<typeof Schedule>

export const Default: Story = {
  render: () => {
    const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
      return {
        id,
        startTime: new Date(
          new Date(new Date().setDate(new Date().getDate() + id)).setHours(
            9,
            0,
            0,
            0,
          ),
        ),
        endTime: new Date(
          new Date(new Date().setDate(new Date().getDate() + id)).setHours(
            17,
            0,
            0,
            0,
          ),
        ),
      }
    })
    const [startTime, setStartTime] = useState<Date | undefined>(undefined)

    return (
      <Schedule
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        startTime={startTime}
        onStartTimeSelect={(event) => console.log(event.startTime)}
      />
    )
  },
}
