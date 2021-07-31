export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongoCon: process.env.MONGO_CONNECT,
})
