const { Router } = require('express');

const { 
    getAllInvoices,
    getInvoiceId,
    obtainAuthorizedInvoices,
    getClientId,
    getInvoicesPerCustomer,
    getServices
 } = require('../controllers/safi-controller');

const router = Router();

/** GET */
router.get('/getInvoices', getAllInvoices);
router.get('/obtainAuthorizedInvoices', obtainAuthorizedInvoices);
router.get('/getInvoice/:id', getInvoiceId);
router.get('/getInvoicesPerCustomer/:id', getInvoicesPerCustomer);
router.get('/getClient/:id', getClientId);
router.get('/getServices', getServices);



module.exports = router;