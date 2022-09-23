let mark = document.getElementById('mark1');

mark.addEventListener('click', function() {

    mark.src = "image/Star 1-fill.png";

});

let second_star = document.getElementById('mark2');
second_star.addEventListener('click', function() {
    second_star.src = "image/Star 1-fill.png";
});
let third_star = document.getElementById('mark3');
third_star.addEventListener('click', function() {
    third_star.src = "image/Star 1-fill.png";
});
let fourth_star = document.getElementById('mark4');
fourth_star.addEventListener('click', function() {
    fourth_star.src = "image/Star 1-fill.png";
});
let fifth_star = document.getElementById('mark5');
fifth_star.addEventListener('click', function() {
    fifth_star.src = "image/Star 1-fill.png";
});




let inform = document.querySelector('.physiotherapy-title');
const electroson = document.getElementById('electrosleep');
const darsonval = document.getElementById('darsonval');
const restbath = document.getElementById('relaxbath');
const aromatherapy = document.getElementById('aromatherapy');
let descript = document.getElementById('open-description');


electroson.addEventListener('click', function() {

    inform.hidden = true;

    let first_block = document.createElement('div');
    descript.appendChild(first_block);
    first_block.classList.add('first_block');
    let back = document.createElement('img');
    back.src = "image/Назад до послуг.png";
    first_block.appendChild(back);
    back.classList.add('back');
    back.addEventListener('click', function() {
        inform.hidden = false;
        descript.innerText = "";

    });
    let text = document.createElement('div');
    first_block.appendChild(text);
    text.classList.add("first-img-title");
    text.innerText = "Електросон";
    let block = document.createElement('div');
    descript.appendChild(block);
    block.classList.add('second-block');
    let img1 = document.createElement('img');
    img1.src = "image/elektrod-maska-dlya-apparatov-es-10-05-1023633_big.jpg";
    block.appendChild(img1);
    img1.classList.add('electrosleep-img');
    let text_description = document.createElement('div');
    block.appendChild(text_description);
    text_description.classList.add('electrosleep-description');
    let first_word = document.createElement('span');
    text_description.appendChild(first_word);
    first_word.classList.add('first-word');
    first_word.innerText = "Електросон";
    let first_string = document.createElement('span');
    first_word.appendChild(first_string);
    first_string.classList.add('first-string');
    first_string.innerText = " - це метод електротерапії для лікування нервових розладів,";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "серцевих та легеневих патологій. Під час сеансу на головний мозок пацієнта впливають слабкими розрядами електричного струму. В результаті у людині розвивається стан близький до сну. За допомогою ременів конструкцію закріплюють на потилиці. Під чашечки підкладають ватні тампони, змочені теплою водою. Медичний працівник виставляє потрібну частоту імпульсів і включає апарат. Сила струму дозується індивідуально орієнтуючись на відчуттях пацієнта.";
    let second_paragraph = document.createElement('span');
    text_description.appendChild(second_paragraph);
    second_paragraph.classList.add('first-word');
    second_paragraph.innerText = "Після сеансу:";
    let second_string = document.createElement('span');
    second_paragraph.appendChild(second_string);
    second_string.classList.add('first-string');
    second_string.innerText = " нормалізується артеріальний тиск; поліпшується робота";
    let third_paragraph = document.createElement('div');
    second_string.appendChild(third_paragraph);
    third_paragraph.classList.add('third-paragraph');
    third_paragraph.innerText = "нервової системи; активізується метаболізм; в крові знижується показник «поганого» холестерину; зменшується больовий синдром; нормалізується статева функція; поліпшується згортання крові; знижується тяга до спиртних напоїв; полегшуються симптоми захворювань; поліпшується стан шкіри.";
    let third_block = document.createElement('div');
    descript.appendChild(third_block);
    third_block.classList.add('third-block');
    let alarm = document.createElement('div');
    third_block.appendChild(alarm);
    alarm.classList.add('alarm');
    let sign = document.createElement('span');
    alarm.appendChild(sign);
    sign.classList.add('sign');
    sign.innerText = "!";
    let sign_text = document.createElement('span');
    alarm.appendChild(sign_text);
    sign_text.classList.add('sign-text');
    sign_text.innerText = "Обов’язко проконсультуйтесь з лікарем перед данною процедурою";
});

darsonval.addEventListener('click', function() {

    inform.hidden = true;

    let first_block = document.createElement('div');
    descript.appendChild(first_block);
    first_block.classList.add('first_block');
    let back = document.createElement('img');
    back.src = "image/Назад до послуг.png";
    first_block.appendChild(back);
    back.classList.add('back');
    back.addEventListener('click', function() {
        inform.hidden = false;
        descript.innerText = "";

    });
    let text = document.createElement('div');
    first_block.appendChild(text);
    text.classList.add("second-img-title");
    text.innerText = "Дарсонваль";
    let block = document.createElement('div');
    descript.appendChild(block);

    block.classList.add('second-block');
    let img1 = document.createElement('img');
    img1.src = "image/Дарсонвальд.jpg";
    block.appendChild(img1);
    img1.classList.add('darsonval-img');
    let text_description = document.createElement('div');
    block.appendChild(text_description);
    text_description.classList.add('darsonval-description');
    let first_word = document.createElement('span');
    text_description.appendChild(first_word);
    first_word.classList.add('first-word');
    first_word.innerText = "Дарсонваль";
    let first_string = document.createElement('span');
    first_word.appendChild(first_string);
    first_string.classList.add('first-string');
    first_string.innerText = " - апарат, який проводить лікувальну дію на організм за";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "допомогою імпульсних змінних електричних струмів високої частоти і напруги. Дарсонвалізація стимулює обмінні процеси в організмі, усуває спазми судин, покращує кров'яну циркуляцію, посилює кровотоки та лімфоструми, підвищує тонус венозних стінок та шкірних покривів. Пристрій працює від електричної мережі і комплектується різними насадками-електродами для точкового впливу на різні ділянки тіла.";
    let second_paragraph = document.createElement('span');
    text_description.appendChild(second_paragraph);
    second_paragraph.classList.add('first-word');
    second_paragraph.innerText = "Протипоказано:";
    let second_string = document.createElement('span');
    second_paragraph.appendChild(second_string);
    second_string.classList.add('first-string');
    second_string.innerText = " жінкам в період вагітності; дітям до 6 років; людям, у";
    let third_paragraph = document.createElement('div');
    second_string.appendChild(third_paragraph);
    third_paragraph.classList.add('third-paragraph');
    third_paragraph.innerText = "яких виявлені новоутворення доброякісної або злоякісної природи; людям з гіпертонією; всім, хто має порушення згортання крові або тромбофлебіт; людям, що страждають від серцево-судинних захворювань; при наявності кардіостимулятора.";
    let third_block = document.createElement('div');
    descript.appendChild(third_block);
    third_block.classList.add('third-block');
    let alarm = document.createElement('div');
    third_block.appendChild(alarm);
    alarm.classList.add('alarm');
    let sign = document.createElement('span');
    alarm.appendChild(sign);
    sign.classList.add('sign');
    sign.innerText = "!";
    let sign_text = document.createElement('span');
    alarm.appendChild(sign_text);
    sign_text.classList.add('sign-text');
    sign_text.innerText = "Обов’язко проконсультуйтесь з лікарем перед данною процедурою";
});

restbath.addEventListener('click', function() {

    inform.hidden = true;

    let first_block = document.createElement('div');
    descript.appendChild(first_block);
    first_block.classList.add('first_block');
    let back = document.createElement('img');
    back.src = "image/Назад до послуг.png";
    first_block.appendChild(back);
    back.classList.add('back');
    back.addEventListener('click', function() {
        inform.hidden = false;
        descript.innerText = "";

    });
    let text = document.createElement('div');
    first_block.appendChild(text);
    text.classList.add("third-img-title");
    text.innerText = "Розслаблююча ванна";

    let block = document.createElement('div');
    descript.appendChild(block);
    block.classList.add('second-block');
    let text_description = document.createElement('div');
    block.appendChild(text_description);
    text_description.classList.add('restbath-description');
    let first_word = document.createElement('div');
    text_description.appendChild(first_word);
    first_word.classList.add('first-word');
    first_word.innerText = "Розслаблююча ванна";
    let first_string = document.createElement('span');
    first_word.appendChild(first_string);
    first_string.classList.add('first-string');
    first_string.innerText = "  - це не тільки приємна процедура, а ще процерура, яка має лікувальний ефект на організм. У нашому закладі ми";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "застовуємо три види лікувальних ванн: хвойну, ромашкову та сольову.";
    let second_paragraph = document.createElement('span');
    text_description.appendChild(second_paragraph);
    second_paragraph.classList.add('first-word');
    second_paragraph.innerText = "Ванна з додаванням хвої";
    let second_string = document.createElement('span');
    second_paragraph.appendChild(second_string);
    second_string.classList.add('first-string');
    second_string.innerText = " відрізняється приємним ароматом. Її ефект пов'язаний з ефірними маслами, що виділяються під час процедур з";
    let third_paragraph = document.createElement('div');
    second_string.appendChild(third_paragraph);
    third_paragraph.classList.add('third-paragraph');
    third_paragraph.innerText = "хвойного субстрату. До того ж, в такій ванні є маса вітамінів, мінеральних солей, мікроелементів, а також дубильних речовин.";
    let second_block_part = document.createElement('div');
    descript.appendChild(second_block_part);
    second_block_part.classList.add('second-block-part');
    let img1 = document.createElement('img');
    img1.src = "image/ванна.jpg";
    second_block_part.appendChild(img1);
    img1.classList.add('restbath-img');
    let fourth_paragraph = document.createElement('div');
    second_block_part.appendChild(fourth_paragraph);
    fourth_paragraph.classList.add('fourth-paragraph');
    fourth_paragraph.innerText = "Ванна з хвоєю корисна для серцево-судинної і дихальної систем, а також для нервової системи."
    let second_word = document.createElement('div');
    fourth_paragraph.appendChild(second_word);
    second_word.classList.add('first-word');
    second_word.innerText = "Ванни з відваром ромашки";
    let third_string = document.createElement('span');
    second_word.appendChild(third_string);
    third_string.classList.add('first-string');
    third_string.innerText = " благотворно впливають на стан шкіри, і на";
    let fifth_paragraph = document.createElement('div');
    fourth_paragraph.appendChild(fifth_paragraph);
    fifth_paragraph.classList.add('fifth-paragraph');
    fifth_paragraph.innerText = "здоров’я в цілому. Після ванни з відваром ромашки спостерігаються такі ефекти, як: позбавлення від пігментних плям;лікування висипань і вугрів; підвищення еластичності шкірного покриву. Біло-жовті квіти відомі своїм заспокійливим дією. Після процедур з застосуванням ромашки підвищується стійкість до стресів.";
    second_block_part.appendChild(fourth_paragraph);
    fourth_paragraph.classList.add('fourth-paragraph');
    let third_word = document.createElement('div');
    fourth_paragraph.appendChild(third_word);
    third_word.classList.add('second-word');
    third_word.innerText = "Сольова ванна";
    let fourth_string = document.createElement('span');
    third_word.appendChild(fourth_string);
    fourth_string.classList.add('first-string');
    fourth_string.innerText = " також вважається дуже корисною. Має заспокійливий і ";
    let sixth_paragraph = document.createElement('div');
    fourth_paragraph.appendChild(sixth_paragraph);
    sixth_paragraph.classList.add('sixth-paragraph');
    sixth_paragraph.innerText = "розслаблюючий ефект; лікує шкірні захворювання (екзема, псоріаз); позбавляє від токсинів; зміцнює імунітет; надає профілактичну антиінфекційне дію; пом’якшує натоптиші; відновлює сольовий баланс; знімає біль; нормалізуює тиск і рівень холестерину; допомагає при проблемах з суглобами, опорно-руховою системою і судинами.";
    second_block_part.appendChild(fourth_paragraph);
    fourth_paragraph.classList.add('fourth-paragraph');
    let third_block = document.createElement('div');
    descript.appendChild(third_block);
    third_block.classList.add('third-block');
    let alarm = document.createElement('div');
    third_block.appendChild(alarm);
    alarm.classList.add('alarm');
    let sign = document.createElement('span');
    alarm.appendChild(sign);
    sign.classList.add('sign');
    sign.innerText = "!";
    let sign_text = document.createElement('span');
    alarm.appendChild(sign_text);
    sign_text.classList.add('sign-text');
    sign_text.innerText = "Обов’язко проконсультуйтесь з лікарем перед данною процедурою";
});

aromatherapy.addEventListener('click', function() {

    inform.hidden = true;

    let first_block = document.createElement('div');
    descript.appendChild(first_block);
    first_block.classList.add('first_block');
    let back = document.createElement('img');
    back.src = "image/Назад до послуг.png";
    first_block.appendChild(back);
    back.classList.add('back');
    back.addEventListener('click', function() {
        inform.hidden = false;
        descript.innerText = "";

    });
    let text = document.createElement('div');
    first_block.appendChild(text);
    text.classList.add("first-img-title");
    text.innerText = "Ароматерапія";
    let block = document.createElement('div');
    descript.appendChild(block);
    block.classList.add('second-block');
    let img1 = document.createElement('img');
    img1.src = "image/ароматерапия.jpg";
    block.appendChild(img1);
    img1.classList.add('aroma-img');
    let text_description = document.createElement('div');
    block.appendChild(text_description);
    text_description.classList.add('aromatherapy-description');
    let aroma_block = document.createElement('div');
    text_description.appendChild(aroma_block);
    aroma_block.classList.add("aroma-block");
    let first_word = document.createElement('span');
    aroma_block.appendChild(first_word);
    first_word.classList.add('first-word');
    first_word.innerText = "Ароматерапія";
    let first_string = document.createElement('span');
    first_word.appendChild(first_string);
    first_string.classList.add('first-string');
    first_string.innerText = " - це стародавнє, вдосконалене віками мистецтво використання";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "ефірних олій, фітонцидів рослин та інших ароматних речовин для укріплення фізичного та психічного здоров'я та для косметичного догляду за тілом. Вважається, що застосування аромотерапії дає чудові результати при лікуванні людей різного віку, страждаючих від найрізноманітніших порушень — від серйозних захворювань до звичайних простуд. Аромотерапія може принести полегшення людям, які страждають від затяжних захворювань, які не піддаються традиційним методам лікування. Деколи ліки викликають неприємні побічні явища — в таких випадках аромотерапія також може допомогти відновити здоров'я. Вдихання ароматичних речовин покращує пам'ять, увагу (при вдиханні ефірних масел лаванди, жасмину, лимона). На нервову систему, одне і те же масло, може надавати різний ефект (сильна одноразова дія - стимуляція, слабке багаторазове застосування - тонізуючий, надмірно сильне - гальмування)."


    let third_block = document.createElement('div');
    descript.appendChild(third_block);
    third_block.classList.add('third-block');
    let alarm = document.createElement('div');
    third_block.appendChild(alarm);
    alarm.classList.add('alarm');
    let sign = document.createElement('span');
    alarm.appendChild(sign);
    sign.classList.add('sign');
    sign.innerText = "!";
    let sign_text = document.createElement('span');
    alarm.appendChild(sign_text);
    sign_text.classList.add('sign-text');
    sign_text.innerText = "Обов’язко проконсультуйтесь з лікарем перед данною процедурою";
});

// const EXCL_SYMBOLS = ' .,'.split('');
// let string = document.querySelector('.first_paragraph');
// string = "Електросон - апарат,який проводить лікувальну дію на організм за допомогою імпульсних змінних електричних струмів високої частоти і напруги.Дарсонвалізація стимулює обмінні процеси в організмі, усуває спазми судин, покращує кров'яну циркуляцію, посилює кровотоки та лімфоструми, підвищує тонус венозних стінок та шкірних покривів. Пристрій працює від електричної мережі і комплектується різними насадками-електродами для точкового впливу на різні ділянки тіла.";

// function firstWord(str) {
//     for (var chr, result = '', i = 0; i < str.length; i++) {
//         chr = str.charAt(i);
//         if (EXCL_SYMBOLS.includes(chr.toLowerCase()))
//             break;
//         else
//             result += chr;
//     }
//     return result;
// };
// string.classList.add('first-word');
// first_paragraph.innerText = firstWord(string);