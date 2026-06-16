import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Portada */}
      <section className="relative h-[700px]">

        <Image
          src="/imagenes/cuartel.png"
          alt="Cuartel de Bomberos"
          fill
          className="object-cover"
          priority
        />

        {/* Capa oscura */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Texto sobre la imagen */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bomberos Voluntarios de Concordia
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Concordia • Entre Ríos • Argentina
          </p>

          <p className="text-xl md:text-2xl max-w-3xl mt-4">
            Portal institucional e inventario interactivo de móviles.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/flota"
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              🚒 Ver Flota
            </Link>

            <Link
              href="/historia"
              className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-semibold transition"
            >
              📖 Historia
            </Link>

          </div>

        </div>

      </section>

      {/* Frase institucional */}
      <section className="py-12 px-6 text-center bg-white">

        <p className="text-2xl italic text-gray-700 max-w-4xl mx-auto">
          "Abnegación, sacrificio y desinterés al servicio de la comunidad."
        </p>

      </section>

      {/* Tarjetas */}
      <section className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          <Link href="/historia">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition cursor-pointer h-full">

              <h2 className="text-2xl font-semibold mb-3 text-red-700">
                📖 Historia
              </h2>

              <p className="text-black">
                Conocé la historia y el crecimiento del cuartel y del sistema de Bomberos Voluntarios en Argentina.
              </p>

            </div>
          </Link>

          <Link href="/flota">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition cursor-pointer h-full">

              <h2 className="text-2xl font-semibold mb-3 text-red-700">
                🚒 Flota
              </h2>

              <p className="text-black">
                Consultá los móviles, sus características e inventarios interactivos.
              </p>

            </div>
          </Link>

          <Link href="/academia">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition cursor-pointer h-full">

              <h2 className="text-2xl font-semibold mb-3 text-red-700">
                📚 Academia
              </h2>

              <p className="text-black">
                Material de estudio para aspirantes, bomberos y capacitación permanente.
              </p>

            </div>
          </Link>

        </div>

      </section>

      {/* Estadísticas */}
      <section className="bg-white py-12 border-t border-gray-200">

        <div className="container mx-auto">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold text-red-700">
                + 4
              </h3>

              <p className="text-gray-700">
                Móviles Operativos
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-700">
                2/06
              </h3>

              <p className="text-gray-700">
                Día Nacional del Bombero Voluntario
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-red-700">
                24 hs
              </h3>

              <p className="text-gray-700">
                Servicio a la Comunidad
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8">

        <div className="container mx-auto text-center">

          <h3 className="font-semibold text-lg">
            🚒 Bomberos Voluntarios de Concordia
          </h3>

          <p className="text-gray-400 mt-2">
            Portal institucional e inventario interactivo de móviles.
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Desarrollado con Next.js
          </p>

        </div>

      </footer>

    </main>
  );
}