const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTUVlc6-nwNnMM97U6k6ioqHj00B5GEkOwudW22v2PGCiur5jL8y4LiJkDCdS7lpLc-g/exec";

document.getElementById("upload-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const file = form.file.files[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    const base64 = reader.result.split(",")[1];

    const data = new URLSearchParams();
    data.append("name", form.name.value);
    data.append("email", form.email.value);
    data.append("file", base64);
    data.append("filename", file.name);
    data.append("mimeType", file.type);

    fetch(scriptURL, {
      method: "POST",
      body: data,
    })
      .then(() => alert("Файл отправлен!"))
      .catch(() => alert("Ошибка при загрузке"));
  };

  reader.readAsDataURL(file);
});
