import psycopg2 as pg
import getpass as gp

conn = pg.connect("dbname=postgres user=postgres password=admin")

def cust_login(): # will return customer id on successful login
    c = conn.cursor()
    for _ in range(3):
        uname = input("Username >>> ")
        c.execute("SELECT username, passwd, customer_id FROM customer WHERE username = %s;", (uname,))
        query = c.fetchone()
        if not query:
            print("Invalid username.")
        else:
            passwd = gp.getpass(prompt="Password >>> ", stream=None)
            if query[1] != passwd:
                print("Incorrect password, please try again")
            else:
                print("Login successful.")
                return ('customer', query[2])
    
    else:
        print("Login Failed")
        return None
    

def emp_login():
    c = conn.cursor()
    for _ in range(3):
        uname = input("Username >>> ")
        c.execute("SELECT username, passwd, ssn FROM employee WHERE username = %s;", (uname,))
        query = c.fetchone()
        if not query:
            print("Invalid username.")
        else:
            passwd = gp.getpass(prompt="Password >>> ", stream=None)
            if query[1] != passwd:
                print("Incorrect password, please try again")
            else:
                print("Login successful.")
                return ('employee', query[2])
    
    else:
        print("Login Failed")
        return None

def login(): # will return user_id of the person logged in
    while(True):
        print("Are you logging in as a...")
        print("1.) Customer")
        print("2.) Employee")
        usertype = input(">>> ")
        if usertype == '1':
            return cust_login()
        elif usertype == '2':
            return emp_login()
        else:
            print("Invalid input.")
        

def register():
    fname = input("Please enter your full name >>> ")
    uname = input("Username >>> ")
    while True:
        passwd = gp.getpass(prompt="Password >>> ", stream=None)
        passwdconf = gp.getpass(prompt="Confirm password >>> ", stream=None)
        if passwd != passwdconf:
            print("Passwords do not match...")
        else:
            break

    addr = input("Enter your address >>> ")
    branch = int(input("Enter the three-digit pin associated with your home branch >>> "))
    c = conn.cursor()
    c.execute("INSERT INTO customer (username, name, passwd, addr, branch) VALUES (%s, %s, %s, %s, %s)",
     (uname, fname, passwd, addr, branch))
    conn.commit()

def create_account(user_id):
    c = conn.cursor()
    while(True):
        print("Select from the following")
        print("1.) Create new checking account")
        print("2.) Create new savings account")
        print("Press anything else to abort.")
        t = input(">>> ")
        if t == '1':
            c.execute("INSERT INTO account (account_owner, account_type, balance) VALUES (%s, 'CHECKING', 0)", (user_id))
            conn.commit()
        elif t == '2':
            c.execute("INSERT INTO account (account_owner, account_type, balance) VALUES (%s, 'SAVINGS', 0)", (user_id))
            conn.commit()
        else:
            return
    

def view_accounts(user_id):
    c = conn.cursor()
    c.execute("SELECT * FROM account WHERE account_owner = %s", (user_id,))
    print(c.fetchone())

def view_account(user_id):
    c = conn.cursor()
    while (True):
        try:
            acc = int(input("Please enter the account number >>> "))
            c.execute("SELECT * FROM account WHERE account_num = %s", (acc,))
        except TypeError:
            print("Please enter a number.")
    

def deposit(user_id):
    pass # TODO: Validate account number with user; Prompt for amount and adjust balance
    amount = input("Enter the amount you want to deposit:")
    ac = input("Enter your account number:")
    a = 'select balance from account where  account_num=%s' ## might have to edit this
    data = (ac,)
    c=conn.cursor()
    c.execute(a,data)
    result = c.fetchone()
    t =result[0] + amount
    sql = ('update amount set balance where account_num=%s')
    d=(t,ac)
    c.execute(sql,d)
    c.commit()

def withdrawal(user_id):
    pass # TODO: Validate account number with user; Prompt for amount and adjust balance
    amount = input("Enter the amount you want to withdraw:")
    ac = input("Enter your account number:")
    a = 'select balance from account where  account_num=%s' ## might have to edit this
    data = (ac,)
    c=conn.cursor()
    c.execute(a,data)
    result = c.fetchone()
    t =result[0] - amount
    sql = ('update amount set balance where account_num=%s')
    d=(t,ac)
    c.execute(sql,d)
    c.commit()


def main():
    c = conn.cursor()
    loggedInAs = None # <--- this will be a tuple: (user_type, user_id) where user_id is the primary key in table user_type
    print("Welcome to the banking system!")

    while not loggedInAs:
        print("Enter 1 to login, or 2 to register a new user account.")
        i = input(">>> ")
        if i == '1':
            loggedInAs = login()
        elif i == '2':
            register()
    
    if loggedInAs[0] == 'customer':
        c = conn.cursor()
        while(True):
            print("Please select from the following: ")
            print("1.) View accounts")
            print("2.) View account info")
            print("3.) Deposit into an account")
            print("4.) Withdraw from an account")
            print("5.) Create a new account")
            print("Enter anything else to exit")
            i = input(">>> ")
            if i == '1':
                view_accounts(loggedInAs[1])
            elif i == '2':
                view_account(loggedInAs[1])
            elif i == '3':
                deposit(loggedInAs[1])
            elif i == '4':
                withdrawal(loggedInAs[1])
            elif i == '5':
                create_account(loggedInAs[1])
            else:
                break

    elif loggedInAs[0] == 'employee':
        while(True):
            print("Please select from the following: ")
            print("1.) View account info")
            print("2.) Deposit into an account")
            print("3.) Withdraw from an account")
            print("4.) Create a new account")
            print("Enter anything else to exit")
            i = input(">>> ")
            if i == '1':
                pass # TODO do a query and make it pretty
            elif i == '2':
                pass # call deposit() AND ask for account number
            elif i == '3':
                pass # call withdrawal() AND ask for account number
            elif i == '4':
                pass # uhhh
            else:
                break
            

    conn.close()
    

if __name__ == "__main__":
    main()

