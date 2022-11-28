/* Challenge 3: Net Salary Calculator (Toy Problem)
Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

NB: Use KRA, NHIF, and NSSF values provided in the link below.

https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye
*/

// Prompt User
let basicSalary = parseFloat(prompt("Enter your Basic Salary ", ""));
let benefits = parseFloat(prompt("Enter your Total Benefits ", ""));

// Validate if both user input are not null and positive numbers
if (basicSalary !== null && basicSalary > 0 && benefits !== null && benefits >= 0) 
{
   // Calculate Gross Pay
   let grossPay = basicSalary + benefits;
   // Declare all Output Variables
   let payeeTax = parseFloat(kraTax(grossPay));
   let nhif = parseFloat(nhifCalc(grossPay));
   let nssf = parseFloat(200);
   let totalDeduction = payeeTax + nhif + nssf;
   let netSalary = grossPay - payeeTax - nhif - nssf;
   // Function for calculating PAYE TAX
   function kraTax(gsPay)
   {
      let tax
      let maxPersonalRelief = parseFloat(2400);
      if(gsPay > 32333)
      {
         tax = (gsPay * 0.3) - maxPersonalRelief
      }
      else if(gsPay > 24000)
      {
         tax = (gsPay * 0.25) - maxPersonalRelief
      }
      else
      {
         if ((gsPay * 0.1) >= maxPersonalRelief)
         {
            tax = (gsPay * 0.1) - maxPersonalRelief;
         }
         else
         {
            tax = 0
         }
      }
      return tax;
   }

   //  Fuction for calculating NHIF
   function nhifCalc(grossPay)
   {
      let nhifc;
      if(grossPay >= 100000)
      {
         nhifc = 1700;
      }
      else if (grossPay >= 90000)
      {
         nhifc = 1600
      }
      else if (grossPay >= 80000)
      {
         nhifc = 1500
      }
      else if (grossPay >= 70000)
      {
         nhifc = 1400
      }
      else if (grossPay >= 60000)
      {
         nhifc = 1300
      }
      else if (grossPay >= 50000)
      {
         nhifc = 1200
      }
      else if (grossPay >= 45000)
      {
         nhifc = 1100
      }
      else if (grossPay >= 40000)
      {
         nhifc = 1000
      }
      else if (grossPay >= 35000)
      {
         nhifc = 950
      }
      else if (grossPay >= 30000)
      {
         nhifc = 900
      }
      else if (grossPay >= 25000)
      {
         nhifc = 850
      }
      else if (grossPay >= 20000)
      {
         nhifc = 750
      }
      else if (grossPay >= 15000)
      {
         nhifc = 600
      }
      else if (grossPay >= 12000)
      {
         nhifc = 500
      }
      else if (grossPay >= 8000)
      {
         nhifc = 400
      }
      else if (grossPay >= 6000)
      {
         nhifc = 300
      }
      else
      {
         nhifc = 150
      }
      return nhifc;
   }
   // Output grade
   alert(`Basic Salary: ${basicSalary}, Benefits: ${benefits}, Gross Pay: ${grossPay}, PAYE Tax: ${payeeTax}, NHIF: ${nhif}, NSSF: ${nssf}, NET PAY: ${netSalary}`);

}

// Runs if user input is not valid
else{
   alert("Invalid input. Please enter a value greater than 0" );
}
