# 🖼️✨ Image Slider

A simple and elegant **Image Slider** built using **HTML, CSS, and JavaScript**. 🌐💙
This project allows users to view multiple images one by one using a **Next** button with a smooth and clean UI. 🔄✨

---

## 🚀 Live Project

🔗 **Live Demo:**
👉 https://codepen.io/editor/mayurmemariya077/pen/01a0cd35-1cc3-70de-8f8c-47eed885d078

🌐 The project can be viewed directly in the browser without installing anything.

---

## 🎥 Video Explanation

📺 **Project Explanation Video:**
👉 https://drive.google.com/file/d/18dLQEp0yg6UMSMK8uhp0Kzv_xaWD8r6t/view?usp=drive_link

🎬 The video explains the project structure, JavaScript logic, image changing functionality, and how the slider works.

---

## ✨ Features

* 🖼️ Multiple images in a slider
* 👉 Next button for image navigation
* 🔄 Automatically returns to the first image
* 🎨 Aesthetic dual-tone UI
* 💎 Clean and modern design
* 📱 Responsive layout
* ⚡ Simple JavaScript logic
* 🌐 Uses Picsum Photos for images

---

## 🛠️ Technologies Used

| Technology        | Purpose                       |
| ----------------- | ----------------------------- |
| 🌐 HTML5          | Creates the slider structure  |
| 🎨 CSS3           | Styling and responsive design |
| ⚡ JavaScript      | Handles slider functionality  |
| 🖼️ Picsum Photos | Provides slider images        |

---

## ⚙️ How It Works

The project stores multiple image URLs inside a JavaScript array. 📦

When the user clicks the **Next** button:

1. 👉 The `index` value increases.
2. 🖼️ The next image is selected from the array.
3. 🔄 When the last image is reached, the index becomes `0`.
4. ✨ The slider starts again from the first image.

```javascript
index++;

if (index >= images.length) {
    index = 0;
}

image.src = images[index];
```

---

## 📂 Project Structure

```text
📁 Image-Slider
│
├── 📄 index.html
├── 🎨 style.css
└── ⚡ script.js
```

---

## 🎯 Learning Outcomes

By creating this project, I practiced:

* 📌 JavaScript Arrays
* 📌 DOM Manipulation
* 📌 `getElementById()`
* 📌 `addEventListener()`
* 📌 Click Events
* 📌 Changing Image `src`
* 📌 `if` Conditions
* 📌 Basic Image Slider Logic

---

## 🌟 Project Flow

🖼️ **Image 1**
⬇️
👉 **Click Next**
⬇️
🖼️ **Image 2**
⬇️
👉 **Click Next**
⬇️
🖼️ **Image 3**
⬇️
🔄 **Last Image → First Image**

---

## 💡 Conclusion

This Image Slider is a beginner-friendly JavaScript project that demonstrates how **arrays, DOM manipulation, events, and conditional statements** can be combined to create an interactive web component. 🚀💙

---

## 👨‍💻 Author

**Mayur** 💙

✨ *Built with HTML, CSS & JavaScript.*
