const ranNum = Math.floor(Math.random() * 3);
const tagline = document.querySelector(".tagline p");
const taglines = ["Games from the heart. For the curious eye.","One heart. One eye. Infinite worlds.","Born from heartbeats and strange dreams."];
tagline.textContent = taglines[ranNum];
