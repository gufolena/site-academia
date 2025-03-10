const staticDevSejaFit = "dev-seja-fit-site-v1"
const assets = [
  "/",
  "/index.html",
  "/main.css",
  "/main.js",
  "/img/home2.jpg",
  "/img/home1.jpg",
  "/img/musculosa1.jpg",
  "/img/sobre.jpeg",
  "/img/casal na academia.jpg",
  "/img/man-2604149_1920.jpg",
  "/img/personal1.jpeg",
  "/img/Personalmulher1.jpeg",
  "/img/personal2.jpeg",
  "/img/Personalmulher2.jpeg",
  "/img/post1 (4).jpeg",
  "/img/post1 (7).jpeg",
  "/img/Atleta feminina com halteres na academia _ Foto Premium.jpeg",
  "/img/post3.jpeg",
  "/img/post4.jpeg",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
  "https://unpkg.com/swiper@7/swiper-bundle.min.css",
  "https://unpkg.com/swiper@7/swiper-bundle.min.js",
  "https://i.postimg.cc/J46txFdD/icon-1.png",
  "https://i.postimg.cc/5N3KRBwF/icon-2.png",
  "https://i.postimg.cc/pTjkP83x/icon-3.png",
  "https://i.postimg.cc/4xhDF81N/pic-1.png",
  "https://i.postimg.cc/ry7XCXSY/pic-2.png",
  "https://i.postimg.cc/7ZxBSmQW/pic-3.png",
  "https://i.postimg.cc/8zjv8vFC/pic-4.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevSejaFit).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})