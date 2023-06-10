# Кінопошук [​](#%D0%BA%D1%96%D0%BD%D0%BE%D0%BF%D0%BE%D1%88%D1%83%D0%BA "Пряме посилання на цей заголовок")

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю робочого застосунку [дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

### themoviedb.org API [​](#themoviedborg-api "Пряме посилання на цей заголовок")

Для бекенду використовуй [themoviedb.org API](https://www.themoviedb.org/). Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть використовуватися наступні ендпоінти.

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending) список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
- [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies) пошук фільму за ключовим словом на сторінці фільмів.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details) запит повної інформації про фільм для сторінки кінофільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits) запит інформації про акторський склад для сторінки кінофільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews) запит оглядів для сторінки кінофільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

### Маршрути [​](#%D0%BC%D0%B0%D1%80%D1%88%D1%80%D1%83%D1%82%D0%B8 "Пряме посилання на цей заголовок")

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `Home`, домашня сторінка зі списком популярних кінофільмів.
- `'/movies'` – компонент `Movies`, сторінка пошуку кінофільмів за ключовим словом.
- `'/movies/:movieId'` – компонент `MovieDetails`, сторінка з детальною інформацією про кінофільм.
- `/movies/:movieId/cast` – компонент `Cast`, інформація про акторський склад. Рендериться на сторінці `MovieDetails`.
- `/movies/:movieId/reviews` – компонент `Reviews`, інформація про огляди. Рендериться на сторінці `MovieDetails`.

### Code Splitting (поділ коду)[​](#code-splitting-%D0%BF%D0%BE%D0%B4%D1%96%D0%BB-%D0%BA%D0%BE%D0%B4%D1%83 "Пряме посилання на цей заголовок")

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи `React.lazy()` і `Suspense`.
