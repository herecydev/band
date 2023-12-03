import { About } from "~/components/About";

export const config = { runtime: "edge" };

export default () => (
  <>
    <div className="h-screen bg-cover bg-[url('~/images/hero.jpg')]">
      <div className="flex h-screen">
        <section className="text-yellow-300 [text-shadow:_2px_2px_3px_black] m-auto">
          <h1 className="text-3xl md:text-6xl text-center uppercase tracking-widest font-semibold">
            Kirky and The Sunflowers
          </h1>
          <nav className="mt-7 text-2xl">
            <ul className="flex justify-around">
              <li>
                <a href="#about">About</a>
              </li>
              <li>Videos</li>
              <li>Music</li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
    <About />
  </>
);
