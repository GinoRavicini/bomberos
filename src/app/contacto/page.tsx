export default function ContactoPage() {
    return (
        <main className="max-w-6xl mx-auto p-8">

            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-red-700 mb-2">
                    📞 Contacto
                </h1>

                <p className="text-lg text-gray-600">
                    Información de contacto y atención de Bomberos Voluntarios.
                </p>
            </div>

            {/* Emergencias */}
            <section className="bg-red-700 text-white rounded-xl p-8 mb-10 text-center shadow-xl">
                <h2 className="text-3xl font-bold mb-3">
                    🚨 Emergencias
                </h2>

                <p className="text-xl">
                    Ante una emergencia comuníquese inmediatamente.
                </p>

                <p className="text-5xl font-bold mt-4">
                    100
                </p>
            </section>

            {/* Información */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-3">
                        📍 Dirección
                    </h3>

                    <p className="text-gray-700">
                        Av. Ejemplo 123
                    </p>

                    <p className="text-gray-700">
                        Concordia, Entre Ríos
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-3">
                        ☎️ Teléfono
                    </h3>

                    <p className="text-gray-700">
                        (0345) 123-4567
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-3">
                        ✉️ Correo Electrónico
                    </h3>

                    <p className="text-gray-700 break-all">
                        contacto@bomberos.org
                    </p>
                </div>

            </div>

            {/* Sumate */}
            <section className="bg-white rounded-xl shadow-md p-8 mb-10">

                <h2 className="text-2xl font-bold text-red-700 mb-4">
                    🤝 Sumate a la Institución
                </h2>

                <p className="text-gray-700">
                    Si deseas formar parte del cuerpo activo, colaborar con
                    nuestra institución o recibir información sobre futuras
                    capacitaciones, no dudes en comunicarte con nosotros.
                </p>

            </section>

            {/* Horarios */}
            <section className="bg-white rounded-xl shadow-md p-8">

                <h2 className="text-2xl font-bold text-red-700 mb-4">
                    🕒 Horarios de Atención
                </h2>

                <ul className="space-y-2 text-gray-700">
                    <li>Lunes a Viernes: 08:00 hs - 20:00 hs</li>
                    <li>Sábados: 09:00 hs - 13:00 hs</li>
                    <li>Guardia de Emergencias: 24 horas</li>
                </ul>

            </section>

        </main>
    );
}