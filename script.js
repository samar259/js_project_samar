document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const generateButton = document.getElementById("generateButton");
    const clearAllButton = document.getElementById("clearAllButton");
    const tagsSection = document.getElementById("tagsSection");

    // Function to create a name tag
    function createNameTag(name) {
        const nameTag = document.createElement("div");
        nameTag.classList.add("name-tag");
        nameTag.style.backgroundColor = getRandomColor(); // Generate a random background color
        nameTag.innerHTML = `
            <p>${name}</p>
            <span class="delete-icon">❌</span>
        `;
        tagsSection.appendChild(nameTag);

        // Add event listener to delete the name tag
        const deleteIcon = nameTag.querySelector(".delete-icon");
        deleteIcon.addEventListener("click", function () {
            tagsSection.removeChild(nameTag);
        });
    }

    // Function to generate a random background color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for the "Generate Name Tag" button
    generateButton.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (name !== "") {
            createNameTag(name);
            nameInput.value = ""; // Clear the input field
        }
    });

    // Event listener for the "Clear All" button
    clearAllButton.addEventListener("click", function () {
        while (tagsSection.firstChild) {
            tagsSection.removeChild(tagsSection.firstChild);
        }
    });
});
