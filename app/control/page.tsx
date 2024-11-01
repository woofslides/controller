"use client";
import * as React from "react";

export default function Page({ searchParams }: any) {
  const sparams: { srv: string; ctrl: string } = React.use(searchParams);

  // the url is the url of the **slide**, not the presentation; the protocol will be sent along with the WS message
  const [url, setUrl] = React.useState<string>("https://" + sparams.srv);

  return <iframe src={url} className="w-screen h-screen" />;
}
