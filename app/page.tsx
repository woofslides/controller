import { display } from "./fonts";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ConnectCardContent from "./components/connectcard";
import Image from "next/image";

export default function Page() {
  return (
    <main className="dark:bg-neutral-950 p-4 h-screen">
      {
        //<header className="flex gap-2 justify-between w-full">
        //  <div />
        //  <div className="flex">
        //    <Button>Connect</Button>
        //  </div>
        //</header>
      }
      <div className="mt-4 flex flex-col gap-4 items-center">
        <div className="prose prose-neutral dark:prose-invert max-w-screen-md">
          <h1 className={"flex gap-4 items-center " + display.className}>
	  <Image src="/icon.png" height={300} width={300} alt="logo" className="h-12 w-12"/>
	  Woofslides controller
	  </h1>
          <p>
            This is the controller for <Link href="https://github.com/woofslides" target="_blank">Woofslides</Link>. Enter the IP address of the viewer and the server to start connection.
          </p>
          <Link href="/howitworks">how it works</Link>
        </div>
        <Card className="w-full max-w-screen-md">
          <CardHeader>
            <CardTitle>Start Connection</CardTitle>
          </CardHeader>
          <ConnectCardContent />
        </Card>
      </div>
    </main>
  );
}
