# jwt_laravel_vue_fr

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

1. Установка Вью нужной версии
   vue create jwt_laravel_vue_fr && cd jwt_laravel_vue_fr && npm install vue@3.2.13

2. Установка Vue Router
   npm install vue-router@4

3. Установка Bootstrap, Jquery, Popper.js
npm install bootstrap
npm install jquery
npm install popper.js

4. Подключил axios:
npm install axios

5. Сделал компонент регистрации пользователя

6. Сделал запрос к базе, вывод списка фруктов

7. В предыдущем коммите, сделал: при логировании на сервере, возвращаемый 'access_token' поместил в 'localStorage'

8. Включаем во все запросы axios токен авторизации, в файле: "src/api.js". Теперь обращаемся к api.