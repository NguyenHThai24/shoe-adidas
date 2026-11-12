import { Z, COLOR } from '../constants/theme'

// ─── Data ──────────────────────────────────────────────────────

const PRODUCTS = [
  { id: 'IF8198', name: 'Ultraboost 5'       },
  { id: 'IF9401', name: 'Adizero Boston 12'  },
  { id: 'ID3634', name: 'Adizero Adios Pro 3'},
  { id: 'GX6879', name: 'Forum Low'          },
  { id: 'FX5508', name: 'Stan Smith'         },
  { id: 'ID8932', name: 'Terrex AX4'         },
]

const THUMBNAILS = ['Side', 'Top', 'Back', 'Sole']

// ─── Sub-components ────────────────────────────────────────────

function HeroText() {
  return (
    <div style={{ maxWidth: 280 }}>
      <p className='text-xs font-bold tracking-widest mb-1' style={{ color: COLOR.greenAccent }}>
        ADIDAS ──────
      </p>
      <h1 className='font-black leading-tight mb-1' style={{ fontSize: 38, color: COLOR.textDark }}>
        Ultraboost 5
      </h1>
      <p className='italic font-medium mb-2 text-base' style={{ color: COLOR.greenPrimary }}>
        Move Better. Feel Better.
      </p>
      <p className='text-sm mb-5 leading-relaxed' style={{ color: '#555' }}>
        Công nghệ tiên tiến, thiết kế hiện đại,<br />
        đồng hành cùng bạn trên mọi hành trình.
      </p>
      <button
        className='flex items-center gap-2 text-white text-sm font-semibold
                   rounded-full px-6 py-2.5 hover:brightness-110 active:scale-95 transition'
        style={{ backgroundColor: COLOR.greenPrimary }}
      >
        Khám phá ngay
        <svg xmlns='http://www.w3.org/2000/svg' width={14} height={14} fill='none'
             viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
        </svg>
      </button>
    </div>
  )
}

function ViewerSidebar() {
  return (
    <div className='flex flex-col items-center gap-2'>
      {/* 360° badge */}
      <div className='flex flex-col items-center mb-1'>
        <span className='flex items-center gap-1 text-xs font-bold' style={{ color: COLOR.greenPrimary }}>
          <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'
               viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round'
                  d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0
                     0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
          </svg>
          360°
        </span>
        <span className='text-xs' style={{ color: COLOR.greenAccent }}>Xoay để xem</span>
      </div>

      {/* Thumbnails */}
      {THUMBNAILS.map((label, i) => (
        <button
          key={label}
          className='text-xs transition hover:scale-105'
          style={{
            width: 68, height: 50,
            borderRadius: 8,
            border: `2px solid ${i === 0 ? COLOR.greenPrimary : '#c8e6c9'}`,
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(4px)',
            color: COLOR.textMuted,
            cursor: 'pointer',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

function CarouselDots() {
  const ArrowBtn = ({ prev }: { prev?: boolean }) => (
    <button
      className='flex items-center justify-center rounded-full bg-white shadow
                 hover:bg-green-50 transition'
      style={{ width: 22, height: 22, border: 'none', cursor: 'pointer' }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' width={10} height={10} fill='none'
           viewBox='0 0 24 24' stroke={COLOR.greenPrimary} strokeWidth={2.5}>
        <path strokeLinecap='round' strokeLinejoin='round'
              d={prev ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
      </svg>
    </button>
  )

  return (
    <div className='flex items-center justify-center gap-2'>
      <ArrowBtn prev />
      {[0,1,2,3,4].map(i => (
        <span
          key={i}
          className='inline-block rounded-full'
          style={{
            width: i === 0 ? 18 : 7, height: 7,
            backgroundColor: i === 0 ? COLOR.greenPrimary : '#a5d6a7',
          }}
        />
      ))}
      <ArrowBtn />
    </div>
  )
}

function ProductCard({ name, id }: { name: string; id: string }) {
  return (
    <div
      className='rounded-xl overflow-hidden bg-white cursor-pointer
                 transition-all hover:-translate-y-1 hover:shadow-lg'
      style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.07)' }}
    >
      {/* Ảnh placeholder */}
      <div className='flex items-center justify-center text-2xl'
           style={{ height: 80, background: `linear-gradient(145deg, #f5f5f5, ${COLOR.greenPale})` }}>
        🥿
      </div>
      <div className='flex items-center justify-between px-2.5 py-2'>
        <div>
          <p className='text-xs font-semibold' style={{ color: COLOR.textDark }}>{name}</p>
          <p className='text-xs' style={{ color: COLOR.textMuted }}>{id}</p>
        </div>
        <div className='flex items-center justify-center rounded-full'
             style={{ width: 20, height: 20, backgroundColor: COLOR.greenPale }}>
          <svg xmlns='http://www.w3.org/2000/svg' width={10} height={10} fill='none'
               viewBox='0 0 24 24' stroke={COLOR.greenPrimary} strokeWidth={2.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </div>
      </div>
    </div>
  )
}

function FeaturedProducts() {
  return (
    <div
      className='rounded-2xl px-4 py-3'
      style={{ backgroundColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)' }}
    >
      {/* Header row */}
      <div className='flex items-center justify-between mb-3'>
        <div className='flex items-center gap-2'>
          <span className='inline-block w-0.5 h-5 rounded'
                style={{ backgroundColor: COLOR.greenPrimary }} />
          <h2 className='text-sm font-bold m-0' style={{ color: COLOR.textDark }}>
            Các mẫu giày nổi bật
          </h2>
        </div>
        <button className='flex items-center gap-1 text-xs font-semibold bg-transparent border-none cursor-pointer'
                style={{ color: COLOR.greenPrimary }}>
          Xem tất cả
          <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} fill='none'
               viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className='grid gap-2.5' style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
        {PRODUCTS.map(p => <ProductCard key={p.id} {...p} />)}
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────
// Canvas và Header đã được MainLayout quản lý.
// HomePage chỉ render nội dung thuần túy.

export default function HomePage() {
  return (
    <div
      className='flex flex-col gap-3 px-10 py-5'
      style={{ height: `calc(100vh - var(--header-h, 76px))`, overflow: 'hidden' }}
    >
      {/* Hero row: text trái | giữa trống cho canvas | sidebar phải */}
      <div className='flex items-start justify-between flex-1'>
        <HeroText />
        <ViewerSidebar />
      </div>

      {/* Carousel dots */}
      <CarouselDots />

      {/* Sản phẩm nổi bật */}
      <FeaturedProducts />
    </div>
  )
}
