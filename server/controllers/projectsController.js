module.exports = {
    getProjects(req, res) {
        let db = req.app.get('db')
        db.get_projects().then( dbRes => {
            let formatted = dbRes.reduce( (a, n) => {
                a[n.id] ? a[n.id].image_links.push(n.image_link) : a[n.id] = {id: n.id, project_name: n.project_name, project_description: n.project_description, type: n.type, image_links: [n.image_link]}
                return a;
            }, {})
            let rArr = []
            for(let key in formatted) rArr.push(formatted[key])
            res.status(200).send(rArr)
        })
    }
}