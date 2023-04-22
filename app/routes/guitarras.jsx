import { Outlet, useOutletContext } from '@remix-run/react';
import styleGuitarras from '~/Styles/guitarras.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleGuitarras
    }
  ]
}

function Tienda() {
  return (
    <main className='contenedor'>
      <Outlet 
        context={useOutletContext()}
      />
    </main>
  )
}

export default Tienda