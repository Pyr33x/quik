"use server";

import { notes } from "~/server/db/schema";
import { redirect } from "next/navigation";
import { db } from "~/server/db";

export async function submit(form: FormData) {
  const text = form.get("text") + "";
  if (!/^[(a-zA-Z)]+$/u.test(text)) return;
  await db.insert(notes).values({ text });
  redirect("/");
}
