import Image from "next/image";

export default function AcademiaPage() {
    return (
        <main className="max-w-6xl mx-auto p-8">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-red-700 mb-2">
                    📚 Academia
                </h1>

                <p className="text-lg text-gray-600">
                    Plataforma de capacitación para aspirantes y bomberos voluntarios.
                </p>
            </div>

            {/* Instructor + Objetivos */}
            <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col lg:flex-row items-center gap-8 mb-10">

                {/* Instructor */}
                <div className="flex flex-col md:flex-row items-center gap-6 flex-1">

                    <Image
                        src="/imagenes/estudien.jpeg"
                        alt="Instructor Academia"
                        width={140}
                        height={140}
                        className="rounded-full object-cover border-4 border-red-700"
                    />

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Instructor a cargo
                        </h2>

                        <p className="text-red-700 font-medium mt-1">
                            El minium mayor
                        </p>

                        <p className="text-gray-600 mt-2">
                            Su villana favorita la bombero estrella.
                        </p>
                    </div>

                </div>

                {/* Objetivos */}
                <div className="bg-red-700 text-white rounded-xl p-6 w-full lg:w-auto">

                    <h2 className="text-2xl font-bold mb-4">
                        Objetivos de la Academia
                    </h2>

                    <ul className="space-y-2">
                        <li>✅ Formación integral de aspirantes.</li>
                        <li>✅ Capacitación continua del personal activo.</li>
                        <li>✅ Entrenamiento en incendios y rescate.</li>
                        <li>✅ Promoción de valores de servicio y compromiso.</li>
                    </ul>

                </div>

            </div>

            {/* Material de estudio */}
            <section>

                <h2 className="text-3xl font-bold text-red-700 mb-6">
                    📖 Material de Estudio
                </h2>

                <div className="grid gap-6">

                    {/* Lección 1 */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            📖 Lección 1 - Origen de los Bomberos Voluntarios
                        </summary>

                        <div className="mt-4 space-y-2 text-gray-700">

                            <p>
                                <strong>1.</strong> ¿Lugar y fecha de creación del primer cuartel?
                            </p>

                            <p className="ml-4">
                                ➜ 2 de junio de 1884, en el barrio de La Boca, Provincia de Buenos Aires.
                            </p>

                            <p>
                                <strong>2.</strong> Nombre alguno de sus integrantes.
                            </p>

                            <p className="ml-4">
                                ➜ Tomás Liberti, Oreste Liberti, Atilio Liberti y Lázaro Paglietto.
                            </p>

                            <p>
                                <strong>3.</strong> Fecha y lugar de su bautismo de fuego.
                            </p>

                            <p className="ml-4">
                                ➜ 14 de noviembre de 1885, en Barracas al Sud, durante el incendio de una fábrica de velas.
                            </p>

                            <p>
                                <strong>4.</strong> ¿Quién fue su primer presidente?
                            </p>

                            <p className="ml-4">
                                ➜ Tomás Liberti.
                            </p>

                            <p>
                                <strong>5.</strong> ¿Quién fue su primer jefe del cuerpo activo?
                            </p>

                            <p className="ml-4">
                                ➜ Oreste Liberti.
                            </p>

                        </div>
                    </details>
                    {/* Lección 2 */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            📖 Lección 2 - Historia de Nuestro Cuartel
                        </summary>

                        <div className="mt-4 space-y-2 text-gray-700">

                            <p><strong>1.</strong> ¿Fecha de creación de nuestro cuartel?</p>
                            <p className="ml-4">➜ 16 de septiembre de 1991.</p>

                            <p><strong>2.</strong> ¿Quién fue el primer presidente?</p>
                            <p className="ml-4">➜ Dr. Rodolfo Gabiud.</p>

                            <p><strong>3.</strong> ¿Quién fue el primer jefe?</p>
                            <p className="ml-4">➜ Oficial Principal Eduardo Gorroño.</p>

                        </div>
                    </details>

                </div>

            </section>

        </main>
    );
}