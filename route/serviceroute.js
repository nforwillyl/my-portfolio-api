const express = require('express')
const Service = require('../models/servicemodel')
const router = express.Router();

router.get('/api/service', async (req, res) => {
    const services = await Service.find()
    res.json(services)
})

router.post('/api/service', async (req, res) => {
    const service = new Service({
        id: req.body.id,
        name: req.body.name,
        details: req.body.details
    })
    await Service.create(service)
    res.json('Service posted')
})
router.post('/api/listservice', async (req, res) => {
    const service1 = new Service({
        id: 1,
        name: "Web Development"
    })
    const service2 = new Service({
        id: 2,
        name: "Mobile App development"
    })
    const service3 = new Service({
        id: 3,
        name: "Desktop App Development"
    })
    const service4 = new Service({
        id: 4,
        name: "Graphic Development"
    })
    await service1.save()
    await service2.save()
    await service3.save()
    await service4.save()
    res.json('Services saved')
})

router.delete('/api/service', async (req, res) => {
    const id = req.body._id
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found.' });
    }
  
    await Service.deleteOne(service)
    res.json({ message: 'Service deleted.' });
  });

router.patch('/api/service', async (req, res) => {
    const id = req.body._id
  const service = await Service.findById(id);
  if (!service) {
    return res.status(404).json({ message: 'Service not found.' });
  }

  service.name = req.body.name || service.name;
  service.level = req.body.level || service.level;

  await service.save();
  res.json(service);
});

module.exports = router