const express = require('express');
const router = express.Router();
const qrcode = require('qrcode');

router.post('/generate', async (req, res) => {
  try {
    const { url, color = '#000000', bg_color = '#FFFFFF' } = req.body;
    
    const qrOptions = {
      color: {
        dark: color,
        light: bg_color
      },
      width: 300
    };
    
    const qrDataUrl = await qrcode.toDataURL(url, qrOptions);
    res.json({ qrCode: qrDataUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;