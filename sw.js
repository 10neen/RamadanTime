const CACHE_NAME = "ramadan-cache-v7";

// قائمة الملفات التي سيتم حفظها في ذاكرة الموبايل ليعمل التطبيق بدون إنترنت
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "script.js",
  "main-b.png",
  "ramadan-fanous.png",
  "manifest.json"
];

// مرحلة التثبيت: حفظ الملفات في الكاش
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("تم فتح ذاكرة التخزين المؤقت وحفظ الملفات");
      return cache.addAll(urlsToCache);
    })
  );
});

// مرحلة الاستدعاء: جلب الملفات من الكاش إذا كان المستخدم أوفلاين
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // إذا وجد الملف في الكاش نعرضه، وإذا لم يوجد نجلبة من الإنترنت
      return response || fetch(event.request);
    })
  );
});

// مرحلة التحديث: مسح الكاش القديم عند إصدار نسخة جديدة
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

});





