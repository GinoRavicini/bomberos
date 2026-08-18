"use client";

import { inventarioMovil30 } from "@/data/movil30";
import Image from "next/image";
import { useState } from "react";

export default function Movil30Page() {
    const [compartimiento, setCompartimiento] = useState("");

    return (
        <main className="max-w-7xl mx-auto p-8">

            {/* ENCABEZADO */}
            <h1 className="text-4xl font-bold text-red-700 mb-2">
                🚒 Móvil 30
            </h1>

            <p className="text-lg mb-8">
                Autobomba Forestal Pesado de salida rápida.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* FOTO */}
                <div className="lg:col-span-2">
                    <div className="relative overflow-hidden rounded-xl shadow-lg border bg-white">

                        <Image
                            src="/imagenes/movil30.jpeg"
                            alt="Móvil 30"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />

                    </div>
                </div>

                {/* PANEL LATERAL */}
                <div className="bg-white rounded-xl shadow p-6 text-black">

                    <h2 className="text-2xl font-semibold mb-4">
                        Datos generales
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            🚒 Tipo: Autobomba Forestal Pesado
                        </li>

                        <li>
                            🔥 Clasificación: Autobomba
                        </li>

                        <li>
                            💧 Capacidad: 3.000 litros
                        </li>

                        <li>
                            👨‍🚒 Cabina: 5 combatientes
                        </li>

                        <li>
                            👥 Dotación: 2 acompañantes + chofer
                        </li>

                    </ul>

                    {/* INFORMACIÓN FORESTAL */}
                    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">

                        <h4 className="font-semibold text-orange-700 mb-2">
                            🌲 Unidad forestal
                        </h4>

                        <p>
                            El Móvil 30 es una autobomba forestal pesada de
                            salida rápida, destinada principalmente a
                            intervenciones en incendios forestales y tareas
                            de apoyo operativo.
                        </p>

                    </div>

                    <hr className="my-6" />

                    {/* MOTOBOMBA */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">

                        <h3 className="font-semibold text-lg mb-3">
                            ⛽ Motobomba
                        </h3>

                        <ul className="space-y-2">

                            <li>
                                🔧 Marca: Hyundai
                            </li>

                            <li>
                                ⚙️ Potencia: 7 HP
                            </li>

                            <li>
                                ⛽ Combustible: Nafta
                            </li>

                            <li>
                                ▶️ Arranque: Manual
                            </li>

                        </ul>

                    </div>

                    <hr className="my-6" />

                    {/* COMPARTIMIENTOS */}
                    <h3 className="font-semibold text-lg mb-3">
                        Compartimientos
                    </h3>

                    <div className="space-y-2 mb-6">

                        {Object.keys(inventarioMovil30).map((nombre) => (

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

                    {/* EQUIPAMIENTO */}
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

                                {inventarioMovil30[
                                    compartimiento as keyof typeof inventarioMovil30
                                ]?.map((item, index) => (

                                    <li key={index}>
                                        {item}
                                    </li>

                                ))}

                            </ul>

                        </div>

                    )}

                </div>

            </div>

        </main>
    );
}