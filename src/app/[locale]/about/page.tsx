import AboutsSection from "@/components/about/AboutsSection";

// Add supported locales
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function AboutUs() {
  return (
    <main>
      <AboutsSection />
    </main>
  );
}

export default AboutUs;
