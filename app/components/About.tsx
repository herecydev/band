import QuoteLeft from "~/icons/quoteLeft";
import QuoteRight from "~/icons/quoteRight";
import Spotify from "~/icons/spotify";
import Youtube from "~/icons/youtube";

export const About = () => (
  <section id="about" className="my-6 mx-4">
    <div className="mx-auto max-w-2xl flex gap-1">
      <div className="self-start">
        <QuoteLeft />
      </div>
      <p className="text-lg text-center">
        Born of frustration, Kirky and The Sunflowers are a newly formed band of
        equals bringing a mix of rock/pop/indie/funk. Creating original “chilled
        Indie-Rock” that offers the listener a mix of emotional ballads to
        protest songs and everything between!
      </p>
      <div className="self-end">
        <QuoteRight />
      </div>
    </div>
    <div className="flex gap-6 mt-6 mx-auto max-w-fit">
      <a href="https://open.spotify.com/artist/3Tonvz09FQgxejiFMrMnbL?si=9iMY3VM-Rj6KBzrO-jcl1w">
        <Spotify />
      </a>
      <a href="https://www.youtube.com/@kirkyandthesunflowers8266/featured">
        <Youtube />
      </a>
    </div>
  </section>
);
