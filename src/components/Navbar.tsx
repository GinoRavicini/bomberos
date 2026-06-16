import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-red-700 text-white shadow">
      <div className="container mx-auto px-6 py-4 flex gap-6">
        <Link href="/">Inicio</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/flota">Flota</Link>
        <Link href="/academia">Academia</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  );
}