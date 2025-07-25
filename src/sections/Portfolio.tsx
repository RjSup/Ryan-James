import Cards from './Cards';

export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full h-screen flex flex-col justify-start items-center p-6 snap-start">
      <h1 className="text-3xl font-bold text-gray-800">Projects</h1>
      <Cards />
    </div>
  );
}