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
                            El minium
                        </p>

                        <p className="text-gray-600 mt-2">
                            Su villana favorita es la bombero estrella.
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

                    {/* Lecciones */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            📖 Lecciones
                        </summary>


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

                    </details>

                    {/* Leyes */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            ⚖️ Leyes y Reglamentos
                        </summary>

                        <div className="mt-4 space-y-3 text-gray-700">

                            <p>
                                📄 Ley Nacional N° 25.054
                            </p>

                            <p>
                                📄 Ley Provincial de Bomberos Voluntarios
                            </p>

                            <p>
                                📄 Reglamento General de Bomberos Voluntarios
                            </p>

                            <p>
                                📄 Estatuto de la Asociación
                            </p>

                        </div>
                    </details>

                    {/* Organización */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🎖️ Organización Institucional
                        </summary>

                        <div className="mt-4 space-y-3 text-gray-700">

                            <p>🏛️ Consejo Directivo</p>

                            <p>🚒 Federaciones Provinciales</p>

                            <p>👨‍🚒 cuartel</p>

                        </div>
                    </details>

                    {/* Material y herramientas */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🧰 Herramientas de Forzamiento
                        </summary>

                        <div className="mt-4 space-y-6 text-gray-700">

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔥 Halligan
                                </h3>

                                <p>
                                    Herramienta multipropósito utilizada para forzar
                                    puertas, ventanas y accesos cerrados.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 3 → Baulera 1 derecha
                                    <br />
                                    📍 Móvil 4 → Baulera 1 superior derecha
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔨 Mazo
                                </h3>

                                <p>
                                    Utilizado junto al Halligan para tareas de forzamiento
                                    e ingreso.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 4 → Baulera 1 superior derecha
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🪓 Pulaski
                                </h3>

                                <p>
                                    Herramienta forestal compuesta por hacha y azada.
                                    Muy utilizada en incendios de vegetación.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 3 → Baulera 1 derecha
                                    <br />
                                    📍 Móvil 4 → Baulera 2 superior derecha
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    ⛏️ Barreta
                                </h3>

                                <p>
                                    Herramienta utilizada para palanca, remoción de
                                    obstáculos y apertura de accesos.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 3 → Baulera 1 derecha
                                    <br />
                                    📍 Móvil 4 → Baulera 2 superior derecha
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🪝 Bichero
                                </h3>

                                <p>
                                    Utilizado para remover cielorrasos, chapas,
                                    materiales colapsados y realizar inspecciones.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 3 → Baulera 1 derecha
                                    <br />
                                    📍 Móvil 4 → Baulera 2 superior derecha
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    ✂️ Corta Pernos
                                </h3>

                                <p>
                                    Herramienta destinada al corte de cadenas,
                                    candados y elementos metálicos.
                                </p>

                                <p className="mt-2 text-sm text-gray-500">
                                    📍 Móvil 4 → Baulera 2 superior derecha
                                    <br />
                                    📍 Móvil 4 → Baulera 3 derecha
                                </p>
                            </div>

                        </div>
                    </details>

                    {/* Mangueras */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🧯 Mangas
                        </summary>

                        <div className="mt-4 space-y-6 text-gray-700">

                            <div>
                                <h3 className="font-bold text-lg">💧 Manga de 25 mm</h3>

                                <p>
                                    Utilizada principalmente para ataque rápido y trabajos de menor caudal.
                                    Es liviana, fácil de maniobrar y permite un desplazamiento rápido.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">💧 Manga de 38 mm</h3>

                                <p>
                                    Muy utilizada en líneas de ataque. Ofrece un buen equilibrio entre
                                    caudal de agua y facilidad de manejo.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">💧 Manga de 45 mm</h3>

                                <p>
                                    Permite transportar un mayor volumen de agua y suele utilizarse
                                    para alimentar líneas de ataque o abastecer otros equipos.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">💧 Manga de 63 mm</h3>

                                <p>
                                    Utilizada principalmente para abastecimiento y alimentación de
                                    autobombas debido a su gran capacidad de transporte de agua.
                                </p>
                            </div>

                        </div>
                    </details>

                    {/* Lanzas */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🚿 Lanzas y Chorros
                        </summary>

                        <div className="mt-4 space-y-6 text-gray-700">

                            <div>
                                <h3 className="font-bold text-lg">
                                    🚿 Chorro Pleno
                                </h3>

                                <p>
                                    Produce una columna compacta de agua.
                                    Posee mayor alcance y capacidad de penetración.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🌧️ Chorro de Lluvia
                                </h3>

                                <p>
                                    Genera gotas de mayor tamaño distribuidas en forma de abanico.
                                    Permite una cobertura más amplia.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    ☁️ Chorro de Niebla
                                </h3>

                                <p>
                                    Produce gotas muy pequeñas que absorben gran cantidad de calor.
                                    Es ideal para refrigeración y protección del personal.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔥 Lanza Viper
                                </h3>

                                <p>
                                    Permite regular distintos patrones de chorro según la necesidad
                                    operativa.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔥 Lanza Cónica
                                </h3>

                                <p>
                                    Utilizada habitualmente en incendios estructurales para generar
                                    diferentes tipos de descarga de agua.
                                </p>
                            </div>

                        </div>
                    </details>
                    {/* Acoples */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🔩 Acoples y Conexiones
                        </summary>

                        <div className="mt-4 space-y-6 text-gray-700">

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔵 Acople Macho
                                </h3>

                                <p>
                                    Posee las uñas o trabas externas que permiten su unión
                                    con un acople hembra.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔴 Acople Hembra
                                </h3>

                                <p>
                                    Recibe al acople macho y permite realizar la conexión
                                    entre mangas, lanzas y otros accesorios.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    ↔️ Reducciones
                                </h3>

                                <p>
                                    Permiten unir elementos de diferentes diámetros.
                                    Son indispensables para adaptar líneas de agua.
                                </p>

                                <ul className="list-disc ml-6 mt-2">
                                    <li>63 → 45 mm</li>
                                    <li>45 → 38 mm</li>
                                    <li>38 → 25 mm</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔀 Divisores
                                </h3>

                                <p>
                                    Permiten dividir una línea principal de agua en
                                    dos o más líneas secundarias.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🚿 Boca de Expulsión
                                </h3>

                                <p>
                                    Salida de agua proveniente de la bomba de la autobomba.
                                    Desde aquí se alimentan las líneas de ataque.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    💧 Boca de Eyección
                                </h3>

                                <p>
                                    Conexión utilizada para el abastecimiento o transferencia
                                    de agua según la configuración operativa del móvil.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-lg">
                                    🔧 Llave de Unión
                                </h3>

                                <p>
                                    Herramienta utilizada para ajustar o desacoplar mangas,
                                    lanzas y conexiones que se encuentren bajo presión o
                                    muy ajustadas.
                                </p>
                            </div>

                        </div>
                    </details>

                    {/* ERA */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            🫁 Equipos ERA
                        </summary>

                        <div className="mt-4 space-y-3 text-gray-700">

                            <p>🫁 Componentes del ERA</p>

                            <p>🫁 Colocación correcta</p>

                            <p>🫁 Verificaciones previas</p>

                            <p>🫁 Seguridad operativa</p>

                        </div>
                    </details>

                    {/* Exámenes */}
                    <details className="bg-white rounded-xl shadow-md p-6">
                        <summary className="text-2xl font-bold text-red-700 cursor-pointer">
                            📝 Resúmenes para Examen
                        </summary>

                        <div className="mt-4 space-y-3 text-gray-700">

                            <p>📚 Historia</p>

                            <p>📚 Organización Institucional</p>

                            <p>📚 Leyes</p>

                            <p>📚 Material y Equipamiento</p>

                        </div>
                    </details>

                </div>

            </section>

        </main>
    );
}