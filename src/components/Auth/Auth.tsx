/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react'
import { SupabaseClient, Provider, ApiError } from '@supabase/supabase-js'
import {
  Input,
  Checkbox,
  Button,
  Typography,
  Divider,
  IconMail,
  IconKey,
  IconLock,
  IconInbox
} from '../../index'
import { UserContextProvider, useUser } from './user-context'
import * as SocialIcons from './icons'
// @ts-ignore
import AuthStyles from './auth.module.scss'
import { RipplesProps } from 'react-ripples'

const VIEWS: ViewsMap = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  RESET_PASSWORD: 'reset_password',
  MAGIC_LINK: 'magic_link',
  UPDATE_PASSWORD: 'update_password',
  TERMS_OF_SERVICE: 'terms_of_service',
  PRIVACY_POLICY: 'privacy_policy',
}

interface ViewsMap {
  [key: string]: ViewType
}

type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'reset_password'
  | 'magic_link'
  | 'update_password'
  | 'terms_of_service'
  | 'privacy_policy'

type RedirectTo = undefined | string

export interface AuthStrings {
  orContinueWith?: string
  emailAddress?: string
  password?: string
  rememberMe?: string
  forgotYourPassword?: string
  signIn?: string
  signInWith?: string
  signUp?: string
  signUpWith?: string
  doYouHaveAnAccount?: string
  dontHaveAnAccount?: string
  newPassword?: string
  resetPassword?: string
  updatePassword?: string
  enterYourNewPassword?: string
  agreeToThe?: string
  termsOfService?: string
  privacyPolicy?: string
  yourEmailAddress?: string
  sendResetPasswordInstructions?: string
  goBackToSignIn?: string
  sendMagicLink?: string
  signInWithPassword?: string
}

export interface Props {
  supabaseClient: SupabaseClient
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  strings?: AuthStrings
  socialLayout?: 'horizontal' | 'vertical'
  socialColors?: boolean
  socialButtonSize?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge'
  providers?: Provider[]
  verticalSocialLayout?: any
  view?: ViewType
  redirectTo?: RedirectTo
  onlyThirdPartyProviders?: boolean
  magicLink?: boolean
  termsOfService?: JSX.Element
  privacyPolicy?: JSX.Element
  emailErrorMessage?: string
  passwordErrorMessage?: string
  onForgotPasswordRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onTermsOfServiceRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPrivacyPolicyRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMagicLinkRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSignupRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onAuthenticating?: (e?: React.FormEvent<HTMLFormElement>) => void
  onEmailConfirmationSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
  onResetPasswordSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onMagicLinkSent?: (e?: React.FormEvent<HTMLFormElement>) => void
  onSigninError?: (error: ApiError) => void
  onSignupError?: (error: ApiError) => void
  onUpdatePasswordError?: (error: ApiError) => void
  onResetPasswordError?: (error: ApiError) => void
  onMagicLinkError?: (error: ApiError) => void
}

const defaultStrings: AuthStrings = {
  orContinueWith: "or continue with",
  emailAddress: "Email address",
  password: "Password",
  rememberMe: "Remember me",
  forgotYourPassword: "Forgot your password?",
  signIn: "Sign in",
  signInWith: "Sign in with",
  signUp: "Sign up",
  signUpWith: "Sign up with",
  doYouHaveAnAccount: "Do you have an account? Sign in",
  dontHaveAnAccount: "Don't have an account? Sign up",
  newPassword: "New password",
  resetPassword: "Reset password",
  updatePassword: "Update password",
  enterYourNewPassword: "Enter your new password",
  agreeToThe: "I agree to the",
  termsOfService: "Terms of Service",
  privacyPolicy: "Privacy Policy",
  yourEmailAddress: "Your email address",
  sendResetPasswordInstructions: "Send reset password instructions",
  goBackToSignIn: "Go back to sign in",
  sendMagicLink: "Send magic link",
  signInWithPassword: "Sign in with password"
}

function Auth({
  supabaseClient,
  className,
  style,
  strings,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'large',
  providers,
  view = 'sign_in',
  emailErrorMessage,
  passwordErrorMessage,
  redirectTo,
  onlyThirdPartyProviders = false,
  magicLink = false,
  termsOfService,
  privacyPolicy,
  onForgotPasswordRedirect,
  onTermsOfServiceRedirect,
  onPrivacyPolicyRedirect,
  onMagicLinkRedirect,
  onSignupRedirect,
  onSigninRedirect,
  onAuthenticating,
  onEmailConfirmationSent,
  onPasswordUpdated,
  onResetPasswordSent,
  onMagicLinkSent,
  onSigninError,
  onSignupError,
  onUpdatePasswordError,
  onResetPasswordError,
  onMagicLinkError
}: Props): JSX.Element | null {
  const [authView, setAuthView] = useState(view)
  const [defaultEmail, setDefaultEmail] = useState('')
  const [defaultPassword, setDefaultPassword] = useState('')

  const verticalSocialLayout = socialLayout === 'vertical' ? true : false

  let containerClasses = [AuthStyles['sbui-auth']]
  if (className) {
    containerClasses.push(className)
  }

  const Container = (props: any) => (
    <div className={containerClasses.join(' ')} style={style}>
      <SocialAuth
          view={view}
          strings={{...defaultStrings, ...strings}}
          supabaseClient={supabaseClient}
          verticalSocialLayout={verticalSocialLayout}
          providers={providers}
          socialLayout={socialLayout}
          socialButtonSize={socialButtonSize}
          socialColors={socialColors}
          redirectTo={redirectTo}
          onlyThirdPartyProviders={onlyThirdPartyProviders}
          magicLink={magicLink}
          onForgotPasswordRedirect={onForgotPasswordRedirect}
          onTermsOfServiceRedirect={onTermsOfServiceRedirect}
          onPrivacyPolicyRedirect={onPrivacyPolicyRedirect}
          onMagicLinkRedirect={onMagicLinkRedirect}
          onSignupRedirect={onSignupRedirect}
          onSigninRedirect={onSigninRedirect}
          onAuthenticating={onAuthenticating}
          onEmailConfirmationSent={onEmailConfirmationSent}
        />
        {!onlyThirdPartyProviders && props.children}
    </div>
  )

  useEffect(() => {
    // handle view override
    setAuthView(view)
  }, [view])

  switch (authView) {
    case VIEWS.SIGN_IN:
    case VIEWS.SIGN_UP:
      return (
        <Container>
          <EmailAuth
            id={authView === VIEWS.SIGN_UP ? 'auth-sign-up' : 'auth-sign-in'}
            strings={{...defaultStrings, ...strings}}
            supabaseClient={supabaseClient}
            authView={authView}
            setAuthView={setAuthView}
            defaultEmail={defaultEmail}
            defaultPassword={defaultPassword}
            setDefaultEmail={setDefaultEmail}
            setDefaultPassword={setDefaultPassword}
            emailErrorMessage={emailErrorMessage}
            passwordErrorMessage={passwordErrorMessage}
            redirectTo={redirectTo}
            magicLink={magicLink}
            onForgotPasswordRedirect={onForgotPasswordRedirect}
            onTermsOfServiceRedirect={onTermsOfServiceRedirect}
            onPrivacyPolicyRedirect={onPrivacyPolicyRedirect}
            onMagicLinkRedirect={onMagicLinkRedirect}
            onSignupRedirect={onSignupRedirect}
            onSigninRedirect={onSigninRedirect}
            onAuthenticating={onAuthenticating}
            onEmailConfirmationSent={onEmailConfirmationSent}
            onSigninError={onSigninError}
            onSignupError={onSignupError}
          />
        </Container>
      )
    case VIEWS.FORGOTTEN_PASSWORD:
      return (
        <Container>
          <ForgottenPassword
            strings={{...defaultStrings, ...strings}}
            supabaseClient={supabaseClient}
            redirectTo={redirectTo}
            emailErrorMessage={emailErrorMessage}
            onSigninRedirect={onSigninRedirect}
            onResetPasswordError={onResetPasswordError}
            onResetPasswordSent={onResetPasswordSent}
          />
        </Container>
      )
    case VIEWS.MAGIC_LINK:
      return (
        <Container>
          <MagicLink
            strings={{...defaultStrings, ...strings}}
            supabaseClient={supabaseClient}
            setAuthView={setAuthView}
            redirectTo={redirectTo}
            emailErrorMessage={emailErrorMessage}
            onMagicLinkError={onMagicLinkError}
            onMagicLinkSent={onMagicLinkSent}
          />
        </Container>
      )
    case VIEWS.UPDATE_PASSWORD:
      return (
        <Container>
          <UpdatePassword
            strings={{...defaultStrings, ...strings}}
            supabaseClient={supabaseClient}
            passwordErrorMessage={passwordErrorMessage}
            onUpdatePasswordError={onUpdatePasswordError}
            onPasswordUpdated={onPasswordUpdated}
          />
        </Container>
      )
    case VIEWS.TERMS_OF_SERVICE:
      return (
        <Container>
          <TermsOfService termsOfService={termsOfService} />
        </Container>
      )
    case VIEWS.PRIVACY_POLICY:
      return (
        <Container>
          <PrivacyPolicy privacyPolicy={privacyPolicy} />
        </Container>
      )
    default:
      return null
  }
}

function SocialButton({
  provider,
  strings,
  verticalSocialLayout,
  socialButtonSize = 'large',
  signLabel,
  socialColors,
  handleProviderSignIn,
}: {
  provider: Provider
  strings: AuthStrings
  verticalSocialLayout: any
  socialButtonSize: "tiny" | "small" | "medium" | "large" | "xlarge" | undefined
  signLabel: string
  socialColors: boolean
  handleProviderSignIn: (provider: Provider) => void
}) {
  // @ts-ignore
  const AuthIcon = SocialIcons[provider]
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => {
    setIsHover(true)
  }
  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const buttonStyles: any = {
    azure: {
      backgroundColor: '#008AD7',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#205081',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#4267B2',
      color: 'white',
    },
    github: {
      backgroundColor: '#333',
      color: 'white',
    },
    gitlab: {
      backgroundColor: '#FC6D27',
    },
    google: {
      backgroundColor: '#ce4430',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#1DA1F2',
      color: 'white',
    },
    apple: {
      backgroundColor: '#000',
      color: 'white',
    },
    discord: {
      backgroundColor: '#404fec',
      color: 'white',
    },
    twitch: {
      backgroundColor: '#9146ff',
      color: 'white',
    },
    spotify: {
      backgroundColor: '#1ed760',
      color: 'white',
    },
  }

  const buttonHoverStyles: any = {
    azure: {
      backgroundColor: '#015280',
      color: 'white',
    },
    bitbucket: {
      backgroundColor: '#194066',
      color: 'white',
    },
    facebook: {
      backgroundColor: '#22365d',
      color: 'white',
    },
    github: {
      backgroundColor: '#404040',
      color: 'white',
    },
    gitlab: {
      backgroundColor: '#7e2b02',
      color: 'white',
    },
    google: {
      backgroundColor: '#672318',
      color: 'white',
    },
    twitter: {
      backgroundColor: '#074d78',
      color: 'white',
    },
    apple: {
      backgroundColor: '#fff',
      color: 'black',
    },
    discord: {
      backgroundColor: '#0b1474',
      color: 'white',
    },
    twitch: {
      backgroundColor: '#330080',
      color: 'white',
    },
    spotify: {
      backgroundColor: '#0f7031',
      color: 'white',
    },
  }

  return (
    <div
      className={AuthStyles['button-container']}
      key={provider}
      style={!verticalSocialLayout ? { flexGrow: 1 } : {}}
    >
      <Button
        block
        type="default"
        shadow
        size={socialButtonSize}
        style={socialColors ? (isHover ? buttonHoverStyles[provider] : buttonStyles[provider]) : {}}
        onClick={() => handleProviderSignIn(provider)}
        rippleProps={{
          color: 'rgba(0, 0, 0, .3)',
          during: 250,
        }}  
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={AuthStyles['button-content']}>
          <div className={AuthStyles['button-icon']}>
            {AuthIcon ? <AuthIcon /> : ''}
          </div>
          {verticalSocialLayout && signLabel + provider}
        </div>
      </Button>
    </div>
  )
}

function SocialAuth({
  className,
  style,
  strings,
  supabaseClient,
  children,
  socialLayout = 'vertical',
  socialColors = false,
  socialButtonSize = 'large',
  providers,
  verticalSocialLayout,
  redirectTo,
  onlyThirdPartyProviders,
  magicLink,
  onAuthenticating,
  onSigninError,
  onSignupError,
  ...props
}: Props) {
  const rippleProps: RipplesProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  }
  const handleProviderSignIn = (provider: Provider) => {
    setTimeout(async () => {
      const { error } = await supabaseClient.auth.signIn(
        { provider },
        { redirectTo }
      )
      if (error) (props.view === 'sign_in') ? onSigninError?.(error) : onSignupError?.(error)
      else {
        onAuthenticating ? onAuthenticating() : null
      }
    }, rippleProps.during)
  }

  const signLabel = props.view === 'sign_up' ? `${strings?.signUpWith} ` : `${strings?.signInWith} `
  return (
    <div>
      {providers && providers.length > 0 && (
        <React.Fragment>
          <div className={AuthStyles['button-root']}>
            <div className={AuthStyles['button-container']}>
              {providers.map((provider) => {
                return (<SocialButton
                  key={`${provider}-button`}
                  provider={provider}
                  verticalSocialLayout={verticalSocialLayout}
                  socialButtonSize={socialButtonSize}
                  signLabel={signLabel}
                  socialColors={socialColors}
                  strings={strings!}
                  handleProviderSignIn={handleProviderSignIn}/>)
              })}
            </div>
          </div>
          {!onlyThirdPartyProviders && <Divider className={AuthStyles['divider']}>{strings?.orContinueWith}</Divider>}
        </React.Fragment>
      )}
    </div>
  )
}

function EmailAuth({
  authView,
  strings,
  defaultEmail,
  defaultPassword,
  id,
  supabaseClient,
  redirectTo,
  magicLink,
  emailErrorMessage,
  passwordErrorMessage,
  onForgotPasswordRedirect,
  onTermsOfServiceRedirect,
  onPrivacyPolicyRedirect,
  onMagicLinkRedirect,
  onSignupRedirect,
  onSigninRedirect,
  onAuthenticating,
  onEmailConfirmationSent,
  onSigninError,
  onSignupError
}: {
  authView: ViewType
  strings: AuthStrings
  defaultEmail: string
  defaultPassword: string
  id: 'auth-sign-up' | 'auth-sign-in'
  setAuthView: any
  setDefaultEmail: (email: string) => void
  setDefaultPassword: (password: string) => void
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  magicLink?: boolean
  emailErrorMessage?: string
  passwordErrorMessage?: string
  onForgotPasswordRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onTermsOfServiceRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onPrivacyPolicyRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onMagicLinkRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSignupRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onAuthenticating?: (e?: React.FormEvent<HTMLFormElement>) => void
  onEmailConfirmationSent?: (e: React.FormEvent<HTMLFormElement>) => void
  onSigninError?: (error: ApiError) => void
  onSignupError?: (error: ApiError) => void
}) {
  const isMounted = useRef<boolean>(true)
  const [email, setEmail] = useState(defaultEmail)
  const [password, setPassword] = useState(defaultPassword)
  const [rememberMe, setRememberMe] = useState(false)
  const [termAgreementChecked, setTermAgreementChecked] = useState(false)
  const [emailIconLit, setEmailIconLit] = useState(false)
  const [passwordIconLit, setPasswordIconLit] = useState(false)

  useEffect(() => {
    setEmail(defaultEmail)
    setPassword(defaultPassword)

    return () => {
      isMounted.current = false
    }
  }, [authView])

  const rippleProps: RipplesProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTimeout(async () => {
      switch (authView) {
        case 'sign_in':
          const {
            user: signInUser,
            session: signInSession,
            error: signInError 
          } = await supabaseClient.auth.signIn(
            {
              email,
              password,
            },
            { redirectTo }
          )
          if (signInError) onSigninError?.(signInError) 
          else if (signInUser && !signInSession)
            onEmailConfirmationSent ? onEmailConfirmationSent(e) : null
          else {
            onAuthenticating ? onAuthenticating(e) : null
          }
          break
        case 'sign_up':
          const {
            user: signUpUser,
            session: signUpSession,
            error: signUpError,
          } = await supabaseClient.auth.signUp(
            {
              email,
              password,
            },
            { redirectTo }
          )
          if (signUpError) onSignupError?.(signUpError)
          // Check if session is null -> email confirmation setting is turned on
          else if (signUpUser && !signUpSession)
            onEmailConfirmationSent ? onEmailConfirmationSent(e) : null
          else {
            onAuthenticating ? onAuthenticating(e) : null
          }
          break
      }
    }, rippleProps?.during ?? 0)
  }

  return (
    <form id={id} onSubmit={handleSubmit}>
      <div>
        <div>
          <Input
            label={strings.emailAddress}
            error={emailErrorMessage}
            autoComplete="email"
            defaultValue={email}
            icon={
              <IconMail
                size={21}
                stroke={emailIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onMouseEnter={() => setEmailIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setEmailIconLit(false)
              }
            }}
            onFocus={() => setEmailIconLit(true)}
            onBlur={() => setEmailIconLit(false)}
          />
          <Input
            label={strings.password}
            error={passwordErrorMessage}
            reveal={true}
            password={true}
            defaultValue={password}
            autoComplete="current-password"
            icon={
              <IconKey
                size={21}
                stroke={passwordIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onMouseEnter={() => setPasswordIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setPasswordIconLit(false)
              }
            }}
            onFocus={() => setPasswordIconLit(true)}
            onBlur={() => setPasswordIconLit(false)}
          />
        </div>
        <div className={AuthStyles['button-container']}>
          <div className={AuthStyles['remember-me-container']}>
            {authView === VIEWS.SIGN_IN && (
              <Checkbox
                label={strings.rememberMe ?? ""}
                name="remember_me"
                id="remember_me"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setRememberMe(value.target.checked)
                }
                checked={rememberMe}
              />
            )}
            {authView === VIEWS.SIGN_IN && (
              <Typography.Link
                href={'#'}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  onForgotPasswordRedirect ? onForgotPasswordRedirect(e) : null
                  e.preventDefault()
                }}
              >
                {strings.forgotYourPassword}
              </Typography.Link>
            )}
            {authView === VIEWS.SIGN_UP && (
              <Checkbox
                label={
                  <span>
                    {strings.agreeToThe} &nbsp;
                    <Typography.Link
                      href={'#'}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        onTermsOfServiceRedirect
                          ? onTermsOfServiceRedirect(e)
                          : null
                        e.preventDefault()
                      }}
                    >
                      {strings.termsOfService}
                    </Typography.Link>
                    &nbsp; & &nbsp;
                    <Typography.Link
                      href={'#'}
                      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        onPrivacyPolicyRedirect
                          ? onPrivacyPolicyRedirect(e)
                          : null
                        e.preventDefault()
                      }}
                    >
                      {strings.privacyPolicy}
                    </Typography.Link>
                  </span>
                }
                name="term_agreement"
                id="term_agreement"
                onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
                  setTermAgreementChecked(value.target.checked)
                }
                checked={termAgreementChecked}
              />
            )}
          </div>
          <div className={AuthStyles['email-button-container']}>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              disabled={
                authView === VIEWS.SIGN_UP ? !termAgreementChecked : false
              }
              block
              rippleProps={rippleProps}
            >
              <div className={[AuthStyles['button-content'], AuthStyles['email-button-content']].join(' ')}>
                <div className={AuthStyles['button-icon']}>
                  <IconLock size={21} />
                </div>
                {authView === VIEWS.SIGN_IN ? strings.signIn : strings.signUp}
              </div>
            </Button>
          </div> 
        </div>
        <div className={AuthStyles['link-container']}>
          {authView === VIEWS.SIGN_IN && magicLink && (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onMagicLinkRedirect ? onMagicLinkRedirect(e) : null
                e.preventDefault()
              }}
            >
              Sign in with magic link
            </Typography.Link>
          )}
          {authView === VIEWS.SIGN_IN ? (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onSignupRedirect ? onSignupRedirect(e) : null
                e.preventDefault()
              }}
            >
              {strings.dontHaveAnAccount}
            </Typography.Link>
          ) : (
            <Typography.Link
              href={'#'}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                onSigninRedirect ? onSigninRedirect(e) : null
                e.preventDefault()
              }}
            >
              {strings.doYouHaveAnAccount}
            </Typography.Link>
          )}
        </div>
      </div>
    </form>
  )
}

function MagicLink({
  setAuthView,
  strings,
  supabaseClient,
  redirectTo,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  emailErrorMessage,
  onMagicLinkSent,
  onMagicLinkError
}: {
  setAuthView: any
  strings: AuthStrings
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  emailErrorMessage?: string
  rippleProps?: RipplesProps,
  onMagicLinkSent?: (e: React.FormEvent<HTMLFormElement>) => void
  onMagicLinkError?: (error: ApiError) => void
}) {
  const [email, setEmail] = useState('')
  const [emailIconLit, setEmailIconLit] = useState(false)

  const handleMagicLinkSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      const { error } = await supabaseClient.auth.signIn(
        { email },
        { redirectTo }
      )
      if (error) onMagicLinkError?.(error)
      else onMagicLinkSent?.(e)
    }, rippleProps?.during ?? 0)
  }

  return (
    <form id="auth-magic-link" onSubmit={handleMagicLinkSignIn}>
      <div>
        <div className={AuthStyles['button-container']}>
          <Input
            label={strings.emailAddress}
            placeholder={strings.yourEmailAddress}
            error={emailErrorMessage}
            icon={
              <IconMail
                size={21}
                stroke={emailIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onMouseEnter={() => setEmailIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setEmailIconLit(false)
              }
            }}
            onFocus={() => setEmailIconLit(true)}
            onBlur={() => setEmailIconLit(false)}
          />
          <Button
            block
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div className={[AuthStyles['button-content'], AuthStyles['email-button-content']].join(' ')}>
              <div className={AuthStyles['button-icon']}>
                <IconInbox size={21} />
              </div>
              {strings.sendMagicLink}
            </div>
          </Button>
        </div>
        <Typography.Link
          href="#auth-sign-in"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            setAuthView(VIEWS.SIGN_IN)
          }}
        >
          {strings.signInWithPassword}
        </Typography.Link>
      </div>
    </form>
  )
}

function ForgottenPassword({
  strings,
  supabaseClient,
  redirectTo,
  emailErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onSigninRedirect,
  onResetPasswordError,
  onResetPasswordSent
}: {
  strings: AuthStrings
  supabaseClient: SupabaseClient
  redirectTo?: RedirectTo
  emailErrorMessage?: string
  rippleProps?: RipplesProps
  onSigninRedirect?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  onResetPasswordError?: (error: ApiError) => void
  onResetPasswordSent?: (e: React.FormEvent<HTMLFormElement>) => void
}) {
  const [email, setEmail] = useState('')
  const [emailIconLit, setEmailIconLit] = useState(false)

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      const { error } = await supabaseClient.auth.api.resetPasswordForEmail(
        email,
        { redirectTo }
      )
      if (error) onResetPasswordError?.(error)
      else onResetPasswordSent?.(e)
    }, rippleProps?.during ?? 0)
  }

  return (
    <form id="auth-forgot-password" onSubmit={handlePasswordReset}>
      <div>
        <div className={AuthStyles['button-container']}>
          <Input
            label="Email address"
            placeholder="Your email address"
            error={emailErrorMessage}
            icon={
              <IconMail
                size={21}
                stroke={emailIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onMouseEnter={() => setEmailIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setEmailIconLit(false)
              }
            }}
            onFocus={() => setEmailIconLit(true)}
            onBlur={() => setEmailIconLit(false)}
          />
          <Button
            block
            size="large"
            htmlType="submit"
          >
            <div className={[AuthStyles['button-content'], AuthStyles['email-button-content']].join(' ')}>
              <div className={AuthStyles['button-icon']}>
                <IconInbox size={21} />
              </div>
              {strings.sendResetPasswordInstructions}
            </div>
          </Button>
        </div>
        <Typography.Link
          href={'#'}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            onSigninRedirect ? onSigninRedirect(e) : null
            e.preventDefault()
          }}
        >
          {strings.goBackToSignIn}
        </Typography.Link>
      </div>
    </form>
  )
}

function ResetPassword({
  supabaseClient,
  accessToken,
  strings,
  passwordErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onResetPasswordError,
  onPasswordUpdated
}: {
  supabaseClient: SupabaseClient
  accessToken: string
  strings?: AuthStrings
  passwordErrorMessage?: string
  rippleProps?: RipplesProps
  onResetPasswordError?: (error: ApiError) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
}) {
  const [password, setPassword] = useState('')
  const [passwordIconLit, setPasswordIconLit] = useState(false)

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      const { error } = await supabaseClient.auth.api.updateUser(
        accessToken,
        {password},
      )
      if (error) onResetPasswordError?.(error)
      else onPasswordUpdated?.(e)
    }, rippleProps?.during ?? 0)
  }

  strings = {...defaultStrings, ...strings}

  return (
    <form id="auth-reset-password" onSubmit={handlePasswordReset}>
      <div>
        <div className={AuthStyles['button-container']}>
          <Input
            label={strings?.newPassword}
            placeholder={strings?.enterYourNewPassword}
            reveal={true}
            password={true}
            error={passwordErrorMessage}
            icon={
              <IconKey
                size={21}
                stroke={passwordIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onMouseEnter={() => setPasswordIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setPasswordIconLit(false)
              }
            }}
            onFocus={() => setPasswordIconLit(true)}
            onBlur={() => setPasswordIconLit(false)}
          />
          <Button
            block
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div className={[AuthStyles['button-content'], AuthStyles['email-button-content']].join(' ')}>
              <div className={AuthStyles['button-icon']}>
                <IconKey size={21} />
              </div>
              {strings?.resetPassword}
            </div>
          </Button>
        </div>
      </div>
    </form>
  )
}

function UpdatePassword({
  supabaseClient,
  strings,
  passwordErrorMessage,
  rippleProps = {
    color: 'rgba(0, 0, 0, .3)',
    during: 250,
  },
  onUpdatePasswordError,
  onPasswordUpdated
}: {
  supabaseClient: SupabaseClient
  strings: AuthStrings
  passwordErrorMessage?: string
  rippleProps?: RipplesProps
  onUpdatePasswordError?: (error: ApiError) => void
  onPasswordUpdated?: (e?: React.FormEvent<HTMLFormElement>) => void
}) {
  const [password, setPassword] = useState('')
  const [passwordIconLit, setPasswordIconLit] = useState(false)

  const handlePasswordReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(async () => {
      const { error } = await supabaseClient.auth.update({ password })
      if (error) onUpdatePasswordError?.(error)
      else onPasswordUpdated?.(e)
    }, rippleProps?.during ?? 0)
  }

  strings = {...defaultStrings, ...strings}

  return (
    <form id="auth-update-password" onSubmit={handlePasswordReset}>
      <div>
        <div className={AuthStyles['button-container']}>
          <Input
            label={strings?.newPassword}
            placeholder={strings?.enterYourNewPassword}
            reveal={true}
            password={true}
            error={passwordErrorMessage}
            icon={
              <IconKey
                size={21}
                stroke={passwordIconLit ? '#4AFFFF' : '#d1d5db'}
              />
            }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onMouseEnter={() => setPasswordIconLit(true)}
            onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
              if (document.activeElement !== e.currentTarget) {
                setPasswordIconLit(false)
              }
            }}
            onFocus={() => setPasswordIconLit(true)}
            onBlur={() => setPasswordIconLit(false)}
          />
          <Button
            block
            size="large"
            htmlType="submit"
            rippleProps={rippleProps}
          >
            <div className={[AuthStyles['button-content'], AuthStyles['email-button-content']].join(' ')}>
              <div className={AuthStyles['button-icon']}>
                <IconKey size={21} />
              </div>
              {strings?.updatePassword}
            </div>
          </Button>
        </div>
      </div>
    </form>
  )
}

function TermsOfService({
  termsOfService,
}: {
  termsOfService: JSX.Element | undefined
}) {
  return (
    <div id="terms-of-service" className="terms-of-service">
      {termsOfService}
    </div>
  )
}

function PrivacyPolicy({
  privacyPolicy,
}: {
  privacyPolicy: JSX.Element | undefined
}) {
  return (
    <div id="privacy-policy" className="privacy-policy">
      {privacyPolicy}
    </div>
  )
}

Auth.ForgottenPassword = ForgottenPassword
Auth.ResetPassword = ResetPassword
Auth.UpdatePassword = UpdatePassword
Auth.TermsOfService = TermsOfService
Auth.PrivacyPolicy = PrivacyPolicy
Auth.MagicLink = MagicLink
Auth.UserContextProvider = UserContextProvider
Auth.useUser = useUser

export default Auth
