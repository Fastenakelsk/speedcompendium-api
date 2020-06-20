const { Router } = require('express');
const {
  LocationController,
} = require('./controllers/index');

const router = Router();

// Location routes
router.get('/locations', LocationController.readAll);
router.get('/locations/:objectId', LocationController.read);
router.post('/locations', LocationController.create.bind(LocationController));
router.patch('/locations/:objectId', LocationController.update.bind(LocationController));
router.delete('/locations/:objectId', LocationController.delete);

module.exports = router;
