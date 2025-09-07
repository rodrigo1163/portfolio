import { useEffect } from 'react'

/**
 * Hook para redirecionar para âncoras após o splash screen desaparecer
 * @param showSplash - Se o splash screen está sendo exibido
 */
export function useAnchorRedirect(showSplash: boolean) {
  useEffect(() => {
    // Só executa quando o splash screen não está mais sendo exibido
    if (!showSplash) {
      const handleAnchorRedirect = () => {
        // Verifica se há uma âncora na URL
        const hash = window.location.hash
        if (hash) {
          const anchorId = hash.substring(1)
          const element = document.getElementById(anchorId)
          
          if (element) {
            // Scroll suave para o elemento
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }

      // Pequeno delay para garantir que o DOM está totalmente renderizado
      const timer = handleAnchorRedirect()
      
      return () => timer
    }
  }, [showSplash])
}
