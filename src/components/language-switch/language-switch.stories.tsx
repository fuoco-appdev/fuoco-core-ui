import { useRef, useState } from 'react'
import { LanguageSwitch } from '.'
import { DropdownAlignment } from '../dropdown'
import { LanguageCode } from './language-switch'

export default {
  title: 'General/LanguageSwitch',
  component: LanguageSwitch,
}

export const Default = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        dropdownProps={{ align: DropdownAlignment.Left }}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const AlignedRight = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        dropdownProps={{ align: DropdownAlignment.Right }}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const Listbox = (args: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        dropdownProps={{ align: DropdownAlignment.Left }}
        type={'listbox'}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const None = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        language={language}
        touchScreen={true}
        open={true}
        dropdownProps={{ align: DropdownAlignment.Left }}
        type={'none'}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const [language, setLanguage] = useState<LanguageCode>(LanguageCode.EN)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <LanguageSwitch
        open={open}
        touchScreen={true}
        language={language}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(value) => setLanguage(value)}
      />
    </div>
  )
}
