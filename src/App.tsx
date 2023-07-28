import { Container, MantineProvider } from "@mantine/core";
import { AppContext } from "./AppContext";
import React from "react";
import { createApplication } from "./lib";
import { MainView } from "./views/MainView";

function App() {
  const [application] = React.useState(createApplication());

  return (
    <AppContext.Provider value={application}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: () => ({
            "html, body, #root": {
              width: "100%",
              height: "100%",
            },
          }),
        }}
      >
        <Container
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <MainView />
        </Container>
      </MantineProvider>
    </AppContext.Provider>
  );
}

export default App;
