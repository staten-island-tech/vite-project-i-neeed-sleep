

function tree(data){
    let increase = 0;
    let decrease = 0;
    let incount = 1;
    let decount = 1;
    let x = 0;
    data.forEach(i => {
        if (i == data[0]){
            let x = i;
        }
        else{
            if(i>x){
                incount++;
                decrease = decount;
                decount = 1;
            }
            if(i<x){
                decount++;
                increase = incount;
                incount = 1;
            }
            
            if (decount>decrease){decrease = decount;}
            if (incount>increase){increase = incount;}

            x = i;
        }
    });
    console.log(increase);
    console.log(decrease);
}

data = [2, 1, 4, 6, 8, 2, 9, 5, 2, 3];

tree(data);