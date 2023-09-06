import { getLanguage } from "@/lib/getLanguage";

import ListingsFilter from "@/components/global/ListingsFilter";

import "./page.css";
import WhyUs from "@/components/decoration/WhyUs";
import Newsletter from "@/client-components/global/Newsletter";

export default async function Home({ params }) {
  const language = await getLanguage(params.lang);

  return (
    <main className="section-wide">
      <ListingsFilter listingsLanguage={language.listingsfilter} />
      <WhyUs language={language.whyus} />
      <Newsletter language={language.newsletter} />
    </main>
  );
}
