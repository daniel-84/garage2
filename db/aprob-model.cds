namespace damo.aprobaciones;

entity CabeceraOrden {
  key idcab : Integer;
  precioTotal  : String;
  creadoPor : String(12);
  prioridad : Integer;
  aprobado : Boolean;
  toDetalle: Association to many DetalleOrden on toDetalle.cab = $self;
}

entity DetalleOrden {
  key iddet : Integer;  
  producto  : String(10);
  descripcion  : String(40);
  precioUnitario : Decimal(13, 3);
  cantidad : Integer;
  cab : Association to CabeceraOrden;
}

entity Productos{
    key idProducto : String(10);
    descripcion  : String(40);
    nse : String(18);
}

@cds.persistence.skip
entity Salida {
    key ID : Integer;
    text : String;
}