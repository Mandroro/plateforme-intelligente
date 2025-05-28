CREATE DATABASE bdjobremote;

USE bdjobremote;

CREATE TABLE freelancer(
    email VARCHAR(50) NOT NULL,
    motpasse CHAR(15) NOT NULL,
    nom_prenom VARCHAR(250) NOT NULL,
    adresse_actuel TEXT,
    num_telephone CHAR(12),
    poste_travail TEXT,
    photo_identite TEXT,
    PRIMARY KEY(email)
);

