const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Gets all members
router.get('/api/members', (req, res) => res.json(members));

// Get single member
router.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id))); 
    }
        
    else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
});

router.post('/', (req, res) => {
    //res.send(req.body); potentially better with database.
    const newMember = {
        id: uuid.v4(),              //auto generated probably wont use
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        res.status(400).json({ msg: 'Please include required info'});
    }

    members.push(newMember);
    res.json(members);

});