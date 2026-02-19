const CACHE_NAME = "ramadan-cache-v20"; // تحديث الإصدار لضمان تنشيط التعديلات الجديدة

// قائمة الملفات الأساسية - تأكد أن الأسماء مطابقة تماماً للموجود في المجلد
const urlsToCache = [
  "./",                 // المسار الرئيسي
  "index.html",
  "style.css",
  "script.js",
  "main-b.png",
  "ramadan-fanous.png",
  "manifest.json",
  "https://fonts.googleapis.com/css2?family=Amiri&family=Tajawal:wght@400;700&display=swap",
  "https://fonts.gstatic.com/s/amiri/v27/J7aRnpd8CGxBHpUrtLMA7w.woff2",
  "https://fonts.gstatic.com/s/tajawal/v9/Iurf6YBj_oCad4k1l8KiHrRpiYlJ.woff2"
];

// 1. التثبيت: حفظ الملفات في الكاش
self.addEventListener("install", event => {
  self.skipWaiting(); 
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("✅ PWA: جارٍ حفظ الملفات في الكاش...");
      // استخدام map لتجنب توقف الكاش بالكامل إذا فشل ملف واحد
      return Promise.allSettled(
        urlsToCache.map(url => {
          return cache.add(url).catch(err => {
            console.warn(`⚠️ فشل إضافة ${url} للكاش:`, err.message);
            return null;
          });
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
            console.log("🗑️ PWA: حذف الكاش القديم:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. الاستدعاء: استراتيجية "الكاش أولاً ثم الشبكة"
self.addEventListener("fetch", event => {
  // تخطي طلبات الـ Chrome Extensions
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('fonts.googleapis.com') && 
      !event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  // استراتيجية خاصة للملفات الثابتة
  if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff2|ttf)$/)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        return cachedResponse || fetch(event.request).then(response => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
    return;
  }

  // استراتيجية "الكاش أولاً ثم الشبكة" للملفات الأخرى
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse; // إذا الملف موجود في الكاش، عرضه فوراً
      }

      // إذا لم يكن في الكاش، جربه من الشبكة
      return fetch(event.request).then(networkResponse => {
        // تحديث الكاش بالملف الجديد (للملفات النصية فقط)
        if (networkResponse && networkResponse.status === 200) {
          const contentType = networkResponse.headers.get('content-type');
          if (contentType && (contentType.includes('text') || contentType.includes('javascript'))) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          }
        }
        return networkResponse;
      }).catch(() => {
        // إذا كان طلب صفحة HTML والنت مقطوع، نعرض الصفحة المخزنة
        if (event.request.mode === 'navigate') {
          return caches.match('index.html');
        }
        console.log("🔌 النت مقطوع والملف غير موجود في الكاش:", event.request.url);
        return new Response('🛜 لا يوجد اتصال بالإنترنت', { status: 408, statusText: 'Offline' });
      });
    })
  );
});

// 4. التنظيف التلقائي كل أسبوع
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});

// 5. إظهار إشعار عند التحديث
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'CACHE_UPDATED') {
    self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'NEW_VERSION_AVAILABLE',
          version: CACHE_NAME
        });
      });
    });
  }
});




