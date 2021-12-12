import { Box } from "@mui/material";
import type { MetaFunction } from "remix";
import JSFib from "~/components/JSFib";
import RustFib from "~/components/RustFib";
import helloWasmCrateInit, { greet as helloWasmCrateGreet } from "hello-wasm";

export default function Index() {
  // helloWasmCrateInit().then(() => {
  //   console.log("init hello wasm");
  //   helloWasmCrateGreet();
  // });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "1px dashed blue",
        height: "100vh",
      }}
    >
      <JSFib />
      <RustFib />
    </Box>
  );
}
