import Logo from '@/components/ui/logo'
import NavMenu from '@/components/ui/navMenu'
import UserMenu from '@/components/ui/UserMenu'

import React from 'react'

function Header() {
return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">   
        <Logo />
        <NavMenu />
        <UserMenu />
      </div>
    </header>)
}

export default Header