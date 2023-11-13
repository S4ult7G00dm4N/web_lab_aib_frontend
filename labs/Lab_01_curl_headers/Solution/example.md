# Лабораторная работа №1
## HTTP HTTPS и их параметры
### Использование **GitBash** и **curl**.
##№Цель работы
Познакомиться с протоколом HTTP и протоколом HTTPS, 
а так же особенностями установления соединения между источником и получателем.
### Cайт РГУПС
Скрипт при помощи которого получил информацию о сайте: 

`curl rgups.ru -I -v -L -k`

Использовал такие ключи как:

`-I` - Этот ключ указывает отправить только заголовки HTTP-ответа сервера, без тела ответа.  
`-v` - Этот ключ делает подробный вывод информации о запросе.  
`-L` - Этот ключ указывает следовать перенаправлениям при запросе, если сервер возвращает код (301 или 302).  
`-k` - Этот ключ отключает проверку SSL-сертификата.
```shell
Ответ: 
$ curl rgups.ru -I -v -L -k
* processing: rgups.ru
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 80.72.224.90:80...
* Connected to rgups.ru (80.72.224.90) port 80(Подключение по айпи по 80 порту)
> HEAD / HTTP/1.1-строка запроса указывает на тип запроса (HEAD) и версию протокола (HTTP/1.1)
> Host: rgups.ru -название сервера к которому мы подрубаемся
> User-Agent: curl/8.2.1 -юзер-агент.Проще говоря,то,под каким устройством мы представляемся хосту 
> Accept: */* - Строка указывающая на тип принимаемого контента.Принимаем всё. 
>
< HTTP/1.1 301 Moved Permanently-сайт переехал.не временно,иначе был бы 302.
< Server: nginx/1.19.1-по сервера и его версия.
< Date: Mon, 02 Oct 2023 17:45:18 GMT - строка содержит дату и время когда был получен ответ от сервера
< Content-Type: text/html -тип содержимого
< Content-Length: 169 -это заголовок HTTP-ответа, который указывает на размер тела ответа в байтах. Значение 169 означает, что тело ответа состоит из 169 байт.
< Connection: keep-alive - Эта строка указывает, что соединение между клиентом и сервером должно быть поддерживаемым
< Location: https://rgups.ru/ - адрес запрашиваемого ресурса
<
  0   169    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host rgups.ru left intact -указывает на то, что соединение с хостом rgups.ru было успешно завершено и оставлено открытым.
* Clear auth, redirects to port from 80 to 443 - перенаправление на порт https соединения.
* Issue another request to this URL: 'https://rgups.ru/' -указывает на то, что необходимо выполнить еще один запрос к указанному URL-адресу
*   Trying 80.72.224.90:443... -подключаемся к тому же серверу через 443 порт
* Connected to rgups.ru (80.72.224.90) port 443 -подрубились :3
* schannel: disabled automatic use of client certificate -то сообщение, которое может появляться при использовании SSL/TLS-соединения с помощью библиотеки Schannel в Windows. Оно указывает на то, что автоматическое использование клиентского сертификата было отключено
  0     0    0     0    0     0      0      0 --:--:--  0:00:16 --:--:--     0* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: rgups.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK - никаких проездов-переездов,всё ок
< Server: nginx/1.19.1
< Date: Mon, 02 Oct 2023 17:45:34 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Powered-By: ProcessWire CMS - Строка содержит информацию о ПО, которое используется на сервере.Думаю,это плохо
< Set-Cookie: wire=05f6681872c0f78652f5432636792f07; path=/; HttpOnly; SameSite=Lax - это заголовок HTTP-ответа, который устанавливает cookie на стороне клиента. Значение wire=05f6681872c0f78652f5432636792f07 является идентификатором cookie, а path=/ указывает на путь, на котором cookie будет доступен(для сайта,корневой папке клиента никакой урон нанесён не будет). Флаг HttpOnly указывает на то, что cookie может быть использован только в HTTP-запросах и не может быть доступен из JavaScript. Флаг SameSite=Lax указывает на то, что cookie может быть отправлен только в запросах, инициированных пользователем (например, щелчок по ссылке), и не может быть отправлен в запросах, инициированных сайтом (например, запросы изображений или стилей). Это помогает защитить от некоторых атак, связанных с cookie.
< Expires: Thu, 19 Nov 1981 08:52:00 GMT - указывает на дату и время, когда ресурс должен быть считаться устаревшим и неактуальным. В данном случае, дата установлена на 19 ноября 1981 года в 08:52 по Гринвичу. Эта дата была выбрана для того, чтобы гарантировать, что ресурс не будет кэшироваться браузером или прокси-сервером. Это связано с тем, что дата установлена на давно прошедшее время, и браузеры и прокси-серверы не будут считать ресурс актуальным и не будут его кэшировать. Это может быть полезно в случае, если ресурс должен быть всегда актуальным и не должен кэшироваться.
< Cache-Control: no-store, no-cache, must-revalidate -указывает на то, что ресурс не должен кэшироваться на стороне клиента или прокси-сервера. Флаг no-store указывает на то, что ресурс не должен кэшироваться ни на стороне клиента, ни на стороне прокси-сервера. Флаг no-cache указывает на то, что ресурс не должен кэшироваться на стороне клиента, но может быть кэширован на стороне прокси-сервера. Флаг must-revalidate указывает на то, что прокси-сервер должен проверять актуальность кэша перед его использованием и перезапрашивать ресурс у сервера, если он устарел.
< Pragma: no-cache -указывает на то, что ресурс не должен кэшироваться на стороне клиента. Однако, этот заголовок является устаревшим и не рекомендуется к использованию вместо Cache-Control: no-cache.
<
  0     0    0     0    0     0      0      0 --:--:--  0:00:17 --:--:--     0HTTP/1.1 301 Moved Permanently
Server: nginx/1.19.1
Date: Mon, 02 Oct 2023 17:45:18 GMT
Content-Type: text/html
Content-Length: 169
Connection: keep-alive
Location: https://rgups.ru/

HTTP/1.1 200 OK
Server: nginx/1.19.1
Date: Mon, 02 Oct 2023 17:45:34 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Powered-By: ProcessWire CMS
Set-Cookie: wire=05f6681872c0f78652f5432636792f07; path=/; HttpOnly; SameSite=Lax
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache


* Connection #1 to host rgups.ru left intact
```

###Сайт GitHub

Скрипт при помощи которого получил информацию о сайте:

`curl github.com -I -v -L -k`

Ответ: 
```shell
curl github.com -I -v -L -k
* processing: github.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 140.82.121.4:80...
* Connected to github.com (140.82.121.4) port 80
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Content-Length: 0
< Location: https://github.com/
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host github.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://github.com/'
*   Trying 140.82.121.4:443...
* Connected to github.com (140.82.121.4) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: GitHub.com
< Date: Wed, 04 Oct 2023 17:01:26 GMT
< Content-Type: text/html; charset=utf-8
< Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With- X-PJAX: Это заголовок, который используется для указания того, что страница загружается через PJAX, который является техникой для более быстрой загрузки страницы путем обновления только тех частей страницы, которые изменились.Этот заголовок используется для указания элемента контейнера, который должен быть обновлен новым содержимым при использовании PJAX. Turbo-Visit: Это заголовок, используемый библиотекой Turbo, которая является библиотекой JavaScript для более быстрой загрузки страниц. Он используется для указания того, что страница загружается через Turbo. Turbo-Frame: Этот заголовок используется для указания элемента фрейма, который должен быть обновлен новым содержимым при использовании Turbo. Accept-Language: Этот заголовок используется браузером для указания предпочитаемого языка (языков) для пользователя. Он отправляется на сервер с каждым запросом. Accept-Encoding: Этот заголовок используется браузером для указания предпочитаемого кодирования (кодировок) для ответа. Он отправляется на сервер с каждым запросом. Accept: Этот заголовок используется браузером для указания предпочитаемого типа контента для ответа. Он отправляется на сервер с каждым запросом. X-Requested-With: Этот заголовок используется для указания того, что запрос был сделан через AJAX, который является техникой для совершения асинхронных запросов на сервер без перезагрузки всей страницы. Он отправляется браузером с каждым AJAX-запросом.
< content-language: en-US -Content-Language - это заголовок HTTP, который используется для описания языка (языков), предназначенного для аудитории, чтобы пользователи могли отличить его в соответствии с их собственным предпочитаемым языкомНапример, если установлено "Content-Language: de-DE", это означает, что документ предназначен для немецкоязычных пользователей (однако это не указывает на то, что документ написан на немецком языке).
< ETag: W/"c746672beb9ed8fcdaf8a51cb603b9fa" -ETag (или сущностный тег) - это заголовок HTTP-ответа, который является идентификатором конкретной версии ресурса. Он позволяет кэшам быть более эффективными и экономить пропускную способность, так как веб-серверу не нужно повторно отправлять полный ответ, если ресурс не изменился.
< Cache-Control: max-age=0, private, must-revalidate -max-age=0: указывает, что кэшированный ресурс должен быть перезапрошен у сервера, так как он может быть устаревшим. Значение 0 означает, что ресурс должен быть перезапрошен при каждом запросе.private: указывает, что кэшированный ресурс может быть использован только для конкретного пользователя и не должен кэшироваться на прокси-серверах.must-revalidate: указывает, что кэшированный ресурс должен быть перезапрошен у сервера, если он устарел, иначе он не может быть использован.
< Strict-Transport-Security: max-age=31536000; includeSubdomains; preload- Strict-Transport-Security (STS) - это заголовок HTTP-ответа, который используется для защиты веб-сайтов от атак типа "man-in-the-middle", таких как атаки на протокол и перехват кук. Он сообщает браузеру, что сайт должен быть доступен только через HTTPS, и что любые попытки доступа к нему через HTTP должны быть автоматически перенаправлены на HTTPS. Значение заголовка Strict-Transport-Security содержит три директивы:max-age: указывает, сколько времени браузер должен запомнить, что сайт должен быть доступен только через HTTPS. Значение указывается в секундах.private: указывает, что кэшированный ресурс может быть использован только для конкретного пользователя и не должен кэшироваться на прокси-серверах.must-revalidate: указывает, что кэшированный ресурс должен быть перезапрошен у сервера, если он устарел, иначе он не может быть использован.
< X-Frame-Options: deny - Заголовок X-Frame-Options - это заголовок HTTP-ответа, который используется для защиты веб-сайтов от атак типа "clickjacking", когда злоумышленник пытается скрыть поддельный контент под оригинальным, разместив его на другом сайте в iframe. Значение заголовка X-Frame-Options может быть одним из трех: DENY, SAMEORIGIN или ALLOW-FROM uri. В данном случае, значение заголовка X-Frame-Options равно DENY, что означает, что страница не может быть отображена во фрейме, независимо от сайта, пытающегося это сделать
< X-Content-Type-Options: nosniff -X-Content-Type-Options - это заголовок HTTP-ответа, который используется для защиты веб-сайтов от атак типа "MIME sniffing", когда браузер пытается угадать тип содержимого, если он не указан явно в заголовке Content-Type. Значение заголовка X-Content-Type-Options равно "nosniff", что означает, что браузер не должен пытаться угадать тип содержимого и должен использовать только тот, который указан в заголовке Content-Type
< X-XSS-Protection: 0 -Заголовок X-XSS-Protection - это заголовок HTTP-ответа, который используется для защиты веб-сайтов от атак типа "reflected cross-site scripting" (XSS), когда злоумышленник пытается внедрить вредоносный код в веб-страницу, который будет выполнен в браузере пользователя. Значение заголовка X-XSS-Protection может быть одним из трех: 0, 1 или 1; mode=block. В данном случае, значение заголовка X-XSS-Protection равно 0, что означает, что браузер не должен использовать встроенную защиту от XSS-атак, которая может быть встроена в некоторые браузеры.
< Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin-Заголовок Referrer-Policy - это заголовок HTTP-ответа, который используется для управления тем, как браузер отправляет информацию о реферере (сайте, с которого был выполнен запрос) при переходе на другой сайт. Значение заголовка Referrer-Policy может быть одним из нескольких: no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, unsafe-url. В данном случае, значения заголовка Referrer-Policy равны origin-when-cross-origin и strict-origin-when-cross-origin.origin-when-cross-origin: при выполнении запроса на другой сайт, отправляется только информация об источнике (origin), путь и строка запроса не отправляются.strict-origin-when-cross-origin: при выполнении запроса на другой сайт, отправляется только информация об источнике (origin), путь и строка запроса не отправляются. Если запрос выполняется с HTTPS на HTTP, то информация о реферере не отправляется вообще.
< Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.githubcopilot.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/ -Заголовок Content-Security-Policy (CSP) - это заголовок HTTP-ответа, который используется для защиты веб-сайтов от атак типа "cross-site scripting" (XSS), когда злоумышленник пытается внедрить вредоносный код в веб-страницу.default-src 'none': указывает, что никакие ресурсы не могут быть загружены по умолчанию, если для них не указана другая директиваbase-uri 'self': указывает, что базовый URI должен быть текущим сайтомchild-src: указывает, что дочерние фреймы могут быть загружены только с указанных доменовconnect-src 'self': указывает, что запросы на соединение могут быть выполнены только на текущем сайте и на
< Set-Cookie: _gh_sess=ovSEPuHJRh0CdvNSd3JL%2FY%2FO%2FxOFFCywXRkv6dmjv%2BEifATsNQZPgfODgrFPkfDSb6pEMyVMq7Qky6jnLhyxbDfXVQCMN1mhvqEL%2BGyOtHTthp4OvyHpqEIO2UG%2F8KssVU6Bw0kAYFKWJCXIw0dQQqXtYtGmy6vv7jOPe%2Fmq7kO%2B8NyjiLrFaoUGRm9kMMGrnHw43APb769OvFZrHE6gREdNXtra5NpNv%2B3uuXsXV20%2FHzGFjc3XYcb%2F2zhmXIlUkLx7pDgLeDgu6%2B%2BGJEtDpg%3D%3D--C9OUy%2BLlIKiBghq8--xoK3w5MGDdHNXkI6A1XCTA%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
< Set-Cookie: _octo=GH1.1.1973853570.1696438893; Path=/; Domain=github.com; Expires=Fri, 04 Oct 2024 17:01:33 GMT; Secure; SameSite=Lax
< Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 04 Oct 2024 17:01:33 GMT; HttpOnly; Secure; SameSite=Lax Заголовок Set-Cookie - это заголовок HTTP-ответа, который используется для установки куки на стороне клиента. Куки - это небольшие текстовые файлы, которые хранятся на компьютере пользователя и используются для хранения информации о пользователе и его предпочтениях на сайте. Значение заголовка Set-Cookie может содержать несколько директив, которые определяют, как куки должны быть установлены и использованы. В данном случае, значение заголовка Set-Cookie содержит три куки:

    _gh_sess: содержит уникальный идентификатор сессии пользователя на сайте GitHub. Куки устанавливается на текущем пути (/), имеет флаг HttpOnly, который предотвращает доступ к куки из JavaScript, флаг Secure, который указывает, что куки должны быть отправлены только через HTTPS, и флаг SameSite=Lax, который ограничивает доступ к куки только для запросов, исходящих с того же домена, что и сайт

_octo: содержит уникальный идентификатор пользователя на сайте GitHub. Куки устанавливается на пути (/), имеет флаг Secure, который указывает, что куки должны быть отправлены только через HTTPS, и флаг SameSite=Lax, который ограничивает доступ к куки только для запросов, исходящих с того же домена, что и сайтlogged_in: содержит информацию о том, авторизован ли пользователь на сайте GitHub. Куки устанавливается на пути (/), имеет флаг HttpOnly, который предотвращает доступ к куки из JavaScript, флаг Secure, который указывает, что куки должны быть отправлены только через HTTPS, и флаг SameSite=Lax, который ограничивает доступ к куки только для запросов, исходящих с того же домена, что и сайт
< Accept-Ranges: bytes -Заголовок Accept-Ranges - это заголовок HTTP-ответа, который используется для указания единиц измерения, которые поддерживает сервер для выполнения частичных запросов на загрузку файлов. 
< X-GitHub-Request-Id: 1FCF:240E:12C1057:12F4947:651D9A6C -Заголовок X-GitHub-Request-Id - это заголовок HTTP-ответа, который используется на сайте GitHub для идентификации конкретного запроса. 
<
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 301 Moved Permanently
Content-Length: 0
Location: https://github.com/

HTTP/1.1 200 OK
Server: GitHub.com
Date: Wed, 04 Oct 2023 17:01:26 GMT
Content-Type: text/html; charset=utf-8
Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With
content-language: en-US
ETag: W/"c746672beb9ed8fcdaf8a51cb603b9fa"
Cache-Control: max-age=0, private, must-revalidate
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
X-Frame-Options: deny
X-Content-Type-Options: nosniff
X-XSS-Protection: 0
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Content-Security-Policy: default-src 'none'; base-uri 'self'; child-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/; connect-src 'self' uploads.github.com www.githubstatus.com collector.github.com raw.githubusercontent.com api.githubcopilot.com api.github.com github-cloud.s3.amazonaws.com github-production-repository-file-5c1aeb.s3.amazonaws.com github-production-upload-manifest-file-7fdce7.s3.amazonaws.com github-production-user-asset-6210df.s3.amazonaws.com cdn.optimizely.com logx.optimizely.com/v1/events objects-origin.githubusercontent.com *.actions.githubusercontent.com productionresultssa0.blob.core.windows.net/ productionresultssa1.blob.core.windows.net/ productionresultssa2.blob.core.windows.net/ productionresultssa3.blob.core.windows.net/ productionresultssa4.blob.core.windows.net/ productionresultssa5.blob.core.windows.net/ productionresultssa6.blob.core.windows.net/ productionresultssa7.blob.core.windows.net/ productionresultssa8.blob.core.windows.net/ productionresultssa9.blob.core.windows.net/ wss://*.actions.githubusercontent.com github-production-repository-image-32fea6.s3.amazonaws.com github-production-release-asset-2e65be.s3.amazonaws.com insights.github.com wss://alive.github.com github.githubassets.com; font-src github.githubassets.com; form-action 'self' github.com gist.github.com objects-origin.githubusercontent.com; frame-ancestors 'none'; frame-src viewscreen.githubusercontent.com notebooks.githubusercontent.com support.github.com; img-src 'self' data: github.githubassets.com media.githubusercontent.com camo.githubusercontent.com identicons.github.com avatars.githubusercontent.com github-cloud.s3.amazonaws.com objects.githubusercontent.com secured-user-images.githubusercontent.com/ user-images.githubusercontent.com/ private-user-images.githubusercontent.com opengraph.githubassets.com github-production-user-asset-6210df.s3.amazonaws.com customer-stories-feed.github.com spotlights-feed.github.com objects-origin.githubusercontent.com *.githubusercontent.com; manifest-src 'self'; media-src github.com user-images.githubusercontent.com/ secured-user-images.githubusercontent.com/ private-user-images.githubusercontent.com github-production-user-asset-6210df.s3.amazonaws.com github.githubassets.com; script-src github.githubassets.com; style-src 'unsafe-inline' github.githubassets.com; upgrade-insecure-requests; worker-src github.com/assets-cdn/worker/ gist.github.com/assets-cdn/worker/
Set-Cookie: _gh_sess=ovSEPuHJRh0CdvNSd3JL%2FY%2FO%2FxOFFCywXRkv6dmjv%2BEifATsNQZPgfODgrFPkfDSb6pEMyVMq7Qky6jnLhyxbDfXVQCMN1mhvqEL%2BGyOtHTthp4OvyHpqEIO2UG%2F8KssVU6Bw0kAYFKWJCXIw0dQQqXtYtGmy6vv7jOPe%2Fmq7kO%2B8NyjiLrFaoUGRm9kMMGrnHw43APb769OvFZrHE6gREdNXtra5NpNv%2B3uuXsXV20%2FHzGFjc3XYcb%2F2zhmXIlUkLx7pDgLeDgu6%2B%2BGJEtDpg%3D%3D--C9OUy%2BLlIKiBghq8--xoK3w5MGDdHNXkI6A1XCTA%3D%3D; Path=/; HttpOnly; Secure; SameSite=Lax
Set-Cookie: _octo=GH1.1.1973853570.1696438893; Path=/; Domain=github.com; Expires=Fri, 04 Oct 2024 17:01:33 GMT; Secure; SameSite=Lax
Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Fri, 04 Oct 2024 17:01:33 GMT; HttpOnly; Secure; SameSite=Lax
Accept-Ranges: bytes
X-GitHub-Request-Id: 1FCF:240E:12C1057:12F4947:651D9A6C


* Connection #1 to host github.com left intact
```
###Сайт РЖД

Скрипты при помощи которых получил информацию о сайте:

`curl rzd.ru -I -v -L -k --User-agent "Yandex"`

`--User-agent "Yandex"` - эта строка, которую клиент  отправляет на сервер, 
чтобы указать серверу, какое программное обеспечение или устройство
отправляет запрос.  

Ответ:

```shell
> curl rzd.ru -I -v -L -k --User-agent "Yandex"
* processing: rzd.ru
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 212.164.138.131:80...
* Connected to rzd.ru (212.164.138.131) port 80
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Date: Wed, 04 Oct 2023 17:34:55 GMT
< Content-Type: text/html
< Content-Length: 150
< Connection: keep-alive
< Location: https://rzd.ru:443/
<
  0   150    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host rzd.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://rzd.ru:443/'
*   Trying 212.164.138.131:443...
* Connected to rzd.ru (212.164.138.131) port 443
* schannel: disabled automatic use of client certificate
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Content-Type: text/html
< Content-Length: 185
< Connection: keep-alive
< Date: Wed, 04 Oct 2023 17:34:56 GMT
< Location: https://www.rzd.ru/
< Set-Cookie: session-cookie=178af801ce4f1baa76483bb018991a24243eda8aa30f22d37346e5c8d0a319a86fb92262fc329b4dd01ed299329b97a5; Max-Age=86400; Path=/; secure; HttpOnly
< X-XSS-Protection: 1; mode=block
<
  0   185    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #1 to host rzd.ru left intact
* Issue another request to this URL: 'https://www.rzd.ru/'
*   Trying 212.164.138.121:443...
* Connected to www.rzd.ru (212.164.138.121) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: www.rzd.ru
> User-Agent: Yandex
> Accept: */*
>
< HTTP/1.1 200
< Content-Type: text/html;charset=utf-8
< Content-Length: 206811
< Connection: keep-alive
< Date: Wed, 04 Oct 2023 17:34:57 GMT
< Vary: Accept-Encoding -это заголовок HTTP-ответа, который используется для указания того, что сервер может вернуть различные версии ответа в зависимости от того, какой метод сжатия был использован для запроса. Если клиент отправляет запрос с заголовком Accept-Encoding, который указывает на поддержку сжатия, то сервер может вернуть сжатую версию ответа
< X-UCM-Pod-Name: inex-ucm-76c45c67fb-v2nfm - это поле заголовка в сетевом запросе. Без дополнительного контекста невозможно точно определить значение этого заголовка. Однако, скорее всего, "inex-ucm-76c45c67fb-v2nfm" является уникальным идентификатором pod в кластере Kubernetes
< Strict-Transport-Security: max-age=15724800; includeSubDomains - это поле заголовка ответа в HTTP, которое информирует браузер, что сайт должен быть доступен только через HTTPS, и что любые попытки доступа к нему через HTTP должны автоматически перенаправляться на HTTPS. Параметр "max-age" указывает время в секундах, в течение которого браузер должен запомнить эту политику. В данном случае значение равно 15724800 секундам, что эквивалентно 6 месяцам. Параметр "includeSubDomains" указывает, что политика должна распространяться на все поддомены сайта.
< Via: nginx1- это поле заголовка в HTTP, которое указывает на прокси-сервер, через который прошел запрос. В данном случае, "nginx1" указывает на то, что запрос был обработан прокси-сервером Nginx версии 1. 
< X-Frame-Options: sameorigin - это поле заголовка в HTTP, которое указывает на то, что страница может быть загружена во фрейм только с того же домена, что и страница.
< Set-Cookie: session-cookie=178af801ef87442176483bb018991a249eab617c3a5b331f19b05f3c732df2d64843911b5023ea849169626b67f6c411; Max-Age=86400; Path=/; secure -- это поле заголовка в HTTP, которое устанавливает cookie на стороне клиента. В данном случае, "session-cookie" является именем cookieПараметр "Max-Age" указывает, сколько времени cookie должен храниться на стороне клиента в секундах. В данном случае, значение равно 86400 секундам, что эквивалентно 24 часам. Параметр "Path" указывает, на какой путь на сервере должен быть отправлен cookie. В данном случае, "/" означает, что cookie должен быть отправлен на корневой путь. Параметр "secure" указывает, что cookie должен быть отправлен только через HTTPS. 
< X-XSS-Protection: 1; mode=block- это поле заголовка в HTTP, которое указывает на то, что браузер должен включить защиту от атак типа "cross-site scripting" (XSS). Если браузер обнаруживает XSS-атаку, он блокирует загрузку страницы вместо того, чтобы пытаться очистить ее. 
<
  0  201k    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 301 Moved Permanently
Date: Wed, 04 Oct 2023 17:34:55 GMT
Content-Type: text/html
Content-Length: 150
Connection: keep-alive
Location: https://rzd.ru:443/

HTTP/1.1 301 Moved Permanently
Content-Type: text/html
Content-Length: 185
Connection: keep-alive
Date: Wed, 04 Oct 2023 17:34:56 GMT
Location: https://www.rzd.ru/
Set-Cookie: session-cookie=178af801ce4f1baa76483bb018991a24243eda8aa30f22d37346e5c8d0a319a86fb92262fc329b4dd01ed299329b97a5; Max-Age=86400; Path=/; secure; HttpOnly
X-XSS-Protection: 1; mode=block

HTTP/1.1 200
Content-Type: text/html;charset=utf-8
Content-Length: 206811
Connection: keep-alive
Date: Wed, 04 Oct 2023 17:34:57 GMT
Vary: Accept-Encoding
X-UCM-Pod-Name: inex-ucm-76c45c67fb-v2nfm
Strict-Transport-Security: max-age=15724800; includeSubDomains
Via: nginx1
X-Frame-Options: sameorigin
Set-Cookie: session-cookie=178af801ef87442176483bb018991a249eab617c3a5b331f19b05f3c732df2d64843911b5023ea849169626b67f6c411; Max-Age=86400; Path=/; secure
X-XSS-Protection: 1; mode=block


* Connection #2 to host www.rzd.ru left intact
```

### Yandex.ru

Скрипт при помощи которого получил информацию о сайте:

`curl yandex.ru -I -v -L -k`

Ответ:

```shell
> processing: yandex.ru
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 5.255.255.77:80...
* Connected to yandex.ru (5.255.255.77) port 80
> HEAD / HTTP/1.1
> Host: yandex.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 302 Moved temporarily
< Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT - это поле заголовка в HTTP, которое используется для запроса клиентских подсказок (client hints) от браузера. Клиентские подсказки - это информация о браузере и устройстве пользователя, которую браузер может отправлять на сервер в качестве заголовков запроса.
< Cache-Control: max-age=1209600,private
< Date: Wed, 04 Oct 2023 17:53:33 GMT
< Location: https://dzen.ru/?yredirect=true
< NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1} - это поле заголовка в HTTP, которое используется для настройки логирования ошибок сети на стороне клиента. Значение этого поля заголовка представляет собой JSON-объект, который содержит информацию о том, куда отправлять отчеты об ошибках, как долго хранить информацию о политике логирования, а также какую долю запросов следует логировать. В данном случае, "report_to": "network-errors" указывает на то, что отчеты об ошибках должны отправляться на сервер "network-errors". Параметр "max_age" указывает, сколько времени браузер должен запомнить эту политику логирования в секундах. В данном случае, значение равно 100 секундам. Параметры "success_fraction" и "failure_fraction" указывают, какую долю запросов следует логировать в случае успешного выполнения и в случае ошибки соответственно. В данном случае, "success_fraction" равен 0.001, а "failure_fraction" равен 0.1. Это поле заголовка является механизмом для сбора информации об ошибках сети на стороне клиента и может быть полезно для отладки и оптимизации сетевых запросов
< P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI" - это поле заголовка в HTTP, которое используется для указания политики конфиденциальности сайта. Значение этого поля заголовка представляет собой строку, которая содержит ссылку на файл с политикой конфиденциальности и компактную версию этой политики. В данном случае, "policyref="/w3c/p3p.xml"" указывает на то, что файл с политикой конфиденциальности находится по адресу "/w3c/p3p.xml". Параметр "CP" содержит компактную версию политики конфиденциальности. В данном случае, значение равно "NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI". Это поле заголовка является механизмом для уведомления пользователей о том, какие данные собираются и как они будут использоваться, а также для соблюдения законодательства о конфиденциальности
< Portal: Home  - это портал для входа на сайт или сервис
< Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]} -это HTTP-заголовок, который используется для отправки отчетов об ошибках сети на сервер. Он содержит информацию о группе, которая будет получать отчеты, максимальный возраст отчетов и конечные точки, на которые будут отправляться отчеты. В данном случае, группа, которая будет получать отчеты, называется "network-errors", максимальный возраст отчетов составляет 100 единиц времени, а конечные точки, на которые будут отправляться отчеты, находятся по следующим адресам: "https://dr.yandex.net/nel" с приоритетом 1 и "https://dr2.yandex.net/nel" с приоритетом 2
< X-Content-Type-Options: nosniff - это HTTP-заголовок, который используется для защиты от атак, связанных с MIME-типами. Когда этот заголовок установлен на сервере, он указывает браузеру использовать MIME-тип, объявленный в заголовке Content-Type, вместо того, чтобы пытаться определить MIME-тип на основе содержимого файла. Это предотвращает атаки, связанные с MIME-типами, которые могут использоваться для выполнения вредоносного кода на веб-сайте. Заголовок "X-Content-Type-Options: nosniff" заставляет браузер проверять корректность MIME-типа в заголовке полученного ответа и использовать его вместо того, чтобы пытаться определить тип на основе содержимого файла. Это предотвращает атаки, связанные с MIME-типами, которые могут использоваться для выполнения вредоносного кода на веб-сайте
< X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST - это HTTP-заголовок, который используется для указания поисковым роботам, что страница должна быть удалена из результатов поиска после определенной даты и времени. В данном случае, заголовок указывает, что страница должна быть удалена из результатов поиска после 12 сентября 2022 года в 00:00:00 по времени Тихоокеанского времени (PST). Это означает, что страница больше не будет отображаться в результатах поиска после указанной даты и времени.
< X-Yandex-Req-Id: 1696442013017330-13457126757391298820-balancer-l7leveler-kubr-yp-vla-160-BAL-9999 - это HTTP-заголовок, который используется для идентификации запроса на сервере Yandex. В данном случае, заголовок содержит уникальный идентификатор запроса, который был сгенерирован балансировщиком нагрузки Yandex Application Load Balancer. Этот заголовок может быть полезен для отслеживания запросов на сервере и идентификации проблем с производительностью
< set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Fri, 03 Oct 2025 17:53:33 GMT
< set-cookie: is_gdpr_b=CJbqDxCU0gEoAg==; Path=/; Domain=.yandex.ru; Expires=Fri, 03 Oct 2025 17:53:33 GMT
< set-cookie: _yasc=Q33m2QkYssWeQOlwif9b2Fua9qB1J4Zky8FWa3XqIahlufeEIsffbm9N1hRTWpcQFM5l; domain=.yandex.ru; path=/; expires=Sat, 01 Oct 2033 17:53:33 GMT; secure
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host yandex.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://dzen.ru/?yredirect=true'
*   Trying 62.217.160.2:443...
* Connected to dzen.ru (62.217.160.2) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x
> HEAD /?yredirect=true HTTP/1.1
> Host: dzen.ru
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 Ok
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com awaps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.critHTTP/1.1 302 Moved temporarily
Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA, Sec-CH-UA-Full-Version-List, Sec-CH-UA-WoW64, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Platform, Sec-CH-UA-Full-Version, Viewport-Width, DPR, Device-Memory, RTT, Downlink, ECT
Cache-Control: max-age=1209600,private
Date: Wed, 04 Oct 2023 17:53:33 GMT
Location: https://dzen.ru/?yredirect=true
NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}
P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"
Portal: Home
Report-To: { "group": "network-errors", "max_age": 100, "endpoints": [{"url": "https://dr.yandex.net/nel", "priority": 1}, {"url": "https://dr2.yandex.net/nel", "priority": 2}]}
X-Content-Type-Options: nosniff
X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST
X-Yandex-Req-Id: 1696442013017330-13457126757391298820-balancer-l7leveler-kubr-yp-vla-160-BAL-9999
set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Fri, 03 Oct 2025 17:53:33 GMT
set-cookie: is_gdpr_b=CJbqDxCU0gEoAg==; Path=/; Domain=.yandex.ru; Expires=Fri, 03 Oct 2025 17:53:33 GMT
set-cookie: _yasc=Q33m2QkYssWeQOlwif9b2Fua9qB1J4Zky8FWa3XqIahlufeEIsffbm9N1hRTWpcQFM5l; domain=.yandex.ru; path=/; expires=Sat, 01 Oct 2033 17:53:33 GMT; secure

HTTP/1.1 200 Ok
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Content-Security-Policy-Report-Only: default-src 'none'; connect-src 'self' an.yandex.ru strm.yandex.ru *.strm.yandex.net mc.yandex.ru yandex.st yastatic.net matchid.adfox.yandex.ru adfox.yandex.ru ads.adfox.ru ads6.adfox.ru jstracer.yandex.ru yastat.net yandex.ru awaps.yandex.net awaps.yandex.ru verify.yandex.ru *.verify.yandex.ru favicon.yandex.net pixel.adsafeprotected.com tps.doubleverify.com ad.adriver.ru amc.yandex.ru *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.admetrica.ru yandexmetrica.com yandexmetrica.com:29009 yandexmetrica.com:30102 forms-ext-api.yandex.ru strm.yandex.net *.strm.yandex.ru *.cdn.ngenix.net zen-rc3.yandex.ru frontend.vh.yandex.ru https://vh.test.yandex.ru/live/ wss://push.yandex.ru api.passport.yandex.ru api.passport-test.yandex.ru suggest-maps.yandex.ru/suggest-geo vk.ru static.dzeninfra.ru avatars.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru cdn.dzeninfra.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru s3.dzeninfra.ru *.s3.dzeninfra.ru *.ms.dzen.ru notify.dzen.ru clck.dzen.ru static-mon.yandex.net cloud-api.yandex.ru yandex.ru dzen.ru *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.serving-sys.com *.serving-sys.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; frame-src awaps.yandex.net yandexadexchange.net *.yandexadexchange.net yastatic.net *.yandex.ru banners.adfox.ru yastat.net yandex.ru storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: mc.yandex.ru mc.yandex.md zenadservices.net sso.passport.yandex.ru id.vk.com *.dzen.ru sso.dzen.ru static.dzeninfra.ru suggest.dzen.ru 'self' yandex.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.doubleclick.net; img-src 'self' data: avatars-fast.yandex.net favicon.yandex.net an.yandex.ru banners.adfox.ru content.adfox.ru ads6.adfox.ru tns-counter.ru *.tns-counter.ru s3.mds.yandex.net ads.adfox.ru amc.yandex.ru mc.admetrica.ru wcm-ru.frontend.weborama.fr wcm.solution.weborama.fr ad.adriver.ru bs.serving-sys.com ad.doubleclick.net counter.yadro.ru gdeby.hit.gemius.pl mc.yandex.ru verify.yandex.ru *.verify.yandex.ru yastatic.net yastat.net avatars.mds.yandex.net yandex.ru px.moatads.com aweo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=1283866461696442013&requestid=2663493738.224.1696442013480.83895&page=site_desktop;
< Content-Type: text/html; charset=utf-8
< Set-Cookie: _yasc=YjRe1NEbleaz9t/N7eRrpIMAshKSiuIj4Lmm9nM8bs0z2nxeO5Jd/9mCz6+D960XQw==; domain=.dzen.ru; path=/; expires=Sat, 01 Oct 2033 17:53:33 GMT; secure
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Requestid: 2663493738.224.1696442013480.83895
< X-XSS-Protection: 1; mode=block
< X-Yandex-Req-Id: 1696442013444503-1674651392328181111000116-production-app-host-vla-zen-444
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0aps.yandex.net awaps.yandex.ru gdero.hit.gemius.pl pixel.adlooxtracking.com tps.doubleverify.com impression.appsflyer.com rgi.io track.rutarget.ru ssl.hurra.com pixel.adsafeprotected.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz mc.webvisor.org *.mediascope.mc.yandex.ru avatars.mdst.yandex.net zen.s3.yandex.net strm.yandex.ru strm.yandex.net sso.passport.yandex.ru dzen.ru avatars.dzeninfra.ru static.dzeninfra.ru cdn.dzen.ru video.dzen.ru log.dzen.ru playlog.dzen.ru s3.dzeninfra.ru *.ms.dzen.ru *.s3.dzeninfra.ru *.zen.yandex.com *.m-counter.ru www.m-counter.ru www.tns-counter.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.doubleverify.com *.adsafeprotected.com *.serving-sys.com *.serving-sys.ru *.weborama.fr *.weborama-tech.ru *.hit.gemius.pl consentmanager.mgr.consensu.org cdn.consentmanager.mgr.consensu.org *.adlooxtracking.com *.adlooxtracking.ru vk.com vk.ru *.userapi.com *.vk.com *.vk.ru; media-src *.yandex.net strm.yandex.ru *.strm.yandex.ru yandex.ru yandex.st yastatic.net banners.adfox.ru content.adfox.ru data: yastat.net *.mycdn.me *.vkuser.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru blob: *.strm.yandex.net *.cdn.ngenix.net cdn.dzen.ru video.dzen.ru *.cdn.dzeninfra.ru *.extcdn.dzeninfra.ru *.hot-video.dzeninfra.ru cold-video.dzeninfra.ru *.cold-video.dzeninfra.ru *.s3.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net; script-src 'unsafe-inline' 'unsafe-eval' an.yandex.ru yandex.st yastatic.net mc.yandex.ru banners.adfox.ru ads.adfox.ru ads6.adfox.ru yastat.net yandex.ru z.moatads.com storage.mds.yandex.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru mc.yandex.az mc.yandex.by mc.yandex.co.il mc.yandex.com mc.yandex.com.am mc.yandex.com.ge mc.yandex.com.tr mc.yandex.ee mc.yandex.fr mc.yandex.kg mc.yandex.kz mc.yandex.lt mc.yandex.lv mc.yandex.md mc.yandex.tj mc.yandex.tm mc.yandex.ua mc.yandex.uz chat.s3.yandex.net sso.dzen.ru sso.passport.yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net *.adlooxtracking.com *.adlooxtracking.ru *.adsafeprotected.com *.doubleverify.com *.moatads.com *.dvtps.com *.doubleclick.net *.serving-sys.ru *.userapi.com vk.com vk.ru *.vk.com *.vk.ru; style-src 'unsafe-inline' 'unsafe-eval' yandex.st yastatic.net banners.adfox.ru content.adfox.ru yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru yandex.ru static.dzeninfra.ru 'self' *.zen.yandex.com dzen.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net; font-src 'self' data: an.yandex.ru yastatic.net yastat.net *.tunneler-si.dzen.ru *.tun.si.dzen.ru http-check-headers.yandex.ru static.dzeninfra.ru *.mail.ru *.mradx.net *.imgsmail.ru *.criteo.com *.criteo.net *.mycdn.me *.vkuser.net fonts.gstatic.com; child-src blob: mc.yandex.ru; manifest-src *.dzen.ru/manifest.webmanifest 'self'; report-uri https://csp.yandex.net/csp?from=zen_old&project=zen&yandex_login=&yandexuid=1283866461696442013&requestid=2663493738.224.1696442013480.83895&page=site_desktop;
Content-Type: text/html; charset=utf-8
Set-Cookie: _yasc=YjRe1NEbleaz9t/N7eRrpIMAshKSiuIj4Lmm9nM8bs0z2nxeO5Jd/9mCz6+D960XQw==; domain=.dzen.ru; path=/; expires=Sat, 01 Oct 2033 17:53:33 GMT; secure
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Requestid: 2663493738.224.1696442013480.83895
X-XSS-Protection: 1; mode=block
X-Yandex-Req-Id: 1696442013444503-1674651392328181111000116-production-app-host-vla-zen-444


* Connection #1 to host dzen.ru left intact
```

### Python

Скрипт при помощи которого получил информацию о сайте:

`curl python.org -I -v -L -k`

Ответ:

```shell
> * processing: python.org
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 151.101.128.223:80...
* Connected to python.org (151.101.128.223) port 80
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0> HEAD / HTTP/1.1
> Host: python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Connection: close
< Content-Length: 0
< Server: Varnish - это HTTP-заголовок, который указывает на то, что веб-сервер использует программное обеспечение Varnish для ускорения загрузки веб-страниц. Varnish - это HTTP-ускоритель, который используется для ускорения динамических веб-сайтов с большим количеством контента и API. 
< Retry-After: 0 - это HTTP-заголовок, который указывает на то, сколько времени должен подождать клиент, прежде чем повторить запрос. В данном случае, значение заголовка равно 0, что означает, что клиент должен повторить запрос немедленно, без задержки. Это может произойти, например, если сервер не может обработать запрос из-за перегрузки или ограничений на количество запросов, и поэтому просит клиента повторить запрос позже. 
< Accept-Ranges: bytes
< Date: Sat, 14 Oct 2023 13:39:22 GMT -дата
< Via: 1.1 varnish - это HTTP-заголовок, который указывает на то, что веб-сервер использует программное обеспечение Varnish для ускорения загрузки веб-страниц. 
< X-Served-By: cache-fra-eddf8230052-FRA - это HTTP-заголовок, который указывает на идентификатор кэш-сервера Fastly, который обработал запрос и вернул ответ. Fastly - это облачный сервис кэширования и доставки контента, который используется для ускорения загрузки веб-страниц и API. Когда клиент отправляет запрос на сервер, Fastly может кэшировать ответ на своих серверах и возвращать его при повторных запросах, вместо того, чтобы каждый раз запрашивать его с исходного сервера. Заголовок "X-Served-By" указывает на идентификатор кэш-сервера Fastly, который обработал запрос и вернул ответ.
< X-Cache: HIT "X-Cache: HIT" - это HTTP-заголовок, который указывает на то, был ли ответ на запрос получен из кэша или нет. Значение "HIT" означает, что ответ был получен из кэша, а не с исходного сервера. 
< X-Cache-Hits: 0 - это HTTP-заголовок, который указывает на количество запросов, которые были обработаны кэш-сервером и возвращены из кэша. Значение "0" означает, что ответ на запрос не был получен из кэша, а был получен напрямую с исходного сервера.
< X-Timer: S1697290763.771089,VS0,VE0 - это HTTP-заголовок, который указывает на время, затраченное на обработку запроса на сервере. Заголовок состоит из трех значений, разделенных запятыми: S, VS и VE. Значение S указывает на время, прошедшее с начала обработки запроса на сервере до момента отправки ответа клиенту. Значение VS указывает на время, затраченное на обработку запроса на стороне сервера, до того, как ответ был отправлен в кэш. Значение VE указывает на время, затраченное на обработку запроса на стороне сервера, после того, как ответ был получен из кэша. В данном случае, значение S равно 1697290763.771089, что означает, что запрос был обработан на сервере за это время. Значения VS и VE равны 0, что означает, что запрос не был обработан на стороне сервера до того, как ответ был отправлен в кэш, и после того, как ответ был получен из кэша.
< Location: https://www.python.org/
< Strict-Transport-Security: max-age=315360000; preload  - это HTTP-заголовок, который указывает на то, что сайт должен быть доступен только через HTTPS, а не через HTTP. Заголовок включает параметр max-age, который указывает браузеру, сколько времени он должен запомнить, что сайт должен быть доступен только через HTTPS. В данном случае, значение параметра max-age равно 315360000, что означает, что браузер должен запомнить, что сайт должен быть доступен только через HTTPS в течение 10 лет. Параметр preload указывает на то, что сайт должен быть включен в список предварительной загрузки HSTS, который поддерживается большинством браузеров. Это означает, что браузеры будут автоматически использовать HTTPS для доступа к сайту, даже если пользователь введет адрес сайта с использованием HTTP. Однако, использование параметра preload может быть рискованным, так как он может привести к блокировке доступа к сайту, если что-то пойдет не так с HTTPS-сертификатом сайта
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://www.python.org/'
*   Trying 146.75.116.223:443...
* Connected to www.python.org (146.75.116.223) port 443
* schannel: disabled automatic use of client certificate -это сообщение об ошибке, которое может возникнуть при использованииклиентского сертификата SSL. Оно указывает на то, что автоматическое использование клиентского сертификата было отключено в Schannel, который является компонентом безопасности Windows, отвечающим за SSL/TLS-соединения. Это может произойти, если настройки безопасности Windows слишком строгие или если клиентский сертификат не был правильно установлен. 
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: www.python.org
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Connection: keep-alive
< Content-Length: 49997
< Server: nginx
< Content-Type: text/html; charset=utf-8
< X-Frame-Options: SAMEORIGIN -это HTTP-заголовок, который указывает на то, как браузер должен обрабатывать веб-страницу, которая пытается загрузиться во фрейме или iframe. Значение "SAMEORIGIN" означает, что страница может быть загружена во фрейме или iframe только с того же домена, что и страница, на которой находится фрейм или iframe.
< Via: 1.1 vegur, 1.1 varnish, 1.1 varnish - это HTTP-заголовок, который указывает на прокси-серверы, через которые прошел запрос. Заголовок Via добавляется прокси-серверами, как прямыми, так и обратными, и может появляться в заголовках запроса или ответа. Он используется для отслеживания пересылки сообщений, избежания циклов запросов и идентификации возможностей протокола отправителей вдоль цепочки запроса/ответа. В данном случае, значение заголовка Via указывает на три прокси-сервера, через которые прошел запрос: vegur, varnish, varnish. Первый прокси-сервер vegur - это прокси-сервер, который используется для балансировки нагрузки и ускорения загрузки веб-страниц. Второй и третий прокси-серверы varnish - это HTTP-ускорители, которые используются для кэширования и ускорения загрузки веб-страниц
< Accept-Ranges: bytes
< Date: Sat, 14 Oct 2023 13:39:23 GMT
< Age: 1724 - это HTTP-заголовок, который указывает на время, которое прошло с момента кэширования ответа на сервере. Значение заголовка Age указывает на количество секунд, которые прошли с момента кэширования ответа на сервере. В данном случае, значение заголовка Age равно 1724, что означает, что ответ был кэширован на сервере в течение 1724 секунд (около 29 минут). 
< X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230057-FRA
< X-Cache: HIT, HIT - это HTTP-заголовок, который указывает на то, был ли ответ на запрос получен из кэша или нет. Значение "HIT" означает, что ответ был получен из кэша, а не с исходного сервера. Это может произойти, если ответ на запрос был ранее сохранен в кэше, и кэш-сервер может вернуть его при повторных запросах, вместо того, чтобы каждый раз запрашивать его с исходного сервера. Заголовок "X-Cache" может содержать несколько значений, разделенных запятыми, если запрос прошел через несколько кэш-серверов. В данном случае, значение "HIT, HIT" означает, что ответ был получен из кэша на двух разных кэш-серверах. Это может произойти, если ответ был кэширован на первом кэш-сервере, а затем был передан на второй кэш-сервер, который также вернул ответ из кэша
< X-Cache-Hits: 8, 6 - это HTTP-заголовок, который указывает на количество кэш-попаданий (cache hits) для данного запроса на каждом кэш-сервере, через который он прошел. Значение заголовка X-Cache-Hits указывает на количество раз, когда ответ на запрос был получен из кэша на каждом кэш-сервере, через который запрос прошел. В данном случае, значение заголовка X-Cache-Hits равно "8, 6", что означает, что ответ на запрос был получен из кэша на первом кэш-сервере 8 раз и на втором кэш-сервере 6 раз. Это означает, что ответ на запрос был получен из кэша на обоих кэш-серверах, через которые запрос прошел, в разное время.
< X-Timer: S1697290764.659329,VS0,VE0
< Vary: Cookie- это HTTP-заголовок, который указывает на то, что ответ на запрос может изменяться в зависимости от значения куки (cookie), отправленной в запросе. Заголовок Vary используется сервером для указания того, какие заголовки он использовал при выборе представления ресурса в алгоритме согласования контента.
< Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
<
  0 49997    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 301 Moved Permanently
Connection: close
Content-Length: 0
Server: Varnish
Retry-After: 0
Accept-Ranges: bytes
Date: Sat, 14 Oct 2023 13:39:22 GMT
Via: 1.1 varnish
X-Served-By: cache-fra-eddf8230052-FRA
X-Cache: HIT
X-Cache-Hits: 0
X-Timer: S1697290763.771089,VS0,VE0
Location: https://www.python.org/
Strict-Transport-Security: max-age=315360000; preload

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 49997
Server: nginx
Content-Type: text/html; charset=utf-8
X-Frame-Options: SAMEORIGIN
Via: 1.1 vegur, 1.1 varnish, 1.1 varnish
Accept-Ranges: bytes
Date: Sat, 14 Oct 2023 13:39:23 GMT
Age: 1724
X-Served-By: cache-iad-kiad7000025-IAD, cache-fra-eddf8230057-FRA
X-Cache: HIT, HIT
X-Cache-Hits: 8, 6
X-Timer: S1697290764.659329,VS0,VE0
Vary: Cookie
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload


* Connection #1 to host www.python.org left intact

```

### Git

Скрипт при помощи которого получил информацию о сайте:

`curl git-scm.com -I -v -L -k`

Ответ: 

```shell
* processing: git-scm.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 188.114.99.224:80...
* Connected to git-scm.com (188.114.99.224) port 80
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
< Date: Sat, 14 Oct 2023 15:03:45 GMT
< Connection: keep-alive
< Cache-Control: max-age=3600
< Expires: Sat, 14 Oct 2023 16:03:45 GMT
< Location: https://git-scm.com/
< Server: cloudflare
< CF-RAY: 8160b5fb8e490c54-DME- это HTTP-заголовок, который добавляется Cloudflare к ответу на запрос. Заголовок CF-RAY содержит уникальный идентификатор (Ray ID), который присваивается каждому запросу, проходящему через Cloudflare.
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host git-scm.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://git-scm.com/'
*   Trying 188.114.99.224:443...
* Connected to git-scm.com (188.114.99.224) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: git-scm.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Sat, 14 Oct 2023 15:03:45 GMT
< Content-Type: text/html; charset=utf-8
< Connection: keep-alive
< X-Frame-Options: SAMEORIGIN
< X-Xss-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Download-Options: noopen - это HTTP-заголовок, который указывает на то, что браузер не должен автоматически открывать загруженный файл, а должен предложить его сохранить на диск. Это может помочь предотвратить атаки, связанные с загрузкой вредоносных файлов, таких как файлы с расширением .exe или .bat.
< X-Permitted-Cross-Domain-Policies: none - это HTTP-заголовок, который указывает на то, что не разрешается загрузка данных приложения на другие домены. 
< Referrer-Policy: strict-origin-when-cross-origin - это HTTP-заголовок, который указывает на то, как браузер должен отправлять информацию о реферере (сайте, с которого был сделан запрос) при переходе с одного сайта на другой. Значение "strict-origin-when-cross-origin" означает, что для запросов в пределах текущего источника браузер будет отправлять полный URL-адрес в заголовке Referer, а для запросов на другой источник будет отправлять только источник (origin). Это помогает защитить конфиденциальность пользователей, предотвращая утечку информации о том, какие сайты они посещают.
< Cache-Control: public, max-age=14400
< Etag: W/"db69273d9410cbf4536e9d4b3a59685d" - это HTTP-заголовок, который используется для проверки версии ресурса. Значение заголовка ETag представляет собой идентификатор для конкретной версии ресурса. Он позволяет кэшам быть более эффективными и экономить пропускную способность, так как веб-сервер не должен повторно отправлять полный ответ, если содержимое не было изменено.
< X-Request-Id: 64c0ae81-7d55-4798-a03e-5a0924ffcccd - это HTTP-заголовок, который используется для идентификации конкретного запроса на сервер. Значение заголовка X-Request-Id представляет собой уникальный идентификатор, который генерируется на стороне сервера и возвращается в ответе на запрос. Этот идентификатор может быть использован для отслеживания запросов на сервере и для связывания различных записей в журналах, связанных с одним запросом. Заголовок X-Request-Id может быть полезен для отладки проблем с сервером и для анализа производительности
< X-Runtime: 0.022433 - это HTTP-заголовок, который используется для указания времени, затраченного на обработку запроса на сервере. 
< Via: 1.1 vegur
< CF-Cache-Status: HIT
< Age: 6539
< Server: cloudflare
< CF-RAY: 8160b6006bf35aaa-DME
<
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 301 Moved Permanently
Date: Sat, 14 Oct 2023 15:03:45 GMT
Connection: keep-alive
Cache-Control: max-age=3600
Expires: Sat, 14 Oct 2023 16:03:45 GMT
Location: https://git-scm.com/
Server: cloudflare
CF-RAY: 8160b5fb8e490c54-DME

HTTP/1.1 200 OK
Date: Sat, 14 Oct 2023 15:03:45 GMT
Content-Type: text/html; charset=utf-8
Connection: keep-alive
X-Frame-Options: SAMEORIGIN
X-Xss-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Download-Options: noopen
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: strict-origin-when-cross-origin
Cache-Control: public, max-age=14400
Etag: W/"db69273d9410cbf4536e9d4b3a59685d"
X-Request-Id: 64c0ae81-7d55-4798-a03e-5a0924ffcccd
X-Runtime: 0.022433
Via: 1.1 vegur
CF-Cache-Status: HIT
Age: 6539
Server: cloudflare
CF-RAY: 8160b6006bf35aaa-DME


* Connection #1 to host git-scm.com left intact
```

### JetBrains

Скрипт при помощи которого получил информацию о сайте:

`curl jetbrains.com -I -v -L -k`

Ответ: 

```shell
* processing: jetbrains.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 52.85.49.59:80...
* Connected to jetbrains.com (52.85.49.59) port 80
> HEAD / HTTP/1.1
> Host: jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0< HTTP/1.1 301 Moved Permanently
< Server: CloudFront
< Date: Sat, 14 Oct 2023 15:39:55 GMT
< Content-Type: text/html
< Content-Length: 167
< Connection: keep-alive
< Location: https://jetbrains.com/
< X-Cache: Redirect from cloudfront
< Via: 1.1 e524b8092e2dda964664df0dfa35341a.cloudfront.net (CloudFront) - это ссылка на Amazon CloudFront, который является веб-сервисом, ускоряющим распространение статического и динамического веб-контента, таких как .html, .css, .js и файлов изображений, для пользователей
< X-Amz-Cf-Pop: HEL50-C2 - это заголовок HTTP-ответа, который указывает на точку присутствия CloudFront (POP), которая обслужила запрос. POP - это физическое местоположение, где развернуты кэш-серверы CloudFront для кэширования и доставки контента пользователям
< X-Amz-Cf-Id: gZiT9B-u3eULpusb5gLX8AHcWfHiViBHkiJLvu48p5KcOns1AZc0pQ==  - это заголовок HTTP-ответа, который является идентификатором запроса для внутренней отладки в CloudFront.Этот заголовок не является заголовком авторизации и не используется для проверки подлинности запроса
<
  0   167    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host jetbrains.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://jetbrains.com/'
*   Trying 52.85.49.59:443...
* Connected to jetbrains.com (52.85.49.59) port 443
* schannel: disabled automatic use of client certificate
* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 308 Found
< Server: CloudFront
< Date: Sat, 14 Oct 2023 15:39:55 GMT
< Content-Length: 0
< Connection: keep-alive
< Location: https://www.jetbrains.com/
< Strict-Transport-Security: max-age=31536000;
< X-Cache: FunctionGeneratedResponse from cloudfront
< Via: 1.1 add50c826a69b24be8ba05da744b9204.cloudfront.net (CloudFront) - это заголовок HTTP-ответа, который указывает на то, что ответ на запрос был сгенерирован функцией CloudFront Functions. CloudFront Functions - это новая платформа бессерверного выполнения скриптов, которая позволяет запускать легковесный JavaScript-код на более чем 218 периферийных местоположениях CloudFront
< X-Amz-Cf-Pop: HEL50-C2
< X-Amz-Cf-Id: FQhlEUt528ib5RVEwkclpOYOPB6pn2Y2V86iYa2pLCieARTAYpRJ9Q==
<
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
* Connection #1 to host jetbrains.com left intact
* Issue another request to this URL: 'https://www.jetbrains.com/'
*   Trying 108.156.22.30:443...
* Connected to www.jetbrains.com (108.156.22.30) port 443
* schannel: disabled automatic use of client certificate
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: www.jetbrains.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Type: text/html; charset=utf-8
< Content-Length: 47748
< Connection: keep-alive
< Date: Sat, 14 Oct 2023 15:38:16 GMT
< Server: nginx
< X-Content-Type-Options: nosniff
< Referrer-Policy: same-origin
< Expires: Sat, 14 Oct 2023 15:38:16 GMT
< Cache-Control: max-age=0
< Pragma: no-cache
< X-Frame-Options: DENY
< X-Content-Type-Options: nosniff
< X-Xss-Protection: 1; mode=block
< Strict-Transport-Security: max-age=31536000;
< Vary: Accept-Encoding
< Via: 1.1 8f67e81092ebd47bc649d954af911676.cloudfront.net (CloudFront)
< Age: 100
< Set-Cookie: cf_country-region=RU-VOR; Domain=jetbrains.com; Path=/; Secure
< X-Cache: Hit from cloudfront
< X-Amz-Cf-Pop: HEL51-P1
< X-Amz-Cf-Id: FKlfuUeS-adjHwKmJXYmlxre1S44HacltZWhHMVxOw8UYMMra7ZH3A==
<
  0 47748    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 301 Moved Permanently
Server: CloudFront
Date: Sat, 14 Oct 2023 15:39:55 GMT
Content-Type: text/html
Content-Length: 167
Connection: keep-alive
Location: https://jetbrains.com/
X-Cache: Redirect from cloudfront
Via: 1.1 e524b8092e2dda964664df0dfa35341a.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: HEL50-C2
X-Amz-Cf-Id: gZiT9B-u3eULpusb5gLX8AHcWfHiViBHkiJLvu48p5KcOns1AZc0pQ==

HTTP/1.1 308 Found
Server: CloudFront
Date: Sat, 14 Oct 2023 15:39:55 GMT
Content-Length: 0
Connection: keep-alive
Location: https://www.jetbrains.com/
Strict-Transport-Security: max-age=31536000;
X-Cache: FunctionGeneratedResponse from cloudfront - это заголовок HTTP-ответа, который указывает на то, что ответ на запрос был сгенерирован функцией CloudFront Functions
Via: 1.1 add50c826a69b24be8ba05da744b9204.cloudfront.net (CloudFront)
X-Amz-Cf-Pop: HEL50-C2
X-Amz-Cf-Id: FQhlEUt528ib5RVEwkclpOYOPB6pn2Y2V86iYa2pLCieARTAYpRJ9Q==

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 47748
Connection: keep-alive
Date: Sat, 14 Oct 2023 15:38:16 GMT
Server: nginx
X-Content-Type-Options: nosniff
Referrer-Policy: same-origin
Expires: Sat, 14 Oct 2023 15:38:16 GMT
Cache-Control: max-age=0
Pragma: no-cache
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-Xss-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000;
Vary: Accept-Encoding
Via: 1.1 8f67e81092ebd47bc649d954af911676.cloudfront.net (CloudFront)
Age: 100
Set-Cookie: cf_country-region=RU-VOR; Domain=jetbrains.com; Path=/; Secure  - это заголовок HTTP-ответа, который устанавливает cookie на компьютере пользователя.Значение "cf_country-region=RU-VOR" в заголовке указывает на имя и значение cookie, которые устанавливаются. В данном случае, значение cookie - "RU-VOR", указывает на регион пользоДомен "jetbrains.com" в заголовке указывает на домен, на котором будет доступна cookie.Путь "/" указывает на то, что cookie будет доступна на всех страницах сайта.Secure - это атрибут cookie, который указывает на то, что cookie должна быть отправлена только через защищенное соединение HTTPS.
X-Cache: Hit from cloudfront - это заголовок HTTP-ответа, который указывает на то, что запрошенный объект был найден в кэше CloudFront и был непосредственно доставлен зрителю из кэша
X-Amz-Cf-Pop: HEL51-P1
X-Amz-Cf-Id: FKlfuUeS-adjHwKmJXYmlxre1S44HacltZWhHMVxOw8UYMMra7ZH3A==


* Connection #2 to host www.jetbrains.com left intact
```

### VSC

Скрипт при помощи которого получил информацию о сайте:

`curl code.visualstudio.com -I -v -L -k`

Ответ: 

```shell
* processing: code.visualstudio.com
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 13.107.246.53:80...
* Connected to code.visualstudio.com (13.107.246.53) port 80
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 307 Temporary Redirect
< Content-Length: 0
< Location: https://code.visualstudio.com/
< X-Azure-Ref: 0i2otZQAAAAAOk8L4ibUCTI9hzPdqAB8KU1RPRURHRTEzMjEAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5 - это заголовок HTTP-ответа, который предоставляет уникальную строку идентификации запроса, обслуженного Azure Front DoorЭта строка идентификации используется для поиска запроса в журналах доступа и является критически важной для устранения неполадок.
< Date: Mon, 16 Oct 2023 16:53:30 GMT
<
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Connection #0 to host code.visualstudio.com left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: 'https://code.visualstudio.com/'
*   Trying 13.107.246.53:443...
* Connected to code.visualstudio.com (13.107.246.53) port 443
* schannel: disabled automatic use of client certificate
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0* using HTTP/1.x
> HEAD / HTTP/1.1
> Host: code.visualstudio.com
> User-Agent: curl/8.2.1
> Accept: */*
>
< HTTP/1.1 200 OK
< Content-Length: 50362
< Content-Type: text/html; charset=utf-8
< Accept-Ranges: bytes
< ETag: W/"c4ba-Pwvrl5zGB8Qn8ogdi2Rz5RXYg3U"
< Strict-Transport-Security: max-age=31536000; includeSubDomains
< Content-Security-Policy: frame-ancestors 'self' - это заголовок HTTP-ответа, который указывает на список допустимых родительских источников, которые могут встраивать текущий ресурс в элементы <frame>, <iframe>, <object> или <embed>.В данном случае, значение "self" указывает на то, что текущий ресурс может быть встроен только в элементы <frame>, <iframe>, <object> или <embed>, которые имеют тот же источник, что и текущий ресур
< X-Frame-Options: SAMEORIGIN
< X-XSS-Protection: 1; mode=block
< X-Content-Type-Options: nosniff
< X-Powered-By: ASP.NET 
< x-azure-ref: 0jGotZQAAAACQuqDL8uGdSYBER6vPEmPLU1RPRURHRTEzMTgAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5- это заголовок HTTP-ответа, который предоставляет уникальную строку идентификации запроса, обслуженного Azure Front Door
< X-Cache: CONFIG_NOCACHE -нестандартный заголовок.В названии,скорее всего,есть то,зачем он нужен.
< Date: Mon, 16 Oct 2023 16:53:31 GMT
<
  0 50362    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0HTTP/1.1 307 Temporary Redirect
Content-Length: 0
Location: https://code.visualstudio.com/
X-Azure-Ref: 0i2otZQAAAAAOk8L4ibUCTI9hzPdqAB8KU1RPRURHRTEzMjEAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
Date: Mon, 16 Oct 2023 16:53:30 GMT

HTTP/1.1 200 OK
Content-Length: 50362
Content-Type: text/html; charset=utf-8
Accept-Ranges: bytes
ETag: W/"c4ba-Pwvrl5zGB8Qn8ogdi2Rz5RXYg3U"
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: frame-ancestors 'self'
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-Powered-By: ASP.NET
x-azure-ref: 0jGotZQAAAACQuqDL8uGdSYBER6vPEmPLU1RPRURHRTEzMTgAYmU4N2RjNmQtNDBmOS00NWIwLTg4MTAtOTkxMDg3ZWY4YjI5
X-Cache: CONFIG_NOCACHE
Date: Mon, 16 Oct 2023 16:53:31 GMT


* Connection #1 to host code.visualstudio.com left intact
```