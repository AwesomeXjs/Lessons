/* URL - uniform resource locator */
/* https://stashchuk.com/all-courses?q=react */

/* 
https - протокол 
stashchuk - домен
com - TLD (top level domain) домен + tld - корневой домен
all-courses - путь 	
q=react - строка запроса ( ? - ключ, react- значение) разделяются амперсантом &
*/

/* 
Методы HTTP:
GET - метод для получение файлов с удаленного сервера
POST - отправка данных на удаленный сервер
PUT - обновление всего ресурса
DELETE - удаление определенных ресурсов на сервере
PATCH - обновление части ресурса
OPTIONS - получение от сервера информации о поддерживаемых методов
HEAD - эмуляция get запроса , тогда сервер вернет только http заголовок
*/

// CRUD - Create(POST,PUT) Read(GET) Update(PUT,PATCH) Delete(DELETE)

/* Популярные хуки: 
1.useParams - возвращает обьект с указанными в роуте параметрами (например course/:id - в обьекте будет один параметр id)
хук берет этот параметр из url и присваивает его совйству в обьекте с указанным в роуте названием. 

2.useNavigate -  возвращает функцию которая ожидает 2 параметра - первый говорит куда мы хотим переадресовать пользователя, второй - опции (replace / state)

useNavigate хорош если нужно сделать запрос на сервер и по итогам запроса переадресовать пользователя куда то, в useEffect'e

если нужна переадресация на предыдущую страницу - в параметрах указать просто -1 (цифра указывает на сколько назад по истории переадресовать)

не рекомендуется использовать для обычной переадресации по ссылке (для этого есть Link)

Также есть отдельный компонент Navigate который можно применить для переадресации на определенную страницу (для избежания дублей JSX) например: 	<Route path='courses' element={<Navigate to={/courses} replace />} />

3.useLocation - возвращает обьект локации который содержит такие свойства как hash, search, pathname, key, state исходя из текущего адреса
useLocation(location.search) - покажет query параметры строки
query-string npm пакет сконвертирует строку query параметра в обьект который можно использовать для сортировки или фильтра и

*/