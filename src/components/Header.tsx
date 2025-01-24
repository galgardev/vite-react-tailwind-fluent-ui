import Logo from './Logo'
import ThemeButton from './ThemeButton'

interface AppProps {
  onThemeChange: (checked: boolean) => void
}

const Header = ({ onThemeChange }: AppProps) => {
  return (
    <header className='fixed flex w-full items-center justify-between px-4 py-2'>
      <a href='/'>
        <Logo className='h-6' />
      </a>
      <div>
        <ThemeButton onThemeChange={onThemeChange} />
      </div>
    </header>
  )
}
export default Header
