/***********************
 * 1️⃣ البيانات الأساسية (الإمساكية 2026)
 * رمضان 1447 هـ - أول رمضان: 19 فبراير 2026 (القاهرة)
 ***********************/
 
 
 /***********************
 * 1️⃣ البيانات الأساسية (الإمساكية 2026)
 * رمضان 1447 هـ - أول رمضان: 19 فبراير 2026 (القاهرة)
 * مع إضافة وقت الشروق
 ***********************/
const RAMADAN_30_DAYS = [
    {d:1, date:"19 فبراير", f:"05:04 ص", sh:"06:23 ص", zh:"12:09 م", a:"03:21 م", m:"05:47 م", i:"07:04 م"},
    {d:2, date:"20 فبراير", f:"05:03 ص", sh:"06:22 ص", zh:"12:09 م", a:"03:21 م", m:"05:47 م", i:"07:05 م"},
    {d:3, date:"21 فبراير", f:"05:03 ص", sh:"06:21 ص", zh:"12:09 م", a:"03:22 م", m:"05:48 م", i:"07:06 م"},
    {d:4, date:"22 فبراير", f:"05:02 ص", sh:"06:20 ص", zh:"12:08 م", a:"03:22 م", m:"05:49 م", i:"07:06 م"},
    {d:5, date:"23 فبراير", f:"05:01 ص", sh:"06:19 ص", zh:"12:08 م", a:"03:23 م", m:"05:50 م", i:"07:07 م"},
    {d:6, date:"24 فبراير", f:"05:00 ص", sh:"06:18 ص", zh:"12:08 م", a:"03:23 م", m:"05:50 م", i:"07:08 م"},
    {d:7, date:"25 فبراير", f:"04:59 ص", sh:"06:17 ص", zh:"12:08 م", a:"03:24 م", m:"05:51 م", i:"07:08 م"},
    {d:8, date:"26 فبراير", f:"04:58 ص", sh:"06:16 ص", zh:"12:08 م", a:"03:24 م", m:"05:52 م", i:"07:09 م"},
    {d:9, date:"27 فبراير", f:"04:57 ص", sh:"06:15 ص", zh:"12:08 م", a:"03:25 م", m:"05:53 م", i:"07:10 م"},
    {d:10, date:"28 فبراير", f:"04:56 ص", sh:"06:14 ص", zh:"12:08 م", a:"03:25 م", m:"05:53 م", i:"07:11 م"},
    {d:11, date:"01 مارس", f:"04:55 ص", sh:"06:13 ص", zh:"12:07 م", a:"03:25 م", m:"05:54 م", i:"07:11 م"},
    {d:12, date:"02 مارس", f:"04:54 ص", sh:"06:12 ص", zh:"12:07 م", a:"03:26 م", m:"05:55 م", i:"07:12 م"},
    {d:13, date:"03 مارس", f:"04:53 ص", sh:"06:11 ص", zh:"12:07 م", a:"03:26 م", m:"05:55 م", i:"07:13 م"},
    {d:14, date:"04 مارس", f:"04:52 ص", sh:"06:10 ص", zh:"12:07 م", a:"03:26 م", m:"05:56 م", i:"07:13 م"},
    {d:15, date:"05 مارس", f:"04:50 ص", sh:"06:09 ص", zh:"12:06 م", a:"03:27 م", m:"05:57 م", i:"07:14 م"},
    {d:16, date:"06 مارس", f:"04:49 ص", sh:"06:08 ص", zh:"12:06 م", a:"03:27 م", m:"05:57 م", i:"07:15 م"},
    {d:17, date:"07 مارس", f:"04:48 ص", sh:"06:07 ص", zh:"12:06 م", a:"03:27 م", m:"05:58 م", i:"07:15 م"},
    {d:18, date:"08 مارس", f:"04:47 ص", sh:"06:06 ص", zh:"12:06 م", a:"03:28 م", m:"05:59 م", i:"07:16 م"},
    {d:19, date:"09 مارس", f:"04:46 ص", sh:"06:05 ص", zh:"12:06 م", a:"03:28 م", m:"05:59 م", i:"07:16 م"},
    {d:20, date:"10 مارس", f:"04:45 ص", sh:"06:04 ص", zh:"12:05 م", a:"03:28 م", m:"06:00 م", i:"07:17 م"},
    {d:21, date:"11 مارس", f:"04:44 ص", sh:"06:03 ص", zh:"12:05 م", a:"03:29 م", m:"06:01 م", i:"07:18 م"},
    {d:22, date:"12 مارس", f:"04:43 ص", sh:"06:02 ص", zh:"12:05 م", a:"03:29 م", m:"06:01 م", i:"07:18 م"},
    {d:23, date:"13 مارس", f:"04:42 ص", sh:"06:01 ص", zh:"12:05 م", a:"03:29 م", m:"06:02 م", i:"07:19 م"},
    {d:24, date:"14 مارس", f:"04:41 ص", sh:"06:00 ص", zh:"12:04 م", a:"03:29 م", m:"06:02 م", i:"07:20 م"},
    {d:25, date:"15 مارس", f:"04:40 ص", sh:"05:59 ص", zh:"12:04 م", a:"03:30 م", m:"06:03 م", i:"07:20 م"},
    {d:26, date:"16 مارس", f:"04:39 ص", sh:"05:58 ص", zh:"12:04 م", a:"03:30 م", m:"06:04 م", i:"07:21 م"},
    {d:27, date:"17 مارس", f:"04:38 ص", sh:"05:57 ص", zh:"12:03 م", a:"03:30 م", m:"06:04 م", i:"07:21 م"},
    {d:28, date:"18 مارس", f:"04:37 ص", sh:"05:56 ص", zh:"12:03 م", a:"03:30 م", m:"06:05 م", i:"07:22 م"},
    {d:29, date:"19 مارس", f:"04:36 ص", sh:"05:55 ص", zh:"12:03 م", a:"03:31 م", m:"06:06 م", i:"07:22 م"},
    {d:30, date:"20 مارس", f:"04:35 ص", sh:"05:54 ص", zh:"12:02 م", a:"03:31 م", m:"06:06 م", i:"07:23 م"}
];
 
 

/***********************
 * 2️⃣ إعدادات عامة - إلغاء المحافظات
 ***********************/
let currentOffset = 0; // تثبيت القاهرة

/***********************
 * 3️⃣ التنقل وواجهة الإمساكية
 ***********************/
function showSection(id) {
    document.querySelectorAll("section").forEach(sec => {
        sec.style.display = "none";
    });

    const target = document.getElementById(id);
    if (!target) return;

    target.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// دالة لتنسيق التاريخ مع اسم اليوم
function formatDateWithDay(dateStr) {
    const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    const months = {"فبراير": 2, "مارس": 3};

    const [dayNum, monthName] = dateStr.split(" ");
    const monthNum = months[monthName];
    const date = new Date(2026, monthNum - 1, parseInt(dayNum, 10));
    const dayName = days[date.getDay()];
    return `${dayName} ${dayNum} ${monthName}`;
}



// دالة عرض الإمساكية



/***********************
 * 3️⃣ دالة عرض الإمساكية الاحترافية
 * بتحديد تلقائي لليوم الحالي، أيام الجمعة، والتوقيت الحي
 ***********************/

/***********************
 * 3️⃣ دالة عرض الإمساكية الاحترافية
 * بتحديد تلقائي لليوم الحالي، أيام الجمعة، والتوقيت الحي
 ***********************/

function renderImsakeya() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const currentTime = now.getHours() * 60 + now.getMinutes();

    let html = `
        <thead>
            <tr>
                <th style="width: 8%">ر</th>
                <th style="width: 26%">اليوم والتاريخ</th>
                <th>فجر</th>
                <th>شروق</th>
                <th>ظهر</th>
                <th>عصر</th>
                <th>مغرب</th>
                <th>عشاء</th>
            </tr>
        </thead>
        <tbody>`;

    RAMADAN_30_DAYS.forEach(d => {
        const dayNumInMonth = parseInt(d.date.split(" ")[0]);
        const ramadanDay = parseInt(d.d);
        
        // فحص اليوم الحالي (فبراير أو مارس 2026)
        let isToday = (d.date.includes("فبراير") && month === 2 && dayNumInMonth === day) || 
                      (d.date.includes("مارس") && month === 3 && dayNumInMonth === day);
        
        const formattedDate = formatDateWithDay(d.date);
        const isFriday = formattedDate.includes("الجمعة");
        const isLaylatAlQadr = [21, 23, 25, 27, 29].includes(ramadanDay);

        // تحديد وقت الصلاة "الآن"
        let activePrayer = ""; 
        if (isToday) {
            const fMin = convertTimeToMinutes(d.f);
            const mMin = convertTimeToMinutes(d.m);
            if (currentTime >= fMin - 5 && currentTime < fMin + 45) activePrayer = "fajr";
            if (currentTime >= mMin - 5 && currentTime < mMin + 45) activePrayer = "maghrib";
        }

        // بناء كلاسات الصف (هنا السر في التلوين)
        let rowClasses = [];
        if (isToday) rowClasses.push('current-day-row'); 
        if (isFriday) rowClasses.push('friday-row');
        if (isLaylatAlQadr) rowClasses.push('laylat-al-qadr-row');

        html += `
        <tr class="${rowClasses.join(' ')}">
            <td class="ramadan-num"><span class="ramadan-day-badge">${d.d}</span></td>
            <td class="date-cell">
                <span class="${isFriday ? 'friday-text' : ''}">${formattedDate}</span>
                ${isLaylatAlQadr ? '<div class="qadr-label">ليلة القدر ✨</div>' : ''}
            </td>
            <td class="fajr-col ${activePrayer === 'fajr' ? 'highlight-now' : ''}">${d.f.replace(' ص','')}</td>
            <td>${d.sh.replace(' ص','')}</td>
            <td>${d.zh.replace(' م','')}</td>
            <td>${d.a.replace(' م','')}</td>
            <td class="maghrib-col ${activePrayer === 'maghrib' ? 'highlight-now' : ''}">${d.m.replace(' م','')}</td>
            <td>${d.i.replace(' م','')}</td>
        </tr>`;
    });

    html += "</tbody>";
    
    const tableElement = document.getElementById("imsakia-table");
    if (tableElement) tableElement.innerHTML = html;
}


// دالة مساعدة لتحويل الوقت إلى دقائق
function convertTimeToMinutes(timeStr) {
    if (!timeStr) return 0;
    let [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    
    if (modifier === 'م' && hours !== 12) hours += 12;
    if (modifier === 'ص' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
}



/***********************
 * 4️⃣ السبحة الإلكترونية والأذكار
 * على منهج أهل السنة والجماعة
 ***********************/

const AZKAR_MODES = {
    // ========== أذكار دبر الصلوات المفروضة ==========
    sunna: [
        { 
            text: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً) . اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ", 
            limit: 1,
            type: "مرة واحدة"
        },
        { 
            text: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ", 
            limit: 1,
            type: "مرة واحدة"
        },
        { 
            text: "سُبْحَانَ اللَّهِ", 
            limit: 33,
            type: "٣٣ مرة"
        },
        { 
            text: "الْحَمْدُ لِلَّهِ", 
            limit: 33,
            type: "٣٣ مرة"
        },
        { 
            text: "اللَّهُ أَكْبَرُ", 
            limit: 33,
            type: "٣٣ مرة"
        },
        { 
            text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", 
            limit: 1,
            type: "ختم التسبيح"
        },
        { 
            text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ", 
            limit: 1,
            type: "دعاء بعد السلام"
        }
    ],

    // ========== أذكار الصباح الكاملة ==========
    sabah: [
        { 
            text: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            limit: 1,
            type: "آية الكرسي - مرة"
        },
        { 
            text: "قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            limit: 3,
            type: "الإخلاص - ٣ مرات"
        },
        { 
            text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            limit: 3,
            type: "الفلق - ٣ مرات"
        },
        { 
            text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ",
            limit: 3,
            type: "الناس - ٣ مرات"
        },
        { 
            text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            limit: 1,
            type: "سيد الاستغفار - مرة"
        },
        { 
            text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
            limit: 3,
            type: "٣ مرات"
        },
        { 
            text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
            limit: 3,
            type: "٣ مرات"
        },
        { 
            text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
            limit: 3,
            type: "٣ مرات"
        },
        { 
            text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
            limit: 3,
            type: "٣ مرات"
        }
    ],

    // ========== أذكار المساء الكاملة ==========
    masa: [
        { 
            text: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
            limit: 1,
            type: "آية الكرسي - مرة"
        },
        { 
            text: "قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            limit: 3,
            type: "الإخلاص - ٣ مرات"
        },
        { 
            text: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِن شَرِّ مَا خَلَقَ * وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            limit: 3,
            type: "الفلق - ٣ مرات"
        },
        { 
            text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ",
            limit: 3,
            type: "الناس - ٣ مرات"
        },
        { 
            text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
            limit: 1,
            type: "سيد الاستغفار - مرة"
        },
        { 
            text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
            limit: 3,
            type: "٣ مرات"
        },
        { 
            text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
            limit: 3,
            type: "٣ مرات"
        }
    ],

    // ========== أذكار النوم ==========
    sleep: [
        { 
            text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
            limit: 3,
            type: "٣ مرات"
        },
        { 
            text: "سُبْحَانَ اللَّهِ",
            limit: 33,
            type: "٣٣ مرة"
        },
        { 
            text: "الْحَمْدُ لِلَّهِ",
            limit: 33,
            type: "٣٣ مرة"
        },
        { 
            text: "اللَّهُ أَكْبَرُ",
            limit: 34,
            type: "٣٤ مرة"
        },
        { 
            text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
            limit: 1,
            type: "مرة"
        },
        { 
            text: "آيَةُ الْكُرْسِيِّ - اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...",
            limit: 1,
            type: "مرة"
        }
    ],

    // ========== الاستغفار ==========
    estighfar: [
        { 
            text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ",
            limit: 100,
            type: "١٠٠ مرة"
        },
        { 
            text: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
            limit: 100,
            type: "١٠٠ مرة"
        }
    ],

    // ========== الصلاة على النبي ﷺ - بأشرف الصيغ ==========
    salat: [
        { 
            text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
            limit: 100,
            type: "الصلاة الإبراهيمية"
        },
        { 
            text: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ وَسَلِّمْ",
            limit: 100,
            type: "صيغة جامعة"
        },
        { 
            text: "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِهِ وَصَحْبِهِ أَجْمَعِينَ",
            limit: 100,
            type: "صيغة كاملة"
        }
    ],

    // ========== الحوقلة ==========
    hawqala: [
        { 
            text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",
            limit: 100,
            type: "١٠٠ مرة"
        },
        { 
            text: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
            limit: 7,
            type: "٧ مرات"
        }
    ],

    // ========== التهليل والتكبير ==========
    tahlil: [
        { 
            text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
            limit: 100,
            type: "١٠٠ مرة"
        },
        { 
            text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ",
            limit: 100,
            type: "١٠٠ مرة"
        }
    ]
};



/***********************
 * السبحة الإلكترونية والأذكار - النسخة المطورة
 * مع حماية ضد الضغط السريع
 ***********************/

let currentMode = "sunna";
let c = 0, phase = 0;
let isProcessing = false; // متغير لمنع التكرار
let lastClickTime = 0;    // تتبع آخر ضغطة

window.setAzkar = function(mode, btn) {
    currentMode = mode;
    resetSebha();

    // تحديث نوع الذكر المعروض
    const typeEl = document.getElementById("sebha-type");
    if (typeEl && AZKAR_MODES[mode] && AZKAR_MODES[mode][0]) {
        typeEl.innerText = AZKAR_MODES[mode][0].type || "";
    }

    // تحديث الأزرار النشطة
    document.querySelectorAll('.opt-btn').forEach(b => b.classList.remove('active-opt'));
    if (btn) btn.classList.add('active-opt');
};

// تأكد من وجود العناصر قبل إضافة الحدث
document.addEventListener('DOMContentLoaded', function() {
    const sebhaBtn = document.getElementById("sebha-btn");
    if (sebhaBtn) {
        sebhaBtn.onclick = () => {
            // حماية ضد الضغط السريع - منع التكرار خلال 300ms
            const now = Date.now();
            if (now - lastClickTime < 300) {
                console.log("الضغط سريع جداً - تم التجاهل");
                return;
            }
            lastClickTime = now;
            
            // منع المعالجة المتزامنة
            if (isProcessing) return;
            isProcessing = true;
            
            const data = AZKAR_MODES[currentMode];
            
            // التأكد من وجود البيانات
            if (!data || !data[phase]) {
                resetSebha();
                isProcessing = false;
                return;
            }
            
            c++;
            
            // التحقق من تجاوز الحد
            if (c > data[phase].limit) {
                phase++;
                c = 1;
                
                // التحقق من نهاية الأذكار
                if (phase >= data.length) {
                    // رسالة أجمل مع التأكيد على إتمام الورد
                    alert("✅ تقبل الله طاعتك ✨\nأتممت هذا الورد بنجاح");
                    
                    // اهتزاز مميز عند الإتمام
                    if ("vibrate" in navigator) {
                        navigator.vibrate([100, 50, 100]); // اهتزاز ثلاث مرات
                    }
                    
                    resetSebha();
                    isProcessing = false;
                    return;
                }
            }
            
            // تحديث النص والعدد
            const textEl = document.getElementById("sebha-text");
            const countEl = document.getElementById("sebha-count");
            const typeEl = document.getElementById("sebha-type");
            
            if (textEl) textEl.innerText = data[phase].text;
            if (countEl) countEl.innerText = c;
            
            // تحديث نوع الذكر الحالي
            if (typeEl && data[phase].type) {
                typeEl.innerText = data[phase].type;
            }
            
            // اهتزاز خفيف مع كل تسبيحة
            if ("vibrate" in navigator) navigator.vibrate(30);
            
            // فك الحماية بعد 200ms
            setTimeout(() => {
                isProcessing = false;
            }, 200);
        };
    }
    
    // تهيئة السبحة عند تحميل الصفحة
    setTimeout(() => {
        resetSebha();
        // تحديث نوع الذكر للوضع الافتراضي
        const typeEl = document.getElementById("sebha-type");
        if (typeEl && AZKAR_MODES[currentMode] && AZKAR_MODES[currentMode][0]) {
            typeEl.innerText = AZKAR_MODES[currentMode][0].type || "";
        }
    }, 100);
});

window.resetSebha = function() {
    c = 0; 
    phase = 0;
    const data = AZKAR_MODES[currentMode];
    
    const countEl = document.getElementById("sebha-count");
    const textEl = document.getElementById("sebha-text");
    const typeEl = document.getElementById("sebha-type");
    
    if (countEl) countEl.innerText = 0;
    if (textEl && data && data[0]) textEl.innerText = data[0].text;
    if (typeEl && data && data[0]) typeEl.innerText = data[0].type || "";
};

// دالة إضافية للتبديل السريع بين الأذكار (اختياري)
window.nextAzkar = function() {
    // يمكنك إضافة هذه الدالة لو عايز تنتقل للذكر التالي يدوياً
    const data = AZKAR_MODES[currentMode];
    if (phase < data.length - 1) {
        phase++;
        c = 1;
    } else {
        phase = 0;
        c = 1;
    }
    
    const textEl = document.getElementById("sebha-text");
    const countEl = document.getElementById("sebha-count");
    const typeEl = document.getElementById("sebha-type");
    
    if (textEl) textEl.innerText = data[phase].text;
    if (countEl) countEl.innerText = c;
    if (typeEl && data[phase].type) typeEl.innerText = data[phase].type;
};





/***********************
 * 🔔 نظام التنبيهات الذكية - نسخة متكاملة مع الحفاظ على التنسيق
 ***********************/

// متغيرات التنبيهات - مع إضافة التنبيهات الجديدة
let notificationSettings = {
    suhoor: true,
    fajr: true,
    maghrib: true,
    taraweeh: true,
    isha: true,        // ✅ تنبيه العشاء
    jummah: true,      // ✅ تنبيه الجمعة
    lastTen: true,     // ✅ تنبيه آخر 10 أيام
    eid: true          // ✅ تنبيه العيد
};

let notificationTimers = [];
let permissionRequested = false;

// طلب إذن التنبيهات - مرة واحدة فقط
function requestNotificationPermission() {
    if (permissionRequested) return;
    
    if (!("Notification" in window)) {
        console.log("متصفحك لا يدعم التنبيهات");
        return;
    }
    
    if (Notification.permission === "granted") {
        permissionRequested = true;
        showNotificationStatus("التنبيهات مفعلة ✅", "success", 2000);
        return;
    }
    
    if (Notification.permission === "denied") {
        permissionRequested = true;
        showNotificationStatus("التنبيهات معطلة ❌", "error", 2000);
        return;
    }
    
    permissionRequested = true;
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            showNotificationStatus("تم تفعيل التنبيهات ✅", "success", 2000);
            setupAllNotifications();
        } else {
            showNotificationStatus("تم رفض التنبيهات ❌", "error", 2000);
        }
    });
}

// عرض حالة التنبيهات
function showNotificationStatus(message, type, duration = 3000) {
    const statusEl = document.getElementById('notification-status');
    if (statusEl) {
        statusEl.innerText = message;
        statusEl.style.color = type === 'success' ? '#27ae60' : '#e74c3c';
        statusEl.style.opacity = '1';
        statusEl.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            statusEl.style.opacity = '0';
            setTimeout(() => {
                statusEl.innerText = '';
            }, 500);
        }, duration);
    }
}

// حفظ إعدادات التنبيهات - مع العناصر الجديدة
window.saveNotificationSettings = function() {
    notificationSettings = {
        suhoor: document.getElementById('notify-suhoor')?.checked ?? true,
        fajr: document.getElementById('notify-fajr')?.checked ?? true,
        maghrib: document.getElementById('notify-maghrib')?.checked ?? true,
        taraweeh: document.getElementById('notify-taraweeh')?.checked ?? true,
        isha: document.getElementById('notify-isha')?.checked ?? true,
        jummah: document.getElementById('notify-jummah')?.checked ?? true,
        lastTen: document.getElementById('notify-lastten')?.checked ?? true,
        eid: document.getElementById('notify-eid')?.checked ?? true
    };
    
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
    showNotificationStatus("تم حفظ الإعدادات 💾", "success", 2000);
    
    clearAllTimers();
    setupAllNotifications();
};

// تحميل الإعدادات المحفوظة
function loadNotificationSettings() {
    const saved = localStorage.getItem('notificationSettings');
    if (saved) {
        try {
            notificationSettings = JSON.parse(saved);
            
            // تحديث واجهة المستخدم
            const ids = ['suhoor', 'fajr', 'maghrib', 'taraweeh', 'isha', 'jummah', 'lastten', 'eid'];
            ids.forEach(id => {
                const el = document.getElementById(`notify-${id}`);
                if (el) el.checked = notificationSettings[id] ?? true;
            });
            
        } catch (e) {
            console.log("خطأ في تحميل الإعدادات");
        }
    }
}

// إرسال تنبيه
function sendNotification(title, body) {
    if ("vibrate" in navigator) {
        navigator.vibrate([200, 100, 200]);
    }
    
    if ("Notification" in window && Notification.permission === "granted") {
        try {
            new Notification(title, {
                body: body,
                icon: 'ramadan-fanous.png',
                badge: 'ramadan-fanous.png',
                tag: 'ramadan-' + Date.now(),
                silent: false,
                requireInteraction: false
            });
            console.log(`✅ تم إرسال تنبيه: ${title}`);
        } catch (e) {
            console.log("خطأ في إرسال التنبيه:", e);
        }
    }
}

// اختبار التنبيهات
window.testNotification = function() {
    sendNotification(
        "🔔 اختبار التنبيهات",
        "التنبيهات شغالة ✅ رمضان كريم 🌙"
    );
    showNotificationStatus("تم إرسال تنبيه اختباري", "success", 1500);
};

// حساب وقت الصلاة
function getPrayerTime(prayerName) {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    
    const todayData = RAMADAN_30_DAYS.find(d => {
        const dayNum = parseInt(d.date.split(" ")[0]);
        return (d.date.includes("فبراير") && month === 2 && dayNum === day) ||
               (d.date.includes("مارس") && month === 3 && dayNum === day);
    });
    
    if (!todayData) return null;
    
    switch(prayerName) {
        case 'fajr': return todayData.f;
        case 'maghrib': return todayData.m;
        case 'isha': return todayData.i;
        default: return null;
    }
}





// ========== التنبيهات الذكية الجديدة ==========

// 1️⃣ تنبيه العشاء (للتراويح)
function scheduleIshaNotification() {
    if (!notificationSettings.isha) return null;
    
    const now = new Date();
    const ishaTime = getPrayerTime('isha');
    
    if (!ishaTime) return null;
    
    try {
        let [time, modifier] = ishaTime.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        
        if (modifier === 'م' && hours !== 12) hours += 12;
        if (modifier === 'ص' && hours === 12) hours = 0;
        
        const ishaDate = new Date(now);
        ishaDate.setHours(hours, minutes - 15, 0, 0); // قبل العشاء بـ 15 دقيقة
        
        if (ishaDate < now) {
            ishaDate.setDate(ishaDate.getDate() + 1);
        }
        
        const timeUntil = ishaDate - now;
        
        if (timeUntil > 0 && timeUntil < 24 * 60 * 60 * 1000) {
            return setTimeout(() => {
                sendNotification(
                    '🕌 تنبيه صلاة العشاء',
                    'باقي 15 دقيقة على صلاة العشاء - استعد لصلاة التراويح ✨'
                );
            }, timeUntil);
        }
    } catch (e) {
        console.log("خطأ في تنبيه العشاء");
    }
    return null;
}

// 2️⃣ تنبيه الجمعة
function scheduleJummahNotification() {
    if (!notificationSettings.jummah) return null;
    
    const now = new Date();
    if (now.getDay() !== 5) return null; // 5 = الجمعة
    
    try {
        const jummahDate = new Date(now);
        jummahDate.setHours(12, 30, 0, 0);
        
        if (jummahDate > now) {
            const timeUntil = jummahDate - now;
            if (timeUntil < 24 * 60 * 60 * 1000) {
                return setTimeout(() => {
                    sendNotification(
                        '🕌 تنبيه صلاة الجمعة',
                        'حان وقت صلاة الجمعة - لا تنسَ الاغتسال والتبكير ✨'
                    );
                }, timeUntil);
            }
        }
    } catch (e) {
        console.log("خطأ في تنبيه الجمعة");
    }
    return null;
}

// 3️⃣ تنبيه آخر 10 أيام
function scheduleLastTenNotification() {
    if (!notificationSettings.lastTen) return null;
    
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    
    const isLastTen = (month === 3 && day >= 11) || (month === 2 && day >= 28);
    if (!isLastTen) return null;
    
    try {
        const lastTenDate = new Date(now);
        lastTenDate.setHours(21, 0, 0, 0);
        
        if (lastTenDate < now) {
            lastTenDate.setDate(lastTenDate.getDate() + 1);
        }
        
        const timeUntil = lastTenDate - now;
        
        if (timeUntil > 0 && timeUntil < 24 * 60 * 60 * 1000) {
            const messages = [
                '🌙 تحروا ليلة القدر في العشر الأواخر من رمضان',
                '✨ ليلة القدر خير من ألف شهر - لا تفرط فيها',
                '🤲 قيام ليلة القدر يغفر ما تقدم من الذنب',
                '🌟 التمسوا ليلة القدر في الوتر من العشر الأواخر'
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            
            return setTimeout(() => {
                sendNotification('🌙 تنبيه العشر الأواخر', randomMsg);
            }, timeUntil);
        }
    } catch (e) {
        console.log("خطأ في تنبيه آخر 10 أيام");
    }
    return null;
}

// 4️⃣ تنبيه العيد
function scheduleEidNotification() {
    if (!notificationSettings.eid) return null;
    
    const now = new Date();
    const eidDate = new Date(2026, 2, 21);
    const dayBeforeEid = new Date(eidDate);
    dayBeforeEid.setDate(eidDate.getDate() - 1);
    
    try {
        // قبل العيد بيوم
        if (now.toDateString() === dayBeforeEid.toDateString()) {
            const reminderDate = new Date(now);
            reminderDate.setHours(20, 0, 0, 0);
            
            if (reminderDate > now) {
                return setTimeout(() => {
                    sendNotification(
                        '🎊 تنبيه عيد الفطر',
                        'غداً عيد الفطر المبارك - تقبل الله منا ومنكم صالح الأعمال 🌙'
                    );
                }, reminderDate - now);
            }
        }
        
        // صباح العيد
        if (now.toDateString() === eidDate.toDateString()) {
            const eidMorningDate = new Date(now);
            eidMorningDate.setHours(6, 0, 0, 0);
            
            if (eidMorningDate > now) {
                return setTimeout(() => {
                    sendNotification(
                        '🎊 صلاة عيد الفطر',
                        'صلاة العيد الساعة 06:04 صباحاً - كل عام وأنتم بخير 🌙'
                    );
                }, eidMorningDate - now);
            }
        }
    } catch (e) {
        console.log("خطأ في تنبيه العيد");
    }
    return null;
}

// إعداد جميع التنبيهات
function setupAllNotifications() {
    clearAllTimers();
    
    if (Notification.permission !== "granted") return;
    
    const now = new Date();
    
    // التنبيهات الأساسية
    if (notificationSettings.suhoor) {
        const timer = scheduleNotification('fajr', '🌙 تنبيه السحور', 'حان وقت السحور - باقي ساعة على الإمساك', 60);
        if (timer) notificationTimers.push(timer);
    }
    
    if (notificationSettings.fajr) {
        const timer = scheduleNotification('fajr', '🕌 تنبيه الفجر', 'حان وقت صلاة الفجر - قامت الصلاة', 0);
        if (timer) notificationTimers.push(timer);
    }
    
    if (notificationSettings.maghrib) {
        const timer = scheduleNotification('maghrib', '🌅 تنبيه المغرب', 'حان وقت الإفطار - تقبل الله صيامكم', 0);
        if (timer) notificationTimers.push(timer);
    }
    
    // ✅ التنبيهات الذكية الجديدة
    const ishaTimer = scheduleIshaNotification();
    if (ishaTimer) notificationTimers.push(ishaTimer);
    
    const jummahTimer = scheduleJummahNotification();
    if (jummahTimer) notificationTimers.push(jummahTimer);
    
    const lastTenTimer = scheduleLastTenNotification();
    if (lastTenTimer) notificationTimers.push(lastTenTimer);
    
    const eidTimer = scheduleEidNotification();
    if (eidTimer) notificationTimers.push(eidTimer);
    
    console.log(`✅ تم جدولة ${notificationTimers.length} تنبيه ذكي`);
}

// جدولة تنبيه أساسي
function scheduleNotification(prayerName, title, body, minutesBefore = 0) {
    const now = new Date();
    const prayerTime = getPrayerTime(prayerName);
    
    if (!prayerTime) return null;
    
    try {
        let [time, modifier] = prayerTime.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        
        if (modifier === 'م' && hours !== 12) hours += 12;
        if (modifier === 'ص' && hours === 12) hours = 0;
        
        const prayerDate = new Date(now);
        prayerDate.setHours(hours, minutes - minutesBefore, 0, 0);
        
        if (prayerDate < now) {
            prayerDate.setDate(prayerDate.getDate() + 1);
        }
        
        const timeUntil = prayerDate - now;
        
        if (timeUntil > 0 && timeUntil < 24 * 60 * 60 * 1000) {
            return setTimeout(() => sendNotification(title, body), timeUntil);
        }
    } catch (e) {
        console.log("خطأ في جدولة التنبيه:", e);
    }
    return null;
}

// تنظيف المؤقتات
function clearAllTimers() {
    notificationTimers.forEach(timer => clearTimeout(timer));
    notificationTimers = [];
}

// تحديث يومي
function scheduleDailyUpdate() {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setDate(nextMidnight.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);
    
    setTimeout(() => {
        clearAllTimers();
        setupAllNotifications();
        scheduleDailyUpdate();
    }, nextMidnight - now);
}

// تشغيل النظام
function initNotificationSystem() {
    loadNotificationSettings();
    
    setTimeout(() => requestNotificationPermission(), 3000);
    setTimeout(() => setupAllNotifications(), 4000);
    
    scheduleDailyUpdate();
}

// التشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initNotificationSystem, 3000);
});








/***********************
 * 5️⃣ المصحف والتفسير
 ***********************/
window.changeFontSize = function(delta) {
    const quranText = document.querySelector('.quran-p-tag');
    if (!quranText) return;

    let currentSize = parseFloat(window.getComputedStyle(quranText).fontSize);
    const minSize = 12;
    const maxSize = 36;

    let newSize = currentSize + delta;
    if (newSize < minSize) newSize = minSize;
    if (newSize > maxSize) newSize = maxSize;

    quranText.style.fontSize = newSize + "px";
};


/***********************
 * الوضع الليلي للمصحف - النسخة النهائية
 ***********************/
window.toggleDarkMode = function() {
    // هتشتغل على المصحف كله مش بس على quran-text-final
    const quranPaper = document.querySelector('.quran-paper');
    const quranText = document.querySelector('.quran-text-final');
    const btn = document.getElementById('night-mode-btn');

    if (!quranPaper || !btn) return;

    // بدل ما نضيف كلاس على quran-text-final بس، نضيف على الحاوية الكبيرة
    quranPaper.classList.toggle('dark-mode');
    
    // لو عايز نضيف على الاتنين
    if (quranText) {
        quranText.classList.toggle('dark-mode');
    }

    // تغيير شكل الزر
    const isDark = quranPaper.classList.contains('dark-mode');
    btn.innerText = isDark ? "☀️" : "🌙";
    
    // حفظ التفضيل في localStorage
    localStorage.setItem('quranDarkMode', isDark ? 'enabled' : 'disabled');
    
    // رسالة تأكيد (اختياري)
    console.log('الوضع الليلي للمصحف:', isDark ? 'مفعل' : 'معطل');
};

// استرجاع الوضع الليلي المحفوظ عند تحميل الصفحة
function loadQuranDarkMode() {
    const savedMode = localStorage.getItem('quranDarkMode');
    if (savedMode === 'enabled') {
        const quranPaper = document.querySelector('.quran-paper');
        const quranText = document.querySelector('.quran-text-final');
        const btn = document.getElementById('night-mode-btn');
        
        if (quranPaper) {
            quranPaper.classList.add('dark-mode');
        }
        if (quranText) {
            quranText.classList.add('dark-mode');
        }
        if (btn) {
            btn.innerText = "☀️";
        }
    }
}

window.onload = () => {
    renderImsakeya();
    showSection("imsakeya");
    loadQuranDarkMode(); // استرجاع الوضع الليلي للمصحف
    
    // باقي الكود...
};




async function fetchSurah(id) {
    if (!id) return;
    const viewer = document.getElementById("quran-viewer");
    if (!viewer) return;

    const controlsHtml = `
        <div class="quran-tools">
            <button onclick="window.changeFontSize(2)">+A</button>
            <button onclick="window.changeFontSize(-2)">-A</button>
            <button onclick="window.toggleDarkMode()" id="night-mode-btn">🌙</button>
        </div>`;

    viewer.innerHTML = controlsHtml + "<p style='text-align:center; padding:20px;'>جاري تحميل السورة الكريمة...</p>";

    try {
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ar.jalalayn`);
        const data = await response.json();
        
        const quranData = data.data[0];
        const tafseerData = data.data[1];

        let quranHtml = `<div class="quran-text-final">`;

        if (id != 9) {
            quranHtml += `<div class="basmalah-v2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`;
        }

        let allAyahs = "";
        quranData.ayahs.forEach((ayah, index) => {
            let text = ayah.text;
            
            if (id == 1 && index === 0) return;
            
            allAyahs += `<span class="ayah-content" onclick="openTafseer('${ayah.numberInSurah}', '${tafseerData.ayahs[index].text.replace(/'/g, "\\'")}')">${text}</span> 
                         <span class="ayah-mark">﴿${ayah.numberInSurah}﴾</span> `;
        });

        quranHtml += `<p class="quran-p-tag">${allAyahs}</p></div>`;
        viewer.innerHTML = controlsHtml + quranHtml;

    } catch (e) {
        viewer.innerHTML = controlsHtml + "<p style='text-align:center; color:red;'>تعذر تحميل السورة، تأكد من اتصالك بالإنترنت.</p>";
    }
}

window.openTafseer = function(num, text) {
    const title = document.getElementById("tafseer-title");
    const content = document.getElementById("tafseer-content");
    const sidebar = document.getElementById("tafseer-sidebar");

    if (!title || !content || !sidebar) return;

    title.innerText = `تفسير الآية (${num})`;
    content.innerText = text;
    sidebar.classList.add("active");
};

window.closeTafseer = function() {
    const sidebar = document.getElementById("tafseer-sidebar");
    if (!sidebar) return;
    sidebar.classList.remove("active");
};

// تعبئة قائمة السور
document.addEventListener('DOMContentLoaded', function() {
    const names = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];
    
    const sel = document.getElementById("surah-select");
    if (sel) {
        names.forEach((n, i) => { 
            let o = document.createElement("option"); 
            o.value = i + 1; 
            o.text = n; 
            sel.appendChild(o); 
        });
    }
});




/***********************
 * 6️⃣ العداد التنازلي للصلوات
 ***********************/
function updateCountdown() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    const timerBox = document.getElementById("next-prayer-container");
    const nameLabel = document.getElementById("next-prayer-name");
    const countdownLabel = document.getElementById("countdown-timer");

    if (!timerBox || !nameLabel || !countdownLabel) return;

    // قبل رمضان
    const ramadanStart = new Date(2026, 1, 19); // فبراير = 1
    if (now < ramadanStart) {
        const diffTime = ramadanStart - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        nameLabel.innerText = "اللهم بلغنا رمضان.. باقي على الشهر الكريم:";
        countdownLabel.innerText = `${diffDays} يوم`;
        timerBox.style.background = "linear-gradient(135deg, #1a2a6c, #b21f1f)";
        return;
    }

    // بيانات اليوم
    const todayData = RAMADAN_30_DAYS.find(d => {
        const dayNum = parseInt(d.date.split(" ")[0]);
        return (d.date.includes("فبراير") && month === 2 && dayNum === day) ||
               (d.date.includes("مارس") && month === 3 && dayNum === day);
    });

    // بعد رمضان
    const ramadanEnd = new Date(2026, 2, 20); // مارس = 2
    if (!todayData && now > ramadanEnd) {
        nameLabel.innerText = "عيد مبارك.. تقبل الله منا ومنكم";
        countdownLabel.innerText = "كل عام وأنتم بخير";
        timerBox.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
        return;
    }

    if (todayData) {
        const prayers = [
            { name: "الفجر", time: todayData.f },
            { name: "الظهر", time: todayData.zh },
            { name: "العصر", time: todayData.a },
            { name: "المغرب", time: todayData.m },
            { name: "العشاء", time: todayData.i }
        ];

        const currentSec = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        let next = null;

        for (let p of prayers) {
            let [t, mod] = p.time.split(' ');
            let [h, m] = t.split(':').map(Number);
            if (mod === 'م' && h !== 12) h += 12;
            if (mod === 'ص' && h === 12) h = 0;
            let pSec = h * 3600 + m * 60;
            if (pSec > currentSec) { 
                next = { name: p.name, sec: pSec }; 
                break; 
            }
        }

        if (next) {
            let diffSec = next.sec - currentSec;
            let hrs = Math.floor(diffSec / 3600);
            let mins = Math.floor((diffSec % 3600) / 60);
            let secs = diffSec % 60;

            nameLabel.innerText = `المتبقي لصلاة ${next.name}`;
            countdownLabel.innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
            timerBox.style.background = "var(--navy)";
        } else {
            nameLabel.innerText = "انتهت صلوات اليوم";
            countdownLabel.innerText = "--:--:--";
        }
    }
}

/***********************
 * 7️⃣ التشغيل الأساسي
 ***********************/
document.addEventListener('DOMContentLoaded', function() {
    renderImsakeya();
    showSection("imsakeya");
    resetSebha();
    
    // تشغيل العداد كل ثانية
    setInterval(updateCountdown, 1000);
    
    // تعطيل اختيار المدينة نهائياً
    const citySelect = document.getElementById('city-select');
    if (citySelect) {
        citySelect.disabled = true;
        citySelect.style.opacity = '0.5';
        citySelect.title = 'تم تثبيت المواقيت لمدينة القاهرة';
    }
    
    console.log("✅ إمساكية رمضان 2026 - القاهرة");
});

// إلغاء أي دوال خاصة بتغيير المدينة
window.changeCity = null;


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js') // تأكد أن اسم الملف sw.js
      .then(reg => console.log('✅ PWA: جاهز للعمل بدون إنترنت'))
      .catch(err => console.log('❌ PWA: فشل التسجيل', err));
  });
}
