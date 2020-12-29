// ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']. 

function spacey(a){
  for(let i = 1;i<a.length; i++)
    a[i]=a[i-1] + a[i];
  return a;
}
console.log(spacey(['i', 'have','no','space']))