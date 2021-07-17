export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mysqlCon: process.env.MYSQL_CONNECT
})
