const { Router } = require('express');

const { getAllInvoices,getInvoiceId,obtainAuthorizedInvoices } = require('../controllers/safi-controller');

const router = Router();

/** GET */
router.get('/getInvoices', getAllInvoices);
router.get('/obtainAuthorizedInvoices', obtainAuthorizedInvoices);
router.get('/getInvoice/:id', getInvoiceId);



module.exports = router;