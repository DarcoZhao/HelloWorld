var x:string = process.argv[2];
var num:number = parseInt(x);

var line, b, c:number;
var star, space:string;

for(line=0; line<num; line++){
    star = "";
    space = "";
    for(b=0; b<(num-line-1); b++){
        space = space + " ";
    }
    for(c=0; c<(2*line+1); c++){
        star = star + "*";
    }
    console.log(space + star);
}