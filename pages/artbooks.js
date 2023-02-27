import Layout from '../components/Layout'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'
import Productartbook from '../components/Productartbook'
import artbook from '../public/img/banners/artbooksxxx.webp'

export default function artbooks({products}) {
  return (
    <>
      <Layout title={'Artbooks'} description={'Venta de mangas ~ Artbooks ~ Novelas ~ Boxset'}>
        <div className="mangaContainer">
          <img src={artbook.src} width={1920}></img>
        </div>
        <div className='products-heading'>
          <h2>Artbooks Disponibles</h2>
          <p> Libros de Arte de la cultura gamer y anime, poco frecuentes y coleccionables, disfruta de los increibles diseños de tus obras favoritas.</p>
        </div>
        <div className="products-container">
          {products?.map((product) => <Productartbook key={product._id} product={product} />)}
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "artbooks"] | order(name asc)';
  const products = await client.fetch(query);
  
  return {
    props: { products }
  }
}
