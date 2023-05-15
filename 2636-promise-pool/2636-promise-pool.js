const promisePool = async function(functions, n) {
  const it = functions[Symbol.iterator]()
  
  const add = async () => {
    const { value, done } = it.next()
    if(value) {
      await value()
      await add()
    }
  }
  
  const arr = []
  for(let i = 0; i < n; i++) {
    arr.push(add())
  }
  
  return Promise.all(arr)
};