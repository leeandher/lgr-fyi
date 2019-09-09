const express = require('express')

const router = express.Router()

const linkController = require('./controllers/linkController')
const redirectController = require('./controllers/redirectController')

router.get('/', (req, res) => res.send('booty hole'))
router.post(
  '/v2',
  linkController.validateForm,
  linkController.validateLink,
  linkController.preventNesting,
  linkController.verifySuffix,
  linkController.returnExistingLink,
  linkController.createShortLink,
)
router.get(
  '/:suffix',
  redirectController.increaseClicks,
  redirectController.performRedirect,
)

module.exports = router
