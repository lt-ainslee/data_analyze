import { Route, Routes } from "react-router-dom";

import AnalysisPage from "./pages/AnalysisPage.jsx";
import PluginAdminPage from "./pages/PluginAdminPage.jsx";
import AppLayout from "./routes/AppLayout.jsx";

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<AnalysisPage />} />
      <Route path="/plugins" element={<PluginAdminPage />} />
    </Route>
  </Routes>
);

export default App;
