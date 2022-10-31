let typeWriterDiv = document.getElementById("typeWriterDiv1")

// Structure:
// Word, color

let typeWriterContent = [
    ["Hello ", 'color1'],
    ["World", 'color13'],
    [",", 'color11'],
    ["br"],
    ["I'm ", 'color2'],
    ["Ankush!", 'color4'],
]

let tWData = {
    currentWord: 0,
    currentChar: 0,
    delay: 150,
    writerID: "ts1",
    length: 28,
    status: false
}

function tW_exec() {
    typeWriterDiv.innerHTML = ""
    for (let i = 0; i < typeWriterContent.length; i++) {
        let elem = document.createElement("span");
        elem.classList = typeWriterContent[i][1];
        elem.id = tWData.writerID + i;
        typeWriterDiv.appendChild(elem);
    }
}

async function typeWriter() {
    while (true) {

        if (typeWriterContent[tWData.currentWord].length == 1 && tWData.currentWord < typeWriterContent.length) {
            document.getElementById(tWData.writerID + tWData.currentWord).appendChild(document.createElement(typeWriterContent[tWData.currentWord]))
            tWData.currentWord++;

            if (tWData.currentWord >= typeWriterContent.length) {
                console.log("TypeWriter: completed")
                tWData.status = true
                return
            }
        } else if (typeWriterContent[tWData.currentWord].length == 2 && tWData.currentWord < typeWriterContent.length) {
            if (tWData.currentChar < typeWriterContent[tWData.currentWord][0].length &&
                tWData.currentWord < typeWriterContent.length) {
                document.getElementById(tWData.writerID + tWData.currentWord).innerHTML += typeWriterContent[tWData.currentWord][0][tWData.currentChar];
                tWData.currentChar++;
            }
            else if (tWData.currentChar >= typeWriterContent[tWData.currentWord][0].length &&
                tWData.currentWord < typeWriterContent.length - 1) {
                tWData.currentChar = 0
                tWData.currentWord++;
            }
            else {
                console.log("TypeWriter: completed")
                tWData.status = true
                return
            }
        }
        else {
            console.log("TypeWriter: completed with err")
            tWData.status = true
            return
        }
        await pause()
    }
}

function pause() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, tWData.delay);
    });
}

onload = async () => {
    tW_exec();


    await typeWriter();
    typeWriterDiv = document.getElementById("typeWriterDiv2")
    typeWriterContent = [
        ["// ", 'color8'],
        ["STUDENT", 'color11 coloredComment'],
        [" // ", 'color8'],
        ["LINUX ENTHUSIAST", 'color6 coloredComment'],
        [" // ", 'color8'],
        ["FULL STACK DEV", 'color13 coloredComment'],
    ]

    tWData = {
        currentWord: 0,
        currentChar: 0,
        delay: 70,
        writerID: "ts2",
        length: 28,
        status: false
    }
    tW_exec();
    typeWriter();

}