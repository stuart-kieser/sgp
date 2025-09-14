import * as migration_20250911_104613 from './20250911_104613';

export const migrations = [
  {
    up: migration_20250911_104613.up,
    down: migration_20250911_104613.down,
    name: '20250911_104613'
  },
];
