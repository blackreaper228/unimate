document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 JS подключён");

  // Массив для хранения всех загруженных файлов
  let uploadedFiles = [];

  const formTemplates = {
    Курсовая: {
      label: "Курсовая",
      html: `
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
      `,
    },

    Диплом: {
      label: "Диплом",
      html: `
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
      `,
    },

    Магистерская_диссертация: {
      label: "Магистерская диссертация",
      html: `
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
      `,
    },

    Реферат: {
      label: "Реферат",
      html: `
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
      `,
    },
    Презентация: {
      label: "Презентация",
      html: `
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
      `,
    },

    Эссе: {
      label: "Эссе",
      html: `
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
      `,
    },

    Контрольная_работа: {
      label: "Контрольная работа",
      html: `
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
      `,
    },

    Домашняя_работа: {
      label: "Домашняя работа",
      html: `
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
      `,
    },

    Экзамен: {
      label: "Экзамен",
      html: `
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
      `,
    },

    Зачёт: {
      label: "Зачёт",
      html: `
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
      `,
    },

    РАР: {
      label: "РАР (Расчетно-аналитическая работа)",
      html: `
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
      `,
    },

    Билеты_к_экзамену: {
      label: "Билеты к экзамену",
      html: `
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
      `,
    },

    Микронаушник: {
      label: "Микронаушник",
      html: `
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
      `,
    },

    Репетиторство: {
      label: "Репетиторство",
      html: `
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
      `,
    },
    Микронаушник: {
      label: "Микронаушник",
      html: `
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
      `,
    },
  };

  const select = document.getElementById("workType");
  const formFields = document.getElementById("formWrapType");

  Object.entries(formTemplates).forEach(([value, { label }], index) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    if (index === 0) option.selected = true;
    select.appendChild(option);
  });

  function updateFormFields(type) {
    const template = formTemplates[type];
    formFields.innerHTML = template ? template.html : "";

    // Очищаем загруженные файлы при смене типа работы
    uploadedFiles = [];

    initUploadHandlers(); // навешиваем после каждой вставки
    initNumberInput();
  }

  select.addEventListener("change", (e) => {
    updateFormFields(e.target.value);
  });

  updateFormFields(select.value);
  console.log("value при запуске:", select.value);

  function initUploadHandlers() {
    const dropzone = document.getElementById("uploadArea");
    if (!dropzone) return;

    const dropzoneMsg = dropzone.querySelector("div");
    const input = dropzone.querySelector("input");

    // Создаем контейнер для списка файлов, если его нет
    let filesList = dropzone.parentNode.querySelector(".files-list");
    if (!filesList) {
      filesList = document.createElement("div");
      filesList.className = "files-list";
      filesList.style.marginTop = "10px";
      dropzone.parentNode.appendChild(filesList);
    }

    dropzone.addEventListener("click", () => {
      input.click();
      input.onchange = (e) => {
        addFiles([...e.target.files], dropzoneMsg, filesList);
        input.value = ""; // Очищаем input чтобы можно было загрузить те же файлы снова
      };
    });

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      addFiles([...e.dataTransfer.files], dropzoneMsg, filesList);
    });
  }

  function addFiles(newFiles, dropzoneMsg, filesList) {
    // Добавляем новые файлы к существующим
    uploadedFiles = [...uploadedFiles, ...newFiles];

    dropzoneMsg.textContent = "Загрузка...";

    // Симуляция загрузки (в реальном приложении здесь была бы отправка на сервер)
    setTimeout(() => {
      const newFileNames = newFiles.map((f) => f.name).join(", ");
      dropzoneMsg.textContent = `✅ Добавлено: ${newFileNames}`;

      // Обновляем список файлов
      updateFilesList(filesList);

      // Через 2 секунды возвращаем исходное сообщение
      setTimeout(() => {
        if (uploadedFiles.length > 0) {
          dropzoneMsg.textContent = `Загружено файлов: ${uploadedFiles.length}. Можете добавить ещё.`;
        } else {
          dropzoneMsg.textContent =
            "Перетащите файл(ы) сюда или нажмите, чтобы загрузить";
        }
      }, 2000);
    }, 500);
  }

  function updateFilesList(filesList) {
    filesList.innerHTML = "";

    if (uploadedFiles.length === 0) return;

    const title = document.createElement("p");
    title.textContent = "Загруженные файлы:";
    title.style.fontWeight = "600";
    title.style.lineHeight = "130%";
    title.style.fontFamily = "Manrope";
    title.style.color = "var(--white)";
    title.style.marginBottom = "5px";
    filesList.appendChild(title);

    uploadedFiles.forEach((file, index) => {
      const fileItem = document.createElement("div");
      fileItem.style.display = "flex";
      fileItem.style.justifyContent = "space-between";
      fileItem.style.alignItems = "center";
      fileItem.style.padding = "14px 20px";
      fileItem.style.margin = "2px 0";
      fileItem.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      fileItem.style.borderRadius = "4px";
      fileItem.style.width = "100%";
      fileItem.style.boxSizing = "border-box";

      const fileName = document.createElement("p");
      fileName.textContent = file.name;
      fileName.style.flex = "1 1 0";
      fileName.style.minWidth = "0";
      fileName.style.margin = "0";
      fileName.style.fontWeight = "600";
      fileName.style.lineHeight = "130%";
      fileName.style.fontFamily = "Manrope";
      fileName.style.color = "var(--white)";
      fileName.style.whiteSpace = "nowrap";
      fileName.style.overflow = "hidden";
      fileName.style.textOverflow = "ellipsis";
      fileName.style.maxWidth = "100%";
      fileName.title = file.name;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "×";
      removeBtn.type = "button";
      removeBtn.style.background = "#FF6767";
      removeBtn.style.color = "white";
      removeBtn.style.border = "none";
      removeBtn.style.borderRadius = "4px";
      removeBtn.style.width = "20px";
      removeBtn.style.height = "20px";
      removeBtn.style.minWidth = "20px";
      removeBtn.style.maxWidth = "20px";
      removeBtn.style.flexShrink = "0";
      removeBtn.style.flexGrow = "0";
      removeBtn.style.cursor = "pointer";
      removeBtn.style.fontSize = "14px";
      removeBtn.style.display = "flex";
      removeBtn.style.alignItems = "center";
      removeBtn.style.justifyContent = "center";
      removeBtn.style.padding = "0";

      removeBtn.addEventListener("click", () => {
        removeFile(index, filesList);
      });

      fileItem.appendChild(fileName);
      fileItem.appendChild(removeBtn);
      filesList.appendChild(fileItem);
    });
  }

  function removeFile(index, filesList) {
    uploadedFiles.splice(index, 1);
    updateFilesList(filesList);

    // Обновляем сообщение в dropzone
    const dropzoneMsg = document.querySelector("#uploadArea div");
    if (dropzoneMsg) {
      if (uploadedFiles.length > 0) {
        dropzoneMsg.textContent = `Загружено файлов: ${uploadedFiles.length}. Можете добавить ещё.`;
      } else {
        dropzoneMsg.textContent =
          "Перетащите файл(ы) сюда или нажмите, чтобы загрузить";
      }
    }
  }

  function upload(files, dropzoneMsg) {
    const fd = new FormData();
    const filesArray = Array.from(files); // 👈 ОБЯЗАТЕЛЬНО

    filesArray.forEach((file, i) => fd.append(`file${i + 1}`, file));

    dropzoneMsg.textContent = "Загрузка...";

    const req = new XMLHttpRequest();
    req.open("POST", "https://httpbin.org/post");

    req.upload.addEventListener("progress", (e) => {
      const progress = e.loaded / e.total;
      dropzoneMsg.textContent =
        progress < 1 ? `${(progress * 100).toFixed()}%` : "Завершаем...";
    });

    req.onload = () => {
      if (req.status === 200) {
        const fileNames = filesArray.map((f) => f.name).join(", ");
        dropzoneMsg.textContent = `✅ Загружено: ${fileNames}`;
      } else {
        dropzoneMsg.textContent = "❌ Ошибка загрузки";
      }
    };

    req.onerror = () => {
      dropzoneMsg.textContent = "❌ Сетевая ошибка";
    };

    req.send(fd);
  }

  // Инпут чисел

  function initNumberInput() {
    const input = document.getElementById("slideNumber");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    if (!input || !increaseBtn || !decreaseBtn) return; // если нет — выходим

    increaseBtn.addEventListener("click", () => {
      input.value = parseInt(input.value || "0") + 1;
    });

    decreaseBtn.addEventListener("click", () => {
      let value = parseInt(input.value || "0");
      if (value > 0) {
        input.value = value - 1;
      }
    });

    input.addEventListener("input", () => {
      if (parseInt(input.value) < 0) {
        input.value = 0;
      }
    });
  }

  const form = document.getElementById("formUpload");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();

    // Сбор всех input, textarea, select (кроме file inputs)
    form
      .querySelectorAll('input:not([type="file"]), textarea, select')
      .forEach((el) => {
        if ((el.type === "radio" || el.type === "checkbox") && !el.checked)
          return;
        if (el.name || el.id) {
          data.append(el.name || el.id, el.value);
        }
      });

    // Сбор файлов из нашего массива uploadedFiles
    let fileIndex = 1;
    for (const file of uploadedFiles) {
      const base64 = await toBase64(file);
      data.append(`file${fileIndex}`, base64);
      data.append(`filename${fileIndex}`, file.name);
      data.append(`mimeType${fileIndex}`, file.type);
      fileIndex++;
    }

    // Отправка
    document.querySelector(".loader")?.classList.add("active");

    fetch(
      "https://script.google.com/macros/s/AKfycbxcN9Uijcx5n2Uu_k9OptbTXCk3BqXYiKS8lfJrCNoOYuLX90Kfg2ykylK-XPZEDYQf/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then(() => {
        alert("✅ Успешно отправлено!");
        document.querySelector(".loader")?.classList.remove("active");
        // Очищаем загруженные файлы после успешной отправки
        uploadedFiles = [];
        const filesList = document.querySelector(".files-list");
        if (filesList) {
          filesList.innerHTML = "";
        }
        const dropzoneMsg = document.querySelector("#uploadArea div");
        if (dropzoneMsg) {
          dropzoneMsg.textContent =
            "Перетащите файл(ы) сюда или нажмите, чтобы загрузить";
        }
      })
      .catch(() => {
        alert("❌ Ошибка при отправке");
        document.querySelector(".loader")?.classList.remove("active");
      });
  });

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
});
