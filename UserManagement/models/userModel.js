const db = require("../utils/db");

const getAllUsers  = (callback) => { //callback wait krey gajab tak all users na aa jaye 
  db.query("SELECT * FROM users", (err,results) => {
    if(err) {
      callback(err,null);
      return;
    }

    callback(null,results);  // here null will tell, no error
  });
};


//Get user By ID
const getUserById = (id,callback) => {
  db.query("SELECT * FROM users WHERE id = ?", [id], (err,results) => {
    if(err) {
      callback(err,null);
      return;
    }
    callback(null,results);
  });
};

//Create new User

const createUser = (name,age,callback) => {
  db.query("INSERT INTO users (name, age) VALUES (?,?)" , [name,age], (err,results) => {
    if(err) {
      callback(err,null);
      return;
    }
    callback(null,results);

  });
};

const updateUser = (id, name, age,callback) => {

    db.query("UPDATE users SET name =? , age =? WHERE id =?", [name,age,id], (err, results) => {
      if(err){
        callback(err,null);
        return;
      }
      callback(null, results);
    });
};

const deleteUser = (id, callback) => {

    db.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        (err, results) => {

            if (err) {
                callback(err, null);
                return;
            }

            callback(null, results);
        }
    );

};
module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers 
}