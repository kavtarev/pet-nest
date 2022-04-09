
export default  () => ({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USERNAME,
  db: process.env.DDATABASE_DATABASE,
  sync: process.env.DATABASE_SYNC,
  logging: process.env.DATABASE_LOGGING,
  password: process.env.DATABASE_PASSWORD
})
