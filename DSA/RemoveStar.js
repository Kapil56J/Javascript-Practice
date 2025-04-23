// Remove * from key

const obj = {
    '*first' : 1,
    'second' : 2,
    'third*' : 3
  };
  
  const clearObj = {};
  for (let key in obj) {
    let newKey = key.replace('*','');
    clearObj[newKey] = obj[key]
  }
  console.log('clearObj',clearObj)