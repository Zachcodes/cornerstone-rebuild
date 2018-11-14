module.exports = {
    getProjects(req, res) {
        let db = req.app.get('db')
        db.get_projects().then( dbRes => {
            res.status(200).send(dbRes)
        })
    }
}