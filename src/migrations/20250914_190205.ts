import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_blocks_content_block_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TYPE "public"."enum_services_blocks_content_block_reversed_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TYPE "public"."enum_services_blocks_text_block_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TYPE "public"."enum_page_blocks_content_block_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TYPE "public"."enum_page_blocks_content_block_reversed_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TYPE "public"."enum_page_blocks_text_block_width" AS ENUM('w-1/2', 'w-1/3', 'w-full');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "services_blocks_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" varchar,
  	"image_id" integer,
  	"width" "enum_services_blocks_content_block_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_content_block_reversed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" varchar,
  	"image_id" integer,
  	"width" "enum_services_blocks_content_block_reversed_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" jsonb NOT NULL,
  	"width" "enum_services_blocks_text_block_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "page_blocks_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" varchar,
  	"image_id" integer,
  	"width" "enum_page_blocks_content_block_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "page_blocks_content_block_reversed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" varchar,
  	"image_id" integer,
  	"width" "enum_page_blocks_content_block_reversed_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "page_blocks_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content_header" varchar NOT NULL,
  	"content_text" jsonb NOT NULL,
  	"width" "enum_page_blocks_text_block_width" DEFAULT 'w-full',
  	"block_name" varchar
  );
  
  CREATE TABLE "page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"custom_slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "page_breaks" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"has_link" boolean DEFAULT false,
  	"button_text" varchar,
  	"link_id" integer,
  	"background_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DROP INDEX "intros_filename_idx";
  DROP INDEX "services_filename_idx";
  ALTER TABLE "intros" ADD COLUMN "is_custom_page" boolean DEFAULT false;
  ALTER TABLE "intros" ADD COLUMN "page_link_id" integer;
  ALTER TABLE "intros" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "services" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "image_id" integer NOT NULL;
  ALTER TABLE "services" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "services" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "services" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "page_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "page_breaks_id" integer;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_content_block" ADD CONSTRAINT "services_blocks_content_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_content_block" ADD CONSTRAINT "services_blocks_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_content_block_reversed" ADD CONSTRAINT "services_blocks_content_block_reversed_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_content_block_reversed" ADD CONSTRAINT "services_blocks_content_block_reversed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_text_block" ADD CONSTRAINT "services_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_blocks_content_block" ADD CONSTRAINT "page_blocks_content_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_blocks_content_block" ADD CONSTRAINT "page_blocks_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_blocks_content_block_reversed" ADD CONSTRAINT "page_blocks_content_block_reversed_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_blocks_content_block_reversed" ADD CONSTRAINT "page_blocks_content_block_reversed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_blocks_text_block" ADD CONSTRAINT "page_blocks_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "page_breaks" ADD CONSTRAINT "page_breaks_link_id_page_id_fk" FOREIGN KEY ("link_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "page_breaks" ADD CONSTRAINT "page_breaks_background_id_media_id_fk" FOREIGN KEY ("background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_content_block_order_idx" ON "services_blocks_content_block" USING btree ("_order");
  CREATE INDEX "services_blocks_content_block_parent_id_idx" ON "services_blocks_content_block" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_content_block_path_idx" ON "services_blocks_content_block" USING btree ("_path");
  CREATE INDEX "services_blocks_content_block_image_idx" ON "services_blocks_content_block" USING btree ("image_id");
  CREATE INDEX "services_blocks_content_block_reversed_order_idx" ON "services_blocks_content_block_reversed" USING btree ("_order");
  CREATE INDEX "services_blocks_content_block_reversed_parent_id_idx" ON "services_blocks_content_block_reversed" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_content_block_reversed_path_idx" ON "services_blocks_content_block_reversed" USING btree ("_path");
  CREATE INDEX "services_blocks_content_block_reversed_image_idx" ON "services_blocks_content_block_reversed" USING btree ("image_id");
  CREATE INDEX "services_blocks_text_block_order_idx" ON "services_blocks_text_block" USING btree ("_order");
  CREATE INDEX "services_blocks_text_block_parent_id_idx" ON "services_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_text_block_path_idx" ON "services_blocks_text_block" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_order_idx" ON "services_blocks_cta" USING btree ("_order");
  CREATE INDEX "services_blocks_cta_parent_id_idx" ON "services_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cta_path_idx" ON "services_blocks_cta" USING btree ("_path");
  CREATE INDEX "page_blocks_content_block_order_idx" ON "page_blocks_content_block" USING btree ("_order");
  CREATE INDEX "page_blocks_content_block_parent_id_idx" ON "page_blocks_content_block" USING btree ("_parent_id");
  CREATE INDEX "page_blocks_content_block_path_idx" ON "page_blocks_content_block" USING btree ("_path");
  CREATE INDEX "page_blocks_content_block_image_idx" ON "page_blocks_content_block" USING btree ("image_id");
  CREATE INDEX "page_blocks_content_block_reversed_order_idx" ON "page_blocks_content_block_reversed" USING btree ("_order");
  CREATE INDEX "page_blocks_content_block_reversed_parent_id_idx" ON "page_blocks_content_block_reversed" USING btree ("_parent_id");
  CREATE INDEX "page_blocks_content_block_reversed_path_idx" ON "page_blocks_content_block_reversed" USING btree ("_path");
  CREATE INDEX "page_blocks_content_block_reversed_image_idx" ON "page_blocks_content_block_reversed" USING btree ("image_id");
  CREATE INDEX "page_blocks_text_block_order_idx" ON "page_blocks_text_block" USING btree ("_order");
  CREATE INDEX "page_blocks_text_block_parent_id_idx" ON "page_blocks_text_block" USING btree ("_parent_id");
  CREATE INDEX "page_blocks_text_block_path_idx" ON "page_blocks_text_block" USING btree ("_path");
  CREATE INDEX "page_updated_at_idx" ON "page" USING btree ("updated_at");
  CREATE INDEX "page_created_at_idx" ON "page" USING btree ("created_at");
  CREATE UNIQUE INDEX "page_breaks_title_idx" ON "page_breaks" USING btree ("title");
  CREATE INDEX "page_breaks_link_idx" ON "page_breaks" USING btree ("link_id");
  CREATE INDEX "page_breaks_background_idx" ON "page_breaks" USING btree ("background_id");
  CREATE INDEX "page_breaks_updated_at_idx" ON "page_breaks" USING btree ("updated_at");
  CREATE INDEX "page_breaks_created_at_idx" ON "page_breaks" USING btree ("created_at");
  ALTER TABLE "intros" ADD CONSTRAINT "intros_page_link_id_page_id_fk" FOREIGN KEY ("page_link_id") REFERENCES "public"."page"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "intros" ADD CONSTRAINT "intros_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_page_fk" FOREIGN KEY ("page_id") REFERENCES "public"."page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_page_breaks_fk" FOREIGN KEY ("page_breaks_id") REFERENCES "public"."page_breaks"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "intros_page_link_idx" ON "intros" USING btree ("page_link_id");
  CREATE INDEX "intros_image_idx" ON "intros" USING btree ("image_id");
  CREATE INDEX "services_image_idx" ON "services" USING btree ("image_id");
  CREATE INDEX "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE INDEX "payload_locked_documents_rels_page_id_idx" ON "payload_locked_documents_rels" USING btree ("page_id");
  CREATE INDEX "payload_locked_documents_rels_page_breaks_id_idx" ON "payload_locked_documents_rels" USING btree ("page_breaks_id");
  ALTER TABLE "intros" DROP COLUMN "url";
  ALTER TABLE "intros" DROP COLUMN "thumbnail_u_r_l";
  ALTER TABLE "intros" DROP COLUMN "filename";
  ALTER TABLE "intros" DROP COLUMN "mime_type";
  ALTER TABLE "intros" DROP COLUMN "filesize";
  ALTER TABLE "intros" DROP COLUMN "width";
  ALTER TABLE "intros" DROP COLUMN "height";
  ALTER TABLE "intros" DROP COLUMN "focal_x";
  ALTER TABLE "intros" DROP COLUMN "focal_y";
  ALTER TABLE "services" DROP COLUMN "service";
  ALTER TABLE "services" DROP COLUMN "url";
  ALTER TABLE "services" DROP COLUMN "thumbnail_u_r_l";
  ALTER TABLE "services" DROP COLUMN "filename";
  ALTER TABLE "services" DROP COLUMN "mime_type";
  ALTER TABLE "services" DROP COLUMN "filesize";
  ALTER TABLE "services" DROP COLUMN "width";
  ALTER TABLE "services" DROP COLUMN "height";
  ALTER TABLE "services" DROP COLUMN "focal_x";
  ALTER TABLE "services" DROP COLUMN "focal_y";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "users_sessions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_content_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_content_block_reversed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_text_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_blocks_cta" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "page_blocks_content_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "page_blocks_content_block_reversed" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "page_blocks_text_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "page" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "page_breaks" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "services_blocks_content_block" CASCADE;
  DROP TABLE "services_blocks_content_block_reversed" CASCADE;
  DROP TABLE "services_blocks_text_block" CASCADE;
  DROP TABLE "services_blocks_cta" CASCADE;
  DROP TABLE "page_blocks_content_block" CASCADE;
  DROP TABLE "page_blocks_content_block_reversed" CASCADE;
  DROP TABLE "page_blocks_text_block" CASCADE;
  DROP TABLE "page" CASCADE;
  DROP TABLE "page_breaks" CASCADE;
  ALTER TABLE "intros" DROP CONSTRAINT "intros_page_link_id_page_id_fk";
  
  ALTER TABLE "intros" DROP CONSTRAINT "intros_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_image_id_media_id_fk";
  
  ALTER TABLE "services" DROP CONSTRAINT "services_meta_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_page_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_page_breaks_fk";
  
  DROP INDEX "intros_page_link_idx";
  DROP INDEX "intros_image_idx";
  DROP INDEX "services_image_idx";
  DROP INDEX "services_meta_meta_image_idx";
  DROP INDEX "payload_locked_documents_rels_page_id_idx";
  DROP INDEX "payload_locked_documents_rels_page_breaks_id_idx";
  ALTER TABLE "intros" ADD COLUMN "url" varchar;
  ALTER TABLE "intros" ADD COLUMN "thumbnail_u_r_l" varchar;
  ALTER TABLE "intros" ADD COLUMN "filename" varchar;
  ALTER TABLE "intros" ADD COLUMN "mime_type" varchar;
  ALTER TABLE "intros" ADD COLUMN "filesize" numeric;
  ALTER TABLE "intros" ADD COLUMN "width" numeric;
  ALTER TABLE "intros" ADD COLUMN "height" numeric;
  ALTER TABLE "intros" ADD COLUMN "focal_x" numeric;
  ALTER TABLE "intros" ADD COLUMN "focal_y" numeric;
  ALTER TABLE "services" ADD COLUMN "service" varchar NOT NULL;
  ALTER TABLE "services" ADD COLUMN "url" varchar;
  ALTER TABLE "services" ADD COLUMN "thumbnail_u_r_l" varchar;
  ALTER TABLE "services" ADD COLUMN "filename" varchar;
  ALTER TABLE "services" ADD COLUMN "mime_type" varchar;
  ALTER TABLE "services" ADD COLUMN "filesize" numeric;
  ALTER TABLE "services" ADD COLUMN "width" numeric;
  ALTER TABLE "services" ADD COLUMN "height" numeric;
  ALTER TABLE "services" ADD COLUMN "focal_x" numeric;
  ALTER TABLE "services" ADD COLUMN "focal_y" numeric;
  CREATE UNIQUE INDEX "intros_filename_idx" ON "intros" USING btree ("filename");
  CREATE UNIQUE INDEX "services_filename_idx" ON "services" USING btree ("filename");
  ALTER TABLE "intros" DROP COLUMN "is_custom_page";
  ALTER TABLE "intros" DROP COLUMN "page_link_id";
  ALTER TABLE "intros" DROP COLUMN "image_id";
  ALTER TABLE "services" DROP COLUMN "title";
  ALTER TABLE "services" DROP COLUMN "slug";
  ALTER TABLE "services" DROP COLUMN "image_id";
  ALTER TABLE "services" DROP COLUMN "meta_title";
  ALTER TABLE "services" DROP COLUMN "meta_description";
  ALTER TABLE "services" DROP COLUMN "meta_image_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "page_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "page_breaks_id";
  DROP TYPE "public"."enum_services_blocks_content_block_width";
  DROP TYPE "public"."enum_services_blocks_content_block_reversed_width";
  DROP TYPE "public"."enum_services_blocks_text_block_width";
  DROP TYPE "public"."enum_page_blocks_content_block_width";
  DROP TYPE "public"."enum_page_blocks_content_block_reversed_width";
  DROP TYPE "public"."enum_page_blocks_text_block_width";`)
}
