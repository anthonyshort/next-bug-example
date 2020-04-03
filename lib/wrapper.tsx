import React, { useEffect } from "react";
import { useRouter } from "next/router";

export function Wrapper(props: any) {
  const { children } = props;
  const router = useRouter();

  useEffect(() => {
    function change() {
      console.log("route change");
    }
    router.events.on("routeChangeComplete", change);
    return () => {
      router.events.off("routeChangeComplete", change);
    };
  }, []);

  return <div>{children}</div>;
}
