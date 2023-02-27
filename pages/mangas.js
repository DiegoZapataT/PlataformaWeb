import Layout from '../components/Layout'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'
import Productmanga from '../components/Productmanga'
import manga from '../public/img/banners/mangasxxxx.webp'


export default function mangas({products}) {
  return (
    <>
      <Layout title={'Mangas'} description={'Venta de mangas ~ Artbooks ~ Novelas ~ Boxset'}>
        <div className="mangaContainer">
          <img src={manga.src} width={1920}></img>
        </div>
        <div className='products-heading'>
          <h2>Mangas disponibles</h2>
          <p> Iniciate en la cultura del manga con las mejores series y mas famosas creaciones del pais Nipon </p>
        </div>
        <div className='products-container'>
          {products?.map((product) => <Productmanga key={product._id} product={product}/>)}
          {console.log(products)}
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "mangas"] | order(name asc)';
  const products = await client.fetch(query);
  
  return {
    props: { products }
  }
}


