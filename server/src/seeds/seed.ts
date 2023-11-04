import { Connection, ConnectionOptions, createConnection, getConnection } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  ssl:
    process.env.DB_SSL === 'true'
      ? {
          rejectUnauthorized: false,
        }
      : undefined,
};

async function seed() {
  await createConnection(dataSourceOptions);
  const connection = getConnection();

  // Add code here to seed your database by calling EntitySaver.saveEntities
  // await  EntitySaver.saveEntities(connection, data, Entity);
  // or using a seeder class (example in git repo)
  // await SeederName.run(connection);

  await connection.close();
}

seed();

export class EntitySaver {
  public static async saveEntities<T>(connection: Connection, entityData: T[], entityType: new () => T): Promise<void> {
    const repository = connection.getRepository(entityType);

    for (const data of entityData) {
      const entity = new entityType();
      Object.assign(entity, data);
      await repository.save(entity);
    }
  }
}
