import { Outlet } from '@remix-run/react';
import styles from '~/Styles/blog.css';

export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}

function Blog() {
  return (
    <main className="contenedor">
      <Outlet />
    </main>
  )
}

export default Blog