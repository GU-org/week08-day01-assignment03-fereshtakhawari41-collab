function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
            var yearsLeft = 90 - age;
            var days = yearsLeft * 365;
            var weeks = yearsLeft * 52;
            var months = yearsLeft * 12;

            console.log(yearsLeft);
            console.log(days);
            console.log(weeks);
            console.log(months);

            alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
        


   
    
    
/*************Don't change the code below**********/
}
        // Get age from user
        var age = prompt("What is your cuurent age?");
        
        // Function call
        lifeInWeeks(parseInt(age));
