import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
    res.render('accueil');
});


router.get('/projets', (req, res) => {
    res.render('projets');
});
router.get('/competences', (req, res) => {
    res.render('comp');
});
router.get('/apprentissage', (req, res) => {
    res.render('learn');
});
router.get('/contact', (req, res) => {
    res.render('contact');
});

export default router;