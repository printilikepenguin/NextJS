export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1>
      blog layout
      {children}
    </h1>
  );
}
