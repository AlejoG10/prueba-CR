export function Footer() {
  return (
    <footer className="w-full border-t bg-background/95">
      <div className="flex h-14 items-center justify-center">
        <span className="text-sm text-muted-foreground text-center">
          Hype Tecnológico © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
