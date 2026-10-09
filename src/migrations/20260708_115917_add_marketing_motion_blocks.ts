import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_timeline_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_timeline_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_timeline_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_timeline_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_feat_show_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_feat_show_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_feat_show_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_accordion_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_accordion_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_accordion_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_stats_band_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_stats_band_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_blocks_stats_band_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_logo_rail_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_logo_rail_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_logo_rail_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_test_stack_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_test_stack_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_test_stack_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_plans_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_price_grid_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_price_grid_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_price_grid_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_proc_steps_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_proc_steps_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_proc_steps_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_metrics_dash_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_metrics_dash_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_metrics_dash_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_comp_tbl_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_comp_tbl_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_comp_tbl_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_sticky_story_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_sticky_story_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_sticky_story_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_media_mosaic_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_media_mosaic_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_media_mosaic_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_tabs_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_feat_tabs_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_feat_tabs_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_feat_tabs_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_faq_grid_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_faq_grid_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_faq_grid_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_cta_band_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_cta_band_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_cta_band_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_cta_band_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_memb_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_team_grid_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_team_grid_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_team_grid_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_studies_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_case_prev_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_case_prev_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_case_prev_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_event_sched_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_event_sched_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_event_sched_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_quote_marq_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_quote_marq_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_quote_marq_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_timeline_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__items_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__feat_show_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__feat_show_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__feat_show_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_band_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_band_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_blocks_stats_band_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__logo_rail_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__logo_rail_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__logo_rail_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__test_stack_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__test_stack_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__test_stack_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__plans_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__price_grid_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__price_grid_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__price_grid_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__proc_steps_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__proc_steps_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__proc_steps_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__metrics_dash_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__metrics_dash_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__metrics_dash_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__comp_tbl_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__comp_tbl_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__comp_tbl_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__sticky_story_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__sticky_story_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__sticky_story_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__media_mosaic_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__media_mosaic_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__media_mosaic_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__tabs_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__feat_tabs_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__feat_tabs_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__feat_tabs_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__faq_grid_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__faq_grid_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__faq_grid_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__cta_band_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__cta_band_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__cta_band_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__cta_band_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__memb_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__team_grid_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__team_grid_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__team_grid_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__studies_v_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__case_prev_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__case_prev_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__case_prev_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__event_sched_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__event_sched_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__event_sched_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__quote_marq_v_motion_section_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__quote_marq_v_motion_intro_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__quote_marq_v_motion_item_animation" AS ENUM('none', 'fly-up', 'fly-left', 'fly-right', 'soft-scale', 'alternate-sides');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_folders_folder_type" AS ENUM('media');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_timeline_items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_timeline_items_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "pages_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"period" varchar,
  	"title" varchar,
  	"description" jsonb
  );
  
  CREATE TABLE "pages_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_pages_blocks_timeline_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_pages_blocks_timeline_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_pages_blocks_timeline_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 120,
  	"block_name" varchar
  );
  
  CREATE TABLE "items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_items_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb
  );
  
  CREATE TABLE "feat_show" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_feat_show_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_feat_show_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_feat_show_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"motion_parallax_strength" numeric DEFAULT 20,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"default_open" boolean
  );
  
  CREATE TABLE "pages_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_pages_blocks_accordion_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_pages_blocks_accordion_motion_intro_animation" DEFAULT 'fly-left',
  	"motion_item_animation" "enum_pages_blocks_accordion_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 120,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_band_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "pages_blocks_stats_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_pages_blocks_stats_band_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum_pages_blocks_stats_band_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_pages_blocks_stats_band_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"block_name" varchar
  );
  
  CREATE TABLE "logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"media_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE "logo_rail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_logo_rail_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_logo_rail_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_logo_rail_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 80,
  	"block_name" varchar
  );
  
  CREATE TABLE "quotes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"company" varchar
  );
  
  CREATE TABLE "test_stack" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_test_stack_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_test_stack_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_test_stack_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 160,
  	"block_name" varchar
  );
  
  CREATE TABLE "feat" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "plans_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_plans_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"billing_note" varchar,
  	"summary" varchar,
  	"featured" boolean
  );
  
  CREATE TABLE "price_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_price_grid_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_price_grid_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_price_grid_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"block_name" varchar
  );
  
  CREATE TABLE "steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_label" varchar,
  	"title" varchar,
  	"description" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE "proc_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_proc_steps_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_proc_steps_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_proc_steps_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 140,
  	"block_name" varchar
  );
  
  CREATE TABLE "metrics" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"trend" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "metrics_dash" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_metrics_dash_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum_metrics_dash_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_metrics_dash_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 90,
  	"block_name" varchar
  );
  
  CREATE TABLE "cols" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE "rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "comp_tbl" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_comp_tbl_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_comp_tbl_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_comp_tbl_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 60,
  	"block_name" varchar
  );
  
  CREATE TABLE "panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE "sticky_story" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_sticky_story_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_sticky_story_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_sticky_story_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 180,
  	"block_name" varchar
  );
  
  CREATE TABLE "media_mosaic" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_media_mosaic_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_media_mosaic_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_media_mosaic_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 110,
  	"block_name" varchar
  );
  
  CREATE TABLE "tabs_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_tabs_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"media_id" integer
  );
  
  CREATE TABLE "feat_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_feat_tabs_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_feat_tabs_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_feat_tabs_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 100,
  	"block_name" varchar
  );
  
  CREATE TABLE "cats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "faq_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_faq_grid_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_faq_grid_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_faq_grid_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 70,
  	"block_name" varchar
  );
  
  CREATE TABLE "cta_band_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_cta_band_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "cta_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_cta_band_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum_cta_band_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_cta_band_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "memb_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_memb_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar
  );
  
  CREATE TABLE "memb" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"bio" varchar,
  	"photo_id" integer
  );
  
  CREATE TABLE "team_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_team_grid_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_team_grid_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_team_grid_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 100,
  	"block_name" varchar
  );
  
  CREATE TABLE "results" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "studies_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_studies_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE "studies" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"client" varchar,
  	"title" varchar,
  	"summary" varchar,
  	"media_id" integer
  );
  
  CREATE TABLE "case_prev" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_case_prev_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_case_prev_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_case_prev_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 140,
  	"block_name" varchar
  );
  
  CREATE TABLE "sess" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"time" varchar,
  	"title" varchar,
  	"speaker" varchar,
  	"location" varchar,
  	"description" varchar
  );
  
  CREATE TABLE "days" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "event_sched" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_event_sched_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_event_sched_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_event_sched_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 90,
  	"block_name" varchar
  );
  
  CREATE TABLE "quote_marq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum_quote_marq_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum_quote_marq_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum_quote_marq_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 60,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'lowImpact',
  	"hero_rich_text" jsonb,
  	"hero_media_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_timeline_items_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"period" varchar,
  	"title" varchar,
  	"description" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_timeline" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__pages_v_blocks_timeline_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__pages_v_blocks_timeline_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__pages_v_blocks_timeline_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 120,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_items_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__items_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_feat_show_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__feat_show_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__feat_show_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__feat_show_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"motion_parallax_strength" numeric DEFAULT 20,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"default_open" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__pages_v_blocks_accordion_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__pages_v_blocks_accordion_motion_intro_animation" DEFAULT 'fly-left',
  	"motion_item_animation" "enum__pages_v_blocks_accordion_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 120,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_band_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_stats_band" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__pages_v_blocks_stats_band_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum__pages_v_blocks_stats_band_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__pages_v_blocks_stats_band_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_logos_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"media_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_logo_rail_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__logo_rail_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__logo_rail_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__logo_rail_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 80,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_quotes_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"quote" varchar,
  	"author" varchar,
  	"company" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_test_stack_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__test_stack_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__test_stack_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__test_stack_v_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 160,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_feat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plans_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__plans_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_plans_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" varchar,
  	"billing_note" varchar,
  	"summary" varchar,
  	"featured" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_price_grid_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__price_grid_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__price_grid_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__price_grid_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"step_label" varchar,
  	"title" varchar,
  	"description" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_proc_steps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__proc_steps_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__proc_steps_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__proc_steps_v_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 140,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_metrics_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"trend" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_metrics_dash_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__metrics_dash_v_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum__metrics_dash_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__metrics_dash_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 90,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cols_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cells_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_rows_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_comp_tbl_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__comp_tbl_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__comp_tbl_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__comp_tbl_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 60,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_panels_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_sticky_story_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__sticky_story_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__sticky_story_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__sticky_story_v_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 180,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_media_mosaic_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__media_mosaic_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__media_mosaic_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__media_mosaic_v_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 110,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_tabs_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__tabs_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"content" jsonb,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_feat_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__feat_tabs_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__feat_tabs_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__feat_tabs_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 100,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cats_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_faq_grid_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__faq_grid_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__faq_grid_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__faq_grid_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 70,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta_band_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__cta_band_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_cta_band_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__cta_band_v_motion_section_animation" DEFAULT 'soft-scale',
  	"motion_intro_animation" "enum__cta_band_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__cta_band_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 120,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_memb_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__memb_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_memb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"role" varchar,
  	"bio" varchar,
  	"photo_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_team_grid_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__team_grid_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__team_grid_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__team_grid_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 100,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_results_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studies_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__studies_v_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_studies_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"client" varchar,
  	"title" varchar,
  	"summary" varchar,
  	"media_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_case_prev_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__case_prev_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__case_prev_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__case_prev_v_motion_item_animation" DEFAULT 'alternate-sides',
  	"motion_stagger" numeric DEFAULT 140,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_sess_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"time" varchar,
  	"title" varchar,
  	"speaker" varchar,
  	"location" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_days_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_event_sched_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__event_sched_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__event_sched_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__event_sched_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 90,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_quote_marq_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"title" varchar,
  	"intro" jsonb,
  	"motion_section_animation" "enum__quote_marq_v_motion_section_animation" DEFAULT 'none',
  	"motion_intro_animation" "enum__quote_marq_v_motion_intro_animation" DEFAULT 'fly-up',
  	"motion_item_animation" "enum__quote_marq_v_motion_item_animation" DEFAULT 'fly-up',
  	"motion_stagger" numeric DEFAULT 60,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'lowImpact',
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_generate_slug" boolean DEFAULT true,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"generate_slug" boolean DEFAULT true,
  	"slug" varchar NOT NULL,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"category_i_d" varchar,
  	"title" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_folders_folder_type" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_payload_folders_folder_type",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "payload_folders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"folder_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_folders_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "footer_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items_links" ADD CONSTRAINT "pages_blocks_timeline_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline_items" ADD CONSTRAINT "pages_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_timeline" ADD CONSTRAINT "pages_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "items_links" ADD CONSTRAINT "items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "items" ADD CONSTRAINT "items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "feat_show" ADD CONSTRAINT "feat_show_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_items" ADD CONSTRAINT "pages_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_band_items" ADD CONSTRAINT "pages_blocks_stats_band_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_stats_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_stats_band" ADD CONSTRAINT "pages_blocks_stats_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "logos" ADD CONSTRAINT "logos_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "logos" ADD CONSTRAINT "logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."logo_rail"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "logo_rail" ADD CONSTRAINT "logo_rail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quotes" ADD CONSTRAINT "quotes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quote_marq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "test_stack" ADD CONSTRAINT "test_stack_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "feat" ADD CONSTRAINT "feat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plans_links" ADD CONSTRAINT "plans_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plans"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "plans" ADD CONSTRAINT "plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."price_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "price_grid" ADD CONSTRAINT "price_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "steps" ADD CONSTRAINT "steps_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "steps" ADD CONSTRAINT "steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."proc_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "proc_steps" ADD CONSTRAINT "proc_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "metrics" ADD CONSTRAINT "metrics_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metrics_dash"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "metrics_dash" ADD CONSTRAINT "metrics_dash_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cols" ADD CONSTRAINT "cols_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comp_tbl"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cells" ADD CONSTRAINT "cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."rows"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "rows" ADD CONSTRAINT "rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."comp_tbl"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "comp_tbl" ADD CONSTRAINT "comp_tbl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "panels" ADD CONSTRAINT "panels_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "panels" ADD CONSTRAINT "panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sticky_story"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sticky_story" ADD CONSTRAINT "sticky_story_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_mosaic" ADD CONSTRAINT "media_mosaic_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tabs_links" ADD CONSTRAINT "tabs_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "tabs" ADD CONSTRAINT "tabs_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "tabs" ADD CONSTRAINT "tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."feat_tabs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "feat_tabs" ADD CONSTRAINT "feat_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cats" ADD CONSTRAINT "cats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "faq_grid" ADD CONSTRAINT "faq_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_band_links" ADD CONSTRAINT "cta_band_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_band" ADD CONSTRAINT "cta_band_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "cta_band" ADD CONSTRAINT "cta_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "memb_links" ADD CONSTRAINT "memb_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."memb"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "memb" ADD CONSTRAINT "memb_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "memb" ADD CONSTRAINT "memb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."team_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "team_grid" ADD CONSTRAINT "team_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "results" ADD CONSTRAINT "results_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studies_links" ADD CONSTRAINT "studies_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "studies" ADD CONSTRAINT "studies_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "studies" ADD CONSTRAINT "studies_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_prev"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_prev" ADD CONSTRAINT "case_prev_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "sess" ADD CONSTRAINT "sess_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."days"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "days" ADD CONSTRAINT "days_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_sched"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "event_sched" ADD CONSTRAINT "event_sched_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote_marq" ADD CONSTRAINT "quote_marq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items_links" ADD CONSTRAINT "_pages_v_blocks_timeline_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline_items" ADD CONSTRAINT "_pages_v_blocks_timeline_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_timeline"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_timeline" ADD CONSTRAINT "_pages_v_blocks_timeline_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_items_v_links" ADD CONSTRAINT "_items_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_items_v" ADD CONSTRAINT "_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cats_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_feat_show_v" ADD CONSTRAINT "_feat_show_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion_items" ADD CONSTRAINT "_pages_v_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion" ADD CONSTRAINT "_pages_v_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_band_items" ADD CONSTRAINT "_pages_v_blocks_stats_band_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_stats_band"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_stats_band" ADD CONSTRAINT "_pages_v_blocks_stats_band_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_logos_v" ADD CONSTRAINT "_logos_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_logos_v" ADD CONSTRAINT "_logos_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_logo_rail_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_logo_rail_v" ADD CONSTRAINT "_logo_rail_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quotes_v" ADD CONSTRAINT "_quotes_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_quote_marq_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_test_stack_v" ADD CONSTRAINT "_test_stack_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_feat_v" ADD CONSTRAINT "_feat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plans_v_links" ADD CONSTRAINT "_plans_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plans_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_plans_v" ADD CONSTRAINT "_plans_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_price_grid_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_price_grid_v" ADD CONSTRAINT "_price_grid_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_steps_v" ADD CONSTRAINT "_steps_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_steps_v" ADD CONSTRAINT "_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_proc_steps_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_proc_steps_v" ADD CONSTRAINT "_proc_steps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_metrics_v" ADD CONSTRAINT "_metrics_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metrics_dash_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_metrics_dash_v" ADD CONSTRAINT "_metrics_dash_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cols_v" ADD CONSTRAINT "_cols_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comp_tbl_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cells_v" ADD CONSTRAINT "_cells_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_rows_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_rows_v" ADD CONSTRAINT "_rows_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_comp_tbl_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_comp_tbl_v" ADD CONSTRAINT "_comp_tbl_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_panels_v" ADD CONSTRAINT "_panels_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_panels_v" ADD CONSTRAINT "_panels_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_sticky_story_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_sticky_story_v" ADD CONSTRAINT "_sticky_story_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_media_mosaic_v" ADD CONSTRAINT "_media_mosaic_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_tabs_v_links" ADD CONSTRAINT "_tabs_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_tabs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_tabs_v" ADD CONSTRAINT "_tabs_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_tabs_v" ADD CONSTRAINT "_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_feat_tabs_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_feat_tabs_v" ADD CONSTRAINT "_feat_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cats_v" ADD CONSTRAINT "_cats_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_grid_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_faq_grid_v" ADD CONSTRAINT "_faq_grid_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_band_v_links" ADD CONSTRAINT "_cta_band_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_band_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_band_v" ADD CONSTRAINT "_cta_band_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_cta_band_v" ADD CONSTRAINT "_cta_band_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_memb_v_links" ADD CONSTRAINT "_memb_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_memb_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_memb_v" ADD CONSTRAINT "_memb_v_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_memb_v" ADD CONSTRAINT "_memb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_team_grid_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_team_grid_v" ADD CONSTRAINT "_team_grid_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_results_v" ADD CONSTRAINT "_results_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studies_v_links" ADD CONSTRAINT "_studies_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_studies_v" ADD CONSTRAINT "_studies_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_studies_v" ADD CONSTRAINT "_studies_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_prev_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_prev_v" ADD CONSTRAINT "_case_prev_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_sess_v" ADD CONSTRAINT "_sess_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_days_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_days_v" ADD CONSTRAINT "_days_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_event_sched_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_event_sched_v" ADD CONSTRAINT "_event_sched_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quote_marq_v" ADD CONSTRAINT "_quote_marq_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media" ADD CONSTRAINT "media_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders_folder_type" ADD CONSTRAINT "payload_folders_folder_type_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_folders" ADD CONSTRAINT "payload_folders_folder_id_payload_folders_id_fk" FOREIGN KEY ("folder_id") REFERENCES "public"."payload_folders"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_folders_fk" FOREIGN KEY ("payload_folders_id") REFERENCES "public"."payload_folders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav_items" ADD CONSTRAINT "footer_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_timeline_items_links_order_idx" ON "pages_blocks_timeline_items_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_links_parent_id_idx" ON "pages_blocks_timeline_items_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_items_order_idx" ON "pages_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_items_parent_id_idx" ON "pages_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_order_idx" ON "pages_blocks_timeline" USING btree ("_order");
  CREATE INDEX "pages_blocks_timeline_parent_id_idx" ON "pages_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_timeline_path_idx" ON "pages_blocks_timeline" USING btree ("_path");
  CREATE INDEX "items_links_order_idx" ON "items_links" USING btree ("_order");
  CREATE INDEX "items_links_parent_id_idx" ON "items_links" USING btree ("_parent_id");
  CREATE INDEX "items_order_idx" ON "items" USING btree ("_order");
  CREATE INDEX "items_parent_id_idx" ON "items" USING btree ("_parent_id");
  CREATE INDEX "feat_show_order_idx" ON "feat_show" USING btree ("_order");
  CREATE INDEX "feat_show_parent_id_idx" ON "feat_show" USING btree ("_parent_id");
  CREATE INDEX "feat_show_path_idx" ON "feat_show" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_items_order_idx" ON "pages_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_items_parent_id_idx" ON "pages_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_order_idx" ON "pages_blocks_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_parent_id_idx" ON "pages_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_path_idx" ON "pages_blocks_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_stats_band_items_order_idx" ON "pages_blocks_stats_band_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_band_items_parent_id_idx" ON "pages_blocks_stats_band_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_band_order_idx" ON "pages_blocks_stats_band" USING btree ("_order");
  CREATE INDEX "pages_blocks_stats_band_parent_id_idx" ON "pages_blocks_stats_band" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_stats_band_path_idx" ON "pages_blocks_stats_band" USING btree ("_path");
  CREATE INDEX "logos_order_idx" ON "logos" USING btree ("_order");
  CREATE INDEX "logos_parent_id_idx" ON "logos" USING btree ("_parent_id");
  CREATE INDEX "logos_media_idx" ON "logos" USING btree ("media_id");
  CREATE INDEX "logo_rail_order_idx" ON "logo_rail" USING btree ("_order");
  CREATE INDEX "logo_rail_parent_id_idx" ON "logo_rail" USING btree ("_parent_id");
  CREATE INDEX "logo_rail_path_idx" ON "logo_rail" USING btree ("_path");
  CREATE INDEX "quotes_order_idx" ON "quotes" USING btree ("_order");
  CREATE INDEX "quotes_parent_id_idx" ON "quotes" USING btree ("_parent_id");
  CREATE INDEX "test_stack_order_idx" ON "test_stack" USING btree ("_order");
  CREATE INDEX "test_stack_parent_id_idx" ON "test_stack" USING btree ("_parent_id");
  CREATE INDEX "test_stack_path_idx" ON "test_stack" USING btree ("_path");
  CREATE INDEX "feat_order_idx" ON "feat" USING btree ("_order");
  CREATE INDEX "feat_parent_id_idx" ON "feat" USING btree ("_parent_id");
  CREATE INDEX "plans_links_order_idx" ON "plans_links" USING btree ("_order");
  CREATE INDEX "plans_links_parent_id_idx" ON "plans_links" USING btree ("_parent_id");
  CREATE INDEX "plans_order_idx" ON "plans" USING btree ("_order");
  CREATE INDEX "plans_parent_id_idx" ON "plans" USING btree ("_parent_id");
  CREATE INDEX "price_grid_order_idx" ON "price_grid" USING btree ("_order");
  CREATE INDEX "price_grid_parent_id_idx" ON "price_grid" USING btree ("_parent_id");
  CREATE INDEX "price_grid_path_idx" ON "price_grid" USING btree ("_path");
  CREATE INDEX "steps_order_idx" ON "steps" USING btree ("_order");
  CREATE INDEX "steps_parent_id_idx" ON "steps" USING btree ("_parent_id");
  CREATE INDEX "steps_media_idx" ON "steps" USING btree ("media_id");
  CREATE INDEX "proc_steps_order_idx" ON "proc_steps" USING btree ("_order");
  CREATE INDEX "proc_steps_parent_id_idx" ON "proc_steps" USING btree ("_parent_id");
  CREATE INDEX "proc_steps_path_idx" ON "proc_steps" USING btree ("_path");
  CREATE INDEX "metrics_order_idx" ON "metrics" USING btree ("_order");
  CREATE INDEX "metrics_parent_id_idx" ON "metrics" USING btree ("_parent_id");
  CREATE INDEX "metrics_dash_order_idx" ON "metrics_dash" USING btree ("_order");
  CREATE INDEX "metrics_dash_parent_id_idx" ON "metrics_dash" USING btree ("_parent_id");
  CREATE INDEX "metrics_dash_path_idx" ON "metrics_dash" USING btree ("_path");
  CREATE INDEX "cols_order_idx" ON "cols" USING btree ("_order");
  CREATE INDEX "cols_parent_id_idx" ON "cols" USING btree ("_parent_id");
  CREATE INDEX "cells_order_idx" ON "cells" USING btree ("_order");
  CREATE INDEX "cells_parent_id_idx" ON "cells" USING btree ("_parent_id");
  CREATE INDEX "rows_order_idx" ON "rows" USING btree ("_order");
  CREATE INDEX "rows_parent_id_idx" ON "rows" USING btree ("_parent_id");
  CREATE INDEX "comp_tbl_order_idx" ON "comp_tbl" USING btree ("_order");
  CREATE INDEX "comp_tbl_parent_id_idx" ON "comp_tbl" USING btree ("_parent_id");
  CREATE INDEX "comp_tbl_path_idx" ON "comp_tbl" USING btree ("_path");
  CREATE INDEX "panels_order_idx" ON "panels" USING btree ("_order");
  CREATE INDEX "panels_parent_id_idx" ON "panels" USING btree ("_parent_id");
  CREATE INDEX "panels_media_idx" ON "panels" USING btree ("media_id");
  CREATE INDEX "sticky_story_order_idx" ON "sticky_story" USING btree ("_order");
  CREATE INDEX "sticky_story_parent_id_idx" ON "sticky_story" USING btree ("_parent_id");
  CREATE INDEX "sticky_story_path_idx" ON "sticky_story" USING btree ("_path");
  CREATE INDEX "media_mosaic_order_idx" ON "media_mosaic" USING btree ("_order");
  CREATE INDEX "media_mosaic_parent_id_idx" ON "media_mosaic" USING btree ("_parent_id");
  CREATE INDEX "media_mosaic_path_idx" ON "media_mosaic" USING btree ("_path");
  CREATE INDEX "tabs_links_order_idx" ON "tabs_links" USING btree ("_order");
  CREATE INDEX "tabs_links_parent_id_idx" ON "tabs_links" USING btree ("_parent_id");
  CREATE INDEX "tabs_order_idx" ON "tabs" USING btree ("_order");
  CREATE INDEX "tabs_parent_id_idx" ON "tabs" USING btree ("_parent_id");
  CREATE INDEX "tabs_media_idx" ON "tabs" USING btree ("media_id");
  CREATE INDEX "feat_tabs_order_idx" ON "feat_tabs" USING btree ("_order");
  CREATE INDEX "feat_tabs_parent_id_idx" ON "feat_tabs" USING btree ("_parent_id");
  CREATE INDEX "feat_tabs_path_idx" ON "feat_tabs" USING btree ("_path");
  CREATE INDEX "cats_order_idx" ON "cats" USING btree ("_order");
  CREATE INDEX "cats_parent_id_idx" ON "cats" USING btree ("_parent_id");
  CREATE INDEX "faq_grid_order_idx" ON "faq_grid" USING btree ("_order");
  CREATE INDEX "faq_grid_parent_id_idx" ON "faq_grid" USING btree ("_parent_id");
  CREATE INDEX "faq_grid_path_idx" ON "faq_grid" USING btree ("_path");
  CREATE INDEX "cta_band_links_order_idx" ON "cta_band_links" USING btree ("_order");
  CREATE INDEX "cta_band_links_parent_id_idx" ON "cta_band_links" USING btree ("_parent_id");
  CREATE INDEX "cta_band_order_idx" ON "cta_band" USING btree ("_order");
  CREATE INDEX "cta_band_parent_id_idx" ON "cta_band" USING btree ("_parent_id");
  CREATE INDEX "cta_band_path_idx" ON "cta_band" USING btree ("_path");
  CREATE INDEX "cta_band_media_idx" ON "cta_band" USING btree ("media_id");
  CREATE INDEX "memb_links_order_idx" ON "memb_links" USING btree ("_order");
  CREATE INDEX "memb_links_parent_id_idx" ON "memb_links" USING btree ("_parent_id");
  CREATE INDEX "memb_order_idx" ON "memb" USING btree ("_order");
  CREATE INDEX "memb_parent_id_idx" ON "memb" USING btree ("_parent_id");
  CREATE INDEX "memb_photo_idx" ON "memb" USING btree ("photo_id");
  CREATE INDEX "team_grid_order_idx" ON "team_grid" USING btree ("_order");
  CREATE INDEX "team_grid_parent_id_idx" ON "team_grid" USING btree ("_parent_id");
  CREATE INDEX "team_grid_path_idx" ON "team_grid" USING btree ("_path");
  CREATE INDEX "results_order_idx" ON "results" USING btree ("_order");
  CREATE INDEX "results_parent_id_idx" ON "results" USING btree ("_parent_id");
  CREATE INDEX "studies_links_order_idx" ON "studies_links" USING btree ("_order");
  CREATE INDEX "studies_links_parent_id_idx" ON "studies_links" USING btree ("_parent_id");
  CREATE INDEX "studies_order_idx" ON "studies" USING btree ("_order");
  CREATE INDEX "studies_parent_id_idx" ON "studies" USING btree ("_parent_id");
  CREATE INDEX "studies_media_idx" ON "studies" USING btree ("media_id");
  CREATE INDEX "case_prev_order_idx" ON "case_prev" USING btree ("_order");
  CREATE INDEX "case_prev_parent_id_idx" ON "case_prev" USING btree ("_parent_id");
  CREATE INDEX "case_prev_path_idx" ON "case_prev" USING btree ("_path");
  CREATE INDEX "sess_order_idx" ON "sess" USING btree ("_order");
  CREATE INDEX "sess_parent_id_idx" ON "sess" USING btree ("_parent_id");
  CREATE INDEX "days_order_idx" ON "days" USING btree ("_order");
  CREATE INDEX "days_parent_id_idx" ON "days" USING btree ("_parent_id");
  CREATE INDEX "event_sched_order_idx" ON "event_sched" USING btree ("_order");
  CREATE INDEX "event_sched_parent_id_idx" ON "event_sched" USING btree ("_parent_id");
  CREATE INDEX "event_sched_path_idx" ON "event_sched" USING btree ("_path");
  CREATE INDEX "quote_marq_order_idx" ON "quote_marq" USING btree ("_order");
  CREATE INDEX "quote_marq_parent_id_idx" ON "quote_marq" USING btree ("_parent_id");
  CREATE INDEX "quote_marq_path_idx" ON "quote_marq" USING btree ("_path");
  CREATE INDEX "pages_hero_hero_media_idx" ON "pages" USING btree ("hero_media_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id");
  CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_links_order_idx" ON "_pages_v_blocks_timeline_items_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_links_parent_id_idx" ON "_pages_v_blocks_timeline_items_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_items_order_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_items_parent_id_idx" ON "_pages_v_blocks_timeline_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_order_idx" ON "_pages_v_blocks_timeline" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_timeline_parent_id_idx" ON "_pages_v_blocks_timeline" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_timeline_path_idx" ON "_pages_v_blocks_timeline" USING btree ("_path");
  CREATE INDEX "_items_v_links_order_idx" ON "_items_v_links" USING btree ("_order");
  CREATE INDEX "_items_v_links_parent_id_idx" ON "_items_v_links" USING btree ("_parent_id");
  CREATE INDEX "_items_v_order_idx" ON "_items_v" USING btree ("_order");
  CREATE INDEX "_items_v_parent_id_idx" ON "_items_v" USING btree ("_parent_id");
  CREATE INDEX "_feat_show_v_order_idx" ON "_feat_show_v" USING btree ("_order");
  CREATE INDEX "_feat_show_v_parent_id_idx" ON "_feat_show_v" USING btree ("_parent_id");
  CREATE INDEX "_feat_show_v_path_idx" ON "_feat_show_v" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_accordion_items_order_idx" ON "_pages_v_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_items_parent_id_idx" ON "_pages_v_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_order_idx" ON "_pages_v_blocks_accordion" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_parent_id_idx" ON "_pages_v_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_path_idx" ON "_pages_v_blocks_accordion" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_stats_band_items_order_idx" ON "_pages_v_blocks_stats_band_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_band_items_parent_id_idx" ON "_pages_v_blocks_stats_band_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_band_order_idx" ON "_pages_v_blocks_stats_band" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_stats_band_parent_id_idx" ON "_pages_v_blocks_stats_band" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_stats_band_path_idx" ON "_pages_v_blocks_stats_band" USING btree ("_path");
  CREATE INDEX "_logos_v_order_idx" ON "_logos_v" USING btree ("_order");
  CREATE INDEX "_logos_v_parent_id_idx" ON "_logos_v" USING btree ("_parent_id");
  CREATE INDEX "_logos_v_media_idx" ON "_logos_v" USING btree ("media_id");
  CREATE INDEX "_logo_rail_v_order_idx" ON "_logo_rail_v" USING btree ("_order");
  CREATE INDEX "_logo_rail_v_parent_id_idx" ON "_logo_rail_v" USING btree ("_parent_id");
  CREATE INDEX "_logo_rail_v_path_idx" ON "_logo_rail_v" USING btree ("_path");
  CREATE INDEX "_quotes_v_order_idx" ON "_quotes_v" USING btree ("_order");
  CREATE INDEX "_quotes_v_parent_id_idx" ON "_quotes_v" USING btree ("_parent_id");
  CREATE INDEX "_test_stack_v_order_idx" ON "_test_stack_v" USING btree ("_order");
  CREATE INDEX "_test_stack_v_parent_id_idx" ON "_test_stack_v" USING btree ("_parent_id");
  CREATE INDEX "_test_stack_v_path_idx" ON "_test_stack_v" USING btree ("_path");
  CREATE INDEX "_feat_v_order_idx" ON "_feat_v" USING btree ("_order");
  CREATE INDEX "_feat_v_parent_id_idx" ON "_feat_v" USING btree ("_parent_id");
  CREATE INDEX "_plans_v_links_order_idx" ON "_plans_v_links" USING btree ("_order");
  CREATE INDEX "_plans_v_links_parent_id_idx" ON "_plans_v_links" USING btree ("_parent_id");
  CREATE INDEX "_plans_v_order_idx" ON "_plans_v" USING btree ("_order");
  CREATE INDEX "_plans_v_parent_id_idx" ON "_plans_v" USING btree ("_parent_id");
  CREATE INDEX "_price_grid_v_order_idx" ON "_price_grid_v" USING btree ("_order");
  CREATE INDEX "_price_grid_v_parent_id_idx" ON "_price_grid_v" USING btree ("_parent_id");
  CREATE INDEX "_price_grid_v_path_idx" ON "_price_grid_v" USING btree ("_path");
  CREATE INDEX "_steps_v_order_idx" ON "_steps_v" USING btree ("_order");
  CREATE INDEX "_steps_v_parent_id_idx" ON "_steps_v" USING btree ("_parent_id");
  CREATE INDEX "_steps_v_media_idx" ON "_steps_v" USING btree ("media_id");
  CREATE INDEX "_proc_steps_v_order_idx" ON "_proc_steps_v" USING btree ("_order");
  CREATE INDEX "_proc_steps_v_parent_id_idx" ON "_proc_steps_v" USING btree ("_parent_id");
  CREATE INDEX "_proc_steps_v_path_idx" ON "_proc_steps_v" USING btree ("_path");
  CREATE INDEX "_metrics_v_order_idx" ON "_metrics_v" USING btree ("_order");
  CREATE INDEX "_metrics_v_parent_id_idx" ON "_metrics_v" USING btree ("_parent_id");
  CREATE INDEX "_metrics_dash_v_order_idx" ON "_metrics_dash_v" USING btree ("_order");
  CREATE INDEX "_metrics_dash_v_parent_id_idx" ON "_metrics_dash_v" USING btree ("_parent_id");
  CREATE INDEX "_metrics_dash_v_path_idx" ON "_metrics_dash_v" USING btree ("_path");
  CREATE INDEX "_cols_v_order_idx" ON "_cols_v" USING btree ("_order");
  CREATE INDEX "_cols_v_parent_id_idx" ON "_cols_v" USING btree ("_parent_id");
  CREATE INDEX "_cells_v_order_idx" ON "_cells_v" USING btree ("_order");
  CREATE INDEX "_cells_v_parent_id_idx" ON "_cells_v" USING btree ("_parent_id");
  CREATE INDEX "_rows_v_order_idx" ON "_rows_v" USING btree ("_order");
  CREATE INDEX "_rows_v_parent_id_idx" ON "_rows_v" USING btree ("_parent_id");
  CREATE INDEX "_comp_tbl_v_order_idx" ON "_comp_tbl_v" USING btree ("_order");
  CREATE INDEX "_comp_tbl_v_parent_id_idx" ON "_comp_tbl_v" USING btree ("_parent_id");
  CREATE INDEX "_comp_tbl_v_path_idx" ON "_comp_tbl_v" USING btree ("_path");
  CREATE INDEX "_panels_v_order_idx" ON "_panels_v" USING btree ("_order");
  CREATE INDEX "_panels_v_parent_id_idx" ON "_panels_v" USING btree ("_parent_id");
  CREATE INDEX "_panels_v_media_idx" ON "_panels_v" USING btree ("media_id");
  CREATE INDEX "_sticky_story_v_order_idx" ON "_sticky_story_v" USING btree ("_order");
  CREATE INDEX "_sticky_story_v_parent_id_idx" ON "_sticky_story_v" USING btree ("_parent_id");
  CREATE INDEX "_sticky_story_v_path_idx" ON "_sticky_story_v" USING btree ("_path");
  CREATE INDEX "_media_mosaic_v_order_idx" ON "_media_mosaic_v" USING btree ("_order");
  CREATE INDEX "_media_mosaic_v_parent_id_idx" ON "_media_mosaic_v" USING btree ("_parent_id");
  CREATE INDEX "_media_mosaic_v_path_idx" ON "_media_mosaic_v" USING btree ("_path");
  CREATE INDEX "_tabs_v_links_order_idx" ON "_tabs_v_links" USING btree ("_order");
  CREATE INDEX "_tabs_v_links_parent_id_idx" ON "_tabs_v_links" USING btree ("_parent_id");
  CREATE INDEX "_tabs_v_order_idx" ON "_tabs_v" USING btree ("_order");
  CREATE INDEX "_tabs_v_parent_id_idx" ON "_tabs_v" USING btree ("_parent_id");
  CREATE INDEX "_tabs_v_media_idx" ON "_tabs_v" USING btree ("media_id");
  CREATE INDEX "_feat_tabs_v_order_idx" ON "_feat_tabs_v" USING btree ("_order");
  CREATE INDEX "_feat_tabs_v_parent_id_idx" ON "_feat_tabs_v" USING btree ("_parent_id");
  CREATE INDEX "_feat_tabs_v_path_idx" ON "_feat_tabs_v" USING btree ("_path");
  CREATE INDEX "_cats_v_order_idx" ON "_cats_v" USING btree ("_order");
  CREATE INDEX "_cats_v_parent_id_idx" ON "_cats_v" USING btree ("_parent_id");
  CREATE INDEX "_faq_grid_v_order_idx" ON "_faq_grid_v" USING btree ("_order");
  CREATE INDEX "_faq_grid_v_parent_id_idx" ON "_faq_grid_v" USING btree ("_parent_id");
  CREATE INDEX "_faq_grid_v_path_idx" ON "_faq_grid_v" USING btree ("_path");
  CREATE INDEX "_cta_band_v_links_order_idx" ON "_cta_band_v_links" USING btree ("_order");
  CREATE INDEX "_cta_band_v_links_parent_id_idx" ON "_cta_band_v_links" USING btree ("_parent_id");
  CREATE INDEX "_cta_band_v_order_idx" ON "_cta_band_v" USING btree ("_order");
  CREATE INDEX "_cta_band_v_parent_id_idx" ON "_cta_band_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_band_v_path_idx" ON "_cta_band_v" USING btree ("_path");
  CREATE INDEX "_cta_band_v_media_idx" ON "_cta_band_v" USING btree ("media_id");
  CREATE INDEX "_memb_v_links_order_idx" ON "_memb_v_links" USING btree ("_order");
  CREATE INDEX "_memb_v_links_parent_id_idx" ON "_memb_v_links" USING btree ("_parent_id");
  CREATE INDEX "_memb_v_order_idx" ON "_memb_v" USING btree ("_order");
  CREATE INDEX "_memb_v_parent_id_idx" ON "_memb_v" USING btree ("_parent_id");
  CREATE INDEX "_memb_v_photo_idx" ON "_memb_v" USING btree ("photo_id");
  CREATE INDEX "_team_grid_v_order_idx" ON "_team_grid_v" USING btree ("_order");
  CREATE INDEX "_team_grid_v_parent_id_idx" ON "_team_grid_v" USING btree ("_parent_id");
  CREATE INDEX "_team_grid_v_path_idx" ON "_team_grid_v" USING btree ("_path");
  CREATE INDEX "_results_v_order_idx" ON "_results_v" USING btree ("_order");
  CREATE INDEX "_results_v_parent_id_idx" ON "_results_v" USING btree ("_parent_id");
  CREATE INDEX "_studies_v_links_order_idx" ON "_studies_v_links" USING btree ("_order");
  CREATE INDEX "_studies_v_links_parent_id_idx" ON "_studies_v_links" USING btree ("_parent_id");
  CREATE INDEX "_studies_v_order_idx" ON "_studies_v" USING btree ("_order");
  CREATE INDEX "_studies_v_parent_id_idx" ON "_studies_v" USING btree ("_parent_id");
  CREATE INDEX "_studies_v_media_idx" ON "_studies_v" USING btree ("media_id");
  CREATE INDEX "_case_prev_v_order_idx" ON "_case_prev_v" USING btree ("_order");
  CREATE INDEX "_case_prev_v_parent_id_idx" ON "_case_prev_v" USING btree ("_parent_id");
  CREATE INDEX "_case_prev_v_path_idx" ON "_case_prev_v" USING btree ("_path");
  CREATE INDEX "_sess_v_order_idx" ON "_sess_v" USING btree ("_order");
  CREATE INDEX "_sess_v_parent_id_idx" ON "_sess_v" USING btree ("_parent_id");
  CREATE INDEX "_days_v_order_idx" ON "_days_v" USING btree ("_order");
  CREATE INDEX "_days_v_parent_id_idx" ON "_days_v" USING btree ("_parent_id");
  CREATE INDEX "_event_sched_v_order_idx" ON "_event_sched_v" USING btree ("_order");
  CREATE INDEX "_event_sched_v_parent_id_idx" ON "_event_sched_v" USING btree ("_parent_id");
  CREATE INDEX "_event_sched_v_path_idx" ON "_event_sched_v" USING btree ("_path");
  CREATE INDEX "_quote_marq_v_order_idx" ON "_quote_marq_v" USING btree ("_order");
  CREATE INDEX "_quote_marq_v_parent_id_idx" ON "_quote_marq_v" USING btree ("_parent_id");
  CREATE INDEX "_quote_marq_v_path_idx" ON "_quote_marq_v" USING btree ("_path");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v" USING btree ("version_hero_media_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "media_folder_idx" ON "media" USING btree ("folder_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_folders_folder_type_order_idx" ON "payload_folders_folder_type" USING btree ("order");
  CREATE INDEX "payload_folders_folder_type_parent_idx" ON "payload_folders_folder_type" USING btree ("parent_id");
  CREATE INDEX "payload_folders_name_idx" ON "payload_folders" USING btree ("name");
  CREATE INDEX "payload_folders_folder_idx" ON "payload_folders" USING btree ("folder_id");
  CREATE INDEX "payload_folders_updated_at_idx" ON "payload_folders" USING btree ("updated_at");
  CREATE INDEX "payload_folders_created_at_idx" ON "payload_folders" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_payload_folders_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_folders_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "footer_nav_items_order_idx" ON "footer_nav_items" USING btree ("_order");
  CREATE INDEX "footer_nav_items_parent_id_idx" ON "footer_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_timeline_items_links" CASCADE;
  DROP TABLE "pages_blocks_timeline_items" CASCADE;
  DROP TABLE "pages_blocks_timeline" CASCADE;
  DROP TABLE "items_links" CASCADE;
  DROP TABLE "items" CASCADE;
  DROP TABLE "feat_show" CASCADE;
  DROP TABLE "pages_blocks_accordion_items" CASCADE;
  DROP TABLE "pages_blocks_accordion" CASCADE;
  DROP TABLE "pages_blocks_stats_band_items" CASCADE;
  DROP TABLE "pages_blocks_stats_band" CASCADE;
  DROP TABLE "logos" CASCADE;
  DROP TABLE "logo_rail" CASCADE;
  DROP TABLE "quotes" CASCADE;
  DROP TABLE "test_stack" CASCADE;
  DROP TABLE "feat" CASCADE;
  DROP TABLE "plans_links" CASCADE;
  DROP TABLE "plans" CASCADE;
  DROP TABLE "price_grid" CASCADE;
  DROP TABLE "steps" CASCADE;
  DROP TABLE "proc_steps" CASCADE;
  DROP TABLE "metrics" CASCADE;
  DROP TABLE "metrics_dash" CASCADE;
  DROP TABLE "cols" CASCADE;
  DROP TABLE "cells" CASCADE;
  DROP TABLE "rows" CASCADE;
  DROP TABLE "comp_tbl" CASCADE;
  DROP TABLE "panels" CASCADE;
  DROP TABLE "sticky_story" CASCADE;
  DROP TABLE "media_mosaic" CASCADE;
  DROP TABLE "tabs_links" CASCADE;
  DROP TABLE "tabs" CASCADE;
  DROP TABLE "feat_tabs" CASCADE;
  DROP TABLE "cats" CASCADE;
  DROP TABLE "faq_grid" CASCADE;
  DROP TABLE "cta_band_links" CASCADE;
  DROP TABLE "cta_band" CASCADE;
  DROP TABLE "memb_links" CASCADE;
  DROP TABLE "memb" CASCADE;
  DROP TABLE "team_grid" CASCADE;
  DROP TABLE "results" CASCADE;
  DROP TABLE "studies_links" CASCADE;
  DROP TABLE "studies" CASCADE;
  DROP TABLE "case_prev" CASCADE;
  DROP TABLE "sess" CASCADE;
  DROP TABLE "days" CASCADE;
  DROP TABLE "event_sched" CASCADE;
  DROP TABLE "quote_marq" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items_links" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline_items" CASCADE;
  DROP TABLE "_pages_v_blocks_timeline" CASCADE;
  DROP TABLE "_items_v_links" CASCADE;
  DROP TABLE "_items_v" CASCADE;
  DROP TABLE "_feat_show_v" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion_items" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_band_items" CASCADE;
  DROP TABLE "_pages_v_blocks_stats_band" CASCADE;
  DROP TABLE "_logos_v" CASCADE;
  DROP TABLE "_logo_rail_v" CASCADE;
  DROP TABLE "_quotes_v" CASCADE;
  DROP TABLE "_test_stack_v" CASCADE;
  DROP TABLE "_feat_v" CASCADE;
  DROP TABLE "_plans_v_links" CASCADE;
  DROP TABLE "_plans_v" CASCADE;
  DROP TABLE "_price_grid_v" CASCADE;
  DROP TABLE "_steps_v" CASCADE;
  DROP TABLE "_proc_steps_v" CASCADE;
  DROP TABLE "_metrics_v" CASCADE;
  DROP TABLE "_metrics_dash_v" CASCADE;
  DROP TABLE "_cols_v" CASCADE;
  DROP TABLE "_cells_v" CASCADE;
  DROP TABLE "_rows_v" CASCADE;
  DROP TABLE "_comp_tbl_v" CASCADE;
  DROP TABLE "_panels_v" CASCADE;
  DROP TABLE "_sticky_story_v" CASCADE;
  DROP TABLE "_media_mosaic_v" CASCADE;
  DROP TABLE "_tabs_v_links" CASCADE;
  DROP TABLE "_tabs_v" CASCADE;
  DROP TABLE "_feat_tabs_v" CASCADE;
  DROP TABLE "_cats_v" CASCADE;
  DROP TABLE "_faq_grid_v" CASCADE;
  DROP TABLE "_cta_band_v_links" CASCADE;
  DROP TABLE "_cta_band_v" CASCADE;
  DROP TABLE "_memb_v_links" CASCADE;
  DROP TABLE "_memb_v" CASCADE;
  DROP TABLE "_team_grid_v" CASCADE;
  DROP TABLE "_results_v" CASCADE;
  DROP TABLE "_studies_v_links" CASCADE;
  DROP TABLE "_studies_v" CASCADE;
  DROP TABLE "_case_prev_v" CASCADE;
  DROP TABLE "_sess_v" CASCADE;
  DROP TABLE "_days_v" CASCADE;
  DROP TABLE "_event_sched_v" CASCADE;
  DROP TABLE "_quote_marq_v" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_folders_folder_type" CASCADE;
  DROP TABLE "payload_folders" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_nav_items" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."link_appearance";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_timeline_items_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_timeline_motion_section_animation";
  DROP TYPE "public"."enum_pages_blocks_timeline_motion_intro_animation";
  DROP TYPE "public"."enum_pages_blocks_timeline_motion_item_animation";
  DROP TYPE "public"."enum_items_links_link_type";
  DROP TYPE "public"."enum_feat_show_motion_section_animation";
  DROP TYPE "public"."enum_feat_show_motion_intro_animation";
  DROP TYPE "public"."enum_feat_show_motion_item_animation";
  DROP TYPE "public"."enum_pages_blocks_accordion_motion_section_animation";
  DROP TYPE "public"."enum_pages_blocks_accordion_motion_intro_animation";
  DROP TYPE "public"."enum_pages_blocks_accordion_motion_item_animation";
  DROP TYPE "public"."enum_pages_blocks_stats_band_motion_section_animation";
  DROP TYPE "public"."enum_pages_blocks_stats_band_motion_intro_animation";
  DROP TYPE "public"."enum_pages_blocks_stats_band_motion_item_animation";
  DROP TYPE "public"."enum_logo_rail_motion_section_animation";
  DROP TYPE "public"."enum_logo_rail_motion_intro_animation";
  DROP TYPE "public"."enum_logo_rail_motion_item_animation";
  DROP TYPE "public"."enum_test_stack_motion_section_animation";
  DROP TYPE "public"."enum_test_stack_motion_intro_animation";
  DROP TYPE "public"."enum_test_stack_motion_item_animation";
  DROP TYPE "public"."enum_plans_links_link_type";
  DROP TYPE "public"."enum_price_grid_motion_section_animation";
  DROP TYPE "public"."enum_price_grid_motion_intro_animation";
  DROP TYPE "public"."enum_price_grid_motion_item_animation";
  DROP TYPE "public"."enum_proc_steps_motion_section_animation";
  DROP TYPE "public"."enum_proc_steps_motion_intro_animation";
  DROP TYPE "public"."enum_proc_steps_motion_item_animation";
  DROP TYPE "public"."enum_metrics_dash_motion_section_animation";
  DROP TYPE "public"."enum_metrics_dash_motion_intro_animation";
  DROP TYPE "public"."enum_metrics_dash_motion_item_animation";
  DROP TYPE "public"."enum_comp_tbl_motion_section_animation";
  DROP TYPE "public"."enum_comp_tbl_motion_intro_animation";
  DROP TYPE "public"."enum_comp_tbl_motion_item_animation";
  DROP TYPE "public"."enum_sticky_story_motion_section_animation";
  DROP TYPE "public"."enum_sticky_story_motion_intro_animation";
  DROP TYPE "public"."enum_sticky_story_motion_item_animation";
  DROP TYPE "public"."enum_media_mosaic_motion_section_animation";
  DROP TYPE "public"."enum_media_mosaic_motion_intro_animation";
  DROP TYPE "public"."enum_media_mosaic_motion_item_animation";
  DROP TYPE "public"."enum_tabs_links_link_type";
  DROP TYPE "public"."enum_feat_tabs_motion_section_animation";
  DROP TYPE "public"."enum_feat_tabs_motion_intro_animation";
  DROP TYPE "public"."enum_feat_tabs_motion_item_animation";
  DROP TYPE "public"."enum_faq_grid_motion_section_animation";
  DROP TYPE "public"."enum_faq_grid_motion_intro_animation";
  DROP TYPE "public"."enum_faq_grid_motion_item_animation";
  DROP TYPE "public"."enum_cta_band_links_link_type";
  DROP TYPE "public"."enum_cta_band_motion_section_animation";
  DROP TYPE "public"."enum_cta_band_motion_intro_animation";
  DROP TYPE "public"."enum_cta_band_motion_item_animation";
  DROP TYPE "public"."enum_memb_links_link_type";
  DROP TYPE "public"."enum_team_grid_motion_section_animation";
  DROP TYPE "public"."enum_team_grid_motion_intro_animation";
  DROP TYPE "public"."enum_team_grid_motion_item_animation";
  DROP TYPE "public"."enum_studies_links_link_type";
  DROP TYPE "public"."enum_case_prev_motion_section_animation";
  DROP TYPE "public"."enum_case_prev_motion_intro_animation";
  DROP TYPE "public"."enum_case_prev_motion_item_animation";
  DROP TYPE "public"."enum_event_sched_motion_section_animation";
  DROP TYPE "public"."enum_event_sched_motion_intro_animation";
  DROP TYPE "public"."enum_event_sched_motion_item_animation";
  DROP TYPE "public"."enum_quote_marq_motion_section_animation";
  DROP TYPE "public"."enum_quote_marq_motion_intro_animation";
  DROP TYPE "public"."enum_quote_marq_motion_item_animation";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_items_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_motion_section_animation";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_motion_intro_animation";
  DROP TYPE "public"."enum__pages_v_blocks_timeline_motion_item_animation";
  DROP TYPE "public"."enum__items_v_links_link_type";
  DROP TYPE "public"."enum__feat_show_v_motion_section_animation";
  DROP TYPE "public"."enum__feat_show_v_motion_intro_animation";
  DROP TYPE "public"."enum__feat_show_v_motion_item_animation";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_motion_section_animation";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_motion_intro_animation";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_motion_item_animation";
  DROP TYPE "public"."enum__pages_v_blocks_stats_band_motion_section_animation";
  DROP TYPE "public"."enum__pages_v_blocks_stats_band_motion_intro_animation";
  DROP TYPE "public"."enum__pages_v_blocks_stats_band_motion_item_animation";
  DROP TYPE "public"."enum__logo_rail_v_motion_section_animation";
  DROP TYPE "public"."enum__logo_rail_v_motion_intro_animation";
  DROP TYPE "public"."enum__logo_rail_v_motion_item_animation";
  DROP TYPE "public"."enum__test_stack_v_motion_section_animation";
  DROP TYPE "public"."enum__test_stack_v_motion_intro_animation";
  DROP TYPE "public"."enum__test_stack_v_motion_item_animation";
  DROP TYPE "public"."enum__plans_v_links_link_type";
  DROP TYPE "public"."enum__price_grid_v_motion_section_animation";
  DROP TYPE "public"."enum__price_grid_v_motion_intro_animation";
  DROP TYPE "public"."enum__price_grid_v_motion_item_animation";
  DROP TYPE "public"."enum__proc_steps_v_motion_section_animation";
  DROP TYPE "public"."enum__proc_steps_v_motion_intro_animation";
  DROP TYPE "public"."enum__proc_steps_v_motion_item_animation";
  DROP TYPE "public"."enum__metrics_dash_v_motion_section_animation";
  DROP TYPE "public"."enum__metrics_dash_v_motion_intro_animation";
  DROP TYPE "public"."enum__metrics_dash_v_motion_item_animation";
  DROP TYPE "public"."enum__comp_tbl_v_motion_section_animation";
  DROP TYPE "public"."enum__comp_tbl_v_motion_intro_animation";
  DROP TYPE "public"."enum__comp_tbl_v_motion_item_animation";
  DROP TYPE "public"."enum__sticky_story_v_motion_section_animation";
  DROP TYPE "public"."enum__sticky_story_v_motion_intro_animation";
  DROP TYPE "public"."enum__sticky_story_v_motion_item_animation";
  DROP TYPE "public"."enum__media_mosaic_v_motion_section_animation";
  DROP TYPE "public"."enum__media_mosaic_v_motion_intro_animation";
  DROP TYPE "public"."enum__media_mosaic_v_motion_item_animation";
  DROP TYPE "public"."enum__tabs_v_links_link_type";
  DROP TYPE "public"."enum__feat_tabs_v_motion_section_animation";
  DROP TYPE "public"."enum__feat_tabs_v_motion_intro_animation";
  DROP TYPE "public"."enum__feat_tabs_v_motion_item_animation";
  DROP TYPE "public"."enum__faq_grid_v_motion_section_animation";
  DROP TYPE "public"."enum__faq_grid_v_motion_intro_animation";
  DROP TYPE "public"."enum__faq_grid_v_motion_item_animation";
  DROP TYPE "public"."enum__cta_band_v_links_link_type";
  DROP TYPE "public"."enum__cta_band_v_motion_section_animation";
  DROP TYPE "public"."enum__cta_band_v_motion_intro_animation";
  DROP TYPE "public"."enum__cta_band_v_motion_item_animation";
  DROP TYPE "public"."enum__memb_v_links_link_type";
  DROP TYPE "public"."enum__team_grid_v_motion_section_animation";
  DROP TYPE "public"."enum__team_grid_v_motion_intro_animation";
  DROP TYPE "public"."enum__team_grid_v_motion_item_animation";
  DROP TYPE "public"."enum__studies_v_links_link_type";
  DROP TYPE "public"."enum__case_prev_v_motion_section_animation";
  DROP TYPE "public"."enum__case_prev_v_motion_intro_animation";
  DROP TYPE "public"."enum__case_prev_v_motion_item_animation";
  DROP TYPE "public"."enum__event_sched_v_motion_section_animation";
  DROP TYPE "public"."enum__event_sched_v_motion_intro_animation";
  DROP TYPE "public"."enum__event_sched_v_motion_item_animation";
  DROP TYPE "public"."enum__quote_marq_v_motion_section_animation";
  DROP TYPE "public"."enum__quote_marq_v_motion_intro_animation";
  DROP TYPE "public"."enum__quote_marq_v_motion_item_animation";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_folders_folder_type";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_footer_nav_items_link_type";`)
}
