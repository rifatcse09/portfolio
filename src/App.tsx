import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "@/components/ThemeProvider";
import AnalyticsPageView from "@/components/AnalyticsPageView";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import RewardsXCaseStudy from "./pages/RewardsXCaseStudy";
import BridgeOpsCaseStudy from "./pages/BridgeOpsCaseStudy";
import SmsCaseStudy from "./pages/SmsCaseStudy";
import DocsRagMcpCaseStudy from "./pages/DocsRagMcpCaseStudy";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import ProjectChat from "./components/ProjectChat";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" storageKey="theme" disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsPageView />
          <PageTransition>
            {(location) => (
              <Routes location={location}>
                <Route path="/" element={<Index />} />
                <Route path="/projects/rewardsx" element={<RewardsXCaseStudy />} />
                <Route path="/projects/bridgeopsone" element={<BridgeOpsCaseStudy />} />
                <Route path="/projects/sms-platform" element={<SmsCaseStudy />} />
                <Route path="/projects/docs-rag-mcp" element={<DocsRagMcpCaseStudy />} />
                <Route path="/services/:slug" element={<ServicePage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </PageTransition>
          <ProjectChat />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
