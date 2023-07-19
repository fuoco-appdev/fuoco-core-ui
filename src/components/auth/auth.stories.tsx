/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { Auth } from '.'
import { createClient, AuthError } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button } from '../../index'
import ReactMarkdown from 'react-markdown'
import { AuthErrorType } from './auth'
const gfm = require('remark-gfm')

const supabase = createClient(
  'https://rsnibhkhsbfnncjmwnkj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNTIxNDE1MywiZXhwIjoxOTMwNzkwMTUzfQ.OQEbAaTfgDdLCCht251P2JRD3QDnui6nsU8N-tZA_Mc'
)

export default {
  title: 'Auth/Auth',
  component: Auth,
}

export const Default = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}
export const WithSocialAuth = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}
export const WithAllSocialAuth = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}
export const WithSocialLargeButtons = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}
export const WithColouredSocialAuth = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}
export const WithSocialAuthHorizontal = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
      onSignupError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}

export const ResetPassword = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth.ResetPassword
      {...args}
      accessToken={''}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onPasswordUpdated={() => setErrorType(null)}
      onResetPasswordError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}

export const UpdatePassword = (args: any) => {
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setPasswordErrorMessage('You must provide a valid password')
    }
    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setPasswordErrorMessage('Password does not match')
    } else {
      setPasswordErrorMessage(null)
    }
  }, [errorType])

  return (
    <Auth.UpdatePassword
      {...args}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={passwordErrorMessage}
      onPasswordUpdated={() => setErrorType(null)}
      onUpdatePasswordError={(error: AuthError, type: AuthErrorType) =>
        setErrorType(type)
      }
    />
  )
}

export const ChangeViewState = (args: any) => {
  const [view, setView] = useState<
    | 'sign_in'
    | 'sign_up'
    | 'forgotten_password'
    | 'magic_link'
    | 'terms_of_service'
    | 'privacy_policy'
  >('sign_in')

  const [md, setMd] = useState<string>('')
  const [errorType, setErrorType] = useState<AuthErrorType | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<
    string | undefined
  >()
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | undefined
  >()
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | undefined>()

  useEffect(() => {
    if (errorType === AuthErrorType.BadAuthentication) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(undefined)
      setPasswordErrorMessage(undefined)
    }

    if (errorType === AuthErrorType.ConfirmPasswordNoMatch) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(undefined)
    }
  }, [errorType])

  fetch('../../lib/MarkdownSample.md')
    .then((res) => res.text())
    .then((md) => {
      setMd(md)
    })

  return (
    <div>
      <Button
        type={view === 'sign_up' ? 'primary' : 'default'}
        onClick={() => setView('sign_up')}
      >
        Sign up
      </Button>
      <Button
        type={view === 'sign_in' ? 'primary' : 'default'}
        onClick={() => setView('sign_in')}
      >
        Sign in
      </Button>
      <Button
        type={view === 'forgotten_password' ? 'primary' : 'default'}
        onClick={() => setView('forgotten_password')}
      >
        Forgotten password
      </Button>
      <Button
        type={view === 'magic_link' ? 'primary' : 'default'}
        onClick={() => setView('magic_link')}
      >
        Magic link
      </Button>
      <Button
        type={view === 'terms_of_service' ? 'primary' : 'default'}
        onClick={() => setView('terms_of_service')}
      >
        Terms of Service
      </Button>
      <Button
        type={view === 'privacy_policy' ? 'primary' : 'default'}
        onClick={() => setView('privacy_policy')}
      >
        Privacy Policy
      </Button>
      <Auth
        supabaseClient={supabase}
        view={view}
        termsOfService={
          <Typography tag="article">
            <ReactMarkdown remarkPlugins={[gfm]} children={md} />
          </Typography>
        }
        privacyPolicy={
          <Typography tag="article">
            <ReactMarkdown remarkPlugins={[gfm]} children={md} />
          </Typography>
        }
        emailErrorMessage={emailErrorMessage}
        passwordErrorMessage={passwordErrorMessage}
        confirmPasswordErrorMessage={confirmPasswordErrorMessage}
        onSigninError={(error: AuthError, type: AuthErrorType) =>
          setErrorType(type)
        }
        onSignupError={(error: AuthError, type: AuthErrorType) =>
          setErrorType(type)
        }
        onUpdatePasswordError={(error: AuthError, type: AuthErrorType) =>
          setErrorType(type)
        }
        onResetPasswordError={(error: AuthError, type: AuthErrorType) =>
          setErrorType(type)
        }
        onMagicLinkError={(error: AuthError, type: AuthErrorType) =>
          setErrorType(type)
        }
      />
    </div>
  )
}

Default.args = {
  supabaseClient: supabase,
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

WithSocialAuth.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

WithAllSocialAuth.args = {
  supabaseClient: supabase,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

WithSocialLargeButtons.args = {
  supabaseClient: supabase,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
  socialButtonSize: 'large',
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

WithColouredSocialAuth.args = {
  supabaseClient: supabase,
  socialColors: true,
  providers: [
    'apple',
    'azure',
    'bitbucket',
    'discord',
    'facebook',
    'github',
    'gitlab',
    'google',
    'twitch',
    'twitter',
  ],
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

WithSocialAuthHorizontal.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

ResetPassword.args = {
  supabaseClient: supabase,
}

UpdatePassword.args = {
  supabaseClient: supabase,
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}
