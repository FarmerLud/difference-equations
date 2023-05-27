// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import styles from './App.module.css'
import { Input } from './components/Input/Input'

function App() {
  // const [count, setCount] = useState(0)
  console.log(styles)

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Ecuaciones en diferencia</h1>
      <Input />
    </div>
  )
}

export default App
