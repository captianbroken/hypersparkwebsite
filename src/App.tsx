import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import GatedCommunity from "./pages/GatedCommunity";
import CCTV from "./pages/CCTV";
import HomeAutomation from "./pages/HomeAutomation";
import Internet from "./pages/Internet";
import NetworkSecurity from "./pages/NetworkSecurity";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gated-community" element={<GatedCommunity />} />
              <Route path="/cctv" element={<CCTV />} />
              <Route path="/home-automation" element={<HomeAutomation />} />
              <Route path="/internet" element={<Internet />} />
              <Route path="/network-security" element={<NetworkSecurity />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;