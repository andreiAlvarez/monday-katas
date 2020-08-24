//Solution 1
function getMiddle(s)
{
  var position;
        var length;

        if(s.length % 2 == 1) {
            position = s.length / 2;
            length = 1;
        } else {
            position = s.length / 2 - 1;
            length = 2;
        }

        return s.substring(position, position + length);
  //solution 2      const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);
//return s;
}

//getMiddle("test"); //should return "es"

//getMiddle("testing"); //should return "t"

getMiddle("middle"); //should return "dd"

//getMiddle("A"); //should return "A"
