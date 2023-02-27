import Layout from '../components/Layout'
import { client, urlFor } from '../lib/client'
import Productboxset from '../components/Productboxset'
import boxsets from '../public/img/banners/boxsetxxx.webp'

export default function boxset({products}) {
  return (
    <>
      <Layout title={'BoxSet'} description={'Venta de mangas ~ Artbooks ~ Novelas ~ Boxset'}>
        <div className="boxsetContainer">
          <img src={boxsets.src} width={1920}></img>
        </div>
        <div className='products-heading'>
          <h2>Boxsets disponibles</h2>
          <p> ¿Quieres tener colecciones completas de tus mangas favoritos en cajas espectaculares? Pues estas en el lugar correcto </p>
        </div>
        <div className='products-container'>
          {products?.map((product) => <Productboxset key={product._id} product={product} />)}
          {console.log(products)}
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "boxsets"] | order(name asc)';
  const products = await client.fetch(query);
  
  return {
    props: { products }
  }
}
