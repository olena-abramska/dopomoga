let mark = document.getElementById('mark1');

mark.addEventListener('click', function() {

    mark.src = "image/Star 1-fill.png";

});

let second_star = document.getElementById('mark2');
second_star.addEventListener('click', function() {
    mark.src = "image/Star 1-fill.png";
    second_star.src = "image/Star 1-fill.png";
});
let third_star = document.getElementById('mark3');
third_star.addEventListener('click', function() {
    mark.src = "image/Star 1-fill.png";
    second_star.src = "image/Star 1-fill.png";
    third_star.src = "image/Star 1-fill.png";
});
let fourth_star = document.getElementById('mark4');
fourth_star.addEventListener('click', function() {
    mark.src = "image/Star 1-fill.png";
    second_star.src = "image/Star 1-fill.png";
    third_star.src = "image/Star 1-fill.png";
    fourth_star.src = "image/Star 1-fill.png";
});
let fifth_star = document.getElementById('mark5');
fifth_star.addEventListener('click', function() {
    mark.src = "image/Star 1-fill.png";
    second_star.src = "image/Star 1-fill.png";
    third_star.src = "image/Star 1-fill.png";
    fourth_star.src = "image/Star 1-fill.png";
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
    first_string.innerText = " - це популярна процедура електротерапії, яку часто";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "використовують для лікування безсоння та різних психологічних розладів. Сеанс триває в основному тридцять хвилин, також можливо підбирати час індивідуально за рішенням лікаря. Сама процедура безболісна, пацієнту одягають спеціальний прилад на очі, за допомогою якого головний мозок отримує слабкі розряди електричного струму.  Завдяки цьому людина розслабляється та навіть може заснути на деякий час. Усю процедуру контролює медичний працівник.  Сила струму підбирається індивідуально, дивлячись на відчуття пацієнта.";
    let second_paragraph = document.createElement('span');
    text_description.appendChild(second_paragraph);
    second_paragraph.classList.add('first-word');
    second_paragraph.innerText = "Після сеансу";
    let second_string = document.createElement('span');
    second_paragraph.appendChild(second_string);
    second_string.classList.add('first-string');
    second_string.innerText = " пацієнт відчуває себе розслаблено, нервова система";
    let third_paragraph = document.createElement('div');
    second_string.appendChild(third_paragraph);
    third_paragraph.classList.add('third-paragraph');
    third_paragraph.innerText = "заспокоюється, загальний стан організму покращується. Для покращення стану здоров’я потрібно пройти 10 сеансів.  Перед початком курсу цієї процедури потрібно проконсультуватися з лікарем, який детально огляне вас та вашу медичну картку та зробить висновки - чи можна робити вам цю процедуру, адже завжди є протипоказання.";
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
    first_string.innerText = " - це спеціальний прилад, який лікує за допомогою впливу";
    let first_paragraph = document.createElement('div');
    first_string.appendChild(first_paragraph);
    first_paragraph.classList.add('first-paragraph');
    first_paragraph.innerText = "імпульсного змінного струму. Лікувальний курс Дарсонвалю( 10 сеансів) дозволяють покращити стан нервової системи, нормалізувати режим сну, покращити тонус судин, позбутися головних болей. Прилад має декілька насадок. Медичний працівник обирає потрібну насадку та підбирає потужність напруги орієнтуючись на відчуття пацієнта.";
    let second_paragraph = document.createElement('span');
    text_description.appendChild(second_paragraph);
    second_paragraph.classList.add('first-word');
    second_paragraph.innerText = "Протипоказано:";
    let second_string = document.createElement('span');
    second_paragraph.appendChild(second_string);
    second_string.classList.add('first-string');
    second_string.innerText = " людям з хворобами серця, порушеннями згортання крові, вагітним жінкам, особам, які використовують кардіостимулятори. Під час процедури у пацієнта можуть виникнути головні болі. В цьому випадку потрібно перестати використовувати прилад у зоні голови і зосередитися на інших частинах тіла(плечі, спина).";
    0
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
    second_string.innerText = " дуже корисна при лікуванні стресів та проблем нервової системи. Її приємний запах заспокоює, сприятливо";
    let third_paragraph = document.createElement('div');
    second_string.appendChild(third_paragraph);
    third_paragraph.classList.add('third-paragraph');
    third_paragraph.innerText = "впливає на шкіру та кровообіг. Курс хвойної ванни корисний при лікуванні депресії та безсоння.";
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
    fourth_paragraph.innerText = "На додаток до цієї приємної процедури кожен з відвідувачів цього курсу має можливість випити смачний трав’яний чай."
    let second_word = document.createElement('div');
    fourth_paragraph.appendChild(second_word);
    second_word.classList.add('first-word');
    second_word.innerText = "Ромашкова ванна";
    let third_string = document.createElement('span');
    second_word.appendChild(third_string);
    third_string.classList.add('first-string');
    third_string.innerText = " є одною з найкращих засобів від напруження та дратівливості. Вона заспокоює, покращує стан шкіри, обмін речовин.";
    let fifth_paragraph = document.createElement('div');
    fourth_paragraph.appendChild(fifth_paragraph);
    fifth_paragraph.classList.add('fifth-paragraph');
    fifth_paragraph.innerText = "Має антисептичні та протизапальні властивості. Позитивно впливають на жіночу систему та часто використовуються при лікуванні гінекологічних проблем.";
    second_block_part.appendChild(fourth_paragraph);
    fourth_paragraph.classList.add('fourth-paragraph');
    let third_word = document.createElement('div');
    fourth_paragraph.appendChild(third_word);
    third_word.classList.add('second-word');
    third_word.innerText = "Сольова ванна";
    let fourth_string = document.createElement('span');
    third_word.appendChild(fourth_string);
    fourth_string.classList.add('first-string');
    fourth_string.innerText = " чудово заспокоює та зволожує шкіру. Також добре";
    let sixth_paragraph = document.createElement('div');
    fourth_paragraph.appendChild(sixth_paragraph);
    sixth_paragraph.classList.add('sixth-paragraph');
    sixth_paragraph.innerText = " впливає на нервову систему та широко використовується при лікуванні психічних проблем як додатковий заспокійливий засіб. Сольова ванна стимулює укріплення всього організму. Вважається гарним методом від целюліту.";
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

let feedback = document.querySelector('.order-menager');
feedback.addEventListener('click', function() {
    alert('Ваш запит прийнятий. Менеджер зателефонує вам в найближчий час');
});
let submit_form = document.getElementById('btn');
submit_form.addEventListener('click', function() {
    alert('Заявка відправлена. Очікуйте підтвердження на електронну пошту');
})



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