import React from "react";
import Editor from '@monaco-editor/react';
import { Box, Button, Flex, Select, Stack, TextInput } from "@mantine/core";

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
    <Stack h="100%">
      <Flex gap="md">
        <Select sx={{ flexBasis: 100 }} data={["GET", "POST"]} />

        <TextInput sx={{ flex: 1 }} />

        <Button onClick={onRunHttpRequestButtonClicked}>Send</Button>
      </Flex>

      {
        httpResponse && (
          <Box sx={{
            flex: 1,
            height: '100%'
          }}>
            <Editor height="100%" defaultLanguage="json" defaultValue={httpResponse.body?.toString()} />
          </Box>
        )
      }
    </Stack >
  );
}
