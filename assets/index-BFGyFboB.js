(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function p(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(a){if(a.ep)return;a.ep=!0;const t=p(a);fetch(a.href,t)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");const r={diploma:{label:"Диплом",html:`
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
      `}},o=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(r).forEach(([e,{label:i}],d)=>{const c=document.createElement("option");c.value=e,c.textContent=i,d===0&&(c.selected=!0),o.appendChild(c)});function s(e){const i=r[e];p.innerHTML=i?i.html:"",a(),n()}o.addEventListener("change",e=>{s(e.target.value)}),s(o.value),console.log("value при запуске:",o.value);function a(){const e=document.getElementById("uploadArea");if(!e)return;const i=e.querySelector("div"),d=e.querySelector("input");e.addEventListener("click",()=>{d.click(),d.onchange=c=>{t(c.target.files,i)}}),e.addEventListener("dragover",c=>{c.preventDefault(),e.classList.add("dragover")}),e.addEventListener("dragleave",c=>{c.preventDefault(),e.classList.remove("dragover")}),e.addEventListener("drop",c=>{c.preventDefault(),e.classList.remove("dragover"),t([...c.dataTransfer.files],i)})}function t(e,i){const d=new FormData,c=Array.from(e);c.forEach((v,u)=>d.append(`file${u+1}`,v)),i.textContent="Загрузка...";const f=new XMLHttpRequest;f.open("POST","https://httpbin.org/post"),f.upload.addEventListener("progress",v=>{const u=v.loaded/v.total;i.textContent=u<1?`${(u*100).toFixed()}%`:"Завершаем..."}),f.onload=()=>{if(f.status===200){const v=c.map(u=>u.name).join(", ");i.textContent=`✅ Загружено: ${v}`}else i.textContent="❌ Ошибка загрузки"},f.onerror=()=>{i.textContent="❌ Сетевая ошибка"},f.send(d)}function n(){const e=document.getElementById("slideNumber"),i=document.getElementById("increase"),d=document.getElementById("decrease");!e||!i||!d||(i.addEventListener("click",()=>{e.value=parseInt(e.value||"0")+1}),d.addEventListener("click",()=>{let c=parseInt(e.value||"0");c>0&&(e.value=c-1)}),e.addEventListener("input",()=>{parseInt(e.value)<0&&(e.value=0)}))}const l=document.getElementById("formUpload");l.addEventListener("submit",async e=>{var c,f,v,u,g,y,h,m,q;e.preventDefault();const i=new FormData;i.append("name",(c=document.getElementById("name"))==null?void 0:c.value),i.append("workType",(f=document.getElementById("workType"))==null?void 0:f.value),i.append("contact",(v=document.getElementById("contact"))==null?void 0:v.value),i.append("topic",(u=document.getElementById("topic"))==null?void 0:u.value),i.append("size",(g=document.getElementById("size"))==null?void 0:g.value),i.append("deadline",(y=document.getElementById("deadline"))==null?void 0:y.value),i.append("structure",(h=document.getElementById("structure"))==null?void 0:h.value),i.append("originality",(m=document.getElementById("originality"))==null?void 0:m.value),i.append("optional",(q=document.getElementById("optional"))==null?void 0:q.value);const d=document.querySelector("#uploadArea input[type='file']");if(d&&d.files.length>0)for(let b=0;b<d.files.length;b++)i.append("file"+b,d.files[b],d.files[b].name);try{(await(await fetch("https://corsproxy.io/?"+encodeURIComponent("https://script.google.com/macros/s/AKfycbxTAnBNovBSIokf2P0L3kPUf8R6Xo_9McAReDUVo5hDxvsJRbNDsgWQp2JtPjYI2G74nw/exec"),{method:"POST",mode:"no-cors",body:i})).json()).result==="success"?(alert("Форма и файлы отправлены успешно!"),l.reset(),s(document.getElementById("workType").value)):alert("Ошибка отправки формы.")}catch(b){alert("Ошибка соединения: "+b.message)}})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("nav"),o=r.querySelector(".hover-marker"),p=r.querySelectorAll("li a");let s=null;function a(l){const e=l.getBoundingClientRect(),i=r.getBoundingClientRect();o.style.width=`${e.width}px`,o.style.left=`${e.left-i.left}px`,o.style.opacity=1}p.forEach(l=>{l.addEventListener("mouseenter",()=>{p.forEach(e=>{e.classList.remove("is-hovered","is-dimmed")}),l.classList.add("is-hovered"),s&&s!==l&&s.classList.add("is-dimmed"),a(l)}),l.addEventListener("click",()=>{p.forEach(e=>e.classList.remove("is-active","is-dimmed")),l.classList.add("is-active"),s=l,a(l)})}),r.addEventListener("mouseleave",()=>{p.forEach(l=>{l.classList.remove("is-hovered","is-dimmed")}),s?(s.classList.add("is-active"),a(s)):o.style.opacity=0});const t=document.querySelectorAll("nav ul a"),n=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const l=r.offsetHeight,e=r.getBoundingClientRect().top+l/2;let d=Array.from(document.querySelectorAll("section")).find(u=>{const g=u.getBoundingClientRect();return e>=g.top&&e<g.bottom});const c=d==null?void 0:d.classList.contains("purple"),f=50;let v=!1;if(n){const u=n.getBoundingClientRect();v=u.top<=f&&u.bottom>f}t.forEach(u=>{u.classList.toggle("invert-color",v||c)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(r=>{r.classList.add("animate-logo")})});document.addEventListener("mousemove",r=>{document.querySelectorAll(".logo3D").forEach(p=>{const s=p.getBoundingClientRect(),a=r.clientX-(s.left+s.width/2),t=r.clientY-(s.top+s.height/2),n=-(a*.05),l=-(t*.05),e=p.dataset.base||"";p.style.transform=`${e} translate(${n}px, ${l}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(o=>{const p=o.dataset.base||"";o.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".word"),o=["курсовыми","дипломами","домашками"],p=100,s=60,a=2e3;let t=0,n=0,l=!1;function e(){const i=o[t],d=i.substring(0,n);r.textContent=d,l?n>0?(n--,setTimeout(e,s)):(l=!1,t=(t+1)%o.length,setTimeout(e,p)):n<i.length?(n++,setTimeout(e,p)):setTimeout(()=>{l=!0,e()},a)}e()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(o=>{const p=o.querySelector(".marquee"),s=p.cloneNode(!0),a=o.dataset.direction==="right"?1:-1;a===1?o.insertBefore(s,p):o.appendChild(s);const t=p.offsetWidth,n=1;let l=a===1?-t:0;function e(){l+=a*n,a===-1&&Math.abs(l)>=t&&(l=0),a===1&&l>=0&&(l=-t),o.style.transform=`translateX(${l}px)`,requestAnimationFrame(e)}e()})});const W=document.querySelectorAll(".card");function w(r){W.forEach(o=>{const p=o.getBoundingClientRect(),s=r.clientX-p.left,a=r.clientY-p.top;o.style.setProperty("--x",`${s}px`),o.style.setProperty("--y",`${a}px`)})}function S(r){W.forEach(o=>{if(!(o.dataset.tilt!=="false"))return;const s=o.getBoundingClientRect(),a=s.left+s.width/2,t=s.top+s.height/2,n=r.clientX-a,l=r.clientY-t,e=Math.sqrt(n**2+l**2),i=400;if(e<i){const d=1-e/i,c=-(l/50)*d,f=n/50*d;o.style.transform=`rotateX(${c.toFixed(2)}deg) rotateY(${f.toFixed(2)}deg)`}else o.style.transform="rotateX(0deg) rotateY(0deg)"})}function A(){W.forEach(r=>{r.dataset.tilt!=="false"&&(r.style.transform="rotateX(0deg) rotateY(0deg)")})}function C(r){w(r),S(r)}window.addEventListener("mousemove",C);window.addEventListener("mouseleave",A);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".step");let o=0,p=null;function s(t){function n(m){!m||m.classList.contains("visible")||(m.style.visibility="visible",m.style.pointerEvents="auto",m.classList.remove("visible"),m.offsetWidth,m.classList.add("visible"))}function l(m){m&&(m.classList.remove("visible"),setTimeout(()=>{m.classList.contains("visible")||(m.style.visibility="hidden",m.style.pointerEvents="none")},400))}const e=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],i=document.querySelector(".msgBig"),d=i==null?void 0:i.querySelector(".ms04"),c=i==null?void 0:i.querySelector(".emojiMsg");r.forEach((m,q)=>{const b=m.querySelector(".stepContent"),x=m.querySelector(".timer"),E=80;b&&(t===5?(e.forEach(n),n(i),n(d),n(c)):(e.forEach((I,L)=>{I&&(L<t?n(I):L===t?t===3?(l(I),n(i),n(d),l(c)):(n(I),l(i),l(d),l(c)):l(I))}),i&&(t===3||t===4?(n(i),d&&n(d),c&&(t===3?(l(c),setTimeout(()=>n(c),800)):t===4?(c.style.transition="none",n(c),requestAnimationFrame(()=>{c.style.transition=""})):l(c))):(l(i),l(d),l(c)))),q===t?(m.classList.add("active","noise"),b.style.maxHeight="0px",b.style.opacity="1",b.style.paddingTop="24px",x&&(x.classList.remove("animate-timer"),x.offsetWidth,x.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{b.style.maxHeight=b.scrollHeight+E+"px"})})):(m.classList.remove("active","noise"),b.style.maxHeight="0px",b.style.opacity="0",b.style.paddingTop="0"))});const f=document.querySelector(".typeWriterLink"),v=f==null?void 0:f.querySelector(".typeWriterWrap"),u=v==null?void 0:v.querySelector(".typeWriter"),g=u==null?void 0:u.querySelector(".realText"),y=u==null?void 0:u.querySelector(".animatedText"),h=v==null?void 0:v.querySelector(".typeWriterIcon");if(u&&g&&y&&h){const m=t===5?"Мне нужна помощь!":"Ввести сообщение...";g.textContent=m,t===5?(y.innerHTML=m+'<span class="blinkingCursor">|</span>',y.style.width="0",y.offsetWidth,u.classList.add("typing"),y.style.animation="typingEffect 2.4s steps("+m.length+") forwards",setTimeout(()=>{u.classList.remove("typing")},2400)):(y.innerHTML=m,u.classList.remove("typing")),v.classList.remove("help"),t===5?(v.classList.add("help"),f.style.pointerEvents="auto",f.setAttribute("aria-disabled","false"),h.src="./sendActive.svg",h.classList.add("animate-icon")):(f.style.pointerEvents="none",f.setAttribute("aria-disabled","true"),h.src="./send.svg",h.classList.remove("animate-icon"))}}function a(){p=setInterval(()=>{o=(o+1)%r.length,s(o)},5e3)}s(o),a(),r.forEach((t,n)=>{t.addEventListener("click",()=>{clearInterval(p),o=n,s(n),a()})})});document.addEventListener("DOMContentLoaded",()=>{const r=Array.from(document.querySelectorAll("section.archSec .cardIcon")),o=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),s=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let a=0,t=0;function n(e){p[t].classList.add("none"),t=(e+p.length)%p.length,p[t].classList.remove("none")}function l(){s.forEach((e,i)=>{const d=r[(i+a)%r.length],c=e.angle>=-125&&e.angle<=-55;d.style.transition=c?"transform 0.6s ease, background-color 0.6s ease":"none",d.style.transform=`rotate(${e.angle}deg) translate(2800px) scale(${e.scale})`,e.scale===1?d.style.backgroundColor="#9B8DFF":e.scale>=.7?d.style.backgroundColor="#cac3ff":d.style.backgroundColor="#e1ddff"})}o[1].addEventListener("click",()=>{a=(a+1)%r.length,n(t+1),l()}),o[0].addEventListener("click",()=>{a=(a-1+r.length)%r.length,n(t-1),l()}),l()});const T={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(o){const p=this.getAttribute("href").substring(1),s=document.getElementById(p);if(!s)return;o.preventDefault();const a=T[p]||0,t=s.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:t,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const r=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("rolling")&&o(a.target),a.target.classList.contains("rolling-img")&&p(a.target),r.unobserve(a.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(s=>{if(s.querySelector("img"))return;const a=s.textContent.trim();s.textContent="";const t=document.createElement("div");t.className="rolling";for(let n=0;n<a.length;n++){const l=a[n],e=document.createElement("span");e.dataset.final=l,t.appendChild(e)}s.appendChild(t),r.observe(t)}),document.querySelectorAll(".rolling-img").forEach(s=>{r.observe(s)});function o(s){s.querySelectorAll("span").forEach(t=>{const n=t.dataset.final;if(/\d/.test(n)){const l=document.createElement("div");l.style.transition="transform 1s ease",l.style.display="block";for(let i=0;i<=9;i++){const d=document.createElement("div");d.textContent=i,l.appendChild(d)}const e=document.createElement("div");e.textContent=n,l.appendChild(e),t.appendChild(l),requestAnimationFrame(()=>{l.style.transform="translateY(-10em)"})}else t.textContent=n,t.style.opacity=0,t.style.transform="scale(0.8)",t.style.display="inline-block",t.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{t.style.opacity=1,t.style.transform="scale(1)"})})}function p(s){const a=s.querySelector("span"),t=a.querySelector("img");if(!t)return;const n=t.clientHeight||60,l=6;requestAnimationFrame(()=>{a.style.transform=`translateY(-${n*l}px)`})}});
