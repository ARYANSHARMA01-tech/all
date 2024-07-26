const Slider = () => {
  const slideRef = document.createElement("div");
  const loadingProgress = 0;

  const handleClickNext = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.querySelectorAll(".item");
    slideRef.prepend(items[items.length - 1]);
  };

  const data = [
    {
      id: 1,
      imgUrl:
        "https://r4.wallpaperflare.com/wallpaper/533/163/784/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-d6caac3492787d76e8e36b4298facda4.jpg",
      desc: "Some beautiful moons cannot be created without getting creativity.",
      name: "EXPLORE MOON ART",
      link: "https://aryansharma01-tech.github.io/Restaurant/",
    },
    {
      id: 2,
      imgUrl: "img/Groceries.jpg",
      desc: "Freshness You Can Taste, Quality You Can Trust!.",
      name: "GROCERIES",
      link: "https://aryansharma01-tech.github.io/Grocery_Store/",
    },
    {
      id: 3,
      imgUrl: "img/resturant.jpg",
      desc: "Flavors That Dance on Your Tongue.",
      name: "RESTURANT",
      link: "https://aryansharma01-tech.github.io/Restaurant/",

    },
    {
      id: 4,
      imgUrl:
        "https://r4.wallpaperflare.com/wallpaper/980/85/258/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-6de2411b3abf2329924b3fa151dd2c25.jpg",
      desc: "Some beautiful moons cannot be created without getting creativity.",
      name: "EXPLORE MOON ART",
      link: "https://aryansharma01-tech.github.io/Restaurant/",
    },
  ];

  // create the container div
  const container = document.createElement("div");
  container.classList.add("container");

  //create the loadbar div
  const loadbar = document.createElement("div");
  loadbar.classList.add("loadbar");
  loadbar.style.width = `${loadingProgress}%`;

  //Append loadbar to container
  container.appendChild(loadbar);

  //Append slide div to container
  container.appendChild(slideRef);

  // Create and append items to slide div
  data.forEach((item) => {
    const slideItem = document.createElement("div");
    slideItem.classList.add("item");
    slideItem.style.backgroundImage = `url(${item.imgUrl})`;

    const content = document.createElement("div");
    content.classList.add("content");

    const name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;

    const des = document.createElement("div");
    des.classList.add("des");
    des.textContent = item.desc;

    const button = document.createElement("a");
    button.textContent = "Visit";
    button.href = item.link;
    button.target = "_blank"; // Open link in a new tab

    content.appendChild(name);
    content.appendChild(des);
    content.appendChild(button);
    slideItem.appendChild(content);
    slideRef.appendChild(slideItem);
  });

  // Create the buttons div
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  // Create the prev button
  const prevButton = document.createElement("button");
  prevButton.id = "prev";
  prevButton.addEventListener("click", handleClickPrev);

  const prevIcon = document.createElement("i");
  prevIcon.className = "fa fa-angle-left";
  prevButton.appendChild(prevIcon);

  // Create the next Button
  const nextButton = document.createElement("button");
  nextButton.id = "next";
  nextButton.addEventListener("click", handleClickNext);

  const nextIcon = document.createElement("i");
  nextIcon.className = "fa fa-angle-right";
  nextButton.appendChild(nextIcon);

  // Append buttons to the container
  buttons.appendChild(prevButton);
  buttons.appendChild(nextButton);
  container.appendChild(buttons);

  // Add the container to the DOM (assuming there is an element with id "root" where you want to mount the slider)
  document.getElementById("root").appendChild(container);
};

// Call the Slider function to initialize the slider
Slider();
