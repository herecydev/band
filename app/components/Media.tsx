import Instagram from "~/icons/instagram";
import Spotify from "~/icons/spotify";
import Youtube from "~/icons/youtube";

export const Media = () => (
  <section id="media" className="my-20">
    <div className="flex gap-14 mt-16 mx-auto max-w-fit">
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
