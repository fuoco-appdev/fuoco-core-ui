import { useRef, useState } from 'react'
import { LanguageSwitch } from '.'
import { DropdownAlignment } from '../dropdown'
import { LanguageCode } from 'iso-639-1'

export default {
  title: 'General/LanguageSwitch',
  component: LanguageSwitch,
}

export const Default = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>('en')
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
        onChange={(code, info) => {
          console.log(code)
          console.log(info)
          setLanguage(code)
        }}
      />
    </div>
  )
}

export const AlignedRight = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>('en')
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
        onChange={(code) => setLanguage(code)}
      />
    </div>
  )
}

export const Listbox = (args: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const [language, setLanguage] = useState<LanguageCode>('en')
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
        onChange={(code) => setLanguage(code)}
      />
    </div>
  )
}

export const None = (args: any) => {
  const [language, setLanguage] = useState<LanguageCode>('en')
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
        onChange={(code) => setLanguage(code)}
      />
    </div>
  )
}

export const TouchScreen = (args: any) => {
  const [open, setOpen] = useState<boolean>(false)
  const [language, setLanguage] = useState<LanguageCode>('en')
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
        onChange={(code) => setLanguage(code)}
      />
    </div>
  )
}
