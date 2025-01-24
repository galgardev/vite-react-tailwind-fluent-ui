import * as React from 'react'
import { ToggleButton } from '@fluentui/react-components'
import { WeatherSunnyRegular, WeatherMoonRegular } from '@fluentui/react-icons'
import { ThemeButtonProps } from '../types'

const ThemeButton: React.FC<ThemeButtonProps> = ({ onThemeChange }) => {
  const [checked, setChecked] = React.useState(
    () => localStorage.getItem('theme') === 'dark',
  )

  const handleToggle = () => {
    const newCheckedState = !checked
    setChecked(newCheckedState)
    onThemeChange(newCheckedState)
  }

  return (
    <ToggleButton
      checked={checked}
      icon={checked ? <WeatherSunnyRegular /> : <WeatherMoonRegular />}
      onClick={handleToggle}
    />
  )
}

export default ThemeButton
