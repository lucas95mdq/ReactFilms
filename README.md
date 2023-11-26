Instrucciones para ejecutar la aplicacion localmente:
    1- Primero se debe clonar el repositorio de Github (https://github.com/lucas95mdq/ReactFilms.
    2- Una vez clonado instalar los paquetes npm (npm instal).
    3- Crearse una cuenta en TMDB y obtener una api key y token para su API.
    3- Como la aplicacion se conecta con la api de TMDB (https://developer.themoviedb.org/docs) se debe contar con una api key o token. Crear un archivo .env en la carpeta principal donde haya clonado el repositorio y agregar su clave y token de la siguiente manera:
        VITE_APP_TMDB_TOKEN = {token}
        VITE_APP_TMDB_API_KEY = {API_key}
    Una vez agregadas estas dos variables de entorno, la aplicacion deberia ser capaz de conectarse con la API y mostrar las peliculas.
    4- Si bien pide un usuario y contraseña, esa parte no se encuentra conectara al backend por lo que se puede entrar con cualquier dato que se ingrese.


Dependencias utilizadas:

    Testing library
    - https://www.robinwieruch.de/vitest-react-testing-library/
    react testing library con vitest

    Vercel
    - https://vercel.com/guides/how-can-i-use-github-actions-with-vercel

    React router
    - https://reactrouter.com/en/main

    Axios
    -https://axios-http.com/es/docs/intro

    TMDB
    -https://developer.themoviedb.org/docs

    SWR
    -https://swr.vercel.app/es-ES
