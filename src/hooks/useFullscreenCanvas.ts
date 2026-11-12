import { useEffect, useRef } from 'react'

// Hook quản lý canvas full-viewport.
// Tự resize theo cửa sổ; trả về ref để mount Three.js hoặc 2D context.
export function useFullscreenCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    function resize() {
      if (!canvas) return
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight

      // Placeholder gradient — xóa block này khi tích hợp Three.js
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      g.addColorStop(0,   '#e8f5e9')
      g.addColorStop(0.5, '#f1f8e9')
      g.addColorStop(1,   '#dcedc8')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return ref
}
