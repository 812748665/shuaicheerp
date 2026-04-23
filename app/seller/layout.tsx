import SellerSidebar from '@/components/seller-sidebar';

export default function SellerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <SellerSidebar />
      <main className="flex-1 overflow-auto lg:ml-0">
        {children}
      </main>
    </div>
  );
}
