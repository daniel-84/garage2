module.exports = srv=>{
    const {Salida, Productos} = cds.entities;   //srv.entities;

    srv.on("READ", Salida, (req)=>{
        debugger;

        //const sal = await cds.read(Productos)
        //cds.tx(req).run(SELECT.from(Productos))

        debugger;
    })

    /*srv.on("READ", "Reporte", async(req)=>{
        debugger;

        const sal =  await cds.tx(req).run(SELECT.from(Productos))

        return sal

        debugger;
    })  */  

    srv.on("READ", "ProductosSelect", async(req, next)=>{
        debugger;

        const items = await next()
        //const sal =  await cds.tx(req).run(SELECT.from(Productos))
        debugger

        return items        
    })       
    
    srv.on("READ", "Reporte", async(req)=>{
        debugger;

        //const items = await next()
        //const sal =  await cds.tx(req).run(SELECT.from(Productos))
        var item = [
            {
                ID : 1233,
                text : "saraza"
            },
            {
                ID : 4444,
                text : "saraza2",
            }            
        ]

        debugger

        return item      
    })     

}