import Link from "next/link";
import Image from "next/image";

type Vehiculo = {
    numero: number;
    nombre: string;
    descripcion: string;
    imagen?: string;
    ruta?: string;
};

type Categoria = {
    titulo: string;
    emoji: string;
    vehiculos: Vehiculo[];
};

const categorias: Categoria[] = [
    {
        titulo: "Ataque Rápido",
        emoji: "🟡",
        vehiculos: [
            {
                numero: 3,
                nombre: "Móvil 3",
                descripcion: "Autobomba de ataque rápido.",
                imagen: "/imagenes/movil3tarj.png",
                ruta: "/flota/movil-3",
            },
            {
                numero: 4,
                nombre: "Móvil 4",
                descripcion: "Autobomba de ataque rápido.",
                imagen: "/imagenes/movil4tarj.png",
                ruta: "/flota/movil-4",
            },
        ],
    },

    {
        titulo: "Estructurales",
        emoji: "🟢",
        vehiculos: [],
    },

    {
        titulo: "Logística",
        emoji: "🔵",
        vehiculos: [
            {
                numero: 23,
                nombre: "Móvil 23",
                descripcion:
                    "Camión cisterna de origen francés con capacidad de 13.000 litros.",
                imagen: "/imagenes/movil23tarj.png",
                ruta: "/flota/movil-23",
            },
            {
                numero: 31,
                nombre: "Móvil 31",
                descripcion:
                    "Camión cisterna proveniente de Córdoba con capacidad de 10.000 litros.",
                imagen: "/imagenes/movil31tarj.png",
                ruta: "/flota/movil-31",
            },
        ],
    },

    {
        titulo: "Forestales",
        emoji: "🟠",
        vehiculos: [
            {
                numero: 22,
                nombre: "Móvil 22",
                descripcion:
                    "Motobomba forestal con capacidad de 1.500 litros + 200 litros de rociadores.",
                imagen: "/imagenes/movil22.jpeg",
                ruta: "/flota/movil-22",
            },
            {
                numero: 30,
                nombre: "Móvil 30",
                descripcion:
                    "Autobomba Forestal Pesado de salida rápida con capacidad de 3.000 litros.",
                imagen: "/imagenes/movil30.jpeg",
                ruta: "/flota/movil-30",
            },
        ],
    },
];

function VehiculoCard({ vehiculo }: { vehiculo: Vehiculo }) {
    const contenido = (
        <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition
            ${
                vehiculo.ruta
                    ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                    : ""
            }`}
        >
            {vehiculo.imagen ? (
                <Image
                    src={vehiculo.imagen}
                    alt={vehiculo.nombre}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                />
            ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-lg">
                        Imagen próximamente
                    </span>
                </div>
            )}

            <div className="p-6 text-black">
                <h3 className="text-2xl font-bold">
                    🚒 {vehiculo.nombre}
                </h3>

                <p className="mt-2 text-gray-600">
                    {vehiculo.descripcion}
                </p>

                {vehiculo.ruta && (
                    <div className="mt-4">
                        <span className="text-red-700 font-semibold">
                            Ver móvil →
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    if (vehiculo.ruta) {
        return <Link href={vehiculo.ruta}>{contenido}</Link>;
    }

    return contenido;
}

export default function FlotaPage() {
    return (
        <main className="max-w-6xl mx-auto p-8">

            {/* ENCABEZADO */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-red-700">
                    🚒 Flota de Vehículos
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl">
                    Conocé los vehículos que forman parte de nuestra flota,
                    sus características y el equipamiento disponible.
                </p>
            </div>

            {/* CATEGORÍAS */}
            {categorias.map((categoria) => (
                <section
                    key={categoria.titulo}
                    className="mb-10"
                >
                    <h2 className="text-2xl font-bold mb-4">
                        {categoria.emoji} {categoria.titulo}
                    </h2>

                    {categoria.vehiculos.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-6">
                            {categoria.vehiculos.map((vehiculo) => (
                                <VehiculoCard
                                    key={vehiculo.numero}
                                    vehiculo={vehiculo}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg p-6 text-gray-500">
                            Próximamente...
                        </div>
                    )}
                </section>
            ))}

        </main>
    );
}