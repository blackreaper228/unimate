(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const s={Диплом:{label:"Диплом",html:`
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
      `}},r=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(s).forEach(([a,{label:n}],m)=>{const c=document.createElement("option");c.value=a,c.textContent=n,m===0&&(c.selected=!0),r.appendChild(c)});function i(a){const n=s[a];p.innerHTML=n?n.html:"",t(),o()}r.addEventListener("change",a=>{i(a.target.value)}),i(r.value),console.log("value при запуске:",r.value);function t(){const a=document.getElementById("uploadArea");if(!a)return;const n=a.querySelector("div"),m=a.querySelector("input");a.addEventListener("click",()=>{m.click(),m.onchange=c=>{e(c.target.files,n)}}),a.addEventListener("dragover",c=>{c.preventDefault(),a.classList.add("dragover")}),a.addEventListener("dragleave",c=>{c.preventDefault(),a.classList.remove("dragover")}),a.addEventListener("drop",c=>{c.preventDefault(),a.classList.remove("dragover"),e([...c.dataTransfer.files],n)})}function e(a,n){const m=new FormData,c=Array.from(a);c.forEach((u,b)=>m.append(`file${b+1}`,u)),n.textContent="Загрузка...";const f=new XMLHttpRequest;f.open("POST","https://httpbin.org/post"),f.upload.addEventListener("progress",u=>{const b=u.loaded/u.total;n.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),f.onload=()=>{if(f.status===200){const u=c.map(b=>b.name).join(", ");n.textContent=`✅ Загружено: ${u}`}else n.textContent="❌ Ошибка загрузки"},f.onerror=()=>{n.textContent="❌ Сетевая ошибка"},f.send(m)}function o(){const a=document.getElementById("slideNumber"),n=document.getElementById("increase"),m=document.getElementById("decrease");!a||!n||!m||(n.addEventListener("click",()=>{a.value=parseInt(a.value||"0")+1}),m.addEventListener("click",()=>{let c=parseInt(a.value||"0");c>0&&(a.value=c-1)}),a.addEventListener("input",()=>{parseInt(a.value)<0&&(a.value=0)}))}const l=document.getElementById("formUpload");l.addEventListener("submit",async a=>{var f;a.preventDefault();const n=new URLSearchParams;l.querySelectorAll("input, textarea, select").forEach(u=>{(u.type==="radio"||u.type==="checkbox")&&!u.checked||(u.name||u.id)&&n.append(u.name||u.id,u.value)});const m=l.querySelectorAll("input[type='file']");let c=1;for(const u of m)for(const b of u.files){const h=await d(b);n.append(`file${c}`,h),n.append(`filename${c}`,b.name),n.append(`mimeType${c}`,b.type),c++}(f=document.querySelector(".loader"))==null||f.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:n}).then(()=>{var u;alert("✅ Успешно отправлено!"),(u=document.querySelector(".loader"))==null||u.classList.remove("active")}).catch(()=>{var u;alert("❌ Ошибка при отправке"),(u=document.querySelector(".loader"))==null||u.classList.remove("active")})});function d(a){return new Promise((n,m)=>{const c=new FileReader;c.onloadend=()=>n(c.result.split(",")[1]),c.onerror=m,c.readAsDataURL(a)})}});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("nav"),r=s.querySelector(".hover-marker"),p=s.querySelectorAll("li a");let i=null;function t(l){const d=l.getBoundingClientRect(),a=s.getBoundingClientRect();r.style.width=`${d.width}px`,r.style.left=`${d.left-a.left}px`,r.style.opacity=1}p.forEach(l=>{l.addEventListener("mouseenter",()=>{p.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),l.classList.add("is-hovered"),i&&i!==l&&i.classList.add("is-dimmed"),t(l)}),l.addEventListener("click",()=>{p.forEach(d=>d.classList.remove("is-active","is-dimmed")),l.classList.add("is-active"),i=l,t(l)})}),s.addEventListener("mouseleave",()=>{p.forEach(l=>{l.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),t(i)):r.style.opacity=0});const e=document.querySelectorAll("nav ul a"),o=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const l=s.offsetHeight,d=s.getBoundingClientRect().top+l/2;let n=Array.from(document.querySelectorAll("section")).find(u=>{const b=u.getBoundingClientRect();return d>=b.top&&d<b.bottom});const m=n==null?void 0:n.classList.contains("purple"),c=50;let f=!1;if(o){const u=o.getBoundingClientRect();f=u.top<=c&&u.bottom>c}e.forEach(u=>{u.classList.toggle("invert-color",f||m)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.classList.add("animate-logo");const r=window.getComputedStyle(s).transform;s.dataset.base=r!=="none"?r:""})});document.addEventListener("mousemove",s=>{document.querySelectorAll(".logo3D").forEach(r=>{const p=r.getBoundingClientRect(),i=s.clientX-(p.left+p.width/2),t=s.clientY-(p.top+p.height/2),e=-(i*.05),o=-(t*.05);r.style.transform=`${r.dataset.base} translate(${e}px, ${o}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(s=>{s.style.transform=s.dataset.base||""})});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".word"),r=["курсовыми","дипломами","домашками"],p=100,i=60,t=2e3;let e=0,o=0,l=!1;function d(){const a=r[e],n=a.substring(0,o);s.textContent=n,l?o>0?(o--,setTimeout(d,i)):(l=!1,e=(e+1)%r.length,setTimeout(d,p)):o<a.length?(o++,setTimeout(d,p)):setTimeout(()=>{l=!0,d()},t)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(r=>{const p=r.querySelector(".marquee"),i=p.cloneNode(!0),t=r.dataset.direction==="right"?1:-1;t===1?r.insertBefore(i,p):r.appendChild(i);const e=p.offsetWidth,o=1;let l=t===1?-e:0;function d(){l+=t*o,t===-1&&Math.abs(l)>=e&&(l=0),t===1&&l>=0&&(l=-e),r.style.transform=`translateX(${l}px)`,requestAnimationFrame(d)}d()})});document.querySelectorAll(".card");const I=document.querySelectorAll(".overlay.noise");function w(s){I.forEach(r=>{const p=r.querySelector(".card"),i=p.getBoundingClientRect(),t=s.clientX-i.left,e=s.clientY-i.top;p.style.setProperty("--x",`${t}px`),p.style.setProperty("--y",`${e}px`)})}function A(s){I.forEach(r=>{if(!(r.querySelector(".card").dataset.tilt!=="false"))return;const t=r.getBoundingClientRect(),e=t.left+t.width/2,o=t.top+t.height/2,l=s.clientX-e,d=s.clientY-o,a=Math.sqrt(l**2+d**2),n=400;if(a<n){const m=1-a/n,c=-(d/20)*m,f=l/20*m;r.style.transform=`rotateX(${c.toFixed(2)}deg) rotateY(${f.toFixed(2)}deg)`}else r.style.transform="rotateX(0deg) rotateY(0deg)"})}function C(){I.forEach(s=>{s.querySelector(".card").dataset.tilt!=="false"&&(s.style.transform="rotateX(0deg) rotateY(0deg)")})}function T(s){w(s),A(s)}window.addEventListener("mousemove",T);window.addEventListener("mouseleave",C);document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".step");let r=0,p=null;function i(e){function o(v){!v||v.classList.contains("visible")||(v.style.visibility="visible",v.style.pointerEvents="auto",v.classList.remove("visible"),v.offsetWidth,v.classList.add("visible"))}function l(v){v&&(v.classList.remove("visible"),setTimeout(()=>{v.classList.contains("visible")||(v.style.visibility="hidden",v.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],a=document.querySelector(".msgBig"),n=a==null?void 0:a.querySelector(".ms04"),m=a==null?void 0:a.querySelector(".emojiMsg");s.forEach((v,E)=>{const y=v.querySelector(".stepContent"),x=v.querySelector(".timer"),S=80;y&&(e===5?(d.forEach(o),o(a),o(n),o(m)):(d.forEach((q,W)=>{q&&(W<e?o(q):W===e?e===3?(l(q),o(a),o(n),l(m)):(o(q),l(a),l(n),l(m)):l(q))}),a&&(e===3||e===4?(o(a),n&&o(n),m&&(e===3?(l(m),setTimeout(()=>o(m),800)):e===4?(m.style.transition="none",o(m),requestAnimationFrame(()=>{m.style.transition=""})):l(m))):(l(a),l(n),l(m)))),E===e?(v.classList.add("active","noise"),y.style.maxHeight="0px",y.style.opacity="1",y.style.paddingTop="24px",x&&(x.classList.remove("animate-timer"),x.offsetWidth,x.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.style.maxHeight=y.scrollHeight+S+"px"})})):(v.classList.remove("active","noise"),y.style.maxHeight="0px",y.style.opacity="0",y.style.paddingTop="0"))});const c=document.querySelector(".typeWriterLink"),f=c==null?void 0:c.querySelector(".typeWriterWrap"),u=f==null?void 0:f.querySelector(".typeWriter"),b=u==null?void 0:u.querySelector(".realText"),h=u==null?void 0:u.querySelector(".animatedText"),g=f==null?void 0:f.querySelector(".typeWriterIcon");if(u&&b&&h&&g){const v=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=v,e===5?(h.innerHTML=v+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,u.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+v.length+") forwards",setTimeout(()=>{u.classList.remove("typing")},2400)):(h.innerHTML=v,u.classList.remove("typing")),f.classList.remove("help"),e===5?(f.classList.add("help"),c.style.pointerEvents="auto",c.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(c.style.pointerEvents="none",c.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function t(){p=setInterval(()=>{r=(r+1)%s.length,i(r)},5e3)}i(r),t(),s.forEach((e,o)=>{e.addEventListener("click",()=>{clearInterval(p),r=o,i(o),t()})})});document.addEventListener("DOMContentLoaded",()=>{const s=Array.from(document.querySelectorAll("section.archSec .cardIcon")),r=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function o(d){p[e].classList.add("none"),e=(d+p.length)%p.length,p[e].classList.remove("none")}function l(){i.forEach((d,a)=>{const n=s[(a+t)%s.length],m=d.angle>=-125&&d.angle<=-55;n.style.transition=m?"transform 0.6s ease, background-color 0.6s ease":"none",n.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?n.style.backgroundColor="#9B8DFF":d.scale>=.7?n.style.backgroundColor="#cac3ff":n.style.backgroundColor="#e1ddff"})}r[1].addEventListener("click",()=>{t=(t+1)%s.length,o(e+1),l()}),r[0].addEventListener("click",()=>{t=(t-1+s.length)%s.length,o(e-1),l()}),l()});const D={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",function(r){const p=this.getAttribute("href").substring(1),i=document.getElementById(p);if(!i)return;r.preventDefault();const t=D[p]||0,e=i.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const s=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&r(t.target),t.target.classList.contains("rolling-img")&&p(t.target),s.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const t=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let o=0;o<t.length;o++){const l=t[o],d=document.createElement("span");d.dataset.final=l,e.appendChild(d)}i.appendChild(e),s.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{s.observe(i)});function r(i){i.querySelectorAll("span").forEach((e,o)=>{const l=e.dataset.final;if(/\d/.test(l)){const d=document.createElement("div");d.style.transition="transform 2.5s ease",d.style.display="block",d.style.lineHeight="1em";const a=Math.floor(Math.random()*20)+20;for(let m=0;m<a;m++){const c=document.createElement("div");c.textContent=Math.floor(Math.random()*10),d.appendChild(c)}const n=document.createElement("div");n.textContent=l,d.appendChild(n),e.appendChild(d),requestAnimationFrame(()=>{d.style.transform=`translateY(-${a}em)`})}else e.textContent=l,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 1s ease, transform 1s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(i){const t=i.querySelector("span"),e=t.querySelector("img");if(!e)return;const o=e.clientHeight||60,l=6;t.style.transition="transform 2s ease",requestAnimationFrame(()=>{t.style.transform=`translateY(-${o*l}px)`})}});const L=new IntersectionObserver((s,r)=>{s.forEach(p=>{if(p.isIntersecting){const i=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();i.style.offsetDistance="0%",i.style.opacity="0",i.style.transform="scale(0)",i.offsetWidth,i.style.opacity="1",i.style.transform="scale(1) rotate(30deg)",i.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),r.unobserve(p.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});L.observe(document.querySelector(".tgModalWrap"));L.observe(document.querySelector(".tgModalWrap"));
