class Bank
{
 createAccount(accno,pname,balance)
 {
     this.accno=accno;
     this.pname=pname;
     this.balance=balance;
     console.log(`Acc.No:${this.accno} Name:${this.pname} Balance:${this.balance}`);
 }
 deposit(amount){
     this.balance+=amount
     console.log(this.balance);
 }
 withdrawl(amount){
     if (this.balance<amount){
         console.log("not much balance");
     }
     else{
         this.balance-=amount
         console.log(this.balance);
     }
 }
}
var obj = new Bank()
obj.createAccount(100,'amal',10000)
obj.withdrawl(5000)
obj.deposit(6000)