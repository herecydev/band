import Instagram from "~/icons/instagram";
import Spotify from "~/icons/spotify";
import Youtube from "~/icons/youtube";

export const Media = () => (
  <section id="media" className="my-10 md:my-20">
    <iframe
      className="aspect-video w-5/6 md:w-3/4 max-w-5xl mx-auto"
      src="https://www.youtube-nocookie.com/embed/CEEdH4ethIE?si=vjyEsNdqRm3XjHrQ?autoplay=0&showinfo=0&controls=0"
      title="Kirky and The Sunflowers - Waiting"
      allowFullScreen
    ></iframe>
    <div className="flex gap-10 mt-8 md:mt-16 mx-auto max-w-fit">
      <a href="https://open.spotify.com/artist/3Tonvz09FQgxejiFMrMnbL?si=9iMY3VM-Rj6KBzrO-jcl1w">
        <Spotify />
      </a>
      <a href="https://www.instagram.com/kirky.and.the.sunflowers/">
        <Instagram />
      </a>
      <a href="https://www.youtube.com/@kirkyandthesunflowers8266/featured">
        <Youtube />
      </a>
    </div>
  </section>
);
