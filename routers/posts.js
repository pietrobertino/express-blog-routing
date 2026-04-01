const express = require("express");
const router = express.Router();



const posts = [
    { title: "Primo post", body: "Questo è il contenuto del primo post", img: "http://localhost:${port}/imgs/city.jpg", tags: ["tech", "programming"] },
    { title: "Secondo post", body: "Questo è il contenuto del secondo post", img: "http://localhost:${port}/imgs/grass.jpg", tags: ["lifestyle", "travel"] },
    { title: "Terzo post", body: "Questo è il contenuto del terzo post", img: "http://localhost:${port}/imgs/man.jpg", tags: ["food", "cooking"] },
    { title: "Quarto post", body: "Questo è il contenuto del quarto post", img: "http://localhost:${port}/imgs/sea.jpg", tags: ["fitness", "health"] },
    { title: "Quinto post", body: "Questo è il contenuto del quinto post", img: "http://localhost:${port}/imgs/street.jpg", tags: ["fashion", "style"] }
];


//Index
router.get('/', (req, res) => {
    res.json(posts)
})

//Show
router.get('/:id', (req, res) => {
    res.send('Post con id = ' + req.params.id);
})

//Store 
router.post('/', (req, res) => {
    res.send('Aggiungi un post');
})

//Update
router.put('/:id', (req, res) => {
    res.send('Aggiorna interamente il post con id = ' + req.params.id);
})

//Modify
router.patch('/:id', (req, res) => {
    res.send('Aggiorna parzialmente il post con id = ' + req.params.id);
})

//Destroy
router.delete('/:id', (req, res) => {
    res.send('Elimina il post con id = ' + req.params.id);
})

module.exports = router;