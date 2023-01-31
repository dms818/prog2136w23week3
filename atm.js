let keepwithdrawing = null;

do{
var money = parseInt(prompt ("how much money would you like?",60));
let isPossible = false ;
if (money >=5 && money % 5 ==0)
{
    isPossible = true;
}
if (isPossible)
{
    let hundreds = 0;
    let fifties = 0;
    let twenties = 0;
    let tens = 0;
    let fives = 0;


    let bills = [100,50,20,10,5];
    let moneyleft = 0;
    //let billstodispense = []
for (let i = 0; i < bills.length; i++)
{
    if(moneyleft >= bills[i])
    {
        billstodispense[i]= parseInt(moneyleft/bills[i]);
        let amountofbills = moneyleft % bills[i];
    document.write(`<p> ${bills[i]} x ${amountofbills}</p>`);
    }

}
//hundreds = parseInt(money / 100);
//money = money % 100;

// fifties = parseInt(money / 50);
// money = money % 50;

// twenties = parseInt(money / 20);
// money = money % 20;

// tens = parseInt(money / 10);
// money = money % 10;

// fives = parseInt(money / 5);
// money = money % 5;

// const html = `<p><label>hundreds:&nbsp;</label>${hundreds}</p>
//               <p><label>fifties:&nbsp;</label>${fifties}</p>
//               <p><label>twenties:&nbsp;</label>${twenties}</p>
//               <p><label>tens:&nbsp;</label>${tens}</p>
//               <p><label>fives:&nbsp;</label>${fives}</p>`
// document.write(html);

}
else 
{
    alert ("we can not dispense that amount idiot.");
}


keepwithdrawing = prompt ("do you want to keep withdrawing?","y").toLowerCase();
 }
while (keepwithdrawing != "n");
