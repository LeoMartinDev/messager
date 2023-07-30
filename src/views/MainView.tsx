import React from "react";
import { Button, Flex, Select, Stack, TextInput } from "@mantine/core";

import { useApplication } from "../AppContext";
import { createHttpRequest } from "../lib/domain/model/request.model";
import { HttpResponse } from "../lib/domain/entities/request.entity";

export function MainView() {
  const { runHttpRequest } = useApplication();
  const [httpResponse, setHttpResponse] = React.useState<HttpResponse | null>(null);

  const onRunHttpRequestButtonClicked = async () => {
    const response = await runHttpRequest(
      createHttpRequest({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1",
      })
    );

    setHttpResponse(response);
  };

  return (
    <Stack>
      <Flex gap="md">
        <Select sx={{ flexBasis: 100 }} data={["GET", "POST"]} />

        <TextInput sx={{ flex: 1 }} />

        <Button onClick={onRunHttpRequestButtonClicked}>Send</Button>
      </Flex>

      {httpResponse && (

      )}
    </Stack>
  );
}
