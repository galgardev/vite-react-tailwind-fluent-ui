import { useState } from 'react'
import { webLightTheme, webDarkTheme } from '@fluentui/react-components'

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const prefersDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === null) {
      const initialTheme = prefersDarkTheme ? 'dark' : 'light'
      localStorage.setItem('theme', initialTheme)
      return prefersDarkTheme ? webDarkTheme : webLightTheme
    }

    return storedTheme === 'dark' ? webDarkTheme : webLightTheme
  })

  const toggleTheme = (isDark: boolean) => {
    const newTheme = isDark ? webDarkTheme : webLightTheme
    setTheme(newTheme)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return { theme, toggleTheme }
}
