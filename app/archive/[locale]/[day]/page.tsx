type Props = { params: Promise<{ locale: string; day: string }> };

export default async function PublicArchiveDayPage({ params }: Props) {
  const { locale, day } = await params;
  return (
    <main style={{ padding: 24 }}>
      <h1>Archive</h1>
      <p>Locale: {locale}</p>
      <p>Day: {day}</p>
    </main>
  );
}
