import "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"; // You would create this next
import HomePage from "./pages/HomePage";
import "./App.css"; // Or index.css

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1B] font-sans antialiased">
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
