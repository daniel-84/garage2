using damo.aprobaciones as aprob from '../db/aprob-model';

@requires: 'authenticated-user'

service CatalogService {
    //OrdenesCab
    entity OrdenesCab as projection on aprob.CabeceraOrden;

    //OrdenesItems
    @readonly entity OrdenesItems as projection on aprob.DetalleOrden;

    //Productos
    entity Productos as projection on aprob.Productos;

    //ProductosSinSerie
    entity ProductosSinSerie as projection on aprob.Productos excluding { nse };

    //ProductosConSerie
    entity ProductosConSerie as projection on aprob.Productos { 
        *,
        nse as serie   
     }
     excluding{
         nse
     };

    //ProductosSelect
    entity ProductosSelect as SELECT from aprob.Productos {
        descripcion,
        nse as serie
    };
}