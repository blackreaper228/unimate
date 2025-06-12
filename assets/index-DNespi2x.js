(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function p(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=p(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",()=>{console.log("🔥 JS подключён");let l=[];const n={Курсовая:{label:"Курсовая",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input required type="text" id="topic" placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input required id="size" type="text" placeholder="10000 слов / 25-30 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input required class="date-time" type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea required id="structure" placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы и план к работе, если они имеются</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},Диплом:{label:"Диплом",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="20000 слов / 55-60 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы и план к работе, если они имеются</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},Магистерская_диссертация:{label:"Магистерская диссертация",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="25000 слов / 70-100 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
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
            <input id="size" required type="text" placeholder="5500 слов / 15-20 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы к работе, если они имеются</label>
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
              <label for="optional">Дополнительные пожелания:</label>
              <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы к работе, если они имеются</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
        
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
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
            <input id="size" required type="text" placeholder="1300 слов / 3-5 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Нет требований по оригинальности / 70% (с учетом цитирования)" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы к работе, если они имеются</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},Контрольная_работа:{label:"Контрольная работа",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Количество заданий<span>*</span></label>
            <input required id="size" type="text" placeholder="5 заданий" />
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
          <label for="optional">Дополнительные пожелания:</label>
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
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы к работе, если они имеются</label>
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
            <input required id="size" type="text" placeholder="5 заданий" />
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
          <label for="optional">Дополнительные пожелания:</label>
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
      `},Зачёт:{label:"Зачёт",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Количество заданий<span>*</span></label>
            <input required id="size" type="text" placeholder="5 заданий" />
          </div>
          <div class="formInputWrap">
            <label for="time">Длительность работы*<span>*</span></label>
            <input required id="time" type="text" placeholder="1,5 часа" />
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
          <label for="optional">Дополнительные пожелания:</label>
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
      `},РАР:{label:"РАР (Расчетно-аналитическая работа)",html:`
        <div class="formInputWrap">
          <label for="topic">Тема работы<span>*</span></label>
          <input type="text" id="topic" required placeholder="Права женщин в эпоху индустриализации" />
        </div>
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="3000 слов / 10-15 страниц" />
          </div>
          <div class="formInputWrap">
            <label for="deadline">Дедлайн<span>*</span></label>
            <input class="date-time" required type="datetime-local" id="deadline" name="deadline" />
          </div>
        </div>
        <div class="formInputWrap">
          <label for="structure">Структура работы (количество глав и т.д.)<span>*</span></label>
          <textarea id="structure" required placeholder="3 главы по 15 страниц, введение и заключение"></textarea>
        </div>
        <div class="formInputWrap">
          <label for="originality">Оригинальность (уточните, входит ли цитирование в оригинальность)<span>*</span></label>
          <input required id="originality" type="text" placeholder="Не важна / 70%" />
        </div>
        <div class="formInputWrap">
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы к работе, если они имеются</label>
          <div class="upload" id="uploadArea">
            <input type="file" multiple />
            <img src="/uploadIcon.svg" alt="Иконка загрузки" />
            <div>Перетащите файл(ы) сюда или нажмите, чтобы загрузить</div>
          </div>
        </div>
      `},Билеты_к_экзамену:{label:"Билеты к экзамену",html:`
        <div class="fromsWrapRow">
          <div class="formInputWrap">
            <label for="size">Объём работы<span>*</span></label>
            <input id="size" required type="text" placeholder="1-2 страницы на билет" />
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
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
        </div>
        <div class="formInputWrap">
          <label>Не забудьте прикрепить материалы и источники к работе, если они имеются</label>
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
          <label for="optional">Дополнительные пожелания:</label>
          <textarea id="optional" placeholder="Материалы, источники..."></textarea>
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
          <label for="optional">Дополнительные пожелания</label>
          <textarea id="optional" placeholder="Напишите пожелания по формату занятий, знаниям репетитора или темам, которые нужно разобрать"></textarea>
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
      `}},p=document.getElementById("workType"),o=document.getElementById("formWrapType");Object.entries(n).forEach(([a,{label:s}],c)=>{const v=document.createElement("option");v.value=a,v.textContent=s,c===0&&(v.selected=!0),p.appendChild(v)});function t(a){const s=n[a];o.innerHTML=s?s.html:"",l=[],e(),h()}p.addEventListener("change",a=>{t(a.target.value)}),t(p.value),console.log("value при запуске:",p.value);function e(){const a=document.getElementById("uploadArea");if(!a)return;const s=a.querySelector("div"),c=a.querySelector("input");let v=a.parentNode.querySelector(".files-list");v||(v=document.createElement("div"),v.className="files-list",v.style.marginTop="10px",a.parentNode.appendChild(v)),a.addEventListener("click",()=>{c.click(),c.onchange=r=>{d([...r.target.files],s,v),c.value=""}}),a.addEventListener("dragover",r=>{r.preventDefault(),a.classList.add("dragover")}),a.addEventListener("dragleave",r=>{r.preventDefault(),a.classList.remove("dragover")}),a.addEventListener("drop",r=>{r.preventDefault(),a.classList.remove("dragover"),d([...r.dataTransfer.files],s,v)})}function d(a,s,c){l=[...l,...a],s.textContent="Загрузка...",setTimeout(()=>{const v=a.map(r=>r.name).join(", ");s.textContent=`✅ Добавлено: ${v}`,u(c),setTimeout(()=>{l.length>0?s.textContent=`Загружено файлов: ${l.length}. Можете добавить ещё.`:s.textContent="Перетащите файл(ы) сюда или нажмите, чтобы загрузить"},2e3)},500)}function u(a){if(a.innerHTML="",l.length===0)return;const s=document.createElement("p");s.textContent="Загруженные файлы:",s.style.fontWeight="600",s.style.lineHeight="130%",s.style.fontFamily="Manrope",s.style.color="var(--white)",s.style.marginBottom="5px",a.appendChild(s),l.forEach((c,v)=>{const r=document.createElement("div");r.style.display="flex",r.style.justifyContent="space-between",r.style.alignItems="center",r.style.padding="5px",r.style.margin="2px 0",r.style.backgroundColor="rgba(255, 255, 255, 0.1)",r.style.borderRadius="4px";const y=document.createElement("p");y.textContent=c.name,y.style.flex="1",y.style.margin="0",y.style.fontWeight="600",y.style.lineHeight="130%",y.style.fontFamily="Manrope",y.style.color="var(--white)";const i=document.createElement("button");i.textContent="×",i.type="button",i.style.background="var(--purplePlateBG)",i.style.color="white",i.style.border="none",i.style.borderRadius="4px",i.style.width="20px",i.style.height="20px",i.style.minWidth="20px",i.style.maxWidth="20px",i.style.flexShrink="0",i.style.flexGrow="0",i.style.cursor="pointer",i.style.fontSize="14px",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.padding="0",i.addEventListener("click",()=>{m(v,a)}),r.appendChild(y),r.appendChild(i),a.appendChild(r)})}function m(a,s){l.splice(a,1),u(s);const c=document.querySelector("#uploadArea div");c&&(l.length>0?c.textContent=`Загружено файлов: ${l.length}. Можете добавить ещё.`:c.textContent="Перетащите файл(ы) сюда или нажмите, чтобы загрузить")}function h(){const a=document.getElementById("slideNumber"),s=document.getElementById("increase"),c=document.getElementById("decrease");!a||!s||!c||(s.addEventListener("click",()=>{a.value=parseInt(a.value||"0")+1}),c.addEventListener("click",()=>{let v=parseInt(a.value||"0");v>0&&(a.value=v-1)}),a.addEventListener("input",()=>{parseInt(a.value)<0&&(a.value=0)}))}const b=document.getElementById("formUpload");b.addEventListener("submit",async a=>{var v;a.preventDefault();const s=new URLSearchParams;b.querySelectorAll('input:not([type="file"]), textarea, select').forEach(r=>{(r.type==="radio"||r.type==="checkbox")&&!r.checked||(r.name||r.id)&&s.append(r.name||r.id,r.value)});let c=1;for(const r of l){const y=await f(r);s.append(`file${c}`,y),s.append(`filename${c}`,r.name),s.append(`mimeType${c}`,r.type),c++}(v=document.querySelector(".loader"))==null||v.classList.add("active"),fetch("https://script.google.com/macros/s/AKfycbxcN9Uijcx5n2Uu_k9OptbTXCk3BqXYiKS8lfJrCNoOYuLX90Kfg2ykylK-XPZEDYQf/exec",{method:"POST",body:s}).then(()=>{var i;alert("✅ Успешно отправлено!"),(i=document.querySelector(".loader"))==null||i.classList.remove("active"),l=[];const r=document.querySelector(".files-list");r&&(r.innerHTML="");const y=document.querySelector("#uploadArea div");y&&(y.textContent="Перетащите файл(ы) сюда или нажмите, чтобы загрузить")}).catch(()=>{var r;alert("❌ Ошибка при отправке"),(r=document.querySelector(".loader"))==null||r.classList.remove("active")})});function f(a){return new Promise((s,c)=>{const v=new FileReader;v.onloadend=()=>s(v.result.split(",")[1]),v.onerror=c,v.readAsDataURL(a)})}});document.addEventListener("DOMContentLoaded",()=>{let l=!1,n=!1;const p=document.querySelector("nav"),o=p.querySelector(".hover-marker"),t=document.querySelectorAll("li a");let e=null;function d(f){const a=f.getBoundingClientRect(),s=p.getBoundingClientRect();o.style.width=`${a.width}px`,o.style.left=`${a.left-s.left}px`,o.style.opacity=1,t.forEach(c=>c.classList.remove("marker-visible")),f.classList.add("marker-visible")}t.forEach(f=>{f.addEventListener("mouseenter",()=>{n||(t.forEach(a=>{a.classList.remove("is-hovered","is-dimmed","marker-visible")}),f.classList.add("is-hovered"),e&&e!==f&&e.classList.add("is-dimmed"),d(f))})}),p.addEventListener("mouseleave",()=>{n||(t.forEach(f=>f.classList.remove("is-hovered","is-dimmed")),e?(e.classList.add("is-active"),d(e)):o.style.opacity=0)});const u=document.querySelectorAll("nav ul a"),m=document.querySelector("#formsDiv");function h(){const f=p.offsetHeight,a=p.getBoundingClientRect().top+f/2;let c=Array.from(document.querySelectorAll("section")).find(i=>{const I=i.getBoundingClientRect();return a>=I.top&&a<I.bottom});const v=c==null?void 0:c.classList.contains("purple"),r=50;let y=!1;if(m){const i=m.getBoundingClientRect();y=i.top<=r&&i.bottom>r}u.forEach(i=>{i.classList.contains("marker-visible")||i.classList.toggle("invert-color",y||v)})}function b(){const f=window.innerHeight/2,a=Array.from(document.querySelectorAll("[id]"));let s=null;for(const c of a){const v=c.getBoundingClientRect();if(v.top<=f&&v.bottom>=f){s=c.id;break}}if(s){const c=Array.from(t).find(v=>v.getAttribute("href")===`#${s}`);c&&(t.forEach(v=>v.classList.remove("is-active","is-hovered","is-dimmed")),c.classList.add("is-active"),e=c,l||d(c))}}window.addEventListener("scroll",()=>{h(),b()}),t.forEach(f=>{const a=f.getAttribute("href");if(a.startsWith("#")&&a.length>1){const s=document.querySelector(a);s&&f.addEventListener("click",c=>{c.preventDefault(),n=!0,l=!0;const v=s.getBoundingClientRect();let y=v.top+v.height/2+window.scrollY-window.innerHeight/2;switch(a){case"#howSec":y-=150;break;case"#servicesBlock":y-=70;break;case"#review":y-=250;break;case"#forms":y-=350;break;case"#results":y+=100;break}window.scrollTo({top:y,behavior:"smooth"}),t.forEach(i=>i.classList.remove("is-active","is-hovered","is-dimmed")),f.classList.add("is-active"),e=f,setTimeout(()=>{n=!1,l=!1,d(f)},600)})}}),setTimeout(()=>{window.dispatchEvent(new Event("scroll"))},1e3)});window.innerWidth>=469&&(window.addEventListener("load",()=>{document.querySelectorAll(".logo3D").forEach(l=>{l.classList.add("animate-logo");const n=window.getComputedStyle(l).transform;l.dataset.base=n!=="none"?n:""})}),document.addEventListener("mousemove",l=>{document.querySelectorAll(".logo3D").forEach(n=>{const p=n.getBoundingClientRect(),o=l.clientX-(p.left+p.width/2),t=l.clientY-(p.top+p.height/2),e=-(o*.05),d=-(t*.05);n.style.transform=`${n.dataset.base} translate(${e}px, ${d}px)`})}),document.addEventListener("mouseleave",()=>{document.querySelectorAll(".logo3D").forEach(l=>{l.style.transform=l.dataset.base||""})}));document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".word"),n=["курсовыми","дипломами","эссе","экзаменами","тестами","рефератами","пересдачами","зачетами"],p=100,o=60,t=2e3;let e=0,d=0,u=!1;function m(){const h=n[e],b=h.substring(0,d);l.textContent=b,u?d>0?(d--,setTimeout(m,o)):(u=!1,e=(e+1)%n.length,setTimeout(m,p)):d<h.length?(d++,setTimeout(m,p)):setTimeout(()=>{u=!0,m()},t)}m()});window.addEventListener("load",()=>{document.querySelectorAll(".marqueeInner").forEach(n=>{const p=n.querySelector(".marquee"),o=p.cloneNode(!0),t=n.dataset.direction==="right"?1:-1;t===1?n.insertBefore(o,p):n.appendChild(o);const e=p.offsetWidth,d=1;let u=t===1?-e:0;function m(){u+=t*d,t===-1&&Math.abs(u)>=e&&(u=0),t===1&&u>=0&&(u=-e),n.style.transform=`translateX(${u}px)`,requestAnimationFrame(m)}m()})});document.querySelectorAll(".card");const L=document.querySelectorAll(".overlay.noise");function T(l){L.forEach(n=>{const p=n.querySelector(".card"),o=p.getBoundingClientRect(),t=l.clientX-o.left,e=l.clientY-o.top;p.style.setProperty("--x",`${t}px`),p.style.setProperty("--y",`${e}px`)})}function M(l){L.forEach(n=>{if(!(n.querySelector(".card").dataset.tilt!=="false"))return;const t=n.getBoundingClientRect(),e=t.left+t.width/2,d=t.top+t.height/2,u=l.clientX-e,m=l.clientY-d,h=Math.sqrt(u**2+m**2),b=400;if(h<b){const f=1-h/b,a=-(m/20)*f,s=u/20*f;n.style.transform=`rotateX(${a.toFixed(2)}deg) rotateY(${s.toFixed(2)}deg)`}else n.style.transform="rotateX(0deg) rotateY(0deg)"})}function E(){L.forEach(l=>{l.querySelector(".card").dataset.tilt!=="false"&&(l.style.transform="rotateX(0deg) rotateY(0deg)")})}function S(l){T(l),M(l)}let W=!1;function D(){W||(window.addEventListener("mousemove",S),window.addEventListener("mouseleave",E),W=!0)}function R(){W&&(window.removeEventListener("mousemove",S),window.removeEventListener("mouseleave",E),E(),W=!1)}function C(){window.innerWidth>=469?D():R()}C();window.addEventListener("resize",C);document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelectorAll(".step");let n=0,p=null;function o(e){function d(i){!i||i.classList.contains("visible")||(i.style.visibility="visible",i.style.pointerEvents="auto",i.classList.remove("visible"),i.offsetWidth,i.classList.add("visible"))}function u(i){i&&(i.classList.remove("visible"),setTimeout(()=>{i.classList.contains("visible")||(i.style.visibility="hidden",i.style.pointerEvents="none")},400))}const m=[document.querySelector(".ms01"),document.querySelector(".ms02"),document.querySelector(".ms03"),document.querySelector(".ms05")],h=document.querySelector(".msgBig"),b=h==null?void 0:h.querySelector(".ms04"),f=h==null?void 0:h.querySelector(".emojiMsg");l.forEach((i,I)=>{const g=i.querySelector(".stepContent"),q=i.querySelector(".timer"),k=80;g&&(e===5?(m.forEach(d),d(h),d(b),d(f)):(m.forEach((x,w)=>{x&&(w<e?d(x):w===e?e===3?(u(x),d(h),d(b),u(f)):(d(x),u(h),u(b),u(f)):u(x))}),h&&(e===3||e===4?(d(h),b&&d(b),f&&(e===3?(u(f),setTimeout(()=>d(f),800)):e===4?(f.style.transition="none",d(f),requestAnimationFrame(()=>{f.style.transition=""})):u(f))):(u(h),u(b),u(f)))),I===e?(i.classList.add("active","noise"),g.style.maxHeight="0px",g.style.opacity="1",g.style.paddingTop="24px",q&&(q.classList.remove("animate-timer"),q.offsetWidth,q.classList.add("animate-timer")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{g.style.maxHeight=g.scrollHeight+k+"px"})})):(i.classList.remove("active","noise"),g.style.maxHeight="0px",g.style.opacity="0",g.style.paddingTop="0"))});const a=document.querySelector(".typeWriterLink"),s=a==null?void 0:a.querySelector(".typeWriterWrap"),c=s==null?void 0:s.querySelector(".typeWriter"),v=c==null?void 0:c.querySelector(".realText"),r=c==null?void 0:c.querySelector(".animatedText"),y=s==null?void 0:s.querySelector(".typeWriterIcon");if(c&&v&&r&&y){const i=e===5?"Мне нужна помощь!":"Ввести сообщение...";v.textContent=i,e===5?(r.innerHTML=i+'<span class="blinkingCursor">|</span>',r.style.width="0",r.offsetWidth,c.classList.add("typing"),r.style.animation="typingEffect 2.4s steps("+i.length+") forwards",setTimeout(()=>{c.classList.remove("typing")},2400)):(r.innerHTML=i,c.classList.remove("typing")),s.classList.remove("help"),e===5?(s.classList.add("help"),a.style.pointerEvents="auto",a.setAttribute("aria-disabled","false"),y.src="./sendActive.svg",y.classList.add("animate-icon")):(a.style.pointerEvents="none",a.setAttribute("aria-disabled","true"),y.src="./send.svg",y.classList.remove("animate-icon"))}}function t(){p=setInterval(()=>{n=(n+1)%l.length,o(n)},5e3)}o(n),t(),l.forEach((e,d)=>{e.addEventListener("click",()=>{clearInterval(p),n=d,o(d),t()})})});document.addEventListener("DOMContentLoaded",()=>{const l=Array.from(document.querySelectorAll("section.archSec .cardIcon")),n=document.querySelectorAll(".arrowGr"),p=Array.from(document.querySelectorAll(".archDesc")),o=[{angle:-135,scale:.3},{angle:-125,scale:.4},{angle:-115,scale:.5},{angle:-105,scale:.6},{angle:-98.5,scale:.7},{angle:-90,scale:1},{angle:-81.5,scale:.7},{angle:-75,scale:.6},{angle:-65,scale:.5},{angle:-55,scale:.4},{angle:-45,scale:.3},{angle:-35,scale:.2}];let t=0,e=0;function d(m){p[e].classList.add("none"),e=(m+p.length)%p.length,p[e].classList.remove("none")}function u(){o.forEach((m,h)=>{const b=l[(h+t)%l.length],f=m.angle>=-125&&m.angle<=-55;b.style.transition=f?"transform 0.6s ease, background-color 0.6s ease":"none";const a=window.innerWidth<769?2900:2800;b.style.transform=`rotate(${m.angle}deg) translate(${a}px) scale(${m.scale})`,m.scale===1?b.style.backgroundColor="#9B8DFF":m.scale>=.7?b.style.backgroundColor="#cac3ff":b.style.backgroundColor="#e1ddff",b.style.cursor=f?"pointer":"default",b.onclick=null,m.scale===.7?m.angle===-98.5?b.onclick=()=>{t=(t-1+l.length)%l.length,d(e-1),u()}:m.angle===-81.5&&(b.onclick=()=>{t=(t+1)%l.length,d(e+1),u()}):b.style.pointerEvents=f?"auto":"none"})}n[1].addEventListener("click",()=>{t=(t+1)%l.length,d(e+1),u()}),n[0].addEventListener("click",()=>{t=(t-1+l.length)%l.length,d(e-1),u()}),u()});const B={servicesBlock:160,howSec:120,garantee:-80,results:150,review:100,forms:-60};document.querySelectorAll('a[href^="#"]').forEach(l=>{l.addEventListener("click",function(n){const p=this.getAttribute("href").substring(1),o=document.getElementById(p);if(!o)return;n.preventDefault();const t=B[p]||0,e=o.getBoundingClientRect().top+window.scrollY-t;window.scrollTo({top:e,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{const l=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(t.target.classList.contains("rolling")&&n(t.target),t.target.classList.contains("rolling-img")&&p(t.target),l.unobserve(t.target))})},{threshold:.6});document.querySelectorAll(".card h1").forEach(o=>{if(o.querySelector("img"))return;const t=o.textContent.trim();o.textContent="";const e=document.createElement("div");e.className="rolling";for(let d=0;d<t.length;d++){const u=t[d],m=document.createElement("span");m.dataset.final=u,e.appendChild(m)}o.appendChild(e),l.observe(e)}),document.querySelectorAll(".rolling-img").forEach(o=>{l.observe(o)});function n(o){o.querySelectorAll("span").forEach((e,d)=>{const u=e.dataset.final;if(/\d/.test(u)){const m=document.createElement("div");m.style.transition="transform 2.5s ease",m.style.display="block",m.style.lineHeight="1em";const h=Math.floor(Math.random()*20)+20;for(let f=0;f<h;f++){const a=document.createElement("div");a.textContent=Math.floor(Math.random()*10),m.appendChild(a)}const b=document.createElement("div");b.textContent=u,m.appendChild(b),e.appendChild(m),requestAnimationFrame(()=>{m.style.transform=`translateY(-${h}em)`})}else e.textContent=u,e.style.opacity=0,e.style.transform="scale(0.8)",e.style.display="inline-block",e.style.transition="opacity 1s ease, transform 1s ease",requestAnimationFrame(()=>{e.style.opacity=1,e.style.transform="scale(1)"})})}function p(o){const t=o.querySelector("span");if(!t.querySelector("img"))return;const u=window.innerWidth<469?36:68,m=6;t.style.transition="transform 2s ease",requestAnimationFrame(()=>{t.style.transform=`translateY(-${u*m}px)`})}});const A=new IntersectionObserver((l,n)=>{l.forEach(p=>{if(p.isIntersecting){const o=document.querySelector(".plane"),t=document.querySelector("#maskPath"),e=t.getTotalLength();o.style.offsetDistance="0%",o.style.opacity="0",o.style.transform="scale(0)",o.offsetWidth,o.style.opacity="1",o.style.transform="scale(1) rotate(30deg)",o.style.offsetDistance="100%",t.style.strokeDasharray=e,t.style.strokeDashoffset=e,t.style.visibility="visible",t.animate([{strokeDashoffset:e},{strokeDashoffset:0}],{duration:4e3,fill:"forwards",easing:"ease"}),n.unobserve(p.target)}})},{threshold:.5,rootMargin:"-30% 0px -30% 0px"});A.observe(document.querySelector(".tgModalWrap"));A.observe(document.querySelector(".tgModalWrap"));
