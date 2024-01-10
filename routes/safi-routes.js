const { Router } = require('express');

const { 
    getAllInvoices,
    getInvoiceId,
    obtainAuthorizedInvoices,
    getClientId,
    getInvoicesPerCustomer,
    getServices,
    getServicesByLike,
    getUges
 } = require('../controllers/safi-controller');

const router = Router();

/** GET */
router.get('/getInvoices', getAllInvoices);
router.get('/obtainAuthorizedInvoices', obtainAuthorizedInvoices);
router.get('/getInvoice/:id', getInvoiceId);
router.get('/getInvoicesPerCustomer/:id', getInvoicesPerCustomer);
router.get('/getClient/:id', getClientId);
router.get('/getServices', getServices);
router.get('/getServicesByLike/:id', getServicesByLike);
router.get('/getUges', getUges);



module.exports = router;