import { Layout } from "@/components/layout";
import { TestimonialCard } from "@/components/testimonial-card";
import portraitDani from "@/assets/images/portrait-dani.jpg";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { fadeInLeft, scaleIn, withDelay } from "@/config/animations";

export default function About() {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div {...fadeInLeft}>
              <span className="text-purple-400 uppercase tracking-widest text-sm font-bold mb-4 block">
                About Me
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                Dani Díaz
              </h1>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  I am a Casting Director bridging the gap between Latin America
                  and Europe. With over 12 years of experience, I have dedicated
                  my career to finding the perfect face for every story.
                </p>
                <p>
                  My journey began in theatre production in Lima, moving quickly
                  into film and advertising casting where I discovered my true
                  passion: connecting directors with authentic human emotion.
                </p>
                <p>
                  Now based in Spain, I work internationally, bringing a unique
                  bicultural perspective to every project. I believe that casting
                  is not just about looks—it's about presence, essence, and the
                  truth an actor brings to the screen.
                </p>
              </div>
            </motion.div>

            <motion.div className="relative" {...withDelay(scaleIn, 0.2)}>
              <div className="aspect-[3/4] bg-white/5 relative z-10 overflow-hidden">
                <img
                  src={portraitDani}
                  alt="Dani Díaz"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-purple-500/30 z-0" />
            </motion.div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-white/5 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-serif text-white mb-6">
                Work Philosophy
              </h2>
              <p className="text-gray-400 text-lg">
                I believe in a safe, collaborative, and human-centered casting
                process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Human Approach",
                  desc: "Every actor is treated with dignity and respect. The audition room is a safe space for vulnerability and creativity.",
                },
                {
                  title: "Authenticity First",
                  desc: "I look beyond the headshot. I search for the unique spark and real life experience that brings characters to life.",
                },
                {
                  title: "Diversity as Nature",
                  desc: "Inclusion isn't a quota—it's a reflection of the real world. I actively seek out underrepresented voices and faces.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-black/40 p-8 border border-white/5 hover:border-purple-500/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h3 className="text-xl font-serif text-purple-400 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-4xl font-serif text-white mb-12 text-center">
            What Directors Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
