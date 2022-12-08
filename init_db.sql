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

CREATE TYPE emp_t AS ENUM ('TELLER', 'MANAGER');

CREATE TABLE employee (
    ssn             NUMERIC(9,0),
    name            VARCHAR(50),
    username        VARCHAR(50),
    passwd          VARCHAR(50),
    addr            VARCHAR(20),
    branch          INTEGER,         -- foreign key to branch_id in branch
    position        emp_t,
    salary          NUMERIC(10,2),
    PRIMARY KEY     (ssn),
    FOREIGN KEY     (branch) REFERENCES branch (branch_id)
);

CREATE TABLE customer (
    customer_id     SERIAL,
    username        VARCHAR(50),
    name            VARCHAR(50),
    passwd          VARCHAR(50),
    addr            VARCHAR(20),
    branch          INTEGER,        -- foreign key to branch_id in branch
    PRIMARY KEY     (customer_id),
    FOREIGN KEY     (branch) REFERENCES branch
);

CREATE TYPE account_t AS ENUM ('SAVINGS', 'CHECKING');

CREATE TABLE account (
    account_owner   INTEGER,
    account_num     SERIAL,
    account_type    account_t,
    balance         NUMERIC(10,2),
    PRIMARY KEY     (account_owner, account_num),
    FOREIGN KEY     (account_owner) REFERENCES customer
);

CREATE TABLE account_type (
    account_type    account_t,
    fee             NUMERIC(4,2),
    branch          INTEGER,
    --addr            VARCHAR(20),     -- foreign key to addr in branch
    FOREIGN KEY     (branch) REFERENCES branch (branch_id)
);
    
CREATE TABLE loan (
    amount          NUMERIC(10,2),
    runtime         INTEGER,
    schedule        INTEGER,
    rate            NUMERIC(4,2)
);

CREATE TYPE trans_t AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER');

CREATE TABLE transactions (
    trans_type      trans_t,
    amount          NUMERIC(10,2) NOT NULL,
    description     VARCHAR(200)
);

