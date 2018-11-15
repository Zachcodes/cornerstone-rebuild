module.exports = {
    sendEmail(req, res) {
        let db = req.app.get('db')
        let {
                name,
                email,
                subject,
                message,
                requestCallback,
                phone,
                timeValue
            } = req.body
        res.sendStatus(200)
    }
}