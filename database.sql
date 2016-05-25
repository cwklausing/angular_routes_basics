--SQL queries for creating a matching local database

CREATE DATABASE mu;

CREATE table "people" (
id SERIAL PRIMARY KEY,
name character varying(40),
info character varying(200)
);
