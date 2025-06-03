'use client'

import { useEffect } from 'react'

export function SmoothScrollToHash() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Garante que o clique foi em um <a>
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      // Apenas âncoras internas
      if (!href || !href.startsWith('#')) return

      // Garante que o elemento existe na página
      const targetElement = document.querySelector(href)
      if (!targetElement) return

      // Previne o comportamento padrão (teleporte)
      event.preventDefault()

      // Faz scroll suave até o ID
      targetElement.scrollIntoView({ behavior: 'smooth' })

      // Atualiza a URL no navegador sem recarregar
      history.pushState(null, '', href)
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
