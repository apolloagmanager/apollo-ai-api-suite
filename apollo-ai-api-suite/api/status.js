const express = require('express');
const router = express.Router();

/**
 * @api {get} /api/status API Status
 * @apiName Status
 * @apiGroup Status
 * @apiDescription Check API operational status
 * @apiSuccess {String} status API status message
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {"status": "API operational"}
 */
router.get('/status', (req, res) => {
  res.status(200).json({ status: 'API operational' });
});

module.exports = router;