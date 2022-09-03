// loading data using all news category api
// const loadNewsCategory = async () => {
//     try {
//         const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
//         const data = await res.json();
//         displayNewsCategory(data.data.news_category);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

const loadNewsCategory = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(response => response.json())
    // .then(data => console.log(data.data.news_category[0].category_name))
    .then(data => displayNewsCategory(data.data.news_category))
}

//Display all news category using api
const displayNewsCategory = (categories) =>{
    const categoryContainer = document.getElementById('categoryList-display');
  
    for(const category of categories){
        console.log(category.category_name);
        const newsDiv = document.createElement('div');
        newsDiv.className = 'd-inline-block px-4 my-4 text-secondary ';
        newsDiv.innerHTML =`
        <p role="button"><a onclick = "loadNewsCategoryID('${category.category_id}')">${category.category_name}<a></p>
        `;
        categoryContainer.appendChild(newsDiv);
    }
}

//loading data using all news category_id api 
const loadNewsCategoryID = (category_id) => {
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
    //   .then(data => console.log(data.data[0]))
      .then(data => displayNewsCategoryDetails(data.data))
  }

//   Display all news data using by category_id
  const displayNewsCategoryDetails = (newsCategory) => {
    const newsContainer = document.getElementById('news-container');
    for(const news of newsCategory){
        const newsCategoryDiv = document.createElement('div');
        newsCategoryDiv.innerHTML = `
    <div class="row g-4">
    <div class="col-md-3">
        <img src="${news.thumbnail_url}" alt="...">
    </div>
    <div class="col-md-9">
        <div class="card-body">
            <h5 class="card-title">Card Title</h5>
            <p class="card-text text-secondary"> is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-secondary"> is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>

            <div class="row align-items-center">
                <div class="col">
                    <!-------------- writer image,name and date -------------->
                    <div style=" width: 200px;" class="d-flex align-items-center ">
                        <div>
                            <img class="rounded-3 mw-100" src="images/user.png" alt="">
                        </div>

                        <div class="ms-3">
                            <p class="mb-0"><strong class="mb-0">Jane Cooper</strong></p>
                            <p class="mb-0">Jan 10, 2022</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <!-------------- View numbers -------------->
                    <div class="d-flex align-items-center">
                        <div><i class="fa-regular fa-eye"></i></div>
                        <h6 class="mb-0 ms-2 fw-bold">1.5M</h6>
                    </div>

                </div>
                <div class="col">
                    <!-- Rating star -->
                    <div class="d-flex">
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div class="col">
                    <!-------------- Next button ------------->
                    <div>
                        <i class="fa-solid fa-arrow-right-long text-primary fs-5"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
          `;
          newsContainer.appendChild(newsCategoryDiv);
    
  
    }
  }

loadNewsCategory();