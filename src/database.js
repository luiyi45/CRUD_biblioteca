import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb+srv://user_biblioteca:biblioteca123@cluster0.mxnzm.mongodb.net/biblioteca?retryWrites=true&w=majority&appName=Cluster0"); //url de mongodb compass "mongodb://localhost:27017/crud-mongo"
    console.log("DB conectada a", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
