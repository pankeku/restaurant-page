export default function createElementAndClass(className) {
  const foo = document.createElement('div');
  foo.classList.add(className);

  return foo;
}
