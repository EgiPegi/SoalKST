const Sequelize = require("sequelize");

const conn = new Sequelize("kst_database", "root", "", {
  host: "localhost",
  // host: '103.147.154.37',
  post: "3306",
  dialect: "mariadb",
  dialectOptions: {
    useUTC: false,
    timezone: "Etc/GMT+7",
  },
});

conn
  .authenticate()
  .then(() => {
    console.log("++=================++");
    console.log("++    Connected    ++");
    console.log("++=================++");
  })
  .catch((err) => {
    console.log("++=================++");
    console.log("++ Failed: " + err.message);
    console.log("++=================++");
  });

module.exports = conn;
