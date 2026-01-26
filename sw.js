const CACHE_NAME = "ramadan-cache-v9";

// قائمة الملفات التي سيتم حفظها ليعمل التطبيق بدون إنترنت
const urlsToCache = [
  "/",
  "index.html",
  "style.css",
  "script.js",
  "main-b.png",
  "ramadan-fanous.png",
  "manifest.json"
];

// 1. مرحلة التثبيت: حفظ الملفات وجعل النسخة الجديدة "تتخطى الانتظار"
self.addEventListener("install", event => {
  // تجعل السيرفس وركر الجديد يحل محل القديم فورًا دون انتظار إغلاق المتصفح
  self.skipWaiting(); 
  
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("تم فتح الذاكرة v9 وحفظ الملفات بنجاح");
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. مرحلة التنشيط: مسح الكاش القديم (v8 وما قبله) والسيطرة فورًا
self.addEventListener("activate", event => {
  // تجعل السيرفس وركر يسيطر على الصفحة فور تنشيطه
  self.clients.claim(); 
  
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("جارٍ حذف الكاش القديم:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. مرحلة الاستدعاء: جلب الملفات من الكاش أو الإنترنت
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // إذا وجد الملف في الكاش نعرضه، وإذا لم يوجد نجلبه من الإنترنت
      return response || fetch(event.request).catch(() => {
        // اختياري: يمكنك هنا عرض صفحة "أنت أوفلاين" إذا فشل الاتصال بالكامل
      });
    })
  );
});
