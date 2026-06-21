import Image from "next/image";
export default function HistoriaPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold text-red-700 mb-8">
        📖 Historia del Cuartel
      </h1>
      <div className="overflow-hidden rounded-xl shadow-lg mb-8 max-w-3xl mx-auto">
        <Image
          src="/imagenes/historia-bomberos.png"
          alt="Historia de los Bomberos Voluntarios"
          width={200}
          height={70}
          className="max-w-3xl mx-auto"
        />
      </div>


      <details className="bg-white rounded-xl shadow-md p-6">
        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
          📖 Historia de los bomberos voluntarios de Argentina
        </summary>

        <div className="space-y-6 leading-8 text-black mt-6">

          <p>
            La historia de los Bomberos Voluntarios en Argentina se remonta a fines del siglo XIX, durante un período de gran crecimiento poblacional impulsado por la inmigración europea. Muchas familias se establecieron en barrios de la Ciudad de Buenos Aires, donde las viviendas construidas principalmente en madera y chapa se encontraban expuestas a constantes riesgos de incendio.
          </p>

          <p>
            En el barrio de La Boca del Riachuelo, habitado en gran parte por inmigrantes italianos, surgió la necesidad de organizarse para enfrentar estas emergencias. A comienzos de 1884, un incendio ocurrido en una vivienda del barrio motivó a Tomás Liberti a impulsar la creación de una asociación destinada a proteger a los vecinos y sus bienes.
          </p>

          <p>
            El 2 de junio de 1884 se realizó una reunión en el Ateneo Iris, donde se sentaron las bases de la Asociación Italiana de Bomberos Voluntarios de La Boca. Esta fecha fue posteriormente reconocida como el Día del Bombero Voluntario en la República Argentina.
          </p>

          <p>
            Bajo la presidencia de Tomás Liberti, la nueva institución comenzó a recaudar fondos y a organizar sus primeras actividades operativas. Su bautismo de fuego ocurrió el 14 de noviembre de 1885, cuando intervino en un incendio en una fábrica de velas ubicada en Barracas Sur.
          </p>

          <p>
            Con el paso de los años, el ejemplo de La Boca se extendió a todo el país, dando origen a numerosas asociaciones de bomberos voluntarios comprometidas con el servicio a la comunidad. Durante la década de 1960 comenzaron a formarse las federaciones provinciales, fortaleciendo la organización y coordinación entre las distintas instituciones.
          </p>

          <p>
            En 1988 se constituyó el Consejo de Federaciones de Bomberos Voluntarios de la República Argentina (CFBVRA), organismo que representa al Sistema Nacional de Bomberos Voluntarios. Más tarde, la sanción de la Ley N.º 25.054 consolidó el marco normativo que regula la actividad de los bomberos voluntarios en todo el territorio nacional.
          </p>

          <p>
            Actualmente, miles de hombres y mujeres continúan honrando el legado de aquellos pioneros, brindando servicio, compromiso y vocación en beneficio de la comunidad.
          </p>

        </div>
      </details>





      <div className="bg-white rounded-xl shadow p-8 text-black">

        <hr className="my-8" />

        <p className="mb-8">
          En la provincia de Entre Ríos, el primer cuartel se creo el 15 de noviembre
          de 1996, en Gualeguaychu. El 16 de noviembre se creo la Federacion
          Entrerriana de Bomberos Voluntarios, con el objetivo de coordinar y fortalecer
          a las distintas asociaciones de bomberos voluntarios en la provincia.

        </p>

        <p className="mb-8">
          La creacion del primer cuartel de bomberos voluntarios de Concordia fue el 16 de septiembre de 1991.
        </p>

        <p>
          Su presidente fundador fue el Dr. Rodolfo Gabiud, y el primer Jefe de cuerpo fue el Oficial Principal Eduardo Gorroño.
        </p>
        <hr className="my-8" />

        <h2 className="text-2xl font-semibold mb-4">
          Línea de Tiempo
        </h2>

        <div className="space-y-6 mt-8">

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-bold">1884</h3>
            <p>Fundación de la Asociación Italiana de Bomberos Voluntarios de La Boca.</p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-bold">1885</h3>
            <p>Primer servicio de emergencia realizado por bomberos voluntarios.</p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-bold">1966</h3>
            <p>Se crea el primer cuartel en Gualeguaychu, Entre Ríos.</p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-bold">1988</h3>
            <p>Creación del Consejo de Federaciones de Bomberos Voluntarios de la República Argentina.</p>
          </div>

          <div className="border-l-4 border-red-600 pl-4">
            <h3 className="font-bold">Actualidad</h3>
            <p>Miles de bomberos voluntarios prestan servicio en todo el país.</p>
          </div>

        </div>

      </div>

    </main>
  );
}