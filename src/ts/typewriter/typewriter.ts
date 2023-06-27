class Typewriter {
  constructor(elementID: string, speed: number) {
    let element = document.getElementById(elementID) as HTMLInputElement;
    let elements = element?.getElementsByTagName("span");
    // Executing typewriter is not possible without elements
    if (elements === undefined) {
      return;
    }
    // Arr which will save contents of spans (elements)
    let contents: { content: string; element: HTMLSpanElement }[] = [];
    for (let i = 0; i < elements.length; i++) {
      let elm = elements?.item(i);
      if (elm !== undefined && elm !== null) {
        let cnt = elm.innerHTML || "";
        elm.innerHTML = "";
        contents.push({ content: cnt, element: elm });
      }
    }
    console.log(contents);
    let elementIndex = 0; // Index of current Element
    let contentPosition = 0; // Character index of element
    let typewriterDirection = true; // true for forward and false for backwards

    function execute(): void {
      if (contentPosition >= contents[elementIndex].content.length) {
        typewriterDirection = false;
        speed -= 50;
      } else if (contentPosition == 0 && !typewriterDirection) {
        typewriterDirection = true;
        speed += 50;
        elementIndex++;
      }
      // Begin again
      if (elementIndex >= contents.length) {
        elementIndex = 0;
      }
      let cnt = contents[elementIndex];
      if (typewriterDirection) {
        cnt.element.innerHTML += cnt.content[contentPosition];
        contentPosition++;
      } else {
        cnt.element.innerHTML = cnt.element.innerHTML.slice(
          0,
          contentPosition - 1
        );
        contentPosition--;
      }
      console.log({ elementIndex, contentPosition, typewriterDirection });
      setTimeout(execute, speed);
    }
    execute();
  }
}
