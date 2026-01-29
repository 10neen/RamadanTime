/***********************
 * 1️⃣ البيانات الأساسية (الإمساكية 2026)
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
    {d:30,date:"19 مارس",f:"04:36 ص",zh:"12:03 م",a:"03:31 م",m:"06:06 م",i:"07:22 م"}
];

/***********************
 * 2️⃣ التنقل وواجهة الإمساكية
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

// تعديل الدالة لضمان توافق أسماء الأيام مع تواريخ 2026
function formatDateWithDay(dateStr) {
    const days = ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
    const months = {"فبراير":2,"مارس":3};

    const [dayNum, monthName] = dateStr.split(" ");
    const monthNum = months[monthName];
    // إنشاء كائن تاريخ لسنة 2026 للتأكد من اسم اليوم
    const date = new Date(2026, monthNum - 1, parseInt(dayNum, 10));
    const dayName = days[date.getDay()];
    return `${dayName} ${dayNum} ${monthName}`;
}

function renderImsakeya() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;

    let html = `
        <thead>
            <tr>
                <th>رمضان</th>
                <th>التاريخ</th>
                <th>الفجر</th>
                <th>الظهر</th>
                <th>العصر</th>
                <th>المغرب</th>
                <th>العشاء</th>
            </tr>
        </thead>
        <tbody>`;

    RAMADAN_30_DAYS.forEach(d => {
        const dayNumInMonth = parseInt(d.date.split(" ")[0]);
        let isToday = false;

        if (d.date.includes("فبراير") && month === 2 && dayNumInMonth === day) isToday = true;
        if (d.date.includes("مارس") && month === 3 && dayNumInMonth === day) isToday = true;

        html += `
        <tr class="${isToday ? 'current-day-row' : ''}">
            <td>${d.d}</td>
            <td>${d.date}</td>
            <td class="fajr-highlight">${adjustTime(d.f, currentOffset)}</td>
            <td>${adjustTime(d.zh, currentOffset)}</td>
            <td>${adjustTime(d.a, currentOffset)}</td>
            <td class="maghrib-highlight">${adjustTime(d.m, currentOffset)}</td>
            <td>${adjustTime(d.i, currentOffset)}</td>
        </tr>`;
    });

    html += "</tbody>";
    
    // تأمين الـ ID: لو المستخدم كاتب imsakia-table أو prayer-times يشتغل في الحالتين
    const container = document.getElementById("imsakia-table") || document.getElementById("prayer-times");
    if (container) {
        container.innerHTML = html;
    }
}

/***********************
 * 3️⃣ السبحة الإلكترونية والأذكار (النسخة الكاملة)
 ***********************/
const AZKAR_MODES = {
    // تسبيح دبر كل صلاة
	// أذكار ما بعد الصلاة (السنة)
    sunna: [
        { 
            text: "أَسْتَغْفِرُ اللَّهَ (ثلاثاً) .. اللَّهُمَّ أَنْتَ السَّلامُ وَمِنْكَ السَّلامُ، تَبَارَكْتَ يَا ذَا الْجَلالِ وَالإِكْرَامِ", 
            limit: 1 
        },
        { 
            text: "سُبْحَانَ اللَّهِ", 
            limit: 33 
        },
        { 
            text: "الْحَمْدُ لِلَّهِ", 
            limit: 33 
        },
        { 
            text: "اللَّهُ أَكْبَرُ", 
            limit: 33 
        },
        { 
            text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (تَمَامَ الْمِائَةِ)", 
            limit: 1 
        },
        { 
            text: "قراءة آية الكرسي: {اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ}", 
            limit: 1 
        }
    ],
	
	// أذكار الصباح
    sabah: [
        { 
            text: "أعوذ بالله من الشيطان الرجيم: {اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ}", 
            limit: 1 
        },
        { 
            text: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", 
            limit: 3 
        },
        { 
            text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ", 
            limit: 1 
        },
        { 
            text: "رَضِيتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", 
            limit: 3 
        },
        { 
            text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ", 
            limit: 1 
        },
        { 
            text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ ، عَدَدَ خَلْقِهِ ، وَرِضَا نَفْسِهِ ، وَزِنَةَ عَرْشِهِ ، وَمِدَادَ كَلِمَاتِهِ", 
            limit: 3 
        },
        { 
            text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", 
            limit: 1 
        }
    ],
	
	// أذكار المساء
    masa: [
        { 
            text: "أعوذ بالله من الشيطان الرجيم: {اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ}", 
            limit: 1 
        },
        { 
            text: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", 
            limit: 3 
        },
        { 
            text: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", 
            limit: 3 
        },
        { 
            text: "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لا يَغْفِرُ الذُّنُوبَ إِلا أَنْتَ", 
            limit: 1 
        },
        { 
            text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", 
            limit: 1 
        },
        { 
            text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ", 
            limit: 1 
        },
        { 
            text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ", 
            limit: 100 
        }
    ],
	
	// أذكار النوم
    sleep: [
        { 
            text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ", 
            limit: 1 
        },
        { 
            text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", 
            limit: 3 
        },
        { 
            text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", 
            limit: 1 
        },
        { 
            text: "سُبْحَانَ اللَّهِ", 
            limit: 33 
        },
        { 
            text: "الْحَمْدُ لِلَّهِ", 
            limit: 33 
        },
        { 
            text: "اللَّهُ أَكْبَرُ", 
            limit: 34 
        },
        { 
            text: "اللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِي إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لا مَلْجَأَ وَلا مَنْجَا مِنْكَ إِلا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ", 
            limit: 1 
        }
    ],
	
    estighfar: [{ text: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ", limit: 100 }],
    salat: [{ text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ", limit: 100 }],
    hawqala: [{ text:  "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ", limit: 100 }]
};

let currentMode = "sunna";
let c = 0, phase = 0;

window.setAzkar = function(mode, btn) {
    currentMode = mode;
    resetSebha();

    document.querySelectorAll('.opt-btn')
        .forEach(b => b.classList.remove('active-opt'));

    if (btn) btn.classList.add('active-opt');
};

document.getElementById("sebha-btn").onclick = () => {
    const data = AZKAR_MODES[currentMode];
    c++;
    if (c > data[phase].limit) {
        phase++;
        c = 1;
        if (phase >= data.length) {
            alert("تقبل الله طاعتك");
            resetSebha();
            return;
        }
    }
    document.getElementById("sebha-text").innerText = data[phase].text;
    document.getElementById("sebha-count").innerText = c;
    if ("vibrate" in navigator) navigator.vibrate(50);
};

window.resetSebha = function() {
    c = 0; phase = 0;
    const data = AZKAR_MODES[currentMode];
    document.getElementById("sebha-count").innerText = 0;
    document.getElementById("sebha-text").innerText = data[0].text;
};

/***********************
 * 4️⃣ المصحف والتفسير المطور
 ***********************/
 window.changeFontSize = function(delta) {
    const quranText = document.querySelector('.quran-p-tag');
    if (!quranText) return;

    let currentSize = parseFloat(window.getComputedStyle(quranText).fontSize);

    // تحديد حد أدنى وأقصى
    const minSize = 12;
    const maxSize = 36;

    let newSize = currentSize + delta;
    if (newSize < minSize) newSize = minSize;
    if (newSize > maxSize) newSize = maxSize;

    quranText.style.fontSize = newSize + "px";
};

 window.toggleDarkMode = function() {
    const quranContainer = document.querySelector('.quran-text-final');
    const btn = document.getElementById('night-mode-btn');

    if (!quranContainer || !btn) return;

    const isDark = quranContainer.classList.toggle('dark-mode');
    btn.innerText = isDark ? "☀️" : "🌙";
};


/***********************
 * تعديل دالة تنسيق التاريخ ليكون الترتيب: اسم اليوم ثم اليوم ثم الشهر
 ***********************/
function formatDateWithDay(dateStr) {
    const days = ["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];
    const monthsLookup = {"فبراير":2,"مارس":3};

    const [dayNum, monthName] = dateStr.split(" ");
    const monthNum = monthsLookup[monthName];
    // إنشاء كائن تاريخ للتأكد من اليوم الصحيح في 2026
    const date = new Date(2026, monthNum - 1, parseInt(dayNum, 10));
    const dayName = days[date.getDay()];
    
    // الترتيب المطلوب: اسم اليوم + رقم اليوم + اسم الشهر
    return `${dayName} ${dayNum} ${monthName}`;
}

/***********************
 * تعديل جلب السورة (إصلاح البسملة)
 ***********************/
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
        // جلب النص العثماني مع تفسير الجلالين في طلب واحد
        const response = await fetch(`https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,ar.jalalayn`);
        const data = await response.json();
        
        const quranData = data.data[0];
        const tafseerData = data.data[1];

        let quranHtml = `<div class="quran-text-final">`;

        // إظهار البسملة كعنوان منفصل لكل السور عدا التوبة
        if (id != 9) {
            quranHtml += `<div class="basmalah-v2">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>`;
        }

        let allAyahs = "";
        quranData.ayahs.forEach((ayah, index) => {
            let text = ayah.text;

            // معالجة البسملة في أول آية:
            if (index === 0 && id != 1 && id != 9) {
                text = text.replace(/^بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\s?/, "").trim();
            }

            const tafseerText = tafseerData.ayahs[index].text.replace(/`/g, "'").replace(/"/g, "'");
            
            allAyahs += `
                <span class="ayah-wrapper">
                    <span class="ayah-content" onclick="openTafseer('${ayah.numberInSurah}', \`${tafseerText}\`)">${text}</span>
                    <span class="ayah-mark">﴿${ayah.numberInSurah}﴾</span>
                </span> `;
        });

        quranHtml += `<p class="quran-p-tag">${allAyahs}</p></div>`;
        viewer.innerHTML = controlsHtml + quranHtml;

    } catch (e) {
        console.error("Quran Fetch Error:", e);
        viewer.innerHTML = controlsHtml + "<p style='text-align:center; color:red;'>عذراً، حدث خطأ أثناء التحميل. تأكد من اتصالك بالإنترنت.</p>";
    }
}

// نافذة التفسير الجانبية
window.openTafseer = function(num, text) {
    const title = document.getElementById("tafseer-title");
    const content = document.getElementById("tafseer-content");
    const sidebar = document.getElementById("tafseer-sidebar");

    if (title && content && sidebar) {
        title.innerText = `تفسير الآية (${num})`;
        content.innerText = text;
        sidebar.classList.add("active");
    }
};

window.closeTafseer = function() {
    const sidebar = document.getElementById("tafseer-sidebar");
    if (sidebar) sidebar.classList.remove("active");
};

document.addEventListener("DOMContentLoaded", () => {
    const names = ["الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة","يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه","الأنبيـاء","الحـج","المؤمنون","النـور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم","لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر","فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق","الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة","الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج","نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس","التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد","الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات","القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر","المسد","الإخلاص","الفلق","الناس"];
    const sel = document.getElementById("surah-select");
    if (sel && sel.options.length <= 1) { // منع التكرار عند إعادة الرندر
        names.forEach((n, i) => { 
            let o = document.createElement("option"); 
            o.value = i + 1; 
            o.text = n; 
            sel.appendChild(o); 
        });
    }
});
 

/***********************
 * 5️⃣ العداد التنازلي للصلوات (معدل بالتنبيهات + فجر الغد)
 ***********************/
 function updateCountdown() {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    const timerBox = document.getElementById("next-prayer-container");
    const nameLabel = document.getElementById("next-prayer-name");
    const countdownLabel = document.getElementById("countdown-timer");

    if (!timerBox || !nameLabel || !countdownLabel) return;

    // 1. حالة ما قبل رمضان 2026
    const ramadanStart = new Date(2026, 1, 18); 
    if (now < ramadanStart) {
        const diffTime = ramadanStart - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        nameLabel.innerText = "اللهم بلغنا رمضان.. باقي على الشهر الكريم:";
        countdownLabel.innerText = `${diffDays} يوم`;
        timerBox.style.background = "linear-gradient(135deg, #1a2a6c, #b21f1f)";
        return;
    }

    // 2. البحث عن بيانات اليوم الحالي
    const todayData = RAMADAN_30_DAYS.find(d => {
        const dayNum = parseInt(d.date.split(" ")[0]);
        return (d.date.includes("فبراير") && month === 2 && dayNum === day) ||
               (d.date.includes("مارس") && month === 3 && dayNum === day);
    });

    // 3. حالة ما بعد رمضان
    if (!todayData && now > new Date(2026, 2, 19)) {
        nameLabel.innerText = "عيد مبارك.. تقبل الله منا ومنكم";
        countdownLabel.innerText = "كل عام وأنتم بخير";
        timerBox.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
        return;
    }

    // 4. تحويل أوقات الصلوات مع تطبيق الـ Offset (المحافظات)
    const prayers = todayData ? [
        { name: "الفجر", time: adjustTime(todayData.f, currentOffset) },
        { name: "الظهر", time: adjustTime(todayData.zh, currentOffset) },
        { name: "العصر", time: adjustTime(todayData.a, currentOffset) },
        { name: "المغرب", time: adjustTime(todayData.m, currentOffset) },
        { name: "العشاء", time: adjustTime(todayData.i, currentOffset) }
    ] : [];

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

    // 5. تحديث الواجهة بناءً على الصلاة القادمة
    if (next) {
        let diffSec = next.sec - currentSec;
        let hrs = Math.floor(diffSec / 3600);
        let mins = Math.floor((diffSec % 3600) / 60);
        let secs = diffSec % 60;

        nameLabel.innerText = `المتبقي لصلاة ${next.name}`;
        countdownLabel.innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

        // التنبيهات الذكية
        if (next.name === "الفجر" && diffSec <= 3600) {
            timerBox.style.background = "linear-gradient(135deg, #4a0e0e, #8b0000)";
            nameLabel.innerText = "⚡ سحورك يا صائم.. ساعة على الأذان";
        } else if (next.name === "المغرب" && diffSec <= 300) { // قبل المغرب بـ 5 دقائق
            timerBox.style.background = "linear-gradient(135deg, #1a9c3b, #27ae60)";
            nameLabel.innerText = "🤲 استعد للإفطار.. أوشك وقت الإجابة";
        } else if (next.name === "العشاء" && diffSec <= 900) {
            timerBox.style.background = "linear-gradient(135deg, #2c3e50, #34495e)";
            nameLabel.innerText = "🌙 صلاة التراويح تقترب.. جهز نفسك";
        } else {
            timerBox.style.background = "var(--navy)";
        }
    } else {
        // 6. التعامل مع فجر الغد (بعد صلاة العشاء)
        updateTomorrowFajr(now, currentSec, nameLabel, countdownLabel, timerBox);
    }
}

// دالة منفصلة لحساب فجر الغد لتقليل زحمة الكود
function updateTomorrowFajr(now, currentSec, nameLabel, countdownLabel, timerBox) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tDay = tomorrow.getDate();
    const tMonth = tomorrow.getMonth() + 1;

    const tomorrowData = RAMADAN_30_DAYS.find(d => {
        const dayNum = parseInt(d.date.split(" ")[0]);
        return (d.date.includes("فبراير") && tMonth === 2 && dayNum === tDay) ||
               (d.date.includes("مارس") && tMonth === 3 && dayNum === tDay);
    });

    if (tomorrowData) {
        let fTime = adjustTime(tomorrowData.f, currentOffset);
        let [t, mod] = fTime.split(' ');
        let [h, m] = t.split(':').map(Number);
        if (mod === 'م' && h !== 12) h += 12;
        if (mod === 'ص' && h === 12) h = 0;
        
        let fajrSec = h * 3600 + m * 60;
        let diffSec = (24 * 3600 - currentSec) + fajrSec;

        let hrs = Math.floor(diffSec / 3600);
        let mins = Math.floor((diffSec % 3600) / 60);
        let secs = diffSec % 60;

        nameLabel.innerText = "المتبقي لصلاة فجر الغد";
        countdownLabel.innerText = `${String(hrs).padStart(2,'0')}:${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
        timerBox.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
    }
}
 
// 1. تعريف فروق التوقيت عن القاهرة (بالدقائق)
const CITY_OFFSETS = {
    cairo: 0, alex: 3, aswan: -5, ismailia: -4, tanta: 1, 
    asyut: 0, sohag: -1, qena: -2, luxor: -3, hurghada: -8,
    matrouh: 14, mansoura: 0, damietta: -1, port_said: -5,
    suez: -4, minia: 1, feyyum: 1, zagazig: -1
};

let currentOffset = 0; // الفرق الحالي بالدقائق

// 2. دالة تعديل الوقت بناءً على الفرق (تم تحسين منطق الحساب)
function adjustTime(timeStr, offsetMinutes) {
    if (!timeStr || offsetMinutes === 0) return timeStr;
    
    let [time, period] = timeStr.split(' '); 
    let [hrs, mins] = time.split(':').map(Number);
    
    // تحويل الوقت بالكامل إلى دقائق لتسهيل الحساب
    let totalMins = hrs * 60 + mins + offsetMinutes;
    
    // إعادة التحويل لساعات ودقائق
    let newHrs = Math.floor(totalMins / 60);
    let newMins = totalMins % 60;
    
    // معالجة الحالات الحدية (لو الدقائق بالسالب)
    if (newMins < 0) {
        newMins += 60;
        newHrs -= 1;
    }
    
    if (newHrs > 12) newHrs -= 12;
    if (newHrs <= 0) newHrs = 12;

    return `${String(newHrs).padStart(2, '0')}:${String(newMins).padStart(2, '0')} ${period}`;
}

// 3. دالة تغيير المدينة وحفظها
window.changeCity = function(cityKey) {
    currentOffset = CITY_OFFSETS[cityKey] || 0;
    
    // حفظ المدينة في الذاكرة المحلية
    localStorage.setItem('userCity', cityKey);
    
    // تحديث كل الواجهات فوراً
    renderImsakeya(); 
    updateCountdown(); 
    
    // إغلاق أي قائمة منسدلة لو مفتوحة (اختياري)
    console.log(`تم تغيير الموقع إلى: ${cityKey} بفرق ${currentOffset} دقيقة`);
};

// 4. التشغيل الأساسي عند تحميل الصفحة
window.onload = () => {
    // استعادة المدينة المحفوظة سابقاً
    const savedCity = localStorage.getItem('userCity') || 'cairo';
    currentOffset = CITY_OFFSETS[savedCity] || 0;
    
    // تحديث قيمة الـ Select لو موجود في الـ HTML
    const citySelect = document.getElementById("city-select");
    if (citySelect) citySelect.value = savedCity;

    // تشغيل الدوال الأساسية
    renderImsakeya();
    showSection("imsakeya");
    updateCountdown(); // تشغيل أول مرة فوراً
    
    // ضبط العداد ليعمل كل ثانية
    setInterval(updateCountdown, 1000);
    
    // تسجيل الـ Service Worker لضمان عمل الموقع Offline (PWA)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('PWA: تم التسجيل بنجاح'))
            .catch(err => console.log('PWA: فشل التسجيل', err));
    }

    console.log("إمساكية 2026 جاهزة - إهداء من الصعيدي للأدوات الصحية");
};

