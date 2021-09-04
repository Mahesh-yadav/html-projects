export const toggleDOMElement = (domElem) => {
  if(domElem.style.display === 'none'){
    domElem.style.display = 'block';
  }else{
    domElem.style.display = 'none';
  }
}