"use client";

import { inventarioMovil4 } from "@/data/movil4";
import Image from "next/image";
import { useState } from "react";

export default function Movil4Page() {
    const [compartimiento, setCompartimiento] = useState("");

    return (
        <main className="max-w-7xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-red-700 mb-2">
                🚒 Móvil 4
            </h1>

            <p className="text-lg mb-8">
                Autobomba de ataque rápido o rápida acción.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Foto */}
                <div className="lg:col-span-2">
                    <div className="relative overflow-hidden rounded-xl shadow-lg border bg-white">

                        <Image
                            src="/imagenes/movil4.png"
                            alt="Móvil 4"
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
                        <li>🚒 Tipo: Ataque rápido</li>
                        <li>🧯 Equipamiento para rescate y extricación</li>
                        <li>🌲 Equipamiento forestal</li>
                        <li>💨 Equipos ERA</li>
                    </ul>

                    <hr className="my-6" />

                    <h3 className="font-semibold text-lg mb-3">
                        Compartimientos
                    </h3>

                    <div className="space-y-2 mb-6">

                        {Object.keys(inventarioMovil4).map((nombre) => (
                            <button
                                key={nombre}
                                onClick={() => setCompartimiento(nombre)}
                                className={`block w-full text-left p-2 rounded transition
                                    ${
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
                                {inventarioMovil4[
                                    compartimiento as keyof typeof inventarioMovil4
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