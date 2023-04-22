export async function getCurso() {
    const respuesta = await fetch(`${process.env.API_URL}curso?populate=imagen`);
    return await respuesta.json();
}
/*
export async function getPost(url) {
    const respuesta = await fetch(`${process.env.API_URL}posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json();
}

*/