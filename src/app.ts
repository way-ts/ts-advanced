// class Person {
//     constructor(private name: string) {}
// }

// const max = new Person('Maxim')

// Demo coment

// const btn: Element = document.querySelector('#btn')!

// btn.addEventListener('click', () => {
//     console.log('Btn clicked!')
// })

// ==========

let anyFlag

const globalVar = 'Message'

function logInfo(data: string, _?: number) {
    // const message = 'String'
    console.log(data)
    anyFlag = true
    console.log(anyFlag)
}

logInfo('I am log string')

function multiple(a: number, b: number): number {
    if (a && b) {
        return a * b
    }
    return 0
}