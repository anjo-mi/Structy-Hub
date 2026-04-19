const liningUp = (arr, k) => {
  if (arr.length < k) return [];
  if (!k) return [[]]

  const res = [];
  const first = arr[0];
  const rest = arr.slice(1);
  const slc = liningUp(rest,k-1);

  for (const list of slc){
    for (let i = 0 ; i <= list.length ; i++){
      res.push([...list.slice(0,i), first, ...list.slice(i)])
    }
  }
  
  for (const list of liningUp(rest,k)) res.push(list);

  return res;
};


module.exports = {
  liningUp,
};
