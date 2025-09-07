import { useEffect, useRef, useState } from 'react'

interface UseSplashScreen {
  showSplash: boolean
  visible: boolean
}

interface UseSplashScreenProps {
  loading?: boolean
  minMs?: number
  fadeMs?: number
}

/**
 * Hook para controlar SplashScreen com threshold e fade out.
 * @param loading Se está carregando (opcional, se não fornecido usa carregamento padrão de 500ms)
 * @param minMs Tempo mínimo de exibição (default: 500ms)
 * @param fadeMs Duração do fade out (default: 300ms)
 */
export function useSplashScreen({ loading, minMs = 500, fadeMs = 300 }: UseSplashScreenProps): UseSplashScreen {
  const [showSplash, setShowSplash] = useState(true)
  const [visible, setVisible] = useState(true)
  const mountTime = useRef<number>(Date.now())

  useEffect(() => {
    // Se loading não foi fornecido, usa carregamento padrão de 500ms
    if (loading === undefined) {
      const timer = setTimeout(() => {
        setVisible(false) // inicia fade out
        setTimeout(() => setShowSplash(false), fadeMs)
      }, minMs)
      return () => clearTimeout(timer)
    }

    if (loading) {
      setShowSplash(true)
      setVisible(true)
      mountTime.current = Date.now()
      return
    }
    // Quando loading vira false, espera o threshold mínimo
    const elapsed = Date.now() - mountTime.current
    const wait = Math.max(minMs - elapsed, 0)
    const t1 = setTimeout(() => {
      setVisible(false) // inicia fade out
      // Após fade, remove do DOM
      const t2 = setTimeout(() => setShowSplash(false), fadeMs)
      return () => clearTimeout(t2)
    }, wait)
    return () => clearTimeout(t1)
  }, [loading, minMs, fadeMs])

  return { showSplash, visible }
}
