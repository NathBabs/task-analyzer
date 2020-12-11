const express = require('express');
const { analyzeTasks } = require('./helpers/app');

const app = express();

const port = process.env.PORT || 8080;

//app.use(express.json());
app.use(express.text({
    defaultCharset: "utf-8"
}));
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Welcome to Task Analyzer 👷🏽‍♀️'
    });
});

app.post('/analyze/tasks', async (req, res) => {
    try {
        const output = analyzeTasks(req.body);

        if(!output){
            res.status(404).send({
                success: false
            });
        }

        res.status(200);
        res.format({
            'text/plain' : function(){
                res.send(output);
            }
        });
    } catch (error) {
        res.status(500).send();
    }

});


app.listen(port, () => {
    console.log(`Listening on port ${port} 🌍`);
});

module.exports = app;