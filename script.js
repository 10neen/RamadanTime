/***********************
 * 1️⃣ التنقل بين الأقسام
 ***********************/

/***********************
 * 2️⃣ إمساكية رمضان – القاهرة
 ***********************/
const RAMADAN_30_DAYS = [
 {d:1,date:"18 فبراير",f:"05:05 ص",zh:"12:09 م",a:"03:20 م",m:"05:46 م",i:"07:04 م"},
 {d:2,date:"19 فبراير",f:"05:04 ص",zh:"12:09 م",a:"03:21 م",m:"05:47 م",i:"07:04 م"},
 {d:3,date:"20 فبراير",f:"05:03 ص",zh:"12:09 م",a:"03:21 م",m:"05:47 م",i:"07:05 م"},
 {d:4,date:"21 فبراير",f:"05:03 ص",zh:"12:09 م",a:"03:22 م",m:"05:48 م",i:"07:06 م"},
 {d:5,date:"22 فبراير",f:"05:02 ص",zh:"12:08 م",a:"03:22 م",m:"05:49 م",i:"07:06 م"},
 {d:6,date:"23 فبراير",f:"05:01 ص",zh:"12:08 م",a:"03:23 م",m:"05:50 م",i:"07:07 م"},
 {d:7,date:"24 فبراير",f:"05:00 ص",zh:"12:08 م",a:"03:23 م",m:"05:50 م",i:"07:08 م"},
 {d:8,date:"25 فبراير",f:"04:59 ص",zh:"12:08 م",a:"03:24 م",m:"05:51 م",i:"07:08 م"},
 {d:9,date:"26 فبراير",f:"04:58 ص",zh:"12:08 م",a:"03:24 م",m:"05:52 م",i:"07:09 م"},
 {d:10,date:"27 فبراير",f:"04:57 ص",zh:"12:08 م",a:"03:25 م",m:"05:53 م",i:"07:10 م"},
 {d:11,date:"28 فبراير",f:"04:56 ص",zh:"12:08 م",a:"03:25 م",m:"05:53 م",i:"07:11 م"},
 {d:12,date:"01 مارس",f:"04:55 ص",zh:"12:07 م",a:"03:25 م",m:"05:54 م",i:"07:11 م"},
 {d:13,date:"02 مارس",f:"04:54 ص",zh:"12:07 م",a:"03:26 م",m:"05:55 م",i:"07:12 م"},
 {d:14,date:"03 مارس",f:"04:53 ص",zh:"12:07 م",a:"03:26 م",m:"05:55 م",i:"07:13 م"},
 {d:15,date:"04 مارس",f:"04:52 ص",zh:"12:07 م",a:"03:26 م",m:"05:56 م",i:"07:13 م"},
 {d:16,date:"05 مارس",f:"04:50 ص",zh:"12:06 م",a:"03:27 م",m:"05:57 م",i:"07:14 م"},
 {d:17,date:"06 مارس",f:"04:49 ص",zh:"12:06 م",a:"03:27 م",m:"05:57 م",i:"07:15 م"},
 {d:18,date:"07 مارس",f:"04:48 ص",zh:"12:06 م",a:"03:27 م",m:"05:58 م",i:"07:15 م"},
 {d:19,date:"08 مارس",f:"04:47 ص",zh:"12:06 م",a:"03:28 م",m:"05:59 م",i:"07:16 م"},
 {d:20,date:"09 مارس",f:"04:46 ص",zh:"12:06 م",a:"03:28 م",m:"05:59 م",i:"07:16 م"},
 {d:21,date:"10 مارس",f:"04:45 ص",zh:"12:05 م",a:"03:28 م",m:"06:00 م",i:"07:17 م"},
 {d:22,date:"11 مارس",f:"04:44 ص",zh:"12:05 م",a:"03:29 م",m:"06:01 م",i:"07:18 م"},
 {d:23,date:"12 مارس",f:"04:43 ص",zh:"12:05 م",a:"03:29 م",m:"06:01 م",i:"07:18 م"},
 {d:24,date:"13 مارس",f:"04:42 ص",zh:"12:05 م",a:"03:29 م",m:"06:02 م",i:"07:19 م"},
 {d:25,date:"14 مارس",f:"04:41 ص",zh:"12:04 م",a:"03:29 م",m:"06:02 م",i:"07:20 م"},
 {d:26,date:"15 مارس",f:"04:40 ص",zh:"12:04 م",a:"03:30 م",m:"06:03 م",i:"07:20 م"},
 {d:27,date:"16 مارس",f:"04:39 ص",zh:"12:04 م",a:"03:30 م",m:"06:04 م",i:"07:21 م"},
 {d:28,date:"17 مارس",f:"04:38 ص",zh:"12:03 م",a:"03:30 م",m:"06:04 م",i:"07:21 م"},
 {d:29,date:"18 مارس",f:"04:37 ص",zh:"12:03 م",a:"03:30 م",m:"06:05 م",i:"07:22 م"},
 {d:30,date:"19 مارس",f:"04:36 ص",zh:"12:03 م",a:"03:31 م",m:"06:06 م",i:"07:22 م"},
];





// 1. التنقل
function showSection(id) {
    document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
    window.scrollTo(0, 0); // للعودة للأعلى عند التنقل
}


function renderImsakeya() {
    // 1. الحصول على تاريخ اليوم من جهاز المستخدم
    const today = new Date();
    const day = today.getDate(); // رقم اليوم (مثلاً 18)
    const month = today.getMonth() + 1; // رقم الشهر (فبراير هو 2، مارس هو 3)

    let html = `
    <div class="table-container">
        <table class="prayer-table">
          <thead>
            <tr>
              <th>رمضان</th><th>التاريخ</th>
              <th>الفجر</th><th>الظهر</th>
              <th>العصر</th><th>المغرب</th><th>العشاء</th>
            </tr>
          </thead><tbody>`;
    
    RAMADAN_30_DAYS.forEach(d => {
        // 2. فحص هل السطر الحالي هو سطر اليوم؟
        let isToday = false;
        
        // مقارنة ذكية: بنشوف التاريخ في الـ Array ونقارنه بالنهاردة
        if (d.date.includes("فبراير") && month === 2 && parseInt(d.date) === day) isToday = true;
        else if (d.date.includes("مارس") && month === 3 && parseInt(d.date) === day) isToday = true;

        // 3. إضافة الـ Class إذا كان هو اليوم
        html += `
        <tr class="${isToday ? 'current-day-row' : ''}">
          <td>${d.d}</td>
          <td>${d.date}</td>
          <td class="fajr-highlight">${d.f}</td>
          <td>${d.zh}</td>
          <td>${d.a}</td>
          <td class="maghrib-highlight">${d.m}</td>
          <td>${d.i}</td>
        </tr>`;
    });

    html += "</tbody></table></div>";
    document.getElementById("prayer-times").innerHTML = html;

    // 4. ميزة إضافية: النزول تلقائياً لليوم الحالي (Scroll to today)
    if (document.querySelector(".current-day-row")) {
        setTimeout(() => {
            document.querySelector(".current-day-row").scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 500);
    }
}





// 3. السبحة (نفس منطقك الممتاز مع تحسين بسيط)
let c = 0, phase = 0;
const SEBHA_DATA = [
    { text: "سبحان الله", limit: 33 },
    { text: "الحمد لله", limit: 33 },
    { text: "الله أكبر", limit: 33 },
    { text: "لا إله إلا الله", limit: 1 },
    { text: "أستغفر الله العظيم", limit: 100 },
    { text: "لا حول ولا قوة إلا بالله", limit: 100 }
];

document.getElementById("sebha-btn").onclick = () => {
    c++;
    if (c > SEBHA_DATA[phase].limit) {
        c = 1;
        phase++;
        if (phase >= SEBHA_DATA.length) {
            alert("تقبل الله طاعتك");
            resetSebha();
            return;
        }
    }
    document.getElementById("sebha-text").innerText = SEBHA_DATA[phase].text;
    document.getElementById("sebha-count").innerText = c;
    if ("vibrate" in navigator) navigator.vibrate(50); // اهتزاز خفيف للموبايل
};

function resetSebha() {
    c = 0; phase = 0;
    document.getElementById("sebha-count").innerText = 0;
    document.getElementById("sebha-text").innerText = SEBHA_DATA[0].text;
}

// 4. المصحف (معالجة الأخطاء وتحسين العرض)
let currentSurahData = null;
async function fetchSurah(id) {
    if (!id) return;
    const viewer = document.getElementById("quran-viewer");
    viewer.innerHTML = "جاري التحميل...";

    try {
        const [q, t] = await Promise.all([
            fetch(`https://api.alquran.cloud/v1/surah/${id}/quran-uthmani`),
            fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.muyassar`)
        ]);
        const qData = await q.json();
        const tData = await t.json();

        currentSurahData = { ayahs: qData.data.ayahs, tafseer: tData.data.ayahs };

        viewer.innerHTML = qData.data.ayahs.map((a, i) =>
            `<span class="ayah-span" onclick="openTafseer(${i})">${a.text} <span class="ayah-num">(${a.numberInSurah})</span></span>`
        ).join(" ");
    } catch {
        viewer.innerHTML = "يرجى التحقق من الاتصال بالإنترنت";
    }
}

function openTafseer(i) {
    document.getElementById("tafseer-content").innerText = currentSurahData.tafseer[i].text;
    document.getElementById("tafseer-sidebar").classList.add("active");
}

function closeTafseer() {
    document.getElementById("tafseer-sidebar").classList.remove("active");
}

// التشغيل عند التحميل
window.onload = () => {
    renderImsakeya();
    showSection("imsakeya");
    // تعبئة قائمة السور (نفس الكود الخاص بك)
    const names = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبيـاء","الحـج","المؤمنون","النـور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];
    const sel = document.getElementById("surah-select");
    names.forEach((n, i) => {
        let o = document.createElement("option");
        o.value = i + 1;
        o.text = n;
        sel.appendChild(o);
    });
};


function updateCountdown() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    // 1. العثور على بيانات اليوم الحالي من الإمساكية
    const todayData = RAMADAN_30_DAYS.find(d => 
        (d.date.includes("فبراير") && month === 2 && parseInt(d.date) === day) ||
        (d.date.includes("مارس") && month === 3 && parseInt(d.date) === day)
    );

    if (!todayData) return;

    // 2. تجهيز قائمة الصلوات
    const prayers = [
        { name: "الفجر", time: todayData.f },
        { name: "الظهر", time: todayData.zh },
        { name: "العصر", time: todayData.a },
        { name: "المغرب", time: todayData.m },
        { name: "العشاء", time: todayData.i }
    ];

    let nextPrayer = null;
    let minDiff = Infinity;

    prayers.forEach(p => {
        // تحويل النص (05:05 ص) إلى كائن Date
        const [time, period] = p.time.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        
        if (period === 'م' && hours !== 12) hours += 12;
        if (period === 'ص' && hours === 12) hours = 0;

        const prayerTime = new Date();
        prayerTime.setHours(hours, minutes, 0);

        const diff = prayerTime - now;

        // البحث عن أقرب صلاة قادمة
        if (diff > 0 && diff < minDiff) {
            minDiff = diff;
            nextPrayer = { name: p.name, time: prayerTime };
        }
    });

    const timerElement = document.getElementById("countdown-timer");
    const nameElement = document.getElementById("next-prayer-name");

    if (nextPrayer) {
        const diff = nextPrayer.time - now;
        
        // تحويل الفرق لساعات ودقائق وثواني
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);

        // لمسة خاصة للمغرب
        let displayName = nextPrayer.name;
        if (displayName === "المغرب") {
            displayName = "الإفطار (المغرب)";
            timerElement.style.color = "var(--gold)"; 
        } else {
            timerElement.style.color = "var(--gold)";
        }

        nameElement.innerText = `متبقي على ${displayName}`;
        timerElement.innerText = 
            `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
        timerElement.classList.remove("prayer-now");

    } else {
        // إذا انتهت كل صلوات اليوم (بعد العشاء)
        nameElement.innerText = "تقبل الله طاعتكم";
        timerElement.innerText = "بانتظار فجر الغد";
    }

    // 3. التنبيه عند حلول الموعد (لمدة دقيقة)
    prayers.forEach(p => {
        const [time, period] = p.time.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'م' && hours !== 12) hours += 12;
        if (period === 'ص' && hours === 12) hours = 0;

        if (now.getHours() === hours && now.getMinutes() === minutes) {
            nameElement.innerText = `حان الآن موعد صلاة ${p.name}`;
            timerElement.innerText = "الله أكبر";
            timerElement.classList.add("prayer-now");
            // اهتزاز بسيط للموبايل
            if (now.getSeconds() === 0 && "vibrate" in navigator) navigator.vibrate([500, 200, 500]);
        }
    });
}

// استدعاء الوظيفة كل ثانية
setInterval(updateCountdown, 1000);
// استدعاء فوري عند التحميل لتجنب التأخير ثانية واحدة
updateCountdown();