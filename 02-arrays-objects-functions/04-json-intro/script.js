const post = {
    id: 1,
    title: 'Post 1',
    body: 'something here'
}

const str = JSON.stringify(post);
console.log(str);

const json = JSON.parse(str);
console.log(json.id);

const library = [];
library.push({
    title: 'Book1',
    author: 'Author1',
    status: {
        own: true,
        reading: false,
        read: false,
    }
});
library.push({
    title: 'Book2',
    author: 'Author2',
    status: {
        own: true,
        reading: false,
        read: false,
    }
});
library.push({
    title: 'Book3',
    author: 'Author3',
    status: {
        own: true,
        reading: false,
        read: false,
    }
});

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title: firstBook} = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);