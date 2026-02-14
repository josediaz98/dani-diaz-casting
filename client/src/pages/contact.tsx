import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Clapperboard, MapPin, Mail, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useMemo, useState } from "react";
import { fadeInLeft, fadeInRight, withDelay } from "@/config/animations";
import {
  SOCIAL_URLS,
  CONTACT_INFO,
  API_ENDPOINTS,
  EXTERNAL_LINKS,
} from "@/config/constants";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { message: t("contact.validation.nameRequired") }),
        email: z.string().email({ message: t("contact.validation.invalidEmail") }),
        company: z.string().optional(),
        projectType: z.string({ required_error: t("contact.validation.selectProjectType") }),
        message: z
          .string()
          .min(10, { message: t("contact.validation.messageMinLength") }),
      }),
    [t]
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch(API_ENDPOINTS.contact, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: t("contact.toast.successTitle"),
          description: data.message,
        });
        form.reset();
      } else {
        toast({
          title: t("contact.toast.errorTitle"),
          description: data.message || t("contact.toast.errorMessage"),
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: t("contact.toast.errorTitle"),
        description: t("contact.toast.errorMessage"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Layout>
      <div className="pt-24 min-h-screen flex flex-col">
        <section className="container mx-auto px-6 py-12 flex-grow">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column: Info */}
            <motion.div {...fadeInLeft}>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
                {t("contact.title")}
              </h1>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                {t("contact.description")}
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">{t("contact.location")}</h3>
                    <p className="text-gray-400">{CONTACT_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">{t("contact.languages")}</h3>
                    <p className="text-gray-400">
                      {CONTACT_INFO.languages.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-white font-serif text-xl">{t("contact.email")}</h3>
                    <p className="text-gray-400">{CONTACT_INFO.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <a
                  href={SOCIAL_URLS.instagram}
                  className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href={SOCIAL_URLS.linkedin}
                  className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={SOCIAL_URLS.imdb}
                  className="p-3 bg-white/5 rounded-none border border-white/10 hover:border-purple-400 text-white hover:text-purple-400 transition-all hover:-translate-y-1"
                >
                  <Clapperboard className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              {...withDelay(fadeInRight, 0.2)}
              className="bg-white/5 p-8 border border-white/10"
            >
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">
                          {t("contact.form.name")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.namePlaceholder")}
                            {...field}
                            className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none"
                          />
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
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">
                          {t("contact.form.email")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.emailPlaceholder")}
                            {...field}
                            className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">
                          {t("contact.form.company")}{" "}
                          <span className="text-gray-600">({t("contact.form.optional")})</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.companyPlaceholder")}
                            {...field}
                            className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none"
                          />
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
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">
                          {t("contact.form.projectType")}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-black/50 border-white/10 focus:border-purple-400 text-white h-12 rounded-none">
                              <SelectValue placeholder={t("contact.form.selectType")} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-black border-white/10 text-white rounded-none">
                            <SelectItem value="fiction">
                              {t("contact.form.fiction")}
                            </SelectItem>
                            <SelectItem value="advertising">
                              {t("contact.form.advertising")}
                            </SelectItem>
                            <SelectItem value="music-video">
                              {t("contact.form.musicVideo")}
                            </SelectItem>
                            <SelectItem value="other">{t("contact.form.other")}</SelectItem>
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
                        <FormLabel className="text-gray-400 uppercase text-xs tracking-widest">
                          {t("contact.form.message")}
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("contact.form.messagePlaceholder")}
                            {...field}
                            className="bg-black/50 border-white/10 focus:border-purple-400 text-white min-h-[150px] rounded-none resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white uppercase tracking-widest h-14 rounded-none text-sm font-semibold transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>

        {/* Talent Section */}
        <section className="bg-gradient-to-r from-purple-900/30 to-black py-20 border-t border-white/5 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif text-white mb-4">{t("contact.forTalent.title")}</h2>
            <p className="text-gray-400 mb-8">
              {t("contact.forTalent.description")}
            </p>
            <a
              href={EXTERNAL_LINKS.talentPool}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500 hover:text-white uppercase tracking-widest px-8 h-12 rounded-none"
              >
                {t("contact.forTalent.button")}
              </Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
