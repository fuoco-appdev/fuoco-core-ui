/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import { Auth } from '.'
import { ApiError, createClient } from '@supabase/supabase-js'
// @ts-ignore
import { Typography, Button, Space } from '../../index'
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

const Container = (props: any) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

export const Default = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
export const withSocialAuth = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
export const withAllSocialAuth = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
export const withSocialLargeButtons = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
export const withColouredSocialAuth = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}
export const withSocialAuthHorizontal = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UserContextProvider {...args}>
      <Container {...args}>
        <Auth
          {...args}
          emailErrorMessage={
            error ? 'You must provide a valid email address' : null
          }
          passwordErrorMessage={
            error ? 'You must provide a valid password' : null
          }
          onSigninError={(error: ApiError) => setError(error)}
          onSignupError={(error: ApiError) => setError(error)}
        />
      </Container>
    </Auth.UserContextProvider>
  )
}

export const resetPassword = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.ResetPassword
      {...args}
      accessToken={''}
      passwordErrorMessage={error ? 'You must provide a valid password' : null}
      onPasswordUpdated={() => setError(null)}
      onResetPasswordError={(error: ApiError) => setError(error)}
    />
  )
}

export const updatePassword = (args: any) => {
  const [error, setError] = useState<ApiError | null>(null)

  return (
    <Auth.UpdatePassword
      {...args}
      passwordErrorMessage={error ? 'You must provide a valid password' : null}
      onPasswordUpdated={() => setError(null)}
      onUpdatePasswordError={(error: ApiError) => setError(error)}
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
  const [signinError, setSigninError] = useState<ApiError | null>(null)
  const [signupError, setSignupError] = useState<ApiError | null>(null)
  const [updatePasswordError, setUpdatePasswordError] =
    useState<ApiError | null>(null)
  const [resetPasswordError, setResetPasswordError] = useState<ApiError | null>(
    null
  )
  const [magicLinkError, setMagicLinkError] = useState<ApiError | null>(null)

  fetch('../../lib/MarkdownSample.md')
    .then((res) => res.text())
    .then((md) => {
      setMd(md)
    })

  return (
    <div>
      <Space>
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
      </Space>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <Container supabaseClient={supabase}>
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
            emailErrorMessage={
              signinError || signupError || resetPasswordError || magicLinkError
                ? 'You must provide a valid email address'
                : undefined
            }
            passwordErrorMessage={
              signinError || signupError || updatePasswordError
                ? 'You must provide a valid password'
                : undefined
            }
            onSigninError={(error: ApiError) => setSigninError(error)}
            onSignupError={(error: ApiError) => setSignupError(error)}
            onUpdatePasswordError={(error: ApiError) =>
              setUpdatePasswordError(error)
            }
            onResetPasswordError={(error: ApiError) =>
              setResetPasswordError(error)
            }
            onMagicLinkError={(error: ApiError) => setMagicLinkError(error)}
          />
        </Container>
      </Auth.UserContextProvider>
    </div>
  )
}

Default.args = {
  supabaseClient: supabase,
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

withSocialAuth.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

withAllSocialAuth.args = {
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

withSocialLargeButtons.args = {
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

withColouredSocialAuth.args = {
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

withSocialAuthHorizontal.args = {
  supabaseClient: supabase,
  providers: ['facebook', 'google'],
  socialLayout: 'horizontal',
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}

resetPassword.args = {
  supabaseClient: supabase,
}

updatePassword.args = {
  supabaseClient: supabase,
  onAuthenticating: () => console.log('Authenticating!'),
  onEmailConfirmationSent: () => console.log('Email confirmation sent!'),
}
