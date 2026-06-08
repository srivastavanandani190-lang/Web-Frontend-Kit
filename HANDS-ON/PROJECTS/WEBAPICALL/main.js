
async function github() {
  
    try{
          const response = await fetch('https://api.github.com/users');
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
    const data = await response.json();
    const parent = document.getElementById('first');
    for (let user of data) {
        const element = document.createElement('div');
        element.classList.add('user');

        const img = document.createElement('img');
        img.src = user.avatar_url;

        const username = document.createElement('h2');
        username.textContent = user.login;

        const anchor= document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Profile Link";  
        element.append(img, username, anchor);
        parent.appendChild(element);
}
}

catch(error){
    console.log("Error:", error);
}  
} 

github();
