import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ModalsProvider
        modalProps={{
          centered: true,
          withCloseButton: true,
          size: "xl",
        }}
      >
        <App />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
