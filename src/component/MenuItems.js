import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = ({showMenu, active}) => {
  return (
    <div className=''>
   <ul className={active ? 'text-white text-4xl flex flex-col justify-aroud items-center justify-center fixed left-1/5 bg-black/90 backdrop-blur-3xl gap-8 inset-0 py-[400px]  ' : 'hidden '}>
        <div onClick={showMenu} className="text-4xl border-4 rounded-full px-3 py-1 cursor-pointer transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110">
         X
        </div>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/'>ACCUEIL</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/planAction'>PLAN D'ACTION</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/produit'>PRODUIT</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/technologies'>TECHNOLOGIES</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/partenaires'>PARTENAIRES</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/contact'>CONTACT</Link></li>
        <li className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110'
        onClick={showMenu}
        ><Link to='/aPropos'>À PROPOS</Link></li>
    </ul>
    </div>
 
  )
}

export default MenuItems