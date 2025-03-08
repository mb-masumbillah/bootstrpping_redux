import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/sotre.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./rotute/router.tsx";
import { ThemeProvider } from "./Providers/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
