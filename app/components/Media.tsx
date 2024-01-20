import Spotify from "~/icons/spotify";
import Youtube from "~/icons/youtube";

export const Media = () => (
  <section id="media" className="my-6 mx-4">
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
