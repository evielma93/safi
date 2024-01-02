const sql = require('mssql');
const { config } = require('../config/database');
const { Query } = require('./querys/query');

const querys = new Query();

class SafiModel {
    
    async getAllInvoices() {
        try {
            const pool = await sql.connect(config);
            const result = await pool.query(querys.getInvoices());
            return result.recordset;
        } catch (error) {
            console.error('Error al obtener Facturas:', error);
            throw error;
        }
    }

    async obtainAuthorizedInvoices() {
        try {
            const pool = await sql.connect(config);
            const result = await pool.query(querys.obtainAuthorizedInvoices());
            return result.recordset;
        } catch (error) {
            console.error('Error al obtener Facturas:', error);
            throw error;
        }
    }

    async getInvoiceId(id) {
        try {
            const pool = await sql.connect(config);
            const result = await pool.query(querys.getInvoiceId(id));
            return result.recordset;
        } catch (error) {
            console.error('Error al obtener Factura por ID:', error);
            throw error;
        }
    }

    async getClientId(id) {
        try {
            const pool = await sql.connect(config);
            const result = await pool.query(querys.getClientId(id));
            return result.recordset;
        } catch (error) {
            console.error('Error al obtener Facturas:', error);
            throw error;
        }
    }

}

module.exports = SafiModel;