import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Separator,
} from "~/components/ui";
import { auth, signIn, signOut } from "~/lib/auth";
import { Github } from "~/components/icons";
import { routes } from "~/routes";
import { cn } from "~/lib/utils";
import Image from "next/image";
import Link from "next/link";

async function Navbar() {
  const session = await auth();
  const routeStyle = "text-neutral-400 transform hover:text-neutral-200";
  return (
    <div className="flex items-center justify-center">
      <nav
        className={cn(
          "fixed top-0 z-50",
          "h-16 w-full px-6",
          "border-b border-neutral-900 bg-neutral-950/50 backdrop-blur-lg",
        )}
      >
        <div className="flex h-full w-full select-none items-center justify-between">
          <div className="flex flex-row items-center gap-x-4">
            <Link href="/">
              <h1 className="neutral-200 mr-5 text-2xl font-bold">Quik</h1>
            </Link>
            {routes.map((route, index) => (
              <Link
                key={index}
                href={route.path}
                className={cn(routeStyle, "hidden md:block")}
              >
                {route.title}
              </Link>
            ))}
            <a
              href="http://github.com/pyr33x/quik"
              target="_blank"
              rel="noopener noreferrer"
              className={routeStyle}
            >
              Source
            </a>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <Drawer>
              <DrawerTrigger
                className={
                  session
                    ? ""
                    : "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue-600 px-4 py-2 text-sm font-medium outline-0 ring-0 transition-colors hover:bg-blue-600/90 disabled:pointer-events-none disabled:opacity-50"
                }
              >
                {!session && <span>Login</span>}
                {session && (
                  <Image
                    src={session?.user?.image ?? ""}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="transform rounded-full transition hover:scale-105 active:scale-95"
                  />
                )}
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    {session ? "Quik" : "Welcome to Quik"}
                  </DrawerTitle>
                  <DrawerDescription>
                    {session
                      ? `You logged in as ${session?.user?.email}!`
                      : "You can continue access the input by logging in with your github account."}
                  </DrawerDescription>
                </DrawerHeader>
                <Separator className="my-2" />
                <div className="my-4 flex flex-col gap-y-2 text-center">
                  {session ? (
                    <form
                      action={async () => {
                        "use server";
                        await signOut();
                      }}
                    >
                      <Button
                        type="submit"
                        size="default"
                        variant="outline"
                        className="rounded-xl text-center text-white/80"
                      >
                        Logout
                      </Button>
                    </form>
                  ) : (
                    <form
                      action={async () => {
                        "use server";
                        await signIn("github");
                      }}
                    >
                      <Button
                        type="submit"
                        size="default"
                        variant="outline"
                        className="rounded-xl text-center text-white/80"
                      >
                        <Github className="mx-2 h-5 w-5 text-neutral-300" />
                        Continue with Github
                      </Button>
                    </form>
                  )}
                </div>
                <div className="mb-8 flex flex-col gap-y-2 text-center md:hidden">
                  <Separator className="my-2" />
                  {routes.map((route, index) => (
                    <Link key={index} href={route.path} className={routeStyle}>
                      {route.title}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Navbar as Navigation };
