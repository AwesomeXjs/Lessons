/* Ветка - это просто ссылка на определенный коммит */

/* переключаться между ветками можно с помощью команды git checkout <branch> */

/* git branch <branch name> - создание ветки */
/* git checkout <branch> - гит перемещает HEAD на указаную ветку */
/* git checkout -b <branch name> - создание ветки и сразу перемещение в нее */
/* git branch - отображает список всех веток */
/* git branch -m <branch name> - переименовать ТЕКУЩУЮ ВЕТКУ */
/* git branch -d <branch name> - удаление определенной ветки. ТЕКУЩУЮ УДАЛИТЬ НЕЛЬЗЯ */

/* СЛИЯНИЕ ВЕТОК */

/* Когда в определенной ветке закончена работа над каким то функционалом, ее нужно слить с основной ветки чтобы функционал был доступен не только в определенной ветке */
/* После слияния видны все комиты основной ветки + ветки которая слилась */
/* после слияния ветку можно удалить */

/* git merge <featured branch name> - обьединение текущей ветки с выбранной (featured). Ветка которая принимает - receiving branch */

/* Процесс слияния веток:
1. Создать новую ветку featured из ветки main
2. Перейти в новую ветку featured  
3. Внести изменения в проект (создать новые файлы или папки) 
4. Создать коммит или несколько в новой ветке featured
5. Перейти в ветку main и также создать коммиты
6. Выполнить слияние ветки featured с веткой main */
