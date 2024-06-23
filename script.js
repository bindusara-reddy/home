// Sample data - replace with your actual content
const content = {
    blog: [
        { title: "My First Blog Post", preview: "This is a preview of my first blog post...", image: "https://via.placeholder.com/300x200", link: "#" },
        { title: "Adventures in Coding", preview: "Exploring the world of programming...", image: "https://via.placeholder.com/300x200", link: "#" },
    ],
    photos: [
        { title: "Sunset at the Beach", image: "https://via.placeholder.com/300x200", link: "#" },
        { title: "City Lights", image: "https://via.placeholder.com/300x200", link: "#" },
    ],
    videos: [
        { title: "My Latest Project", preview: "A video showcasing my recent work...", image: "https://via.placeholder.com/300x200", link: "#" },
    ],
    research: [
        { title: "Machine Learning in Healthcare", preview: "A study on the applications of ML in medical diagnosis...", image: "https://via.placeholder.com/300x200", link: "#" },
    ]
};

// Function to create content items
function createItem(item) {
    return `
        <div class="item">
            <img src="${item.image}" alt="${item.title}">
            <div class="item-content">
                <h3>${item.title}</h3>
                <p>${item.preview || ''}</p>
                <a href="${item.link}">Read More</a>
            </div>
        </div>
    `;
}

// Populate content
Object.keys(content).forEach(section => {
    const sectionEl = document.getElementById(section);
    content[section].forEach(item => {
        sectionEl.innerHTML += createItem(item);
    });
});
