import {Button, Container, Flex, MantineProvider, Select, Stack, TextInput} from "@mantine/core";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      globalStyles: () => ({
        'html, body, #root': {
          width: '100%',
          height: '100%',
        }
      })
    }}>
      <Container sx={{
        width: '100%',
        height: '100%',
      }}>
        <Stack>
          <Flex gap="md">
            <Select sx={{flexBasis: 100}} data={['GET', 'POST']}/>

            <TextInput sx={{flex: 1}}/>

            <Button>Send</Button>
          </Flex>
        </Stack>
      </Container>
    </MantineProvider>
  );
}

export default App;
