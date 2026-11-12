import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { useFullscreenCanvas } from '../hooks/useFullscreenCanvas'
import { Z, CONTENT_TOP } from '../constants/theme'

export default function MainLayout() {
  const canvasRef = useFullscreenCanvas()

  return (
    <>
      {/* 1. Canvas — full viewport, nằm dưới cùng, tồn tại xuyên suốt mọi trang */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, zIndex: Z.canvas, cursor: 'grab' }}
      />

      {/* 2. Header — fixed, nổi trên canvas, luôn hiện trên hết */}
      <Header />

      {/* 3. Nội dung trang — bắt đầu ngay dưới header */}
      <main style={{ position: 'fixed', inset: 0, paddingTop: CONTENT_TOP, zIndex: Z.content }}>
        <Outlet />
      </main>
    </>
  )
}
