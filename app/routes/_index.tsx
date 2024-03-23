import { About } from "~/components/About";
import { Media } from "~/components/Media";
import { Link } from "~/components/Link";
import { Music } from "~/components/Music";

export const config = { runtime: "edge" };

export default () => (
  <>
    <div className="h-screen bg-cover bg-[url('~/images/hero-flowers.jpg')]">
      <div className="flex h-screen">
        <section className="text-yellow-300 [text-shadow:_2px_2px_3px_black] mx-auto mt-[8vh]">
          {/* <h1 className="text-6xl md:text-7xl lg:text-9xl text-center text-balance font-extrabold max-w-[80vw]">
            Kirky{" "}
            <span className="text-3xl md:text-4xl lg:text-7xl tracking-normal">
              and the
            </span>{" "}
            Sunflowers
          </h1> */}
          <h1 className="text-[7vw] text-center font-bold">
            Kirky and the Sunflowers
          </h1>
          <nav className="mt-5 text-[4vw] font-bold">
            <ul className="flex gap-2 justify-evenly">
              <li>
                <Link to="#about">Bio</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="#music">Music</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="#about">Photos</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="#media">Video</Link>
              </li>
              <li>•</li>
              <li>
                <Link to="#media">Contact</Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </div>
    <About />
    <Music />
    <Media />
  </>
);
