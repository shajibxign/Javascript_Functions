// Answer to the first question

function anaToVori (ana) {

    if (typeof(ana) != 'number') {
        return console.error("Please enter a valid number!");
    }

    let vori = ana / 16;
    return vori;   
}

// let x = 64;
// let rslt = anaToVori(x);
// console.log(rslt);


// Answer to the second question

function pandaCost (singara, samosa, jilapi) {

    if (typeof(singara) != 'number' || typeof(samosa) != 'number' || typeof(jilapi) != 'number') {
        return console.error("Please enter a valid number!");;
    }
    
    singara *= 7;
    samosa *= 10;
    jilapi *= 15;

    let total = singara + samosa + jilapi;

    return total;

}

// let x = 5; y = 5, z = 5;
// let rslt = pandaCost(x, y, z);
// console.log(rslt);


// Answer to the Third question

function picnicBudget(Tourists) {

    if (typeof(Tourists) != 'number') {
        return console.error("Please enter a valid number!");
    }

    let TotalCost;
    let till_100 = Tourists;
    let till_200 = Tourists - 100;
    let _200plus = Tourists - 200;

    if (Tourists <= 100) {
        TotalCost = till_100 * 5000;
    }
    else if (Tourists <= 200) {
        TotalCost = 100*5000 + till_200*4000;
    }
    else if (Tourists > 200) {
        let upto_200 = 100*5000 + 100*4000;
        TotalCost = upto_200 + _200plus*3000;
    }
    return TotalCost;
}

// let x = 220;
// let total = picnicBudget(x);
// console.log(total);


// Answer to the Forth question


function oddFriend(arr) {

    if (typeof(arr) != 'object') {
        return console.error("Please enter a valid array!");;
    }

    let i, rem, arr_len, name_len;
    arr_len = arr.length;
    

    for (i = 0; i < arr_len; i++) {
      
        name_len = arr[i].length;
        rem = name_len % 2;

        if ( rem == 0) {
            continue;
        }

        else if ( rem == 1) {
            break;
        }
    }
    return arr[i];
}


// let Friends = ['Rana', "Mana", "Ana", "Kana", "Sona", "Salam"];
// let OddFriend = oddFriend(Friends);
// console.log(OddFriend);


// Problem: Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

function addDigits(num) {
    
    let result = 0, rem;
    
    if (num / 10 < 1) {
        return num;
    }
    
    while (num != 0) {
            rem = num % 10;
            result = result + rem; 
            num = Math.floor(num / 10);
        }
    num = result;
    
    if (num / 10 >= 1) {
            return addDigits(num);
        }    
    return num;
}

//console.log(addDigits(3856));
