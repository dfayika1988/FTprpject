import axios from "axios";


const getData = () => {

  
  axios.all([
    axios.get('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json'), 
    axios.get('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json'),
    axios.get('https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'),
  ])
  .then(axios.spread((obj1, obj2) => {
    console.log('FIRST', obj1.data.data);
    console.log('SECOND', obj2.data.data);

  }));
};

getData();