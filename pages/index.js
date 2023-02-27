// import Link from 'next/link'
import Layout from '../components/Layout'
import banner from '../public/img/banners/bannerinicio.jpg'
import estanteria from '../public/img/estanteria.png'
import welcome from '../public/img/welcome.png'

export default function Home() {
  return (
    <>
      <Layout title={'Inicio'} description={'Venta de mangas ~ Artbooks ~ Novelas ~ Boxset'}>
            <div className="success-wrapper">
                <div className="success">
                    <img className="icon" src={welcome.src}/>
                    <h2> Bienvenidos a Murasaki Mangas </h2>
                    <p className="email-msg">Somos una tienda especializada que se dedica a la venta de mangas, artbooks, novelas y boxsets de tus series favoritas</p>
                    <p className="description"> Tambien traemos productos a pedidos, si te interesa, cualquier consulta, a nuestro email <a className="email" href="murasakimangas@gmail.com">murasakimangas@gmail.com</a></p>
                </div>
            </div>
      </Layout>
    </>
  )
}
