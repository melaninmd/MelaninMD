
-- DB name "melaninmd"

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "diagnosis" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT NOT NULL REFERENCES "user"
);

CREATE TABLE "pictures"(
	"id" SERIAL PRIMARY KEY,
	"diagnosis_id" INT NOT NULL REFERENCES "diagnosis",
	"filepath" VARCHAR NOT NULL,
	"date" DATE NOT NULL
);

CREATE TABLE "prediction" (
	"id" SERIAL PRIMARY KEY,
	"diagnosis_id" INT NOT NULL REFERENCES "diagnosis",
	"prediction" VARCHAR NOT NULL,
	"icd" INT,
	"classification_id" INT,
	"link" VARCHAR,
	"confidence" INT
);