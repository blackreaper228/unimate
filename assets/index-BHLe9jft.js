(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const r={diploma:{label:"Диплом",html:`
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
      `}},n=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(r).forEach(([l,{label:c}],u)=>{const o=document.createElement("option");o.value=l,o.textContent=c,u===0&&(o.selected=!0),n.appendChild(o)});function i(l){const c=r[l];p.innerHTML=c?c.html:"",t(),s()}n.addEventListener("change",l=>{i(l.target.value)}),i(n.value),console.log("value при запуске:",n.value);function t(){const l=document.getElementById("uploadArea");if(!l)return;const c=l.querySelector("div"),u=l.querySelector("input");l.addEventListener("click",()=>{u.click(),u.onchange=o=>{e(o.target.files,c)}}),l.addEventListener("dragover",o=>{o.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",o=>{o.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",o=>{o.preventDefault(),l.classList.remove("dragover"),e([...o.dataTransfer.files],c)})}function e(l,c){const u=new FormData,o=Array.from(l);o.forEach((y,b)=>u.append(`file${b+1}`,y)),c.textContent="Загрузка...";const f=new XMLHttpRequest;f.open("POST","https://httpbin.org/post"),f.upload.addEventListener("progress",y=>{const b=y.loaded/y.total;c.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),f.onload=()=>{if(f.status===200){const y=o.map(b=>b.name).join(", ");c.textContent=`✅ Загружено: ${y}`}else c.textContent="❌ Ошибка загрузки"},f.onerror=()=>{c.textContent="❌ Сетевая ошибка"},f.send(u)}function s(){const l=document.getElementById("slideNumber"),c=document.getElementById("increase"),u=document.getElementById("decrease");!l||!c||!u||(c.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),u.addEventListener("click",()=>{let o=parseInt(l.value||"0");o>0&&(l.value=o-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}document.getElementById("formUpload");function a(l){return new Promise((c,u)=>{const o=new FileReader;o.onloadend=()=>c(o.result.split(",")[1]),o.onerror=u,o.readAsDataURL(l)})}function d(l,c){Object.entries(c).forEach(([u,o])=>{o&&l.append(u,o)})}const m="https://script.google.com/macros/s/AKfycbwRidiPuOV0Fx4O28e9ECjcQCWLIYy6w6brrvKBmq1_434GGSLYSmBRF55ZBwhGD4gTIg/exec";document.querySelector("#formUpload").addEventListener("submit",async l=>{var v,W,h,x,E,I,q,S,A;l.preventDefault();const c=l.target,u=document.querySelector("#uploadArea input[type='file']"),o=u==null?void 0:u.files[0];let f="",y="",b="";o&&(f=await a(o),y=o.type,b=o.name);const g=new URLSearchParams;d(g,{name:(v=document.getElementById("name"))==null?void 0:v.value,workType:(W=document.getElementById("workType"))==null?void 0:W.value,contact:(h=document.getElementById("contact"))==null?void 0:h.value,topic:(x=document.getElementById("topic"))==null?void 0:x.value,size:(E=document.getElementById("size"))==null?void 0:E.value,deadline:(I=document.getElementById("deadline"))==null?void 0:I.value,structure:(q=document.getElementById("structure"))==null?void 0:q.value,originality:(S=document.getElementById("originality"))==null?void 0:S.value,optional:(A=document.getElementById("optional"))==null?void 0:A.value,file:f,filename:b,mimeType:y});try{const L=await(await fetch(m,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:g})).text();console.log(L);let T;try{T=JSON.parse(L)}catch{alert(`❌ Ответ не в формате JSON:
`+L);return}T.result==="success"?(alert("✅ Форма и файлы отправлены успешно!"),c.reset()):alert("❌ Ошибка на стороне сервера")}catch(C){alert("Ошибка: "+C.message)}})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("nav"),n=r.querySelector(".hover-marker"),p=r.querySelectorAll("li a");let i=null;function t(a){const d=a.getBoundingClientRect(),m=r.getBoundingClientRect();n.style.width=`${d.width}px`,n.style.left=`${d.left-m.left}px`,n.style.opacity=1}p.forEach(a=>{a.addEventListener("mouseenter",()=>{p.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),a.classList.add("is-hovered"),i&&i!==a&&i.classList.add("is-dimmed"),t(a)}),a.addEventListener("click",()=>{p.forEach(d=>d.classList.remove("is-active","is-dimmed")),a.classList.add("is-active"),i=a,t(a)})}),r.addEventListener("mouseleave",()=>{p.forEach(a=>{a.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),t(i)):n.style.opacity=0});const e=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const a=r.offsetHeight,d=r.getBoundingClientRect().top+a/2;let l=Array.from(document.querySelectorAll("section")).find(f=>{const y=f.getBoundingClientRect();return d>=y.top&&d<y.bottom});const c=l==null?void 0:l.classList.contains("purple"),u=50;let o=!1;if(s){const f=s.getBoundingClientRect();o=f.top<=u&&f.bottom>u}e.forEach(f=>{f.classList.toggle("invert-color",o||c)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(r=>{r.classList.add("animate-logo")})});document.addEventListener("mousemove",r=>{document.querySelectorAll(".logo3D").forEach(p=>{const i=p.getBoundingClientRect(),t=r.clientX-(i.left+i.width/2),e=r.clientY-(i.top+i.height/2),s=-(t*.05),a=-(e*.05),d=p.dataset.base||"";p.style.transform=`${d} translate(${s}px, ${a}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(n=>{const p=n.dataset.base||"";n.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".word"),n=["курсовыми","дипломами","домашками"],p=100,i=60,t=2e3;let e=0,s=0,a=!1;function d(){const m=n[e],l=m.substring(0,s);r.textContent=l,a?s>0?(s--,setTimeout(d,i)):(a=!1,e=(e+1)%n.length,setTimeout(d,p)):s<m.length?(s++,setTimeout(d,p)):setTimeout(()=>{a=!0,d()},t)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const p=n.querySelector(".marquee"),i=p.cloneNode(!0),t=n.dataset.direction==="right"?1:-1;t===1?n.insertBefore(i,p):n.appendChild(i);const e=p.offsetWidth,s=1;let a=t===1?-e:0;function d(){a+=t*s,t===-1&&Math.abs(a)>=e&&(a=0),t===1&&a>=0&&(a=-e),n.style.transform=`translateX(${a}px)`,requestAnimationFrame(d)}d()})});const w=document.querySelectorAll(".card");function B(r){w.forEach(n=>{const p=n.getBoundingClientRect(),i=r.clientX-p.left,t=r.clientY-p.top;n.style.setProperty("--x",`${i}px`),n.style.setProperty("--y",`${t}px`)})}function R(r){w.forEach(n=>{if(!(n.dataset.tilt!=="false"))return;const i=n.getBoundingClientRect(),t=i.left+i.width/2,e=i.top+i.height/2,s=r.clientX-t,a=r.clientY-e,d=Math.sqrt(s**2+a**2),m=400;if(d<m){const l=1-d/m,c=-(a/50)*l,u=s/50*l;n.style.transform=`rotateX(${c.toFixed(2)}deg) rotateY(${u.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function D(){w.forEach(r=>{r.dataset.tilt!=="false"&&(r.style.transform="rotateX(0deg) rotateY(0deg)")})}function F(r){B(r),R(r)}window.addEventListener("mousemove",F);window.addEventListener("mouseleave",D);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".step");let n=0,p=null;function i(e){function s(v){!v||v.classList.contains("visible")||(v.style.visibility="visible",v.style.pointerEvents="auto",v.classList.remove("visible"),v.offsetWidth,v.classList.add("visible"))}function a(v){v&&(v.classList.remove("visible"),setTimeout(()=>{v.classList.contains("visible")||(v.style.visibility="hidden",v.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],m=document.querySelector(".msgBig"),l=m==null?void 0:m.querySelector(".ms04"),c=m==null?void 0:m.querySelector(".emojiMsg");r.forEach((v,W)=>{const h=v.querySelector(".stepContent"),x=v.querySelector(".timer"),E=80;h&&(e===5?(d.forEach(s),s(m),s(l),s(c)):(d.forEach((I,q)=>{I&&(q<e?s(I):q===e?e===3?(a(I),s(m),s(l),a(c)):(s(I),a(m),a(l),a(c)):a(I))}),m&&(e===3||e===4?(s(m),l&&s(l),c&&(e===3?(a(c),setTimeout(()=>s(c),800)):e===4?(c.style.transition="none",s(c),requestAnimationFrame(()=>{c.style.transition=""})):a(c))):(a(m),a(l),a(c)))),W===e?(v.classList.add("active","noise"),h.style.maxHeight="0px",h.style.opacity="1",h.style.paddingTop="24px",x&&(x.classList.remove("animate-timer"),x.offsetWidth,x.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{h.style.maxHeight=h.scrollHeight+E+"px"})})):(v.classList.remove("active","noise"),h.style.maxHeight="0px",h.style.opacity="0",h.style.paddingTop="0"))});const u=document.querySelector(".typeWriterLink"),o=u==null?void 0:u.querySelector(".typeWriterWrap"),f=o==null?void 0:o.querySelector(".typeWriter"),y=f==null?void 0:f.querySelector(".realText"),b=f==null?void 0:f.querySelector(".animatedText"),g=o==null?void 0:o.querySelector(".typeWriterIcon");if(f&&y&&b&&g){const v=e===5?"Мне нужна помощь!":"Ввести сообщение...";y.textContent=v,e===5?(b.innerHTML=v+'<span class="blinkingCursor">|</span>',b.style.width="0",b.offsetWidth,f.classList.add("typing"),b.style.animation="typingEffect 2.4s steps("+v.length+") forwards",setTimeout(()=>{f.classList.remove("typing")},2400)):(b.innerHTML=v,f.classList.remove("typing")),o.classList.remove("help"),e===5?(o.classList.add("help"),u.style.pointerEvents="auto",u.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(u.style.pointerEvents="none",u.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function t(){p=setInterval(()=>{n=(n+1)%r.length,i(n)},5e3)}i(n),t(),r.forEach((e,s)=>{e.addEventListener("click",()=>{clearInterval(p),n=s,i(s),t()})})});document.addEventListener("DOMContentLoaded",()=>{const r=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function s(d){p[e].classList.add("none"),e=(d+p.length)%p.length,p[e].classList.remove("none")}function a(){i.forEach((d,m)=>{const l=r[(m+t)%r.length],c=d.angle>=-125&&d.angle<=-55;l.style.transition=c?"transform 0.6s ease, background-color 0.6s ease":"none",l.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?l.style.backgroundColor="#9B8DFF":d.scale>=.7?l.style.backgroundColor="#cac3ff":l.style.backgroundColor="#e1ddff"})}n[1].addEventListener("click",()=>{t=(t+1)%r.length,s(e+1),a()}),n[0].addEventListener("click",()=>{t=(t-1+r.length)%r.length,s(e-1),a()}),a()});const O={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(n){const p=this.getAttribute("href").substring(1),i=document.getElementById(p);if(!i)return;n.preventDefault();const t=O[p]||0,e=i.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const r=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&n(t.target),t.target.classList.contains("rolling-img")&&p(t.target),r.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const t=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let s=0;s<t.length;s++){const a=t[s],d=document.createElement("span");d.dataset.final=a,e.appendChild(d)}i.appendChild(e),r.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{r.observe(i)});function n(i){i.querySelectorAll("span").forEach(e=>{const s=e.dataset.final;if(/\d/.test(s)){const a=document.createElement("div");a.style.transition="transform 1s ease",a.style.display="block";for(let m=0;m<=9;m++){const l=document.createElement("div");l.textContent=m,a.appendChild(l)}const d=document.createElement("div");d.textContent=s,a.appendChild(d),e.appendChild(a),requestAnimationFrame(()=>{a.style.transform="translateY(-10em)"})}else e.textContent=s,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(i){const t=i.querySelector("span"),e=t.querySelector("img");if(!e)return;const s=e.clientHeight||60,a=6;requestAnimationFrame(()=>{t.style.transform=`translateY(-${s*a}px)`})}});
