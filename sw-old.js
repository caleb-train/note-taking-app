
const cacheName = 'cache-v1'
const precacheResources = [
  '/index.html',
  '/index.css',
  '/index.js',
  'offline.html',
  'bg-what.webp',
  'note-logo.png',
  'write.png',
  'crumpled-paper.jpg'
]

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(cacheName)
    .then(cache=>{
      cache.addAll(precacheResources)
    })
  )
})

self.addEventListener('fetch', e=>{
  if(!navigator.onLine){
    e.respondWith(
      caches.match(e.request)
      .then(res=>{
        console.log(res)
        if(res) return res;
        return new Response('./offline.html', { headers: {'Content-Type': 'text/html'}})
      })
    )
  }else{
    console.log(e.request.url)
    e.respondWith(
      fetch(e.request)
      .then(res=>{
        
        if (res && e.request.method == 'GET') {
          return caches.open(cacheName)
          .then(cache=>{
            return cache.put(e.request, res.clone())
            .then(_=>{
              return res
            })
          })
        } else return res
      })
    )
  }
})
