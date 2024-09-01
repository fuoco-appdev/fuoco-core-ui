import {
  Locale,
  addDays,
  addMinutes,
  addMonths,
  differenceInMinutes,
  format,
  isAfter,
  isPast,
  isSameDay,
  isSameMinute,
  isToday,
  subDays,
  subMonths,
  isValid,
  startOfMonth,
} from 'date-fns'
import { useEffect, useState } from 'react'
// @ts-ignore
import styles from './schedule.module.scss'
import Button from '../button/button'
import { Line } from '../icon'
import { Typography } from '../typography'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Divider } from '../divider'
import { Scroll } from '../scroll'
import React from 'react'

export type AvailableTimeslot = {
  startTime: Date | string
  endTime: Date | string
  id?: string | number | undefined
}

export type StartTimeEvent = {
  availableTimeslot: AvailableTimeslot
  startTime: Date
}

export type ModifiedTimeslot = AvailableTimeslot & {
  oldId: string | number | undefined
}

export type SplitTimeslot = null | ModifiedTimeslot

export type StartTimeEventEmit = StartTimeEvent & {
  splitTimeslot?: [SplitTimeslot, SplitTimeslot]
  resetDate: () => void
  resetSelectedTimeState: () => void
}

export interface ScheduleClasses {
  root?: string
  calendar?: string
  header?: string
  startTimeListContainer?: string
  noTimesAvailableContainer?: string
  scrollEdgeFadeTop?: string
  scrollEdgeFadeBottom?: string
  startTimeListItemContainer?: string
  listItemDivider?: string
  gridContainer?: string
}

export interface ScheduleStrings {
  cancelButtonText?: string
  confirmButtonText?: string
  emptyListText?: string
  goToNextAvailableDayText?: string
  noFutureTimesText?: string
  selectedButtonText?: string
}

export interface ScheduleProps {
  availableTimeslots?: AvailableTimeslot[]
  classNames?: ScheduleClasses
  strings?: ScheduleStrings
  defaultDate?: Date
  emptyListContentEl?: React.ElementType
  eventDurationInMinutes?: number
  eventStartTimeSpreadInMinutes?: number
  formatNextFutureStartTimeAvailableFormatString?: string
  formatSelectedDateDayTitleFormatString?: string
  formatSelectedDateMonthTitleFormatString?: string
  formatStartTimeFormatString?: string
  locale?: Locale
  onNoFutureTimesAvailable?: (selectedDate: Date) => void
  onSelectedDayChange?: (day: Date) => void
  onStartTimeSelect?: (startTimeEventEmit: StartTimeEventEmit) => void
  scheduleMeetingStyles?: React.CSSProperties
  startTime?: Date
  skipConfirmCheck?: boolean
  startTimeListStyle?: 'scroll-list' | 'grid'
  textColor?: string
}

function Schedule({
  availableTimeslots = [],
  classNames,
  strings = {
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Confirm',
    emptyListText: 'No times available',
    goToNextAvailableDayText: 'Next Available',
    noFutureTimesText: 'No future times available',
    selectedButtonText: 'Selected:',
  },
  defaultDate,
  emptyListContentEl,
  eventDurationInMinutes = 30,
  eventStartTimeSpreadInMinutes = 0,
  formatNextFutureStartTimeAvailableFormatString = 'cccc, LLLL do',
  formatSelectedDateDayTitleFormatString = 'cccc, LLLL do',
  formatSelectedDateMonthTitleFormatString = 'LLLL yyyy',
  formatStartTimeFormatString = 'h:mm a',
  locale,
  onNoFutureTimesAvailable,
  onSelectedDayChange,
  onStartTimeSelect,
  scheduleMeetingStyles,
  startTime,
  skipConfirmCheck = false,
  startTimeListStyle = 'grid',
  textColor,
}: ScheduleProps) {
  const [selectedStartTime, setSelectedStartTime] = useState<
    number | undefined
  >(startTime ? startTime.getTime() : undefined)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [startTimeEventsList, setStartTimeEventsList] = useState(
    [] as StartTimeEvent[],
  )
  const [selectedDayStartTimeEventsList, setSelectedDayStartTimeEventsList] =
    useState([] as StartTimeEvent[])
  const [nextFutureStartTimeAvailable, setNextFutureStartTimeAvailable] =
    useState<undefined | Date>()
  const [orderedAvailableTimeslots, setOrderedAvailableTimeslots] = useState<
    AvailableTimeslot[]
  >([])
  const [daysAvailable, setDaysAvailable] = useState<Array<any>>([])

  useEffect(() => {
    setSelectedStartTime(startTime ? startTime.getTime() : undefined)
  }, [startTime])

  useEffect(() => {
    const _orderedAvailableTimeslots = [...availableTimeslots]
    _orderedAvailableTimeslots.sort((a, b) => {
      return new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    })
    setOrderedAvailableTimeslots(_orderedAvailableTimeslots)
  }, [availableTimeslots])

  useEffect(() => {
    const daysInTimeslots: string[] = []
    startTimeEventsList.map((slot) => {
      if (!isValid(new Date(slot.startTime)))
        throw new Error(
          `Invalid date for start time on slot ${slot.availableTimeslot.id}`,
        )
      const date = formatDate(slot.startTime, locale)
      if (daysInTimeslots.indexOf(date) === -1) {
        daysInTimeslots.push(date)
      }
      return null
    })

    setDaysAvailable(daysInTimeslots)
  }, [startTimeEventsList])

  const onDaySelected = (day: Date) => {
    setSelectedDay(day)
    onSelectedDayChange && onSelectedDayChange(day)
  }

  const formatDate = (date: Date, locale?: Locale) => {
    return format(date, 'MM/dd/yyyy', { locale })
  }

  const splitTimeslot = (startTimeEvent: StartTimeEvent) => {
    const splitTimeslots: [SplitTimeslot, SplitTimeslot] = [null, null]
    const minutesIntoTimeslotEventWillStart = differenceInMinutes(
      startTimeEvent.startTime,
      new Date(startTimeEvent.availableTimeslot.startTime),
    )

    if (minutesIntoTimeslotEventWillStart !== 0) {
      const newFirstTimeslot: SplitTimeslot = {
        oldId: startTimeEvent.availableTimeslot.id,
        startTime: startTimeEvent.availableTimeslot.startTime,
        endTime: addMinutes(
          new Date(startTimeEvent.availableTimeslot.startTime),
          minutesIntoTimeslotEventWillStart,
        ),
      }
      splitTimeslots[0] = newFirstTimeslot
    }

    const startTimeOfEndingSplitTimeslot = addMinutes(
      new Date(startTimeEvent.availableTimeslot.startTime),
      minutesIntoTimeslotEventWillStart + eventDurationInMinutes,
    )
    if (
      differenceInMinutes(
        startTimeOfEndingSplitTimeslot,
        new Date(startTimeEvent.availableTimeslot.endTime),
      ) !== 0
    ) {
      const newSecondTimeslot: SplitTimeslot = {
        oldId: startTimeEvent.availableTimeslot.id,
        startTime: startTimeOfEndingSplitTimeslot,
        endTime: startTimeEvent.availableTimeslot.endTime,
      }
      splitTimeslots[1] = newSecondTimeslot
    }

    return splitTimeslots
  }

  const _onStartTimeSelect = (
    startTimeEvent: StartTimeEvent,
    index: number,
  ) => {
    const splitTimeslots = splitTimeslot(startTimeEvent)
    const startTimeEventEmitObject: StartTimeEventEmit = {
      ...startTimeEvent,
      splitTimeslot: splitTimeslots,
      resetDate: () => setSelectedDay(defaultDate || new Date()),
      resetSelectedTimeState: () => setSelectedStartTime(undefined),
    }

    setSelectedStartTime(startTimeEvent.startTime.getTime())

    if (onStartTimeSelect) {
      onStartTimeSelect(startTimeEventEmitObject)
    }
  }

  const onStartTimeItemClicked = (
    startTimeEvent: StartTimeEvent,
    index: number,
  ) => {
    if (skipConfirmCheck || selectedItemIndex === index) {
      _onStartTimeSelect(startTimeEvent, index)
      setSelectedItemIndex(-1)
    } else {
      setSelectedItemIndex(index)
    }
  }

  useEffect(() => {
    // compile a list of all possible event start times given all timeslots
    const startTimeEvents: StartTimeEvent[] = []

    // iterate through all available timeslots
    for (const availableTimeslot of orderedAvailableTimeslots) {
      const timeslotDuration = differenceInMinutes(
        new Date(availableTimeslot.endTime),
        new Date(availableTimeslot.startTime),
      )

      // this prevents start times from being created where the event duration runs past the available timeslot
      let startTimesPossible =
        Math.floor(
          timeslotDuration /
            (eventDurationInMinutes + eventStartTimeSpreadInMinutes),
        ) - 1

      while (startTimesPossible >= 0) {
        const newStartTimeEvent: StartTimeEvent = {
          availableTimeslot,
          startTime: addMinutes(
            new Date(availableTimeslot.startTime),
            startTimesPossible *
              (eventDurationInMinutes + eventStartTimeSpreadInMinutes),
          ),
        }
        startTimeEvents.push(newStartTimeEvent)
        startTimesPossible--
      }
    }

    // set initial display date
    if (defaultDate) {
      setSelectedDay(defaultDate)
    }

    const orderedStartTimeEvents = startTimeEvents.sort(
      (a: StartTimeEvent, b: StartTimeEvent) =>
        a.startTime.getTime() - b.startTime.getTime(),
    )

    setStartTimeEventsList(orderedStartTimeEvents)
  }, [
    orderedAvailableTimeslots,
    eventDurationInMinutes,
    eventStartTimeSpreadInMinutes,
    defaultDate,
  ])

  useEffect(() => {
    const startTimeEventsToDisplay: StartTimeEvent[] = []

    // filter out startTimeEvents so we get the list of ones to display next to the calendar
    for (const startTimeEvent of startTimeEventsList) {
      // make sure its the same day as the selected day
      if (isSameDay(startTimeEvent.startTime, selectedDay)) {
        // prevents duplicate times (in case there are multiple overlapping shifts)
        if (
          startTimeEventsToDisplay.filter((item: StartTimeEvent) =>
            isSameMinute(item.startTime, startTimeEvent.startTime),
          ).length === 0
        ) {
          if (!isPast(startTimeEvent.startTime)) {
            startTimeEventsToDisplay.push(startTimeEvent)
          }
        }
      }
    }

    // order the events by first in the day
    const orderedEvents = startTimeEventsToDisplay.sort(
      (a: StartTimeEvent, b: StartTimeEvent) =>
        a.startTime.getTime() - b.startTime.getTime(),
    )

    const _nextFutureStartTimeAvailable = startTimeEventsList.find(
      (startTime) => isAfter(startTime.startTime, selectedDay),
    )?.startTime

    if (
      startTimeEventsList.length > 0 &&
      onNoFutureTimesAvailable &&
      !_nextFutureStartTimeAvailable &&
      orderedEvents.length === 0
    ) {
      onNoFutureTimesAvailable(selectedDay)
    }

    setNextFutureStartTimeAvailable(_nextFutureStartTimeAvailable)
    setSelectedDayStartTimeEventsList(orderedEvents)
  }, [selectedDay, startTimeEventsList])

  useEffect(() => {
    setSelectedItemIndex(-1)
  }, [selectedDay])

  const goToPreviousMonth = () => {
    setSelectedDay(subMonths(selectedDay, 1))
  }

  const goToNextMonth = () => {
    setSelectedDay(addMonths(selectedDay, 1))
  }

  const goToPreviousDay = () => {
    setSelectedDay(subDays(selectedDay, 1))
  }

  const goToNextDay = () => {
    setSelectedDay(addDays(selectedDay, 1))
  }

  const handleGoToNextAvailableDay = () => {
    if (nextFutureStartTimeAvailable) {
      setSelectedDay(nextFutureStartTimeAvailable)
    }
  }

  const onClickDay = (day: Date) => {
    onDaySelected(day)
  }

  const isTileDisabled = (props) => {
    return (
      props.view === 'month' &&
      !daysAvailable.some((date) => date === formatDate(props.date, locale))
    )
  }

  const renderClassName = (props) => {
    if (daysAvailable.some((date) => date === formatDate(props.date, locale)))
      return ['day-tile', 'active-day-tile']
    return (props.view === 'month' && 'day-tile') || null
  }

  return (
    <div className={[styles['root'], classNames?.root].join(' ')}>
      <div className={[styles['calendar'], classNames?.calendar].join(' ')}>
        <div className={[styles['header'], classNames?.header].join(' ')}>
          <Button
            icon={<Line.ChevronLeft size={21} />}
            type={'text'}
            rounded={true}
            onClick={goToPreviousMonth}
          />
          <Typography.Title level={4}>
            {format(selectedDay, formatSelectedDateMonthTitleFormatString, {
              locale,
            })}
          </Typography.Title>
          <Button
            icon={<Line.ChevronRight size={21} />}
            type={'text'}
            rounded={true}
            onClick={goToNextMonth}
          />
        </div>
        <Calendar
          defaultView={'month'}
          onClickDay={onClickDay}
          showNavigation={false}
          tileDisabled={isTileDisabled}
          tileClassName={renderClassName}
          value={selectedDay}
          activeStartDate={startOfMonth(selectedDay)}
        />
      </div>
      <Divider type={'vertical'} />
      <div
        className={[
          styles['start-time-list-container'],
          classNames?.startTimeListContainer,
        ].join(' ')}
      >
        <div className={[styles['header'], classNames?.header].join(' ')}>
          <Button
            icon={<Line.ChevronLeft size={21} />}
            type={'text'}
            rounded={true}
            onClick={goToPreviousDay}
          />
          <Typography.Title level={4}>
            {format(selectedDay, formatSelectedDateDayTitleFormatString, {
              locale,
            })}
          </Typography.Title>
          <Button
            icon={<Line.ChevronRight size={21} />}
            type={'text'}
            rounded={true}
            onClick={goToNextDay}
          />
        </div>
        {selectedDayStartTimeEventsList.length === 0 && (
          <div
            className={[
              styles['no-times-available-container'],
              classNames?.noTimesAvailableContainer,
            ].join(' ')}
          >
            {emptyListContentEl && (
              <Typography.Text>{strings.emptyListText}</Typography.Text>
            )}
            {nextFutureStartTimeAvailable ? (
              <Button
                block={true}
                size={'large'}
                type={'outline'}
                onClick={handleGoToNextAvailableDay}
                iconRight={<Line.ChevronRight size={21} />}
              >
                {`${strings.goToNextAvailableDayText} ${format(
                  nextFutureStartTimeAvailable,
                  formatNextFutureStartTimeAvailableFormatString,
                  { locale },
                )}`}
              </Button>
            ) : (
              <Typography.Text align={'center'}>
                {strings.noFutureTimesText}
              </Typography.Text>
            )}
          </div>
        )}
        {startTimeListStyle === 'scroll-list' && (
          <>
            <div
              className={[
                styles['scroll-edge-fade-top'],
                classNames?.scrollEdgeFadeTop,
              ].join(' ')}
            />
            <div
              className={[
                styles['scroll-edge-fade-bottom'],
                classNames?.scrollEdgeFadeBottom,
              ].join(' ')}
            />
            <Scroll>
              {selectedDayStartTimeEventsList.map(
                (startTimeEvent: any, i: number) => (
                  <React.Fragment key={i}>
                    <div
                      className={[
                        styles['start-time-list-item-container'],
                        classNames?.startTimeListItemContainer,
                      ].join(' ')}
                    >
                      <Button
                        size={'large'}
                        block={true}
                        type={'outline'}
                        disabled={Boolean(
                          (selectedStartTime &&
                            selectedStartTime ===
                              startTimeEvent.startTime.getTime()) ||
                            i === selectedItemIndex,
                        )}
                        onClick={() =>
                          onStartTimeItemClicked(startTimeEvent, i)
                        }
                      ></Button>
                    </div>
                    {i !== selectedDayStartTimeEventsList.length - 1 && (
                      <div
                        className={[
                          styles['list-item-divider'],
                          classNames?.listItemDivider,
                          (selectedItemIndex === i ||
                            selectedItemIndex === i + 1) &&
                            styles['list-item-divider-transparent'],
                        ].join(' ')}
                      />
                    )}
                  </React.Fragment>
                ),
              )}
            </Scroll>
          </>
        )}
        {startTimeListStyle !== 'scroll-list' && (
          <div
            className={[
              styles['grid-container'],
              classNames?.gridContainer,
            ].join(' ')}
          >
            {selectedDayStartTimeEventsList.map(
              (startTimeEvent: StartTimeEvent, i: number) => (
                <Button
                  key={i}
                  size={'large'}
                  block={true}
                  type={'outline'}
                  classNames={{
                    button: [
                      selectedStartTime &&
                        selectedStartTime ===
                          startTimeEvent.startTime.getTime() &&
                        styles['grid-button-is-selected'],
                    ].join(' '),
                  }}
                  onClick={() => _onStartTimeSelect(startTimeEvent, i)}
                >
                  {format(
                    startTimeEvent.startTime,
                    formatStartTimeFormatString,
                    { locale },
                  )}
                </Button>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Schedule
