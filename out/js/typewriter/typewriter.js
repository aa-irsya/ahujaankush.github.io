"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Implementation of a infinite looping typewriter
 */
class Typewriter {
    /**
     * @param elementID - id of div containing the divs
     * @param speed - speed of the typewriter
     * @param delSpeed - deletion speed of the typewriter
     * @param afterDelay - pause after writing
     * @param afterDelDelay - pause after deletion
     */
    constructor(elementID, speed, delSpeed, afterDelay, afterDelDelay) {
        this.elementIndex = 0; // Index of current Element
        this.contentPosition = 0; // Character index of element
        this.typewriterDirection = true; // true for forward and false for backwards
        // Arr which will save contents of spans (elements)
        this.contents = [];
        let element = document.getElementById(elementID);
        let elements = element === null || element === void 0 ? void 0 : element.getElementsByTagName("span");
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
            let elm = elements === null || elements === void 0 ? void 0 : elements.item(i);
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
    execute() {
        (() => __awaiter(this, void 0, void 0, function* () {
            // console.log(this.contents);
            if (this.contentPosition >= this.contents[this.elementIndex].content.length) {
                this.typewriterDirection = false;
                this.internSpeed = this.delSpeed;
                yield delay(this.afterDelay);
            }
            else if (this.contentPosition == 0 && !this.typewriterDirection) {
                this.typewriterDirection = true;
                this.internSpeed = this.speed;
                this.elementIndex++;
                yield delay(this.afterDelDelay);
            }
            // Begin again
            if (this.elementIndex >= this.contents.length) {
                this.elementIndex = 0;
            }
            let cnt = this.contents[this.elementIndex];
            if (this.typewriterDirection) {
                cnt.element.innerHTML += cnt.content[this.contentPosition];
                this.contentPosition++;
            }
            else {
                cnt.element.innerHTML = cnt.element.innerHTML.slice(0, this.contentPosition - 1);
                this.contentPosition--;
            }
            setTimeout(this.execute.bind(this), this.internSpeed);
        }))();
    }
}
