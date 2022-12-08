import psycopg2 as pg
import getpass

conn = pg.connect("dbname=postgres user=postgres password=admin")

def cust_login(): # will return customer id on successful login
    c = conn.cursor()
    for _ in range(3):
        uname = input("Username >>> ")
        passwd = input("Password >>> ")
        c.execute("SELECT (username, passwd, customer_id) FROM customer WHERE username = %s;", (uname))
        query = c.fetchone()
        if not query:
            print("Invalid username.")
        else:
            if query[1] != passwd:
                print("Incorrect password, please try again")
            else:
                print("Login successful.")
                return query[2]
    
    else:
        print("Login Failed")
        return None
    

def emp_login():
    pass # TODO

def login(): # will return username of the person logged in
    while(True):
        print("Are you logging in as a...")
        print("1.) Customer")
        print("2.) Employee")
        usertype = input(">>> ")
        if usertype == 1:
            return cust_login()
        elif usertype == 2:
            return emp_login()
        else:
            print("Invalid input.")
        

def register():
    
    fname = input("Please enter your full name >>> ")
    uname = input("Username >>> ")
    while True:
        passwd = input(prompt="Password >>> ", stream=None)
        passwdconf = getpass(prompt="Confirm password >>> ", stream=None)
        if passwd != passwdconf:
            print("Passwords do not match...")
        else:
            break

    addr = input("Enter your address >>> ")
    branch = input("Enter the three-digit pin associated with your home branch >>> ")
    c = conn.cursor()
    c.execute("INSERT INTO customer (username, name, passwd, addr, branch) values (%s, %s, %s, %s, %s)",
     (uname, fname, passwd, addr, branch))
    c.close()


def main():
    c = conn.cursor()
    c.execute("SELECT * FROM customer;")
    print(c.fetchone())
    conn.close()
    






if __name__ == "__main__":
    main()

