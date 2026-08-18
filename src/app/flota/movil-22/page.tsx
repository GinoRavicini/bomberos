"use client";

import Image from "next/image";
import { useState } from "react";

import {
    datosMovil22,
    entradasSalidasMovil22,
    herramientasMovil22,
    equiposCombustionMovil22,
    malacateMovil22,
    mangasMovil22,
    lanzasMovil22,
    inventarioMovil22,
} from "@/data/movil22";

export default function Movil22Page() {
    const [compartimiento, setCompartimiento] = useState("");

    return (
        <main className="max-w-7xl mx-auto p-8">

            {/* ENCABEZADO */}
            <h1 className="text-4xl font-bold text-red-700 mb-2">
                🚒 Móvil 22
            </h1>

            <p className="text-lg mb-8">
                Unidad forestal equipada para incendios y operaciones de
                apoyo.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* ================================================== */}
                {/* FOTO */}
                {/* ================================================== */}

                <div className="lg:col-span-2">

                    <div className="relative overflow-hidden rounded-xl shadow-lg border bg-white">

                        <Image
                            src="/imagenes/movil22.jpeg"
                            alt="Móvil 22"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />

                    </div>

                    {/* INFORMACIÓN DE LA UNIDAD */}
                    <div className="mt-6 bg-white rounded-xl shadow-lg p-6 text-black">

                        <h2 className="text-2xl font-bold mb-4">
                            🚒 Características de la unidad
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">

                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-500">
                                    Tipo de móvil
                                </p>

                                <p className="font-semibold text-lg">
                                    {datosMovil22.tipo}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-500">
                                    Clasificación
                                </p>

                                <p className="font-semibold text-lg">
                                    {datosMovil22.clasificacion}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-500">
                                    Capacidad de agua
                                </p>

                                <p className="font-semibold text-lg">
                                    {datosMovil22.capacidadAgua}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-500">
                                    Bomba
                                </p>

                                <p className="font-semibold text-lg">
                                    {datosMovil22.bomba}
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* ================================================== */}
                {/* PANEL LATERAL */}
                {/* ================================================== */}

                <div className="bg-white rounded-xl shadow p-6 text-black">

                    <h2 className="text-2xl font-semibold mb-4">
                        Datos generales
                    </h2>

                    <ul className="space-y-3">

                        <li>
                            🚒 Tipo: {datosMovil22.tipo}
                        </li>

                        <li>
                            🔥 Clasificación: {datosMovil22.clasificacion}
                        </li>

                        <li>
                            💧 Capacidad: {datosMovil22.capacidadAgua}
                        </li>

                        <li>
                            🚰 Bomba: {datosMovil22.bomba}
                        </li>

                        <li>
                            👨‍🚒 Cabina trasera: {datosMovil22.cabinaTrasera}
                        </li>

                        <li>
                            👥 Cabina delantera: {datosMovil22.cabinaDelantera}
                        </li>

                    </ul>

                    {/* CAPACIDAD */}
                    <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">

                        <h4 className="font-semibold text-orange-700 mb-2">
                            🌲 Unidad forestal
                        </h4>

                        <p>
                            El Móvil 22 es una unidad forestal clasificada
                            como motobomba, equipada para combatir incendios
                            forestales y brindar apoyo durante operaciones
                            prolongadas.
                        </p>

                    </div>

                    <hr className="my-6" />

                    {/* ================================================== */}
                    {/* COMPARTIMIENTOS */}
                    {/* ================================================== */}

                    <h3 className="font-semibold text-lg mb-3">
                        Compartimientos
                    </h3>

                    <div className="space-y-2 mb-6">

                        {Object.keys(inventarioMovil22).map((nombre) => (

                            <button
                                key={nombre}
                                onClick={() =>
                                    setCompartimiento(nombre)
                                }
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

                                {inventarioMovil22[
                                    compartimiento as keyof typeof inventarioMovil22
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

            {/* ================================================== */}
            {/* ENTRADAS Y SALIDAS */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    🚰 Entradas y salidas
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    {entradasSalidasMovil22.map((item, index) => (

                        <div
                            key={index}
                            className="border rounded-lg p-4 hover:shadow-md transition"
                        >

                            <div className="flex justify-between gap-4">

                                <h3 className="font-semibold">
                                    {item.elemento}
                                </h3>

                                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                                    {item.cantidad}
                                </span>

                            </div>

                            {item.observaciones && (
                                <p className="text-gray-600 text-sm mt-2">
                                    {item.observaciones}
                                </p>
                            )}

                        </div>

                    ))}

                </div>

            </section>

            {/* ================================================== */}
            {/* HERRAMIENTAS Y EQUIPOS */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    🧰 Herramientas y equipos
                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-100">

                                <th className="text-left p-3 border">
                                    Herramienta
                                </th>

                                <th className="text-left p-3 border">
                                    Tipo
                                </th>

                                <th className="text-left p-3 border">
                                    Potencia
                                </th>

                                <th className="text-left p-3 border">
                                    Combustible
                                </th>

                                <th className="text-left p-3 border">
                                    Ubicación
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {herramientasMovil22.map(
                                (item, index) => (

                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50"
                                    >

                                        <td className="p-3 border font-medium">
                                            {item.herramienta}
                                        </td>

                                        <td className="p-3 border">
                                            {item.tipo}
                                        </td>

                                        <td className="p-3 border">
                                            {item.potencia}
                                        </td>

                                        <td className="p-3 border">
                                            {item.combustible}
                                        </td>

                                        <td className="p-3 border">
                                            {item.ubicacion}
                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </section>

            {/* ================================================== */}
            {/* EQUIPOS DE COMBUSTIÓN */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    ⛽ Equipos de combustión
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    {equiposCombustionMovil22.map(
                        (equipo, index) => (

                            <div
                                key={index}
                                className="border rounded-xl p-5"
                            >

                                <h3 className="text-xl font-bold mb-3">
                                    {equipo.equipo}
                                </h3>

                                <ul className="space-y-2">

                                    <li>
                                        🏷️ Marca: {equipo.marca}
                                    </li>

                                    <li>
                                        ⚙️ Potencia: {equipo.potencia}
                                    </li>

                                    <li>
                                        🔧 {equipo.caracteristicas}
                                    </li>

                                    <li>
                                        ▶️ Arranque: {equipo.arranque}
                                    </li>

                                    <li>
                                        ⛽ Combustible: {equipo.combustible}
                                    </li>

                                </ul>

                            </div>

                        )
                    )}

                </div>

            </section>

            {/* ================================================== */}
            {/* MALACATE */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    🪝 Malacate de rescate
                </h2>

                <div className="bg-gray-50 rounded-xl p-6">

                    <h3 className="text-xl font-bold mb-4">
                        {malacateMovil22.marca}{" "}
                        {malacateMovil22.modelo}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-4">

                        <div>
                            <p className="text-sm text-gray-500">
                                Ubicación
                            </p>

                            <p className="font-semibold">
                                {malacateMovil22.ubicacion}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Alimentación
                            </p>

                            <p className="font-semibold">
                                {malacateMovil22.alimentacion}
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Capacidad de arrastre
                            </p>

                            <p className="font-semibold">
                                {malacateMovil22.capacidadArrastre}
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================================================== */}
            {/* MANGAS */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    💦 Mangas
                </h2>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-100">

                                <th className="text-left p-3 border">
                                    Tipo
                                </th>

                                <th className="text-left p-3 border">
                                    Material
                                </th>

                                <th className="text-left p-3 border">
                                    Diámetro
                                </th>

                                <th className="text-left p-3 border">
                                    Observaciones
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {mangasMovil22.map(
                                (manga, index) => (

                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50"
                                    >

                                        <td className="p-3 border">
                                            {manga.tipo}
                                        </td>

                                        <td className="p-3 border">
                                            {manga.material}
                                        </td>

                                        <td className="p-3 border font-semibold">
                                            {manga.diametro}
                                        </td>

                                        <td className="p-3 border">
                                            {manga.observaciones}
                                        </td>

                                    </tr>

                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </section>

            {/* ================================================== */}
            {/* LANZAS */}
            {/* ================================================== */}

            <section className="mt-10 bg-white rounded-xl shadow-lg p-6 text-black">

                <h2 className="text-2xl font-bold mb-6">
                    🚿 Lanzas
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                    {lanzasMovil22.map(
                        (lanza, index) => (

                            <div
                                key={index}
                                className="border rounded-lg p-5"
                            >

                                <h3 className="font-bold text-lg">
                                    {lanza.tipo}
                                </h3>

                                <p className="mt-2">
                                    📏 Diámetro: {lanza.diametro}
                                </p>

                                <p>
                                    📍 {lanza.observaciones}
                                </p>

                            </div>

                        )
                    )}

                </div>

            </section>

        </main>
    );
}