import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-4xl text-center">
      <h1 className="text-wrap text-5xl font-black tracking-tight text-white lg:text-7xl">
        Not Found
      </h1>
      <p className="mb-12 mt-2 text-lg font-medium text-muted-foreground">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="transform text-xl font-medium text-blue-500 transition hover:text-blue-400"
      >
        Return
      </Link>
    </section>
  );
}
