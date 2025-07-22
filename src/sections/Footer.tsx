export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-4 text-center text-gray-600 text-sm">
      &copy; {year} Ryan James.
    </footer>
  );
}