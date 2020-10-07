const thing = box => /^\*\s*o\s*\*$/gm.test(box);

console.log(thing(`*******
*     *
*     *
*******`));

const thing2 = box => {
    return box.split(/\n/).map(item => item.replace(/\s/g, "")).includes("*o*");
}

console.log(thing2(`*******
*  o  *
*     *
*******`));

const thing3 = box =>{
    return !!box.match(/^\*\s*o\s*\*$/gm);
}

console.log(thing3(`*******
*  o  *
*     *
*******`));