module.exports = {
  HOST: 'asthma-tool.cpn3sl25hjj1.us-east-2.rds.amazonaws.com',
  USER: 'admin',
  PASSWORD: 'N3v3rW1NTEr',
  DB: 'asthmatool',
  DIALECT: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
