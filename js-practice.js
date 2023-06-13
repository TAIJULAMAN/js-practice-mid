// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 
var numbers=[5,6,11,44,3,4];

function SmallestNumber(numbers){
    
    let smallest =numbers[0];
    for (let i = 0 ; i < numbers.length; i++) {

    var element = numbers[i];

      if (element < smallest) {
        smallest = element;
      }
    }
    
    return smallest;
  }
  smallest =SmallestNumber(numbers);
  var result = SmallestNumber(numbers);
//   console.log(result);

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

var numbers =[12,11,10];
function searchingSmallNumber(numbers){
    var smallNumber = numbers[0];
    for(var i= 0; i<numbers.length; i++){
        var element = numbers[i];
        if(element < smallNumber)
        {
            smallNumber= element;
        }
       
    }
    return smallNumber;
}
smallNumber=searchingSmallNumber(numbers);
 var result=searchingSmallNumber(numbers);
//  console.log(result);

// ৩. একটা ফাংশন লিখো। 
// সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। 
// সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
//  তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। 

function calculateAverage(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
  average = sum /number.length;
    return average;
  }
  
  var numbers = [4, 7, 12, 3, 9];
  var average = calculateAverage(numbers);
//   console.log(average);

  
// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 


function mathOfA(a,b){
let area =2*a*b;
// const a=12;
// const b=12;
return area;
}
area =mathOfA(12,12);
console.log(area);