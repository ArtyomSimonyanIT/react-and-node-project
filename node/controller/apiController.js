const db = require('../db')

class apiController {

    async getUsers(req, res) {
        try {
            const users = db.query("SELECT * FROM users", function (err, results) {
                if (err) console.log(err)
                else {
                    res.send(results)
                }
            })
        } catch (e) {

        }
    }


    async delUser(req, res) {
        try {
            const id = req.params["id"];
            const sql = "DELETE FROM users WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if (err) console.log(err);
                else console.log("User deleted");
            })
        } catch (e) {

        }
    }


    async getComputers(req, res) {
        try {
            const users = db.query("SELECT * FROM computers", function (err, results) {
                if (err) console.log(err)
                else {
                    res.send(results)
                }
            })
        } catch (e) {

        }
    }



    async addComputers (req, res){
        try {
            const title = req.body.title;
            const ram = req.body.ram;
            const videocard = req.body.videocard;
            const processor = req.body.processor;
            const motherboard = req.body.motherboard;
            const ssd = req.body.ssd;
            const psu = req.body.psu;
            const computerCase = req.body.computerCase;
            const cooler = req.body.cooler;
            const img = req.body.img;
            const price = req.body.price;

            const sql = "INSERT INTO posts(title, ram, videocard, processor, motherboard, ssd, psu, computerCase, cooler, img, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            db.query(sql, [title, ram, videocard, processor, motherboard, ssd, psu, computerCase, cooler, img, price], function (err, results) {
                if (err) console.log(err);
                else console.log("Data updated");
            })
        } catch(e) {
           
        }
    }


    async delComputers(req, res) {
        try {
            const id = req.params["id"];
            const sql = "DELETE FROM computers WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if (err) console.log(err);
                else console.log("Computer deleted");
            })
        } catch (e) {

        }
    }


    

    async getNotebooks(req, res) {
        try {
            const users = db.query("SELECT * FROM notebooks", function (err, results) {
                if (err) console.log(err)
                else {
                    res.send(results)
                }
            })
        } catch (e) {

        }
    }



    async addNotebooks (req, res){
        try {
            const title = req.body.title;
            const ram = req.body.ram;
            const videocard = req.body.videocard;
            const processor = req.body.processor;
            const motherboard = req.body.motherboard;
            const ssd = req.body.ssd;
            const img = req.body.img;
            const screenDiagnol = req.body.screenDiagnol;
            const price = req.body.price;

            const sql = "INSERT INTO posts(title, ram, videocard, processor, motherboard, ssd, img, screenDiagnol, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            db.query(sql, [title, ram, videocard, processor, motherboard, ssd, screenDiagnol, img, price], function (err, results) {
                if (err) console.log(err);
                else console.log("Data updated");
            })
        } catch(e) {
           
        }
    }


    async delNotebooks(req, res) {
        try {
            const id = req.params["id"];
            const sql = "DELETE FROM notebooks WHERE id = ?"
            db.query(sql, [id], function (err, results) {
                if (err) console.log(err);
                else console.log("Computer deleted");
            })
        } catch (e) {

        }
    }
}

module.exports = new apiController()
