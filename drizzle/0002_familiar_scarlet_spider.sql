ALTER TABLE "notes_note" ADD COLUMN "text" varchar(12) NOT NULL;--> statement-breakpoint
ALTER TABLE "notes_note" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "notes_note" DROP COLUMN IF EXISTS "content";--> statement-breakpoint
ALTER TABLE "notes_note" DROP COLUMN IF EXISTS "created_at";--> statement-breakpoint
ALTER TABLE "notes_note" DROP COLUMN IF EXISTS "updated_at";