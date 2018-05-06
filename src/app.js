import {person, sayHello} from './lib';

const jsonsURL = 'https://jsonplaceholder.typicode.com/posts';


console.log(sayHello());

async function getPosts(url) {
    const response = await fetch (url);
    const data = await response.json();
    return data;
}

getPosts(jsonsURL).then(posts => console.log(posts));