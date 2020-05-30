import React from "react"
import Layout from "../components/layout"
import image from "../assets/anita.jpg"

const SobreMi = () => {
  const Paragraph = ({ children }) => <p className="mb-4">{children}</p>

  return (
    <Layout showImage={false} headerTitle="sobre mi!">
      <div className="overflow-hidden w-1/2 mx-auto">
        <img src={image} alt="sobre mi" />
      </div>
      <div className="text-md md:text-xl mt-32 w-3/4 mx-auto">
        <Paragraph>
          Soy Ana María Barrientos, me gusta que me digan Anita. Soy madre de
          dos hijos increíbles, Nicolás y Francisca, compañera de Cristian y
          Matrona hace mas de 10 años.
        </Paragraph>
        <Paragraph>
          Me titulé de la Universidad de Concepción, trabajé varios años en
          atención primaria, en un sector rural de la región de Ñuble, Quillón,
          en donde conocí los recovecos de mi profesión, en el ambiente laboral
          en que críe a mis hijos, en donde descubrí quien soy en realidad, con
          la compañía de colegas maravillosas en donde el trabajo se transformó
          en un disfrute.
        </Paragraph>
        <Paragraph>
          En el año 2017 una situación hizo cambiar mi vida y lo cambió todo,
          cambió porque me enfermé de forma importante, cambió porque mis
          formas, mi estilo de vida, la forma de pensar, tenían que cambiar, y
          esta enfermedad me ayudo a hacerlo.
        </Paragraph>
        <Paragraph>
          El año 2016 inicié con mi amiga y colega querida la atención de partos
          en domicilio y realmente logró cambiar la perspectiva de todo, logré
          darme cuenta de que quería vivir de otra forma, hasta que la decisión
          llegó y renuncié a mi trabajo formal, renuncié al sistema que me formó
          en el año 2019, renuncié para poder vivir mis sueños, para poder
          acompañar a mis hijos y ser realmente su madre y no su sostenedora.{" "}
        </Paragraph>
        <Paragraph>
          La vida después de esto ha sido una montaña rusa, ha sido un ir y
          venir de emociones, ha sido conocer mujeres hermosas y aprender todos
          los días otro poquito, pero también ha sido desaprender tanto, ha sido
          encontrar el real significado de la palabra respeto, entender que
          significa acompañar y ya nunca más atender, reconocer en cada mujer
          que veo y acompaño, la Diosa que hay en su interior y la fuerza que
          tiene para llevar a cabo todo lo que se propongan.
        </Paragraph>
        <Paragraph>
          Sigo aprendiendo, y me encanta, me encanta ser testigo del inicio de
          la vida, me encanta aportar desde mi vereda a cambiar el mundo, ayudar
          a sanar el linaje materno, ayudar a recibir a cada vida como una
          fiesta, aportar en cada lactancia, como ese regalo maravilloso que
          hará de ese recién nacido una mejor persona.
        </Paragraph>
        <Paragraph>
          Para mi ser matrona fue mi sueño desde los 7 años, honro a mis
          ancestras parteras, honro a las mujeres que me sostuvieron para llegar
          aquí y te honro a ti hoy y me pongo a tu servicio. Te doy la más
          amorosa bienvenida a mi blog, donde encontrarás de todo un poquito,
          desde temas relacionados con nuestra salud hasta reflexiones
          personales que siento la necesidad de compartir con toda quien resuene
          con ellas.
        </Paragraph>
        <Paragraph>Gracias por permitirme acompañarlas. Abrazos.</Paragraph>
      </div>
    </Layout>
  )
}

export default SobreMi
