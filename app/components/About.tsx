import QuoteLeft from "~/icons/quoteLeft";
import QuoteRight from "~/icons/quoteRight";

export const About = () => (
  <section id="about" className="my-6 mx-4">
    <div className="mx-auto max-w-2xl flex gap-1">
      <div className="self-start">
        <QuoteLeft />
      </div>
      <p className="text-lg text-center">
        Born of frustration, Kirky and The Sunflowers are a band of equals
        bringing a mix of rock/pop/indie/funk. Creating original Indie-Rock that
        offers the listener a mix of emotional ballads to protest songs and
        everything between!
      </p>
      <div className="self-end">
        <QuoteRight />
      </div>
    </div>
  </section>
);
