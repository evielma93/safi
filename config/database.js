const config = {
    server: process.env.DB_SERVER, 
    database:process.env.DB_DATABASE,      
    user:process.env.DB_USER,          
    password:process.env.DB_PASSWORD,       
    options: {
        trustedConnection: true,
        encrypt: false,
        trustServerCertificate: true,
        instancename:process.env.DB_SERVER,
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    port:52586
};


module.exports = {
    config
};