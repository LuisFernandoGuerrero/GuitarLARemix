import { useOutletContext } from '@remix-run/react'
import imagen from '../../public/img/nosotros.jpg'
import styles from '~/Styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLa - Sobre Nosotros',
    description: 'Venta de guitarras para todos los estilos'
  }
}

export function links() {
  return [
    {
      rel:'stylesheet',
      href: styles
    }, 
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut quam augue, interdum ac velit eu, semper viverra ipsum. Proin eu pulvinar tellus. Suspendisse rutrum placerat lorem sed tincidunt. Maecenas ornare vestibulum elit, eu gravida lacus. Nam eleifend facilisis mi, a malesuada sem pretium at. Pellentesque nec efficitur ipsum. Nullam suscipit tortor eu metus vulputate semper. Nulla dignissim justo sem, sed interdum eros elementum venenatis</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut quam augue, interdum ac velit eu, semper viverra ipsum. Proin eu pulvinar tellus. Suspendisse rutrum placerat lorem sed tincidunt. Maecenas ornare vestibulum elit, eu gravida lacus. Nam eleifend facilisis mi, a malesuada sem pretium at. Pellentesque nec efficitur ipsum. Nullam suscipit tortor eu metus vulputate semper. Nulla dignissim justo sem, sed interdum eros elementum venenatis</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros