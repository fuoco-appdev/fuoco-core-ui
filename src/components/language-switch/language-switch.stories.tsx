import { useRef, useState } from 'react'
import { LanguageSwitch } from '.'
import { DropdownAlignment } from '../dropdown'
import { LanguageCode } from './language-switch'

export default {
  title: 'General/LanguageSwitch',
  component: LanguageSwitch,
}

export const Default = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        parentRef={containerRef}
        dropdownProps={{ align: DropdownAlignment.Left }}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const AlignedRight = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        parentRef={containerRef}
        dropdownProps={{ align: DropdownAlignment.Left }}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const Listbox = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        parentRef={containerRef}
        dropdownProps={{ align: DropdownAlignment.Left }}
        type={'listbox'}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        touchScreen={true}
        language={language}
        parentRef={containerRef}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}
