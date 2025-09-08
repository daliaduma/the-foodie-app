import sql from "better-sqlite3";
const db = sql("meals.db");

export const getMeals = async () => {
  // for demo purposes
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return db.prepare("SELECT * FROM meals").all();
};
