/* ============================================================
   ⚙️  إعدادات الباحثة — عدّل هنا فقط
   ============================================================ */
const RESEARCHER = {
  whatsapp:  "97466267174",   // ← ضع رقمك بدون + مثال: 966501234567
};
/* ============================================================ */

/* ============================================================
   DATA
   ============================================================ */

const survey1Questions = [
  "إذا وجدت في حفلة استقبال أو حفلة شاي، فهل تحاول مقابلة الشخصيه الاهم الموجودة في الحفل؟",
  "هل شعرت مرة برغبة شديدة في الهروب من البيت؟",
  "هل شعرت بالحرج بسبب نوع العمل الذي يقوم به والدك لكي يعول الأسرة؟",
  "هل تشعر أحياناً بأن والديك قد فقدوا آمالهم فيك؟",
  "هل تسيطر والدتك على البيت؟",
  "هل تشعر بعدم توفر الود والحب الحقيقيين في بيتك؟",
  "هل كثيراً ما انتقدك أحد والديك بغير وجه حق؟",
  "هل علاقتك بوالديك طيبة عادة؟",
  "هل حدث أن أصر أحد والديك على أن تطيعه بغير وجه حق بصرف النظر عما إذا كان ما يطلبه منك أمراً معقولاً أم لا؟",
  "هل تجد أنه من السهل أن تطلب من الآخرين أن يساعدوك؟",
  "هل كانت قلة المال سبباً في جعل حياتك المنزلية تعيسة؟",
  "هل كان المرض أو الموت سبباً في جعل حياتك المنزلية تعيسة؟",
  "هل كثيراً ما وجد أحد والديك بعض الأخطاء في سلوكك؟",
  "هل كثيراً ما اعترض والدك على نوع الرفاق الذين تسير معهم؟",
  "هل أحد والديك سريع الغضب والاستثارة؟",
  "هل كثيراً ما اختلفت مع أحد والديك حول الطريقة التي ينبغي أن يتم بها شغل البيت؟",
  "هل تقع مشاحنات عائلية كبيرة بين أقربائك المقربين؟",
  "هل كثيراً ما تشاجرت مع إخوانك وأخواتك؟",
  "هل تعتقد بأن والديك لا ينظران إليك باعتبارك شخصاً ناضجاً ولذلك يعاملانك كأنك لا زلت طفلاً؟",
  "هل تعتقد أن والديك متشددان معك أكثر من اللازم؟",
  "هل لأحد والديك بعض العادات الشخصية المعينة التي تثيرك؟",
  "هل تحب أمك أكثر مما تحب أباك؟",
  "هل كثيراً ما كنت مضطراً إلى مغادرة المنزل لكي تحقق السلام والهدوء؟",
  "هل حدث أحياناً أن كانت تصرفات والديك سبباً في إثارة خوف شديد في نفسك؟",
  "هل تشعر أحياناً بعواطف متناقضة من الحب والكراهية نحو أفراد أسرتك؟",
  "هل كانت علاقتك مع والديك حسنة في العادة؟",
  "هل تعتبر والدك مثلك الأعلى للرجولة؟",
  "هل وزنك أقل كثيراً من الوزن العادي لسنك؟",
  "هل والداك منفصلان بصفة مستمرة؟",
  "هل كان والدك يعاقبك كثيراً حينما كان سنك بين العاشرة والثانية عشر؟",
  "هل حدث أن اختلفت مع والديك على العمل الذي تريد أن تقوم به في الحياة؟",
  "هل يفرض أحد والديك السيطرة عليك أكثر من اللازم؟",
  "هل كثيراً ما شعرت أن أحد والديك لم يفهمك؟",
  "هل شعرت أن أصدقاءك أسعد منك في حياتك المنزلية؟",
  "هل كان بيتك مزوداً دائماً بجميع الضروريات الهامة للمعيشة؟"
];

const survey2Questions = [
  "أحتاج إلى شخص ما يساعدني في أموري الخاصة",
  "ألوم نفسي على أفعالي السلبية",
  "علاقاتي بالآخرين قوية",
  "أعتبر نفسي مسؤولاً عما ألاقيه من متاعب",
  "شخصيتي جذابة بالنسبة للجنس الآخر",
  "من الصعب التحكم في نزعاتي العدوانية",
  "أنا منغلق على نفسي",
  "أشد معاركي معركتي مع نفسي",
  "هناك بعض الصفات في شخصيتي أرغب في تعديلها",
  "أشعر أن علي أن أدفع نفسي دفعاً للإنجاز",
  "أنتقد الآخرين في كثير من المواقف",
  "أشعر بأنني عديم النفع",
  "أتماشى مع الآخرين وأتنازل عن آرائي حتى ولو كنت مقتنعاً بها في كثير من المواقف",
  "أقدر ذاتي حق قدرها",
  "أشعر بقلة الثقة في نفسي",
  "أشعر بأنني عصبي",
  "أشعر بأنني متفوق",
  "أشعر بأنني مشتت الفكر",
  "أنا محبوب من أقراني",
  "أشعر بأنني مختلف عن الآخرين",
  "أشعر بأنني لا أنجز شيئاً",
  "ضبط النفس ليس مشكلة بالنسبة لي",
  "أنا مجد لعملي",
  "أطالب نفسي بالشيء الكثير",
  "أنا أهل للثقة",
  "أنا عنيد في كثير من المواقف",
  "أنا راضٍ عن نفسي",
  "أستغل وقت فراغي استغلالاً طيباً",
  "أستطيع أن أعبر عن نفسي",
  "لا يمكن الاعتماد علي",
  "أستطيع أن أتخذ قراري بنفسي",
  "حياتي مليئة بالمتاعب",
  "أنا شخص مستسلم",
  "أنقاد بسهولة لرأي الآخرين",
  "أشعر دائماً بالمهانة",
  "أشعر باليأس",
  "أنا فاشل",
  "أنا خجول",
  "أنا شخص في عزلة عن الناس",
  "أشك في قدراتي الجنسية",
  "أنا أشبه الجنس الآخر كثيراً",
  "أحاول التهرب من مشكلاتي",
  "أشعر بالنقص",
  "أنا شخص عاقل",
  "يمكنني إقرار شيء وأثبت على قراري",
  "إنني أفهم نفسي",
  "أشعر برغبة في العدوان",
  "أحب أن أثبت ذاتي",
  "أستطيع أن أعيش في وئام مع من حولي",
  "أنا مندفع",
  "أنا متسلط",
  "أشعر بأنني عديم الشعور",
  "لا أستطيع أن أصمم على شيء",
  "أنا مضطرب",
  "أنا متفائل",
  "لا أحس بأي حرج عند دخول مكان عام",
  "أنا غير مستقر",
  "أنا مرتاح البال",
  "أنا قادر على التأثير على الآخرين",
  "أخاف من الاختلاف مع الآخرين",
  "أنا في مركز طيب بالنسبة لأقراني",
  "أنا ناجح في حياتي",
  "أشعر بالوحدة وأنا وسط جمع من الناس",
  "أشعر بعدم الأمن",
  "لا أشعر بالارتياح وأنا أتحدث إلى شخص آخر",
  "تخيفني اعتقادات الآخرين عني",
  "لا أحترم نفسي",
  "أحجم عن مواجهة أزمة أو صعوبة",
  "لا أشعر أنني أقل من أي شخص آخر",
  "أضطر إلى تبديل تصرفاتي وأخطائي في كثير من المواقف",
  "أخاف من المواقف الجديدة",
  "إرادتي قوية"
];

/* ============================================================
   STATE
   ============================================================ */
let answers = {
  demographics: {},
  survey1: {},   // { q0: 'نعم', q1: 'لا', ... }
  survey2: {}    // { q0: 'دائماً', ... }
};

/* ============================================================
   NAVIGATION
   ============================================================ */
function goTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId);
  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   BUILD TABLES
   ============================================================ */
function buildSurvey1() {
  const tbody = document.getElementById('tbody-survey1');
  tbody.innerHTML = '';
  survey1Questions.forEach((q, i) => {
    const tr = document.createElement('tr');
    tr.id = `s1-row-${i}`;
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td class="q-cell">${q}</td>
      <td style="text-align:center"><input type="radio" name="s1q${i}" value="نعم" onchange="markS1(${i})"/></td>
      <td style="text-align:center"><input type="radio" name="s1q${i}" value="لا"  onchange="markS1(${i})"/></td>
    `;
    tbody.appendChild(tr);
  });
}

function buildSurvey2() {
  const tbody = document.getElementById('tbody-survey2');
  tbody.innerHTML = '';
  const opts = ['دائماً', 'غالباً', 'أحياناً', 'نادراً', 'لا يحدث'];
  survey2Questions.forEach((q, i) => {
    const tr = document.createElement('tr');
    tr.id = `s2-row-${i}`;
    let cells = opts.map(o =>
      `<td style="text-align:center"><input type="radio" name="s2q${i}" value="${o}" onchange="markS2(${i})"/></td>`
    ).join('');
    tr.innerHTML = `<td>${i + 1}</td><td class="q-cell">${q}</td>${cells}`;
    tbody.appendChild(tr);
  });
}

function markS1(i) {
  const val = document.querySelector(`input[name="s1q${i}"]:checked`)?.value;
  if (val) {
    answers.survey1[`q${i}`] = val;
    document.getElementById(`s1-row-${i}`).classList.add('answered');
    updateProgress1();
  }
}

function markS2(i) {
  const val = document.querySelector(`input[name="s2q${i}"]:checked`)?.value;
  if (val) {
    answers.survey2[`q${i}`] = val;
    document.getElementById(`s2-row-${i}`).classList.add('answered');
    updateProgress2();
  }
}

function updateProgress1() {
  const done = Object.keys(answers.survey1).length;
  const total = survey1Questions.length;
  document.getElementById('prog1').style.width = `${(done / total) * 100}%`;
  document.getElementById('prog1-label').textContent = `${done} / ${total}`;
}

function updateProgress2() {
  const done = Object.keys(answers.survey2).length;
  const total = survey2Questions.length;
  document.getElementById('prog2').style.width = `${(done / total) * 100}%`;
  document.getElementById('prog2-label').textContent = `${done} / ${total}`;
}

/* ============================================================
   VALIDATION & SUBMIT
   ============================================================ */
function submitDemographics() {
  const fields = ['gender', 'grade', 'major', 'father_edu', 'mother_edu'];
  const missing = fields.some(f => !document.querySelector(`input[name="${f}"]:checked`));
  if (missing) {
    document.getElementById('demo-error').classList.remove('hidden');
    return;
  }
  document.getElementById('demo-error').classList.add('hidden');
  fields.forEach(f => {
    answers.demographics[f] = document.querySelector(`input[name="${f}"]:checked`).value;
  });
  goTo('page-survey1');
}

function submitSurvey1() {
  if (Object.keys(answers.survey1).length < survey1Questions.length) {
    document.getElementById('s1-error').classList.remove('hidden');
    // Scroll to first unanswered
    for (let i = 0; i < survey1Questions.length; i++) {
      if (!answers.survey1[`q${i}`]) {
        document.getElementById(`s1-row-${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
    return;
  }
  document.getElementById('s1-error').classList.add('hidden');
  goTo('page-survey2');
}

function submitSurvey2() {
  if (Object.keys(answers.survey2).length < survey2Questions.length) {
    document.getElementById('s2-error').classList.remove('hidden');
    for (let i = 0; i < survey2Questions.length; i++) {
      if (!answers.survey2[`q${i}`]) {
        document.getElementById(`s2-row-${i}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      }
    }
    return;
  }
  document.getElementById('s2-error').classList.add('hidden');
  goTo('page-send');
}

/* ============================================================
   FORMAT ANSWERS
   ============================================================ */
function formatAnswers() {
  const d = answers.demographics;
  let text = `📋 نتائج الاستبيان\n`;
  text += `${'='.repeat(40)}\n`;
  text += `📌 البيانات الأولية\n`;
  text += `النوع: ${d.gender || '-'}\n`;
  text += `المستوى الصفي: ${d.grade || '-'}\n`;
  text += `التخصص: ${d.major || '-'}\n`;
  text += `تعليم الأب: ${d.father_edu || '-'}\n`;
  text += `تعليم الأم: ${d.mother_edu || '-'}\n\n`;

  text += `📌 الاستبيان الأول — الحياة المنزلية\n`;
  text += `${'─'.repeat(40)}\n`;
  survey1Questions.forEach((q, i) => {
    text += `${i + 1}. ${q}\n   ➜ ${answers.survey1[`q${i}`] || '—'}\n`;
  });

  text += `\n📌 الاستبيان الثاني — مفهوم الذات\n`;
  text += `${'─'.repeat(40)}\n`;
  survey2Questions.forEach((q, i) => {
    text += `${i + 1}. ${q}\n   ➜ ${answers.survey2[`q${i}`] || '—'}\n`;
  });

  return text;
}

/* ============================================================
   SEND METHODS
   ============================================================ */
function sendWhatsApp() {
  const num = RESEARCHER.whatsapp.replace(/^\+/, '').replace(/^00/, '');
  const text = encodeURIComponent(formatAnswers());
  window.open(`https://wa.me/${num}?text=${text}`, '_blank');
}

function sendEmail() {}
function sendInstagram() {}

function copyAnswers() {
  copyToClipboard(formatAnswers());
  document.getElementById('copy-confirm').classList.remove('hidden');
  setTimeout(() => document.getElementById('copy-confirm').classList.add('hidden'), 3000);
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
}

/* ============================================================
   RESTART
   ============================================================ */
function restartSurvey() {
  answers = { demographics: {}, survey1: {}, survey2: {} };
  // Reset all radio buttons
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  document.querySelectorAll('.answered').forEach(r => r.classList.remove('answered'));
  updateProgress1();
  updateProgress2();
  // Clear send state
  document.getElementById('copy-confirm').classList.add('hidden');
  goTo('page-cover');
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildSurvey1();
  buildSurvey2();
});
