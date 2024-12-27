export async function generateStaticParams() {
  return ['ua', 'en'].map((lang) => ({
    slug: lang,
  }));
}

export default async function SlugLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
