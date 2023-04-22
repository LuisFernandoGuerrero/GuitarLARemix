import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '~/components/listadoGuitarras'
import styleGuitarras from '~/Styles/guitarras.css'
import ListadoPost from '~/components/listadoPosts';
import stylePosts from '~/Styles/blog.css'
import Curso from '../components/curso';
import styleCurso from '~/Styles/curso.css'


export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylePosts
    },
    {
      rel: 'stylesheet',
      href: styleCurso
    }
  ]
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  }
}
function Index() {
  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className='contenedor'>
        <ListadoPost
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index