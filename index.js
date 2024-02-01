//forEach iterator method
function myEach(collection, callback) {
  const checkIfArray = Array.isArray(collection);
  if (!checkIfArray) {
    const objectToArray = Object.values(collection);
    objectToArray.forEach(element => callback(element));
  } else {
    collection.forEach(element => callback(element));
  }
  return collection
}

//map iterator method
function myMap(collection, callback) {
  const checkIfArray = Array.isArray(collection);
  if (!checkIfArray) {
    const objectToArray = Object.values(collection);
    const newArray = objectToArray.map(element => callback(element))
    return newArray;
  } else {
    const newArray = collection.map(element => callback(element))
    return newArray;
  }
}

//reduce iterator method
function myReduce(collection, callback, acc) {
  
  function checkAcc(collection, acc) {
    if (acc) {
      return collection.reduce((total, element) => callback(total, element, collection), acc);
    } else {
      return collection.reduce((total, element) => callback(total, element, collection));
    }
  }

  const checkIfArray = Array.isArray(collection);
  if (!checkIfArray) {
    const objectToArray = Object.values(collection);
    return checkAcc(objectToArray, acc);
  } else {
    console.log(collection)
    return checkAcc(collection, acc);
  }
}

//find iterator method
function myFind(collection, predicate) {
  const checkIfArray = Array.isArray(collection);
  if (!checkIfArray) {
    const objectToArray = Object.values(collection);
    const newArray = objectToArray.find(element => predicate(element))
    return newArray;
  } else {
    const newArray = collection.find(element => predicate(element))
    return newArray;
  }
}

//filter iterator method
function myFilter(collection, predicate) {
  const checkIfArray = Array.isArray(collection);
  if (!checkIfArray) {
    const objectToArray = Object.values(collection);
    const newArray = objectToArray.filter(element => predicate(element))
    return newArray;
  } else {
    const newArray = collection.filter(element => predicate(element))
    return newArray;
  }
}


//length method
function mySize(collection) {
  const checkIfArray = Array.isArray(collection);
  if (checkIfArray) {
    return collection.length;
  } else {
    const objectToArray = Object.values(collection);
    return objectToArray.length;
  }
}

//first element of array
function myFirst(array, n) {
  if (n) {
    return array.slice(0, n)
  } else {
    return array[0]
  }
}


//last element of array
function myLast(array, n) {
  if (n) {
    return array.slice([array.length-n], array.length)
  } else {
    return array[array.length-1];
  }
}

//sort method
function mySortBy(array, callback) {
  const clonedArray = [...array]
  const newArray = clonedArray.sort((a, b) => {
    if(callback(a) > callback(b)) {
      return 1
    } else if (callback(b) > callback(a)) {
      return -1
    } else {
      return 0
    }
  })
  console.log(newArray, array)
  return newArray;
}

//Key of object
function myKeys(object) {
  return Object.keys(object);
}

//values of object
function myValues(object) {
  return Object.values(object);
}