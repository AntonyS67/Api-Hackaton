const express = require('express');

const postaController = require('../controllers/postaController');

const router = express.Router();

router.get('/',postaController.getPostas);
router.post('/',postaController.create);
router.post('/closer',postaController.getPostaCloser);
router.get('/:id',postaController.getPosta);
router.put('/:id',postaController.updatePosta);
router.delete('/:id',postaController.deletePosta);

module.exports = router;