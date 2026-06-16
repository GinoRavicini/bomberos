"use client";

import { inventarioMovil31 } from "@/data/movil31";
import Image from "next/image";
import { useState } from "react";

export default function Movil31Page() {
    const [compartimiento, setCompartimiento] = useState("");

    return (
        <main className="max-w-7xl mx-auto p-8">

            <h1 className="text-4xl font-bold text-red-700 mb-2">
                🚒 Móvil 31
            </h1>

            <p className="text-lg mb-8">
                Camión cisterna de abastecimiento.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Foto */}
                <div className="lg:col-span-2">
                    <div className="relative overflow-hidden rounded-xl shadow-lg border bg-white">

                        <Image
                            src="/imagenes/movil31.png"
                            alt="Móvil 31"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />

                    </div>
                </div>

                {/* Panel lateral */}
                <div className="bg-white rounded-xl shadow p-6 text-black">

                    <h2 className="text-2xl font-semibold mb-4">
                        Datos generales
                    </h2>

                    <ul className="space-y-3">
                        <li>🚒 Tipo: Camión cisterna</li>
                        <li>🌍 Origen: Córdoba</li>
                        <li>💧 Capacidad: 10.000 litros</li>
                        <li>🚰 Función: Abastecimiento y apoyo operativo</li>
                    </ul>

                    <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-700 mb-2">
                            💧 Capacidad de abastecimiento
                        </h4>

                        <p>
                            Este móvil posee una capacidad de carga de
                            10.000 litros de agua, siendo fundamental para
                            el abastecimiento de unidades durante incendios
                            de gran magnitud.
                        </p>
                    </div>

                    <hr className="my-6" />

                    <h3 className="font-semibold text-lg mb-3">
                        Compartimientos
                    </h3>

                    <div className="space-y-2 mb-6">

                        {Object.keys(inventarioMovil31).map((nombre) => (
                            <button
                                key={nombre}
                                onClick={() => setCompartimiento(nombre)}
                                className={`block w-full text-left p-2 rounded transition ${
                                    compartimiento === nombre
                                        ? "bg-red-600 text-white"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {nombre}
                            </button>
                        ))}

                    </div>

                    <hr className="my-6" />

                    <h3 className="font-semibold text-lg mb-2">
                        Equipamiento de:
                    </h3>

                    {compartimiento === "" ? (
                        <p className="text-gray-500">
                            Seleccioná un compartimiento.
                        </p>
                    ) : (
                        <div>

                            <h4 className="font-semibold mb-2">
                                {compartimiento}
                            </h4>

                            <ul className="list-disc ml-5 space-y-1">
                                {inventarioMovil31[
                                    compartimiento as keyof typeof inventarioMovil31
                                ]?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                    )}

                </div>

            </div>

        </main>
    );
}