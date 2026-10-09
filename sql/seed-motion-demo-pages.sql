-- Rerunnable demo content for the animated Payload blocks.
-- This seeds two pages with exaggerated motion settings:
--   /motion-lab
--   /motion-showcase
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
  motion_lab_page_id int;
  motion_lab_version_id int;
  motion_showcase_page_id int;
  motion_showcase_version_id int;

  live_stats_id text;
  live_timeline_id text;
  live_accordion_id text;
  live_feature_id text;

  live_timeline_item_1 text;
  live_timeline_item_2 text;
  live_timeline_item_3 text;
  live_timeline_item_4 text;
  live_feature_item_1 text;
  live_feature_item_2 text;
  live_feature_item_3 text;

  version_stats_id int;
  version_timeline_id int;
  version_accordion_id int;
  version_feature_id int;
  version_timeline_item_id int;
  version_feature_item_id int;
  version_feature_item_1_id int;
  version_feature_item_2_id int;
  version_feature_item_3_id int;
  version_timeline_item_1_id int;
  version_timeline_item_2_id int;
  version_timeline_item_3_id int;
  version_timeline_item_4_id int;
BEGIN
  DELETE FROM _pages_v
  WHERE parent_id IN (
    SELECT id FROM pages WHERE slug IN ('motion-lab', 'motion-showcase')
  );

  DELETE FROM pages
  WHERE slug IN ('motion-lab', 'motion-showcase');

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
    'Motion Lab',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A seeded demo page with intentionally exaggerated motion so reveals, fly-ins, and stagger timing are easy to notice.'
    ),
    now(),
    false,
    'motion-lab',
    'published'
  )
  RETURNING id INTO motion_lab_page_id;

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
    motion_lab_page_id,
    'Motion Lab',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A seeded demo page with intentionally exaggerated motion so reveals, fly-ins, and stagger timing are easy to notice.'
    ),
    now(),
    false,
    'motion-lab',
    now(),
    now(),
    'published',
    true,
    false
  )
  RETURNING id INTO motion_lab_version_id;

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
    motion_lab_page_id,
    'layout',
    live_stats_id,
    'Exaggerated Scale',
    'Stats That Slam Into View',
    pg_temp.seed_rich_text(
      'This block uses a strong soft-scale entrance and slow stagger so the motion is obvious on first load.'
    ),
    'Motion Lab Stats',
    'soft-scale',
    'fly-up',
    'fly-up',
    320
  );

  INSERT INTO pages_blocks_stats_band_items (_order, _parent_id, id, value, label, description)
  VALUES
    (1, live_stats_id, pg_temp.seed_block_id(), '420%', 'Reveal Intensity', 'Slow stagger and oversized values make the entrance hard to miss.'),
    (2, live_stats_id, pg_temp.seed_block_id(), '1.8s', 'Section Presence', 'The section scales in first, then the cards cascade behind it.'),
    (3, live_stats_id, pg_temp.seed_block_id(), '64px', 'Vertical Drift', 'Designed to feel theatrical instead of subtle for testing.'),
    (4, live_stats_id, pg_temp.seed_block_id(), '12/10', 'Demo Drama', 'Useful when you need to confirm motion is actually working.');

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
    motion_lab_version_id,
    'layout',
    'Exaggerated Scale',
    'Stats That Slam Into View',
    pg_temp.seed_rich_text(
      'This block uses a strong soft-scale entrance and slow stagger so the motion is obvious on first load.'
    ),
    live_stats_id,
    'Motion Lab Stats',
    'soft-scale',
    'fly-up',
    'fly-up',
    320
  )
  RETURNING id INTO version_stats_id;

  INSERT INTO _pages_v_blocks_stats_band_items (_order, _parent_id, value, label, description, _uuid)
  VALUES
    (1, version_stats_id, '420%', 'Reveal Intensity', 'Slow stagger and oversized values make the entrance hard to miss.', pg_temp.seed_block_id()),
    (2, version_stats_id, '1.8s', 'Section Presence', 'The section scales in first, then the cards cascade behind it.', pg_temp.seed_block_id()),
    (3, version_stats_id, '64px', 'Vertical Drift', 'Designed to feel theatrical instead of subtle for testing.', pg_temp.seed_block_id()),
    (4, version_stats_id, '12/10', 'Demo Drama', 'Useful when you need to confirm motion is actually working.', pg_temp.seed_block_id());

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
    motion_lab_page_id,
    'layout',
    live_timeline_id,
    'Alternate Sides',
    'Timeline Fly-Ins',
    pg_temp.seed_rich_text(
      'Each item alternates left and right with a deliberately large stagger so the effect is easy to inspect.'
    ),
    'Motion Lab Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    360
  );

  INSERT INTO pages_blocks_timeline_items (_order, _parent_id, id, period, title, description)
  VALUES
    (1, live_timeline_id, live_timeline_item_1, 'Step 01', 'Scroll until the first card appears', pg_temp.seed_rich_text('The first card should enter from one side with a noticeable delay.')),
    (2, live_timeline_id, live_timeline_item_2, 'Step 02', 'Watch the direction flip', pg_temp.seed_rich_text('The second card comes from the opposite side to make the alternation clear.')),
    (3, live_timeline_id, live_timeline_item_3, 'Step 03', 'Notice the pacing', pg_temp.seed_rich_text('The stagger is intentionally high so each reveal happens separately.')),
    (4, live_timeline_id, live_timeline_item_4, 'Step 04', 'Check link styling too', pg_temp.seed_rich_text('This last item also includes a visible button so the card reads like real content.'));

  INSERT INTO pages_blocks_timeline_items_links (_order, _parent_id, id, link_type, link_new_tab, link_url, link_label, link_appearance)
  VALUES
    (1, live_timeline_item_4, pg_temp.seed_block_id(), 'custom', false, '/motion-showcase', 'Open Motion Showcase', 'outline');

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
    motion_lab_version_id,
    'layout',
    'Alternate Sides',
    'Timeline Fly-Ins',
    pg_temp.seed_rich_text(
      'Each item alternates left and right with a deliberately large stagger so the effect is easy to inspect.'
    ),
    live_timeline_id,
    'Motion Lab Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    360
  )
  RETURNING id INTO version_timeline_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    1,
    version_timeline_id,
    'Step 01',
    'Scroll until the first card appears',
    pg_temp.seed_rich_text('The first card should enter from one side with a noticeable delay.'),
    live_timeline_item_1
  )
  RETURNING id INTO version_timeline_item_1_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    2,
    version_timeline_id,
    'Step 02',
    'Watch the direction flip',
    pg_temp.seed_rich_text('The second card comes from the opposite side to make the alternation clear.'),
    live_timeline_item_2
  )
  RETURNING id INTO version_timeline_item_2_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    3,
    version_timeline_id,
    'Step 03',
    'Notice the pacing',
    pg_temp.seed_rich_text('The stagger is intentionally high so each reveal happens separately.'),
    live_timeline_item_3
  )
  RETURNING id INTO version_timeline_item_3_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    4,
    version_timeline_id,
    'Step 04',
    'Check link styling too',
    pg_temp.seed_rich_text('This last item also includes a visible button so the card reads like real content.'),
    live_timeline_item_4
  )
  RETURNING id INTO version_timeline_item_4_id;

  INSERT INTO _pages_v_blocks_timeline_items_links (
    _order,
    _parent_id,
    link_type,
    link_new_tab,
    link_url,
    link_label,
    link_appearance,
    _uuid
  )
  VALUES (
    1,
    version_timeline_item_4_id,
    'custom',
    false,
    '/motion-showcase',
    'Open Motion Showcase',
    'outline',
    pg_temp.seed_block_id()
  );

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
    motion_lab_page_id,
    'layout',
    live_accordion_id,
    'Fly + Stagger',
    'Accordion With Deliberate Entry Motion',
    pg_temp.seed_rich_text(
      'Open and close these panels after the section reveals to confirm the scroll entrance and the native accordion behavior are both working.'
    ),
    'Motion Lab Accordion',
    'none',
    'fly-left',
    'alternate-sides',
    280
  );

  INSERT INTO pages_blocks_accordion_items (_order, _parent_id, id, title, content, default_open)
  VALUES
    (1, live_accordion_id, pg_temp.seed_block_id(), 'What should I notice first?', pg_temp.seed_rich_text('The heading column should fly in before the panels begin to cascade.'), true),
    (2, live_accordion_id, pg_temp.seed_block_id(), 'What makes this exaggerated?', pg_temp.seed_rich_text('The stagger is intentionally slow and the motion direction alternates by panel.'), false),
    (3, live_accordion_id, pg_temp.seed_block_id(), 'Does this still work as static HTML?', pg_temp.seed_rich_text('Yes. The content renders on the server first and motion progressively enhances after hydration.'), false),
    (4, live_accordion_id, pg_temp.seed_block_id(), 'How do I tone it down later?', pg_temp.seed_rich_text('Edit the Motion group in Payload and reduce the stagger or switch the preset.'), false);

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
    motion_lab_version_id,
    'layout',
    'Fly + Stagger',
    'Accordion With Deliberate Entry Motion',
    pg_temp.seed_rich_text(
      'Open and close these panels after the section reveals to confirm the scroll entrance and the native accordion behavior are both working.'
    ),
    live_accordion_id,
    'Motion Lab Accordion',
    'none',
    'fly-left',
    'alternate-sides',
    280
  )
  RETURNING id INTO version_accordion_id;

  INSERT INTO _pages_v_blocks_accordion_items (_order, _parent_id, title, content, default_open, _uuid)
  VALUES
    (1, version_accordion_id, 'What should I notice first?', pg_temp.seed_rich_text('The heading column should fly in before the panels begin to cascade.'), true, pg_temp.seed_block_id()),
    (2, version_accordion_id, 'What makes this exaggerated?', pg_temp.seed_rich_text('The stagger is intentionally slow and the motion direction alternates by panel.'), false, pg_temp.seed_block_id()),
    (3, version_accordion_id, 'Does this still work as static HTML?', pg_temp.seed_rich_text('Yes. The content renders on the server first and motion progressively enhances after hydration.'), false, pg_temp.seed_block_id()),
    (4, version_accordion_id, 'How do I tone it down later?', pg_temp.seed_rich_text('Edit the Motion group in Payload and reduce the stagger or switch the preset.'), false, pg_temp.seed_block_id());

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
    'Motion Showcase',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A second seeded page focused on the feature showcase block and oversized parallax settings.'
    ),
    now(),
    false,
    'motion-showcase',
    'published'
  )
  RETURNING id INTO motion_showcase_page_id;

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
    motion_showcase_page_id,
    'Motion Showcase',
    'lowImpact',
    pg_temp.seed_rich_text(
      'A second seeded page focused on the feature showcase block and oversized parallax settings.'
    ),
    now(),
    false,
    'motion-showcase',
    now(),
    now(),
    'published',
    true,
    false
  )
  RETURNING id INTO motion_showcase_version_id;

  live_feature_id := pg_temp.seed_block_id();
  live_feature_item_1 := pg_temp.seed_block_id();
  live_feature_item_2 := pg_temp.seed_block_id();
  live_feature_item_3 := pg_temp.seed_block_id();

  INSERT INTO feat_show (
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
    motion_stagger,
    motion_parallax_strength
  )
  VALUES (
    1,
    motion_showcase_page_id,
    'layout',
    live_feature_id,
    'Big Card Motion',
    'Feature Cards With Slow, Obvious Reveals',
    pg_temp.seed_rich_text(
      'This block uses slower card entrances and high parallax strength. Add media to these cards in the admin if you want the parallax drift to become visible.'
    ),
    'Motion Showcase Features',
    'none',
    'fly-up',
    'fly-up',
    380,
    48
  );

  INSERT INTO items (_order, _parent_id, id, kicker, title, description, media_id)
  VALUES
    (1, live_feature_id, live_feature_item_1, 'Card One', 'Slow reveal card', 'This card should arrive slowly enough that you can clearly see the delayed entrance.', NULL),
    (2, live_feature_id, live_feature_item_2, 'Card Two', 'Hover and motion test', 'Hover scaling is subtle, but the reveal timing is intentionally exaggerated.', NULL),
    (3, live_feature_id, live_feature_item_3, 'Card Three', 'Parallax-ready slot', 'If you add an image to this item in Payload, its wrapper is already configured for stronger parallax drift.', NULL);

  INSERT INTO items_links (_order, _parent_id, id, link_type, link_new_tab, link_url, link_label, link_appearance)
  VALUES
    (1, live_feature_item_1, pg_temp.seed_block_id(), 'custom', false, '/motion-lab', 'Back to Motion Lab', 'default'),
    (1, live_feature_item_3, pg_temp.seed_block_id(), 'custom', false, '/admin/collections/pages', 'Open Page Admin', 'outline');

  INSERT INTO _feat_show_v (
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
    motion_stagger,
    motion_parallax_strength
  )
  VALUES (
    1,
    motion_showcase_version_id,
    'layout',
    'Big Card Motion',
    'Feature Cards With Slow, Obvious Reveals',
    pg_temp.seed_rich_text(
      'This block uses slower card entrances and high parallax strength. Add media to these cards in the admin if you want the parallax drift to become visible.'
    ),
    live_feature_id,
    'Motion Showcase Features',
    'none',
    'fly-up',
    'fly-up',
    380,
    48
  )
  RETURNING id INTO version_feature_id;

  INSERT INTO _items_v (_order, _parent_id, kicker, title, description, media_id, _uuid)
  VALUES (
    1,
    version_feature_id,
    'Card One',
    'Slow reveal card',
    'This card should arrive slowly enough that you can clearly see the delayed entrance.',
    NULL,
    live_feature_item_1
  )
  RETURNING id INTO version_feature_item_1_id;

  INSERT INTO _items_v (_order, _parent_id, kicker, title, description, media_id, _uuid)
  VALUES (
    2,
    version_feature_id,
    'Card Two',
    'Hover and motion test',
    'Hover scaling is subtle, but the reveal timing is intentionally exaggerated.',
    NULL,
    live_feature_item_2
  )
  RETURNING id INTO version_feature_item_2_id;

  INSERT INTO _items_v (_order, _parent_id, kicker, title, description, media_id, _uuid)
  VALUES (
    3,
    version_feature_id,
    'Card Three',
    'Parallax-ready slot',
    'If you add an image to this item in Payload, its wrapper is already configured for stronger parallax drift.',
    NULL,
    live_feature_item_3
  )
  RETURNING id INTO version_feature_item_3_id;

  INSERT INTO _items_v_links (_order, _parent_id, link_type, link_new_tab, link_url, link_label, link_appearance, _uuid)
  VALUES
    (1, version_feature_item_1_id, 'custom', false, '/motion-lab', 'Back to Motion Lab', 'default', pg_temp.seed_block_id()),
    (1, version_feature_item_3_id, 'custom', false, '/admin/collections/pages', 'Open Page Admin', 'outline', pg_temp.seed_block_id());

  live_timeline_id := pg_temp.seed_block_id();
  live_timeline_item_1 := pg_temp.seed_block_id();
  live_timeline_item_2 := pg_temp.seed_block_id();
  live_timeline_item_3 := pg_temp.seed_block_id();

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
    motion_showcase_page_id,
    'layout',
    live_timeline_id,
    'Follow-up Motion',
    'A Secondary Timeline To Test Stacking',
    pg_temp.seed_rich_text(
      'This second page stacks multiple animated blocks to make it easier to confirm the motion controller is affecting more than one section.'
    ),
    'Motion Showcase Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    300
  );

  INSERT INTO pages_blocks_timeline_items (_order, _parent_id, id, period, title, description)
  VALUES
    (1, live_timeline_id, live_timeline_item_1, 'Pass 01', 'Top block enters', pg_temp.seed_rich_text('You should see the feature cards reveal before this timeline begins.')),
    (2, live_timeline_id, live_timeline_item_2, 'Pass 02', 'Timeline alternates', pg_temp.seed_rich_text('This confirms the motion presets are still applied further down the page.')),
    (3, live_timeline_id, live_timeline_item_3, 'Pass 03', 'CTA link appears', pg_temp.seed_rich_text('The last card includes a link so the row still feels like realistic content.'));

  INSERT INTO pages_blocks_timeline_items_links (_order, _parent_id, id, link_type, link_new_tab, link_url, link_label, link_appearance)
  VALUES
    (1, live_timeline_item_3, pg_temp.seed_block_id(), 'custom', false, '/motion-lab', 'Review The First Demo Page', 'default');

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
    motion_showcase_version_id,
    'layout',
    'Follow-up Motion',
    'A Secondary Timeline To Test Stacking',
    pg_temp.seed_rich_text(
      'This second page stacks multiple animated blocks to make it easier to confirm the motion controller is affecting more than one section.'
    ),
    live_timeline_id,
    'Motion Showcase Timeline',
    'none',
    'fly-up',
    'alternate-sides',
    300
  )
  RETURNING id INTO version_timeline_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    1,
    version_timeline_id,
    'Pass 01',
    'Top block enters',
    pg_temp.seed_rich_text('You should see the feature cards reveal before this timeline begins.'),
    live_timeline_item_1
  )
  RETURNING id INTO version_timeline_item_1_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    2,
    version_timeline_id,
    'Pass 02',
    'Timeline alternates',
    pg_temp.seed_rich_text('This confirms the motion presets are still applied further down the page.'),
    live_timeline_item_2
  )
  RETURNING id INTO version_timeline_item_2_id;

  INSERT INTO _pages_v_blocks_timeline_items (_order, _parent_id, period, title, description, _uuid)
  VALUES (
    3,
    version_timeline_id,
    'Pass 03',
    'CTA link appears',
    pg_temp.seed_rich_text('The last card includes a link so the row still feels like realistic content.'),
    live_timeline_item_3
  )
  RETURNING id INTO version_timeline_item_3_id;

  INSERT INTO _pages_v_blocks_timeline_items_links (
    _order,
    _parent_id,
    link_type,
    link_new_tab,
    link_url,
    link_label,
    link_appearance,
    _uuid
  )
  VALUES (
    1,
    version_timeline_item_3_id,
    'custom',
    false,
    '/motion-lab',
    'Review The First Demo Page',
    'default',
    pg_temp.seed_block_id()
  );
END;
$$;
