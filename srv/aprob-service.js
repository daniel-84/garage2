module.exports = srv=>{
    const {Salida, Productos} = cds.entities;   //srv.entities;

    srv.after("READ", "ProductosSinSerie", async(items)=>{
        items.forEach(element=>{
            element.descripcion = element.descripcion + "(Salida custom)"
        });
    }) 

    srv.on("READ", "ProductosSelect", async(req, next)=>{
        const items = await next()

        items.forEach(element=>{
            element.descripcion = element.descripcion + "(Salida custom)"
        });

        return items        
    })       
    
    srv.on("READ", "Reporte", async(req)=>{
        
        //const items = await next()
        const sal =  await cds.tx(req).run(SELECT.from(Productos))

        var item = [
            {
                ID : sal[0].idProducto.slice(1),
                text : `Esta es la descripcion del producto: ${sal[0].descripcion}`
            },
            {
                ID : 4444,
                text : "Producto default",
            }            
        ]

        return item  
    })  
    
    srv.on("READ", "Errores", (req)=>{
        req.reject(500, "Hubo un quilombo en el backend")
    })

}