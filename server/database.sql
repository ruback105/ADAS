CREATE DATABASE sia_best;

CREATE TABLE Weblapa (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Finanses (
    id SERIAL PRIMARY KEY,
    profit BIGINT,
    expenses INTEGER,
    website_name VARCHAR(255),
    department_name VARCHAR(255),
    month DATE
);

CREATE TABLE Nodala (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    employee_count SMALLINT,
    website_name VARCHAR(255)
);

CREATE TABLE Darbinieki (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    position VARCHAR(255),
    working_hours SMALLINT,
    salary SMALLINT,
    bank_account VARCHAR(255),
    department_name VARCHAR(255)
);

CREATE TABLE Automatizeti_Testi (
    test_id SERIAL PRIMARY KEY,
    website_name VARCHAR(255),
    test_name VARCHAR(255),
    test_case VARCHAR(1000),
    script_path VARCHAR(255),
    test_schedule VARCHAR(1000)
);

CREATE TABLE Marketinga_Kompanija (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    website_name VARCHAR(255),
    platform_name VARCHAR(255),
    advertise_cost INTEGER,
    advertise_amount SMALLINT
);

CREATE TABLE Marketinga_Platforma (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    advertise_cost INTEGER
);
