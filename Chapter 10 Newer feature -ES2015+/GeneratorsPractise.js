function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const result = makeRangeIterator(2, 100, 1);
// console.log(result.next().value);
// console.log(result.next().value);
// console.log(result.next().value);
// getting value by for...of
for (const itItem of result) {
    console.log(itItem);
}

function* makeIterator() {
    yield 1;
    yield 2;
}

const it = makeIterator();

for (const itItem of result) {
    console.log(itItem);
}