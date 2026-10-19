import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root")!
createRoot(root).render(<App />)

const boot = document.getElementById("boot")
if (boot) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const shownAt = Number((window as Window & { __bootAt?: number }).__bootAt ?? Date.now())
  const wait = reduce ? 0 : Math.max(0, 480 - (Date.now() - shownAt))
  window.setTimeout(() => {
    document.documentElement.classList.remove("boot-lock")
    boot.classList.add("is-done")
    window.setTimeout(() => boot.remove(), reduce ? 0 : 360)
  }, wait)
}
