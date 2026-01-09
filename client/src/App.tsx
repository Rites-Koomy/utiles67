import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import MeasureDetail from "@/pages/MeasureDetail";
import Priority from "@/pages/Priority";
import Videos from "@/pages/Videos";
import Agenda from "@/pages/Agenda";
import Rejoindre from "@/pages/Rejoindre";
import AdminLocal from "@/pages/AdminLocal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/mesure/:id" component={MeasureDetail} />
      <Route path="/priorite/:id" component={Priority} />
      <Route path="/videos" component={Videos} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/rejoindre" component={Rejoindre} />
      <Route path="/admin-local" component={AdminLocal} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
