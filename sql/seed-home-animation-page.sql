-- Rerunnable homepage seed for animated block demos.
-- This replaces the `home` page with a motion-focused landing page
-- using the stable animated blocks currently present in the schema:
--   - statsBand
--   - timeline
--   - accordion
--
-- Run against the same Postgres database used by Payload.

CREATE OR REPLACE FUNCTION pg_temp.seed_block_id() RETURNS text AS $$
  SELECT substr(md5(random()::text || clock_timestamp()::text), 1, 24);
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION pg_temp.seed_rich_text(seed_text text) RETURNS jsonb AS $$
  SELECT jsonb_build_object(
    'root',
    jsonb_build_object(
      'type', 'root',
      'format', '',
      'indent', 0,
      'version', 1,
      'children',
      jsonb_build_array(
        jsonb_build_object(
          'type', 'paragraph',
          'format', '',
          'indent', 0,
          'version', 1,
          'children',
          jsonb_build_array(
            jsonb_build_object(
              'mode', 'normal',
              'text', seed_text,
              'type', 'text',
              'style', '',
              'detail', 0,
              'format', 0,
              'version', 1
            )
          ),
          'direction', NULL,
          'textStyle', '',
          'textFormat', 0
        )
      ),
      'direction', NULL
    )
  );
$$ LANGUAGE sql;

DO $$
DECLARE
  home_page_id int;
  home_version_id int;

  live_stats_id text;
  live_timeline_id text;
  live_accordion_id text;

  live_timeline_item_1 text;
  live_timeline_item_2 text;
  live_timeline_item_3 text;
  live_timeline_item_4 text;

  version_stats_id int;
  version_timeline_id int;
  version_accordion_id int;

  version_timeline_item_1_id int;
  version_timeline_item_2_id int;
  version_timeline_item_3_id int;
  version_timeline_item_4_id int;
BEGIN
  DELETE FROM _pages_v
  WHERE parent_id IN (
    SELECT id FROM pages WHERE slug = 'home'
  );

  DELETE FROM pages
  WHERE slug = 'home';

  INSERT INTO pages (
    title,
    hero_type,
    hero_rich_text,
    published_at,
    generate_slug,
    slug,
    _status
  )
  VALUES (
    'Home',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A motion-first homepage seeded directly in SQL so you can review dramatic reveal patterns without depending on the admin UI.'
    ),
    now(),
    false,
    'home',
    'published'
  )
  RETURNING id INTO home_page_id;

  INSERT INTO _pages_v (
    parent_id,
    version_title,
    version_hero_type,
    version_hero_rich_text,
    version_published_at,
    version_generate_slug,
    version_slug,
    version_updated_at,
    version_created_at,
    version__status,
    latest,
    autosave
  )
  VALUES (
    home_page_id,
    'Home',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A motion-first homepage seeded directly in SQL so you can review dramatic reveal patterns without depending on the admin UI.'
    ),
    now(),
    false,
    'home',
    now(),
    now(),
    'published',
    true,
    false
  )
  RETURNING id INTO home_version_id;

  live_stats_id := pg_temp.seed_block_id();

  INSERT INTO pages_blocks_stats_band (
    _order,
    _parent_id,
    _path,
    id,
    eyebrow,
    title,
    intro,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    1,
    home_page_id,
    'layout',
    live_stats_id,
    'Motion Snapshot',
    'Homepage Motion Metrics',
    pg_temp.seed_rich_text(
      'The first section is tuned to make reveal timing obvious as soon as the homepage loads.'
    ),
    'Home Motion Stats',
    'soft-scale',
    'fly-up',
    'fly-up',
    220
  );

  INSERT INTO pages_blocks_stats_band_items (_order, _parent_id, id, value, label, description)
  VALUES
    (1, live_stats_id, pg_temp.seed_block_id(), '3', 'Animated Blocks', 'The homepage starts with three motion-focused sections for quick QA.'),
    (2, live_stats_id, pg_temp.seed_block_id(), '220ms', 'Opening Stagger', 'The first section uses a moderate stagger so the cascade is easy to inspect.'),
    (3, live_stats_id, pg_temp.seed_block_id(), '2 Pages', 'Demo Coverage', 'Use this homepage together with the motion lab pages for broader testing.'),
    (4, live_stats_id, pg_temp.seed_block_id(), '100%', 'Visible Motion', 'Each pattern is intentionally configured so movement is easy to notice.');

  INSERT INTO _pages_v_blocks_stats_band (
    _order,
    _parent_id,
    _path,
    eyebrow,
    title,
    intro,
    _uuid,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    1,
    home_version_id,
    'layout',
    'Motion Snapshot',
    'Homepage Motion Metrics',
    pg_temp.seed_rich_text(
      'The first section is tuned to make reveal timing obvious as soon as the homepage loads.'
    ),
    live_stats_id,
    'Home Motion Stats',
    'soft-scale',
    'fly-up',
    'fly-up',
    220
  )
  RETURNING id INTO version_stats_id;

  INSERT INTO _pages_v_blocks_stats_band_items (_order, _parent_id, value, label, description, _uuid)
  VALUES
    (1, version_stats_id, '3', 'Animated Blocks', 'The homepage starts with three motion-focused sections for quick QA.', pg_temp.seed_block_id()),
    (2, version_stats_id, '220ms', 'Opening Stagger', 'The first section uses a moderate stagger so the cascade is easy to inspect.', pg_temp.seed_block_id()),
    (3, version_stats_id, '2 Pages', 'Demo Coverage', 'Use this homepage together with the motion lab pages for broader testing.', pg_temp.seed_block_id()),
    (4, version_stats_id, '100%', 'Visible Motion', 'Each pattern is intentionally configured so movement is easy to notice.', pg_temp.seed_block_id());

  live_timeline_id := pg_temp.seed_block_id();
  live_timeline_item_1 := pg_temp.seed_block_id();
  live_timeline_item_2 := pg_temp.seed_block_id();
  live_timeline_item_3 := pg_temp.seed_block_id();
  live_timeline_item_4 := pg_temp.seed_block_id();

  INSERT INTO pages_blocks_timeline (
    _order,
    _parent_id,
    _path,
    id,
    eyebrow,
    title,
    intro,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    2,
    home_page_id,
    'layout',
    live_timeline_id,
    'Reveal Order',
    'How To Review The Motion System',
    pg_temp.seed_rich_text(
      'This timeline alternates left and right so you can validate the side-based preset on the homepage itself.'
    ),
    'Home Motion Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    260
  );

  INSERT INTO pages_blocks_timeline_items (_order, _parent_id, id, period, title, description)
  VALUES
    (1, live_timeline_id, live_timeline_item_1, 'Pass 01', 'Watch the first stat cascade', pg_temp.seed_rich_text('The opening metric cards should reveal before this timeline enters view.')),
    (2, live_timeline_id, live_timeline_item_2, 'Pass 02', 'Confirm side switching', pg_temp.seed_rich_text('Each row alternates direction so the preset is visually obvious.')),
    (3, live_timeline_id, live_timeline_item_3, 'Pass 03', 'Check lower-page persistence', pg_temp.seed_rich_text('Motion should still work even after several earlier sections have already animated.')),
    (4, live_timeline_id, live_timeline_item_4, 'Pass 04', 'Continue into interaction', pg_temp.seed_rich_text('The accordion below adds an interactive pattern after the stacked scroll reveals.'));

  INSERT INTO _pages_v_blocks_timeline (
    _order,
    _parent_id,
    _path,
    eyebrow,
    title,
    intro,
    _uuid,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    2,
    home_version_id,
    'layout',
    'Reveal Order',
    'How To Review The Motion System',
    pg_temp.seed_rich_text(
      'This timeline alternates left and right so you can validate the side-based preset on the homepage itself.'
    ),
    live_timeline_id,
    'Home Motion Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    260
  )
  RETURNING id INTO version_timeline_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    1,
    version_timeline_id,
    'Pass 01',
    'Watch the first stat cascade',
    pg_temp.seed_rich_text('The opening metric cards should reveal before this timeline enters view.'),
    live_timeline_item_1
  )
  RETURNING id INTO version_timeline_item_1_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    2,
    version_timeline_id,
    'Pass 02',
    'Confirm side switching',
    pg_temp.seed_rich_text('Each row alternates direction so the preset is visually obvious.'),
    live_timeline_item_2
  )
  RETURNING id INTO version_timeline_item_2_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    3,
    version_timeline_id,
    'Pass 03',
    'Check lower-page persistence',
    pg_temp.seed_rich_text('Motion should still work even after several earlier sections have already animated.'),
    live_timeline_item_3
  )
  RETURNING id INTO version_timeline_item_3_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    4,
    version_timeline_id,
    'Pass 04',
    'Continue into interaction',
    pg_temp.seed_rich_text('The accordion below adds an interactive pattern after the stacked scroll reveals.'),
    live_timeline_item_4
  )
  RETURNING id INTO version_timeline_item_4_id;

  live_accordion_id := pg_temp.seed_block_id();

  INSERT INTO pages_blocks_accordion (
    _order,
    _parent_id,
    _path,
    id,
    eyebrow,
    title,
    intro,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    3,
    home_page_id,
    'layout',
    live_accordion_id,
    'Interaction Check',
    'Accordion With Deliberate Entry Motion',
    pg_temp.seed_rich_text(
      'This final section verifies that interactive content still feels good after multiple reveal animations above it.'
    ),
    'Home Motion Accordion',
    'none',
    'fly-left',
    'alternate-sides',
    180
  );

  INSERT INTO pages_blocks_accordion_items (_order, _parent_id, id, title, content, default_open)
  VALUES
    (1, live_accordion_id, pg_temp.seed_block_id(), 'What should happen first?', pg_temp.seed_rich_text('The intro column should enter before the accordion cards begin cascading.'), true),
    (2, live_accordion_id, pg_temp.seed_block_id(), 'Why use alternating sides here?', pg_temp.seed_rich_text('It makes each row easier to distinguish while testing animation order and timing.'), false),
    (3, live_accordion_id, pg_temp.seed_block_id(), 'Can this become a calmer homepage later?', pg_temp.seed_rich_text('Yes. Lower the stagger values and switch side-based presets back to fly-up or none.'), false);

  INSERT INTO _pages_v_blocks_accordion (
    _order,
    _parent_id,
    _path,
    eyebrow,
    title,
    intro,
    _uuid,
    block_name,
    motion_section_animation,
    motion_intro_animation,
    motion_item_animation,
    motion_stagger
  )
  VALUES (
    3,
    home_version_id,
    'layout',
    'Interaction Check',
    'Accordion With Deliberate Entry Motion',
    pg_temp.seed_rich_text(
      'This final section verifies that interactive content still feels good after multiple reveal animations above it.'
    ),
    live_accordion_id,
    'Home Motion Accordion',
    'none',
    'fly-left',
    'alternate-sides',
    180
  )
  RETURNING id INTO version_accordion_id;

  INSERT INTO _pages_v_blocks_accordion_items (_order, _parent_id, title, content, default_open, _uuid)
  VALUES
    (1, version_accordion_id, 'What should happen first?', pg_temp.seed_rich_text('The intro column should enter before the accordion cards begin cascading.'), true, pg_temp.seed_block_id()),
    (2, version_accordion_id, 'Why use alternating sides here?', pg_temp.seed_rich_text('It makes each row easier to distinguish while testing animation order and timing.'), false, pg_temp.seed_block_id()),
    (3, version_accordion_id, 'Can this become a calmer homepage later?', pg_temp.seed_rich_text('Yes. Lower the stagger values and switch side-based presets back to fly-up or none.'), false, pg_temp.seed_block_id());
END;
$$;
