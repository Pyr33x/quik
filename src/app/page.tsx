import { Button, Input, Separator } from "~/components/ui";
import { notes } from "~/server/db/schema";
import { submit } from "~/actions";
import { sql } from "drizzle-orm";
import { auth } from "~/lib/auth";
import { db } from "~/server/db";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { asc: string };
}) {
  const session = await auth();
  const nts = await db
    .select()
    .from(notes)
    .limit(5)
    .orderBy(searchParams.asc ? sql`${notes.id} ASC` : sql`${notes.id} DESC`);
  return (
    <section className="max-w-4xl selection:bg-secondary selection:text-foreground">
      <h1 className="text-wrap bg-gradient-to-b from-white to-background bg-clip-text text-center text-5xl font-black tracking-tight text-transparent lg:text-7xl">
        Welcome to Quik
      </h1>
      {session ? (
        <p className="mt-2 text-center text-lg font-medium text-muted-foreground">
          You successfully signed into your account!
        </p>
      ) : (
        <p className="mt-2 text-center text-lg font-medium text-muted-foreground">
          You need to log into your github account to continue
        </p>
      )}
      <Separator className="my-8" />
      <form className="flex flex-row gap-x-2" action={submit}>
        <Input
          type="text"
          placeholder="✨ Press ⌘K"
          pattern="^[\p{a-zA-Z}]+$"
          name="text"
          autoFocus
          maxLength={12}
          required
          disabled={!session}
          className="w-full"
        />
        <Button disabled={!session} variant="secondary">
          ✉️
        </Button>
      </form>
      <div className="mt-5">
        <ul>
          {nts.map((note) => (
            <li
              key={note.id}
              className="my-2 rounded-[8px] border-neutral-800 bg-neutral-900 px-4 py-1 text-xl text-foreground/90"
            >
              {note.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
