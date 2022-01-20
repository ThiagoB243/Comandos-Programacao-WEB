function call() {
    const url = 'https://thatcopy.pw/catapi/rest/';

    fetch(url)

    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data);
        var image = document.getElementById('image');
        image.src = data.webpurl;
    });


}

call();