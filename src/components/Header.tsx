import { Link } from 'react-router-dom'
import logoIMG from '../assets/logo.png'
function Header() {
  return (
    <header className='w-full flex items-center justify-center px-6 py-8 bg-white'>
      {/* Wrapper — cho phép logo tràn ra ngoài thanh */}
      <div className='relative w-full max-w-4xl flex items-center'>

        {/* Thanh nền xanh lá bo tròn */}
        <div
          className='w-full flex items-center rounded-full h-14'
          style={{ backgroundColor: '#7BC67E' }}
        >
          {/* NAV — bên trái */}
          <nav className='flex items-center gap-5 pl-6 pr-4 w-full flex-shrink-0'>
            <span
              className='w-px h-5 rounded-full inline-block'
              style={{ backgroundColor: '#2E7D32' }}
            />
            <Link
              to='/'
              className='text-white font-semibold text-sm tracking-wide hover:text-green-900 transition-colors whitespace-nowrap'
            >
              Home
            </Link>
            <Link
              to='/products'
              className='text-white font-semibold text-sm tracking-wide hover:text-green-900 transition-colors whitespace-nowrap'
            >
              Products
            </Link>
          </nav>

          {/* Chỗ trống giữa — nhường chỗ cho logo */}
          <div className='flex-shrink-0 w-28' />

          {/* SEARCH full width bên phải */}
          <div className='flex flex-1 items-center pr-3 w-full'>
            <div className='flex items-center gap-2 bg-white bg-opacity-30 rounded-full px-4 py-1.5 w-full hover:bg-opacity-50 transition cursor-text'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-4 h-4 text-white flex-shrink-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z'
                />
              </svg>
              <input
                type='text'
                placeholder='Search...'
                className='bg-transparent outline-none text-white placeholder-white placeholder-opacity-80 text-sm w-full'
              />
            </div>
          </div>
        </div>

        {/* LOGO — nổi lên giữa, vượt ra ngoài thanh */}
        <div
          className='absolute left-1/2 bg-white shadow-lg flex items-center justify-center overflow-hidden'
          style={{
            transform: 'translate(-50%, -50%)',
            top: '50%',
            zIndex: 10,
            width: '88px',
            height: '88px',
            border: '3.5px solid #F5A623',
            borderRadius: '50%',
          }}
        >
          <img
            src={logoIMG}
            alt="Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '50%',
            }}
          />
        </div>

      </div>
    </header>
  )
}

export default Header
