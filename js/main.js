const stars = document.querySelectorAll(".stars");

document.addEventListener("mousemove", (e) => {
    // Lấy vị trí chuột theo tỷ lệ % màn hình (từ -0.5 đến 0.5)
    let x = (e.clientX / window.innerWidth) - 0.5;
    let y = (e.clientY / window.innerHeight) - 0.5;

    stars.forEach((star, index) => {
        // Tốc độ di chuyển khác nhau cho từng lớp tạo độ sâu
        let speed = (index + 1) * 30; 

        // Sử dụng translate để di chuyển
        star.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});