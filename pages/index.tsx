import React from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  console.log("router.query", router.query);

  return <div>Index</div>;
}
