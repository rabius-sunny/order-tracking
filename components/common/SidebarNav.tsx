'use client'

import { LogoutOutlined, ProjectOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logOut } from '~/actions/auth'

const items = [{ icon: ProjectOutlined, href: '/dashboard', label: 'Orders' }]

export default function SidebarNav() {
  const pathname = usePathname()
  return (
    <div>
      <div className='my-10 text-white mx-2 text-xl font-semibold'>
        Dashboard
      </div>
      <div className='grid gap-2 px-2 duration-200'>
        {items.map((nav) => (
          <Link
            className={`text-white flex gap-2 font-medium py-2 px-2 rounded-lg ${
              pathname === (nav.href || '/') && 'bg-primary'
            }`}
            href={nav.href}
            key={nav.href}
          >
            <nav.icon className='text-lg' />
            {nav.label}
          </Link>
        ))}
        <button
          onClick={() => logOut()}
          className='flex gap-2 items-stretch text-white text-start font-medium py-2 px-2 rounded-lg hover:bg-white/30'
        >
          <LogoutOutlined className='text-base' />
          Logout
        </button>
      </div>
    </div>
  )
}
