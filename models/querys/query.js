
class Query{

    getInvoices(){
        return `select 
        GenEmpresa.Empresa, 
        fac_comprobante.Ruc,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        NumeroAutorizacion,
        FechaAutorizacion,
        MensajeFirmador,
        EstadoFirmador,
        MensajeProceso,
        EstadoComprobanteId,
        FechaCreacion,
        FechaActualizacion,
        (CASE EstadoEmail WHEN 0 THEN 'PENDIENTE' WHEN 1 THEN 'ENVIADO' WHEN 2 THEN 'ERROR' END) as 'Estado_Envío_Email',
        FechaNotificacion as 'Fecha_Envío_Email',
        documentoid
        from 
        SafiBDDParametros_pruebas..Fac_Comprobante inner join
            SafiBDDParametros_pruebas..GenEmpresa on SafiBDDParametros_pruebas..Fac_Comprobante.Ruc=SafiBDDParametros_pruebas..GenEmpresa.Ruc
        where TipoDocumento = 1 and ClaveAcceso like '%001024%'
        order by Empresa`;
    }

    obtainAuthorizedInvoices(){
        return `select 
        GenEmpresa.Empresa, 
        Fac_Comprobante_Historial.Ruc,
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        NumeroAutorizacion,
        FechaAutorizacion,
        MensajeFirmador,
        EstadoFirmador,
        MensajeProceso,
        EstadoComprobanteId,
        FechaCreacion,
        FechaActualizacion,
        (CASE EstadoEmail WHEN 0 THEN 'PENDIENTE' WHEN 1 THEN 'ENVIADO' WHEN 2 THEN 'ERROR' END) as 'Estado_Envío_Email',
        FechaNotificacion as 'Fecha_Envío_Email',
        documentoid
        from 
        SafiBDDParametros_pruebas..Fac_Comprobante_Historial inner join
            SafiBDDParametros_pruebas..GenEmpresa on SafiBDDParametros_pruebas..Fac_Comprobante_Historial.Ruc=SafiBDDParametros_pruebas..GenEmpresa.Ruc
        where TipoDocumento = 1 and ClaveAcceso like '%001024%'
        order by Empresa`;
    }

    getInvoiceId(id){
        return `select * from SafiBDDParametros_pruebas..Fac_Comprobante where documentoid = ${id}`;
    }

    getClientId(id){
        return `select * from CXCDIR where Clave = '${id}'`;
    }
    
    getInvoicesPerCustomer(id){
        return `select 
        ClaveAcceso,
        (CASE TipoDocumento WHEN 1 THEN 'FACTURA' WHEN 4 THEN 'NOTA DE CRÉDITO' WHEN 6 THEN 'GUÍA DE REMISIÓN' WHEN 7 THEN 'COMPROBANTE DE RETENCIÓN' WHEN 3 THEN 'LIQUIDACION COMPRA' END) as 'TipoDocumento',
        SUBSTRING(ClaveAcceso,25,15) as Num_Doc,
        NumeroAutorizacion,
        FechaAutorizacion,
        XmlOriginal
        from SafiBDDParametros_pruebas..Fac_Comprobante_Historial 
		inner join V1791297954001_SAFI_3_pruebas..CXCDIR on SafiBDDParametros_pruebas..Fac_Comprobante_Historial.PersonaId = V1791297954001_SAFI_3_pruebas..CXCDIR.CodigoID
		where V1791297954001_SAFI_3_pruebas..CXCDIR.Clave = '${id}' `;
    }

}

module.exports = {
    Query
}