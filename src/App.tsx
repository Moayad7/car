
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import CarListings from "./pages/CarListings";
import Rentals from "./pages/Rentals";
import SpareParts from "./pages/SpareParts";
import KnowYourNeeds from "./pages/KnowYourNeeds";
import Login from "./pages/Login";
import CarDetails from "./pages/CarDetails";
import AddCar from "./pages/AddCar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<Register />} />
            <Route path="/car-listings" element={<CarListings />} />
            <Route path="/car/:id" element={<CarDetails />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/spare-parts" element={<SpareParts />} />
            <Route path="/know-your-needs" element={<KnowYourNeeds />} />
            <Route path="/login" element={<Login />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
