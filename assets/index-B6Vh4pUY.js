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
      `}},n=document.getElementById("workType"),p=document.getElementById("formWrapType");Object.entries(r).forEach(([a,{label:o}],u)=>{const c=document.createElement("option");c.value=a,c.textContent=o,u===0&&(c.selected=!0),n.appendChild(c)});function i(a){const o=r[a];p.innerHTML=o?o.html:"",t(),s()}n.addEventListener("change",a=>{i(a.target.value)}),i(n.value),console.log("value при запуске:",n.value);function t(){const a=document.getElementById("uploadArea");if(!a)return;const o=a.querySelector("div"),u=a.querySelector("input");a.addEventListener("click",()=>{u.click(),u.onchange=c=>{e(c.target.files,o)}}),a.addEventListener("dragover",c=>{c.preventDefault(),a.classList.add("dragover")}),a.addEventListener("dragleave",c=>{c.preventDefault(),a.classList.remove("dragover")}),a.addEventListener("drop",c=>{c.preventDefault(),a.classList.remove("dragover"),e([...c.dataTransfer.files],o)})}function e(a,o){const u=new FormData,c=Array.from(a);c.forEach((m,y)=>u.append(`file${y+1}`,m)),o.textContent="Загрузка...";const v=new XMLHttpRequest;v.open("POST","https://httpbin.org/post"),v.upload.addEventListener("progress",m=>{const y=m.loaded/m.total;o.textContent=y<1?`${(y*100).toFixed()}%`:"Завершаем..."}),v.onload=()=>{if(v.status===200){const m=c.map(y=>y.name).join(", ");o.textContent=`✅ Загружено: ${m}`}else o.textContent="❌ Ошибка загрузки"},v.onerror=()=>{o.textContent="❌ Сетевая ошибка"},v.send(u)}function s(){const a=document.getElementById("slideNumber"),o=document.getElementById("increase"),u=document.getElementById("decrease");!a||!o||!u||(o.addEventListener("click",()=>{a.value=parseInt(a.value||"0")+1}),u.addEventListener("click",()=>{let c=parseInt(a.value||"0");c>0&&(a.value=c-1)}),a.addEventListener("input",()=>{parseInt(a.value)<0&&(a.value=0)}))}document.getElementById("formUpload");function l(a){return new Promise((o,u)=>{const c=new FileReader;c.onloadend=()=>o(c.result.split(",")[1]),c.onerror=u,c.readAsDataURL(a)})}const d="https://script.google.com/macros/s/AKfycbzv37hBpUE4EWnrTPkmVM8ZmgSAMnIPU20L70qY6HYTk4KjHnRiMZ1i6H74VIsxPmP2nw/exec";document.querySelector("#formUpload").addEventListener("submit",async a=>{var g,f,W,h,x,E,I,q,S;a.preventDefault();const o=a.target,u=document.querySelector("#uploadArea input[type='file']"),c=u==null?void 0:u.files[0];let v="",m="",y="";c&&(v=await l(c),m=c.type,y=c.name);const b=new URLSearchParams;b.append("name",((g=document.getElementById("name"))==null?void 0:g.value)||""),b.append("workType",((f=document.getElementById("workType"))==null?void 0:f.value)||""),b.append("contact",((W=document.getElementById("contact"))==null?void 0:W.value)||""),b.append("topic",((h=document.getElementById("topic"))==null?void 0:h.value)||""),b.append("size",((x=document.getElementById("size"))==null?void 0:x.value)||""),b.append("deadline",((E=document.getElementById("deadline"))==null?void 0:E.value)||""),b.append("structure",((I=document.getElementById("structure"))==null?void 0:I.value)||""),b.append("originality",((q=document.getElementById("originality"))==null?void 0:q.value)||""),b.append("optional",((S=document.getElementById("optional"))==null?void 0:S.value)||""),b.append("file",v),b.append("filename",y),b.append("mimeType",m);try{const L=await(await fetch(d,{method:"POST",body:b})).text();console.log(L);let T;try{T=JSON.parse(L)}catch{alert(`❌ Ответ не в формате JSON:
`+L);return}T.result==="success"?(alert("✅ Форма и файлы отправлены успешно!"),o.reset()):alert("❌ Ошибка на стороне сервера")}catch(A){alert("Ошибка: "+A.message)}})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("nav"),n=r.querySelector(".hover-marker"),p=r.querySelectorAll("li a");let i=null;function t(l){const d=l.getBoundingClientRect(),a=r.getBoundingClientRect();n.style.width=`${d.width}px`,n.style.left=`${d.left-a.left}px`,n.style.opacity=1}p.forEach(l=>{l.addEventListener("mouseenter",()=>{p.forEach(d=>{d.classList.remove("is-hovered","is-dimmed")}),l.classList.add("is-hovered"),i&&i!==l&&i.classList.add("is-dimmed"),t(l)}),l.addEventListener("click",()=>{p.forEach(d=>d.classList.remove("is-active","is-dimmed")),l.classList.add("is-active"),i=l,t(l)})}),r.addEventListener("mouseleave",()=>{p.forEach(l=>{l.classList.remove("is-hovered","is-dimmed")}),i?(i.classList.add("is-active"),t(i)):n.style.opacity=0});const e=document.querySelectorAll("nav ul a"),s=document.querySelector("#formsDiv");window.addEventListener("scroll",()=>{const l=r.offsetHeight,d=r.getBoundingClientRect().top+l/2;let o=Array.from(document.querySelectorAll("section")).find(m=>{const y=m.getBoundingClientRect();return d>=y.top&&d<y.bottom});const u=o==null?void 0:o.classList.contains("purple"),c=50;let v=!1;if(s){const m=s.getBoundingClientRect();v=m.top<=c&&m.bottom>c}e.forEach(m=>{m.classList.toggle("invert-color",v||u)})})});window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(r=>{r.classList.add("animate-logo")})});document.addEventListener("mousemove",r=>{document.querySelectorAll(".logo3D").forEach(p=>{const i=p.getBoundingClientRect(),t=r.clientX-(i.left+i.width/2),e=r.clientY-(i.top+i.height/2),s=-(t*.05),l=-(e*.05),d=p.dataset.base||"";p.style.transform=`${d} translate(${s}px, ${l}px)`})});document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(n=>{const p=n.dataset.base||"";n.style.transform=p})});document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector(".word"),n=["курсовыми","дипломами","домашками"],p=100,i=60,t=2e3;let e=0,s=0,l=!1;function d(){const a=n[e],o=a.substring(0,s);r.textContent=o,l?s>0?(s--,setTimeout(d,i)):(l=!1,e=(e+1)%n.length,setTimeout(d,p)):s<a.length?(s++,setTimeout(d,p)):setTimeout(()=>{l=!0,d()},t)}d()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const p=n.querySelector(".marquee"),i=p.cloneNode(!0),t=n.dataset.direction==="right"?1:-1;t===1?n.insertBefore(i,p):n.appendChild(i);const e=p.offsetWidth,s=1;let l=t===1?-e:0;function d(){l+=t*s,t===-1&&Math.abs(l)>=e&&(l=0),t===1&&l>=0&&(l=-e),n.style.transform=`translateX(${l}px)`,requestAnimationFrame(d)}d()})});const w=document.querySelectorAll(".card");function C(r){w.forEach(n=>{const p=n.getBoundingClientRect(),i=r.clientX-p.left,t=r.clientY-p.top;n.style.setProperty("--x",`${i}px`),n.style.setProperty("--y",`${t}px`)})}function B(r){w.forEach(n=>{if(!(n.dataset.tilt!=="false"))return;const i=n.getBoundingClientRect(),t=i.left+i.width/2,e=i.top+i.height/2,s=r.clientX-t,l=r.clientY-e,d=Math.sqrt(s**2+l**2),a=400;if(d<a){const o=1-d/a,u=-(l/50)*o,c=s/50*o;n.style.transform=`rotateX(${u.toFixed(2)}deg) rotateY(${c.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function R(){w.forEach(r=>{r.dataset.tilt!=="false"&&(r.style.transform="rotateX(0deg) rotateY(0deg)")})}function D(r){C(r),B(r)}window.addEventListener("mousemove",D);window.addEventListener("mouseleave",R);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".step");let n=0,p=null;function i(e){function s(f){!f||f.classList.contains("visible")||(f.style.visibility="visible",f.style.pointerEvents="auto",f.classList.remove("visible"),f.offsetWidth,f.classList.add("visible"))}function l(f){f&&(f.classList.remove("visible"),setTimeout(()=>{f.classList.contains("visible")||(f.style.visibility="hidden",f.style.pointerEvents="none")},400))}const d=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],a=document.querySelector(".msgBig"),o=a==null?void 0:a.querySelector(".ms04"),u=a==null?void 0:a.querySelector(".emojiMsg");r.forEach((f,W)=>{const h=f.querySelector(".stepContent"),x=f.querySelector(".timer"),E=80;h&&(e===5?(d.forEach(s),s(a),s(o),s(u)):(d.forEach((I,q)=>{I&&(q<e?s(I):q===e?e===3?(l(I),s(a),s(o),l(u)):(s(I),l(a),l(o),l(u)):l(I))}),a&&(e===3||e===4?(s(a),o&&s(o),u&&(e===3?(l(u),setTimeout(()=>s(u),800)):e===4?(u.style.transition="none",s(u),requestAnimationFrame(()=>{u.style.transition=""})):l(u))):(l(a),l(o),l(u)))),W===e?(f.classList.add("active","noise"),h.style.maxHeight="0px",h.style.opacity="1",h.style.paddingTop="24px",x&&(x.classList.remove("animate-timer"),x.offsetWidth,x.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{h.style.maxHeight=h.scrollHeight+E+"px"})})):(f.classList.remove("active","noise"),h.style.maxHeight="0px",h.style.opacity="0",h.style.paddingTop="0"))});const c=document.querySelector(".typeWriterLink"),v=c==null?void 0:c.querySelector(".typeWriterWrap"),m=v==null?void 0:v.querySelector(".typeWriter"),y=m==null?void 0:m.querySelector(".realText"),b=m==null?void 0:m.querySelector(".animatedText"),g=v==null?void 0:v.querySelector(".typeWriterIcon");if(m&&y&&b&&g){const f=e===5?"Мне нужна помощь!":"Ввести сообщение...";y.textContent=f,e===5?(b.innerHTML=f+'<span class="blinkingCursor">|</span>',b.style.width="0",b.offsetWidth,m.classList.add("typing"),b.style.animation="typingEffect 2.4s steps("+f.length+") forwards",setTimeout(()=>{m.classList.remove("typing")},2400)):(b.innerHTML=f,m.classList.remove("typing")),v.classList.remove("help"),e===5?(v.classList.add("help"),c.style.pointerEvents="auto",c.setAttribute("aria-disabled","false"),g.src="./sendActive.svg",g.classList.add("animate-icon")):(c.style.pointerEvents="none",c.setAttribute("aria-disabled","true"),g.src="./send.svg",g.classList.remove("animate-icon"))}}function t(){p=setInterval(()=>{n=(n+1)%r.length,i(n)},5e3)}i(n),t(),r.forEach((e,s)=>{e.addEventListener("click",()=>{clearInterval(p),n=s,i(s),t()})})});document.addEventListener("DOMContentLoaded",()=>{const r=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),i=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function s(d){p[e].classList.add("none"),e=(d+p.length)%p.length,p[e].classList.remove("none")}function l(){i.forEach((d,a)=>{const o=r[(a+t)%r.length],u=d.angle>=-125&&d.angle<=-55;o.style.transition=u?"transform 0.6s ease, background-color 0.6s ease":"none",o.style.transform=`rotate(${d.angle}deg) translate(2800px) scale(${d.scale})`,d.scale===1?o.style.backgroundColor="#9B8DFF":d.scale>=.7?o.style.backgroundColor="#cac3ff":o.style.backgroundColor="#e1ddff"})}n[1].addEventListener("click",()=>{t=(t+1)%r.length,s(e+1),l()}),n[0].addEventListener("click",()=>{t=(t-1+r.length)%r.length,s(e-1),l()}),l()});const z={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(r=>{r.addEventListener("click",function(n){const p=this.getAttribute("href").substring(1),i=document.getElementById(p);if(!i)return;n.preventDefault();const t=z[p]||0,e=i.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const r=new IntersectionObserver(i=>{i.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&n(t.target),t.target.classList.contains("rolling-img")&&p(t.target),r.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(i=>{if(i.querySelector("img"))return;const t=i.textContent.trim();i.textContent="";const e=document.createElement("div");e.className="rolling";for(let s=0;s<t.length;s++){const l=t[s],d=document.createElement("span");d.dataset.final=l,e.appendChild(d)}i.appendChild(e),r.observe(e)}),document.querySelectorAll(".rolling-img").forEach(i=>{r.observe(i)});function n(i){i.querySelectorAll("span").forEach(e=>{const s=e.dataset.final;if(/\d/.test(s)){const l=document.createElement("div");l.style.transition="transform 1s ease",l.style.display="block";for(let a=0;a<=9;a++){const o=document.createElement("div");o.textContent=a,l.appendChild(o)}const d=document.createElement("div");d.textContent=s,l.appendChild(d),e.appendChild(l),requestAnimationFrame(()=>{l.style.transform="translateY(-10em)"})}else e.textContent=s,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 0.5s ease, transform 0.5s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(i){const t=i.querySelector("span"),e=t.querySelector("img");if(!e)return;const s=e.clientHeight||60,l=6;requestAnimationFrame(()=>{t.style.transform=`translateY(-${s*l}px)`})}});
