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
const displayNewsCategory = (categories) => {
     const categoryContainer = document.getElementById('categoryList-display');
    for (const category of categories) {
        console.log(category.category_name);
        const newsDiv = document.createElement('div');
        newsDiv.className = 'd-inline-block px-4 my-4 text-secondary ';
        newsDiv.innerHTML = `
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
        .then(data => displayNewsCategoryDetails(data.data))
}

//   Display all news data using by category_id

const displayNewsCategoryDetails = news => {
    console.log(news);
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    for (const newsId of news) {
        const newsContainerDiv = document.createElement('div');
        newsContainerDiv.innerHTML = `
        <div class="card p-3 my-5 shadow" style="max-width: 100%;">
        <div class="row gy-4">
    <div class="col-md-3">
        <img src="${newsId.thumbnail_url}" alt="...">
    </div>
    <div class="col-md-9">
        <div class="card-body">
            <h5 class="card-title">${newsId.title}</h5>
            <p class="card-text text-secondary">${newsId.details}</p>

            <div class="row align-items-center">
                <div class="col">
                    <!-------------- writer image,name and date -------------->
                    <div style=" width: 250px;" class="d-flex align-items-center ">
                        <div>
                            <img style="width:50px; height: 50px;" class="rounded-circle mw-100" src="${newsId.image_url}" alt="">
                        </div>

                        <div class="ms-3">
                            <p class="mb-0"><strong class="mb-0">${newsId.author.name?newsId.author.name:'Mr.Writer'}</strong></p>
                            <p class="mb-0">${newsId.author.published_date?newsId.author.published_date:'No published date'}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <!-------------- View numbers -------------->
                    <div class="d-flex align-items-center">
                        <div><i class="fa-regular fa-eye"></i></div>
                        <h6 class="mb-0 ms-2 fw-bold">${newsId.total_view?newsId.total_view:'0'}M</h6>
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
                    <button onclick="loadNewsDetails('${newsId._id}')" class="btn" data-bs-toggle="modal" data-bs-target="#newsDetails">
                        <img src="images/blue-arrow-right-png-6.png" alt="">
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
        `;
        newsContainer.appendChild(newsContainerDiv);
    } 
    const newsItemsCount = document.getElementById('news-items-count');
    newsItemsCount.innerHTML=`
    <div class= "bg-white p-3">
    <h6><span class= "text-primary fs-5">${news.length}</span> items found for this category</h6>
    </div>
    `;
    
}

// loading news details on modal
const loadNewsDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayNewsDetails(data.data[0]))
}

// Display news details on modal
const displayNewsDetails = (newsModal) =>{
    const modalTitle = document.getElementById('newsDetailsLabel');
    modalTitle.innerText = newsModal.title;
    const newsDetails = document.getElementById('newsModalDetail');
    newsDetails.innerHTML = `
    <div>
        <div class="mb-4">
            <img src="${newsModal.thumbnail_url}" alt="...">
        </div>
        <div class="mb-3">
            <p class="mb-0"><strong class="mb-0">Author Name: ${newsModal.author.name?newsModal.author.name:'Mr.Writer'}</strong></p>
            <p class="mb-0">Published Date: ${newsModal.author.published_date?newsModal.author.published_date:'No published date'}</p>
        </div>
        <div >
            <p class="card-text text-secondary">${newsModal.details}</p>
        </div>
    </div>
    `;
}

loadNewsCategory();


  