(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function u(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(a){if(a.ep)return;a.ep=!0;const e=u(a);fetch(a.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const o={Диплом:{label:"Диплом",html:`
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
      `}},r=document.getElementById("workType"),u=document.getElementById("formWrapType");Object.entries(o).forEach(([l,{label:n}],m)=>{const c=document.createElement("option");c.value=l,c.textContent=n,m===0&&(c.selected=!0),r.appendChild(c)});function i(l){const n=o[l];u.innerHTML=n?n.html:"",a(),s()}r.addEventListener("change",l=>{i(l.target.value)}),i(r.value),console.log("value при запуске:",r.value);function a(){const l=document.getElementById("uploadArea");if(!l)return;const n=l.querySelector("div"),m=l.querySelector("input");l.addEventListener("click",()=>{m.click(),m.onchange=c=>{e(c.target.files,n)}}),l.addEventListener("dragover",c=>{c.preventDefault(),l.classList.add("dragover")}),l.addEventListener("dragleave",c=>{c.preventDefault(),l.classList.remove("dragover")}),l.addEventListener("drop",c=>{c.preventDefault(),l.classList.remove("dragover"),e([...c.dataTransfer.files],n)})}function e(l,n){const m=new FormData,c=Array.from(l);c.forEach((p,b)=>m.append(`file${b+1}`,p)),n.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",p=>{const b=p.loaded/p.total;n.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const p=c.map(b=>b.name).join(", ");n.textContent=`✅ Загружено: ${p}`}else n.textContent="❌ Ошибка загрузки"},v.onerror=()=>{n.textContent="❌ Сетевая ошибка"},v.send(m)}function s(){const l=document.getElementById("slideNumber"),n=document.getElementById("increase"),m=document.getElementById("decrease");!l||!n||!m||(n.addEventListener("click",()=>{l.value=parseInt(l.value||"0")+1}),m.addEventListener("click",()=>{let c=parseInt(l.value||"0");c>0&&(l.value=c-1)}),l.addEventListener("input",()=>{parseInt(l.value)<0&&(l.value=0)}))}const t=document.getElementById("formUpload");t.addEventListener("submit",async l=>{var v;l.preventDefault();const n=new URLSearchParams;t.querySelectorAll("input, textarea, select").forEach(p=>{(p.type==="radio"||p.type==="checkbox")&&!p.checked||(p.name||p.id)&&n.append(p.name||p.id,p.value)});const m=t.querySelectorAll("input[type='file']");let c=1;for(const p of m)for(const b of p.files){const h=await d(b);n.append(`file${c}`,h),n.append(`filename${c}`,b.name),n.append(`mimeType${c}`,b.type),c++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:n}).then(()=>{var p;alert("✅ Успешно отправлено!"),(p=document.querySelector(".loader"))==null||p.classList.remove("active")}).catch(()=>{var p;alert("❌ Ошибка при отправке"),(p=document.querySelector(".loader"))==null||p.classList.remove("active")})});function d(l){return new Promise((n,m)=>{const c=new FileReader;c.onloadend=()=>n(c.result.split(",")[1]),c.onerror=m,c.readAsDataURL(l)})}});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("nav"),r=o.querySelector(".hover-marker"),u=o.querySelectorAll("li a");let i=null;function a(t){const d=t.getBoundingClientRect(),l=o.getBoundingClientRect();r.style.width=`${d.width}px`,r.style.left=`${d.left-l.left}px`,r.style.opacity=1}u.forEach(t=>{t.addEventListener("mouseenter",()=>{u.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),t.classList.add("is-hovered"),i&&i!==t&&i.classList.add("is-dimmed"),a(t)}),t.addEventListener("click",()=>{u.forEach(d=>d.classList.remove("is-active","is-dimmed")),t.classList.add("is-active"),i=t,a(t)})}),o.addEventListener("mouseleave",()=>{u.forEach(t=>{t.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),a(i)):r.style.opacity=0});const e=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const t=o.offsetHeight,d=o.getBoundingClientRect().top+t/2;let n=Array.from(document.querySelectorAll("section")).find(p=>{const b=p.getBoundingClientRect();return d>=b.top&&d<b.bottom});const m=n==null?void 0:n.classList.contains("purple"),c=50;let v=!1;if(s){const p=s.getBoundingClientRect();v=p.top<=c&&p.bottom>c}e.forEach(p=>{p.classList.toggle("invert-color",v||m)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(o=>{o.classList.add("animate-logo")})});document.addEventListener("mousemove",o=>{document.querySelectorAll(".logo3D").forEach(u=>{const i=u.getBoundingClientRect(),a=o.clientX-(i.left+i.width/2),e=o.clientY-(i.top+i.height/2),s=-(a*.05),t=-(e*.05),d=u.dataset.base||"";u.style.transform=`${d} translate(${s}px, ${t}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(r=>{const u=r.dataset.base||"";r.style.transform=u})});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".word"),r=["курсовыми","дипломами","домашками"],u=100,i=60,a=2e3;let e=0,s=0,t=!1;function d(){const l=r[e],n=l.substring(0,s);o.textContent=n,t?s>0?(s--,setTimeout(d,i)):(t=!1,e=(e+1)%r.length,setTimeout(d,u)):s<l.length?(s++,setTimeout(d,u)):setTimeout(()=>{t=!0,d()},a)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(r=>{const u=r.querySelector(".marquee"),i=u.cloneNode(!0),a=r.dataset.direction==="right"?1:-1;a===1?r.insertBefore(i,u):r.appendChild(i);const e=u.offsetWidth,s=1;let t=a===1?-e:0;function d(){t+=a*s,a===-1&&Math.abs(t)>=e&&(t=0),a===1&&t>=0&&(t=-e),r.style.transform=`translateX(${t}px)`,requestAnimationFrame(d)}d()})});const q=document.querySelectorAll(".card");function w(o){q.forEach(r=>{const u=r.getBoundingClientRect(),i=o.clientX-u.left,a=o.clientY-u.top;r.style.setProperty("--x",`${i}px`),r.style.setProperty("--y",`${a}px`)})}function S(o){q.forEach(r=>{if(!(r.dataset.tilt!=="false"))return;const i=r.getBoundingClientRect(),a=i.left+i.width/2,e=i.top+i.height/2,s=o.clientX-a,t=o.clientY-e,d=Math.sqrt(s**2+t**2),l=400;if(d<l){const n=1-d/l,m=-(t/50)*n,c=s/50*n;r.style.transform=`rotateX(${m.toFixed(2)}deg) rotateY(${c.toFixed(2)}deg)`}else r.style.transform="rotateX(0deg) rotateY(0deg)"})}function A(){q.forEach(o=>{o.dataset.tilt!=="false"&&(o.style.transform="rotateX(0deg) rotateY(0deg)")})}function C(o){w(o),S(o)}window.addEventListener("mousemove",C);window.addEventListener("mouseleave",A);document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".step");let r=0,u=null;function i(e){function s(f){!f||f.classList.contains("visible")||(f.style.visibility="visible",f.style.pointerEvents="auto",f.classList.remove("visible"),f.offsetWidth,f.classList.add("visible"))}function t(f){f&&(f.classList.remove("visible"),setTimeout(()=>{f.classList.contains("visible")||(f.style.visibility="hidden",f.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],l=document.querySelector(".msgBig"),n=l==null?void 0:l.querySelector(".ms04"),m=l==null?void 0:l.querySelector(".emojiMsg");o.forEach((f,L)=>{const y=f.querySelector(".stepContent"),I=f.querySelector(".timer"),E=80;y&&(e===5?(d.forEach(s),s(l),s(n),s(m)):(d.forEach((x,W)=>{x&&(W<e?s(x):W===e?e===3?(t(x),s(l),s(n),t(m)):(s(x),t(l),t(n),t(m)):t(x))}),l&&(e===3||e===4?(s(l),n&&s(n),m&&(e===3?(t(m),setTimeout(()=>s(m),800)):e===4?(m.style.transition="none",s(m),requestAnimationFrame(()=>{m.style.transition=""})):t(m))):(t(l),t(n),t(m)))),L===e?(f.classList.add("active","noise"),y.style.maxHeight="0px",y.style.opacity="1",y.style.paddingTop="24px",I&&(I.classList.remove("animate-timer"),I.offsetWidth,I.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.style.maxHeight=y.scrollHeight+E+"px"})})):(f.classList.remove("active","noise"),y.style.maxHeight="0px",y.style.opacity="0",y.style.paddingTop="0"))});const c=document.querySelector(".typeWriterLink"),v=c==null?void 0:c.querySelector(".typeWriterWrap"),p=v==null?void 0:v.querySelector(".typeWriter"),b=p==null?void 0:p.querySelector(".realText"),h=p==null?void 0:p.querySelector(".animatedText"),g=v==null?void 0:v.querySelector(".typeWriterIcon");if(p&&b&&h&&g){const f=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=f,e===5?(h.innerHTML=f+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,p.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+f.length+") forwards",setTimeout(()=>{p.classList.remove("typing")},2400)):(h.innerHTML=f,p.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),c.style.pointerEvents="auto",c.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(c.style.pointerEvents="none",c.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function a(){u=setInterval(()=>{r=(r+1)%o.length,i(r)},5e3)}i(r),a(),o.forEach((e,s)=>{e.addEventListener("click",()=>{clearInterval(u),r=s,i(s),a()})})});document.addEventListener("DOMContentLoaded",()=>{const o=Array.from(document.querySelectorAll("section.archSec .cardIcon")),r=document.querySelectorAll(".arrowGr"),u=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let a=0,e=0;function s(d){u[e].classList.add("none"),e=(d+u.length)%u.length,u[e].classList.remove("none")}function t(){i.forEach((d,l)=>{const n=o[(l+a)%o.length],m=d.angle>=-125&&d.angle<=-55;n.style.transition=m?"transform 0.6s ease, background-color 0.6s ease":"none",n.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?n.style.backgroundColor="#9B8DFF":d.scale>=.7?n.style.backgroundColor="#cac3ff":n.style.backgroundColor="#e1ddff"})}r[1].addEventListener("click",()=>{a=(a+1)%o.length,s(e+1),t()}),r[0].addEventListener("click",()=>{a=(a-1+o.length)%o.length,s(e-1),t()}),t()});const T={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(r){const u=this.getAttribute("href").substring(1),i=document.getElementById(u);if(!i)return;r.preventDefault();const a=T[u]||0,e=i.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("rolling")&&r(a.target),a.target.classList.contains("rolling-img")&&u(a.target),o.unobserve(a.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const a=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let s=0;s<a.length;s++){const t=a[s],d=document.createElement("span");d.dataset.final=t,e.appendChild(d)}i.appendChild(e),o.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{o.observe(i)});function r(i){i.querySelectorAll("span").forEach(e=>{const s=e.dataset.final;if(/\d/.test(s)){const t=document.createElement("div");t.style.transition="transform 1s ease",t.style.display="block";for(let l=0;l<=9;l++){const n=document.createElement("div");n.textContent=l,t.appendChild(n)}const d=document.createElement("div");d.textContent=s,t.appendChild(d),e.appendChild(t),requestAnimationFrame(()=>{t.style.transform="translateY(-10em)"})}else e.textContent=s,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function u(i){const a=i.querySelector("span"),e=a.querySelector("img");if(!e)return;const s=e.clientHeight||60,t=6;requestAnimationFrame(()=>{a.style.transform=`translateY(-${s*t}px)`})}});
