export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      Admin Sidebar
      {children}
    </div>
  );
}
