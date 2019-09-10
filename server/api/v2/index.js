const express = require('express')
const router = express.Router()

const linkController = require('./controllers/linkController')
const redirectController = require('./controllers/redirectController')
const { catchErrors } = require('../../handlers/errorHandlers')

router.post(
  '/api',
  linkController.validateForm,
  linkController.validateLink,
  linkController.preventNesting,
  catchErrors(linkController.verifySuffix),
  catchErrors(linkController.returnExistingLink),
  catchErrors(linkController.createShortLink),
)
router.get('/api/data', catchErrors(linkController.getLinkData))
router.get(
  '/:suffix',
  catchErrors(redirectController.increaseClicks),
  redirectController.performRedirect,
)

module.exports = router
