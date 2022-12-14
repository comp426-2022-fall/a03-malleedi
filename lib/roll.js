#!/usr/bin/env node

export function roll(sides, dice, rolls){
    var result = []

    for(var i = 0; i < rolls; i++){
        var curr = 0;
        for(var j = 0; j < dice; j++){
            curr += Math.floor(Math.random() * sides) + 1;
        }
        result.push(curr);
    }

    const answer = {"sides": sides, 
                    "dice": dice, 
                    "rolls": rolls, 
                    "results": result};

    return answer;
}