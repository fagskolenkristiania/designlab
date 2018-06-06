function mediumPosts(containerId){
    console.log(containerId)

    let mediumPosts = {};
    
    const mediumPostsEl = document.getElementById(containerId);
    const mediumPostsTitleEl = document.getElementById('medium-posts-title');
    const mediumPostListContainerEl = document.getElementById('medium-post-list-container');

    fetch("https://exec.clay.run/nicoslepicos/medium-get-user-posts-new?profile=designlabben", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json().then(function (data) {
                mediumPosts.data = data;

                mediumPostsEl.dataset.fetchSuccess = true;

                for (var key in mediumPosts.data.posts) {
                    if (mediumPosts.data.posts.hasOwnProperty(key)) {
                        var postPath = mediumPosts.data.posts[key];

                        var titleEl = "",
                            subTitleEl = "",
                            publishedDateEl = "",
                            thumbEl = "";

                        var publishedDate = moment(postPath.firstPublishedAt).locale('nb').format('Do MMMM YYYY');

                        if (postPath.title) {
                            titleEl = `<h3 class="medium-article-title">${postPath.title}</h3>`;
                        }
                        if (postPath.content.subtitle) {
                            subTitleEl = `<p class="medium-article-subtitle">${postPath.content.subtitle}</p>`;
                        }
                        if (postPath.virtuals.previewImage.imageId) {
                            thumbEl = `<img class="medium-article-thumb" src="https://cdn-images-1.medium.com/fit/t/200/200/${postPath.virtuals.previewImage.imageId}">`;
                        }
                        if (publishedDate) {
                            publishedDateEl = `<span class="medium-article-date">${publishedDate}</span>`;
                        }

                        mediumPostsTitleEl.innerHTML = "Siste fra Medium";
                        mediumPostListContainerEl.innerHTML += `
                            <li>
                                <a href="https://medium.com/@designlabben/${postPath.uniqueSlug}">
                                    <div>
                                        ${publishedDateEl}
                                        ${thumbEl}
                                    </div>
                                    <div>
                                        ${titleEl}
                                        ${subTitleEl}
                                    </div>
                                </a>
                            </li>
                        `;
                    }
                }

            });
        }).catch(error => {
            console.log(error);
        });
}