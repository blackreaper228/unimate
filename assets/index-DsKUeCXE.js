(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const s={Диплом:{label:"Диплом",html:`
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
      `}},n=document.getElementById("workType"),u=document.getElementById("formWrapType");Object.entries(s).forEach(([l,{label:o}],m)=>{const d=document.createElement("option");d.value=l,d.textContent=o,m===0&&(d.selected=!0),n.appendChild(d)});function i(l){const o=s[l];u.innerHTML=o?o.html:"",t(),r()}n.addEventListener("change",l=>{i(l.target.value)}),i(n.value),console.log("value при запуске:",n.value);function t(){const l=document.getElementById("uploadArea");if(!l)return;const o=l.querySelector("div"),m=l.querySelector("input");l.addEventListener("click",()=>{m.click(),m.onchange=d=>{e(d.target.files,o)}}),l.addEventListener("dragover",d=>{d.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",d=>{d.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",d=>{d.preventDefault(),l.classList.remove("dragover"),e([...d.dataTransfer.files],o)})}function e(l,o){const m=new FormData,d=Array.from(l);d.forEach((p,b)=>m.append(`file${b+1}`,p)),o.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",p=>{const b=p.loaded/p.total;o.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const p=d.map(b=>b.name).join(", ");o.textContent=`✅ Загружено: ${p}`}else o.textContent="❌ Ошибка загрузки"},v.onerror=()=>{o.textContent="❌ Сетевая ошибка"},v.send(m)}function r(){const l=document.getElementById("slideNumber"),o=document.getElementById("increase"),m=document.getElementById("decrease");!l||!o||!m||(o.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),m.addEventListener("click",()=>{let d=parseInt(l.value||"0");d>0&&(l.value=d-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}const a=document.getElementById("formUpload");a.addEventListener("submit",async l=>{var v;l.preventDefault();const o=new URLSearchParams;a.querySelectorAll("input, textarea, select").forEach(p=>{(p.type==="radio"||p.type==="checkbox")&&!p.checked||(p.name||p.id)&&o.append(p.name||p.id,p.value)});const m=a.querySelectorAll("input[type='file']");let d=1;for(const p of m)for(const b of p.files){const h=await c(b);o.append(`file${d}`,h),o.append(`filename${d}`,b.name),o.append(`mimeType${d}`,b.type),d++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:o}).then(()=>{var p;alert("✅ Успешно отправлено!"),(p=document.querySelector(".loader"))==null||p.classList.remove("active")}).catch(()=>{var p;alert("❌ Ошибка при отправке"),(p=document.querySelector(".loader"))==null||p.classList.remove("active")})});function c(l){return new Promise((o,m)=>{const d=new FileReader;d.onloadend=()=>o(d.result.split(",")[1]),d.onerror=m,d.readAsDataURL(l)})}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("nav"),n=s.querySelector(".hover-marker"),u=s.querySelectorAll("li a");let i=null;function t(a){const c=a.getBoundingClientRect(),l=s.getBoundingClientRect();n.style.width=`${c.width}px`,n.style.left=`${c.left-l.left}px`,n.style.opacity=1}u.forEach(a=>{a.addEventListener("mouseenter",()=>{u.forEach(c=>{c.classList.remove("is-hovered","is-dimmed")}),a.classList.add("is-hovered"),i&&i!==a&&i.classList.add("is-dimmed"),t(a)}),a.addEventListener("click",()=>{u.forEach(c=>c.classList.remove("is-active","is-dimmed")),a.classList.add("is-active"),i=a,t(a)})}),s.addEventListener("mouseleave",()=>{u.forEach(a=>{a.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),t(i)):n.style.opacity=0});const e=document.querySelectorAll("nav ul a"),r=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const a=s.offsetHeight,c=s.getBoundingClientRect().top+a/2;let o=Array.from(document.querySelectorAll("section")).find(p=>{const b=p.getBoundingClientRect();return c>=b.top&&c<b.bottom});const m=o==null?void 0:o.classList.contains("purple"),d=50;let v=!1;if(r){const p=r.getBoundingClientRect();v=p.top<=d&&p.bottom>d}e.forEach(p=>{p.classList.toggle("invert-color",v||m)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.classList.add("animate-logo");const n=window.getComputedStyle(s).transform;s.dataset.base=n!=="none"?n:""})});document.addEventListener("mousemove",s=>{document.querySelectorAll(".logo3D").forEach(n=>{const u=n.getBoundingClientRect(),i=s.clientX-(u.left+u.width/2),t=s.clientY-(u.top+u.height/2),e=-(i*.05),r=-(t*.05);n.style.transform=`${n.dataset.base} translate(${e}px, ${r}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.style.transform=s.dataset.base||""})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".word"),n=["курсовыми","дипломами","домашками"],u=100,i=60,t=2e3;let e=0,r=0,a=!1;function c(){const l=n[e],o=l.substring(0,r);s.textContent=o,a?r>0?(r--,setTimeout(c,i)):(a=!1,e=(e+1)%n.length,setTimeout(c,u)):r<l.length?(r++,setTimeout(c,u)):setTimeout(()=>{a=!0,c()},t)}c()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const u=n.querySelector(".marquee"),i=u.cloneNode(!0),t=n.dataset.direction==="right"?1:-1;t===1?n.insertBefore(i,u):n.appendChild(i);const e=u.offsetWidth,r=1;let a=t===1?-e:0;function c(){a+=t*r,t===-1&&Math.abs(a)>=e&&(a=0),t===1&&a>=0&&(a=-e),n.style.transform=`translateX(${a}px)`,requestAnimationFrame(c)}c()})});const I=document.querySelectorAll(".card");function w(s){I.forEach(n=>{const u=n.getBoundingClientRect(),i=s.clientX-u.left,t=s.clientY-u.top;n.style.setProperty("--x",`${i}px`),n.style.setProperty("--y",`${t}px`)})}function A(s){I.forEach(n=>{if(!(n.dataset.tilt!=="false"))return;const i=n.getBoundingClientRect(),t=i.left+i.width/2,e=i.top+i.height/2,r=s.clientX-t,a=s.clientY-e,c=Math.sqrt(r**2+a**2),l=400;if(c<l){const o=1-c/l,m=-(a/50)*o,d=r/50*o;n.style.transform=`rotateX(${m.toFixed(2)}deg) rotateY(${d.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function C(){I.forEach(s=>{s.dataset.tilt!=="false"&&(s.style.transform="rotateX(0deg) rotateY(0deg)")})}function T(s){w(s),A(s)}window.addEventListener("mousemove",T);window.addEventListener("mouseleave",C);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".step");let n=0,u=null;function i(e){function r(f){!f||f.classList.contains("visible")||(f.style.visibility="visible",f.style.pointerEvents="auto",f.classList.remove("visible"),f.offsetWidth,f.classList.add("visible"))}function a(f){f&&(f.classList.remove("visible"),setTimeout(()=>{f.classList.contains("visible")||(f.style.visibility="hidden",f.style.pointerEvents="none")},400))}const c=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],l=document.querySelector(".msgBig"),o=l==null?void 0:l.querySelector(".ms04"),m=l==null?void 0:l.querySelector(".emojiMsg");s.forEach((f,E)=>{const y=f.querySelector(".stepContent"),q=f.querySelector(".timer"),S=80;y&&(e===5?(c.forEach(r),r(l),r(o),r(m)):(c.forEach((x,W)=>{x&&(W<e?r(x):W===e?e===3?(a(x),r(l),r(o),a(m)):(r(x),a(l),a(o),a(m)):a(x))}),l&&(e===3||e===4?(r(l),o&&r(o),m&&(e===3?(a(m),setTimeout(()=>r(m),800)):e===4?(m.style.transition="none",r(m),requestAnimationFrame(()=>{m.style.transition=""})):a(m))):(a(l),a(o),a(m)))),E===e?(f.classList.add("active","noise"),y.style.maxHeight="0px",y.style.opacity="1",y.style.paddingTop="24px",q&&(q.classList.remove("animate-timer"),q.offsetWidth,q.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.style.maxHeight=y.scrollHeight+S+"px"})})):(f.classList.remove("active","noise"),y.style.maxHeight="0px",y.style.opacity="0",y.style.paddingTop="0"))});const d=document.querySelector(".typeWriterLink"),v=d==null?void 0:d.querySelector(".typeWriterWrap"),p=v==null?void 0:v.querySelector(".typeWriter"),b=p==null?void 0:p.querySelector(".realText"),h=p==null?void 0:p.querySelector(".animatedText"),g=v==null?void 0:v.querySelector(".typeWriterIcon");if(p&&b&&h&&g){const f=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=f,e===5?(h.innerHTML=f+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,p.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+f.length+") forwards",setTimeout(()=>{p.classList.remove("typing")},2400)):(h.innerHTML=f,p.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),d.style.pointerEvents="auto",d.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(d.style.pointerEvents="none",d.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function t(){u=setInterval(()=>{n=(n+1)%s.length,i(n)},5e3)}i(n),t(),s.forEach((e,r)=>{e.addEventListener("click",()=>{clearInterval(u),n=r,i(r),t()})})});document.addEventListener("DOMContentLoaded",()=>{const s=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),u=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function r(c){u[e].classList.add("none"),e=(c+u.length)%u.length,u[e].classList.remove("none")}function a(){i.forEach((c,l)=>{const o=s[(l+t)%s.length],m=c.angle>=-125&&c.angle<=-55;o.style.transition=m?"transform 0.6s ease, background-color 0.6s ease":"none",o.style.transform=`rotate(${c.angle}deg) translate(2800px) scale(${c.scale})`,c.scale===1?o.style.backgroundColor="#9B8DFF":c.scale>=.7?o.style.backgroundColor="#cac3ff":o.style.backgroundColor="#e1ddff"})}n[1].addEventListener("click",()=>{t=(t+1)%s.length,r(e+1),a()}),n[0].addEventListener("click",()=>{t=(t-1+s.length)%s.length,r(e-1),a()}),a()});const D={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(n){const u=this.getAttribute("href").substring(1),i=document.getElementById(u);if(!i)return;n.preventDefault();const t=D[u]||0,e=i.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const s=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&n(t.target),t.target.classList.contains("rolling-img")&&u(t.target),s.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const t=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let r=0;r<t.length;r++){const a=t[r],c=document.createElement("span");c.dataset.final=a,e.appendChild(c)}i.appendChild(e),s.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{s.observe(i)});function n(i){i.querySelectorAll("span").forEach(e=>{const r=e.dataset.final;if(/\d/.test(r)){const a=document.createElement("div");a.style.transition="transform 1s ease",a.style.display="block";for(let l=0;l<=9;l++){const o=document.createElement("div");o.textContent=l,a.appendChild(o)}const c=document.createElement("div");c.textContent=r,a.appendChild(c),e.appendChild(a),requestAnimationFrame(()=>{a.style.transform="translateY(-10em)"})}else e.textContent=r,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function u(i){const t=i.querySelector("span"),e=t.querySelector("img");if(!e)return;const r=e.clientHeight||60,a=6;requestAnimationFrame(()=>{t.style.transform=`translateY(-${r*a}px)`})}});const L=new IntersectionObserver((s,n)=>{s.forEach(u=>{if(u.isIntersecting){const i=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();i.style.offsetDistance="0%",i.style.opacity="0",i.style.transform="scale(0)",i.offsetWidth,i.style.opacity="1",i.style.transform="scale(1) rotate(30deg)",i.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),n.unobserve(u.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});L.observe(document.querySelector(".tgModalWrap"));L.observe(document.querySelector(".tgModalWrap"));
