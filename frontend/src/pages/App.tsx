import { VideosPage } from "@/pages/VideosPage";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex flex-1 justify-center items-center overflow-auto">
        <VideosPage />
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
