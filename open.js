function openURLs(){
    let params = new URLSearchParams(window.location.search);
    let test = params.get('test');
    let urls = params.get('urls');
    if (urls) {
        urls = JSON.parse(decodeURIComponent(urls));
        for (i in urls) {
            try {
                if (i == 0 && !test) {
                    window.open(urls[i], '_self');
                } else {
                    window.open(urls[i], '_blank');
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}