DROP TABLE IF EXISTS branch CASCADE;
DROP TABLE IF EXISTS employee CASCADE;
DROP TABLE IF EXISTS customer CASCADE;
DROP TABLE IF EXISTS account CASCADE;
DROP TABLE IF EXISTS account_type CASCADE;
DROP TABLE IF EXISTS loan CASCADE;
DROP TABLE IF EXISTS transactions CASCADE;

CREATE TABLE branch (
    addr            VARCHAR(20),
    branch_id       INTEGER NOT NULL,        -- we may want to use numeric and specify an exact ID type
    name            VARCHAR(20),
    PRIMARY KEY     (branch_id)
);

CREATE TABLE employee (
    ssn             INTEGER NOT NULL,
    name            VARCHAR(50),
    addr            VARCHAR(20),
    branch          INTEGER,         -- foreign key to branch_id in branch
    position        VARCHAR(20),
    salary          NUMERIC(10,2),
    PRIMARY KEY     (ssn)
    FOREIGN KEY     (branch) REFERENCES branch
);

CREATE TABLE customer (
    customer_id     INTEGER NOT NULL,
    name            VARCHAR(50),
    addr            VARCHAR(20),
    branch          INTEGER         -- foreign key to branch_id in branch
);

CREATE TABLE account (
    account_num     INTEGER NOT NULL,
    account_type    account_t,
    balance         NUMERIC(10,2)
);

CREATE DOMAIN account_t AS
    VARCHAR NOT NULL CHECK (value = "CHECKING" OR value = "SAVINGS"); -- or other accounts?

CREATE TABLE account_type (
    account_type    account_t,
    fee             NUMERIC(4,2),
    addr            VARCHAR(20)     -- foreign key to addr in branch
);

CREATE TABLE loan (
    amount          NUMERIC(10,2),
    runtime         INTEGER,
    schedule        INTEGER,
    rate            NUMERIC(2,5)
);

CREATE DOMAIN trans_t AS
    VARCHAR NOT NULL CHECK (value = "WITHDRAWAL" OR value = "DEPOSIT");

CREATE TABLE transactions (
    trans_type      trans_t,
    amount          NUMERIC(10,2) NOT NULL,
    description     VARCHAR(200)
)

