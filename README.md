# Алтынбесік — сайт бөбекжай-бақшасы

Next.js (App Router), TypeScript, Tailwind CSS v4, Lucide. База данных и CMS не нужны.

## Запуск

```bash
npm install
npm run dev        # разработка, http://localhost:3000
npm run typecheck  # проверка TypeScript
npm run lint
npm run build      # production-сборка
```

## Как добавить фото и видео

Положите файлы в `public/images/` и задеплойте сайт. Код менять не нужно.

| Файл | Где появится | Форматы |
|---|---|---|
| `main-page.*` | первый экран | jpg, jpeg, png, webp |
| `main-page2.*` | раздел «Балабақша туралы» | mp4, webm, mov или изображение |
| `main-page2-poster.*` | постер для видео (необязательно) | jpg, jpeg, png, webp |
| `image1.*`, `image2.*`, … | галерея, порядок по номеру | jpg, jpeg, png, webp |

Пока файла нет, вместо него показывается иллюстрация, а галерея ведёт в Instagram.
Пустые и повреждённые файлы пропускаются автоматически.

## Что настраивается в `src/data/site.ts`

- `documentsUrl`: ссылка на Google Drive. Как только она указана, появляется кнопка «Құжаттарды қарау».
- `whatsappNumber`: отдельный номер WhatsApp. Как только он указан, появляется кнопка WhatsApp.
- `twoGis`: карточка организации для карты.
- `phone`, `instagram`: контакты.

Все тексты на казахском и русском находятся в `src/data/translations.ts`.

## Структура

- `src/components/website/`: десктопная версия (от 1024 px).
- `src/components/mobile-website/`: мобильная версия со своей композицией.
- `src/components/shared/`: язык, иллюстрации, lightbox, карта, общие кнопки.
- `src/data/`: факты, переводы и поиск медиафайлов.
- `src/proxy.ts`: телефонам сразу отдаётся мобильная сборка. Если User-Agent не определился, версию выберет `SiteExperience` по ширине экрана.

## Публикация на Vercel

Импортируйте проект в Vercel, настройки по умолчанию подходят. Когда появится свой домен, задайте переменную
`NEXT_PUBLIC_SITE_URL=https://ваш-домен`, чтобы canonical и Open Graph указывали на него.
