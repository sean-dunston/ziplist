const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i]);
    returnList.push(list2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
