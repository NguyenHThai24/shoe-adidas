import { Link } from 'react-router-dom'
import logoIMG from '../assets/logo.png'
import { Z, HEADER_HEIGHT, HEADER_TOP, COLOR } from '../constants/theme'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/products', label: 'Products' },
]

export default function Header() {
  return (
    <header style={{
      position: 'fixed',
      top: HEADER_TOP,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 80px)',
      maxWidth: 960,
      height: HEADER_HEIGHT,
      zIndex: Z.header,
      borderRadius: 999,
      backgroundColor: COLOR.greenLight,
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      gap: 7,
      boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    }}>

      {/* LOGO — nằm gọn trong thanh, bo tròn nhẹ */}
      <div className='w-20 -mt-1'>
        <img src={logoIMG} alt='Logo'
             style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} style={{
            color: 'white',
            fontWeight: 600,
            fontSize: 14,
            letterSpacing: '0.02em',
            padding: '6px 14px',
            borderRadius: 999,
            textDecoration: 'none',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.12)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* SPACER */}
      <div style={{ flex: 1 }} />

      {/* SEARCH */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'rgba(255,255,255,0.25)',
        borderRadius: 999,
        padding: '0 16px',
        height: 38,
        width: 300,
        cursor: 'text',
        transition: 'background 0.15s',
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.38)')}
      onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.25)')}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width={15} height={15} fill='none'
             viewBox='0 0 24 24' stroke='white' strokeWidth={2.5} style={{ flexShrink: 0 }}>
          <path strokeLinecap='round' strokeLinejoin='round'
                d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' />
        </svg>
        <input type='text' placeholder='Search...' style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'white',
          fontSize: 13,
          fontWeight: 500,
        }}
        onFocus={e => ((e.currentTarget.parentElement as HTMLDivElement).style.background = 'rgba(255,255,255,0.45)')}
        onBlur={e => ((e.currentTarget.parentElement as HTMLDivElement).style.background = 'rgba(255,255,255,0.25)')}
        />
      </div>

    </header>
  )
}
