

export function pull_the_trigger() {
    var theone = Math.floor(Math.random() * 6)
    if (theone <= 1)
        console.log("Bang. You\'re dead!")
    else {
        console.log("Click!")
    }
}

pull_the_trigger();