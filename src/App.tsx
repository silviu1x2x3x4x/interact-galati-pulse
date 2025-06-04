
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Board from "./pages/Board";
import Directors from "./pages/Directors";
import Projects from "./pages/Projects";
import ProjectsList from "./pages/ProjectsList";
import Contact from "./pages/Contact";
import TeamPhoto from "./pages/TeamPhoto";
import BoardMember from "./pages/BoardMember";
import Director from "./pages/Director";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/:id" element={<BoardMember />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/directors/:id" element={<Director />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-list" element={<ProjectsList />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPhoto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
