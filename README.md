## Welcome to the fullstack starter kit for your projects! 🚀

**Main Backend Libraries 📚**:

- NestJS as main framework.
- TypeORM for database interaction (with PostgreSQL database).

**Main Frontend Libraries 🌐**:

- React with Next.js as main framework.
- Redux Toolkit for state management.
- PrimeReact for rich UI components.
- TailwindCSS for a utility-first CSS framework.

### 🌟 Main Features

- **Fully Dockerized Development 🐳**: Jumpstart your project with Docker, ensuring a consistent and isolated environment for development.
- **Automatic Migrations 🔄**: Changes in your models automatically reflect in your database. A smooth sync, every time!
- **Seeders 🌱**: Populate your database with initial data.

### Setup

Prepare your environment variables:

```sh
cp .env.example .env; cd server && cp .env.example .env; cd ..;
```

Install the dependencies for both the server and the web:

```sh
cd server && npm install; cd ../web && npm install; cd ..;
```

#### Start your server with Docker 🐳:

```sh
docker compose up
```

Once launched, the following services will be available:

- Frontend: http://localhost
- Backend: http://localhost:4040 (check following http://localhost:4040/api/test)
- Postgres db on port 5432
- Database management (Adminer): http://localhost:8888/?pgsql=postgres&username=template&db=template

  Credentials for adminer:

  ```json
  System: PostgreSQL
  Server: postgres
  Username: template
  Password: template
  Database: template
  ```

### Commands

**Roll out the migrations 🛠️:**

After your first launch, don't forget to migrate your database to the latest version

```sh
cd server && npm run build && npm run migration:run
```

**Generate Migration:**

Create automatically generated migration based on changes in entities models

```sh
cd server && npm run build && npm run migration:generate/src/migrations/NameOfMigration
```

**⚠️ Important**

Changes are calculated between entity model states and the current state in the database, so before generating a migration, be sure that you roll out all previous migrations.

**Revert Migration:**

Made a mistake? No worries, revert the last migration with

```sh
cd server && npm run migration:revert
```

**Run Seeders:**

Populate your database with initial data using

```sh
cd server && npm run build && npm run seed
```

## Examples

### Making seeder

**Step 1: Create model (entity) data array 📝**

```ts
const users: User = [
  {
    id: 1,
    email: "johndoe@gmail.com",
    name: "John Doe",
    password: "$2a$10$I740fh",
  },
];
```

**Step 2: Update seed function in seed.ts 🔄**

```ts
async function seed() {
  await createConnection(dataSourceOptions);
  const connection = getConnection();

  //Add code here to seed your database
  await EntitySaver.saveEntities(connection, users, User);

  await connection.close();
}
```

**Tip: 💡**
I recommend isolating seeders by creating special seed files in the src/seeds directory with the name format EntityName.seed.ts

src/seeds/user.seed.ts

```ts
export  class  UserSeeder {

	const  users: User = [
		{
			id:  1,
			email:  'johndoe@gmail.com',
			name:  'John Doe',
			password:'$2a$10$I740fh',
		},
	];

	public  static  async  run(connection: Connection): Promise<void> {
		await  EntitySaver.saveEntities(connection, users, User);
}
```

So, in the seeder function, you will add:

```ts
await UserSeeder.run(connection);
```
