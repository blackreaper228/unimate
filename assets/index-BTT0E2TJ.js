(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function f(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=f(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const s={Диплом:{label:"Диплом",html:`
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
      `}},n=document.getElementById("workType"),f=document.getElementById("formWrapType");Object.entries(s).forEach(([l,{label:r}],i)=>{const a=document.createElement("option");a.value=l,a.textContent=r,i===0&&(a.selected=!0),n.appendChild(a)});function o(l){const r=s[l];f.innerHTML=r?r.html:"",t(),c()}n.addEventListener("change",l=>{o(l.target.value)}),o(n.value),console.log("value при запуске:",n.value);function t(){const l=document.getElementById("uploadArea");if(!l)return;const r=l.querySelector("div"),i=l.querySelector("input");l.addEventListener("click",()=>{i.click(),i.onchange=a=>{e(a.target.files,r)}}),l.addEventListener("dragover",a=>{a.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",a=>{a.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",a=>{a.preventDefault(),l.classList.remove("dragover"),e([...a.dataTransfer.files],r)})}function e(l,r){const i=new FormData,a=Array.from(l);a.forEach((d,b)=>i.append(`file${b+1}`,d)),r.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",d=>{const b=d.loaded/d.total;r.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const d=a.map(b=>b.name).join(", ");r.textContent=`✅ Загружено: ${d}`}else r.textContent="❌ Ошибка загрузки"},v.onerror=()=>{r.textContent="❌ Сетевая ошибка"},v.send(i)}function c(){const l=document.getElementById("slideNumber"),r=document.getElementById("increase"),i=document.getElementById("decrease");!l||!r||!i||(r.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),i.addEventListener("click",()=>{let a=parseInt(l.value||"0");a>0&&(l.value=a-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}const p=document.getElementById("formUpload");p.addEventListener("submit",async l=>{var v;l.preventDefault();const r=new URLSearchParams;p.querySelectorAll("input, textarea, select").forEach(d=>{(d.type==="radio"||d.type==="checkbox")&&!d.checked||(d.name||d.id)&&r.append(d.name||d.id,d.value)});const i=p.querySelectorAll("input[type='file']");let a=1;for(const d of i)for(const b of d.files){const h=await u(b);r.append(`file${a}`,h),r.append(`filename${a}`,b.name),r.append(`mimeType${a}`,b.type),a++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbxcN9Uijcx5n2Uu_k9OptbTXCk3BqXYiKS8lfJrCNoOYuLX90Kfg2ykylK-XPZEDYQf/exec",{method:"POST",body:r}).then(()=>{var d;alert("✅ Успешно отправлено!"),(d=document.querySelector(".loader"))==null||d.classList.remove("active")}).catch(()=>{var d;alert("❌ Ошибка при отправке"),(d=document.querySelector(".loader"))==null||d.classList.remove("active")})});function u(l){return new Promise((r,i)=>{const a=new FileReader;a.onloadend=()=>r(a.result.split(",")[1]),a.onerror=i,a.readAsDataURL(l)})}});document.addEventListener("DOMContentLoaded",()=>{let s=!1,n=!1;const f=document.querySelector("nav"),o=f.querySelector(".hover-marker"),t=document.querySelectorAll("li a");let e=null;function c(i){const a=i.getBoundingClientRect(),v=f.getBoundingClientRect();o.style.width=`${a.width}px`,o.style.left=`${a.left-v.left}px`,o.style.opacity=1,t.forEach(d=>d.classList.remove("marker-visible")),i.classList.add("marker-visible")}t.forEach(i=>{i.addEventListener("mouseenter",()=>{n||(t.forEach(a=>{a.classList.remove("is-hovered","is-dimmed","marker-visible")}),i.classList.add("is-hovered"),e&&e!==i&&e.classList.add("is-dimmed"),c(i))})}),f.addEventListener("mouseleave",()=>{n||(t.forEach(i=>i.classList.remove("is-hovered","is-dimmed")),e?(e.classList.add("is-active"),c(e)):o.style.opacity=0)});const p=document.querySelectorAll("nav ul a"),u=document.querySelector("#formsDiv");function l(){const i=f.offsetHeight,a=f.getBoundingClientRect().top+i/2;let d=Array.from(document.querySelectorAll("section")).find(m=>{const x=m.getBoundingClientRect();return a>=x.top&&a<x.bottom});const b=d==null?void 0:d.classList.contains("purple"),h=50;let y=!1;if(u){const m=u.getBoundingClientRect();y=m.top<=h&&m.bottom>h}p.forEach(m=>{m.classList.contains("marker-visible")||m.classList.toggle("invert-color",y||b)})}function r(){const i=window.innerHeight/2,a=Array.from(document.querySelectorAll("[id]"));let v=null;for(const d of a){const b=d.getBoundingClientRect();if(b.top<=i&&b.bottom>=i){v=d.id;break}}if(v){const d=Array.from(t).find(b=>b.getAttribute("href")===`#${v}`);d&&(t.forEach(b=>b.classList.remove("is-active","is-hovered","is-dimmed")),d.classList.add("is-active"),e=d,s||c(d))}}window.addEventListener("scroll",()=>{l(),r()}),t.forEach(i=>{const a=i.getAttribute("href");if(a.startsWith("#")&&a.length>1){const v=document.querySelector(a);v&&i.addEventListener("click",d=>{d.preventDefault(),n=!0,s=!0;const b=v.getBoundingClientRect();let y=b.top+b.height/2+window.scrollY-window.innerHeight/2;switch(a){case"#howSec":y-=150;break;case"#servicesBlock":y-=70;break;case"#review":y-=250;break;case"#forms":y-=350;break;case"#results":y+=100;break}window.scrollTo({top:y,behavior:"smooth"}),t.forEach(m=>m.classList.remove("is-active","is-hovered","is-dimmed")),i.classList.add("is-active"),e=i,setTimeout(()=>{n=!1,s=!1,c(i)},600)})}}),setTimeout(()=>{window.dispatchEvent(new Event("scroll"))},1e3)});window.innerWidth>=469&&(window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.classList.add("animate-logo");const n=window.getComputedStyle(s).transform;s.dataset.base=n!=="none"?n:""})}),document.addEventListener("mousemove",s=>{document.querySelectorAll(".logo3D").forEach(n=>{const f=n.getBoundingClientRect(),o=s.clientX-(f.left+f.width/2),t=s.clientY-(f.top+f.height/2),e=-(o*.05),c=-(t*.05);n.style.transform=`${n.dataset.base} translate(${e}px, ${c}px)`})}),document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.style.transform=s.dataset.base||""})}));document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".word"),n=["курсовыми","дипломами","эссе","экзаменами","тестами","рефератами","пересдачами","зачетами"],f=100,o=60,t=2e3;let e=0,c=0,p=!1;function u(){const l=n[e],r=l.substring(0,c);s.textContent=r,p?c>0?(c--,setTimeout(u,o)):(p=!1,e=(e+1)%n.length,setTimeout(u,f)):c<l.length?(c++,setTimeout(u,f)):setTimeout(()=>{p=!0,u()},t)}u()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const f=n.querySelector(".marquee"),o=f.cloneNode(!0),t=n.dataset.direction==="right"?1:-1;t===1?n.insertBefore(o,f):n.appendChild(o);const e=f.offsetWidth,c=1;let p=t===1?-e:0;function u(){p+=t*c,t===-1&&Math.abs(p)>=e&&(p=0),t===1&&p>=0&&(p=-e),n.style.transform=`translateX(${p}px)`,requestAnimationFrame(u)}u()})});document.querySelectorAll(".card");const E=document.querySelectorAll(".overlay.noise");function T(s){E.forEach(n=>{const f=n.querySelector(".card"),o=f.getBoundingClientRect(),t=s.clientX-o.left,e=s.clientY-o.top;f.style.setProperty("--x",`${t}px`),f.style.setProperty("--y",`${e}px`)})}function D(s){E.forEach(n=>{if(!(n.querySelector(".card").dataset.tilt!=="false"))return;const t=n.getBoundingClientRect(),e=t.left+t.width/2,c=t.top+t.height/2,p=s.clientX-e,u=s.clientY-c,l=Math.sqrt(p**2+u**2),r=400;if(l<r){const i=1-l/r,a=-(u/20)*i,v=p/20*i;n.style.transform=`rotateX(${a.toFixed(2)}deg) rotateY(${v.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function L(){E.forEach(s=>{s.querySelector(".card").dataset.tilt!=="false"&&(s.style.transform="rotateX(0deg) rotateY(0deg)")})}function S(s){T(s),D(s)}let W=!1;function R(){W||(window.addEventListener("mousemove",S),window.addEventListener("mouseleave",L),W=!0)}function B(){W&&(window.removeEventListener("mousemove",S),window.removeEventListener("mouseleave",L),L(),W=!1)}function A(){window.innerWidth>=469?R():B()}A();window.addEventListener("resize",A);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".step");let n=0,f=null;function o(e){function c(m){!m||m.classList.contains("visible")||(m.style.visibility="visible",m.style.pointerEvents="auto",m.classList.remove("visible"),m.offsetWidth,m.classList.add("visible"))}function p(m){m&&(m.classList.remove("visible"),setTimeout(()=>{m.classList.contains("visible")||(m.style.visibility="hidden",m.style.pointerEvents="none")},400))}const u=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],l=document.querySelector(".msgBig"),r=l==null?void 0:l.querySelector(".ms04"),i=l==null?void 0:l.querySelector(".emojiMsg");s.forEach((m,x)=>{const g=m.querySelector(".stepContent"),I=m.querySelector(".timer"),k=80;g&&(e===5?(u.forEach(c),c(l),c(r),c(i)):(u.forEach((q,w)=>{q&&(w<e?c(q):w===e?e===3?(p(q),c(l),c(r),p(i)):(c(q),p(l),p(r),p(i)):p(q))}),l&&(e===3||e===4?(c(l),r&&c(r),i&&(e===3?(p(i),setTimeout(()=>c(i),800)):e===4?(i.style.transition="none",c(i),requestAnimationFrame(()=>{i.style.transition=""})):p(i))):(p(l),p(r),p(i)))),x===e?(m.classList.add("active","noise"),g.style.maxHeight="0px",g.style.opacity="1",g.style.paddingTop="24px",I&&(I.classList.remove("animate-timer"),I.offsetWidth,I.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.style.maxHeight=g.scrollHeight+k+"px"})})):(m.classList.remove("active","noise"),g.style.maxHeight="0px",g.style.opacity="0",g.style.paddingTop="0"))});const a=document.querySelector(".typeWriterLink"),v=a==null?void 0:a.querySelector(".typeWriterWrap"),d=v==null?void 0:v.querySelector(".typeWriter"),b=d==null?void 0:d.querySelector(".realText"),h=d==null?void 0:d.querySelector(".animatedText"),y=v==null?void 0:v.querySelector(".typeWriterIcon");if(d&&b&&h&&y){const m=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=m,e===5?(h.innerHTML=m+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,d.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+m.length+") forwards",setTimeout(()=>{d.classList.remove("typing")},2400)):(h.innerHTML=m,d.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),a.style.pointerEvents="auto",a.setAttribute("aria-disabled","false"),y.src="./sendActive.svg",y.classList.add("animate-icon")):(a.style.pointerEvents="none",a.setAttribute("aria-disabled","true"),y.src="./send.svg",y.classList.remove("animate-icon"))}}function t(){f=setInterval(()=>{n=(n+1)%s.length,o(n)},5e3)}o(n),t(),s.forEach((e,c)=>{e.addEventListener("click",()=>{clearInterval(f),n=c,o(c),t()})})});document.addEventListener("DOMContentLoaded",()=>{const s=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),f=Array.from(document.querySelectorAll(".archDesc")),o=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function c(u){f[e].classList.add("none"),e=(u+f.length)%f.length,f[e].classList.remove("none")}function p(){o.forEach((u,l)=>{const r=s[(l+t)%s.length],i=u.angle>=-125&&u.angle<=-55;r.style.transition=i?"transform 0.6s ease, background-color 0.6s ease":"none";const a=window.innerWidth<769?2900:2800;r.style.transform=`rotate(${u.angle}deg) translate(${a}px) scale(${u.scale})`,u.scale===1?r.style.backgroundColor="#9B8DFF":u.scale>=.7?r.style.backgroundColor="#cac3ff":r.style.backgroundColor="#e1ddff",r.style.cursor=i?"pointer":"default",r.onclick=null,u.scale===.7?u.angle===-98.5?r.onclick=()=>{t=(t-1+s.length)%s.length,c(e-1),p()}:u.angle===-81.5&&(r.onclick=()=>{t=(t+1)%s.length,c(e+1),p()}):r.style.pointerEvents=i?"auto":"none"})}n[1].addEventListener("click",()=>{t=(t+1)%s.length,c(e+1),p()}),n[0].addEventListener("click",()=>{t=(t-1+s.length)%s.length,c(e-1),p()}),p()});const M={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(n){const f=this.getAttribute("href").substring(1),o=document.getElementById(f);if(!o)return;n.preventDefault();const t=M[f]||0,e=o.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const s=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&n(t.target),t.target.classList.contains("rolling-img")&&f(t.target),s.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(o=>{if(o.querySelector("img"))return;const t=o.textContent.trim();o.textContent="";const e=document.createElement("div");e.className="rolling";for(let c=0;c<t.length;c++){const p=t[c],u=document.createElement("span");u.dataset.final=p,e.appendChild(u)}o.appendChild(e),s.observe(e)}),document.querySelectorAll(".rolling-img").forEach(o=>{s.observe(o)});function n(o){o.querySelectorAll("span").forEach((e,c)=>{const p=e.dataset.final;if(/\d/.test(p)){const u=document.createElement("div");u.style.transition="transform 2.5s ease",u.style.display="block",u.style.lineHeight="1em";const l=Math.floor(Math.random()*20)+20;for(let i=0;i<l;i++){const a=document.createElement("div");a.textContent=Math.floor(Math.random()*10),u.appendChild(a)}const r=document.createElement("div");r.textContent=p,u.appendChild(r),e.appendChild(u),requestAnimationFrame(()=>{u.style.transform=`translateY(-${l}em)`})}else e.textContent=p,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 1s ease, transform 1s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function f(o){const t=o.querySelector("span");if(!t.querySelector("img"))return;const p=window.innerWidth<469?36:68,u=6;t.style.transition="transform 2s ease",requestAnimationFrame(()=>{t.style.transform=`translateY(-${p*u}px)`})}});const C=new IntersectionObserver((s,n)=>{s.forEach(f=>{if(f.isIntersecting){const o=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();o.style.offsetDistance="0%",o.style.opacity="0",o.style.transform="scale(0)",o.offsetWidth,o.style.opacity="1",o.style.transform="scale(1) rotate(30deg)",o.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),n.unobserve(f.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});C.observe(document.querySelector(".tgModalWrap"));C.observe(document.querySelector(".tgModalWrap"));
