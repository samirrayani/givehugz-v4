import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" className="mx-auto mb-6 opacity-20">
          <path d="M16 28s-12-7.4-12-16C4 7.6 7.6 4 12 4c2.4 0 4.4 1.2 4 3.2C15.6 5.2 17.6 4 20 4c4.4 0 8 3.6 8 8 0 8.6-12 16-12 16z" fill="#108474"/>
        </svg>
        <h1 className="font-petrona text-4xl font-bold text-deep-teal mb-4">Page not found</h1>
        <p className="text-deep-teal/40 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-teal text-white font-poppins text-sm font-semibold px-8 py-4 rounded-full shadow-lg shadow-teal/20 hover:bg-teal-light transition-all"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
