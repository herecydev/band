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
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-balance font-extrabold max-w-[80vw]">
            <p>
              Kirky{" "}
              <span className="text-3xl md:text-4xl lg:text-7xl tracking-normal">
                and the
              </span>{" "}
            </p>
            <p>Sunflowers</p>
          </h1>
          <nav className="mt-6 md:mt-8 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <ul className="flex gap-3 sm:gap-8 justify-evenly">
              <li>
                <Link to="#about">Bio</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@kirkyandthesunflowers8266/featured">
                  Video
                </Link>
              </li>
              <li>
                <Link to="https://open.spotify.com/artist/3Tonvz09FQgxejiFMrMnbL?si=9iMY3VM-Rj6KBzrO-jcl1w">
                  Music
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/kirky.and.the.sunflowers/">
                  Photos
                </Link>
              </li>
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
    <footer className="flex justify-between m-6">
      <div>©2024 Kirky and the Sunflowers</div>
      <div>kirkyandthesunflowers@gmail.com</div>
    </footer>
  </>
);
