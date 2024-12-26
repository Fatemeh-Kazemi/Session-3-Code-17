import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MailBox from './MailBox'
import Mail from "./Mail"
import Counter from './Counter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MailBox />
    <Mail />

    <Counter />
  </StrictMode>,
)
