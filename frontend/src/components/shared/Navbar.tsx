export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4 gap-3">
        <img src="/youtube.png" alt="Hype Tecnológico" className="w-8 h-8" />
        <h1 className="text-xl font-bold tracking-tight">Hype Tecnológico</h1>
      </div>
    </nav>
  );
}
