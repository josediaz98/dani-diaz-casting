import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-8xl md:text-9xl font-serif font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            {t("notFound.message")}
          </p>
          <Link href="/">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white uppercase tracking-widest h-12 px-8 rounded-none"
            >
              {t("work.goHome")}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
