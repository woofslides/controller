"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export default function ConnectCardContent() {
  const [srvIp, setSrvIp] = useState("localhost:5677");
  const [viewIp, setViewIp] = useState("localhost:5676");

  return (
    <CardContent className="grid grid-cols-4 items-center gap-4">
      <Label>Server IP Address</Label>
      <Input
        value={srvIp}
        onChange={(e) => {
          const v = e.target.value;
          setSrvIp(
            v.startsWith("https://") || v.startsWith("http://")
              ? v.split("://")[1]
              : v,
          );
        }}
        placeholder="Enter server IP address"
        className="col-span-3"
      />
      <Label>Viewer IP Address</Label>
      <Input
        value={viewIp}
        onChange={(e) => {
          const v = e.target.value;
          setViewIp(
            v.startsWith("https://") || v.startsWith("http://")
              ? v.split("://")[1]
              : v,
          );
        }}
        placeholder="Enter viewer IP address"
        className="col-span-3"
      />
      <Link href={`/control?srv=${srvIp}&view=${viewIp}`}>
        <Button>Connect</Button>
      </Link>
    </CardContent>
  );
}
