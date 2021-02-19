create table postas(
    id serial primary key,
    nombre text not null,
    longitud double precision not null,
	latitud double precision not null,
    direccion text not null
);

create table users(
	id serial primary key,
	nombres text not null,
	apellidos text,
	cui integer not null unique,
	longitud double precision,
	latitud double precision,
	email text,
	password text,
	telefono integer,
	direccion text,
	posta_id integer,
	CONSTRAINT fk_posta
      FOREIGN KEY(posta_id) 
	  REFERENCES postas(id)
);