'use strict';

 import Urls from './index'
 import assert from 'assert'

//example json to test against
let json = []

try {
    json.push(require('./jsontest/ftse-fsi.json'));
    json.push(require('./jsontest/gbp-hkd.json'));
    json.push(require('./jsontest/gbp-usd.json'));
} catch (error) {console.log(error)}


const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];


it('success', async () => {
    const result = await Urls(urls);
    assert.deepEqual(result, json);
});


it('fail', async () => {
    const result = await Urls(urls);
    assert.notEqual(result, json);
});