
function setup(){
	noCanvas();
	const video=createCapture(VIDEO);
	video.size(160,120);
	const button = document.getElementById('submit');
	button.addEventListener('click', async event=>{
		const author = document.getElementById("author").value;
		const content = document.getElementById("content").value;

		video.loadPixels();
		const image64 = video.canvas.toDataURL();
		const data = {author, content,image64};
		const options = {
			method: 'POST',
			headers: { "Content-type": "application/json" },
			body:JSON.stringify(data)
		};
		const response = await fetch('/api',options);
		const json = await response.json();
		console.log(json);
	})
}