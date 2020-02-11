let str = 'Hello there from Lighthouse Labs'; 
let stdout = process.stdout;
let counter = 0;
for(const chars of str){ 
    counter++;
    setTimeout(() => {
    stdout.write(chars);
    
}, counter * 50);

}
setTimeout(() => {
    stdout.write('\n');
    
}, str.length * 50);
