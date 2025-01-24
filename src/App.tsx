import { Display, Subtitle1 } from '@fluentui/react-components'
import Header from './components/Header'

interface AppProps {
  onThemeChange: (checked: boolean) => void
}

const App = ({ onThemeChange }: AppProps) => {
  return (
    <>
      <Header onThemeChange={onThemeChange} />
      <div className='flex h-dvh w-full flex-col items-center justify-center gap-4'>
        <Display>
          ¡<span className='text-sky-600'>Hola</span>, mundo!
        </Display>
        <Subtitle1>Vamos a crear algo único 😊</Subtitle1>
      </div>
    </>
  )
}

export default App
