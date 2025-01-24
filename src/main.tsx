import React from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider } from '@fluentui/react-components'
import './index.css'
import App from './App'
import { useTheme } from './hooks/useTheme'

const Main: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <FluentProvider theme={theme}>
      <App onThemeChange={toggleTheme} />
    </FluentProvider>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<Main />)

export default Main
