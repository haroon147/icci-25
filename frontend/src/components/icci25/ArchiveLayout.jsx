import ArchiveHeader from './ArchiveHeader';
import ArchiveFooter from './ArchiveFooter';

export default function ArchiveLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ArchiveHeader />
      <main className="flex-grow pt-24">
        {children}
      </main>
      <ArchiveFooter />
    </div>
  );
}
