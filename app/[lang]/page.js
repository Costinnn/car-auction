import { getLanguage } from "@/lib/getLanguage";

import ListingsFilter from "@/components/global/ListingsFilter";

import "./page.css";

export default async function Home({ params }) {
  const language = await getLanguage(params.lang);

  return (
    <main>
      <ListingsFilter listingsLanguage={language.listingsfilter}/>
      
    </main>
  );
}
