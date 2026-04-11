const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/pdf', (req, res) => {
    res.download(path.join(__dirname, '../assets/AayanAnsari_Resume.pdf'))
});

router.get('/docx', (req, res) => {
    res.download(path.join(__dirname, '../assets/AayanAnsari_Resume.docx'))
});
module.exports = router;
