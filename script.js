async function translateText() {

    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if(text.trim() === ""){
        alert("Please enter text");
        return;
    }

    const url =
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("outputText").value =
            data[0].map(item => item[0]).join("");

    } catch(error) {
        alert("Translation failed");
        console.log(error);
    }
}
