(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(a){if(a.ep)return;a.ep=!0;const t=c(a);fetch(a.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const d={diploma:{label:"Диплом",html:`
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
            <img src="./src/images/svg/uploadIcon.svg" alt="Иконка загрузки" />
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
      `}},r=document.getElementById("workType"),c=document.getElementById("formWrapType");Object.entries(d).forEach(([e,{label:l}],n)=>{const o=document.createElement("option");o.value=e,o.textContent=l,n===0&&(o.selected=!0),r.appendChild(o)});function i(e){const l=d[e];c.innerHTML=l?l.html:"",a(),s()}r.addEventListener("change",e=>{i(e.target.value)}),i(r.value),console.log("value при запуске:",r.value);function a(){const e=document.getElementById("uploadArea");if(!e)return;const l=e.querySelector("div"),n=e.querySelector("input");e.addEventListener("click",()=>{n.click(),n.onchange=o=>{t(o.target.files,l)}}),e.addEventListener("dragover",o=>{o.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",o=>{o.preventDefault(),e.classList.remove("dragover")}),e.addEventListener("drop",o=>{o.preventDefault(),e.classList.remove("dragover"),t([...o.dataTransfer.files],l)})}function t(e,l){const n=new FormData,o=Array.from(e);o.forEach((m,f)=>n.append(`file${f+1}`,m)),l.textContent="Загрузка...";const p=new XMLHttpRequest;p.open("POST","https://httpbin.org/post"),p.upload.addEventListener("progress",m=>{const f=m.loaded/m.total;l.textContent=f<1?`${(f*100).toFixed()}%`:"Завершаем..."}),p.onload=()=>{if(p.status===200){const m=o.map(f=>f.name).join(", ");l.textContent=`✅ Загружено: ${m}`}else l.textContent="❌ Ошибка загрузки"},p.onerror=()=>{l.textContent="❌ Сетевая ошибка"},p.send(n)}function s(){const e=document.getElementById("slideNumber"),l=document.getElementById("increase"),n=document.getElementById("decrease");!e||!l||!n||(l.addEventListener("click",()=>{e.value=parseInt(e.value||"0")+1}),n.addEventListener("click",()=>{let o=parseInt(e.value||"0");o>0&&(e.value=o-1)}),e.addEventListener("input",()=>{parseInt(e.value)<0&&(e.value=0)}))}document.getElementById("formUpload"),document.querySelector("#formUpload").addEventListener("submit",async e=>{var p,m,f,v,g,y,h,u,q;e.preventDefault();const l=e.target,n=new FormData;n.append("name",(p=document.getElementById("name"))==null?void 0:p.value),n.append("workType",(m=document.getElementById("workType"))==null?void 0:m.value),n.append("contact",(f=document.getElementById("contact"))==null?void 0:f.value),n.append("topic",(v=document.getElementById("topic"))==null?void 0:v.value),n.append("size",(g=document.getElementById("size"))==null?void 0:g.value),n.append("deadline",(y=document.getElementById("deadline"))==null?void 0:y.value),n.append("structure",(h=document.getElementById("structure"))==null?void 0:h.value),n.append("originality",(u=document.getElementById("originality"))==null?void 0:u.value),n.append("optional",(q=document.getElementById("optional"))==null?void 0:q.value);const o=document.querySelector("#uploadArea input[type='file']");if(o&&o.files.length>0)for(let b=0;b<o.files.length;b++)n.append("file"+b,o.files[b],o.files[b].name);try{(await(await fetch("https://script.google.com/macros/s/AKfycbxTAnBNovBSIokf2P0L3kPUf8R6Xo_9McAReDUVo5hDxvsJRbNDsgWQp2JtPjYI2G74nw/exec",{method:"POST",body:n})).json()).result==="success"?(alert("✅ Форма и файлы отправлены успешно!"),l.reset(),i(document.getElementById("workType").value)):alert("❌ Ошибка на стороне сервера")}catch(b){alert("Ошибка: "+b.message)}})});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector("nav"),r=d.querySelector(".hover-marker"),c=d.querySelectorAll("li a");let i=null;function a(e){const l=e.getBoundingClientRect(),n=d.getBoundingClientRect();r.style.width=`${l.width}px`,r.style.left=`${l.left-n.left}px`,r.style.opacity=1}c.forEach(e=>{e.addEventListener("mouseenter",()=>{c.forEach(l=>{l.classList.remove("is-hovered","is-dimmed")}),e.classList.add("is-hovered"),i&&i!==e&&i.classList.add("is-dimmed"),a(e)}),e.addEventListener("click",()=>{c.forEach(l=>l.classList.remove("is-active","is-dimmed")),e.classList.add("is-active"),i=e,a(e)})}),d.addEventListener("mouseleave",()=>{c.forEach(e=>{e.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),a(i)):r.style.opacity=0});const t=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const e=d.offsetHeight,l=d.getBoundingClientRect().top+e/2;let o=Array.from(document.querySelectorAll("section")).find(v=>{const g=v.getBoundingClientRect();return l>=g.top&&l<g.bottom});const p=o==null?void 0:o.classList.contains("purple"),m=50;let f=!1;if(s){const v=s.getBoundingClientRect();f=v.top<=m&&v.bottom>m}t.forEach(v=>{v.classList.toggle("invert-color",f||p)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(d=>{d.classList.add("animate-logo")})});document.addEventListener("mousemove",d=>{document.querySelectorAll(".logo3D").forEach(c=>{const i=c.getBoundingClientRect(),a=d.clientX-(i.left+i.width/2),t=d.clientY-(i.top+i.height/2),s=-(a*.05),e=-(t*.05),l=c.dataset.base||"";c.style.transform=`${l} translate(${s}px, ${e}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(r=>{const c=r.dataset.base||"";r.style.transform=c})});document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".word"),r=["курсовыми","дипломами","домашками"],c=100,i=60,a=2e3;let t=0,s=0,e=!1;function l(){const n=r[t],o=n.substring(0,s);d.textContent=o,e?s>0?(s--,setTimeout(l,i)):(e=!1,t=(t+1)%r.length,setTimeout(l,c)):s<n.length?(s++,setTimeout(l,c)):setTimeout(()=>{e=!0,l()},a)}l()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(r=>{const c=r.querySelector(".marquee"),i=c.cloneNode(!0),a=r.dataset.direction==="right"?1:-1;a===1?r.insertBefore(i,c):r.appendChild(i);const t=c.offsetWidth,s=1;let e=a===1?-t:0;function l(){e+=a*s,a===-1&&Math.abs(e)>=t&&(e=0),a===1&&e>=0&&(e=-t),r.style.transform=`translateX(${e}px)`,requestAnimationFrame(l)}l()})});const W=document.querySelectorAll(".card");function w(d){W.forEach(r=>{const c=r.getBoundingClientRect(),i=d.clientX-c.left,a=d.clientY-c.top;r.style.setProperty("--x",`${i}px`),r.style.setProperty("--y",`${a}px`)})}function S(d){W.forEach(r=>{if(!(r.dataset.tilt!=="false"))return;const i=r.getBoundingClientRect(),a=i.left+i.width/2,t=i.top+i.height/2,s=d.clientX-a,e=d.clientY-t,l=Math.sqrt(s**2+e**2),n=400;if(l<n){const o=1-l/n,p=-(e/50)*o,m=s/50*o;r.style.transform=`rotateX(${p.toFixed(2)}deg) rotateY(${m.toFixed(2)}deg)`}else r.style.transform="rotateX(0deg) rotateY(0deg)"})}function A(){W.forEach(d=>{d.dataset.tilt!=="false"&&(d.style.transform="rotateX(0deg) rotateY(0deg)")})}function C(d){w(d),S(d)}window.addEventListener("mousemove",C);window.addEventListener("mouseleave",A);document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelectorAll(".step");let r=0,c=null;function i(t){function s(u){!u||u.classList.contains("visible")||(u.style.visibility="visible",u.style.pointerEvents="auto",u.classList.remove("visible"),u.offsetWidth,u.classList.add("visible"))}function e(u){u&&(u.classList.remove("visible"),setTimeout(()=>{u.classList.contains("visible")||(u.style.visibility="hidden",u.style.pointerEvents="none")},400))}const l=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],n=document.querySelector(".msgBig"),o=n==null?void 0:n.querySelector(".ms04"),p=n==null?void 0:n.querySelector(".emojiMsg");d.forEach((u,q)=>{const b=u.querySelector(".stepContent"),I=u.querySelector(".timer"),L=80;b&&(t===5?(l.forEach(s),s(n),s(o),s(p)):(l.forEach((x,E)=>{x&&(E<t?s(x):E===t?t===3?(e(x),s(n),s(o),e(p)):(s(x),e(n),e(o),e(p)):e(x))}),n&&(t===3||t===4?(s(n),o&&s(o),p&&(t===3?(e(p),setTimeout(()=>s(p),800)):t===4?(p.style.transition="none",s(p),requestAnimationFrame(()=>{p.style.transition=""})):e(p))):(e(n),e(o),e(p)))),q===t?(u.classList.add("active","noise"),b.style.maxHeight="0px",b.style.opacity="1",b.style.paddingTop="24px",I&&(I.classList.remove("animate-timer"),I.offsetWidth,I.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{b.style.maxHeight=b.scrollHeight+L+"px"})})):(u.classList.remove("active","noise"),b.style.maxHeight="0px",b.style.opacity="0",b.style.paddingTop="0"))});const m=document.querySelector(".typeWriterLink"),f=m==null?void 0:m.querySelector(".typeWriterWrap"),v=f==null?void 0:f.querySelector(".typeWriter"),g=v==null?void 0:v.querySelector(".realText"),y=v==null?void 0:v.querySelector(".animatedText"),h=f==null?void 0:f.querySelector(".typeWriterIcon");if(v&&g&&y&&h){const u=t===5?"Мне нужна помощь!":"Ввести сообщение...";g.textContent=u,t===5?(y.innerHTML=u+'<span class="blinkingCursor">|</span>',y.style.width="0",y.offsetWidth,v.classList.add("typing"),y.style.animation="typingEffect 2.4s steps("+u.length+") forwards",setTimeout(()=>{v.classList.remove("typing")},2400)):(y.innerHTML=u,v.classList.remove("typing")),f.classList.remove("help"),t===5?(f.classList.add("help"),m.style.pointerEvents="auto",m.setAttribute("aria-disabled","false"),h.src="./sendActive.svg",h.classList.add("animate-icon")):(m.style.pointerEvents="none",m.setAttribute("aria-disabled","true"),h.src="./send.svg",h.classList.remove("animate-icon"))}}function a(){c=setInterval(()=>{r=(r+1)%d.length,i(r)},5e3)}i(r),a(),d.forEach((t,s)=>{t.addEventListener("click",()=>{clearInterval(c),r=s,i(s),a()})})});document.addEventListener("DOMContentLoaded",()=>{const d=Array.from(document.querySelectorAll("section.archSec .cardIcon")),r=document.querySelectorAll(".arrowGr"),c=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let a=0,t=0;function s(l){c[t].classList.add("none"),t=(l+c.length)%c.length,c[t].classList.remove("none")}function e(){i.forEach((l,n)=>{const o=d[(n+a)%d.length],p=l.angle>=-125&&l.angle<=-55;o.style.transition=p?"transform 0.6s ease, background-color 0.6s ease":"none",o.style.transform=`rotate(${l.angle}deg) translate(2800px) scale(${l.scale})`,l.scale===1?o.style.backgroundColor="#9B8DFF":l.scale>=.7?o.style.backgroundColor="#cac3ff":o.style.backgroundColor="#e1ddff"})}r[1].addEventListener("click",()=>{a=(a+1)%d.length,s(t+1),e()}),r[0].addEventListener("click",()=>{a=(a-1+d.length)%d.length,s(t-1),e()}),e()});const T={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(d=>{d.addEventListener("click",function(r){const c=this.getAttribute("href").substring(1),i=document.getElementById(c);if(!i)return;r.preventDefault();const a=T[c]||0,t=i.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:t,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const d=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("rolling")&&r(a.target),a.target.classList.contains("rolling-img")&&c(a.target),d.unobserve(a.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const a=i.textContent.trim();i.textContent="";const t=document.createElement("div");t.className="rolling";for(let s=0;s<a.length;s++){const e=a[s],l=document.createElement("span");l.dataset.final=e,t.appendChild(l)}i.appendChild(t),d.observe(t)}),document.querySelectorAll(".rolling-img").forEach(i=>{d.observe(i)});function r(i){i.querySelectorAll("span").forEach(t=>{const s=t.dataset.final;if(/\d/.test(s)){const e=document.createElement("div");e.style.transition="transform 1s ease",e.style.display="block";for(let n=0;n<=9;n++){const o=document.createElement("div");o.textContent=n,e.appendChild(o)}const l=document.createElement("div");l.textContent=s,e.appendChild(l),t.appendChild(e),requestAnimationFrame(()=>{e.style.transform="translateY(-10em)"})}else t.textContent=s,t.style.opacity=0,t.style.transform="scale(0.8)",t.style.display="inline-block",t.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{t.style.opacity=1,t.style.transform="scale(1)"})})}function c(i){const a=i.querySelector("span"),t=a.querySelector("img");if(!t)return;const s=t.clientHeight||60,e=6;requestAnimationFrame(()=>{a.style.transform=`translateY(-${s*e}px)`})}});
