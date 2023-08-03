/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { Auth } from '.'
import { createClient, AuthError } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button } from '../../index'
import ReactMarkdown from 'react-markdown'
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
  const [error, setError] = useState<AuthError | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (error?.status === 400) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (error?.status === 401) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [error])

  return (
    <Auth
      {...args}
      emailValue={email}
      passwordValue={password}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onEmailChanged={(e) => setEmail(e.target.value)}
      onPasswordChanged={(e) => setPassword(e.target.value)}
      onSigninError={(error: AuthError) => setError(error)}
      onSignupError={(error: AuthError) => setError(error)}
    />
  )
}
export const WithSocialAuth = (args: any) => {
  const [error, setError] = useState<AuthError | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (error?.status === 400) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (error?.status === 401) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [error])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError) => setError(error)}
      onSignupError={(error: AuthError) => setError(error)}
    />
  )
}
export const WithAllSocialAuth = (args: any) => {
  const [error, setError] = useState<AuthError | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (error?.status === 400) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (error?.status === 401) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [error])

  return (
    <Auth
      {...args}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onSigninError={(error: AuthError) => setError(error)}
      onSignupError={(error: AuthError) => setError(error)}
    />
  )
}

export const ResetPassword = (args: any) => {
  const [error, setError] = useState<AuthError | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<string | null>(
    null
  )
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | null>(null)

  useEffect(() => {
    if (error?.status === 400) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(null)
      setPasswordErrorMessage(null)
    }

    if (error?.status === 401) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(null)
    }
  }, [error])

  return (
    <Auth.ResetPassword
      {...args}
      accessToken={''}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={confirmPasswordErrorMessage}
      onPasswordUpdated={() => setError(null)}
      onResetPasswordError={(error: AuthError) => setError(error)}
    />
  )
}

export const UpdatePassword = (args: any) => {
  const [error, setError] = useState<AuthError | null>(null)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | null
  >(null)

  useEffect(() => {
    if (error?.status === 400) {
      setPasswordErrorMessage('You must provide a valid password')
    }
    if (error?.status === 401) {
      setPasswordErrorMessage('Password does not match')
    } else {
      setPasswordErrorMessage(null)
    }
  }, [error])

  return (
    <Auth.UpdatePassword
      {...args}
      passwordErrorMessage={passwordErrorMessage}
      confirmPasswordErrorMessage={passwordErrorMessage}
      onPasswordUpdated={() => setError(null)}
      onUpdatePasswordError={(error: AuthError) => setError(error)}
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
  const [error, setError] = useState<AuthError | null>(null)
  const [emailErrorMessage, setEmailErrorMessage] = useState<
    string | undefined
  >()
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<
    string | undefined
  >()
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState<string | undefined>()

  useEffect(() => {
    if (error?.status === 400) {
      setEmailErrorMessage('You must provide a valid email address')
      setPasswordErrorMessage('You must provide a valid password')
    } else {
      setEmailErrorMessage(undefined)
      setPasswordErrorMessage(undefined)
    }

    if (error?.status === 401) {
      setConfirmPasswordErrorMessage('Confirm password does not match')
    } else {
      setConfirmPasswordErrorMessage(undefined)
    }
  }, [error])

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
        onSigninError={(error: AuthError) => setError(error)}
        onSignupError={(error: AuthError) => setError(error)}
        onUpdatePasswordError={(error: AuthError) => setError(error)}
        onResetPasswordError={(error: AuthError) => setError(error)}
        onMagicLinkError={(error: AuthError) => setError(error)}
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

ResetPassword.args = {
  supabaseClient: supabase,
}

UpdatePassword.args = {
  supabaseClient: supabase,
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}
