<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Telegram</title>

        @vitereactrefresh
        @vite('resources/js/app.js')

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=Roboto:400,500,600&display=swap" rel="stylesheet" />
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
