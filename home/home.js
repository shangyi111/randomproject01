getData();

async function getData(){
	const response =  await fetch('/api');
	const data = await response.json();

	for(item of data){
		const root = document.createElement('p');
		const author = document.createElement('div');
		const date = document.createElement('div');
		const content = document.createElement('div');
		const image = document.createElement('img');


		author.textContent = `author: ${item.author}`;
		const dateString = new Date(item.timestamp).toLocaleString();
		date.textContent = dateString;
		image.src = item.image64;
		image.alt = 'blog picture showing author face'

		root.append(author,date,content,image);
		document.body.append(root);
	}
	console.log(data);
}