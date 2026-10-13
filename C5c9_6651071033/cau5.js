function display_random_image() {
    var images = [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
    ];

    var index = Math.floor(Math.random() * images.length);

    document.getElementById("imageArea").innerHTML =
        '<img src="' + images[index] + '" width="500">';
}

document.getElementById("jsstyle").onclick = display_random_image;