export default function createElementAndClass(className) {
    let foo = document.createElement('div');
    foo.classList.add(className);
  
    return foo;
  }