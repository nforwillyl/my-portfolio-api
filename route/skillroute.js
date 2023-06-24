const express = require('express');
const router = express.Router();
const Skill = require('../models/skillmodel')

router.get('/api/skill', async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

router.get('/api/skill/:id', async (req, res) => {
    const id = req.body.id
    const skill = await Skill.findById(id);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found.' });
    }
    res.json(skill);
  });
router.post('/api/newskill', async (req, res) => {

  const skill1 = new Skill({
      name: 'JavaScript',
      level: 'Advanced',
    });
  
    const skill2 = new Skill({
        name: 'React',
        level: 'Intermadiate',
    });
    
    const skill3 = new Skill({
      name: 'Graphic Design',
      level: 'Advanced',
    });
    
    skill1.save()
    skill2.save()
    skill3.save()
});
router.post('/api/skill', async (req, res) => {
    const skill = new Skill({
        name: req.body.name,
        level: req.body.level
    })
    await skill.save()
    res.json('skill added')
});

router.patch('/api/skill/:id', async (req, res) => {
  const skill = await Skill.findById(req.params.id);
  if (!skill) {
    return res.status(404).json({ message: 'Skill not found.' });
  }

  skill.name = req.body.name || skill.name;
  skill.level = req.body.level || skill.level;

  await skill.save();
  res.json(skill);
});

router.delete('/api/skill', async (req, res) => {
  const id = req.body._id
  const skill = await Skill.findById(id);
  if (!skill) {
    return res.status(404).json({ message: 'Skill not found.' });
  }

  await Skill.deleteOne(skill)
  res.json({ message: 'Skill deleted.' });
});

module.exports = router;
