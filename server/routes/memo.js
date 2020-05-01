import express from 'express';
import Memo from '../models/memo';
import mongoose from 'mongoose';

const router = express.Router();

/* 
    WRITE MEMO: POST /api/memo
    BODY SAMPLE: { contents: "sample "}
    ERROR CODES
        1: NOT LOGGED IN
        2: EMPTY CONTENTS
*/
router.post('/', (req, res) => {
    if (typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            error : "NOT LOGGED IN",
            code : 1
        });
    }

    if (typeof req.body.contents !== 'string' || req.body.contents === '') {
        return res.status(400).json({
            error : "EMPTY CONTENTS",
            code : 2
        });
    }
    
    let memo = new Memo({
        writer : req.session.loginInfo.username,
        contents : req.body.contents
    });

    memo.save(err => {
        if (err) throw err;
        return res.json({ sucess : true });
    })
});

// MODIFY MEMO
router.put('/:id', (req, res) => {

});

// DELETE MEMO
router.delete('/:id', (req, res) => {

});

// GET MEMO LIST
router.get('/', (req, res) => {

});

export default router;

