import { pgTableCreator, serial, varchar } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `notes_${name}`);

export const notes = createTable("note", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 12 }).notNull(),
});
