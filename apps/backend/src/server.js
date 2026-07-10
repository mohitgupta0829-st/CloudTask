require("dotenv").config();

const app = require("./app");
const pool = require("./config/db");
const createUsersTable = require("./models/userModel");

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    console.log("✅ Database Connected");
    
    await createUsersTable();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);
  }
}

startServer();