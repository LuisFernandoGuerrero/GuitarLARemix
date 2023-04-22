import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server'
import { formatearFecha } from "~/utils/helpers"
import styles from "~/Styles/blog.css"

export function meta({ data }) {

    if (!data) {
      return {
        title: 'GuitarLA - Post no encontrado',
        descripcion: `Blog de guitarras, Post no encontrado`
      }
    }
  
    return {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
      descripcion: `Entradas ${data.data[0].attributes.titulo}`
    }
  }

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export async function loader({ params }) {
    const { postUrl } = params;
    const post = await getPost(postUrl);

    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no Encontrado'
        })
    }
    return post
}

export default function PostUrl() {
    const post = useLoaderData();
    const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;
    return (
        <article className='post mt-3'>
            <img src={imagen?.data?.attributes.url} alt={`Imagen Blog ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}
