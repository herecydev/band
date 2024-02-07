import QuoteLeft from "~/icons/quoteLeft";
import QuoteRight from "~/icons/quoteRight";
import lead from "~/images/lead.jpg";
import bass from "~/images/bass.jpg";
import drummer from "~/images/drummer.jpg";
import guitar from "~/images/guitar.jpg";
import vocals from "~/images/vocals.jpg";

export const About = () => (
  <>
    <section id="about" className="my-14 md:my-20 mx-8">
      <div className="mx-auto max-w-2xl flex gap-1">
        <div className="self-start">
          <QuoteLeft />
        </div>
        <p className="text-lg text-center">
          Born of frustration, Kirky and The Sunflowers are a band of equals
          bringing a mix of rock/pop/indie/funk. Creating original Indie-Rock
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
        description="Vocals and guitar"
      />
      <BandMember
        src={bass}
        name="“Big man” - Ant Nash"
        description="Bass Guitar and BBQ"
      />
      <BandMember
        src={guitar}
        name="“Dutch” - Dave Ansdell"
        description="Lead Guitar and backing vocals"
      />
      <BandMember
        src={drummer}
        name="“Sticks”- Graham Curtis"
        description="Drumkit"
      />
      <BandMember
        src={vocals}
        name="“Miss Amy” - Amy Kirkham"
        description="Backing vocals and percussion"
      />
    </section>
  </>
);

const BandMember = ({
  src,
  name,
  description,
}: {
  src: string;
  name: string;
  description: string;
}) => (
  <div className="flex flex-col items-center">
    <img
      src={src}
      className="rounded-full object-cover object-top w-60 h-60 hover:scale-105"
    />
    <h1 className="text-lg mt-6">{name}</h1>
    <p>{description}</p>
  </div>
);
