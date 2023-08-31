import { getLanguage } from "@/lib/getLanguage";

import "./page.css";

export default async function Home({ params }) {
  const language = await getLanguage(params.lang);

  return <main></main>;
}
