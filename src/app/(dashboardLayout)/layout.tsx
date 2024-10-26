export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      Dashboard navbar
      {children}
    </div>
  );
}
