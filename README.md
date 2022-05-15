# Action-for-the-ocean

### Star Proyect

1. Clone the repository.
2. Create a new database in PostgreSQL.
3. Run the following commands in the terminal: `cd server`
4. Run the following commands in the terminal: `npm install`
5. Run the following commands in the terminal: `npx prisma migrate dev --name init` (for creating the table)
6. Create inside the server folder a file called `.env` with the following content: `DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASENAME?schema=public"` (replace USER, PASSWORD and DATABASENAME with your credentials)
7. Run the following commands in the terminal: `npm prisma/seed.js` (for enter the data in the database)
8. Run the following commands in the terminal: `npm start`
9. In another terminal, run the following commands: `cd client`
10. Run the following commands in the terminal: `npm install`
11. Run the following commands in the terminal: `npm start`
12. Visit the following URL: `http://localhost:3000`
