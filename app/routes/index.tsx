import { Button } from "@mui/material";
import type { MetaFunction, LoaderFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Rust Demo",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Click me
      </Button>
    </div>
  );
}
