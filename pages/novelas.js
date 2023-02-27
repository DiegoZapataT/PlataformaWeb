import Layout from '../components/Layout'
import { client } from '../lib/client'
import { urlFor } from '../lib/client'
import Productnovela from '../components/Productnovela'
import novela from '../public/img/banners/novelas.webp'


export default function novelas({products}) {
  return (
    <>
      <Layout title={'Novelas'} description={'Venta de mangas ~ Artbooks ~ Novelas ~ Boxset'}>
        <div className="mangaContainer">
            <img src={novela.src} width={1920}></img>
        </div>
        <div className='products-heading'>
          <h2>Novelas disponibles</h2>
          <p>Si buscas algo que leer que salga del confort de lo normal, te invitamos a introducirte
            en las siguientes novelas.
          </p>
        </div>
        <div className='products-container'>
          {products?.map((product)=> < Productnovela key={product.key} product={product} />)}
          {console.log(products)}
        </div>
      </Layout>
    </>
  )
}

export const getServerSideProps = async() => {
  const query = '*[_type == "novelas"] | order(name asc)';
  const products = await client.fetch(query);
  
  return {
    props: { products }
  }
}


  