import * as migration_20260708_115917_add_marketing_motion_blocks from './20260708_115917_add_marketing_motion_blocks';

export const migrations = [
  {
    up: migration_20260708_115917_add_marketing_motion_blocks.up,
    down: migration_20260708_115917_add_marketing_motion_blocks.down,
    name: '20260708_115917_add_marketing_motion_blocks'
  },
];
