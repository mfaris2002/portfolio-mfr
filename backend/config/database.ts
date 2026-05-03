import path from 'path';

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      // Kita paksa simpan di folder 'database' di root agar mudah di-backup/persist
      filename: env('DATABASE_FILENAME', path.join(__dirname, '../../database/data.db')),
    },
    useNullAsDefault: true,
  },
});
