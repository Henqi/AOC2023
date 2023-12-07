import { readFile } from 'fs';

const filepath: string = 'E:/dev/AOC2023/src/day1/day1.txt'
var values: number[] = []
var sum = 0

readFile(filepath, 'utf8', (err, data) => {
    if (err) {
        console.log('Error when reading file:', err)
        return
    } else {
        const input: string[] = data.split('\r\n')
        input.map(row => {
            var numbers = ''
            row.split('')
                .forEach(letter => {
                    if (!Number.isNaN(parseInt(letter))) {
                        numbers += letter
                    }
                })
                const calibrationValue = parseInt(numbers[0] + numbers[numbers.length-1])
                values.push(calibrationValue)
        })
        const answer = values.reduce((a, b) => a + b, 0)
        console.log(answer)
    }   
})