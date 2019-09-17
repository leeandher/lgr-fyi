const express = require('express')
const router = express.Router()

const linkController = require('./controllers/linkController')
const redirectController = require('./controllers/redirectController')
const { catchErrors, healthCheck } = require('../handlers/errorHandlers')

router.post(
  '/api',
  linkController.validateForm,
  linkController.validateLink,
  linkController.preventNesting,
  catchErrors(linkController.verifySuffix),
  catchErrors(linkController.returnExistingLink),
  catchErrors(linkController.createShortLink),
)
router.post('/api/history', catchErrors(linkController.getData))
router.get(
  '/:suffix',
  catchErrors(redirectController.increaseClicks),
  redirectController.performRedirect,
)
router.get('/api/health-check', healthCheck)

module.exports = router
