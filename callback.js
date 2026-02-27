function fullName(firstName , lastName , sayBye) {
    
    const fullName = firstName + ' ' + lastName 
    console.log(fullName);
    sayBye()

    
}

function sayBye() {
    
    console.log('say bye');
    
}

function lastName() {
    
    const last = 'ahmed'
    return last
}

fullName('taj' , lastName() , sayBye )