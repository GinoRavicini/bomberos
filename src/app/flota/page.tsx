import Link from "next/link";
import Image from "next/image";

export default function FlotaPage() {
    return (
        <main className="max-w-6xl mx-auto p-8">

            <h1 className="text-4xl font-bold text-red-700 mb-8">
                🚒 Flota de Vehículos
            </h1>

            {/* ATAQUE RÁPIDO */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                    🟡 Ataque Rápido
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <Link href="/flota/movil-3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

                            <Image
                                src="/imagenes/movil3tarj.png"
                                alt="Móvil 3"
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 text-black">
                                <h3 className="text-2xl font-bold">
                                    🚒 Móvil 3
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Autobomba de ataque rápido.
                                </p>
                            </div>

                        </div>
                    </Link>

                    <Link href="/flota/movil-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

                            <Image
                                src="/imagenes/movil4tarj.png"
                                alt="Móvil 4"
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 text-black">
                                <h3 className="text-2xl font-bold">
                                    🚒 Móvil 4
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Autobomba de ataque rápido.
                                </p>
                            </div>

                        </div>
                    </Link>

                </div>
            </section>

            {/* ESTRUCTURALES */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                    🟢 Estructurales
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-white rounded-xl shadow-lg p-6 text-black">
                        <h3 className="text-2xl font-bold">
                            🚒 Móvil 22
                        </h3>

                        <p className="mt-2 text-gray-600">
                            Información próximamente.
                        </p>
                    </div>

                </div>
            </section>

            {/* LOGÍSTICA */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">
                    🔵 Logística
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <Link href="/flota/movil-23">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

                            <Image
                                src="/imagenes/movil23tarj.png"
                                alt="Móvil 23"
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 text-black">
                                <h3 className="text-2xl font-bold">
                                    🚒 Móvil 23
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Camión cisterna de origen francés con capacidad de 13.000 litros.
                                </p>
                            </div>

                        </div>
                    </Link>

                    <Link href="/flota/movil-31">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">

                            <Image
                                src="/imagenes/movil31tarj.png"
                                alt="Móvil 31"
                                width={600}
                                height={400}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 text-black">
                                <h3 className="text-2xl font-bold">
                                    🚒 Móvil 31
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Camión cisterna proveniente de Córdoba con capacidad de 10.000 litros.
                                </p>
                            </div>

                        </div>
                    </Link>

                </div>
            </section>

            {/* FORESTALES */}
            <section>
                <h2 className="text-2xl font-bold mb-4">
                    🟠 Forestales
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-6 text-gray-500">
                    Próximamente...
                </div>
            </section>

        </main>
    );
}