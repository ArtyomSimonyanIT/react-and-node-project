const db = require('../db')


class AuthController {
    async registration (req, res) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const confirmPassword = req.body.confirmPassword;
            if(password === confirmPassword){
                const sql = "INSERT INTO users(email, password) VALUES (?, ?)"
            db.query(sql, [email, password], function (err, results) {
                if (err) console.log(err);
                else console.log("Data updated");
            })
            }else {
                err("there is a data error")
            }
        } catch(e) {
           
        }
    }


    async login (req, res) {
        try{
          const email = req.body.email;
          const password = req.body.password;
          const dbEmail = db.query("SELECT * FROM users WHERE email = ?", [email], function(err, results){
            if(err) console.log(err)
            else{
                if(dbEmail._rows[0].length == 1) {
                    if (password == results[0].password) {
                        console.log("вы вошли в аккаунт");
                    }else {
                        console.log("пороль неверный");
                        console.log(password);
                    }
                }else {
                    console.log("вы не зарегистрованы");
                }
            }
          })
        }
        catch (e){
            console.log(e);
        }
    }

  

    

}

module.exports = new AuthController()

