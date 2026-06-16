import Link from "next/link";

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

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* Aspirantes */}
                <Link href="/academia/aspirantes">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
                        
                        <h2 className="text-2xl font-semibold mb-3 text-red-700">
                            👨‍🚒 Aspirantes
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Material básico para formación inicial y primeros conocimientos operativos.
                        </p>

                        <span className="text-sm font-medium text-red-600">
                            Ingresar →
                        </span>
                    </div>
                </Link>

                {/* Capacitación */}
                <Link href="/academia/capacitacion">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
                        
                        <h2 className="text-2xl font-semibold mb-3 text-red-700">
                            🚒 Capacitación
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Procedimientos, entrenamientos operativos y actualización constante.
                        </p>

                        <span className="text-sm font-medium text-red-600">
                            Ingresar →
                        </span>
                    </div>
                </Link>

                {/* Documentación */}
                <Link href="/academia/documentacion">
                    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">
                        
                        <h2 className="text-2xl font-semibold mb-3 text-red-700">
                            📄 Documentación
                        </h2>

                        <p className="text-gray-600 mb-4">
                            Reglamentos, manuales y material institucional oficial.
                        </p>

                        <span className="text-sm font-medium text-red-600">
                            Ingresar →
                        </span>
                    </div>
                </Link>

            </div>
        </main>
    );
}