(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const n={Диплом:{label:"Диплом",html:`
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
      `},Курсовая:{label:"Курсовая",html:`
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
      `},Магистерская_диссертация:{label:"Магистерская диссертация",html:`
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
      `},РАР:{label:"РАР (Расчетно-аналитическая работа)",html:`
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
      `},Презентация:{label:"Презентация",html:`
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
      `},Эссе:{label:"Эссе",html:`
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
      `},Реферат:{label:"Реферат",html:`
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
      `},Домашняя_работа:{label:"Домашняя работа",html:`
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
      `},Билеты_к_экзамену:{label:"Билеты к экзамену",html:`
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
      `},Контрольная_работа:{label:"Контрольная работа",html:`
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
      `},Зачёт:{label:"Зачёт",html:`
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
      `},Экзамен:{label:"Экзамен",html:`
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
      `},Репетиторство:{label:"Репетиторство",html:`
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
      `},Микронаушник:{label:"Микронаушник",html:`
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
      `}},s=document.getElementById("workType"),u=document.getElementById("formWrapType");Object.entries(n).forEach(([l,{label:c}],i)=>{const a=document.createElement("option");a.value=l,a.textContent=c,i===0&&(a.selected=!0),s.appendChild(a)});function r(l){const c=n[l];u.innerHTML=c?c.html:"",t(),d()}s.addEventListener("change",l=>{r(l.target.value)}),r(s.value),console.log("value при запуске:",s.value);function t(){const l=document.getElementById("uploadArea");if(!l)return;const c=l.querySelector("div"),i=l.querySelector("input");l.addEventListener("click",()=>{i.click(),i.onchange=a=>{e(a.target.files,c)}}),l.addEventListener("dragover",a=>{a.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",a=>{a.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",a=>{a.preventDefault(),l.classList.remove("dragover"),e([...a.dataTransfer.files],c)})}function e(l,c){const i=new FormData,a=Array.from(l);a.forEach((o,b)=>i.append(`file${b+1}`,o)),c.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",o=>{const b=o.loaded/o.total;c.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const o=a.map(b=>b.name).join(", ");c.textContent=`✅ Загружено: ${o}`}else c.textContent="❌ Ошибка загрузки"},v.onerror=()=>{c.textContent="❌ Сетевая ошибка"},v.send(i)}function d(){const l=document.getElementById("slideNumber"),c=document.getElementById("increase"),i=document.getElementById("decrease");!l||!c||!i||(c.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),i.addEventListener("click",()=>{let a=parseInt(l.value||"0");a>0&&(l.value=a-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}const p=document.getElementById("formUpload");p.addEventListener("submit",async l=>{var v;l.preventDefault();const c=new URLSearchParams;p.querySelectorAll("input, textarea, select").forEach(o=>{(o.type==="radio"||o.type==="checkbox")&&!o.checked||(o.name||o.id)&&c.append(o.name||o.id,o.value)});const i=p.querySelectorAll("input[type='file']");let a=1;for(const o of i)for(const b of o.files){const h=await f(b);c.append(`file${a}`,h),c.append(`filename${a}`,b.name),c.append(`mimeType${a}`,b.type),a++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:c}).then(()=>{var o;alert("✅ Успешно отправлено!"),(o=document.querySelector(".loader"))==null||o.classList.remove("active")}).catch(()=>{var o;alert("❌ Ошибка при отправке"),(o=document.querySelector(".loader"))==null||o.classList.remove("active")})});function f(l){return new Promise((c,i)=>{const a=new FileReader;a.onloadend=()=>c(a.result.split(",")[1]),a.onerror=i,a.readAsDataURL(l)})}});document.addEventListener("DOMContentLoaded",()=>{let n=!1,s=!1;const u=document.querySelector("nav"),r=u.querySelector(".hover-marker"),t=document.querySelectorAll("li a");let e=null;function d(i){const a=i.getBoundingClientRect(),v=u.getBoundingClientRect();r.style.width=`${a.width}px`,r.style.left=`${a.left-v.left}px`,r.style.opacity=1,t.forEach(o=>o.classList.remove("marker-visible")),i.classList.add("marker-visible")}t.forEach(i=>{i.addEventListener("mouseenter",()=>{s||(t.forEach(a=>{a.classList.remove("is-hovered","is-dimmed","marker-visible")}),i.classList.add("is-hovered"),e&&e!==i&&e.classList.add("is-dimmed"),d(i))})}),u.addEventListener("mouseleave",()=>{s||(t.forEach(i=>i.classList.remove("is-hovered","is-dimmed")),e?(e.classList.add("is-active"),d(e)):r.style.opacity=0)});const p=document.querySelectorAll("nav ul a"),f=document.querySelector("#formsDiv");function l(){const i=u.offsetHeight,a=u.getBoundingClientRect().top+i/2;let o=Array.from(document.querySelectorAll("section")).find(m=>{const x=m.getBoundingClientRect();return a>=x.top&&a<x.bottom});const b=o==null?void 0:o.classList.contains("purple"),h=50;let y=!1;if(f){const m=f.getBoundingClientRect();y=m.top<=h&&m.bottom>h}p.forEach(m=>{m.classList.contains("marker-visible")||m.classList.toggle("invert-color",y||b)})}function c(){const i=window.innerHeight/2,a=Array.from(document.querySelectorAll("[id]"));let v=null;for(const o of a){const b=o.getBoundingClientRect();if(b.top<=i&&b.bottom>=i){v=o.id;break}}if(v){const o=Array.from(t).find(b=>b.getAttribute("href")===`#${v}`);o&&(t.forEach(b=>b.classList.remove("is-active","is-hovered","is-dimmed")),o.classList.add("is-active"),e=o,n||d(o))}}window.addEventListener("scroll",()=>{l(),c()}),t.forEach(i=>{const a=i.getAttribute("href");if(a.startsWith("#")&&a.length>1){const v=document.querySelector(a);v&&i.addEventListener("click",o=>{o.preventDefault(),s=!0,n=!0;const b=v.getBoundingClientRect();let y=b.top+b.height/2+window.scrollY-window.innerHeight/2;switch(a){case"#howSec":y-=150;break;case"#servicesBlock":y-=70;break;case"#review":y-=250;break;case"#forms":y-=350;break;case"#results":y+=100;break}window.scrollTo({top:y,behavior:"smooth"}),t.forEach(m=>m.classList.remove("is-active","is-hovered","is-dimmed")),i.classList.add("is-active"),e=i,setTimeout(()=>{s=!1,n=!1,d(i)},600)})}}),setTimeout(()=>{window.dispatchEvent(new Event("scroll"))},1e3)});window.innerWidth>=469&&(window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(n=>{n.classList.add("animate-logo");const s=window.getComputedStyle(n).transform;n.dataset.base=s!=="none"?s:""})}),document.addEventListener("mousemove",n=>{document.querySelectorAll(".logo3D").forEach(s=>{const u=s.getBoundingClientRect(),r=n.clientX-(u.left+u.width/2),t=n.clientY-(u.top+u.height/2),e=-(r*.05),d=-(t*.05);s.style.transform=`${s.dataset.base} translate(${e}px, ${d}px)`})}),document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(n=>{n.style.transform=n.dataset.base||""})}));document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".word"),s=["курсовыми","дипломами","домашками"],u=100,r=60,t=2e3;let e=0,d=0,p=!1;function f(){const l=s[e],c=l.substring(0,d);n.textContent=c,p?d>0?(d--,setTimeout(f,r)):(p=!1,e=(e+1)%s.length,setTimeout(f,u)):d<l.length?(d++,setTimeout(f,u)):setTimeout(()=>{p=!0,f()},t)}f()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(s=>{const u=s.querySelector(".marquee"),r=u.cloneNode(!0),t=s.dataset.direction==="right"?1:-1;t===1?s.insertBefore(r,u):s.appendChild(r);const e=u.offsetWidth,d=1;let p=t===1?-e:0;function f(){p+=t*d,t===-1&&Math.abs(p)>=e&&(p=0),t===1&&p>=0&&(p=-e),s.style.transform=`translateX(${p}px)`,requestAnimationFrame(f)}f()})});document.querySelectorAll(".card");const w=document.querySelectorAll(".overlay.noise");function k(n){w.forEach(s=>{const u=s.querySelector(".card"),r=u.getBoundingClientRect(),t=n.clientX-r.left,e=n.clientY-r.top;u.style.setProperty("--x",`${t}px`),u.style.setProperty("--y",`${e}px`)})}function D(n){w.forEach(s=>{if(!(s.querySelector(".card").dataset.tilt!=="false"))return;const t=s.getBoundingClientRect(),e=t.left+t.width/2,d=t.top+t.height/2,p=n.clientX-e,f=n.clientY-d,l=Math.sqrt(p**2+f**2),c=400;if(l<c){const i=1-l/c,a=-(f/20)*i,v=p/20*i;s.style.transform=`rotateX(${a.toFixed(2)}deg) rotateY(${v.toFixed(2)}deg)`}else s.style.transform="rotateX(0deg) rotateY(0deg)"})}function L(){w.forEach(n=>{n.querySelector(".card").dataset.tilt!=="false"&&(n.style.transform="rotateX(0deg) rotateY(0deg)")})}function S(n){k(n),D(n)}let W=!1;function R(){W||(window.addEventListener("mousemove",S),window.addEventListener("mouseleave",L),W=!0)}function B(){W&&(window.removeEventListener("mousemove",S),window.removeEventListener("mouseleave",L),L(),W=!1)}function A(){window.innerWidth>=469?R():B()}A();window.addEventListener("resize",A);document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll(".step");let s=0,u=null;function r(e){function d(m){!m||m.classList.contains("visible")||(m.style.visibility="visible",m.style.pointerEvents="auto",m.classList.remove("visible"),m.offsetWidth,m.classList.add("visible"))}function p(m){m&&(m.classList.remove("visible"),setTimeout(()=>{m.classList.contains("visible")||(m.style.visibility="hidden",m.style.pointerEvents="none")},400))}const f=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],l=document.querySelector(".msgBig"),c=l==null?void 0:l.querySelector(".ms04"),i=l==null?void 0:l.querySelector(".emojiMsg");n.forEach((m,x)=>{const g=m.querySelector(".stepContent"),I=m.querySelector(".timer"),T=80;g&&(e===5?(f.forEach(d),d(l),d(c),d(i)):(f.forEach((q,E)=>{q&&(E<e?d(q):E===e?e===3?(p(q),d(l),d(c),p(i)):(d(q),p(l),p(c),p(i)):p(q))}),l&&(e===3||e===4?(d(l),c&&d(c),i&&(e===3?(p(i),setTimeout(()=>d(i),800)):e===4?(i.style.transition="none",d(i),requestAnimationFrame(()=>{i.style.transition=""})):p(i))):(p(l),p(c),p(i)))),x===e?(m.classList.add("active","noise"),g.style.maxHeight="0px",g.style.opacity="1",g.style.paddingTop="24px",I&&(I.classList.remove("animate-timer"),I.offsetWidth,I.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.style.maxHeight=g.scrollHeight+T+"px"})})):(m.classList.remove("active","noise"),g.style.maxHeight="0px",g.style.opacity="0",g.style.paddingTop="0"))});const a=document.querySelector(".typeWriterLink"),v=a==null?void 0:a.querySelector(".typeWriterWrap"),o=v==null?void 0:v.querySelector(".typeWriter"),b=o==null?void 0:o.querySelector(".realText"),h=o==null?void 0:o.querySelector(".animatedText"),y=v==null?void 0:v.querySelector(".typeWriterIcon");if(o&&b&&h&&y){const m=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=m,e===5?(h.innerHTML=m+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,o.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+m.length+") forwards",setTimeout(()=>{o.classList.remove("typing")},2400)):(h.innerHTML=m,o.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),a.style.pointerEvents="auto",a.setAttribute("aria-disabled","false"),y.src="./sendActive.svg",y.classList.add("animate-icon")):(a.style.pointerEvents="none",a.setAttribute("aria-disabled","true"),y.src="./send.svg",y.classList.remove("animate-icon"))}}function t(){u=setInterval(()=>{s=(s+1)%n.length,r(s)},5e3)}r(s),t(),n.forEach((e,d)=>{e.addEventListener("click",()=>{clearInterval(u),s=d,r(d),t()})})});document.addEventListener("DOMContentLoaded",()=>{const n=Array.from(document.querySelectorAll("section.archSec .cardIcon")),s=document.querySelectorAll(".arrowGr"),u=Array.from(document.querySelectorAll(".archDesc")),r=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function d(f){u[e].classList.add("none"),e=(f+u.length)%u.length,u[e].classList.remove("none")}function p(){r.forEach((f,l)=>{const c=n[(l+t)%n.length],i=f.angle>=-125&&f.angle<=-55;c.style.transition=i?"transform 0.6s ease, background-color 0.6s ease":"none";const a=window.innerWidth<769?2900:2800;c.style.transform=`rotate(${f.angle}deg) translate(${a}px) scale(${f.scale})`,f.scale===1?c.style.backgroundColor="#9B8DFF":f.scale>=.7?c.style.backgroundColor="#cac3ff":c.style.backgroundColor="#e1ddff"})}s[1].addEventListener("click",()=>{t=(t+1)%n.length,d(e+1),p()}),s[0].addEventListener("click",()=>{t=(t-1+n.length)%n.length,d(e-1),p()}),p()});const M={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(s){const u=this.getAttribute("href").substring(1),r=document.getElementById(u);if(!r)return;s.preventDefault();const t=M[u]||0,e=r.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const n=new IntersectionObserver(r=>{r.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&s(t.target),t.target.classList.contains("rolling-img")&&u(t.target),n.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(r=>{if(r.querySelector("img"))return;const t=r.textContent.trim();r.textContent="";const e=document.createElement("div");e.className="rolling";for(let d=0;d<t.length;d++){const p=t[d],f=document.createElement("span");f.dataset.final=p,e.appendChild(f)}r.appendChild(e),n.observe(e)}),document.querySelectorAll(".rolling-img").forEach(r=>{n.observe(r)});function s(r){r.querySelectorAll("span").forEach((e,d)=>{const p=e.dataset.final;if(/\d/.test(p)){const f=document.createElement("div");f.style.transition="transform 2.5s ease",f.style.display="block",f.style.lineHeight="1em";const l=Math.floor(Math.random()*20)+20;for(let i=0;i<l;i++){const a=document.createElement("div");a.textContent=Math.floor(Math.random()*10),f.appendChild(a)}const c=document.createElement("div");c.textContent=p,f.appendChild(c),e.appendChild(f),requestAnimationFrame(()=>{f.style.transform=`translateY(-${l}em)`})}else e.textContent=p,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 1s ease, transform 1s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function u(r){const t=r.querySelector("span");if(!t.querySelector("img"))return;const p=window.innerWidth<469?36:68,f=6;t.style.transition="transform 2s ease",requestAnimationFrame(()=>{t.style.transform=`translateY(-${p*f}px)`})}});const C=new IntersectionObserver((n,s)=>{n.forEach(u=>{if(u.isIntersecting){const r=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();r.style.offsetDistance="0%",r.style.opacity="0",r.style.transform="scale(0)",r.offsetWidth,r.style.opacity="1",r.style.transform="scale(1) rotate(30deg)",r.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),s.unobserve(u.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});C.observe(document.querySelector(".tgModalWrap"));C.observe(document.querySelector(".tgModalWrap"));
