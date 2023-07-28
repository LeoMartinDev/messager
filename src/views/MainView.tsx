import { Button, Flex, Select, Stack, TextInput } from "@mantine/core";
import { useApplication } from "../AppContext";
import { createHttpRequest } from "../lib/domain/model/request.model";

export function MainView() {
  const { runHttpRequest } = useApplication();

  const onRunHttpRequestButtonClicked = () => {
    runHttpRequest(
      createHttpRequest({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
      })
    );
  };

  return (
    <Stack>
      <Flex gap="md">
        <Select sx={{ flexBasis: 100 }} data={["GET", "POST"]} />

        <TextInput sx={{ flex: 1 }} />

        <Button onClick={onRunHttpRequestButtonClicked}>Send</Button>
      </Flex>
    </Stack>
  );
}
