const CACHE_NAME = "ramadan-cache-v15"; // تحديث الإصدار لضمان تنشيط التعديلات الجديدة

// قائمة الملفات الأساسية - تأكد أن الأسماء مطابقة تماماً للموجود في المجلد
const urlsToCache = [
  "./",                 // المسار الرئيسي
  "index.html",
  "style.css",
  "script.js",
  "main-b.png",
  "ramadan-fanous.png",
  "manifest.json"
];

// 1. التثبيت: حفظ الملفات في الكاش
self.addEventListener("install", event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("PWA: جارٍ حفظ الملفات في الكاش v10...");
      // استخدام map لتجنب توقف الكاش بالكامل إذا فشل ملف واحد
      return Promise.all(
        urlsToCache.map(url => {
          return cache.add(url).catch(err => console.error(`فشل إضافة ${url} للكاش:`, err));
        })
      );
    })
  );
});

// 2. التنشيط: تنظيف الكاش القديم
self.addEventListener("activate", event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log("PWA: حذف الكاش القديم:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. الاستدعاء: استراتيجية "الكاش أولاً ثم الشبكة"
self.addEventListener("fetch", event => {
  // تخطي طلبات الـ Chrome Extensions أو الروابط الخارجية غير الضرورية
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse; // إذا الملف موجود في الكاش، عرضه فوراً
      }

      // إذا لم يكن في الكاش، جربه من الشبكة
      return fetch(event.request).then(networkResponse => {
        // تحديث الكاش بالملف الجديد (اختياري لزيادة السرعة لاحقاً)
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // هنا يمكنك إرجاع صفحة أوفلاين افتراضية إذا أردت
        console.log("النت مقطوع والملف غير موجود في الكاش.");
      });
    })
  );
});


