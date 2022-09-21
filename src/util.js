export default function createElementWithClass(className) {
  const foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}
