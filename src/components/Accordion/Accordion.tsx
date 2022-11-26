import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import Ripples from 'react-ripples'
import { Disclosure, Transition } from '@headlessui/react'
// @ts-ignore
import AccordionStyles from './accordion.module.scss'
import { IconChevronUp } from '../icon/icons/icon-chevron-up'
import Typography from '../typography'
import { animated, useSpring, useTransition } from 'react-spring'

type ContextValue = Required<Pick<AccordionProps, 'defaultActiveId'>> &
  Pick<AccordionProps, 'onChange' | 'bordered'>

const AccordionContext = createContext<ContextValue>({
  defaultActiveId: [],
  bordered: undefined,
  onChange: undefined,
})

interface AccordionProps {
  children?: React.ReactNode
  className?: string
  defaultActiveId?: (string | number)[]
  bordered?: boolean
  onChange?: (item: {
    label: string
    id?: string | number
    open: boolean
  }) => void
}

function Accordion({
  children,
  className,
  defaultActiveId = [],
  bordered,
  onChange,
}: AccordionProps) {
  let containerClasses = [AccordionStyles['accordion-container']]
  if (bordered) {
    containerClasses.push(AccordionStyles['accordion-container-bordered'])
  }
  if (className) {
    containerClasses.push(className)
  }

  const contextValue = {
    defaultActiveId,
    onChange,
    bordered,
  }

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={containerClasses.join(' ')}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface ItemProps {
  children?: React.ReactNode
  className?: string
  label: string
  id?: string | number
}

export function Item({ children, className, label, id }: ItemProps) {
  const { defaultActiveId, onChange, bordered } = useContext(AccordionContext)
  const isDefaultActive = id ? defaultActiveId?.includes(id) : false
  const [disclosureOpen, setDisclosureOpen] = useState<boolean>(isDefaultActive)

  let panelClasses = [AccordionStyles['accordion-item-panel']]

  let buttonClasses = [AccordionStyles['accordion-item-button']]
  if (bordered) {
    buttonClasses.push(AccordionStyles['accordion-item-bordered'])
  }

  if (className) {
    buttonClasses.push(className)
  }

  useEffect(() => {
    onChange?.({ id, label, open: disclosureOpen })
  }, [disclosureOpen])

  const transitionStyle = useSpring({
    height: disclosureOpen ? 'auto' : 0,
    opacity: disclosureOpen ? 1 : 0,
    config: {
      tension: 1000,
      friction: 40,
      bounce: 0,
    },
  })

  const buttonIconStyle = useSpring({
    transform: disclosureOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    config: {
      tension: 1000,
      friction: 40,
      bounce: 0,
    },
  })

  return (
    <Disclosure defaultOpen={isDefaultActive}>
      {({ open }) => (
        <>
          <Ripples className={AccordionStyles['accordion-item-ripples']}>
            <Disclosure.Button
              onClick={() => setDisclosureOpen(!disclosureOpen)}
              className={buttonClasses.join(' ')}
            >
              <Typography.Text>{label}</Typography.Text>
              <animated.div style={buttonIconStyle}>
                <IconChevronUp strokeWidth={2} />
              </animated.div>
            </Disclosure.Button>
          </Ripples>

          <animated.div style={transitionStyle}>
            <Disclosure.Panel className={panelClasses.join(' ')}>
              {children}
            </Disclosure.Panel>
          </animated.div>
        </>
      )}
    </Disclosure>
  )
}

Accordion.Item = Item
export default Accordion
