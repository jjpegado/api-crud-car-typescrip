create database primeiro_projeto_ts

create table carros(
	id serial primary key,
  	marca text,
  	modelo text,
  	ano integer,
  	cor text,
  	valor integer
);