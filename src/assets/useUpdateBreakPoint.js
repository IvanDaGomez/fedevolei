import { useEffect, useState } from "react"

export default function useUpdateBreakpoint (value) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < value)
  useEffect(() => {
    window.addEventListener('resize', () => setIsMobile((window.innerWidth < value)))
    return () => {
      window.removeEventListener('resize', setIsMobile((window.innerWidth < value)))
    }
  },[value])
  return isMobile
}