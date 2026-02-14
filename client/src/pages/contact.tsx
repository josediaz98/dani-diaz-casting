import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Clapperboard, MapPin, Mail, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="pt-24 min-h-screen flex flex-col">
        <section className="container mx-auto px-6 py-12 flex-grow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Let's Work Together</h1>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Whether you're looking for the perfect cast for your next feature film, commercial, or music video, I'm here to help you find the faces that tell your story.
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">Location</h3>
                    <p className="text-gray-400">Based in Spain, working Internationally</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">Languages</h3>
                    <p className="text-gray-400">Spanish, English, Catalan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">Email</h3>
                    <p className="text-gray-400">contact@danidiazcasting.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="#" className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1">
                  <Clapperboard className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 p-8 border border-white/10"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-white/10 text-white rounded-none">
                            <SelectItem value="fiction">Fiction (Feature/Short)</SelectItem>
                            <SelectItem value="advertising">Advertising</SelectItem>
                            <SelectItem value="music-video">Music Video</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your project..." {...field} className="bg-black/50 border-white/10 focus:border-purple-400 text-white min-h-[150px] rounded-none resize-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white uppercase tracking-widest h-14 rounded-none text-sm font-semibold transition-colors">
                    Send Message
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>

        {/* Talent Section */}
        <section className="bg-gradient-to-r from-purple-900/30 to-black py-20 border-t border-white/5 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif text-white mb-4">For Talent</h2>
            <p className="text-gray-400 mb-8">Looking to be part of upcoming projects? Join our talent database.</p>
            <a href="https://docs.google.com/forms" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white uppercase tracking-widest px-8 h-12 rounded-none">
                Join My Database
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}