const { Router } = require('express');

const { getAllInvoices,
    getInvoiceId,
    obtainAuthorizedInvoices,
    getClientId } = require('../controllers/safi-controller');

const router = Router();

/** GET */
router.get('/getInvoices', getAllInvoices);
router.get('/obtainAuthorizedInvoices', obtainAuthorizedInvoices);
router.get('/getInvoice/:id', getInvoiceId);
router.get('/getClient/:id', getClientId);



module.exports = router;