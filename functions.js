console.log("This is functions tutorial");
 function repeat(name,greetText="Greetings from javascript")
 {
    console.log(greetText+" "+name);
   // console.log(name+"is a good boy");
 }
 let name="utkarsh";
 let name1="saumya";
 let name2="sandhya";
 let name3="sanjeev";
 let greetText;
 repeat(name,greetText);
 repeat(name1,greetText);
 repeat(name2,greetText);
 repeat(name3,greetText);

 function sum(a,b,c)
 {
  let d=a+b+c;
  return d;
}
 let x = sum(1,2,3);
 console.log(x);
