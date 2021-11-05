const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

for (let i in posts){
    const postsList = document.querySelector('.posts-list');

    let post=document.createElement('div');
    post.className=('post');

    let postHeader=document.createElement('div');
    postHeader.className=('post__header');

    let postMeta=document.createElement('div');
    postMeta.className=('post-meta');

    let postMetaIcon=document.createElement('div');
    postMetaIcon.className=('post-meta__icon');
    postMetaIcon.innerHTML = ` <img class="profile-pic" src=${posts[i].author.image} alt="Phil Mangione"> `;


    let postMetaData=document.createElement('div');
    postMetaData.className=('post-meta__data');

    let postMetaAuthor=document.createElement('div');
    postMetaAuthor.className=('post-meta__author');
    postMetaAuthor.innerHTML=`${posts[i].author.name}`;

    let postMetaTime=document.createElement('div');
    postMetaTime.className=('post-meta__time');
    postMetaTime.innerHTML=`${posts[i].created}`;

    let postText=document.createElement('div');
    postText.className=('post__text');
    postText.innerHTML=`${posts[i].content}`;

    let postImage=document.createElement('div');
    postImage.className=('post__image');
    postImage.innerHTML=` <img src=${posts[i].media} alt="">`;

    let postFooter=document.createElement('div');
    postFooter.className=('post__footer');

    let likesJsLikes=document.createElement('div');
    likesJsLikes.className=('likes');
    likesJsLikes.classList.add('js-likes');

    let likesCta=document.createElement('div');
    likesCta.className=('likes__cta');
    likesCta.innerHTML=` <a class="like-button  js-like-button" href="#" data-postid="1">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
    </a>`;

    let likesCounter=document.createElement('div');
    likesCounter.className=('likes__counter');
    likesCounter.innerHTML=`  Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone`;


    postMetaData.append(postMetaAuthor);
    postMetaData.append(postMetaTime);

    postMeta.append(postMetaIcon);
    postMeta.append(postMetaData);

    postHeader.append(postMeta);

    post.append(postHeader);
    post.append(postText);
    post.append(postImage);
    post.append(postFooter);

    postFooter.append(likesJsLikes);

    likesJsLikes.append(likesCta);
    likesJsLikes.append(likesCounter);


    postsList.append(post);

}

















