import { Link } from 'react-router-dom'
import logoIMG from '../assets/logo.png'
import { Z, HEADER_HEIGHT, HEADER_TOP, COLOR } from '../constants/theme'

// ─── Sub-components ────────────────────────────────────────────

function NavLinks() {
  return (
    <nav className='flex items-center gap-5 pl-6 pr-4 flex-shrink-0'>
      <span className='w-px h-5 rounded-full inline-block' style={{ backgroundColor: COLOR.greenPrimary }} />
      {[
        { to: '/',         label: 'Home'     },
        { to: '/products', label: 'Products' },
      ].map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className='text-white font-semibold text-sm tracking-wide whitespace-nowrap
                     hover:text-green-900 transition-colors'
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

function SearchBar() {
  return (
    <div className='flex flex-1 items-center pr-3'>
      <div className='flex items-center gap-2 w-full rounded-full px-4 py-1.5
                      bg-white/30 hover:bg-white/50 transition cursor-text'>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-4 h-4 text-white flex-shrink-0'
             fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2.5}>
          <path strokeLinecap='round' strokeLinejoin='round'
                d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' />
        </svg>
        <input
          type='text'
          placeholder='Search...'
          className='flex-1 bg-transparent outline-none text-white
                     placeholder:text-white/80 text-sm'
        />
      </div>
    </div>
  )
}

function Logo() {
  return (
    <div
      className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                 flex items-center justify-center overflow-hidden
                 bg-white shadow-lg'
      style={{
        top: '50%',
        zIndex: Z.header + 1, // logo nổi trên thanh header
        width: 88, height: 88,
        border: `3.5px solid ${COLOR.gold}`,
        borderRadius: '50%',
      }}
    >
      <img
        src={logoIMG}
        alt='Logo'
        className='w-full h-full object-cover object-center rounded-full'
      />
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────

export default function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        top: HEADER_TOP,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 80px)', // margin 40px mỗi bên
        maxWidth: 960,
        height: HEADER_HEIGHT,
        zIndex: Z.header,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
        padding: '0 24px',
        border: `1.5px solid ${COLOR.greenLight}`,
      }}
    >
      {/* Inner wrapper — cho logo absolute */}
      <div className='relative w-full flex items-center'>

        {/* Thanh xanh lá bo tròn */}
        <div
          className='w-full flex items-center rounded-full h-14'
          style={{ backgroundColor: COLOR.greenLight }}
        >
          <NavLinks />
          {/* Khoảng trống giữa nhường chỗ logo */}
          <div className='flex-shrink-0 w-28' />
          <SearchBar />
        </div>

        <Logo />
      </div>
    </header>
  )
}
