import { makePublicEditionSnapshot } from "@/lib/public-editions/helpers";

export default async function PublicEditionPage({ params }: { params: Promise<{ locale: "en" | "sr" | "jp"; day: string }> }) {
  const { locale, day } = await params;
  const snapshot = makePublicEditionSnapshot(day, locale);

  return (
    <main style={{ padding: 24 }}>
      <h1>AndyAI News Public Edition</h1>
      <p>Locale: {snapshot.locale}</p>
      <p>Day: {snapshot.day}</p>
      <p>Slug: {snapshot.slug}</p>
      <p>Status: {snapshot.publishState}</p>
    </main>
  );
}
