const pool = require("../config/db");

const createTask = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("HEADERS:", req.headers.authorization);
    const { title } = req.body;
    const userId = req.user.id;

    if (!title || !userId) {
      return res.status(400).json({
        message: "Title and User ID are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO tasks (title, user_id)
       VALUES ($1, $2)
       RETURNING *`,
      [title, userId]
    );

    return res.status(201).json({
      message: "Task created successfully",
      task: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const userId = req.user.id;

    const result = await pool.query(
      `SELECT * FROM tasks
       WHERE user_id = $1
       ORDER BY created_at DESC`,
      [userId]
    );

    return res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const result = await pool.query(
      `UPDATE tasks
       SET title = $1,
           completed = $2
       WHERE id = $3
       AND user_id = $4
       RETURNING *`,
      [
        title,
        completed,
        id,
        req.user.id
      ]
    );

    return res.status(200).json({
      message: "Task updated successfully",
      task: result.rows[0],
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      `DELETE FROM tasks
       WHERE id = $1
       AND user_id = $2`,
      [id, req.user.id]
    );

    return res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};