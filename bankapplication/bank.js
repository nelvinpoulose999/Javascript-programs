class Bank {
    static getAccountdtails() {
        var accountdetails = {
            1000: { name: 'ajay', acno: 1000, password: 'testone', balance: 5000 },
            1001: { name: 'jay', acno: 1001, password: 'testtwo', balance: 4000 },
            1002: { name: 'sjay', acno: 1002, password: 'testthree', balance: 8000 },
            1003: { name: 'raj', acno: 1003, password: 'testfour', balance: 7000 }
        }
        return accountdetails
    }
    static authenticate(acno, password) {
        let accountdetails=Bank.getAccountdtails()
        if (acno in accountdetails) {
            if (password == accountdetails[acno]['password']) {
                return 1;
                // login success
            }
            else {
                return -1
                // invalid paswrd
            }

        }
        else {
            return 0
            // invalid account number
        }

    }
    static login() {
        var acno = document.querySelector('#log').value
        var pwd = document.querySelector('#pass').value
        var user = Bank.authenticate(acno, pwd)
        if (user == 1) {
            alert('login success');
            window.location.href="signup1.html"

        }
        else if (user == -1) {
            alert('invalid password');

        }
        else {
            alert('invalid account');
        }
    }
    static deposit (){
        var acno = document.querySelector('#log').value
        var pwd = document.querySelector('#pass').value
        var user = Bank.authenticate(acno, pwd,amt)
        var accntdetails=Bank.getAccountdtails()
        var amt=Number(document.querySelector('#amo').value)
        if (user==1){
            var bal=accntdetails[acno]['balance']+amt
            alert('Deposit successfully '+amt+'\n'+'Available balance '+bal);
        }
        else if (user == -1) {
            alert('invalid password');

        }
        else {
            alert('invalid account');
        }
    }
    static withdraw (){
        var acno = document.querySelector('#log').value
        var pwd = document.querySelector('#pass').value
        var user = Bank.authenticate(acno, pwd)
        var accntdetails=Bank.getAccountdtails()
        var amt=Number(document.querySelector('#amo').value)
        if (user==1){
            if (accntdetails[acno]['balance']>=amt) {
                var bal=accntdetails[acno]['balance']-amt
                alert('Withdrawal successfully '+amt+'\n'+'Available balance '+bal);
            }
            else {
                alert('insufficient balance')
            }
          
        }
        else if (user == -1) {
            alert('invalid password');

        }
        else {
             alert('invalid account');
        }
        
        
    }   
}
