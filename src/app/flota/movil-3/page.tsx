"use client";

import { inventarioMovil3 } from "@/data/movil3";
import Image from "next/image";
import { useState } from "react";

export default function Movil3Page() {
    const [compartimiento, setCompartimiento] = useState("");

    return (
        <main className="max-w-7xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-red-700 mb-2">
                🚒 Móvil 3
            </h1>


            <p className="text-xl italic text-gray-600 mb-6">
                "Caballito de Batalla"
            </p>

            <p className="text-lg mb-8">
                Autobomba de ataque rápido o rápida acción.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Foto */}
                <div className="lg:col-span-2">
                    <div className="relative overflow-hidden rounded-xl shadow-lg border bg-white">

                        {/* Baulera superior derecha */}
                        <button
                            onClick={() => setCompartimiento("Baulera superior derecha")}
                            className="absolute top-[28%] right-[18%] w-20 h-20 border-4 border-blue-500 bg-blue-500/20 hover:bg-blue-500/40 z-10"
                            title="Baulera superior derecha"
                        />

                        {/* Baulera 2 derecha */}
                        <button
                            onClick={() => setCompartimiento("Baulera 2 derecha")}
                            className="absolute top-[45%] right-[10%] w-24 h-24 border-4 border-red-500 bg-red-500/20 hover:bg-red-500/40 z-10"
                            title="Baulera 2 derecha"
                        />

                        <Image
                            src="/imagenes/movil3.png"
                            alt="Móvil 3"
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
                        <li>💧 Capacidad: 1800 litros</li>
                        <li>🚿 1 Manga pre armada</li>
                        <li>🔩 2 bocas de expulsión (63 mm)</li>
                        <li>🔩 1 boca de eyección (63 mm)</li>
                        <li>👨‍🚒 Cabina: 4 atrás, 2 adelante + chofer</li>
                    </ul>

                    <hr className="my-6" />

                    <h3 className="font-semibold text-lg mb-3">
                        Compartimientos
                    </h3>

                    <div className="space-y-2 mb-6">

                        {Object.keys(inventarioMovil3).map((nombre) => (
                            <button
                                key={nombre}
                                onClick={() => setCompartimiento(nombre)}
                                className={`block w-full text-left p-2 rounded transition
                                        ${compartimiento === nombre
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
                            Seleccioná una baulera en la imagen.
                        </p>
                    ) : (
                        <div>
                            <h4 className="font-semibold mb-2">
                                {compartimiento}
                            </h4>

                            <ul className="list-disc ml-5 space-y-1">
                                {inventarioMovil3[
                                    compartimiento as keyof typeof inventarioMovil3
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