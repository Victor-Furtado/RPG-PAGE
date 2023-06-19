import { Container, Tabs } from "@mantine/core";
import { MagicPage } from "./components";

function App() {
  return (
    <Container bg="dark" style={{ height: "100vh" }}>
      <Tabs defaultValue="MAGIC">
        <Tabs.List grow>
          <Tabs.Tab value="MAGIC">MAGIC</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="MAGIC" pt="xs">
          <MagicPage />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
}

export default App;
