/**
 * Implementation of a infinite looping typewriter
 */
class Typewriter {
  elementIndex = 0; // Index of current Element
  contentPosition = 0; // Character index of element
  typewriterDirection = true; // true for forward and false for backwards
  speed: number;
  delSpeed: number;
  afterDelay: number;
  afterDelDelay: number;
  internSpeed: number;
  // Arr which will save contents of spans (elements)
  contents: { content: string; element: HTMLSpanElement }[] = [];

  /**
   * @param elementID - id of div containing the divs
   * @param speed - speed of the typewriter
   * @param delSpeed - deletion speed of the typewriter
   * @param afterDelay - pause after writing
   * @param afterDelDelay - pause after deletion
   */
  constructor(
    elementID: string,
    speed: number,
    delSpeed: number,
    afterDelay: number,
    afterDelDelay: number
  ) {
    let element = document.getElementById(elementID) as HTMLInputElement;
    let elements = element?.getElementsByTagName("span");
    this.speed = speed;
    this.delSpeed = delSpeed;
    this.afterDelay = afterDelay;
    this.afterDelDelay = afterDelDelay;
    this.internSpeed = this.speed;
    // Executing typewriter is not possible without elements
    if (elements === undefined) {
      return;
    }
    for (let i = 0; i < elements.length; i++) {
      let elm = elements?.item(i);
      if (elm !== undefined && elm !== null) {
        let cnt = elm.innerHTML || "";
        elm.innerHTML = "";
        this.contents.push({ content: cnt, element: elm });
      }
    }
  }

  /**
   * Execute typewriter
   */
  execute(): void {
    (async () => {
      // console.log(this.contents);
      if (
        this.contentPosition >= this.contents[this.elementIndex].content.length
      ) {
        this.typewriterDirection = false;
        this.internSpeed = this.delSpeed;
        await delay(this.afterDelay);
      } else if (this.contentPosition == 0 && !this.typewriterDirection) {
        this.typewriterDirection = true;
        this.internSpeed = this.speed;
        this.elementIndex++;
        await delay(this.afterDelDelay);
      }
      // Begin again
      if (this.elementIndex >= this.contents.length) {
        this.elementIndex = 0;
      }
      let cnt = this.contents[this.elementIndex];
      if (this.typewriterDirection) {
        cnt.element.innerHTML += cnt.content[this.contentPosition];
        this.contentPosition++;
      } else {
        cnt.element.innerHTML = cnt.element.innerHTML.slice(
          0,
          this.contentPosition - 1
        );
        this.contentPosition--;
      }
      setTimeout(this.execute.bind(this), this.internSpeed);
    })();
  }
}
