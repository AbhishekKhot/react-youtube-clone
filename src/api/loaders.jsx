export async function homeDataLoader() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!data.ok) throw new Error('Something went wrong!');

    const todo = await data.json();

    return todo;
}

export async function searchDataLoader({ params }) {
    const { query } = params
    const searchText = query.split(':')[1]

    const data = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${searchText}`)
    if (!data.ok) throw new Error('Something went wrong!');

    const todo = await data.json();

    return todo;
}