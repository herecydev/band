import Email from "~/icons/Email";
import Facebook from "~/icons/facebook";
import Instagram from "~/icons/instagram";
import Spotify from "~/icons/spotify";
import Youtube from "~/icons/youtube";

export const Media = () => (
  <section id="media" className="my-20">
    <div className="flex gap-10 mt-16 mx-auto max-w-fit">
      <a href="https://open.spotify.com/artist/3Tonvz09FQgxejiFMrMnbL?si=9iMY3VM-Rj6KBzrO-jcl1w">
        <Spotify />
      </a>
      <a href="https://www.instagram.com/kirky.and.the.sunflowers/">
        <Instagram />
      </a>
      <a href="mailto:kirkyandthesunflowers@gmail.com">
        <Email />
      </a>
      <a href="https://www.youtube.com/@kirkyandthesunflowers8266/featured">
        <Youtube />
      </a>
      <a href="https://www.facebook.com/groups/1511929872597105/">
        <Facebook />
      </a>
    </div>
  </section>
);
