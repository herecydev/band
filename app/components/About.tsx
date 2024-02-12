import QuoteLeft from "~/icons/quoteLeft";
import QuoteRight from "~/icons/quoteRight";
import lead from "~/images/lead.jpg";
import bass from "~/images/bass.jpg";
import drummer from "~/images/drummer.jpg";
import guitar from "~/images/guitar.jpg";
import vocals from "~/images/vocals.jpg";

export const About = () => (
  <>
    <section id="about" className="my-14 md:my-20 mx-12">
      <div className="mx-auto max-w-2xl flex gap-1">
        <div className="self-start">
          <QuoteLeft />
        </div>
        <p className="text-lg text-center">
          Born of frustration, Kirky and The Sunflowers are a band of equals
          bringing a mix of rock/pop/indie/britpop. Creating original Indie-Rock
          that offers the listener a mix of emotional ballads to protest songs
          and everything between!
        </p>
        <div className="self-end">
          <QuoteRight />
        </div>
      </div>
    </section>
    <section className="flex justify-center flex-wrap gap-16">
      <BandMember
        src={lead}
        name="“Kirky” - Jeff Kirkham"
        role="Vocals and guitar"
        influence="There was always radio playing in our house. I grew up with the Beatles! My first instrument was trumpet, playing everything from classical to big band and jazz for five years. Moved over to Guitar much later in life. Influences range from southern rock (Black Crowes and Gov't Mule) to brit rock (Paul Weller). Mostly play fender, telecaster and vox AC 15 amp."
      />
      <BandMember
        src={bass}
        name="“Big man” - Ant Nash"
        role="Bass Guitar and BBQ"
        influence="I love all kinds of music - too many genres to list. Early bass playing influences include Cliff Burton, Flea, Jon Entwistle, John Paul Jones, Jaco Pastorius and Marcus Miller. Whenever I listen to good musicians play any genre it gives me ideas and inspiration. I play a Fender Jazz American Deluxe strung with DR Black Beauties."
      />
      <BandMember
        src={guitar}
        name="“Dutch” - Dave Ansdell"
        role="Lead Guitar and backing vocals"
        influence="As a youngster I was surrounded by the timeless hits of queen and iconic playing style of Brian May. From this, a fascination was born. As a child I would at the back of the the Argos catalogue hoping to get a guitar, but it was much later that I started to play. A cheap guitar from an old school teacher was enough to get me playing.. learning to play completely by ear through the iconic sounds of Oasis. I have been in various bands over the years. I listen to anything from 'War on Drugs' to 'Lana Del Ray' I play a Les Paul, ES-355 and vox AC15 and 'some might say' success is defined by pedals."
      />
      <BandMember
        src={drummer}
        name="“Sticks”- Graham Curtis"
        role="Drumkit"
        influence="Grew up listening to Led Zeppelin, Little Feat and Steely Dan so John Bonham, Richie Hayward and Steve Gadd a big influence. Now mostly listen to new music, particularly phycadelica, dream pop and modern jazz. Plays Gretsch Broadkaster Kit, Ludwig Supraphonic snare and a, mix Sabian AAX /HHX, Zildjian K Cymbals."
      />
      <BandMember
        src={vocals}
        name="“Miss Amy” - Amy Kirkham"
        role="Backing vocals and percussion"
        influence="I've always described myself as a creative person, growing up I was musically influenced by my Dad and Grandad. I often enjoyed singing along to Celine Dion in my bedroom (when no one else was around) but never had the confidence to sing beyond this! I've had a go at playing a few instruments and have been part of a choir. Growing in confidence, I joined the band as a backing vocalist adding harmonies, shaking the tambourine and adding a few dance moves."
      />
    </section>
  </>
);

const BandMember = ({
  src,
  name,
  role,
  influence,
}: {
  src: string;
  name: string;
  role: string;
  influence?: string;
}) => (
  <div className="flex flex-col items-center max-w-2xl px-6">
    <img src={src} className="rounded-full object-cover object-top w-60 h-60" />
    <h1 className="text-lg mt-4">{name}</h1>
    <p className="font-light">{role}</p>
    <p className="mt-4 text-center">{influence}</p>
  </div>
);
