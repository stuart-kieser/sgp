import * as migration_20250911_104613 from './20250911_104613';
import * as migration_20250914_190205 from './20250914_190205';

export const migrations = [
  {
    up: migration_20250911_104613.up,
    down: migration_20250911_104613.down,
    name: '20250911_104613',
  },
  {
    up: migration_20250914_190205.up,
    down: migration_20250914_190205.down,
    name: '20250914_190205'
  },
];
