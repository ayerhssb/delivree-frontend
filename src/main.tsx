import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppProvider } from "./context/AppContext.tsx";
import "leaflet/dist/leaflet.css";
import { SocketProvider } from "./context/SocketContext.tsx";

export const authService = "https://delivree-auth.onrender.com";
export const restaurantService = "https://restaurant-service-5phh.onrender.com";
export const utilsService = "https://delivree-utils-service.onrender.com";
export const realtimeService = "https://delivree-realtime-service.onrender.com";
export const riderService = "https://delivree-rider-service.onrender.com";
export const adminService = "https://delivree-admin.onrender.com";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1062903479271-mu03ru40m1fqg7ls9ioc71qnfp2ft67d.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
