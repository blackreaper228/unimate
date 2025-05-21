(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function p(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=p(a);fetch(a.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const r={diploma:{label:"Диплом",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="Титульный лист, содержание, введение..."></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить план, если он у вас имеется</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},course:{label:"Курсовая",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input required type="text" id="topic" placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input required id="size" type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea required id="structure" placeholder="Титульный лист, содержание, введение..."></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},master:{label:"Магистерская диссертация",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="Титульный лист, содержание, введение..."></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить план, если он у вас имеется</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},rar:{label:"РАР (Расчетно-аналитическая работа)",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить план, если он у вас имеется</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},prez:{label:"Презентация",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
                <label for="slideNumber"
                  >Количество слайдов<span>*</span></label
                >
                <div class="numberInput">
                  <button id="increase"></button>
                  <button id="decrease"></button>
                  <input
                    inputmode="numeric"
                    id="slideNumber"
                    type="number"
                    name="slideNumber"
                    placeholder="12"
                    required
                  />
                </div>
              </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
                <label for="textNeeded"
                  >Нужен ли отдельно текст к презентации<span>*</span></label
                >
                <div class="radio-group">
                  <label class="radio">
                    <input type="radio" name="textNeeded" value="yes" />
                    <span class="custom-radio"></span>
                    Да
                  </label>
                  <label class="radio">
                    <input type="radio" name="textNeeded" value="no" />
                    <span class="custom-radio"></span>
                    Нет
                  </label>
                </div>
              </div>
           <div class="formInputWrap">
              <label for="optional">Дополнительные пожелания / материалы</label>
              <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},essay:{label:"Эссе",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},ref:{label:"Реферат",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Оригинальность не важна" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},homework:{label:"Домашняя работа",html:`
        <div class="formInputWrap">
          <label for="task">Задание<span>*</span></label>
          <input type="text" id="task" required placeholder="Решить задачи с 10 по 20, оформить в PDF..." />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},examTickets:{label:"Билеты к экзамену",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="sources">Источники, на которые нужно опираться</label>
          <textarea id="sources" placeholder="Учебники МЭО (Буренина, Мануйлова, если есть Пичков)..."></textarea>
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `},controlWork:{label:"Контрольная работа",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Количество заданий<span>*</span></label>
            <input required id="size" type="text" placeholder="2500 слов" />
          </div>
          <div class="formInputWrap">
            <label for="time">Длительность работы*<span>*</span></label>
            <input required id="time" type="text" placeholder="1.5 часа" />
          </div>
          
        </div>
        <div class="formInputWrap">
            <label for="deadline">Дата работы<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить примеры заданий, которые будут на работе<span>*</span></label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},zachyot:{label:"Зачёт",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Количество заданий<span>*</span></label>
            <input required id="size" type="text" placeholder="1.5 часа" />
          </div>
          <div class="formInputWrap">
            <label for="time">Длительность работы*<span>*</span></label>
            <input required id="time" type="text" placeholder="6" />
          </div>
        </div>
        <div class="formInputWrap">
                <label for="format"
                  >Формат<span>*</span></label
                >
                <div class="radio-group">
                  <label class="radio">
                    <input type="radio" name="format" value="письменный" />
                    <span class="custom-radio"></span>
                    Письменный
                  </label>
                  <label class="radio">
                    <input type="radio" name="format" value="устный" />
                    <span class="custom-radio"></span>
                    Устный
                  </label>
                </div>
              </div>
        <div class="formInputWrap">
            <label for="deadline">Дата зачёта<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить примеры заданий, которые будут на зачёте<span>*</span></label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},exam:{label:"Экзамен",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Количество заданий<span>*</span></label>
            <input required id="size" type="text" placeholder="6" />
          </div>
          <div class="formInputWrap">
            <label for="time">Длительность работы*<span>*</span></label>
            <input required id="time" type="text" placeholder="1.5 часа" />
          </div>
        </div>
        <div class="formInputWrap">
                <label for="format"
                  >Формат<span>*</span></label
                >
                <div class="radio-group">
                  <label class="radio">
                    <input type="radio" name="format" value="письменный" />
                    <span class="custom-radio"></span>
                    Письменный
                  </label>
                  <label class="radio">
                    <input type="radio" name="format" value="устный" />
                    <span class="custom-radio"></span>
                    Устный
                  </label>
                </div>
              </div>
        <div class="formInputWrap">
            <label for="deadline">Дата экзамена<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить примеры заданий, которые будут на экзамене<span>*</span></label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},repeat:{label:"Репетиторство",html:`
        <div class="formInputWrap">
            <label for="when">Когда хотели бы начать заниматься<span>*</span></label>
            <input required id="when" type="text" placeholder="Как можно раньше" />
          </div>
           <div class="formInputWrap">
            <label for="aim">Цель занятий<span>*</span></label>
            <input required id="aim" type="text" placeholder="Подготовка к экзамену" />
          </div>
          <div class="formInputWrap">
            <label for="howMany">Сколько ориентировочно понадобится занятий*<span>*</span></label>
            <input required id="howMany" type="text" placeholder="6" />
          </div>
        <div class="formInputWrap">
            <label for="deadline">Дедлайн по занятиям (крайняя дата, когда нужно закончить)<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить примеры заданий и тем, которые необходимо разобрать<span>*</span></label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},earphone:{label:"Микронаушник",html:`
        <div class="formInputWrap">
            <label for="deadline">На какое число нужен наушник<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
           <div class="formInputWrap">
                <label for="format"
                  >Доставка<span>*</span></label
                >
                <div class="radio-group">
                  <label class="radio">
                    <input type="radio" name="format" value="письменный" />
                    <span class="custom-radio"></span>
                    Заберу самовывозом
                  </label>
                  <label class="radio">
                    <input type="radio" name="format" value="устный" />
                    <span class="custom-radio"></span>
                    Оплачу доставку
                  </label>
                </div>
              </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `}},n=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(r).forEach(([e,{label:o}],c)=>{const d=document.createElement("option");d.value=e,d.textContent=o,c===0&&(d.selected=!0),n.appendChild(d)});function i(e){const o=r[e];p.innerHTML=o?o.html:"",a(),s()}n.addEventListener("change",e=>{i(e.target.value)}),i(n.value),console.log("value при запуске:",n.value);function a(){const e=document.getElementById("uploadArea");if(!e)return;const o=e.querySelector("div"),c=e.querySelector("input");e.addEventListener("click",()=>{c.click(),c.onchange=d=>{t(d.target.files,o)}}),e.addEventListener("dragover",d=>{d.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",d=>{d.preventDefault(),e.classList.remove("dragover")}),e.addEventListener("drop",d=>{d.preventDefault(),e.classList.remove("dragover"),t([...d.dataTransfer.files],o)})}function t(e,o){const c=new FormData,d=Array.from(e);d.forEach((v,m)=>c.append(`file${m+1}`,v)),o.textContent="Загрузка...";const u=new XMLHttpRequest;u.open("POST","https://httpbin.org/post"),u.upload.addEventListener("progress",v=>{const m=v.loaded/v.total;o.textContent=m<1?`${(m*100).toFixed()}%`:"Завершаем..."}),u.onload=()=>{if(u.status===200){const v=d.map(m=>m.name).join(", ");o.textContent=`✅ Загружено: ${v}`}else o.textContent="❌ Ошибка загрузки"},u.onerror=()=>{o.textContent="❌ Сетевая ошибка"},u.send(c)}function s(){const e=document.getElementById("slideNumber"),o=document.getElementById("increase"),c=document.getElementById("decrease");!e||!o||!c||(o.addEventListener("click",()=>{e.value=parseInt(e.value||"0")+1}),c.addEventListener("click",()=>{let d=parseInt(e.value||"0");d>0&&(e.value=d-1)}),e.addEventListener("input",()=>{parseInt(e.value)<0&&(e.value=0)}))}document.getElementById("formUpload");const l="https://script.google.com/macros/s/AKfycbwRidiPuOV0Fx4O28e9ECjcQCWLIYy6w6brrvKBmq1_434GGSLYSmBRF55ZBwhGD4gTIg/exec";document.querySelector("#formUpload").addEventListener("submit",async e=>{var v,m,g,y,I,f,W,b,x;e.preventDefault();const o=e.target,c=document.querySelector("#uploadArea input[type='file']"),d=c==null?void 0:c.files[0],u=new FormData;u.append("name",((v=document.getElementById("name"))==null?void 0:v.value)||""),u.append("workType",((m=document.getElementById("workType"))==null?void 0:m.value)||""),u.append("contact",((g=document.getElementById("contact"))==null?void 0:g.value)||""),u.append("topic",((y=document.getElementById("topic"))==null?void 0:y.value)||""),u.append("size",((I=document.getElementById("size"))==null?void 0:I.value)||""),u.append("deadline",((f=document.getElementById("deadline"))==null?void 0:f.value)||""),u.append("structure",((W=document.getElementById("structure"))==null?void 0:W.value)||""),u.append("originality",((b=document.getElementById("originality"))==null?void 0:b.value)||""),u.append("optional",((x=document.getElementById("optional"))==null?void 0:x.value)||""),d&&u.append("file",d);try{const h=await(await fetch(l,{method:"POST",body:u})).text();console.log(h);let q;try{q=JSON.parse(h)}catch{alert(`❌ Ответ не в формате JSON:
`+h);return}q.result==="success"?(alert("✅ Форма и файлы отправлены успешно!"),o.reset()):alert("❌ Ошибка на стороне сервера")}catch(E){alert("Ошибка: "+E.message)}})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("nav"),n=r.querySelector(".hover-marker"),p=r.querySelectorAll("li a");let i=null;function a(l){const e=l.getBoundingClientRect(),o=r.getBoundingClientRect();n.style.width=`${e.width}px`,n.style.left=`${e.left-o.left}px`,n.style.opacity=1}p.forEach(l=>{l.addEventListener("mouseenter",()=>{p.forEach(e=>{e.classList.remove("is-hovered","is-dimmed")}),l.classList.add("is-hovered"),i&&i!==l&&i.classList.add("is-dimmed"),a(l)}),l.addEventListener("click",()=>{p.forEach(e=>e.classList.remove("is-active","is-dimmed")),l.classList.add("is-active"),i=l,a(l)})}),r.addEventListener("mouseleave",()=>{p.forEach(l=>{l.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),a(i)):n.style.opacity=0});const t=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const l=r.offsetHeight,e=r.getBoundingClientRect().top+l/2;let c=Array.from(document.querySelectorAll("section")).find(m=>{const g=m.getBoundingClientRect();return e>=g.top&&e<g.bottom});const d=c==null?void 0:c.classList.contains("purple"),u=50;let v=!1;if(s){const m=s.getBoundingClientRect();v=m.top<=u&&m.bottom>u}t.forEach(m=>{m.classList.toggle("invert-color",v||d)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(r=>{r.classList.add("animate-logo")})});document.addEventListener("mousemove",r=>{document.querySelectorAll(".logo3D").forEach(p=>{const i=p.getBoundingClientRect(),a=r.clientX-(i.left+i.width/2),t=r.clientY-(i.top+i.height/2),s=-(a*.05),l=-(t*.05),e=p.dataset.base||"";p.style.transform=`${e} translate(${s}px, ${l}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(n=>{const p=n.dataset.base||"";n.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".word"),n=["курсовыми","дипломами","домашками"],p=100,i=60,a=2e3;let t=0,s=0,l=!1;function e(){const o=n[t],c=o.substring(0,s);r.textContent=c,l?s>0?(s--,setTimeout(e,i)):(l=!1,t=(t+1)%n.length,setTimeout(e,p)):s<o.length?(s++,setTimeout(e,p)):setTimeout(()=>{l=!0,e()},a)}e()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const p=n.querySelector(".marquee"),i=p.cloneNode(!0),a=n.dataset.direction==="right"?1:-1;a===1?n.insertBefore(i,p):n.appendChild(i);const t=p.offsetWidth,s=1;let l=a===1?-t:0;function e(){l+=a*s,a===-1&&Math.abs(l)>=t&&(l=0),a===1&&l>=0&&(l=-t),n.style.transform=`translateX(${l}px)`,requestAnimationFrame(e)}e()})});const L=document.querySelectorAll(".card");function w(r){L.forEach(n=>{const p=n.getBoundingClientRect(),i=r.clientX-p.left,a=r.clientY-p.top;n.style.setProperty("--x",`${i}px`),n.style.setProperty("--y",`${a}px`)})}function S(r){L.forEach(n=>{if(!(n.dataset.tilt!=="false"))return;const i=n.getBoundingClientRect(),a=i.left+i.width/2,t=i.top+i.height/2,s=r.clientX-a,l=r.clientY-t,e=Math.sqrt(s**2+l**2),o=400;if(e<o){const c=1-e/o,d=-(l/50)*c,u=s/50*c;n.style.transform=`rotateX(${d.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function A(){L.forEach(r=>{r.dataset.tilt!=="false"&&(r.style.transform="rotateX(0deg) rotateY(0deg)")})}function C(r){w(r),S(r)}window.addEventListener("mousemove",C);window.addEventListener("mouseleave",A);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".step");let n=0,p=null;function i(t){function s(f){!f||f.classList.contains("visible")||(f.style.visibility="visible",f.style.pointerEvents="auto",f.classList.remove("visible"),f.offsetWidth,f.classList.add("visible"))}function l(f){f&&(f.classList.remove("visible"),setTimeout(()=>{f.classList.contains("visible")||(f.style.visibility="hidden",f.style.pointerEvents="none")},400))}const e=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],o=document.querySelector(".msgBig"),c=o==null?void 0:o.querySelector(".ms04"),d=o==null?void 0:o.querySelector(".emojiMsg");r.forEach((f,W)=>{const b=f.querySelector(".stepContent"),x=f.querySelector(".timer"),E=80;b&&(t===5?(e.forEach(s),s(o),s(c),s(d)):(e.forEach((h,q)=>{h&&(q<t?s(h):q===t?t===3?(l(h),s(o),s(c),l(d)):(s(h),l(o),l(c),l(d)):l(h))}),o&&(t===3||t===4?(s(o),c&&s(c),d&&(t===3?(l(d),setTimeout(()=>s(d),800)):t===4?(d.style.transition="none",s(d),requestAnimationFrame(()=>{d.style.transition=""})):l(d))):(l(o),l(c),l(d)))),W===t?(f.classList.add("active","noise"),b.style.maxHeight="0px",b.style.opacity="1",b.style.paddingTop="24px",x&&(x.classList.remove("animate-timer"),x.offsetWidth,x.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{b.style.maxHeight=b.scrollHeight+E+"px"})})):(f.classList.remove("active","noise"),b.style.maxHeight="0px",b.style.opacity="0",b.style.paddingTop="0"))});const u=document.querySelector(".typeWriterLink"),v=u==null?void 0:u.querySelector(".typeWriterWrap"),m=v==null?void 0:v.querySelector(".typeWriter"),g=m==null?void 0:m.querySelector(".realText"),y=m==null?void 0:m.querySelector(".animatedText"),I=v==null?void 0:v.querySelector(".typeWriterIcon");if(m&&g&&y&&I){const f=t===5?"Мне нужна помощь!":"Ввести сообщение...";g.textContent=f,t===5?(y.innerHTML=f+'<span class="blinkingCursor">|</span>',y.style.width="0",y.offsetWidth,m.classList.add("typing"),y.style.animation="typingEffect 2.4s steps("+f.length+") forwards",setTimeout(()=>{m.classList.remove("typing")},2400)):(y.innerHTML=f,m.classList.remove("typing")),v.classList.remove("help"),t===5?(v.classList.add("help"),u.style.pointerEvents="auto",u.setAttribute("aria-disabled","false"),I.src="./sendActive.svg",I.classList.add("animate-icon")):(u.style.pointerEvents="none",u.setAttribute("aria-disabled","true"),I.src="./send.svg",I.classList.remove("animate-icon"))}}function a(){p=setInterval(()=>{n=(n+1)%r.length,i(n)},5e3)}i(n),a(),r.forEach((t,s)=>{t.addEventListener("click",()=>{clearInterval(p),n=s,i(s),a()})})});document.addEventListener("DOMContentLoaded",()=>{const r=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let a=0,t=0;function s(e){p[t].classList.add("none"),t=(e+p.length)%p.length,p[t].classList.remove("none")}function l(){i.forEach((e,o)=>{const c=r[(o+a)%r.length],d=e.angle>=-125&&e.angle<=-55;c.style.transition=d?"transform 0.6s ease, background-color 0.6s ease":"none",c.style.transform=`rotate(${e.angle}deg) translate(2800px) scale(${e.scale})`,e.scale===1?c.style.backgroundColor="#9B8DFF":e.scale>=.7?c.style.backgroundColor="#cac3ff":c.style.backgroundColor="#e1ddff"})}n[1].addEventListener("click",()=>{a=(a+1)%r.length,s(t+1),l()}),n[0].addEventListener("click",()=>{a=(a-1+r.length)%r.length,s(t-1),l()}),l()});const T={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(n){const p=this.getAttribute("href").substring(1),i=document.getElementById(p);if(!i)return;n.preventDefault();const a=T[p]||0,t=i.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:t,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("rolling")&&n(a.target),a.target.classList.contains("rolling-img")&&p(a.target),r.unobserve(a.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const a=i.textContent.trim();i.textContent="";const t=document.createElement("div");t.className="rolling";for(let s=0;s<a.length;s++){const l=a[s],e=document.createElement("span");e.dataset.final=l,t.appendChild(e)}i.appendChild(t),r.observe(t)}),document.querySelectorAll(".rolling-img").forEach(i=>{r.observe(i)});function n(i){i.querySelectorAll("span").forEach(t=>{const s=t.dataset.final;if(/\d/.test(s)){const l=document.createElement("div");l.style.transition="transform 1s ease",l.style.display="block";for(let o=0;o<=9;o++){const c=document.createElement("div");c.textContent=o,l.appendChild(c)}const e=document.createElement("div");e.textContent=s,l.appendChild(e),t.appendChild(l),requestAnimationFrame(()=>{l.style.transform="translateY(-10em)"})}else t.textContent=s,t.style.opacity=0,t.style.transform="scale(0.8)",t.style.display="inline-block",t.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{t.style.opacity=1,t.style.transform="scale(1)"})})}function p(i){const a=i.querySelector("span"),t=a.querySelector("img");if(!t)return;const s=t.clientHeight||60,l=6;requestAnimationFrame(()=>{a.style.transform=`translateY(-${s*l}px)`})}});
