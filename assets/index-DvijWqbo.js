(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function p(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(a){if(a.ep)return;a.ep=!0;const e=p(a);fetch(a.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const o={diploma:{label:"Диплом",html:`
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
                    name="size"
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
                    <input type="radio" name="textNeeded" value="да" />
                    <span class="custom-radio"></span>
                    Да
                  </label>
                  <label class="radio">
                    <input type="radio" name="textNeeded" value="нет" />
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
            <label for="time">Длительность экзамена<span>*</span></label>
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
                <label for="delivery"
                  >Доставка<span>*</span></label
                >
                <div class="radio-group">
                  <label class="radio">
                    <input type="radio" name="delivery" value="Заберу самовывозом" />
                    <span class="custom-radio"></span>
                    Заберу самовывозом
                  </label>
                  <label class="radio">
                    <input type="radio" name="delivery" value="Оплачу доставку" />
                    <span class="custom-radio"></span>
                    Оплачу доставку
                  </label>
                </div>
              </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания / материалы</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
      `}},r=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(o).forEach(([l,{label:n}],u)=>{const c=document.createElement("option");c.value=l,c.textContent=n,u===0&&(c.selected=!0),r.appendChild(c)});function i(l){const n=o[l];p.innerHTML=n?n.html:"",a(),s()}r.addEventListener("change",l=>{i(l.target.value)}),i(r.value),console.log("value при запуске:",r.value);function a(){const l=document.getElementById("uploadArea");if(!l)return;const n=l.querySelector("div"),u=l.querySelector("input");l.addEventListener("click",()=>{u.click(),u.onchange=c=>{e(c.target.files,n)}}),l.addEventListener("dragover",c=>{c.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",c=>{c.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",c=>{c.preventDefault(),l.classList.remove("dragover"),e([...c.dataTransfer.files],n)})}function e(l,n){const u=new FormData,c=Array.from(l);c.forEach((f,b)=>u.append(`file${b+1}`,f)),n.textContent="Загрузка...";const m=new XMLHttpRequest;m.open("POST","https://httpbin.org/post"),m.upload.addEventListener("progress",f=>{const b=f.loaded/f.total;n.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),m.onload=()=>{if(m.status===200){const f=c.map(b=>b.name).join(", ");n.textContent=`✅ Загружено: ${f}`}else n.textContent="❌ Ошибка загрузки"},m.onerror=()=>{n.textContent="❌ Сетевая ошибка"},m.send(u)}function s(){const l=document.getElementById("slideNumber"),n=document.getElementById("increase"),u=document.getElementById("decrease");!l||!n||!u||(n.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),u.addEventListener("click",()=>{let c=parseInt(l.value||"0");c>0&&(l.value=c-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}const t=document.getElementById("formUpload");t.addEventListener("submit",async l=>{l.preventDefault();const n=new URLSearchParams;t.querySelectorAll("input, textarea, select").forEach(m=>{(m.type==="radio"||m.type==="checkbox")&&!m.checked||(m.name||m.id)&&n.append(m.name||m.id,m.value)});const u=t.querySelectorAll("input[type='file']");let c=1;for(const m of u)for(const f of m.files){const b=await d(f);n.append(`file${c}`,b),n.append(`filename${c}`,f.name),n.append(`mimeType${c}`,f.type),c++}fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:n}).then(()=>alert("✅ Успешно отправлено!")).catch(()=>alert("❌ Ошибка при отправке"))});function d(l){return new Promise((n,u)=>{const c=new FileReader;c.onloadend=()=>n(c.result.split(",")[1]),c.onerror=u,c.readAsDataURL(l)})}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("nav"),r=o.querySelector(".hover-marker"),p=o.querySelectorAll("li a");let i=null;function a(t){const d=t.getBoundingClientRect(),l=o.getBoundingClientRect();r.style.width=`${d.width}px`,r.style.left=`${d.left-l.left}px`,r.style.opacity=1}p.forEach(t=>{t.addEventListener("mouseenter",()=>{p.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),t.classList.add("is-hovered"),i&&i!==t&&i.classList.add("is-dimmed"),a(t)}),t.addEventListener("click",()=>{p.forEach(d=>d.classList.remove("is-active","is-dimmed")),t.classList.add("is-active"),i=t,a(t)})}),o.addEventListener("mouseleave",()=>{p.forEach(t=>{t.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),a(i)):r.style.opacity=0});const e=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const t=o.offsetHeight,d=o.getBoundingClientRect().top+t/2;let n=Array.from(document.querySelectorAll("section")).find(f=>{const b=f.getBoundingClientRect();return d>=b.top&&d<b.bottom});const u=n==null?void 0:n.classList.contains("purple"),c=50;let m=!1;if(s){const f=s.getBoundingClientRect();m=f.top<=c&&f.bottom>c}e.forEach(f=>{f.classList.toggle("invert-color",m||u)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(o=>{o.classList.add("animate-logo")})});document.addEventListener("mousemove",o=>{document.querySelectorAll(".logo3D").forEach(p=>{const i=p.getBoundingClientRect(),a=o.clientX-(i.left+i.width/2),e=o.clientY-(i.top+i.height/2),s=-(a*.05),t=-(e*.05),d=p.dataset.base||"";p.style.transform=`${d} translate(${s}px, ${t}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(r=>{const p=r.dataset.base||"";r.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".word"),r=["курсовыми","дипломами","домашками"],p=100,i=60,a=2e3;let e=0,s=0,t=!1;function d(){const l=r[e],n=l.substring(0,s);o.textContent=n,t?s>0?(s--,setTimeout(d,i)):(t=!1,e=(e+1)%r.length,setTimeout(d,p)):s<l.length?(s++,setTimeout(d,p)):setTimeout(()=>{t=!0,d()},a)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(r=>{const p=r.querySelector(".marquee"),i=p.cloneNode(!0),a=r.dataset.direction==="right"?1:-1;a===1?r.insertBefore(i,p):r.appendChild(i);const e=p.offsetWidth,s=1;let t=a===1?-e:0;function d(){t+=a*s,a===-1&&Math.abs(t)>=e&&(t=0),a===1&&t>=0&&(t=-e),r.style.transform=`translateX(${t}px)`,requestAnimationFrame(d)}d()})});const q=document.querySelectorAll(".card");function w(o){q.forEach(r=>{const p=r.getBoundingClientRect(),i=o.clientX-p.left,a=o.clientY-p.top;r.style.setProperty("--x",`${i}px`),r.style.setProperty("--y",`${a}px`)})}function S(o){q.forEach(r=>{if(!(r.dataset.tilt!=="false"))return;const i=r.getBoundingClientRect(),a=i.left+i.width/2,e=i.top+i.height/2,s=o.clientX-a,t=o.clientY-e,d=Math.sqrt(s**2+t**2),l=400;if(d<l){const n=1-d/l,u=-(t/50)*n,c=s/50*n;r.style.transform=`rotateX(${u.toFixed(2)}deg) rotateY(${c.toFixed(2)}deg)`}else r.style.transform="rotateX(0deg) rotateY(0deg)"})}function A(){q.forEach(o=>{o.dataset.tilt!=="false"&&(o.style.transform="rotateX(0deg) rotateY(0deg)")})}function C(o){w(o),S(o)}window.addEventListener("mousemove",C);window.addEventListener("mouseleave",A);document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".step");let r=0,p=null;function i(e){function s(v){!v||v.classList.contains("visible")||(v.style.visibility="visible",v.style.pointerEvents="auto",v.classList.remove("visible"),v.offsetWidth,v.classList.add("visible"))}function t(v){v&&(v.classList.remove("visible"),setTimeout(()=>{v.classList.contains("visible")||(v.style.visibility="hidden",v.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],l=document.querySelector(".msgBig"),n=l==null?void 0:l.querySelector(".ms04"),u=l==null?void 0:l.querySelector(".emojiMsg");o.forEach((v,L)=>{const y=v.querySelector(".stepContent"),I=v.querySelector(".timer"),E=80;y&&(e===5?(d.forEach(s),s(l),s(n),s(u)):(d.forEach((x,W)=>{x&&(W<e?s(x):W===e?e===3?(t(x),s(l),s(n),t(u)):(s(x),t(l),t(n),t(u)):t(x))}),l&&(e===3||e===4?(s(l),n&&s(n),u&&(e===3?(t(u),setTimeout(()=>s(u),800)):e===4?(u.style.transition="none",s(u),requestAnimationFrame(()=>{u.style.transition=""})):t(u))):(t(l),t(n),t(u)))),L===e?(v.classList.add("active","noise"),y.style.maxHeight="0px",y.style.opacity="1",y.style.paddingTop="24px",I&&(I.classList.remove("animate-timer"),I.offsetWidth,I.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.style.maxHeight=y.scrollHeight+E+"px"})})):(v.classList.remove("active","noise"),y.style.maxHeight="0px",y.style.opacity="0",y.style.paddingTop="0"))});const c=document.querySelector(".typeWriterLink"),m=c==null?void 0:c.querySelector(".typeWriterWrap"),f=m==null?void 0:m.querySelector(".typeWriter"),b=f==null?void 0:f.querySelector(".realText"),h=f==null?void 0:f.querySelector(".animatedText"),g=m==null?void 0:m.querySelector(".typeWriterIcon");if(f&&b&&h&&g){const v=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=v,e===5?(h.innerHTML=v+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,f.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+v.length+") forwards",setTimeout(()=>{f.classList.remove("typing")},2400)):(h.innerHTML=v,f.classList.remove("typing")),m.classList.remove("help"),e===5?(m.classList.add("help"),c.style.pointerEvents="auto",c.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(c.style.pointerEvents="none",c.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function a(){p=setInterval(()=>{r=(r+1)%o.length,i(r)},5e3)}i(r),a(),o.forEach((e,s)=>{e.addEventListener("click",()=>{clearInterval(p),r=s,i(s),a()})})});document.addEventListener("DOMContentLoaded",()=>{const o=Array.from(document.querySelectorAll("section.archSec .cardIcon")),r=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let a=0,e=0;function s(d){p[e].classList.add("none"),e=(d+p.length)%p.length,p[e].classList.remove("none")}function t(){i.forEach((d,l)=>{const n=o[(l+a)%o.length],u=d.angle>=-125&&d.angle<=-55;n.style.transition=u?"transform 0.6s ease, background-color 0.6s ease":"none",n.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?n.style.backgroundColor="#9B8DFF":d.scale>=.7?n.style.backgroundColor="#cac3ff":n.style.backgroundColor="#e1ddff"})}r[1].addEventListener("click",()=>{a=(a+1)%o.length,s(e+1),t()}),r[0].addEventListener("click",()=>{a=(a-1+o.length)%o.length,s(e-1),t()}),t()});const T={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(r){const p=this.getAttribute("href").substring(1),i=document.getElementById(p);if(!i)return;r.preventDefault();const a=T[p]||0,e=i.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("rolling")&&r(a.target),a.target.classList.contains("rolling-img")&&p(a.target),o.unobserve(a.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const a=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let s=0;s<a.length;s++){const t=a[s],d=document.createElement("span");d.dataset.final=t,e.appendChild(d)}i.appendChild(e),o.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{o.observe(i)});function r(i){i.querySelectorAll("span").forEach(e=>{const s=e.dataset.final;if(/\d/.test(s)){const t=document.createElement("div");t.style.transition="transform 1s ease",t.style.display="block";for(let l=0;l<=9;l++){const n=document.createElement("div");n.textContent=l,t.appendChild(n)}const d=document.createElement("div");d.textContent=s,t.appendChild(d),e.appendChild(t),requestAnimationFrame(()=>{t.style.transform="translateY(-10em)"})}else e.textContent=s,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(i){const a=i.querySelector("span"),e=a.querySelector("img");if(!e)return;const s=e.clientHeight||60,t=6;requestAnimationFrame(()=>{a.style.transform=`translateY(-${s*t}px)`})}});
