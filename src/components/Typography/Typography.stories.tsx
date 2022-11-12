import React, { useState } from 'react'
// import { AutoForm } from 'uniforms'
// @ts-ignore
import ReactMarkdown from 'react-markdown'

import Typography from '.'
const gfm = require('remark-gfm')

const { Title, Text, Link } = Typography

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'General/Typography',
  component: Typography,
}

export const article = () => {
  const [md, setMd] = useState<string>('')

  fetch('../../lib/MarkdownSample.md')
    .then((res) => res.text())
    .then((md) => {
      setMd(md)
    })
  return (
    <Typography tag="article">
      <ReactMarkdown remarkPlugins={[gfm]} children={md} />
    </Typography>
  )
}

export const Titles = () => (
  <React.Fragment>
    <Title level={1}>Hello world</Title>
    <Title level={2}>Hello world</Title>
    <Title level={3}>Hello world</Title>
    <Title level={4}>Hello world</Title>
    <Title level={5}>Hello world</Title>
  </React.Fragment>
)

export const Texts = () => (
  <>
    <Text>Supabase UI (default)</Text>
    <br />
    <Text type="secondary">Supabase UI (secondary)</Text>
    <br />
    <Text type="success">Supabase UI (success)</Text>
    <br />
    <Text type="warning">Supabase UI (warning)</Text>
    <br />
    <Text type="danger">Supabase UI (danger)</Text>
    <br />
    <Text disabled>Supabase UI (disabled)</Text>
    <br />
    <Text mark>Supabase UI (mark)</Text>
    <br />
    <Text code>Supabase UI (code)</Text>
    <br />
    <Text keyboard>Supabase UI (keyboard)</Text>
    <br />
    <Text underline>Supabase UI (underline)</Text>
    <br />
    <Text strikethrough>Supabase UI (strikethrough)</Text>
    <br />
    <Text strong>Supabase UI (strong)</Text>
    <br />
    <Link href="https://supabase.io" target="_blank">
      Supabase (Link)
    </Link>
  </>
)
