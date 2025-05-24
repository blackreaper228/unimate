(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const r={Диплом:{label:"Диплом",html:`
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
      `}},s=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(r).forEach(([i,{label:o}],m)=>{const c=document.createElement("option");c.value=i,c.textContent=o,m===0&&(c.selected=!0),s.appendChild(c)});function l(i){const o=r[i];p.innerHTML=o?o.html:"",t(),n()}s.addEventListener("change",i=>{l(i.target.value)}),l(s.value),console.log("value при запуске:",s.value);function t(){const i=document.getElementById("uploadArea");if(!i)return;const o=i.querySelector("div"),m=i.querySelector("input");i.addEventListener("click",()=>{m.click(),m.onchange=c=>{e(c.target.files,o)}}),i.addEventListener("dragover",c=>{c.preventDefault(),i.classList.add("dragover")}),i.addEventListener("dragleave",c=>{c.preventDefault(),i.classList.remove("dragover")}),i.addEventListener("drop",c=>{c.preventDefault(),i.classList.remove("dragover"),e([...c.dataTransfer.files],o)})}function e(i,o){const m=new FormData,c=Array.from(i);c.forEach((u,b)=>m.append(`file${b+1}`,u)),o.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",u=>{const b=u.loaded/u.total;o.textContent=b<1?`${(b*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const u=c.map(b=>b.name).join(", ");o.textContent=`✅ Загружено: ${u}`}else o.textContent="❌ Ошибка загрузки"},v.onerror=()=>{o.textContent="❌ Сетевая ошибка"},v.send(m)}function n(){const i=document.getElementById("slideNumber"),o=document.getElementById("increase"),m=document.getElementById("decrease");!i||!o||!m||(o.addEventListener("click",()=>{i.value=parseInt(i.value||"0")+1}),m.addEventListener("click",()=>{let c=parseInt(i.value||"0");c>0&&(i.value=c-1)}),i.addEventListener("input",()=>{parseInt(i.value)<0&&(i.value=0)}))}const a=document.getElementById("formUpload");a.addEventListener("submit",async i=>{var v;i.preventDefault();const o=new URLSearchParams;a.querySelectorAll("input, textarea, select").forEach(u=>{(u.type==="radio"||u.type==="checkbox")&&!u.checked||(u.name||u.id)&&o.append(u.name||u.id,u.value)});const m=a.querySelectorAll("input[type='file']");let c=1;for(const u of m)for(const b of u.files){const h=await d(b);o.append(`file${c}`,h),o.append(`filename${c}`,b.name),o.append(`mimeType${c}`,b.type),c++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbwoXi3exInjtskLo8Y7i_BqSB5nAXYTmz8iAPvatWxWtUC36IsTQ03sBOesVo9Qg0QFEw/exec",{method:"POST",body:o}).then(()=>{var u;alert("✅ Успешно отправлено!"),(u=document.querySelector(".loader"))==null||u.classList.remove("active")}).catch(()=>{var u;alert("❌ Ошибка при отправке"),(u=document.querySelector(".loader"))==null||u.classList.remove("active")})});function d(i){return new Promise((o,m)=>{const c=new FileReader;c.onloadend=()=>o(c.result.split(",")[1]),c.onerror=m,c.readAsDataURL(i)})}});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("nav"),s=r.querySelector(".hover-marker"),p=r.querySelectorAll("li a");let l=null;function t(a){const d=a.getBoundingClientRect(),i=r.getBoundingClientRect();s.style.width=`${d.width}px`,s.style.left=`${d.left-i.left}px`,s.style.opacity=1}p.forEach(a=>{a.addEventListener("mouseenter",()=>{p.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),a.classList.add("is-hovered"),l&&l!==a&&l.classList.add("is-dimmed"),t(a)}),a.addEventListener("click",()=>{p.forEach(d=>d.classList.remove("is-active","is-dimmed")),a.classList.add("is-active"),l=a,t(a)})}),r.addEventListener("mouseleave",()=>{p.forEach(a=>{a.classList.remove("is-hovered","is-dimmed")}),l?(l.classList.add("is-active"),t(l)):s.style.opacity=0});const e=document.querySelectorAll("nav ul a"),n=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const a=r.offsetHeight,d=r.getBoundingClientRect().top+a/2;let o=Array.from(document.querySelectorAll("section")).find(u=>{const b=u.getBoundingClientRect();return d>=b.top&&d<b.bottom});const m=o==null?void 0:o.classList.contains("purple"),c=50;let v=!1;if(n){const u=n.getBoundingClientRect();v=u.top<=c&&u.bottom>c}e.forEach(u=>{u.classList.toggle("invert-color",v||m)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(r=>{r.classList.add("animate-logo")})});document.addEventListener("mousemove",r=>{document.querySelectorAll(".logo3D").forEach(p=>{const l=p.getBoundingClientRect(),t=r.clientX-(l.left+l.width/2),e=r.clientY-(l.top+l.height/2),n=-(t*.05),a=-(e*.05),d=p.dataset.base||"";p.style.transform=`${d} translate(${n}px, ${a}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(s=>{const p=s.dataset.base||"";s.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".word"),s=["курсовыми","дипломами","домашками"],p=100,l=60,t=2e3;let e=0,n=0,a=!1;function d(){const i=s[e],o=i.substring(0,n);r.textContent=o,a?n>0?(n--,setTimeout(d,l)):(a=!1,e=(e+1)%s.length,setTimeout(d,p)):n<i.length?(n++,setTimeout(d,p)):setTimeout(()=>{a=!0,d()},t)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(s=>{const p=s.querySelector(".marquee"),l=p.cloneNode(!0),t=s.dataset.direction==="right"?1:-1;t===1?s.insertBefore(l,p):s.appendChild(l);const e=p.offsetWidth,n=1;let a=t===1?-e:0;function d(){a+=t*n,t===-1&&Math.abs(a)>=e&&(a=0),t===1&&a>=0&&(a=-e),s.style.transform=`translateX(${a}px)`,requestAnimationFrame(d)}d()})});const I=document.querySelectorAll(".card");function w(r){I.forEach(s=>{const p=s.getBoundingClientRect(),l=r.clientX-p.left,t=r.clientY-p.top;s.style.setProperty("--x",`${l}px`),s.style.setProperty("--y",`${t}px`)})}function A(r){I.forEach(s=>{if(!(s.dataset.tilt!=="false"))return;const l=s.getBoundingClientRect(),t=l.left+l.width/2,e=l.top+l.height/2,n=r.clientX-t,a=r.clientY-e,d=Math.sqrt(n**2+a**2),i=400;if(d<i){const o=1-d/i,m=-(a/50)*o,c=n/50*o;s.style.transform=`rotateX(${m.toFixed(2)}deg) rotateY(${c.toFixed(2)}deg)`}else s.style.transform="rotateX(0deg) rotateY(0deg)"})}function C(){I.forEach(r=>{r.dataset.tilt!=="false"&&(r.style.transform="rotateX(0deg) rotateY(0deg)")})}function T(r){w(r),A(r)}window.addEventListener("mousemove",T);window.addEventListener("mouseleave",C);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".step");let s=0,p=null;function l(e){function n(f){!f||f.classList.contains("visible")||(f.style.visibility="visible",f.style.pointerEvents="auto",f.classList.remove("visible"),f.offsetWidth,f.classList.add("visible"))}function a(f){f&&(f.classList.remove("visible"),setTimeout(()=>{f.classList.contains("visible")||(f.style.visibility="hidden",f.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],i=document.querySelector(".msgBig"),o=i==null?void 0:i.querySelector(".ms04"),m=i==null?void 0:i.querySelector(".emojiMsg");r.forEach((f,E)=>{const y=f.querySelector(".stepContent"),q=f.querySelector(".timer"),S=80;y&&(e===5?(d.forEach(n),n(i),n(o),n(m)):(d.forEach((x,W)=>{x&&(W<e?n(x):W===e?e===3?(a(x),n(i),n(o),a(m)):(n(x),a(i),a(o),a(m)):a(x))}),i&&(e===3||e===4?(n(i),o&&n(o),m&&(e===3?(a(m),setTimeout(()=>n(m),800)):e===4?(m.style.transition="none",n(m),requestAnimationFrame(()=>{m.style.transition=""})):a(m))):(a(i),a(o),a(m)))),E===e?(f.classList.add("active","noise"),y.style.maxHeight="0px",y.style.opacity="1",y.style.paddingTop="24px",q&&(q.classList.remove("animate-timer"),q.offsetWidth,q.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{y.style.maxHeight=y.scrollHeight+S+"px"})})):(f.classList.remove("active","noise"),y.style.maxHeight="0px",y.style.opacity="0",y.style.paddingTop="0"))});const c=document.querySelector(".typeWriterLink"),v=c==null?void 0:c.querySelector(".typeWriterWrap"),u=v==null?void 0:v.querySelector(".typeWriter"),b=u==null?void 0:u.querySelector(".realText"),h=u==null?void 0:u.querySelector(".animatedText"),g=v==null?void 0:v.querySelector(".typeWriterIcon");if(u&&b&&h&&g){const f=e===5?"Мне нужна помощь!":"Ввести сообщение...";b.textContent=f,e===5?(h.innerHTML=f+'<span class="blinkingCursor">|</span>',h.style.width="0",h.offsetWidth,u.classList.add("typing"),h.style.animation="typingEffect 2.4s steps("+f.length+") forwards",setTimeout(()=>{u.classList.remove("typing")},2400)):(h.innerHTML=f,u.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),c.style.pointerEvents="auto",c.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(c.style.pointerEvents="none",c.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function t(){p=setInterval(()=>{s=(s+1)%r.length,l(s)},5e3)}l(s),t(),r.forEach((e,n)=>{e.addEventListener("click",()=>{clearInterval(p),s=n,l(n),t()})})});document.addEventListener("DOMContentLoaded",()=>{const r=Array.from(document.querySelectorAll("section.archSec .cardIcon")),s=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),l=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function n(d){p[e].classList.add("none"),e=(d+p.length)%p.length,p[e].classList.remove("none")}function a(){l.forEach((d,i)=>{const o=r[(i+t)%r.length],m=d.angle>=-125&&d.angle<=-55;o.style.transition=m?"transform 0.6s ease, background-color 0.6s ease":"none",o.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?o.style.backgroundColor="#9B8DFF":d.scale>=.7?o.style.backgroundColor="#cac3ff":o.style.backgroundColor="#e1ddff"})}s[1].addEventListener("click",()=>{t=(t+1)%r.length,n(e+1),a()}),s[0].addEventListener("click",()=>{t=(t-1+r.length)%r.length,n(e-1),a()}),a()});const D={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(s){const p=this.getAttribute("href").substring(1),l=document.getElementById(p);if(!l)return;s.preventDefault();const t=D[p]||0,e=l.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const r=new IntersectionObserver(l=>{l.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&s(t.target),t.target.classList.contains("rolling-img")&&p(t.target),r.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(l=>{if(l.querySelector("img"))return;const t=l.textContent.trim();l.textContent="";const e=document.createElement("div");e.className="rolling";for(let n=0;n<t.length;n++){const a=t[n],d=document.createElement("span");d.dataset.final=a,e.appendChild(d)}l.appendChild(e),r.observe(e)}),document.querySelectorAll(".rolling-img").forEach(l=>{r.observe(l)});function s(l){l.querySelectorAll("span").forEach(e=>{const n=e.dataset.final;if(/\d/.test(n)){const a=document.createElement("div");a.style.transition="transform 1s ease",a.style.display="block";for(let i=0;i<=9;i++){const o=document.createElement("div");o.textContent=i,a.appendChild(o)}const d=document.createElement("div");d.textContent=n,a.appendChild(d),e.appendChild(a),requestAnimationFrame(()=>{a.style.transform="translateY(-10em)"})}else e.textContent=n,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(l){const t=l.querySelector("span"),e=t.querySelector("img");if(!e)return;const n=e.clientHeight||60,a=6;requestAnimationFrame(()=>{t.style.transform=`translateY(-${n*a}px)`})}});const L=new IntersectionObserver((r,s)=>{r.forEach(p=>{if(p.isIntersecting){const l=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();l.style.offsetDistance="0%",l.style.opacity="0",l.style.transform="scale(0)",l.offsetWidth,l.style.opacity="1",l.style.transform="scale(1) rotate(30deg)",l.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),s.unobserve(p.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});L.observe(document.querySelector(".tgModalWrap"));L.observe(document.querySelector(".tgModalWrap"));
