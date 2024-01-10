const { response, request } = require('express');
const SafiModel = require('../models/safi-model');

const safi = new SafiModel();

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await safi.getAllInvoices();
        res.json(invoices);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
};

const obtainAuthorizedInvoices = async (req, res) => {
    try {
        const invoices = await safi.obtainAuthorizedInvoices();
        res.json(invoices);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
};


const getInvoiceId = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const invoices = await safi.getInvoiceId(id);
        res.json(invoices);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}


const getClientId = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const clients = await safi.getClientId(id);
        res.json(clients);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

const getInvoicesPerCustomer = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const clients = await safi.getInvoicesPerCustomer(id);
        res.json(clients);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

const getServices = async (req = request, res = response) => {
    try {
        const services = await safi.getServices();
        res.json(services);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

const getServicesByLike = async (req = request, res = response) => {
    try {
        const { id } = req.params;
        const service = await safi.getServicesByLike(id);
        res.json(service);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

const getUges = async (req = request, res = response) => {
    try {
        const services = await safi.getUges();
        res.json(services);
    } catch (error) {
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    getAllInvoices,
    getInvoiceId,
    obtainAuthorizedInvoices,
    getClientId,
    getInvoicesPerCustomer,
    getServices,
    getServicesByLike,
    getUges
}